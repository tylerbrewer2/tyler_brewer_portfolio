$(document).ready(function() {
  $(".arrow").click(function() {
    $('html, body').animate({
        scrollTop: $(".work").offset().top
    }, 1000);
});
})
