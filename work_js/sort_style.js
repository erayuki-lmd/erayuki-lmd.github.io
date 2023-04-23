var first = {'top':'230vw',"left":"14vw"}
var second = {'top':'230vw',"left":"54vw"}
var third = {'top':'270vw',"left":"14vw"}
var fourth = {'top':'270vw',"left":"54vw"}
var fifth = {'top':'310vw',"left":"14vw"}
var sixth = {'top':'310vw',"left":"54vw"}
var seventh = {'top':'350vw',"left":"14vw"}
var eighth = {'top':'350vw',"left":"54vw"}
var not_selected = {"opacity":0.5}
var selected = {"opacity":1}

var game_tag = function(selecting){
  $('.obj_1').css(selecting);
  $('.obj_2').css(selecting);
}

var excel_tag = function(selecting){
  $('.obj_3').css(selecting);
  $('.obj_4').css(selecting);
  $('.obj_5').css(selecting);
}

var design_tag = function(selecting){
  $('.obj_6').css(selecting);
  $('.obj_7').css(selecting);
  $('.obj_8').css(selecting);
}

var all_sort = function(){
    $('.obj_1').css(first);
    $('.obj_2').css(second);
    $('.obj_3').css(third);
    $('.obj_4').css(fourth);
    $('.obj_5').css(fifth);
    $('.obj_6').css(sixth);
    $('.obj_7').css(seventh);
    $('.obj_8').css(eighth);
    game_tag(selected);
    excel_tag(selected);
    design_tag(selected);
}

var game_sort = function(){
  $('.obj_1').css(first);
  $('.obj_2').css(second);
  $('.obj_3').css(third);
  $('.obj_4').css(fourth);
  $('.obj_5').css(fifth);
  $('.obj_6').css(sixth);
  $('.obj_7').css(seventh);
  $('.obj_8').css(eighth);
  game_tag(selected);
  excel_tag(not_selected);
  design_tag(not_selected);
}

var excel_sort = function(){
  $('.obj_3').css(first);
  $('.obj_4').css(second);
  $('.obj_5').css(third);
  $('.obj_1').css(fourth);
  $('.obj_2').css(fifth);
  $('.obj_6').css(sixth);
  $('.obj_7').css(seventh);
  $('.obj_8').css(eighth);
  game_tag(not_selected);
  excel_tag(selected);
  design_tag(not_selected);
}

var design_sort = function(){
  $('.obj_6').css(first);
  $('.obj_7').css(second);
  $('.obj_8').css(third);
  $('.obj_1').css(fourth);
  $('.obj_2').css(fifth);
  $('.obj_3').css(sixth);
  $('.obj_4').css(seventh);
  $('.obj_5').css(eighth);
  game_tag(not_selected);
  excel_tag(not_selected);
  design_tag(selected);
}


var select = document.getElementById('tag-select');

select.onchange = function(){
  if(this.value=="all"){
    all_sort();
  }else if(this.value=="game"){
    game_sort();
  }else if(this.value=="excel"){
    excel_sort();
  }else if(this.value=="design"){
    design_sort();
  }
}
