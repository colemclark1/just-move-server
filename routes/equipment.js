const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Equipment = require('../models/Equipment');

router.get('/', (req, res) => Equipment.findAll()
  .then(equip => {
    console.log(equip);


    res.sendStatus(200);
  })
  .catch(err => console.log(err)));

router.get('/add', (req, res) => {
  const data = {
    id: 12,
    name: 'Cole'
  }

  let {id, name} = data;

  Equipment.create({
    id,
    name
  })
  .then(equip => res.redirect('/equipment'))
  .catch(err => console.log(err))
})

module.exports = router;
