const router = require('express').Router();
const controller = require('./auth.controller');

router.use('/register', controller.register);

module.exports = router;
