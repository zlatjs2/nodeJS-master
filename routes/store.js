const express = require('express');
const mysql = require('mysql');
const dbconfig = require('../config/db.js');
const connection = mysql.createConnection(dbconfig);
const router = express.Router();

router.get('/', (req, res) => {
  const query = 'SELECT name, address, gpslat, gpslon, loadguide FROM Store';

  connection.query(query, (error, rows) => {
    if (error) throw error;
    console.log('#### Row: ', rows[0]);
    res.send(rows);
  });
});

module.exports = router;
