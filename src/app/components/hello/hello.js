angular
  .module('app')
  .component('app', {
    templateUrl: 'app/components/hello/hello.html',
    controller: function () {
      this.hello = 'Hello World!';
    }
  });
