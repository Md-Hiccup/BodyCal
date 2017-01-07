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
        templateUrl : "html/bodyFat.html",
        controller : "bodyFatCtrl"
    })
}]);

app.controller("bmiCtrl" , function ($scope){
    $scope.active = "active";
    $scope.bmi = function(){
        return $scope.wt/($scope.ht*$scope.ht);
    }
});
app.controller("htWtCtrl" , function ($scope){
    $scope.active = "active";
});
app.controller("bodyFatCtrl" , function($scope){
    var res1 = 0 , res2 = 0 , res3 = 0;
    $scope.visible = true;
    $scope.bodyFatMale = function(){
        res1 = $scope.wgt * 1.082 + 94.42;
        res2 = res1 - ($scope.wst *4.15);
        res3 = (($scope.wgt - res2)*100)/$scope.wgt;
        return res3;
    };
    $scope.bodyFatFemale = function(){

    }

});