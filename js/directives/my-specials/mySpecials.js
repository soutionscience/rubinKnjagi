app.directive('mySpecials',  function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		 templateUrl: 'js/directives/my-specials/mySpecials.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {

			activateSlider();

			function activateSlider(){
				$('.secondSlider').slick({
					 infinite: true,
                     slidesToShow: 3,
                     slidesToScroll: 3,
                     autoplay: true,
                     autoplaySpeed: 2000,

				})
			}
			
		}
	};
});