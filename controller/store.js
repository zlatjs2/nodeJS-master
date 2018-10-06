const mysql = require('mysql');
const async = require('async');
const dbconfig = require('../config/db.js');

const connection = mysql.createConnection(dbconfig);

// 리스트 조회
exports.list = (req, res) => {
  async.waterfall(
    [
      callback => {
        const { comId } = req.query;
        const query = `
          SELECT *
          FROM Office
          WHERE orgCode = '${comId}'
        `;

        connection.query(query, (error, offices) => {
          if (error) throw error;
          else callback(error, offices);
        });
      },
      offices => {
        const { officeIdx } = offices[0];
        const query = `
          SELECT *
          FROM OfficeStoreRelation
          LEFT JOIN Store ON OfficeStoreRelation.storeId = Store.sid
          WHERE officeIdx = '${officeIdx}
          '
        `;

        connection.query(query, (error, officeStores) => {
          if (error) throw error;
          else res.json(officeStores);
        });
      }
    ],
    (error, results) => {
      console.log('# StoreList error: ', error);
    }
  );
};

// 리스트 삭제
exports.remove = (req, res) => {
  async.waterfall(
    [
      callback => {
        const { officeIdx, storeId } = req.query;
        console.log('#### 삭제');
        // const query = `
        //   DELETE
        //   FROM OfficeStoreRelation
        //   WHERE officeIdx=${officeIdx} AND storeId=${storeId}
        // `;

        // connection.query(query, (error, results) => {
        //   if (error) throw error;
        //   else console.log(results);
        // });
      }
    ],
    (error, results) => {
      console.log('# StoreList error: ', error);
    }
  );
};
