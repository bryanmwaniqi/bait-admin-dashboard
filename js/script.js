$(function () {
    // Dashboard features carousel
    $('#features-slider').owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        autoplay: true,
        dots: true,
        autoplayHoverPause: true
    });

    // sidemenu text toggler
    let sideToggler = $('.toggle-input')
    $('.sidemenu-toggle').on('click', function () {
        if (sideToggler.is(':checked')) {
            // $('.sidemenu li i').toggleClass('fa-lg')
            $('#sidebar').toggleClass('menu-verbose')
            $('.toggler-nav').toggleClass('active')
            setTimeout(() => {
                $('.menu-link').toggleClass('d-none')
            }, 100);
        }
    })

    // Mobile view sidemenu toggler
    $('#sideMenuToggler').on('click', function () {
        $('#sidebar').toggleClass('active')
    })
})
