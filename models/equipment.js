const Sequelize = require('sequelize');
const db = require('../config/database')

const Equipment = db.define('equipment', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  }
}, {
    timestamps: false
});

module.exports = Equipment;
