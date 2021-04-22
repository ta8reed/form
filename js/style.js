$(document).ready(function() {
    "use strict";
    $(".next").click(function() {
      $(".Registration").hide();
    $('.' + $(this).data('value')).css("display","block").fadeIn(200).addClass("animate__animated animate__fadeIn").css(" transition", ".6 s all ease");

    /*$("body").find(".contt").not($('.' + $(this).data('value'))).fadeOut(200);*/
}); 

$(".back").click(function() {
  $(".Committee").hide();
$('.' + $(this).data('value')).css("display","block").fadeIn(200).addClass("animate__animated animate__fadeIn").css(" transition", ".6 s all ease");

/*$("body").find(".contt").not($('.' + $(this).data('value'))).fadeOut(200);*/
}); 



$(".custom-control-input").click(function() {
  $(".cont").hide();
$('.' + $(this).data('value')).css("display","block").fadeIn(200).addClass("animate__animated animate__fadeIn").css(" transition", ".6 s all ease");

}); 

});



