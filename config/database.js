const Sequelize = require('sequelize')
require('dotenv').config();

const {Client} = require('pg');

module.exports = new Sequelize(process.env.database, process.env.user, process.env.password, {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});




// class Database {
//   constructor() {
//      this.client = new Client({
//       user: process.env.user,
//       password: process.env.password,
//       host: process.env.host,
//       port: process.env.port,
//       database: process.env.database
//     });
//
//     this.client.connect().then(result => console.log("Connected"));
//   }
//
//   // Below is a query for all exercises that use dumbbells
//   // "select * from exercises inner join equipment_exercise on equipment_exercise.exercise_id=exercises.id where equipment_exercise.equipment_id=(SELECT id FROM equipment WHERE equipment.name='dumbbells');"
//   getExercises()  {
//     return this.client.query("select * from exercises inner join equipment_exercise on equipment_exercise.exercise_id=exercises.id where equipment_exercise.equipment_id=(SELECT id FROM equipment WHERE equipment.name='dumbbells');")
//     .then(results => results.rows);
//   }
//
//
//   getWorkouts() {
//     return this.client.query("SELECT * FROM workout INNER JOIN set_workout on set_workout.workout_id=workout.id INNER JOIN set on set.id=set_workout.set_id INNER JOIN exercise on exercise.id=set.exercise_id INNER JOIN equipment_exercise on equipment_exercise.exercise_id=exercise.id INNER JOIN equipment on equipment.id=equipment_exercise.equipment_id")
//     .then(results=>results.rows);
//
//   }
//
//
//   getWorkoutByID() {
//     workout = this.client.query("SELECT * FROM workout INNER JOIN set_workout on set_workout.workout_id=workout.id").then(results=>results.rows);
//
//
//   }
//
//   disconnect() {
//     this.client.end();
//   }
//
// }
// module.exports.Database = Database;
