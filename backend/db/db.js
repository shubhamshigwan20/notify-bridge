const { Pool } = require("pg");
const {
  pgHost,
  pgPort,
  pgUser,
  pgPassword,
  pgDatabase,
} = require("../config/index");

const db = new Pool({
  host: pgHost,
  port: pgPort,
  database: pgDatabase,
  user: pgUser,
  password: pgPassword,
});

module.exports = db;
