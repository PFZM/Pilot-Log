const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class LogData extends Model {}

LogData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    pilot_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    aircraft_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "aircraft",
        key: "id",
      },
    },
    dual: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    instructor_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    departure_airport: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    departure_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    arrival_airport: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arrival_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    approaches: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    landings: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comments: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    total_instrument_time: {
      type: DataTypes.REAL,
      allowNull: true,
    },
    total_time: {
      type: DataTypes.REAL,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "logData",
  }
);

module.exports = LogData;
