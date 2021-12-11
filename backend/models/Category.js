import mongoose from "mongoose";

const Category = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true
    }
});

export default mongoose.model('Categories', Category);