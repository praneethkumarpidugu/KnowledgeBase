/**
 * Created by praneethkumar on 16/08/16.
 */
//API
//controller(name, constructor);
//name: StringObject
//constructor: constructor function
angular.module('kB')
    .controller('CategoriesCtrl', ['$scope', '$http', function ($scope, $http) {
        //$http.get(url, [config]);
        //params:
        //url -> type:string | details: Relative or absolute url specifying
        //      the destination of the request
        //config(optional) -> Objects: Optional configuration object
        $http.get('/categories').success(function (data) {
            $scope.categories = data;
        })
    }]);