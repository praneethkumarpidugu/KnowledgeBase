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
});

//For creating we need post
router.post('/', function (req, res, next) {
  //Get Form values
  var title = req.body.title;
  var category = req.body.category;
  var body = req.body.body;

  //Article object
  var newArticle = new Article({
    title: title,
    category: category,
    body: body
  });

  //Create Article calling from article model
  Article.createArticle(newArticle, function (err, article) {
    if (err) {
      console.log(err);
    }
    res.location('/articles');
    res.redirect('/articles');
  });
});

//Update Article
router.put('/', function (req, res, next) {
  var id = req.body.id;
  var data = {
    title: req.body.title,
    category: req.body.category,
    body: req.body.body
  };

  //Create Article
  Article.updateArticle(id, data, function (err, article) {
    if (err) {
      console.log(err);
    }
    res.location('/articles');
    res.redirect('/articles');
  });

});

//Delete Article
router.delete('/:id', function (req, res, next) {
  var id = req.params.id;
  Article.removeArticle(id, function (err, article) {
    if (err) {
      console.log(err);
    }
    res.location('/articles');
    res.redirect('/articles');
  });
});

module.exports = router;
