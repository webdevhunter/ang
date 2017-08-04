var Controllers =angular.module('Controllers', []);
Controllers.controller('MainCtrl',['$scope', '$location', '$http',function MainCtrl($scope, $location, $http) {
$scope.message = "Hello World";
}]);
Controllers.controller('ShowCtrl',['$scope', '$location', '$http',function ShowCtrl($scope, $location, $http) {
$scope.message = "Show The World";
}]);
Controllers.controller('CustomerCtrl', ['$scope',function CustomerCtrl($scope) {
$scope.customerName = "Bob's Burgers";
$scope.customerNumber = 44522;
// add method to scope
$scope.changeCustomer = function(){
$scope.customerName = $scope.cName;
$scope.customerNumber = $scope.cNumber;
};
}]);
Controllers.controller('AddCustomerCtrl', ['$scope', '$location', function AddCustomerCtrl($scope, $location) {
$scope.submit = function(){
window.alert("function called");    
$location.path('/addedCustomer/' + $scope.cName + "/" + $scope.cCity);
};
}]);
Controllers.controller('AddedCustomerCtrl',['$scope', '$routeParams',function AddedCustomerCtrl($scope, $routeParams) {
$scope.customerName = $routeParams.customer;
$scope.customerCity = $routeParams.city;
}]);
