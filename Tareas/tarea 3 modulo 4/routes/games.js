var express = require('express');
var router = express.Router();

/* GET games page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GAMES' });
});

module.exports = router;