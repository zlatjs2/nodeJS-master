const router = require('express').Router();

router.route('/')
       .get((req, res) => {
         res.send('<h1>Hello NodeJS!</h1>');
        })

router.route('/post')
       .get((req, res) => {
         res.send('<h1>Post Page</h1>');
        })

module.exports = router;
