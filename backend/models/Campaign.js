import mongoose from "mongoose";

const Campaign = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  permalink: {
    type: String,
    required: true
  },
  headline: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  plain_content: {
    type: String
  },
  category: {
    id: {
      type: Number,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
  },
  assets: {
    cover: {
      type: String,
      required: true
    },
    image_url: {
      type: String,
      required: true
    },
    image_url_thumb: {
      type: String,
      required: true
    },
  },
  target: {
    target_status: {
      type: String,
    },
    target_type: {
      type: String
    },
    target_at: {
      type: Date,
      required: true
    },
    target_amount: {
      type: String
    },
    over_at: {
      type: Number
    },
  },
  collect: {
    collect_amount: {
      type: String
    },
    total_donatur: {
      type: String
    },
    percent: {
      type: Number
    }
  },
  status: {
    is_featured: {
      type: Boolean
    },
    is_populer_search: {
      type: Boolean
    },
    is_favorite: {
      type: Boolean
    }
  },
  status_date: {
    type: Boolean
  },
  publisher: {
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
      type: String
    },
    instagram: {
      type: String
    },
    facebook: {
      type: String
    },
    description: {
      type: String
    },
    address: {
      type: String
    }
  },
  fb_pixel: {
    type: String
  },
  toggle_dana: {
    type: String
  },
  program_created_at: {
    type: Date
  },
  tags: {
    type: String
  },
});

export default mongoose.model('Campaigns', Campaign);