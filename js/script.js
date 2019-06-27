// SideNav
$(document).ready(function () {
    $('.sidenav').sidenav();
});

// Slider
$(document).ready(function () {
    $('.slider').slider({
        indicators: false,
        height: 500,
        transition: 600,
        interval: 3000
    });
});

// Parallax
$(document).ready(function () {
    $('.parallax').parallax();
});

// MaterialBox
$(document).ready(function () {
    $('.materialboxed').materialbox();
});

// ScrollSpy
$(document).ready(function () {
    $('.scrollspy').scrollSpy({
        scrollOffset: 40
    });
})

// About
$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

// ScrollTop
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // Services
    if ( wScroll > $('.services').offset().top -225 ) {
        $('.services .pKiri2').each(function(i) {
            setTimeout(function() {
                $('.services .pKiri2').eq(i).addClass('pMuncul');
            }, 300);
        });
    }
    if ( wScroll > $('.services').offset().top -225 ) {
        $('.services .pKanan2').each(function(i) {
            setTimeout(function() {
                $('.services .pKanan2').eq(i).addClass('pMuncul');
            }, 300);
        });
    }
    if ( wScroll > $('.services').offset().top -225 ) {
        $('.services .pTengah').each(function(i) {
            setTimeout(function() {
                $('.services .pTengah').eq(i).addClass('pMuncul');
            }, 300);
        });
    }
    // Portfolio
    if ( wScroll > $('.portfolio').offset().top - 225) {
        $('.portfolio .portfolioImg').each(function(i) {
            setTimeout(function() {
                $('.portfolio .portfolioImg').eq(i).addClass('pMuncul');
            }, 150 * (i + 1));
        });
    }
    if ( wScroll > $('.portfolio').offset().top -225) {
        $('.portfolio .portfolioImg2').each(function(i) {
            setTimeout(function() {
                $('.portfolio .portfolioImg2').eq(i).addClass('pMuncul');
            }, 300 / (i + 1));
        });
    }
});