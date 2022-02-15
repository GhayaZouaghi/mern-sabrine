// require mongoose
const mongoose = require("mongoose");

// require schema
const { Schema, model } = mongoose;

// create profile schema
const ProfileSchema = new Schema({
  // reference another schema in mongoose ('user')
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  company: {
    type: String,
  },

  location: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  picture: {
    type: String,
    default: "/upload/profile/avatar.png",
  },
  bio: {
    type: String,
  },
  githubusername: {
    type: String,
  },
  experience: [
    {
      title: {
        type: String,
        required: true,
      },
      company: {
        type: String,
        required: true,
      },
      location: {
        type: String,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
  education: [
    {
      school: {
        type: String,
        required: true,
      },
      degree: {
        type: String,
        required: true,
      },
      fieldofstudy: {
        type: String,
        required: true,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
      },
      current: {
        type: Boolean,
        default: false,
      },
      description: {
        type: String,
      },
    },
  ],
  social: {
    linkedin: {
      type: String,
    },
    youtube: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
  cloudinary_id: {
    type: String,
  },

});

module.exports = Profile = model("profile", ProfileSchema);
