exports.isAdmin = async (req, res, next) => {
  const { role, id } = req.body;
  // Verifying if role and id is presnt
  if (role && id) {
    // Verifying if the value of role is admin
    if (role === "admin") {
      await User.findById(id);
    } else {
      res.status(400).send({
        message: "Role is not admin",
      });
    }
  }
};
