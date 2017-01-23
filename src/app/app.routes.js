angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
}
