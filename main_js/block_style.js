$(function () {
    $(window).scroll(function () {
        $('.block_fade_shape_A').each(function () {
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
        $('.block_fade_shape_B').each(function () {
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
        $('.block_fade_shape_C').each(function () {
        const targetElement = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight) {
            $(this).addClass('view');
        }
        });
    });
});

var TextApeare = function(obj){
    $(obj).addClass('view')
} 

$(function () {
    $(window).scroll(function () {
        $('.block_fade_textbox').each(function () {
        const targetElement = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight) {
            setTimeout(TextApeare,500,this)
            
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