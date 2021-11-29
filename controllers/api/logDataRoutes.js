const router = require("express").Router();
const { LogData } = require("../../models");
const withAuth = require("../../utils/auth");

// Create new LogData
router.post("/", withAuth, async (req, res) => {
  //req.body looks like this
  // {
  //      "aircraft_id":"1", - From drop down list
  //      "dual":"false", - check box
  //      "instructor_name": "null", input box
  //      "departure_airport": YSSY, input box
  //      "departure_time":"08:00", formatted input box
  //      "arrival_airport":"YMER"
  //      "arrival_time":"11:30",
  //      "approaches":"1",
  //      "landings":"1",
  //      "comments":"very noisy passengers"
  //      "total_intrument_time": "1.5" - input box
  //      "total_time" : "2.0" - input box
  // }
  //
  //    pilot_id : req.session.user_id

  try {
    const logData = await LogData.create({
      ...req.body,
      pilot_id: req.session.user_id,
    });
    res.status(200).json(logData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating log" });
  }
});

// Update a log by its 'id' value
router.put("/:id", withAuth, async (req, res) => {
  try {
    const logData = await LogData.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(logData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating log" });
  }
});

// Delete specific log by its 'id' value
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const logData = await LogData.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!logData) {
      res.status(404).json({ message: "No log found with this id" });
      return;
    }
    res.status(200).json(logData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error on deleting Log" });
  }
});

module.exports = router;
