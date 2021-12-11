import mongoose from "mongoose";

const Banner = mongoose.Schema({
    action: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
    },
    image_url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: false
    }
});

export default mongoose.model('Banners', Banner);

