/*var app = angular.module("myapp", ["ngRoute"]);
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/main", {
        templateUrl : "partials/main.html",
        controller : "MainCtrl"
    })
    .when("/show", {
        templateUrl : "partials/show.html",
        controller : "ShowCtrl"
    });
}]);*/




var app = angular.module('myapp', ['ngRoute','Controllers']);
app.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
$routeProvider.
when('/main', {
templateUrl: 'partials/main.html',
controller: 'MainCtrl'
}).when('/show', {
templateUrl: 'partials/show.html',
controller: 'ShowCtrl'
}).when('/cust',{
templateUrl: 'partials/customer.html',
controller: 'CustomerCtrl'    
}).when('/addcustomer',{
templateUrl: 'partials/newCustomer.html',
controller: 'AddCustomerCtrl'    
}).when('/addedCustomer/:customer/:city', {
templateUrl: 'partials/addedCustomer.html',
controller: 'AddedCustomerCtrl'
});
$locationProvider.html5Mode(false).hashPrefix('!');
}]);







/*app.controller('MainCtrl',['$scope', '$location', '$http',function MainCtrl($scope, $location, $http) {
$scope.message = "Hello World";
}]);
app.controller('ShowCtrl',
['$scope', '$location', '$http',
function ShowCtrl($scope, $location, $http) {
$scope.message = "Show The World";
}]);*/