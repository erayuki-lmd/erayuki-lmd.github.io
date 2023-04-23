$(function () {
    $(window).scroll(function () {
        $('.banner_fade').each(function () {
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > windowHeight*0.1) {
            $(this).addClass('view');
        }
        });
    });
});

$(function () {
    $(window).scroll(function () {
        $('.banner_fade').each(function () {
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll < windowHeight*0.1) {
            $(this).removeClass('view');
        }
        });
    });
});