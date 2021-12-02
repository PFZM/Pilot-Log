const router = require("express").Router();
const { User, LogData, Aircraft } = require("../models");
const withAuth = require("../utils/auth");

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const logData = await LogData.findAll({
      include: [
        { model: User, attributes: { exclude: ["password"] } },
        { model: Aircraft },
      ],
      where: {
        pilot_id: req.session.user_id,
      },
    });
    const logs = logData.map((log) => log.get({ plain: true }));
    res.render("dashboard", {
      logs,
      logged_in: req.session.logged_in,
    });
    //res.status(200).json(logs);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/addNew", withAuth, async (req, res) => {
  try {
    const aircraftData = await Aircraft.findAll();
    const aircrafts = aircraftData.map((aircraft) =>
      aircraft.get({ aircraft: true })
    );
    res.render("logData", {
      aircrafts,
      logged_in: req.session.logged_in,
    });
    //res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get LogData by specific ID
router.get("/logs/:id", withAuth, async (req, res) => {
  try {
    const logDataID = await LogData.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
        },
        {
          model: Aircraft,
        },
      ],
    });
    const logData = logDataID.get({ plain: true });
    res.render("editData", {
      logData,
      logged_in: req.session.logged_in,
    });
    // console.log("**** render edit screen")
    // console.log(logData)
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to redirect to signUp
router.get("/signUp", async (req, res) => {
  try {
    res.render("signUp");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

module.exports = router;
