angular
  .module('app.hello')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider) {
  $stateProvider
    .state('app', {
      url: '/',
      templateUrl: 'app/components/hello/hello.html',
      controller: 'HelloController',
      controllerAs: 'vm'
    });
}
