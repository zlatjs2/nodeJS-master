const express = require('express');
const store = require('../controller/store');
const router = express.Router();

router.route('/')
      .get((req, res) => {
        res.send('<h1>Hello NodeJS!</h1>');
      });

router.route('/store')
      .get(store.list)
      .delete(store.remove);

module.exports = router;
