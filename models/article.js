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

var Article = module.exports = mongoose.model('Article', articleSchema);

//Since we have module.exports we can use the below outside the file.

//Get All Articles
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

