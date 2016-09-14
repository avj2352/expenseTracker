/*Creating services for firebase*/
// Creating an Angular service - constant to house the Firebase url
// Super awesome thing we can do with Angular service - Anything with a new to it, can be invoked with service :D
(function(){
  angular.module('myApp').constant('mainUrl','https://shwethapramodwedding.firebaseio.com/');
  angular.module('myApp').constant('expenseUrl','https://shwethapramodwedding.firebaseio.com/preferences/');
  angular.module('myApp').service('rootRef',['mainUrl',Firebase]);
  angular.module('myApp').service('expenseRef',['expenseUrl',Firebase]);
  // NOTE: this is same as var rootRef = new Firebase('https://shwethapramodwedding.firebaseio.com/'); :D
}());//IIFE
