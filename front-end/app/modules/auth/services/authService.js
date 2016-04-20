define(['auth/auth','../../shared/config'],function(auth,config){
  'use strict';

  auth.service('auth.authService',['$resource','BASE_URL',
    function ($resource,BASE_URL){

      return $resource(BASE_URL + '/:entity/:method/:id/:param1/:param2',null,
        {
          'gety': {
            method:'GET',
            params: {
              entity : '@entity',
              method:'@method'
            }
            // headers: {
            //   'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
            //   'token':'jasgdbuasdyasvbd8a7sdbviasuydb8qvi3i32qh'
            // }
          },
          'put': { method:'PUT' ,params: {entity : '@entity', method:'@method'} }
        }
      );

    }
  ]);

});
