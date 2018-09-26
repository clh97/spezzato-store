function StartProduct() {
  'use strict';

  var $ = jQuery;

  var carouselContainer = $('.main__product__carousel');
  var carouselImages = $('.carousel__images__image');

  var carouselNextButton = $(carouselContainer).children('.carousel__next');
  var carouselPrevButton = $(carouselContainer).children('.carousel__prev');

  $(carouselNextButton).click(function () {
    changeImage('next');
  });

  $(carouselPrevButton).click(function () {
    changeImage('prev');
  });

  var changeImage = function changeImage(option) {
    var selected = $(carouselImages).filter('.carousel__images__image--selected');
    switch (option) {
      case 'next':
        try {
          if (selected.next()[0].localName === 'img') {
            selected.toggleClass('carousel__images__image--selected');
            selected.next().toggleClass('carousel__images__image--selected');
          }
        } catch (error) {}
        break;
      case 'prev':
        try {
          if (selected.prev()[0].localName === 'img') {
            selected.toggleClass('carousel__images__image--selected');
            selected.prev().toggleClass('carousel__images__image--selected');
          }
        } catch (error) {}
        break;

      default:
        break;
    }
  };
}

jQuery(function(){
  StartProduct();
});