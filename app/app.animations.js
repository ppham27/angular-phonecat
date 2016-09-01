goog.require('goog.fx');
goog.require('goog.fx.dom');
goog.require('goog.style');

angular.
  module('phonecatApp').
  animation('.phone', function phoneAnimationFactory() {
    return {
      addClass: animateIn,
      removeClass: animateOut
    };
    
    function animateIn(element, className, done) {
      if (className !== 'selected') return;

      element = element[0];
      goog.style.setStyle(element, 'display', 'block');
      goog.style.setStyle(element, 'position', 'absolute');
      goog.style.setStyle(element, 'top', '500px');
      goog.style.setStyle(element, 'left', '0px');
      var animation = new goog.fx.dom.SlideFrom(element, [0, 0], 500);
      animation.play();

      return function animateInEnd(wasCanceled) {
	if (wasCanceled) animation.stop();
      };
    }

    function animateOut(element, className, done) {
      if (className !== 'selected') return;

      element = element[0];
      goog.style.setStyle(element, 'display', 'block');
      goog.style.setStyle(element, 'position', 'absolute');
      goog.style.setStyle(element, 'top', '0px');
      goog.style.setStyle(element, 'left', '0px');
      var animation = new goog.fx.dom.SlideFrom(element, [0, -500], 500);
      animation.play();
      
      return function animateInEnd(wasCanceled) {
	if (wasCanceled) animation.stop();;
      };
    }
  });
