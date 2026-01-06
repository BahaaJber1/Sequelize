"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await Promise.all([
        queryInterface.addColumn(
          "users",
          "created_at",
          {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          },
          { transaction }
        ),
        queryInterface.addColumn(
          "users",
          "updated_at",
          {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          },
          { transaction }
        ),
        queryInterface.addColumn(
          "users",
          "deleted_at",
          {
            type: DataTypes.DATE,
            allowNull: true,
          },
          { transaction }
        ),
      ]);
      await transaction.commit();
      console.log("Transaction was committed and the columns were added");
    } catch (error) {
      await transaction.rollback();
      console.error("Transaction was rolled back due to an error:", error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await Promise.all([
        queryInterface.removeColumn("users", "created_at", {
          transaction,
        }),
        queryInterface.removeColumn("users", "updated_at", {
          transaction,
        }),
        queryInterface.removeColumn("users", "deleted_at", {
          transaction,
        }),
      ]);
      await transaction.commit();
      console.log("Transaction was committed and the columns were removed");
    } catch (error) {
      await transaction.rollback();
      console.error("Transaction was rolled back due to an error:", error);
      throw error;
    }
  },
};
