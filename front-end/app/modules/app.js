define(['auth/auth','shared/shared',
  'auth/controllers/loginController','auth/controllers/logoutController',
  'receptionist/receptionist','receptionist/controllers/homeController',
  'angularRoute','satellizer'],function(){
  'use strict';

  var app = angular.module('app',['ngRoute','shared','receptionist']);

  app.config(['$locationProvider','$routeProvider',
    function($locationProvider,$routeProvider){
      $locationProvider.html5Mode(true);

      $routeProvider
      .when('/', {
        templateUrl : 'modules/home.html'
      })
/*      .when('/login', {
        templateUrl : 'modules/auth/views/login.tpl.html',
        controller  : 'auth.loginController'
      })
      .when('/logout', {
        template : null,
        controller  : 'auth.logoutController'
      })*/
      .when('/recepcionista', {
        templateUrl : 'modules/receptionist/views/home.tpl.html',
        controller  : 'receptionist.homeController'
      })
      .otherwise({ redirectTo : '/'});
    }]);

  angular.bootstrap(document, ['app']);
  return app;
});
