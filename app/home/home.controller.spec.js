describe('Home Controller', function() {
  var controller;

  beforeEach(function() {
    angular.mock.module('Home');
  });

  beforeEach(inject(function($injector) {
    controller = $injector.get('$controller')('homectrl');
  }));

  describe("Initialization", function () {
    it("Instantiate greeting to 'Hello!'", function () {
      expect(controller.greeting).toEqual('Hello!');
    });
  });

  describe('changegreeting function', function() {
    it("should change the greeting to 'Hallo!'", function () {
      controller.changegreeting('Hallo!');
      expect(controller.greeting).toEqual('Hallo!');
    });
  });
});
