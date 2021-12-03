const { User } = require("../../models");
const router = require("express").Router();

function newPassword(length = 20) {
  const charset = "abcdefghijklmnopqrstuvwxyz";
  let password = "";
  for (let index = 0; index < length; index++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  return password;
}

router.post("/forgot-password", async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email, license_number: req.body.licenseNumber },
    });
    if (!user) {
      res.status(400).json({ message: "No user found" });
      return;
    }
    const password = newPassword();

    user.password = password;

    const saved = await user.save();

    // send email to the user with new password
    res.status(200).json({ message: "Password updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting all the users" });
  }
});

module.exports = router;
