$(document).ready(function(){
    $('.carousel__inner').slick({
            infinite: true,
            speed: 1200,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/sliders/shift_left.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/sliders/shift_rigth.svg"></button>',
            // autoplay: true,
            // autoplaySpeed: 2000,
            // responsive: [
            //     {
            //       breakpoint: 768,
            //       settings: {
            //         dots: true,
            //         arrows: false,
            //         centerMode: true,
            //         centerPadding: '40px'
            //       }
            //     },
            //     {
            //       breakpoint: 480,
            //       settings: {
            //         arrows: false,
            //         centerMode: true,
            //         centerPadding: '40px',
            //         slidesToShow: 1
            //       }
            //     }
            //   ]
          }
    );
  });