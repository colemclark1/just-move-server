var express = require('express')
var app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
})

var connection = require('./db-queries/connect');
var db = new connection.Database


app.get('/exercises', function(req, res) {
  db.getExercises().then(result => res.send(result))
})

app.get("/hello", function(req, res) {
  res.send({message: "Hello"});
})

app.get('/login/:username/:password', function(req, res){
  const username = req.params['username'];
  const password = req.params['password'];
  res.send({username: username,
            password: password
          });
})

app.listen(4000)
