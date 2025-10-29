import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoScheme = new Schema(
    {
        videoFile: {
            type: String, // Cloudnary URL
            required: [true, "Video is required..."],
        },
        thumbnail: {
            type: String,
            required: [true, "Thumbnail is required..."],
        },
        title: {
            type: String,
            required: [true, "Title is required..."],
        },
        description: {
            type: String,
            required: [true, "Description is required..."],
        },
        duration: {
            type: Number,
            required: [true, "Duration is required..."],
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

videoScheme.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoScheme);
