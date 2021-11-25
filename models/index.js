const User = require("./User");
const Aircraft = require("./Aircraft");
const LogData = require("./LogData");

User.hasMany(LogData, {
  foreignKey: "pilot_id",
  onDelete: "CASCADE",
});

LogData.belongsTo(User, {
  foreignKey: "pilot_id",
});

Aircraft.hasMany(LogData, {
  foreignKey: "aircraft_id",
});

LogData.belongsTo(Aircraft, {
  foreignKey: "aircraft_id",
});

module.exports = { User, Aircraft, LogData };
