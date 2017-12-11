var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

// Incomplete

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Personal Site', condition: false, myArray: [1,2,3] });
});


module.exports = router;
