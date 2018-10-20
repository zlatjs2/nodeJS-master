const async = require('async');
const pool = require('../config/config.js');

// 조회
exports.list = (req, res) => {
  pool.getConnection((error, connection) => {
    if (error) throw error;

    try {
      async.waterfall(
        [
          callback => {
            const query = `
              SELECT *
              FROM users
            `;

            // 쿼리 실행
            connection.query(query, (error, rows) => {
              if (error) throw error;
              else console.log('# rows: ', rows);
            });

            // 해제
            connection.release();
          }
        ],
        (error, results) => {
          console.log('#### POST LIST error: ', error);
        }
      );
    } catch (error) {
      console.log('#### error:', error);
    }
  });
};

// 생성
exports.create = (req, res) => {
  res.send('<h1>생성</h1>');
};

// 삭제
exports.delete = (req, res) => {
  res.send('<h1>삭제 </h1>');
};
