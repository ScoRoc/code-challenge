var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middleware/isLoggedIn');

/* GET home page. */
router.get('/', function(req, res) {
  res.send('Nothing at the root route yet...');
});

router.post('/add-sticky', function(req, res) {

});

module.exports = router;
