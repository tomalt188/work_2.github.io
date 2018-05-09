
(function($) {
	'use strict';
	
	var bzone = $(window);
	
	/* change Menu background on scroll js  */
	
	bzone.on('scroll', function() {
		
		var menu_area  = $('.menu-area');
		
		if (bzone.scrollTop() > 0) {
			menu_area.addClass('sticky-menu');
		} else {
			menu_area.removeClass('sticky-menu');
		}
	});
	
	/* Navigation js   */
	
	$(document).on('click', '.navbar-collapse.in', function (e) {
		if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
			$(this).collapse('hide');
		}
	});
	
	$('body').scrollspy({
		target: '.navbar-collapse',
		offset: 195
	});
	
	/* Smooth scroll to anchor    */
	
	$('a.smooth_scroll').on("click", function (e) {
		e.preventDefault();
		var anchor = $(this);
          $('html, body').stop().animate({
			  scrollTop: $(anchor.attr('href')).offset().top - 50
		  }, 1000);
	});
	
	/*    Scroll-to-top    */
	
	bzone.on( 'scroll', function () {
		var top_top = $('#scroll-to-top');
		if (bzone.scrollTop() > 500) {
			top_top.fadeIn();
		} else {
			top_top.fadeOut();
			}
    });
	
	/* Home Page Slider Settings */
	$('#carousel-example-generic').carousel({
		interval: 5000,
		cycle: false
	});
	
	/* Home Page Work Slider Settings */
	$('.owl-work').owlCarousel({
		items               : 4,
		itemsDesktop        : [1199, 1],
		itemsDesktopSmall   : [980, 1],
		itemsTablet         : [768, 1],
		itemsMobile         : [479, 1],
		autoHeight          : false,
		pagination          : false,
		navigation          : true,
		navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
	});
	
	/* Home Page Testimonial Slider js */
	$(".testimonial-list").owlCarousel({
		items: 3,
		slideSpeed      : 1000,
		paginationSpeed : 500,
		singleItem      : false,
		lazyLoad        : false,
		pagination      : true,
		navigation      : false,
		autoPlay        : true,
	});
	
	/* Home Page client js */
	$(".owl-client").owlCarousel({
          items               : 5,
          autoPlay            : true,
          itemsDesktop        : [1199, 4],
          itemsDesktopSmall   : [980, 3],
          itemsTablet         : [768, 3],
          itemsMobile         : [479, 2],
          pagination          : false,
          navigation          : false,
          autoHeight          : false,
    });
	
	/* ++++++++++++++ Google Map js ++++++++++++++++++ */
	
	var myCenter = new google.maps.LatLng(55.1866351,30.2002573);
		function initialize()
		{
			var mapProp = {
				center:myCenter,
				scrollwheel: false,
				zoom:15,
				mapTypeId:google.maps.MapTypeId.ROADMAP
			};
			var map=new google.maps.Map(document.getElementById("contactgoogleMap"),mapProp);
			var marker=new google.maps.Marker({
				position:myCenter,
				animation:google.maps.Animation.BOUNCE,
				icon:'assets/img/map-marker.png',
				map: map,
			});
			var styles = [
				{
					stylers: [
						{ hue: "#c5c5c5" },
						{ saturation: -100 }
					]
				},
			];
			map.setOptions({styles: styles});
			marker.setMap(map);
		}
		google.maps.event.addDomListener(window, 'load', initialize);
	
	
	
	
})(jQuery);