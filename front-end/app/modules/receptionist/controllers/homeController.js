define(['receptionist/receptionist','shared/factories/mainFactory'], function(receptionist){
  'use strict';

  receptionist.controller('receptionist.homeController',['$scope','shared.mainFactory',
    function ($scope,mainFactory) {

      $scope.text = 'RECEPTIONIST - HOME';

      $scope.testRest = function() {
        mainFactory.list({method:'getUser'}).then(function(result) {
          console.log('test Receptionist -> ', result);
        }, function (error) {
          console.log('ERROR AUTH: ', error);
        });
      };

  }]);

});
