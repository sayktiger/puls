$(document).ready(function(){
    $('.carousel__inner').slick({
            infinite: true,
            speed: 1200,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/sliders/shift_left.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/sliders/shift_rigth.svg"></button>',
            adaptiveHeight:true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    variableWidth: true,
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    slidesToShow: 1,
                    variableWidth: true,
                  }
                }
              ]
          }
    );
  });