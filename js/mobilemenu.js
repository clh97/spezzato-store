function StartupPage() {
    'use strict';
    var $         = jQuery;
    var main      = $('.main-container')[0]; 
    var infoBar   = $('.info-bar')[0];
    var navBar    = $('nav')[0];
    var hamburger = $('.nav__hamburger')[0];
    var navMenu   = $('.nav__menu')[0];
    
    if(window.location.href === '/mobile/' || window.location.href.indexOf('/mobile/campanha') !== -1) {
        $(navBar).addClass('nav-bar--black')
        $(main).addClass('main--no-home')
    }

    $(navBar).removeClass('nav-bar--fixed');
        $(window).scroll(function (e) {
            var scroll = $(window).scrollTop();
            scroll >= 48 ? $(infoBar).addClass('info-bar--hidden') : $(infoBar).removeClass('info-bar--hidden');
            scroll >= 48 ? $(navBar).addClass('nav-bar--fixed') : $(navBar).removeClass('nav-bar--fixed');
        });

    $(hamburger).click(function (e) {
        var shown = $(navMenu).hasClass('nav__menu--shown');
        toggleNavOverlay(shown);
    });
    
    $(main).click(function (e) {
        toggleNavOverlay(true);
    });

    var toggleNavOverlay = function toggleNavOverlay(option) {
        if (option) {
            $(navMenu).removeClass('nav__menu--shown');
            $(hamburger).removeClass('nav__hamburger__close');
            $(main).removeClass('main--shown');
        } else {
            $(navMenu).addClass('nav__menu--shown');
            $(hamburger).addClass('nav__hamburger__close');
            $(main).addClass('main--shown');
        }
    };

    /* categories */
    const expandableCategory = $('.category--expandable');

    $(expandableCategory).click(e => {
    const submenuArray = Array.prototype.slice.call(e.currentTarget.childNodes); /* conversão de NodeList para Array */
    const { 0:submenu } = submenuArray.filter( i => $(i).hasClass('category__submenu'));
    const { 3:arrow } = submenu.parentElement.childNodes;
    $(submenu).hasClass('category__submenu--shown') ? $(submenu).removeClass('category__submenu--shown') : $(submenu).addClass('category__submenu--shown')
    $(arrow).hasClass('category__arrow--active') ? $(arrow).removeClass('category__arrow--active') : $(arrow).addClass('category__arrow--active')
    });
}

jQuery(function(){
    StartupPage();    
});
