$(document).ready(function() {

    $('.btn-close').click(function() {
        $(".bottom-line").fadeOut(700);
    });

    $('.block-st').click(function() {
        $(this).find('.text-block-show').slideToggle();
    });

    $('#slider-bonus').owlCarousel({
        loop: true,
        center: false,
        nav: true,
        margin: 150,
        touchDrag: true,
        autoWidth: true,
        autoplay: false,
        smartSpeed: 1000,
        navContainer: ".navig-bonus",
        navText: ['<i class="nav10"></i>', '<i class="nav11"></i>'],
        autoplayTimeout: 7000,
        dots: false,
        mouseDrag: true,
        items: 4
    });

    $('#slider-bottom').owlCarousel({
        loop: false,
        center: false,
        nav: true,
        autoWidth: true,
        margin: 50,
        touchDrag: true,
        autoplay: false,
        smartSpeed: 1000,
        navContainer: ".navig",
        navText: ['<i class="nav7"></i>', '<i class="nav8"></i>'],
        autoplayTimeout: 7000,
        dots: false,
        mouseDrag: false,
        items: 3
    });

    $('#slider-top-txt').owlCarousel({
        loop: true,
        center: true,
        nav: true,
        touchDrag: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 7000,
        navText: ['<i class="nav4"></i>', '<i class="nav5"></i>'],
        animateOut: 'fadeOutLeft',
        animateIn: 'fadeInLeft',
        dots: false,
        mouseDrag: false,
        items: 1
    });

    $('#slider-top-bgr').owlCarousel({
        center: true,
        nav: false,
        touchDrag: false,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dots: false,
        mouseDrag: false,
        items: 1
    });

    $('#slider-top-txt').on('changed.owl.carousel', function(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);
        if (current < 0) {
            current = count;
        };
        if (current > count)  {
            current = 0;
        };
        $('#slider-top-bgr').trigger("to.owl.carousel", [current, 300])
    })

    $(".nav-btn").click(function(e) {
        $('.nav-btn').toggleClass('active');
        $('.nav-bgr-opacity').fadeToggle(200);
        $('.hide-left-nav').toggle(200);
        e.stopPropagation();
    });

    $(document).mouseup(function(e) { // событие клика по веб-документу
        var div = $('.nav-btn'); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass('active'); // скрываем его
        }
    });

    $('.hide-left-nav').click(function(e) {
        e.stopPropagation();
    });
    $(document).click(function() {
        $('.nav-bgr-opacity').fadeOut(200);
        $('.hide-left-nav').hide(200);
    });

    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 0) {
            $('.hed-fix').addClass('bgr-hed');
        } else {
            $('.hed-fix').removeClass('bgr-hed');
        }
    });

});
$(window).on('load', function() {
    $('.img-prew').append('<div class="img__tint"></div>');
});



$(document).ready(function() {
    // Assign some jquery elements we'll need
    var $swiper = $("#tournament-slider");
    var $bottomSlide = null; // Slide whose content gets 'extracted' and placed
    // into a fixed position for animation purposes
    var $bottomSlideContent = null; // Slide content that gets passed between the
    // panning slide stack and the position 'behind'
    // the stack, needed for correct animation style

    var mySwiper = new Swiper(".swiper-container", {
        autoHeight: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        roundLengths: true,
        loop: true,
        speed: 400,
        loopAdditionalSlides: 30,
        navigation: {
            nextEl: ".tournament-slider__next",
            prevEl: ".swiper-button-prev"
        },
        breakpoints: {
            960: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            640: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        }
    });
});



/*var deadline = "April 28 2019 00:17:00 GMT+0300"; // for endless timer
initializeClock('first_timer', deadline);
var deadline = "April 25 2019 00:10:00 GMT+0300"; // for endless timer
initializeClock('two_timer', deadline);
var deadline = "April 29 2019 00:00:00 GMT+0300"; // for endless timer
initializeClock('three_timer', deadline);
var deadline = "April 30 2019 00:24:00 GMT+0300"; // for endless timer
initializeClock('four_timer', deadline);
var deadline = "April 27 2019 00:12:25 GMT+0300"; // for endless timer
initializeClock('five_timer', deadline);
var deadline = "April 23 2019 00:01:30 GMT+0300"; // for endless timer
initializeClock('six_timer', deadline);*/