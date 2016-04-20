define(['admin/admin','angularResource'],function(admin){
  'use strict';

  admin.factory('adminService',['$resource', function ($resource){
    return $resource('/app/:entity/:method/:id/:param1/:param2',null,
    {
      'put': { method:'PUT' ,params: {entity : '@entity', method:'@method'} }
    });
  }]);

  return mainSrv;
});
