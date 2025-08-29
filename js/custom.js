document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Tiny Slider initialization for testimonial slider
    var testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        tns({
            container: testimonialSlider,
            items: 1,
            axis: "horizontal",
            controlsContainer: "#testimonial-nav",
            swipeAngle: false,
            speed: 100,
            nav: true,
            controls: true,
            autoplay: true,
            autoplayHoverPause: true,
            autoplayTimeout: 2500,
            autoplayButtonOutput: false
        });
    }

    // Tiny Slider initialization for image grid slider
    var imageGridSlider = document.querySelector('.slider-imgs-grid');
    if (imageGridSlider) {
        tns({
            container: imageGridSlider,
            items: 1,
            slideBy: 'page',
            autoplay: true,
            autoplayButtonOutput: false,
            mouseDrag: true,
            controls: false,
            nav: true,
            speed: 800,
            autoplayTimeout: 10000,
            responsive: {
                768: {
                    items: 1
                }
            }
        });
    }

    // Initialize all product sliders
    var productSliders = document.querySelectorAll('.product-slider');
    if (productSliders.length > 0) {
        productSliders.forEach(function(slider) {
            tns({
                container: slider,
                items: 1,
                autoplay: true,
                autoplayButtonOutput: false,
                mouseDrag: true,
                controls: false,
                nav: true,
                speed: 1500,
                autoplayTimeout: 3500,
                navPosition: "bottom",
            });
        });
    }

    // Quantity counter functionality
    var sitePlusMinus = function() {
        var quantity = document.getElementsByClassName('quantity-container');

        function createBindings(quantityContainer) {
            var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
            var increase = quantityContainer.getElementsByClassName('increase')[0];
            var decrease = quantityContainer.getElementsByClassName('decrease')[0];
            increase.addEventListener('click', function (e) {
                var value = parseInt(quantityAmount.value, 10);
                value = isNaN(value) ? 0 : value;
                value++;
                quantityAmount.value = value;
            });
            decrease.addEventListener('click', function (e) {
                var value = parseInt(quantityAmount.value, 10);
                value = isNaN(value) ? 0 : value;
                if (value > 0) value--;
                quantityAmount.value = value;
            });
        }

        if (quantity.length > 0) {
            for (var i = 0; i < quantity.length; i++ ) {
                createBindings(quantity[i]);
            }
        }
    };
    sitePlusMinus();
});
