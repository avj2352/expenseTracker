(function(){
  angular.module('myApp').controller('homeController',['$scope','rootRef',homeController]);
  function homeController($scope,rootRef){
    var vm = $scope;
    vm.activeClass="home";
    vm.helloWorld = "Hello World";
  }//end:controller - homeController

  // One more way is to create a new Component directive of Angular 1.5.x
  // This will be invoked as <home></home> in your html
  angular.module('myApp').component('home',{
    templateUrl:'home/home.html',
    controller:homeController
  });//end:component - home

}());//IIFE
