describe('checkmark', function() {
  
  beforeEach(angular.mock.module('core'));
  
  it('should convert boolean values to unicode checkmark or cross', 
     angular.mock.inject(function(checkmarkFilter) {
       expect(checkmarkFilter(true)).toBe('\u2713');
       expect(checkmarkFilter(false)).toBe('\u2718');
     }));
});
