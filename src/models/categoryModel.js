import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const categoryModel = Schema({
    name: {
        type: String,
        required: "Enter a name"
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