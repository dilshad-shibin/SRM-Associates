jQuery(document).ready(function ($) {
    "use strict";

    function elementskit_event_manager(_event, _selector, _fn){
        $(document).on(_event, _selector, _fn);
    }

    elementskit_event_manager('click', '.elementskit-dropdown-has > a', function (e) {
		e.preventDefault();

		var menu = $(this).parents('.elementskit-navbar-nav');
		var li = $(this).parent();
		var dropdown = li.find('>.elementskit-dropdown');

		dropdown.find('.elementskit-dropdown-open').removeClass('elementskit-dropdown-open');

		jQuery(window).on('resize', function() {
			if (jQuery(window).width() > 991) {
				jQuery(dropdown).removeClass('elementskit-dropdown-open');
			}
		})
		if(dropdown.hasClass('elementskit-dropdown-open')){
			dropdown.removeClass('elementskit-dropdown-open');
		}else{
			dropdown.addClass('elementskit-dropdown-open');
		}

	});

	elementskit_event_manager('click', '.elementskit-menu-toggler', function (e) {
		e.preventDefault();
		var parent_conatiner = $(this).parents('.elementskit-menu-container').parent();
		if(parent_conatiner.length < 1){
			parent_conatiner = $(this).parent();
		}
		var off_canvas_class = parent_conatiner.find('.elementskit-menu-offcanvas-elements');

		jQuery(window).on('resize', function() {
			if (jQuery(window).width() > 991) {
				off_canvas_class.removeClass('active');
			}
		})
		if(off_canvas_class.hasClass('active')){
			off_canvas_class.removeClass('active');
		}else{
			off_canvas_class.addClass('active');
		}

	});


	$('.elementskit-dropdown-has .scroll').on('click', function() {
		$(".elementskit-menu-container").removeClass("active");
	    $(".elementskit-menu-overlay").removeClass("active");

	});


	// Smooth scroll for the navigation and links with .scrollto classes
	$('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  if (target.length) {
			var top_space = 0;
	
			if ($('#header').length) {
			  top_space = $('#header').outerHeight();
	
			  if (! $('#header').hasClass('header-scrolled')) {
				top_space = top_space - 20;
			  }
			}
	
			$('html, body').animate({
			  scrollTop: target.offset().top - top_space
			}, 1500, 'easeInOutExpo');
	
			if ($(this).parents('.main-nav, .mobile-nav').length) {
			  $('.main-nav .active, .mobile-nav .active').removeClass('active');
			  $(this).closest('li').addClass('active');
			}
	
			if ($('body').hasClass('mobile-nav-active')) {
			  $('body').removeClass('mobile-nav-active');
			  $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
			  $('.mobile-nav-overly').fadeOut();
			}
			return false;
		  }
		}
	  });

}); // end ready function

