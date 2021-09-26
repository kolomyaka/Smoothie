$(document).ready(function(){
    // Testimonials slider
    $('.testimomnials__slider').slick({
      arrows: false,
      dots: true,
    });

    // Top slider
    $('.home__slider').slick({
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      autoplay: true,
      autoplaySpeed: 3000,
    });
});