$(document).ready(function(){
    $('#list-post').owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

    $('#list-partner').owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:5
            },
            1000:{
                items:5
            }
        }
    })
    $('#list-prize').owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
});

