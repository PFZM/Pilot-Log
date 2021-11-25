const sequelize = require("../config/connection");
const { User} = require("../models");

const userData = require("./userData.json");
// const logData = require("./logData.json");
// const aircraftData = require("./aircraftData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Posts.bulkCreate(logData, {
    individualHooks: true,
    returning: true,
  });

  const comments = await Comments.bulkCreate(aircraftData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
