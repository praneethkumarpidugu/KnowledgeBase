/**
 * Created by praneethkumar on 16/08/16.
 */

//same as categories controller
//API
//controller(name, constructor);
//params:
//name: StringObject
//constructor: constructor function
angular.module('kB')
    .controller('ArticlesCtrl', ['$scope', '$http', function ($scope, $http) {
        //$http.get(url, [config]);
        //params:
        //url -> type:string | details: relative or absolute url
        //      specifying the destination of the request
        //config(optional) -> Objects: Optional configuration object
        $http.get('/articles').success(function (data) {
            $scope.articles = data;
        });
    }])
    .controller('ArticlesCategoryCtrl', ['$scope', '$http','$routeParams', function ($scope, $http, $routeParams) {
        $http.get('/articles/category/'+$routeParams.category).success(function (data) {
            $scope.cat_articles = data;
            $scope.category = $routeParams.category;
        });
    }])
    .controller('ArticleDetailsCtrl', ['$scope', '$http', '$routeParams','$location',function ($scope, $http, $routeParams, $location) {
        $http.get('/articles/'+$routeParams.id).success(function (data) {
            $scope.article = data;
        })
        $scope.removeArticle = function () {
            $http.delete('/articles/'+$routeParams.id).success(function (data) {
                console.log(data);
            });
            $location.path('/articles');
        }
    }])
    .controller('ArticlesCreateCtrl', ['$scope', '$http', '$routeParams','$location', function ($scope, $http, $routeParams, $location) {
        $http.get('/categories').success(function (data) {
            $scope.categories = data;
        })
        $scope.addArticle = function () {
            var data = {
                title: $scope.title,
                body: $scope.body,
                category: $scope.category
            }
            $http.post('/articles', data).success(function (data, status) {
                console.log(status);
            });

            $location.path('/articles');
        }
    }])
    .controller('ArticlesEditCtrl', ['$scope', '$http', '$routeParams','$location', function ($scope, $http, $routeParams, $location) {
        $http.get('/categories').success(function (data) {
            $scope.categories = data;
        })
        $http.get('/articles/'+$routeParams.id).success(function (data) {
            $scope.article = data;
        })
        $scope.updateArticle = function () {
            var data = {
                id: $routeParams.id,
                title: $scope.article.title,
                body: $scope.article.body,
                category: $scope.article.category
            }
            $http.put('/articles', data).success(function (data, status) {
                console.log(status);
            });

            $location.path('/articles');
        }
    }]);