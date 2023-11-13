import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";

const User = db.define(
  "User",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(320),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
  },
  {
    tableName: "Users",
  }
);

export default User;
