var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log("This is an index page in routes.js ");
  res.render('index');
});
router.get('/bmi', function(req ,res){
  console.log("this is an bmi link in routes .js");
  res.render('bmi');
})
module.exports = router;
