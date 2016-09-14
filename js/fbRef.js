(function(){
  angular.module('myApp').factory('fbRef',['expenseRef','rootRef',fbRef]);
  function fbRef(expenseRef,rootRef){
    return{
      getUserRef : getUserRef,
      getPreferencesRef : getPreferencesRef,
      getCategoriesRef : getCategoriesRef
    };
    function getCategoriesRef(){
       return rootRef.child('categories');
    }//end:getCategoriesRef
    function getPreferencesRef(){
      return rootRef.child('preferences');
    }//end:getPreferencesRef
    function getUserRef(){
      return expenseRef.child('user'); //rootRef is nothing but new Firebase instance
    }//end:getUserRef
  }//end:fbRef factory service
}());//IIFe
