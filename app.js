const http = require('http'); // 1.서버를 만드는 모듈을 불러옴

http.createServer((req, res) => {
  // 서버 만드는 메소드
  console.log('#### server start!!:');
  return req.on('error', error => console.log('#### error:', error))
            .on('data', data => console.log('#### data:', data))
            .on('end', () => {
              res.on('error', error => console.log('#### error:', error));
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/plain'); // header 설정
              res.write('hi\n'); // body에 정보 탑재
              res.end('the end!'); // 정보 탑재 후 브라우저로 전송
  });
}).listen('8080');
