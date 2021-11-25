const User = require("./User");
const Aircraft = require("./Aircraft");
const LogData = require("./LogData");

User.hasMany(LogData, {
  foreignKey: "pilot_id",
  onDelete: "CASCADE",
});

LogData.belongsTo(User, {
  foreignKey: "pilot-id",
});

LogData.hasMany(Aircraft, {
  foreignKey: "aircraft_id",
});

Aircraft.belongsTo(LogData, {
  foreignKey: "aircraft_id",
});

module.exports = { User, Aircraft, LogData };
