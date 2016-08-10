var express = require('express');
var router = express.Router();

var Article = require('../models/article');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Article.getArticles(function (err, articles) {
    if (err) {
      console.log(err);
    }
    //articles from mongodb
    res.json(articles);
  });
});

router.get('/:id', function(req, res, next) {
  //getArticleById(id, callback)
  Article.getArticleById(req.params.id, function (err, article) {
    if (err) {
      console.log(err);
    }
    //articles from mongodb
    res.json(article);
  });
});

router.get('/category/:category', function (req, res, next) {
  //getArticleByCategory (category, callback)
  Article.getArticleByCategory(req.params.category, function (err, articles) {
    if(err) {
      console.log(err);
    }
    //articles from mongodb
    res.json(articles);
    //res.json(callback);
  });
})

module.exports = router;
