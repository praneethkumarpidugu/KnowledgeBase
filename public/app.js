/**
 * Created by praneethkumar on 24/08/16.
 */

var app = angular.module('kB', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/categories', {
            templateUrl: 'views/categories.view.html',
            controller: 'CategoriesCtrl'
    }).when('/articles', {
            templateUrl: 'views/articles.view.html',
            controller: 'ArticlesCtrl'
    }).when('/articles/details/:id', {
            templateUrl: 'views/article_details.view.html',
            controller: 'ArticleDetailsCtrl'
    }).when('/articles/category/:category/', {
            templateUrl: 'views/cat_articles.view.html',
            controller: 'ArticlesCategoryCtrl'
    }).when('/categories/edit/:id', {
            templateUrl: 'views/edit_article.view.html',
            controller: 'CategoriesCtrl'
    }).when('/articles/add', {
            templateUrl: 'views/add_article.view.html',
            controller: 'ArticlesCreateCtrl'
    }).when('/articles/edit/:id', {
            templateUrl: 'views/edit_article.view.html',
            controller: 'ArticlesEditCtrl'
    }).
    //API library $routeProvider.otherwise(Params);
    //params: if called with a string the value maps to redirectTo
    otherwise({redirectTo: '/categories'});
}]);