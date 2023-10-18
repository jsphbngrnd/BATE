console.log('Hello World! This is Bate');

$(document).ready(function() {
    console.log("Initializing Splide...");

    new Splide('.splide', {
        type: 'loop',
        gap: '6.9375rem',
        autoWidth: true,
        autoplay: true,
        interval: 2500,
        pauseOnHover: true, 
    }).mount();

    console.log("Splide initialized.");
});
