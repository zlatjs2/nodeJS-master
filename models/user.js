/**
 * mongoose에서 User 정보를 MongoDB에 넣기 위해서 스키마를 먼저 만들어야 함.
 * 
 * 스키마란?
 * 데이터베이스를 구성하는 개체, 속성, 관계 및 데이터 조작 시에 데이터 값들이 갖는 제약조건 등에 관해 전반적으로 정의하는 것
 * 스키마가 존재한다는 것 = 구조가 미리 정의되어 있어야 한다 => 데이터의 급격한 변화에 대응하기 힘들다.
 * MongoDB는 이러한 스키마가 사전에 정의되지 않아도 됨
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  username: String,
  password: String,
  admin: {
    type: Boolean,
    default: false
  }
});

// 새 유저를 생성
User.statics.create = function(username, password) {
  const user = new this({
    username,
    password
  });
};

// username을 이용하여 유저를 찾음
User.statics.findOneByUsername = function(username) {
  return this.findOne({
    username
  }).exec();
};

// 비밀번호가 정확한지 확인
User.methods.verify = function(password) {
  return this.password === password;
};

// 유저를 관리자 계정으로 설정
User.methods.assignAdmin = function() {
  this.admin = true;
  return this.save();
};

module.exports = mongoose.module('User', User);
