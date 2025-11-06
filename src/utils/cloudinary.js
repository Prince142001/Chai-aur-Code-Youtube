import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const fileUploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        });
        // file has been uploaded successfully
        // console.log("File is uploaded on cloudinary", response.url);
        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
    }
};

const getPublicIdFromUrl = (url) => {
    if (!url) return null;
    // Example URL: "https://res.cloudinary.com/your_cloud/image/upload/v123456/folder/image_id.jpg"
    try {
        const parts = url.split("/");
        const uploadIndex = parts.indexOf("upload");
        if (uploadIndex === -1) return null;

        // Get "folder/image_id.jpg"
        const publicIdWithExtension = parts.slice(uploadIndex + 2).join("/");
        // Get "folder/image_id"
        const publicId = publicIdWithExtension
            .split(".")
            .slice(0, -1)
            .join(".");
        return publicId;
    } catch (error) {
        console.log("Error parsing Cloudinary URL:", error);
        return null;
    }
};

const fileDeleteOnCloudinary = async (fileUrl) => {
    const publicId = getPublicIdFromUrl(fileUrl);
    if (!publicId) {
        console.log("Could not extract public_id from URL:", fileUrl);
        return null; // No valid public ID found
    }

    try {
        // By default, resource_type is "image"
        const result = await cloudinary.uploader.destroy(publicId);
        console.log("Cloudinary delete result:", result);
        return result;
    } catch (error) {
        console.error("Error deleting file from Cloudinary:", error);
        return null;
    }
};

// --- UPDATE YOUR EXPORTS ---

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_SECRET,
});

export { fileUploadOnCloudinary, fileDeleteOnCloudinary };
