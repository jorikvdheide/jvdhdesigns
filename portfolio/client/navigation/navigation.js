$(window).scroll(function() {
    if($(this).scrollTop() > 400) {
        $('.navbar-fixed-top').addClass('opaque');
    } else {
        $('.navbar-fixed-top').removeClass('opaque');
    }
});