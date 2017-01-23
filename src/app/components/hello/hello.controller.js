angular
  .module('app.hello')
  .controller('HelloController', HelloController);

/** @ngInject */
function HelloController() {
  var vm = this;
  vm.hello = 'Hello, world!';

  /**
   * Function to run on controller creation.
   */
  function activate() {
  }

  activate();
}
