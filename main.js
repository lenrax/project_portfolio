$(document).ready(function(){

  $("#about_div_btn").click(function() {
  
    $('html, body').animate({
        scrollTop: $("#about_div").offset().top
    }, 500);
  });


  $("#projects_div_btn").click(function() {
  
    $('html, body').animate({
        scrollTop: $("#projects_div").offset().top
    }, 500);
  });

  $(".contact_div_btn").click(function() {
  
    $('html, body').animate({
        scrollTop: $("#contact_div").offset().top
    }, 500);
  });

  $("#home_btn").click(function() {
  
    $('html, body').animate({
        scrollTop: $(".intro_div").offset().top
    }, 500);
  });


});




  