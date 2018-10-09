const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const { User } = require('../models');

module.exports = (passport) => {

  // req.session 객체에 어떤 데이터를 저장할 지 선택
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // serializeUser에서 세션에 저장했던 Id를 받아
  // 데이터베이스에서 사용자 정보를 조회한 후,
  // 조회한 정보를 req.user에 저장
  // 즉, 세션에 저장한 아이디를 통해 사용자 정보 객체를 불러오는 것
  passport.deserializeUser((id, done) => {
    User.find({ where: { id } })
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  local(passport);
  kakao(passport);
};
