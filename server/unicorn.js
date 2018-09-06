const Sequelize = require('Sequelize');
const db = new Sequelize('postgres://localhost:5432/unicorns', {
  logging: false,
});

const Unicorn = db.define('unicorn', {});

module.exports = { db, Unicorn };
