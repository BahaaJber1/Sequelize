"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        "users",
        "role",
        {
          type: DataTypes.ENUM("patient", "doctor", "finance"),
          allowNull: false,
          validate: {
            isIn: {
              args: [["patient", "doctor", "finance"]],
              msg: "Invalid role",
            },
            max: {
              args: [7],
              msg: "Role must be at most 7 characters long",
            },
          },
        },
        { transaction }
      );

      await queryInterface.addConstraint("users", {
        fields: ["role"],
        type: "check",
        name: "check_role_valid_values",
        where: {
          role: ["patient", "doctor", "finance"],
        },
        transaction,
      });

      await transaction.commit();
      console.log("Transaction was committed and the role was added");
    } catch (error) {
      await transaction.rollback();
      console.error("Transaction was rolled back due to an error:", error);
      throw error;
    }
  },

  async down(queryInterface) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn("users", "role", {
        transaction,
      });
      await transaction.commit();
      console.log("Transaction was committed and the role was removed");
    } catch (error) {
      await transaction.rollback();
      console.error("Transaction was rolled back due to an error:", error);
      throw error;
    }
  },
};
