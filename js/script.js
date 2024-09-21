$(document).ready(function() {
    var menuSection = $('.menu-section');
    var headerHeight = $('.header-section').outerHeight();

    $(window).scroll(function () {
        var scrollPos = $(this).scrollTop();
        if (scrollPos > headerHeight) {
            menuSection.addClass('fixed');
        } else {
            menuSection.removeClass('fixed');
        }
        var aboutSection = $(".about-section");
        if (aboutSection.get(0).getBoundingClientRect().top < window.innerHeight) {
            aboutSection.addClass("show-text");
        }
        
    });
    $('.menu-image').on('click', function() {
        $('.side-bar').addClass('visible');
        $('body').addClass('sidebar-open');
    });

    $('.close').on('click', function() {
        $('.side-bar').removeClass('visible');
        $('body').removeClass('sidebar-open');
    });
});
