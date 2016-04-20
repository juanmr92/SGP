define(['admin/admin','../../auth/factories/authFactory'], function(admin){
  'use strict';

  admin.controller('admin.roomController',['$scope','$auth','auth.authFactory',
    function ($scope,$auth,authFactory) {

      $scope.text = 'ADMIN - ROOM';

      $scope.testAuth = function() {
        authFactory.list({method:'getUser'}).then(function(result) {
          console.log('test Auth -> ', result);
        }, function (error) {
          console.log('ERROR AUTH: ', error);
        });
      };

  }]);

});
