
$(function () {
    $(window).scroll(function () {
        $('.block_fade_box_left').each(function () {
        const targetElement = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight) {
            $(this).addClass('view');
        }
        });
    });
});

$(function () {
    $(window).scroll(function () {
        $('.block_fade_box_right').each(function () {
        const targetElement = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight) {
            $(this).addClass('view');
        }
        });
    });
});


var fade_A = function(){
    $(".first_page_fade_A").addClass("view")
    setTimeout(fade_B,1000)
}

var fade_B = function(){
    $(".first_page_fade_B").addClass("view")
}
fade_A()