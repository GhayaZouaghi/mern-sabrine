// require mongoose
const mongoose = require("mongoose");

// require schema
const { Schema, model } = mongoose;

// create profile schema
const PostSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    // userID: {
    //   type: String,
    //   ref: "user",
    //   required: true,
    // },
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
    //     comments: {
    //       type: [
    //         {
    //           commenterID: String,
    //           name: String,
    //           text: String,
    //           timesLamp: Number,
    //         },
    //       ],
    //       required: true,
    //     },
    //   },

    comments: {
      type: [
        {
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
          },
          text: {
            type: String,
            required: true,
          },
          name: {
            type: String,
          },
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);


module.exports = Post = model("post", PostSchema);
