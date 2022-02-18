// !express require
const express = require("express");
const router = express.Router();

// !upload image config
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
// const path = require("path");
// !social config
const request = require("request");
// const config = require("config");
const normalize = require("normalize-url");

//! models import
const Profile = require("../model/Profile");
const User = require("../model/User");
const Post = require("../model/Post");

// !controllers import
const {
  deletePro,
  currentPro,
  addExp,
  deleteExp,
  addEduc,
  deleteEdu,
} = require("../controllers/profile");
const { createCategory } = require("../controllers/upload");
// !middleware import
const isAuth = require("../middleware/isAuth");

const {
  createValidator,
  educValidator,
  experienceValidator,
  validations,
} = require("../middleware/profileValidator");

// test
router.get("/test", (req, res) => {
  res.send("hiiii test");
});

// router.post('/category', uploadMulter, createCategory)
// !cloudinary
router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    var result = await cloudinary.uploader.upload(req.file.path);
    // console.log(req.file.path);
    //    let result=await cloudinary.uploader.upload("image")
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
  }
});

// @route POST api/profile
// @desc POST current users profile
// @access Private
// router.post("/", isAuth,createValidator(), validations,createUp)
router.post("/", isAuth, createValidator(), validations, async (req, res) => {
  const {
    company,
    location,
    bio,
    status,
    githubusername,
    skills,
    youtube,
    facebook,
    twitter,
    instagram,
    linkedin,
  } = req.body;

  // Build Profile Object
  const profileFields = {
    user: req.user.id,
    company,
    location,
    bio,
    skills: Array.isArray(skills)
      ? skills
      : skills.split(",").map((skill) => " " + skill.trim()),
    status,
    githubusername,
  };

  // Build social object and add to profileFields
  //   const socialfields = { youtube, twitter, instagram, linkedin, facebook };

  //   for (const [key, value] of Object.entries(socialfields)) {
  //     // if (value.length > 0)
  //       socialfields[key] = normalize(value, { forceHttps: true });
  //   }
  //   profileFields.social = socialfields;

  try {
    let profile = await Profile.findOne({ user: req.user.id });

    if (profile) {
      // Update
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );

      res.status(200).send({ msg: "Profile updated succefully", profile });
    }

    //   create new profile
    const newProfile = new Profile(profileFields);
    await newProfile.save();
    res.status(200).send({ msg: "Profile created succefully", newProfile });
  } catch (error) {
    res.status(400).send({ msg: "Failed action...!!" });
  }
});

// @route DELETE api/profile
// @desc DELETE profile, user & posts
// @access Private
router.delete("/", isAuth, deletePro);

// @route GET api/profile
// @desc GET current users profile
// @access Public
router.get("/me", isAuth, currentPro);

// ? experience and education routes

// @route PUT api/profile
// @desc  Add profile experience
// @access Private
router.put("/experience", isAuth, experienceValidator(), validations, addExp);

// @route DELETE api/experience/:exp_id
// @desc DELETE experience from profile
// @access Private

router.delete("/experience/:exp_id", isAuth, deleteExp);

// @route PUT api/profile/education
// @desc  Add profile education
// @access Private
router.put("/education", isAuth, educValidator(), validations, addEduc);

// @route DELETE api/education/:edu_id
// @desc DELETE education from profile
// @access Private
router.delete("/education/:edu_id", isAuth, deleteEdu);

module.exports = router;
