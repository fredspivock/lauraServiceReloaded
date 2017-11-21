var lauraServiceDirectives = angular.module('lauraServiceDirectives', []);

//click services link and scroll to what I do best
lauraServiceDirectives.directive('scrollOnClick', function($timeout){

	return{

		restrict:'A',
		link: function(scope, $elm){
			
			$elm.on('click', function(){ 

				$timeout( function(){

					$('#servicesLink').addClass('clicked');

					var scrollOffset = 300;
					var windowWidth = $(window).width();
					var windowHeight = $(window).height();

					if ($('html').hasClass('ios')) {
						// alert($(window).height());
						if (windowHeight == 372) scrollOffset = 760; // iPhone 4
						else if (windowHeight == 460) scrollOffset = 700; // iPhone 5
						else if (windowWidth == 375) scrollOffset = 600; // iPhone 6
					}

					$('body').animate({
						scrollTop: $("#servicesSection").offset().top - scrollOffset
					}, 2000);

				}, 300);
			});
		}
	}

});
