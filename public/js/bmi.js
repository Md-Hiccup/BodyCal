/**
 * Created by hussain on 2/1/17.
 */
var app=angular.module("calC" , ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when("/bmi" , {
        templateUrl: "html/bmi.html",
        controller : "bmiCtrl"
        }).
        when("/htWt" , {
        templateUrl: "html/htWt.html",
        controller : "htWtCtrl"
        }).
        when("/bodyFat" , {
        templateUrl : "html/bodyFat.html"
        })
}]);

app.controller("bmiCtrl" , function ($scope){
    $scope.active = "active";
});
app.controller("htWtCtrl" , function ($scope){
    $scope.active = "active";
});