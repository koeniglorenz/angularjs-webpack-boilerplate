describe('Home Directive', function() {

  var element, scope;

  beforeEach(function() {
    angular.mock.module('Home');
  });

  beforeEach(inject(function($compile, $rootScope) {

    $scope = $rootScope.$new();

    element = angular.element('<homedir></homedir>');

    $compile(element)($scope);

    $rootScope.$digest();

  }));

  describe('Initialization', function() {
    it("should load the template", function () {
      expect(element).toBeDefined();
    });
  });

  describe('Contents', function() {
    it("Should contain <h2> with 'Home'", function () {
      expect(element.find('h2').text()).toEqual('Home');
    });
  });

});
