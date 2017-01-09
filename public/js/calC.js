/**
 * Created by hussain on 2/1/17.
 */
var app=angular.module("calC" , ['ngRoute' ,'angular-md5' ,'angular-hmac-sha512' ,'base64','naif.base64']);

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
    }).
    when("/md5" , {
        templateUrl: "html/md5.html",
        controller: "md5Ctrl"
    }).
    when("/hmac-sha512" , {
        templateUrl : "html/hmac-sha512.html",
        controller : "hmac-sha512Ctrl"
    }).
    when("/base64" , {
        templateUrl : "html/base64.html",
        controller : "base64Ctrl"
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
app.controller("md5Ctrl" , function ($scope , md5) {
    $scope.$watch('md5Text' , function(){
       $scope.md5Msg = md5.createHash($scope.md5Text || '');
    });
});
app.controller("base64Ctrl" , function ($scope ,$base64) {
    $scope.encode = function(){
        $scope.visible = false;
        $scope.visibleKey = true;
    };
    $scope.encodeImg = function(){
        $scope.visible = true;
        $scope.visibleKey = false;
    };
    $scope.base64Text = function () {
        $scope.encoded = $base64.encode($scope.encodeText);
    };
    $scope.base64Img = function () {
        $scope.img = $scope.myfile.base64;
        console.log($scope.myfile);
    };
});
app.controller("hmac-sha512Ctrl" , function ($scope ,$crypthmac) {
    $scope.withoutKey = function(){
        $scope.visible = true;
        $scope.visibleKey = false;
    };
    $scope.withKey = function(){
        $scope.visible = false;
        $scope.visibleKey = true;
    };
    $scope.executeKey = function () {
        var encrypttext2 = $crypthmac.encrypt($scope.plantext2,$scope.secret);
        $scope.encrypttext2 = encrypttext2;
    };
    $scope.execute = function () {
        var encrypttext = $crypthmac.encrypt($scope.plantext,"");
        console.log(encrypttext);
        $scope.encrypttext = encrypttext;
    };
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