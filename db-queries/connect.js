require('dotenv').config();
const {Client} = require('pg');


class Database {
  constructor() {
     this.client = new Client({
      user: process.env.user,
      password: process.env.password,
      host: process.env.host,
      port: process.env.port,
      database: process.env.database
    });

    this.client.connect().then(result => console.log("Connected"));
  }

  // Below is a query for all exercises that use dumbbells
  // "select * from exercises inner join equipment_exercise on equipment_exercise.exercise_id=exercises.id where equipment_exercise.equipment_id=(SELECT id FROM equipment WHERE equipment.name='dumbbells');"
  getExercises()  {
    return this.client.query("select * from exercises inner join equipment_exercise on equipment_exercise.exercise_id=exercises.id where equipment_exercise.equipment_id=(SELECT id FROM equipment WHERE equipment.name='dumbbells');")
    .then(results => results.rows);
  }

  disconnect() {
    this.client.end();
  }

}
module.exports.Database = Database;
