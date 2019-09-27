var express = require('express');
var router = express.Router();
const controller = require('../controllers/user')

// GET: http://localhost:3000/users/
router.get('/', controller.list)

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

// post login data
router.post('/login', controller.postUserLogin )

/* GET register page*/
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

// POST user data to register
router.post('/register', controller.register )

// DEL user account
router.delete('/delete/:id', controller.delete )

// GET edit user page
router.get('/edit/:id', function(req, res, next) {
  res.render('edit', {title: 'Edit'} )
})

// GET a single user
router.get('/user/:id', controller.getUserData)

// PUT updated user info
router.put('/edit/:id', controller.update )

// Clear session id on logout
router.get('/logout', function(req, res, next) {
    req.session.username = null;
    req.session.admin = null;
    res.redirect('/');
    console.log(req.session.username)
});


module.exports = router;
