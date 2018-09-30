var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(function(req, res, next) {
  console.log('#### : 나도 미들웨어...', req.url);
  next();
});

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser('screet code'));
app.use(
  session({
    resave: false, // 요청이 왔을 때 세션에 수정사항이 생기지 않더라도 세션을 다시 저장할지에 대한 설정
    saveUninitialized: false, // 세션에 저장할 내역이 없더라도 세션을 저장할지에 대한 설정 (방문자 추적시에 사요)
    secret: 'scret code', // 필수 항목. cookie-parse의 비밀키와 같은 역할
    cookie: {
      // cookie option
      httpOnly: true,
      secure: false
    }
  })
);

app.use(flash()); // 일회성 메시지: 로그인 에러, 회원가입 에러 등의 일회성 경고 메세지에 사용

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
