import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const postModel = Schema({
    title: {
        type: String,
        required: "Enter a name"
    },
    description: {
        type: Text,
        required: "Enter a description"
    },
    image: {
        data: Buffer,
        contentType: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive']
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});