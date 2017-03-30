app.directive('mySpec',  function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: { 
       info: '=?' 
        }, 
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: 'AE', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		 templateUrl: 'js/directives/my-spec/mySpec.html',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {

			activateCarousel();

			function activateCarousel(){
			$('#greenport').append(" fucking work");
	        //$(".carousel_item").hide();
	        $('.carousel_data .carousel_item').each(function(){	
		    $('#carousel').append( $(this).find('.image').html() );
	});

			animateCarousel();
			}

			function animateCarousel() {
				$('#carousel').roundabout({
				autoplay: true,
				startingChild: window.startingItem,
				childSelector: 'img',
				tilt: -4.5,
				minOpacity:1,
				minScale: .45,
				duration: 1200
				});
			}

			
		}
	};
});