$(document).ready(function() {
  $(".arrow").click(function() {
    $('html, body').animate({
        scrollTop: $(".scroll-knowledge").offset().top
    }, 1000);
  });
  $(".about_link").click(function() {
    $('html, body').animate({
        scrollTop: $(".scroll-knowledge").offset().top
    }, "1000");
  });
  $(".work_link").click(function() {
    $('html, body').animate({
        scrollTop: $(".scroll-work").offset().top
    }, 1000);
  });
  $(".contact_link").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact").offset().top
    }, 1000);
  });
  $("#all_link").click(function(){
    $(".design").fadeIn("slow");
    $(".development").fadeIn("slow");
  })
  $("#design_link").click(function(){
    $(".design").fadeIn("slow");
    $(".development").fadeOut("slow");
  });
  $("#development_link").click(function(){
    $(".development").fadeIn("slow");
    $(".design").fadeOut("slow");
  })
})
