const Equipment = require('./equipment')
const Sequelize = require('sequelize');
const db = require('../config/database')

const Exercise = db.define('exercise', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  }
}, {
    timestamps: false,
    freezeTableName: true
});

Exercise.hasMany(Equipment);
Exercise.belongsToMany(Equipment, {through: 'equipment_exercise', foreignKey: 'exercise_id', timestamps: false});
Equipment.belongsToMany(Exercise, {through: 'equipment_exercise', foreignKey: 'equipment_id', timestamps: false});


module.exports = Exercise;
