const router = require("express").Router();
const userRoutes = require("./userRoutes");
const logDataRoutes = require("./logDataRoutes");
const forgotPasswordRoutes = require("./forgotPassword");

router.use("/users", userRoutes);
router.use("/logData", logDataRoutes);
router.use(forgotPasswordRoutes);

module.exports = router;
