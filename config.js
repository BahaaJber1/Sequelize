const settings = require('./settings');

module.exports = {
  development: {
    username: settings.DB_USER,
    password: settings.DB_PASS,
    database: `${settings.DB_NAME}_development`,
    host: settings.DB_HOST,
    dialect: settings.DB_DLCT,
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'Migrations',
    seederStorage: 'sequelize',
    seederStorageTableName: 'Seeders',
  },
  test: {
    username: settings.DB_USER,
    password: settings.DB_PASS,
    database: `${settings.DB_NAME}_test`,
    host: settings.DB_HOST,
    dialect: settings.DB_DLCT,
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'Migrations',
    seederStorage: 'sequelize',
    seederStorageTableName: 'Seeders',
  },
  production: {
    username: settings.DB_USER,
    password: settings.DB_PASS,
    database: settings.DB_NAME,
    host: settings.DB_HOST,
    dialect: settings.DB_DLCT,
    migrationStorage: 'sequelize',
    migrationStorageTableName: 'Migrations',
    seederStorage: 'sequelize',
    seederStorageTableName: 'Seeders',
  },
};
