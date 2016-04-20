define(['auth/auth'], function(auth){
  'use strict';

  auth.controller('auth.logoutController',['$scope','$location','$auth',
    function ($scope,$location,$auth){

      if (!$auth.isAuthenticated()) { return; }
      $auth.logout()
        .then(function() {
          console.log('LOGOUT');
          $location.path('/');
        });

  }]);

});
