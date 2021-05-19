$(function(){

    $('.slider__inner').slick({
        arrows:false,
        dots:true,
      
    });

    $('.works__inner').slick({
        slidesToShow: 4,
        sliderToScroll:1,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="img/SVG/slide-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="img/SVG/slider-rith.svg" alt=""></button>',
    });

  });