$(document).ready(function(){

    let $btns = $('.project-area .button-group button'); 
    
    $btns.click((e) => {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    });

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
      });

    $('.site-main .client-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            544:{
                items:2
            }
        }
    })

    let nav_offset_fixed = $('.header-area').height()+ 50;

    function navbarFixed(){
        if($('.header-area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_fixed){
                    $('.header-area .main_menu').addClass('navbar-fixed');
                }else{
                    $('.header-area .main_menu').removeClass('navbar-fixed');
                }
            })
        }
    }
    navbarFixed();
});