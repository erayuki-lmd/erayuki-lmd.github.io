const root = document.querySelector(':root');
var style = 0;


function first_style(){
    root.style.setProperty("--bg_color", 'white');
    root.style.setProperty("--banner_bg", 'white');
    root.style.setProperty("--banner_grad", 'yellow');
    root.style.setProperty("--banner_line", '3px');
    root.style.setProperty("--obj_color", '#101010');
    root.style.setProperty("--word_font_eng", '"Monotype Corsiva",fantasy');
    root.style.setProperty("--bg_img_A", 'none');
}

function new_style(){
    root.style.setProperty("--bg_color", '#000060');
    root.style.setProperty("--banner_bg", '#FF0000');
    root.style.setProperty("--banner_grad", '#FF0000');
    root.style.setProperty("--banner_line", '0px');
    root.style.setProperty("--obj_color", 'yellow');
    root.style.setProperty("--word_font_eng", '"arial black"');
    root.style.setProperty("--bg_img_A", 'url("../new_img/new_bg_A.png")');
}



function remove_grad(){
    $('.change_animation').css({"width":"0vw","height":"0vh","top":"50vh","left":"50vw"})
}



function change_style(){
    if(style == 0){
        style = 1;
        $('.change_animation').css({"width":"200vw","height":"200vh","top":"-50vh","left":"-50vw","background":"#000060"});
        setTimeout(new_style,1000);
        setTimeout(remove_grad,1000);
        setTimeout(firework_before,2000);
    }else{
        style = 0;
        $('.change_animation').css({"width":"200vw","height":"200vh","top":"-50vh","left":"-50vw","background":"white"});
        setTimeout(first_style,1000);
        setTimeout(remove_grad,1000);
    }
   
}

function firework_before(){
    if(style == 1){
        if(Math.random() > 0.5){
            root.style.setProperty("--bg_img_A", 'url("../new_img/new_bg_A.png")');
        }else{
            
            root.style.setProperty("--bg_img_A", 'url("../new_img/new_bg_B.png")');
        }
        $(".bg_animation").css({"top":100*Math.random()+"vh","left":15+70*Math.random()+"vw"});
        firework_start();
    }
}

function firework_start(){
    $(".firework").css({"width":"30vw","height":"30vw","top":"-15vw","left":"-15vw","transition":"2s"});
    setTimeout(firework_finish,2000);
}

function firework_finish(){
    $(".firework").css({"opacity":0});
    setTimeout(firework_after,2000);
}

function firework_after(obj){
    $(".firework").css({"opacity":1, "width":"0vw","height":"0vw","top":"0vw","left":"0vw","transition":"0s"});
    setTimeout(firework_before,2000);
}
