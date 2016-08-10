/**
 * Created by praneethkumar on 08/08/16.
 */
/**
 * Created by praneethkumar on 08/08/16.
 */

var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    description: {
        type: String
    }
});

var Category = module.exports = mongoose.model('Category', categorySchema);

//Since we have module.exports we can use the below outside the file.

//Get All Articles
module.exports.getCategories = function (callback) {
    Category.find(callback);
}

//Get Article by ID
module.exports.getCategoryById = function (id, callback) {
    Category.findById(id, callback);
}

//Get Category Articles
module.exports.getArticleByCategory = function (category, callback) {
    var query = {category: category};
    Article.find(query, callback);
}


//createCategory
module.exports.createCategory = function (newCategory, callback) {
    newCategory.save(callback);
}