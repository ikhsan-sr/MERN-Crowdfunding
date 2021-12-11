import mongoose from "mongoose";

const Publisher = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  code_name: {
    type: String
  },
  ref_id: {
    type: String
  },
  fb_pixel: {
    type: String
  },
  twitter: {
    type: Mixed
  },
  instagram: {
    type: String
  },
  facebook: {
    type: Mixed
  },
  description: {
    type: String
  },
  address: {
    type: String
  }
});

export default mongoose.model('Publishers', Publisher);