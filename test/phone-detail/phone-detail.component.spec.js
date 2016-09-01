describe('phoneDetail', function() {
  beforeEach(angular.mock.module('phoneDetail'));
  
  describe('controller', function() {
    var $httpBackend, ctrl;
    // phone fixture
    var xyzPhoneData = {
      name: 'phone xyz', 
      images: ['image/url1.png', 'image/url2.png']
    }

    // underscores ignored by angular parser, so no name conflict
    beforeEach(angular.mock.inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.when('GET', 'phones/xyz.json').respond(xyzPhoneData);
      ctrl = $componentController('phoneDetail', {$routeParams: {phoneId: 'xyz'}});
    }));

    it('should fetch the phone details', function() {
      jasmine.addCustomEqualityTester(angular.equals);
      expect(ctrl.phone.$resolved).toBe(false);
      
      $httpBackend.flush();
      expect(ctrl.phone).toEqual(xyzPhoneData);
    });      
  });  
});
