var app = angular.module('api',['ngResource']);
app.controller("control",function($scope,$http){
	$scope.name="biswa"
 $http.get("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
$scope.sou = response.data;
    })
});
 app.controller('mainCtrl',function($scope,UserService,$http){
 	$scope.name="ranjan"
   $scope.users = UserService.query();
 });

        