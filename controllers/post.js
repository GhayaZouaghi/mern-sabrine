const Post = require("../model/Post");
const User = require("../model/User");
const ObjectID = require("mongoose").Types.ObjectID;
/* pour verifier que le paramatère passer à chauqe fois , existe dans la base de données*/

// !CRUD post controllers
// read route
// exports.readPost = (req, res) => {
//   Post.find((err, docs) => {
//     if (!err) res.send(docs);
//     else console.log("Error to get date..!!!", err);
//   }).sort({ createdAt: -1 });
//   //  ?montrer les postes les plus récents
// };

exports.listPosts = async (req, res) => {
  try {
    const listPosts = await Post.find();
    res.status(200).send({ msg: "This is the list of posts", listPosts });
  } catch (error) {
    res.status(400).send({ msg: "Can not get posts", error });
  }
};

// create route
exports.createPost = async (req, res) => {
  const adPost = req.body;
  const newPost = new Post({
    userID: adPost.userID,
    message: adPost.message,
    video: adPost.video,
    likers: [],
    like: adPost.like,
    comments: [],
  });
  try {
    const post = await newPost.save();
    return res.status(200).send({ msg: " posted successfully...!!", post });
  } catch (error) {
    return res.status(400).send({ msg: " post failed...!!!", error });
  }
};

// update Route
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params._id);
    console.log(post);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).send("the post has been updated");
    } else {
      res.status(403).send("you can update only your post");
    }
  } catch (error) {
    res.status(400).send({ msg: "Can not be updated", error });
  }
};

// delete route

exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    await Post.deleteOne({ _id: postId });
    res.status(200).send({ msg: "This post is deleted", postId });
  } catch (error) {
    res.status(400).send({ msg: "Can not delete deleted", error });
  }
};
// /get a one post by  ID
exports.getByID = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    // console.log(post);
    res.status(200).send(post);
  } catch (err) {
    res.status(400).send(err);
  }
};

//! like &&unlike controller

exports.likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    console.log({ post });
    if (!post.likers.includes(req.body.userID)) {
      await Post.updateOne(
        { _id: req.params.id },
        {
          // likes: 2,
          $inc: { likes: 1 },
          $push: { likers: req.body.userID },
        }
        // { new: true }
      ),
        console.log(post);
      res.status(200).send({ msg: "The post has been liked" });
    } else {
      await Post.updateOne(
        { _id: req.params.id },

        {
          $inc: { likes: -1 },
          $pull: { likers: req.body.userID },
        }
        // { new: true }
      ),
        res.status(200).send("The post has been disliked");
    }
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "...Action failed!!!" }] });
  }
};

// !comments controllers

// commenter un post

exports.commentPost = async (req, res) => {
  try {
    const { _id } = req.params;

    const comment = req.body;

    const user = await User.findById(req.user.id);

    const postTofind = await Post.findOne({ _id });

    console.log(postTofind);
    // res.status(200).send({ msg: "This post is geted", postTofind });

    const result = await Post.findOneAndUpdate(
      { _id: postTofind._id },
      {
        $push: {
          comments: {
            commenterID: user.commenterID,
            name: user.name,
            text: comment.text,
          },
        },
      },
      { new: true }
    );
    res.status(200).send(postTofind.comments);
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "comment failed!!!" }] });
  }
};
// delete comments controller

exports.deleteComment = async (req, res) => {
  try {
    const { _id } = req.params;

    const comment = req.body;

    const user = await User.findById(req.user.id);

    const postTofind = await Post.findOne({ _id });

    console.log(postTofind);
    // res.status(200).send({ msg: "This post is geted", postTofind });

    const result = await Post.findOneAndUpdate(
      { _id: postTofind._id },
      {
        $pull: {
          comments: {
            _id: req.body.commentId,
          },
        },
      },
      { new: true }
    );
    res.status(200).send(postTofind.comments);
  } catch (error) {
    res.status(400).send({ errors: [{ msg: " action failed....!!!" }] });
  }
};

//  edit comments controllers

exports.editComment = async (req, res) => {
  try {
    const { _id } = req.params;
    const newComment = req.body;

    let result = await Post.updateOne({ _id }, { $set: { ...newComment } });
    // console.log(result);

    res.status(200).send({ msg: "This comment is updated...!!!" });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Can not update this comment" }] });
  }
};
