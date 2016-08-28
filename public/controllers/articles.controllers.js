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
        })
    }]);