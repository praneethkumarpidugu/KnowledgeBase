var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /* res.render(view [,locals], [,callback])
  * locals, an object whos properties define local variables for the view
  * callback function if provided that method returns both the possible
  * error and rendered string*/
  res.render('index', { title: 'Express' });
});

module.exports = router;
