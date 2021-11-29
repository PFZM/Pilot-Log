const router = require("express").Router();
const { LogData } = require("../../models");
const withAuth = require("../../utils/auth");

// Create new LogData
router.post("/", withAuth, async (req, res) => {
  try {
    const logData = await LogData.create({
      ...req.body,
      user_id: req.session.user_id,
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
