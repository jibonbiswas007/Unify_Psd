(function($) {
    "use strict";
    
    jQuery(document).ready(function($){
        $('.homepage-slides').owlCarousel({
            loop:true,
            nav:false,
            dots:true,
            animateIn:'bounceInRight',
            animateOut:'zoomOut',
            autoplay: true,
            smartSpeed: 1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });

        // Testimonial Active
        $('.testimonial-active').owlCarousel({
            loop:true,
            nav:false,
            dots:true,
            animateIn:'lightSpeedIn',
            animateOut:'zoomOut',
            autoplay: true,
            smartSpeed: 1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
        });
        // Blog Active
        $('.blog-active').owlCarousel({
            loop:true,
            nav:false,
            dots:true,
            autoplay: true,
            smartSpeed: 1500,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
        });
        // Brand Active
        $('.brand-carousel').owlCarousel({
            loop:true,
            nav:false,
            dots:true,
            autoplay: true,
            smartSpeed: 1500,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });

        // filter items on button click
        $('.portpolio-menu li').on( 'click',  function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
        var $grid = $('.portpolio').isotope({
          itemSelector: '.col-lg-4',
          percentPosition: true,
        });

        // Bar-1
        $(document).ready(function(){
            $('#bar1').barfiller({
            	barColor: '#8EC448',
            });
        });
        // Bar-2
        $(document).ready(function(){
            $('#bar2').barfiller({
            	barColor: '#8EC448',
            });
        });
        // Bar-3
        $(document).ready(function(){
            $('#bar3').barfiller({
            	barColor: '#8EC448',
            });
        });
        // Bar-4
        $(document).ready(function(){
            $('#bar4').barfiller({
            	barColor: '#8EC448',
            });
        });
        // Bar-5
        $(document).ready(function(){
            $('#bar5').barfiller({
            	barColor: '#8EC448',
            });
        });

        // Slicknav Menu
        $('#menu').slicknav({
        	label: '',
        	duration: 800,
        	easingOpen: 'swing',
        	easingClose: 'swing'
        });
        // Wow js
        new WOW().init();
    });
    
    jQuery(window).load(function(){
        
    });

    
    
}(jQuery));