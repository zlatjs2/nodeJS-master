/**
 * cluster
 * 싱글 스레드인 노드가 CPU 코어를 모두 사용할 수 있게 해주는 모듈
 * 포트를 공유하는 노드 포르세스를 여러 개 둘 수도 있어,
 * 요청이 많이 들어왔을 때 병렬로 실행된 서버의 개수만큼 요청이 분산되게 할 수 있음
 *
 * 즉, 서버에 무리가 덜 가게 됨
 *
 * 세션을 공유하지 못하는 등의 단점이 있지만
 * Redis 등의 서버를 도입하여 해결할 수 있음
 */

const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log('#### 마스터 프로세스 아이디 :', process.pid);

  // CPU 개수만큼 워커를 생산
  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }

  // 워커가 종료되었을 때
  cluster.on('exit', (worker, code, signal) => {
    console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
    cluster.fork();
  });
} else {
  // 워커들이 포트에서 대기
  http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Cluster!</p>');
    setTimeout(() => {
      process.exit(1);
    }, 1000);
  }).listen(8085);

  console.log(`${process.pid}번 워커 실행 :)`);
}
