const { User } = require("../../models");
const router = require("express").Router();
const transporter = require("../../config/connectionEmail");

function newPassword(length = 12) {
  const charset = "abcdefghijklmnopqrstuvwxyz123456789";
  let password = "";
  for (let index = 0; index < length; index++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  return password;
}

async function sendEmailpassword(email, password, res) {
  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"The Captain Log" <pilotlogapp@outlook.com>', // sender address
      to: `${email}`, // list of receivers
      subject: "The Captain's Log -  Password", // Subject line
      text: `Your new password is ${password}`, // plain text body
      html: `<body>
            <p>Hello,</p>
            <p>A password reset was requested for this email address (${email}).
            If you requested this reset, your new password is: ${password}</p>
            <p><a href="https://pilots-logbook.herokuapp.com/">Login with your new password!</a></p>
            </body>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    return true;
  } catch (err) {
    console.error(err);

    return false;
  }
}
// forgot password 
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
    const sendEmail = await sendEmailpassword(user.email, password, res);

    if (!sendEmail) {
      res.status(500).json({ message: "Error sending email" });
      return;
    }

    res.status(200).json({ message: "Password updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting all the users" });
  }
});

module.exports = router;
