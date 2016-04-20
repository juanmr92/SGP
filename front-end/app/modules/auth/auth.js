define(['angular','satellizer','../shared/config'],function(angular,satellizer,config){
  'use strict';
  var auth = angular.module('auth',['satellizer','config']);
  return auth;
});
