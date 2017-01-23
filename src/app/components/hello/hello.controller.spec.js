describe('HelloController', function () {
  var $compile, $controller, $injector, $rootScope, HelloController;

  function createController() {
    return $controller('HelloController', { $scope: {} });
  }

  beforeEach(module('app'));
  beforeEach(inject(function(_$injector_) {
    $injector = _$injector_;
    $compile = $injector.get('$compile');
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');

    HelloController = createController();
  }));

  it('has hello world text', function () {
    expect(HelloController.hello).toBeDefined();
    expect(HelloController.hello).toBe('Hello, world!');
  });
});
