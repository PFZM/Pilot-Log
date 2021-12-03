const router = require("express").Router();
const { LogData, User } = require("../../models");
const withAuth = require("../../utils/auth");
const calcTime = require("../../utils/time")

// Create new LogData
router.post("/", withAuth, async (req, res) => {
  try {
    const time = calcTime(`${req.body.date}T${req.body.departure_time}:00`,`${req.body.date}T${req.body.arrival_time}:00`)
    const totTime = time.days*24 + time.hours + time.minutes/60
    const logData = await LogData.create({
      ...req.body,
      pilot_id: req.session.user_id,
      total_time: totTime,
    });
    res.status(200).json(logData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating log" });
  }
});

// Update a log by its 'id' value
router.put("/", withAuth, async (req, res) => {
  try {
    console.log(req.body.post_id)
    console.log(`${req.body.date}T${req.body.departure_time}:00`,`${req.body.date}T${req.body.arrival_time}:00`)
    const time = calcTime(`${req.body.date}T${req.body.departure_time}`,`${req.body.date}T${req.body.arrival_time}`)
    const totTime = time.days*24 + time.hours + time.minutes/60
    console.log(totTime);
    const logData = await LogData.update({
      ...req.body,
      total_time: totTime,
    },
      {where: {
        id: req.body.post_id,
      },
    }
    );
    //handlebars route here for update
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
