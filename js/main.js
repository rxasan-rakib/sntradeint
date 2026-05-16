$(document).ready(function(){
    // Initialize Category Slider
    $('.category-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });





    // Reset hover state when modal is closed
    $('#quickViewModal, #cartSuccessModal').on('hide.bs.modal', function () {
        $('.add-to-cart-btn').blur(); // Prevents focus-induced scroll jumps
    });

    // Initialize Banner Slider
    $('.banner-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Quick View Modal Quantity Logic
    let currentUnitPrice = 0;
    
    function formatPrice(price) {
        return '৳' + price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    }

    // Function to set unit price (called when modal opens)
    window.setModalUnitPrice = function(priceString) {
        // Remove currency symbol and commas
        currentUnitPrice = parseFloat(priceString.replace(/[৳,]/g, ''));
    };

    $('.btn-plus').on('click', function() {
        let qtyInput = $('.qty-input');
        let currentVal = parseInt(qtyInput.val());
        if (!isNaN(currentVal) && currentVal < 99) {
            let newVal = currentVal + 1;
            qtyInput.val(newVal);
            $('.total-price').text(formatPrice(currentUnitPrice * newVal));
        }
    });

    $('.btn-minus').on('click', function() {
        let qtyInput = $('.qty-input');
        let currentVal = parseInt(qtyInput.val());
        if (!isNaN(currentVal) && currentVal > 1) {
            let newVal = currentVal - 1;
            qtyInput.val(newVal);
            $('.total-price').text(formatPrice(currentUnitPrice * newVal));
        }
    });
});
