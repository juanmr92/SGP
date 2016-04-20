define(['auth/auth'], function(auth){
  'use strict';

  auth.controller('auth.loginController',['$scope','$auth',
    function ($scope,$auth){

      for (var key in localStorage) {
        console.log('localStorage -> ', localStorage[key]);
      }

      $scope.login = function() {

        $auth.login($scope.user)
          .then(function(response) {
            console.log('Login response -> ',response);
          }, function (error) {
            console.log('Login error -> ', error);
          });

      };

  }]);

});
