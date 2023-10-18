console.log('Hello World! This is Bate');

$(document).ready(function() {
    console.log("Initializing Splide...");

    new Splide('.splide', {
        type: 'loop',
        gap: '6.9375rem', // This sets the spacing between slides
        autoWidth: true, // This ensures slides only take up the width of their content
    }).mount();

    console.log("Splide initialized.");
});
