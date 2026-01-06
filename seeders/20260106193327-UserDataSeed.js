"use strict";

const { default: usersData } = require("../dev-data/users.data");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert("users", usersData, {
        transaction,
      });
      await transaction.commit();
      console.log("User data seeded successfully.");
    } catch (error) {
      await transaction.rollback();
      console.error("Error in seeding user data:", error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete("users", {}, { transaction });
      await transaction.commit();
      console.log("User data seed reverted successfully.");
    } catch (error) {
      await transaction.rollback();
      console.error("Error in reverting user data seed:", error);
      throw error;
    }
  },
};
