$(function () {
    // Owl carousel sliders
    // Dashboard features carousel
    $('#features-slider').owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        autoplay: true,
        dots: true,
        autoplayHoverPause: true
    });

    // Mobile view sidemenu toggler
    $('#sideMenuToggler').on('click', function (e) {
        e.stopPropagation();
        $('div#sidebar').toggleClass('active')
        setTimeout(function(){
            $('.overlay').toggleClass('enabled')
        },100);
        
    });

    $(document).on('click', function(e) {
        if (e.target.id != "sideMenuToggler" && e.target.id != "sidebar") {
            $('#sidebar').removeClass("active");
            setTimeout(function(){
                $('.overlay').removeClass('enabled')
            },100);
        }  
    });


    // Show & hide sub-menu on sidemenu item click
    // $('li.account-dropdown').on('click', function () {
    //     $(this).children('.sub-menu').toggleClass('active');
    // });
    
    // $('#main').on('click', function(e) {
    //     if ($('.sub-menu').hasClass('active')) {
    //         $('.sub-menu').removeClass("active");
    //     }  
    // });

    // show scrollbar on hover
    $('#sideMenuToggler').on('click', function () {
        $('').toggleClass('d-none')
    });

    // email list item onclick logic
    $('li.email-item').on('click', function () {
        $('#email-tab').toggleClass('d-none');
        $('#read-email-tab').toggleClass('d-none');
    });

    // read email back-to-email list arrow
    $('#back-to-email').on('click', function () {
        $('#email-tab').toggleClass('d-none');
        $('#read-email-tab').toggleClass('d-none');
    });

    // Regional Sales Traffic distribution toggle logic
    $('#all').on('click', function () {
        if (!$(this).parent().hasClass('active')) {
            $('.sales-traffic > .col').removeClass('active');
            $(this).parent().addClass('active').siblings();
            $('#all-tab').removeClass('d-none').siblings().addClass('d-none');
        }
    });
    $('#europe').on('click', function () {
        if (!$(this).parent().hasClass('active')) {
            $('.sales-traffic > .col').removeClass('active');
            $(this).parent().addClass('active').siblings();
            $('#europe-tab').removeClass('d-none').siblings().addClass('d-none');
        }
    });
    $('#usa').on('click', function () {
        if (!$(this).parent().hasClass('active')) {
            $('.sales-traffic > .col').removeClass('active');
            $(this).parent().addClass('active').siblings();
            $('#usa-tab').removeClass('d-none').siblings().addClass('d-none');
        }
    });
    $('#asia').on('click', function () {
        if (!$(this).parent().hasClass('active')) {
            $('.sales-traffic > .col').removeClass('active');
            $(this).parent().addClass('active').siblings();
            $('#asia-tab').removeClass('d-none').siblings().addClass('d-none');
        }
    });
    $('#africa').on('click', function () {
        if (!$(this).parent().hasClass('active')) {
            $('.sales-traffic > .col').removeClass('active');
            $(this).parent().addClass('active').siblings();
            $('#africa-tab').removeClass('d-none').siblings().addClass('d-none');
        }
    });
    $('#australia').on('click', function () {
        if (!$(this).parent().hasClass('active')) {
            $('.sales-traffic > .col').removeClass('active');
            $(this).parent().addClass('active').siblings();
            $('#australia-tab').removeClass('d-none').siblings().addClass('d-none');
        }
    });

    // Toggling product select-dropdown filters
    // $('#category-select').on('click', function() {
    //     $(this).siblings().removeClass('active');
    //     $(this).toggleClass('active');
    // });
    // $('#sub-category-select').on('click', function() {
    //     $(this).siblings().removeClass('active');
    //     $(this).toggleClass('active');
    // });
    // $('#brand-select').on('click', function() {
    //     $(this).siblings().removeClass('active');
    //     $(this).toggleClass('active');
    // });
    // $('#model-select').on('click', function() {
    //     $(this).toggleClass('active')
    // });


     
      
})
