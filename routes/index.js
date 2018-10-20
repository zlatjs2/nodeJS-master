const router = require('express').Router();
const user = require('../controller/user');
const post = require('../controller/post');

router.route('/')
      .get((req, res) => {
        res.send('<h1>Hello NodeJS!</h1>');
      })

router.route('/user')
       .get(user.list)
       .post(user.create)
       .delete(user.delete)

router.route('/post')
       .get(post.list)
       .post(post.create)
       .delete(post.delete)


module.exports = router;
