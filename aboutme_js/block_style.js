
$(function () {
    $(window).scroll(function () {
        $('.fade_rank_A').each(function () {
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
        $('.fade_rank_B').each(function () {
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
        $('.fade_rank_C').each(function () {
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
        $('.fade_message').each(function () {
        const targetElement = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight) {
            $(this).addClass('view');
        }
        });
    });
});

var CycleAppear = function(obj){
    $(obj).css('opacity', 1);
} 

$(function () {
    $(window).scroll(function () {
        $('.main_2').each(function () {
        const targetElement = $(this).offset().top;
        const scroll = $(window).scrollTop();
        const windowHeight = $(window).height();
        if (scroll > targetElement - windowHeight) {
            setTimeout(CycleAppear,0,".cycle_1");
            setTimeout(CycleAppear,2500,".line_1");
            setTimeout(CycleAppear,2500,".cycle_2");
            setTimeout(CycleAppear,5000,".line_2");
            setTimeout(CycleAppear,5000,".cycle_3");
            setTimeout(CycleAppear,7500,".line_3");
            setTimeout(CycleAppear,7500,".cycle_4");
            setTimeout(CycleAppear,10000,".line_4");
            setTimeout(CycleAppear,10000,".cycle_5");
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