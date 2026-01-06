require("dotenv").config();

const DB_DLCT = process.env.DB_DLCT ?? "postgres";
const DB_USER = process.env.DB_USER ?? "postgres";
const DB_PASS = process.env.DB_PASS ?? "root";
const DB_HOST = process.env.DB_HOST ?? "localhost";
const DB_PORT = process.env.DB_PORT ?? 5432;
const DB_NAME = process.env.DB_NAME ?? "sequelize";

const settings = {
  DB_DLCT,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_NAME,
};

module.exports = settings;
