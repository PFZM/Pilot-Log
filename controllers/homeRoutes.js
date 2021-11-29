const router = require("express").Router();
const { User, LogData, Aircraft } = require("../models");
const withAuth = require("../utils/auth");


router.get("/allLogData", withAuth, async (req, res) => {
  try {
    const logData = await LogData.findAll({
      include: [{ model: User , attributes: {exclude: ["password"]}}, { model: Aircraft }],
      where: {
        //pilot_id: req.session.user_id,
        pilot_id: 1
      },
    });
    const logs = logData.map((log) => log.get({ plain: true }));
    res.status(200).json(logs);
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
router.get("/logData/:id", withAuth, async (req, res) => {
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

    res.render("logData", {
      ...logData,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get("/", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/allLogData");
    return;
  }
  res.render("login");
});

module.exports = router;
