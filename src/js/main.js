$(function () {

    $('.general-slider, Product-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: false,
        autoplay: true
    })

    $('.new-products-slider, .buy-slider').owlCarousel({
        loop: true,
        margin: 30,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        nav: true,
        items: 5,
        dots: false
    })

    $('.toprated-slider').owlCarousel({
        loop: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        nav: true,
        items: 1,
        dots: false
    })

    $('.Product-slider').owlCarousel({
        loop: true,
        margin: 0,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        nav: true,
        items: $(".Product-slider__item").length >= 5 ? 5 : $(".Product-slider__item").length,
        dots: false,
    })

})