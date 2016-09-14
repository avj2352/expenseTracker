/*Angular powred firebase application*/
(function(){
  var app = angular.module('myApp',['ngRoute','firebase']);
  app.controller('mainController',['$scope',mainController]);
  function mainController($scope){
    var vm = $scope;
    vm.activeClass="home";
  }//end:mainController
  app.config(function($routeProvider){
    $routeProvider
    .when('/home',{
      template:'<home></home>'
    })
    .when('/list',{
      template:'<categories></categories>'
    })
    .when('/userPref',{
      template:'<user-pref></user-pref>'
    })
    .otherwise('/home');
  });//end:config
}());//IIFE
