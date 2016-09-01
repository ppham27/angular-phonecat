describe('Phone', function() {
  var $httpBackend;
  var Phone;
  var phonesData = [
    {name: 'Phone X'},
    {name: 'Phone Y'},
    {name: 'Phone Z'}
  ];
  var phoneData = {name: 'phone xyz', phoneId: 'xyz'};
  
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(angular.mock.module('core.phone'));

  beforeEach(angular.mock.inject(function(_$httpBackend_, _Phone_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.when('GET', 'phones/phones.json').respond(phonesData);
    $httpBackend.when('GET', 'phones/xyz.json').respond(phoneData);

    Phone = _Phone_;
  }));

  it('should fetch the phones data from `/phones/phones.json`', function() {
    var phones = Phone.query();
        
    expect(phones).toEqual([]);

    $httpBackend.flush();
    expect(phones).toEqual(phonesData);
  });

  it('should fetch phone data from `/phones/xyz.json`', function() {
    var phone = Phone.get({phoneId: 'xyz'});

    expect(phone.$resolved).toBe(false);

    $httpBackend.flush();
    expect(phone).toEqual(phoneData);

  });

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
})
