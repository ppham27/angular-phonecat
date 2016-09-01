describe('phoneList', function() {
  beforeEach(angular.mock.module('phoneList'));
  
  describe('controller', function() {    
    var $httpBackend, ctrl;
    
    // underscores ignored by angular parser, so no name conflict
    beforeEach(angular.mock.inject(function($componentController,
					    _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.when('GET', 'phones/phones.json')
	.respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}])
      ctrl = $componentController('phoneList');
    }));
    
    it('should create a `phones` property with 2 phones fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);
      expect(ctrl.phones.$resolved).toBe(false);
      $httpBackend.flush();
      expect(ctrl.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` model', function() {
      expect(ctrl.orderProp).toBe('age');
    });
  });
});


