const https = require('https');
const fs = require('fs');

/**
 * createServer
 * 첫번쨰 인자 - 인증서에 관련된 옵션
 * 두번쨰 인자 - 서버 로직
 * 
 * 인증서를 구입하면 pem, crt, key 드의 확장자를 가진 파일들을 제공해 줌
 * 파일들을 readFileSync 메서드로 읽어서 cert, key, ca 옵션에 알맞게 넣어주면 됨
 */

https.createServer({
  cert: fs.readFileSync(), // 도메인 인증서 경로
  key: fs.readFileSync(), // 도메인 비밀키 경로
  ca: [
    fs.readFileSync(), // 상위 인증서 경로
    fs.readFileSyn(), // 상위 인증서 경로
  ],
}, (req, res) => {
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
.listen(443, () => {
  console.log('#### 443번 포트에서 서버 대기 중');
});
