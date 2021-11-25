const router = require("express").Router();
const userRoutes = require("./userRoutes");
const logDataRoutes = require("./logDataRoutes");

router.use("/users", userRoutes);
router.use("/logData", logDataRoutes);

module.exports = router;
