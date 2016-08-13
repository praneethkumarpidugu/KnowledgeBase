/**
 * Created by praneethkumar on 08/08/16.
 */
var express = require('express');
var router = express.Router();

var Category = require('../models/category');

/* GET users listing. */
router.get('/', function(req, res, next) {
    Category.getCategories(function (err, categories) {
        if (err) {
            console.log(err);
        }
        //articles from mongodb
        res.json(categories);
    });
});

router.get('/:id', function(req, res, next) {
    //getArticleById(id, callback)
    Category.getCategoryById(req.params.id, function (err, category) {
        if (err) {
            console.log(err);
        }
        //articles from mongodb
        res.json(category);
    });
});

module.exports = router;

