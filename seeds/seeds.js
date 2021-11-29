const sequelize = require("../config/connection");
const { User, Aircraft, LogData } = require("../models");

const userData = require("./userData.json");
const logData = require("./logData.json");
const aircraftData = require("./aircraftData.json");

const seedDatabase = async () => {
  try {
    console.log(sequelize);
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    const aircraft = await Aircraft.bulkCreate(aircraftData, {
      individualHooks: true,
      returning: true,
    });

    const data = await LogData.bulkCreate(logData, {
      individualHooks: true,
      returning: true,
    });

    process.exit(0);
  } catch (err) {
    console.error(err);
  }
};

seedDatabase();
