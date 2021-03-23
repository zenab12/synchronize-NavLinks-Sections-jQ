/*global console,$*/
$(function() {

    // smoothly scroll to element 
    "use strict";

    $('nav ul li a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - ($('nav').height()) - 20
        }, 2000);
        console.log('#' + $(this).data('scroll'));

    });

    // add active class on navbar  link and remove from siblings 

    $('nav li a').click(function() {

        $(this).addClass('active').parent().siblings().find('a').removeClass('active');

    });

    // sync navbar with sections 

    $(window).on('scroll', function() {

        $('section').each(function() {

            if ($(window).scrollTop() >= $(this).offset().top - ($('nav').height() + 30)) {
                let sectionId = $(this).attr('id');
                $('nav ul li a[data-scroll="' + sectionId + '"]').addClass('active').parent().siblings().find('a').removeClass('active');
            }
        });

        if ($(window).scrollTop() > 1) {

            $('nav').css('background-color', 'rgba(0, 0, 0, 0.3)')
        } else {

            $('nav').css('background-color', 'rgb(81, 5, 81)')

        }
    });



});