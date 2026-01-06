"use strict";

const { DataTypes } = require("sequelize");
const { v4: uuid } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuid(),
        field: "user_id",
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
