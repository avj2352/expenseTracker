(function(){
  angular.module('myApp').controller('categoryController',['$scope',categoryController]);//end:controller
  function categoryController($scope, $firebaseArray, fbRef){
    debugger;
    var vm = $scope;
    var firebaseRef = new Firebase("https://shwethapramodwedding.firebaseio.com/");
    var myRef = fbRef.getCategoriesRef();
    var list = $firebaseArray(firebaseRef);
    vm.categories = $firebaseArray(myRef);
  }//end:controller
  angular.module('myApp').component('categories',{
    templateUrl:'category/category.html',
    controller:categoryController
  });
}());//IIFE
