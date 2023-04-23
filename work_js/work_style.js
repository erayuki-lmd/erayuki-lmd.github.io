var zoom_in = function()
{
  $('.obj_appear').addClass("view")
}

var zoom_out = function(obj)
{
  $('.obj_appear').removeClass("view")
}

// $('.obj_appear').addClass("view_button")

function print_1(){
  $('.bg').addClass("view")
  $('.obj_appear').addClass("view1")
  $('.back_button').css("opacity",1)
}

function print_2(){
  $('.bg').addClass("view")
  $('.obj_appear').addClass("view2")
  $('.back_button').css("opacity",1)
}

function print_3(){
  $('.bg').addClass("view")
  $('.obj_appear').addClass("view3")
  $('.back_button').css("opacity",1)
}

function print_4(){
  $('.bg').addClass("view")
  $('.obj_appear').addClass("view4")
  $('.back_button').css("opacity",1)
}

function print_5(){
  $('.bg').addClass("view")
  $('.obj_appear').addClass("view5")
  $('.back_button').css("opacity",1)
}

function print_6(){
  $('.bg').addClass("view")
  $('.obj_appear').addClass("view6")
  $('.back_button').css("opacity",1)
}

function print_7(){
  $('.bg').addClass("view")
  $('.obj_appear').addClass("view7")
  $('.back_button').css("opacity",1)
}

function print_8(){
  $('.bg').addClass("view")
  $('.obj_appear').addClass("view8")
  $('.back_button').css("opacity",1)
}

function back(){
  $('.bg').removeClass("view")
  $('.obj_appear').removeClass("view1")
  $('.obj_appear').removeClass("view2")
  $('.obj_appear').removeClass("view3")
  $('.obj_appear').removeClass("view4")
  $('.obj_appear').removeClass("view5")
  $('.obj_appear').removeClass("view6")
  $('.obj_appear').removeClass("view7")
  $('.obj_appear').removeClass("view8")
  $('.back_button').css("opacity",0)
}