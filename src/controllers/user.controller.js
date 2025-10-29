import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiErrors.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { fileUploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = asyncHandler(async (req, res) => {
    // get user detail from frontend
    // validation :  not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res

    const { fullName, email, username, password } = req.body;
    // console.log(email);

    // if (fullName === "") {
    //     throw new ApiError(404, "Full name required.");
    // }

    if (
        [fullName, email, username, password].some(
            (fields) => fields.trim() === ""
        )
    ) {
        throw new ApiError(404, "All fields are rquired.");
    }

    const existedUser = await User.findOne({
        $or: [{ username }, { email }],
    });

    if (existedUser) {
        throw new ApiError(
            409,
            "User with email or username is already existsk"
        );
    }
    // console.log(req.files);

    const avatarLocalPath = req.files?.avatar[0]?.path;
    // const coverImageLocalPath = req.files?.coverImage[0]?.path;
    let coverImageLocalPath;
    if (
        req.files &&
        Array.isArray(req.files.coverImage) &&
        req.files.coverImage.length > 0
    ) {
        coverImageLocalPath = req.files.coverImage[0].path;
    }

    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar file is required.");
    }

    const avatar = await fileUploadOnCloudinary(avatarLocalPath);
    const coverImage = await fileUploadOnCloudinary(coverImageLocalPath);

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required.");
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password,
        username: username.toLowerCase(),
    });

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    );

    if (!createdUser) {
        throw new Error(500, "Something went wrong while registring the user");
    }

    return res
        .status(201)
        .json(
            new ApiResponse(200, createdUser, "User Registered Successfully")
        );

    // res.status(200).json({ message: "ok" });
});

export { registerUser };
