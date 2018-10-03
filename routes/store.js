const express = require('express');
const mysql = require('mysql');
const async = require('async');
const dbconfig = require('../config/db.js');

const connection = mysql.createConnection(dbconfig);
const router = express.Router();

router.get('/', (req, res) => {
  async.waterfall(
    [
      callback => {
        const { comId } = req.query;
        const query = `SELECT * FROM Office WHERE orgCode='${comId}'`;
        console.log('#### comId:',  comId);
        connection.query(query, (error, offices) => {
          if (error) throw error;
          else callback(error, offices);
        });
      },
      offices => {
        const { officeIdx } = offices[0];
        const query = `SELECT * FROM OfficeStoreRelation LEFT JOIN Store ON OfficeStoreRelation.storeId=Store.sid WHERE officeIdx='${officeIdx}'`;

        connection.query(query, (error, officeStores) => {
          if (error) throw error;
          else res.json(officeStores);
        });
      }
    ],
    (error, results) => {
      console.log('# error: ', error);
    }
  );
});

module.exports = router;
