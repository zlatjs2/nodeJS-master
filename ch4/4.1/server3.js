const http = require('http');

const parseCookies = (cookie = '') =>
  // console.log('#### cookie:', cookie.split(';').map(v => v.split('=')));
  cookie
    .split(';')
    .map(v => v.split('='))
    .map(([k, ...vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http
  .createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    console.log('#### cookie:', cookies);
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
    res.end('<p>Hello Cookie</p>');
  })
  .listen(8002, () => {
    console.log('#### 8002번 포트에서 서버 대기 중');
  });
