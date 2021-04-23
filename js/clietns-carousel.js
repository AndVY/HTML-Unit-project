$(document).ready(function () {
    //find slider block
    const owl = $("#clients-slider");
    //start it with parameters
    owl.owlCarousel({
        items: 1,
        loop: true,
    });

    // Go to the next item
    $('.slider__arrow--right').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.slider__arrow--left').click(function () {
        owl.trigger('prev.owl.carousel');
    })
});



