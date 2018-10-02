const express = require('express');
const mysql = require('mysql');
const dbconfig = require('../config/db.js');
const connection = mysql.createConnection(dbconfig);
const router = express.Router();

router.get('/', (req, res) => {
  console.log('# req: ', req);
  console.log('# res: ', res);

  const query =
    'SELECT name, address, gpslat, gpslon, loadguide FROM Store ORDER BY name LIMIT 0, 100';

  connection.query(query, (error, rows) => {
    if (error) throw error;

    res.json(rows);

  });

});

module.exports = router;
