require.config({
  paths: {
    angular         : '../lib/angular/angular',
    angularRoute    : '../lib/angular-route/angular-route',
    angularResource : '../lib/angular-resource/angular-resource',
    satellizer      : '../lib/satellizer/satellizer',
    bootstrap       : '../lib/bootstrap/dist/js/bootstrap',
    jquery          : '../lib/jquery/dist/jquery'
  },
  shim:  {
    angular: {
      exports : 'angular'
    },
    angularRoute: {
      deps  : ['angular']
    },
    angularResource: {
      deps  : ['angular']
    },
    satellizer: {
      deps  : ['angular']
    },
    jquery: {
      exports : 'jquery'
    },
    bootstrap: {
      deps  : ['jquery']
    },
    app:  {
      deps  : ['angular']
    }
  },
  urlArgs: 'bust=' + (new Date()).getTime(),
  waitSeconds: 0

});
requirejs(['app']);
