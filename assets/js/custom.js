/*=========== TABLE OF CONTENTS ===========

1. Scroll To Top
2. TODO: owl carousel - testemonial-carousel
3. Smooth Scroll spy
4. Animation support
======================================*/


$(document).ready(function () {
    "use strict";

    // 1. Scroll To Top 

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
            $('.return-to-top').fadeIn();
        } else {
            $('.return-to-top').fadeOut();
        }
    });

    $('.return-to-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);

        return false;
    });    

    // 2. owl carousel - testemonial-carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3 
            }
        }
    })
    //TODO:

    // 3. Smooth Scroll spy

    $('.header-area').sticky({
        topSpacing: 0
    });

    $('li.smooth-menu a').bind("click", function (event) {
        event.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - -1
        }, 1200, 'easeInOutExpo');
    });

    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 0
    });

    // 4.animation support

    $(window).load(function () {
        $(".about-us-txt h2").removeClass("animated fadeInUp").css({ 'opacity': '0' });
        $(".about-us-txt button").removeClass("animated fadeInDown").css({ 'opacity': '0' });
    });

    $(window).load(function () {
        $(".about-us-txt h2").addClass("animated fadeInUp").css({ 'opacity': '0' });
        $(".about-us-txt button").addClass("animated fadeInDown").css({ 'opacity': '0' });
    });
});
