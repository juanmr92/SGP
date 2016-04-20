define(['auth/auth','auth/services/authService'],function(auth){
  'use strict';

  auth.factory('auth.authFactory',['$q','auth.authService', function ($q,authService) {
    var authFactory = {};

    authFactory.list = function(params) {
      console.log('entro authFactory');
      var deferred = $q.defer();

      authService.gety(params).$promise.then(function(result) {
        deferred.resolve(result);
      }, function(errorMsg) {
        deferred.reject(errorMsg);
      });

      return deferred.promise;
    };

    authFactory.save = function(params,request) {
      var deferred = $q.defer();

      authService.save(params,request).$promise.then(function(result) {
        deferred.resolve(result);
      }, function(errorMsg) {
        deferred.reject(errorMsg);
      });

      return deferred.promise;
    }


    return authFactory;

  }]);

});
