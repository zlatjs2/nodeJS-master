const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('./server2.html', (error, data) => {
    if (error) throw error;
    res.end(data);
  });
}).listen(8001, () => {
  console.log('#### 8001번 포트에서 서버 대기 중');
});
