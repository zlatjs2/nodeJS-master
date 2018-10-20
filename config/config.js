/**
 * createConnect VS createPool
 * createConnection은
 * 하나의 쿼리를 실행하고 있는 동안 다른 사람이 실행 할 수 없도록 연결을 차단
 * => 사용자의 DB 처리량이 감소
 *
 * createPool은 하나의 쿼리를 실행하고있는 동안 다른 쿼리를 실행 가능
 * 많은 사람이 접속한다면 다소 느려질 수 있지만,
 * 여러 쿼리를 병력적으로 실행 할 수 있어 가독성을 증가시킴
 *
 * 즉,  프로젝트를 진행함에 있어 createPool을 사용하는게 좋음
 */

const mysql = require('mysql');
const dbconfig = {};

const pool = mysql.createPool(dbconfig);

module.exports = pool;
