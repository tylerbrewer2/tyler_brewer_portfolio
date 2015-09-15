$(document).ready(function() {
  $(".arrow").click(function() {
    $('html, body').animate({
        scrollTop: $(".knowledge").offset().top
    }, 1000);
});
$(".about_link").click(function() {
  $('html, body').animate({
      scrollTop: $(".knowledge").offset().top
  }, 1000);
});
$(".work_link").click(function() {
  $('html, body').animate({
      scrollTop: $(".work").offset().top
  }, 1000);
});
$(".contact_link").click(function() {
  $('html, body').animate({
      scrollTop: $(".contact").offset().top
  }, 1000);
});
})
