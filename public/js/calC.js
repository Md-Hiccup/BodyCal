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
    var res1=0,res2=0,res3=0,res4=0,res5=0,res6=0,res7=0,res8=0,final=0,lbw=0;
    $scope.bodyFat1 = function(){
        $scope.visibleMale = true;
        $scope.visibleFemale = false;
    };
    $scope.bodyFat2 = function(){
        $scope.visibleMale = false;
        $scope.visibleFemale = true;
    };
    $scope.bodyFatMale = function(){
        res1 = $scope.wgt * 1.082 + 94.42;
        lbw = res1 - ($scope.wst *4.15);
        final = (($scope.wgt - lbw)*100)/$scope.wgt;
        return final;
    };
    $scope.bodyFatFemale = function(){
        res1 = $scope.wgtf*0.732 + 8.987 ;
        res2 = $scope.wrst/3.14 ;
        res3 = $scope.wast*0.157;
        res4 = $scope.hip*0.249;
        res5 = $scope.arm*0.434;
        res6 = res1+res2;
        res7 = res6 - res3;
        res8 = res7 - res4;
        lbw = res5 + res8;
        final = (($scope.wgtf - lbw)*100)/$scope.wgtf;
        return final;
    };
});