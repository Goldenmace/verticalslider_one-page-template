/*
Template: Vertical Slider - Responsive HTML5
Author:Iqonicthemes 
Design and Developed by: Iqonicthemes
*/


(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict

$(document).ready(function() {
    if ($(window).width() <= 767) {
    /*console.log($('.right .section'));*/
    $('.right .section').unwrap().appendTo('.left');

    var ul = $('.left').find('.section').sort((a, b) => {

    return $(a).data('sort') - $(b).data('sort')
    })

    $('.left').empty().append(ul);

} else{
    $('#myContainer').multiscroll({
    /*keep section color by default */
    sectionsColor: ['#', '#', '#'],
    anchors: ['first', 'second', 'third','four'],
    menu: '#menu',
    navigation: true,
    navigationTooltips: ['One', 'Two', 'Three','Four'],
    loopBottom: true,
    loopTop: true,
    sectionSelector: '.section',
    leftSelector: '.left',
    rightSelector: '.right'
    });
    }

});


$(document).ready(function(){
                    $.doTimeout(2500, function(){
                    $('.repeat.go').removeClass('go');

                    return true;
                });
                    $.doTimeout(2520, function(){
                    $('.repeat').addClass('go');
                    return true;
                });
                
            });
          