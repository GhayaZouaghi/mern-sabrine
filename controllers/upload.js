const Post = require("../model/Post");
const User = require("../model/User");
const ObjectID = require("mongoose").Types.ObjectID;


exports.deletePro = async (req, res) => {
    try {
        // Remove User Posts
        await Post.deleteMany({ user: req.user.id });
        // Remove Profile
        await Profile.findOneAndDelete({ user: req.user.id });
        // // Remove User
        await User.findOneAndDelete({ _id: req.user.id });
    
        res.stauts(200).send({ msg: "User deleted" });
      } catch (error) {
        console.error(error.message);
        res.status(400).send({msg:"Failed action of delete...!!"});      }
    };