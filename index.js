$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        loop:true,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});

$(window).scroll(function(){
    if($(window).scrollTop()) {
        $(".navbar").addClass("fixed");
    }
    else {
        $(".navbar").removeClass("fixed");
    }
});