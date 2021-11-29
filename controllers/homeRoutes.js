const router = require("express").Router();
const { User, LogData, Aircraft } = require("../models");
const withAuth = require("../utils/auth");

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


router.get("/login", (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
    res.render("login");
  });
  
  
module.exports = router;
