const router = require('express').Router();
const auth = require('./auth');

router.post('/auth', auth);

module.exports = router;
