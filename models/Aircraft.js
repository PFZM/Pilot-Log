const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Aircraft extends Model {}

Aircraft.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    aircraft_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    aircraft_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reg_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "aircraft",
  }
);

module.exports = Aircraft;
