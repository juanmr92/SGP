define([],function(){
  'use strict';

  var config = angular.module('config', []);

  // config.constant('BASE_URL', 'http://192.168.1.36:3000');
  config.constant('BASE_URL', 'http://localhost:3000');

  return config;

});
