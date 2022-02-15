const Profile=require("../model/Profile");

// exports.currentProfile = async(req,res)=>{
//     try {
//     const profileToFind= await (await Profile.findOne({user: req.user.id})).populated('user',
//     ['name', 'email','phone']);
//     if(!profileToFind) {
//         return res.status(400).send ({msg: 'There is no profile for this user'});
//     }
//         res.json (profileToFind)

//     } catch (error) {
//         return res.status(400).send({ msg: "Fail...!!" });

//     }
// }

// create or update user Profile

exports.createUp = async (res, req) => {
  const {
    company,
    location,
    picture,
    bio,
    status,
    githubusername,
    skills,
    linkedin,
    youtube,
  } = req.body;

  //builds the profile object
  const profileFields = {};
  profileFields.user = req.params.id;
  if (company) profileFields.company = company;
  if (location) profileFields.location = location;
  if (picture) profileFields.picture = location;
  if (bio) profileFields.bio = bio;
  if (status) profileFields.status = status;
  if (githubusername) profileFields.githubusername = githubusername;
  if (skills) {
    profileFields.skills = skills.split(",").map((skill) => skill.trim());
  }

  //Build social media object
  profileFields.social = {};
  if (linkedin) profileFields.social.linkedin = linkedin;
  if (youtube) profileFields.social.youtube = youtube;
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      //    update profile
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.status(200).send({ msg: "Profile updated succefully", profile });
      }
    //   create new profile
    const newProfile = new Profile(profileFields); 
     await newProfile.save(); 
     res.status(200).send({ msg: "Profile created succefully", newProfile });
    
  } catch (error) {
     res.status(400).send('Failed action...!!'); 
  }
};

// delete profile user and posts

exports.deletePro =async (req, res) => {
    try {
      const profileId = req.params.id;
      //remove user profile 
          await Profile.deleteOne({ _id: profileId });
        //   Removes the user 
        await User.delete({_id: profileID});
      res.status(200).send({ msg: "This profile is deleted", profileId });
    } catch (error) {
      res.status(400).send({ msg: "Can not delete profile", error });
    }
};