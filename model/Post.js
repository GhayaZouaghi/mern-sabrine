// require mongoose
const mongoose = require("mongoose");

// require schema
const { Schema, model } = mongoose;

// create profile schema
const PostSchema = new Schema(
  {
    userID: {
      type: String,
      ref: "user",
      required: true,
    },
    message: {
      type: String,
      trim: true,
      required: true,
      maxlength: 1000,
    },
    picture: {
      type: String,
    },
    video: {
      type: String,
    },

    likers: {
      /* trouvers tous le spers qui ont aimé le post*/ type: [String],
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    comments: {
      type: [
        {
          commenterID: String,
          name: String,
          text: String,
          timesLamp: Number,
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Post = model("post", PostSchema);
