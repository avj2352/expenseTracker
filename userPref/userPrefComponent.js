(function(){
  angular.module('myApp').controller('userPrefController',['$scope','fbRef','$firebaseObject','$location',userPrefController]);
  function userPrefController($scope, fbRef, $firebaseObject, $location){
    var vm = $scope;
    vm.helloUser = "Hello User";
    vm.activeClass="pref";
    vm.themesArray = ["Blue","Black","Yellow"];
    vm.userPreferences = { displayName:"Pramod"};

    vm.getPreferencesRefService = $firebaseObject(fbRef.getPreferencesRef());


    vm.save = function(userPreferences){
      debugger;
      for(var key in userPreferences){
        vm.getPreferencesRefService[key] = userPreferences[key];
      }//end:foreach
      vm.getPreferencesRefService.$save().then(function(ref){
        $location.path('/home');
      });
//       vm.getPreferencesRefService.foo1 = userPreferences;
//       vm.getPreferencesRefService.$save().then(function(ref) {
//         // ref.key() = obj.$id; // true
//       }, function(error) {
//           console.log("Error:", error);
// });
      console.log('vm.getPreferencesRefService: ', vm.getPreferencesRefService);
    };//end:save()

    vm.cancel = function(){
      vm.userPreferences = { displayName:"Pramod", theme:"Blue" };
      $location.path('/home');
    };//end:cancel()

  }//end:userPrefController

  angular.module('myApp').component('userPref',{
    templateUrl:'userPref/userPref.html',
    controller:userPrefController
  });
}());//IIFE
