/**
 * Created by praneethkumar on 08/08/16.
 */

var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
    title: {
        type: String,
        index: true,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    category: {
        type: String,
        index: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
/* Mongoose#model(name, [schema], [collection], [skipInit])
* name <String> model name
* [schema]
* collection <String> name induced from model name
* skipInit <Boolean> whether to skip initialization*/
var Article = module.exports = mongoose.model('Article', articleSchema);

//Since we have module.exports we can use the below outside the file.

//Get All Articles from backend mongoose database.
module.exports.getArticles = function (callback) {
    Article.find(callback);
}

//Get Article by ID
module.exports.getArticleById = function (id, callback) {
    Article.findById(id, callback);
}

//Get Category Articles
module.exports.getArticleByCategory = function (category, callback) {
    var query = {category: category};
    Article.find(query, callback);
}

//Create Article
module.exports.createArticle = function (newArticle, callback) {
    newArticle.save(callback);
}

//Update Article
module.exports.updateArticle = function (id, data, callback) {
    var title = data.title;
    var body = data.body;
    var category = data.category;

    var query = {_id: id};

    Article.findById(id, function (err, article) {
        if(!article){
            return next(new Error('Could not load article'));
        } else {
            //update
            article.title = title;
            article.body = body;
            article.category = category;
            article.save(callback);
        }
    });

}

//Remove Article
module.exports.removeArticle = function (id, callback) {
    Article.find({_id: id}).remove(callback);
}