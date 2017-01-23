angular
  .module('app.common')
  .factory('_', lodashFactory);

/** @ngInject */
function lodashFactory($window) {
  return $window._ ? $window._ : {};
}
