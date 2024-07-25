

jQuery(function () {

	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop()) {
			jQuery('#back-top').fadeIn();
		} else {
			jQuery('#back-top').fadeOut();
		}
	});

	jQuery("#back-top").click(function () {
		//1 second of animation time
		//html works for FFX but not Chrome
		//body works for Chrome but not FFX
		//This strange selector seems to work universally
		jQuery("html, body").animate({ scrollTop: 0 }, 1500);

	});
	jQuery('#back-bottom').on('click', function() {
		var headerHeight = jQuery('#myHeader').outerHeight();
		var target = jQuery(this).attr('href');
		var offsetTop = jQuery(target).offset().top;
		offsetTop = offsetTop - headerHeight;
		jQuery('html, body').animate({ scrollTop: offsetTop}, 1500);
	});


	
	jQuery(".our-offerings-slider").owlCarousel({
		loop: true,
		margin: 20,
		items: 5,
		nav: false,
		dots: true,
		autoHeight:false,
		responsive: {
		  0: {
			items: 1,
			center: false,
			autoHeight:true,
		  },
		 480: {
			items: 1,
			center: false,
			autoHeight:true,
		  },
		  575: {
			center: false,
			nav: true,
			dots: false,
			items: 2,
			margin: 10,
		  },
		  767: {
			nav: false,
			dots: true,
			center: false,
			items: 5,
			margin: 20,
		  },
		 
		 
		},
	  });
	});




 
jQuery(window).scroll(function () {
  if (jQuery(".count-digit").hasClass("counter-loaded")) return;
  jQuery(".count-digit").addClass("counter-loaded");

  jQuery(".count-digit").each(function () {
    var $this = jQuery(this);
    jQuery({ Counter: 0 }).animate(
      { Counter: $this.text() },
      {
        duration: 4000,
        easing: "swing",
        step: function () {
          $this.text(Math.ceil(this.Counter));
        },
      }
    );
  });
});

jQuery(window).scroll(function () {
	if (jQuery(".count-digit").hasClass("counter-loaded")) return;
	jQuery(".count-digit").addClass("counter-loaded");
  
	jQuery(".count-digit").each(function () {
	  var $this = jQuery(this);
	  jQuery({ Counter: 0 }).animate(
		{ Counter: $this.text() },
		{
		  duration: 4000,
		  easing: "swing",
		  step: function () {
			$this.text(Math.ceil(this.Counter));
		  },
		}
	  );
	});
  });
