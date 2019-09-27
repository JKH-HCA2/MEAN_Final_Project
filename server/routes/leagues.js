var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', (req, res, next) => {
    res.render('leagues', { title: 'Leagues' });
})

router.get('/unauth', (req, res, next) => {
    res.render('unauth', { title: 'Not Allowed' });
})

/* GET register page*/
router.get('/registerteams', function(req, res, next) {
    res.render('registerteams', { title: 'Register a Team' });
  });

router.get('/data/', function(req, res, next) {
    try {
        res.end(fs.readFileSync('./data/leagues.json'));
    } catch (err) {
        res.end('[]');
    }
});
router.get('/data/:id', function(req, res, next) {
    try {
        res.end(fs.readFileSync('./data/leagues.json'));
    } catch (err) {
        res.end('[]');
    }
});

module.exports = router;