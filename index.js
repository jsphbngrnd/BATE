console.log('Hello World! This is Bate');

$(document).ready(function() {
    console.log("Initializing Swiper...");

    const swiper = new Swiper('.explore_wrapper', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    console.log("Swiper initialized.");
});