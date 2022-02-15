/*====================
[Table of content begin]
=====================
> PRELOADER
> HEAD-BANNER SPACE
> HEADER MENU ACTIVE
> HEADER DROP-DOWN STARTS
> SHOW NAVIGATION TOGGLE
> WOW ANIMATION INTIATION
> BACK TO TOP
====================
[ End table of content]
====================*/
/* Spinner Loader Js Start Here*/
$(window).on('load', function(){
  $(".loader").fadeOut("1500");
});
/* Spinner Loader Js End Here*/
/* PRELOADER STARTS here */
$(document).ready(function () {
    $(window).on('load', function () { // makes sure the whole site is loaded 
        $('#loading').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(200).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(200).css({
            'overflow': 'visible'
        });
    })
/* PRELOADER ENDS here */
/*HEAD-BANNER SPACE STARTS Here */
    function bannerheight() {
        var head_height = $("header").outerHeight(true);
        $(".after-header").css("margin-top", head_height + "px")
    };
    bannerheight();
    $(window).resize(bannerheight);

    function scrolling() {
        var sticky = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 15) sticky.removeClass('transparent');
        else sticky.addClass('transparent');
    };
    scrolling();
    $(window).scroll(scrolling);
/*HEAD-BANNER SPACE ENDS Here */
/*SHOW NAVIGATION TOGGLE STARTS Here */
$('.navbar-toggler').on('click', () => {
      $('html').toggleClass('show-menu');
            
    });
 $('.navbar-nav .nav-item > .nav-link.js-scroll-trigger').on('click', () => {
      $('html').removeClass('show-menu');
            
});
/*SHOW NAVIGATION TOGGLE ENDS Here */
/*BACK TO TOP STARTS Here */
    $("#toTop").hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#toTop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });
    });
/*BACK TO TOP ENDS Here */
/*Testimonial Home Page 2 Js Start Here */
var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 3; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    nav: false,
    center: true,
    dots: false,
    loop: true,
    responsiveClass: true,
    responsiveRefreshRate : 200,
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    dots: false,
    nav: true,
    responsiveRefreshRate : 100,
    navText: ['<i class="fal fa-long-arrow-alt-left"></i>','<i class="fal fa-long-arrow-alt-right"></i>'],
    autoplay: true, //true if you want enable autoplay
    smartSpeed:3000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2,
            margin: 20
        },
        768: {
            items: 3,
            margin: 20
        },
        992: {
            items: 3,
            margin: 20
        },
        1199: {
            items: 3,
            margin: 20
        }
    }
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});
/* Testimonial Home Page 2 Js End Here */
/*HEADER DROP-DOWN STARTS Here*/
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
$(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(
            function () {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function () {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
        );
    } else {
        $dropdown.off("mouseenter mouseleave");
    }
});
/*HEADER DROP-DOWN ENDS Here*/
/*Testimonial Home Page 1 Js Start Here */
$('#testimonial').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    nav:true,
    rewind: false,
    navContainer: ".slider-nav",
    navText: ['<i class="fal fa-long-arrow-alt-left"></i>','<i class="fal fa-long-arrow-alt-right"></i>'],
    responsiveClass: true,
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
})
/*Testimonial Home Page 1 Js End Here */
/* Blog Home Page 2 Js Start Here */
$('#bloghome2').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    nav:true,
    rewind: false,
    navText: ['<i class="fal fa-long-arrow-alt-left"></i>','<i class="fal fa-long-arrow-alt-right"></i>'],
    responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:2
        },
        1600:{
            items:3
        }
    }
})
/*Blog Home Page 2 Js End Here */
/*screenshort-carousel Js Start Here */
$('.screenshort-carousel').owlCarousel({
    loop: true,
    margin: 30,
    navContainer: ".screenshort-nav",
    navText: ['<i class="fal fa-long-arrow-alt-left"></i>','<i class="fal fa-long-arrow-alt-right"></i>'],
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 3,
            margin: 15,
        },
        414: {
            items: 3,
            margin: 15,
        },
        576: {
            items: 3,
            margin: 15,
        },
        768: {
            items: 3,
            margin: 40,
        },
        992: {
            items: 5,
        },
        1200: {
            items: 5
        },
        1920: {
            items: 5
        }
    }
});
/*screenshort-carousel Js End Here */
/*Home page 3 testimonial Js Start Here */
$('.testimonial3').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    nav:true,
    rewind: false,
    margin:15,
    navText: ['<i class="fal fa-long-arrow-alt-left"></i>','<i class="fal fa-long-arrow-alt-right"></i>'],
    responsiveClass: true,
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
})
/*Home page 3 testimonial Js End Here */
/*One page Scrolling Js Start Here */
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 56)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });
/*One page Scrolling Js End Here */
