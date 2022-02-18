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

// const Profile = require("../model/Profile");
// const Category = require("../model/category.model");

// exports.createCategory = (req, res) => {
//   let name = req.body.name;
//   let image = req.file.path;
//   console.log(name, image);
//   const category = new Category({
//     name: name,
//     image: image,
//   });
//   category.save((err, category) => {
//     if (err) {
//       console.log(err);
//       return res.status(400).json({
//         errors: err.meesage,
//       });
//     }
//     return res.json({
//       message: "Created category successfully",
//       category,
//     });
//   });
// };
