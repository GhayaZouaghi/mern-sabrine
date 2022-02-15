const Profile = require("../model/Profile");
const Post = require("../model/Post");

// current profile
exports.currentPro = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      "user",
      ["name", "avatar"]
    );

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.status(200).send({ msg: "current Profile", profile });
  } catch (err) {
    console.error(err.message);
    res.status(400).send({ msg: "Server Error" });
  }
};

// delete profile user and posts

exports.deletePro = async (req, res) => {
  try {
    //remove user post
    await Post.deleteMany({ user: req.user.id });
    //remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    //remove user
    // await User.findOneAndRemove({ _id: req.user.id });

    res.status(200).send({ msg: "Profile and respective posts deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// add experience

exports.addExp = async (req, res) => {
  const { title, company, location, from, to, current, description } = req.body;

  const newExp = {
    title,
    company,
    location,
    from,
    to,
    current,
    description,
  };

  try {
    const profile = await Profile.findOne({ user: req.user.id });
    profile.experience.unshift(newExp);

    await profile.save();

    res.status(200).send({ msg: "experience added successfuly", profile });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ msg: "Server Error" });
  }
};

// delete experience

exports.deleteExp = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = profile.experience
      .map((item) => item.id)
      .indexOf(req.params.exp_id);
    profile.experience.splice(removeIndex, 1);
    await profile.save();

    res.status(200).send({ msg: "Experience deleted !...", profile });
  } catch (error) {
    console.error(error.message);
    res.status(400).send("Server Error");
  }
};

// add education

exports.addEduc = async (req, res) => {
  const { school, degree, fieldofstudy, from, to, current, description } =
    req.body;

  const newEdu = {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  };

  try {
    const profile = await Profile.findOne({ user: req.user.id });
    console.log(profile);
    profile.education.unshift(newEdu);
    await profile.save();

    res.status(200).send({ msg: "Education added succesfully", profile });
  } catch (error) {
    console.error(error.message);
    res.status(400).send({ mag: "Action Failed....!" });
  }
};


// delete education
exports.deleteEdu= async(req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = profile.education
      .map((item) => item.id)
      .indexOf(req.params.edu_id);

    profile.education.splice(removeIndex, 1);
    await profile.save();

    res.status(200).send({msg: "Education deleted succesfully", profile});
  } catch (error) {
    console.error(error.message);
    res.status(400).send({msg:"action Failed...!"});
  }
};
