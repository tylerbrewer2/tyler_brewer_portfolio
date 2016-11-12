$(document).ready(function() {

  scaleVideoContainer();

  initBannerVideoSize('.video-container .poster img');
  initBannerVideoSize('.video-container .filter');
  initBannerVideoSize('.video-container video');

  $(window).on('resize', function() {
      scaleVideoContainer();
      scaleBannerVideoSize('.video-container .poster img');
      scaleBannerVideoSize('.video-container .filter');
      scaleBannerVideoSize('.video-container video');
  });

  $(".arrow").click(function() {
    $('html, body').animate({
        scrollTop: $(".scroll-knowledge").offset().top
    }, 1000);
  });
  $(".about_link").click(function() {
    $('html, body').animate({
        scrollTop: $(".scroll-knowledge").offset().top
    }, 1000);
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

  var $design_elements = $('.design');
  var $development_elements = $('.development');
  var $design_hidden = false;
  var $development_hidden = false;

  $(".all_link").click(function(){
    $design_elements.show();
    $development_elements.show();
  });

  $(".development_link").click(function(){
    $development_elements.show();
    $design_elements.hide();
  });

  $('.design_link').click(function() {
    $design_elements.show();
    $development_elements.hide();
  });
});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
