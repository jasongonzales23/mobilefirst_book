$(document).ready(function(){
  //all code that should run after the DOM loads goes here
  $('.navbar').removeClass('open');
  $('.menu-button').on('click', function(){
    $('.navbar').toggleClass('open');
  });

  var changeSlide = function(){
    var $active = $('.slider .active');
    if ( $active.length == 0 ) {
      $active = $('.slide').last();
    }
    var $next =  $active.next().length ? $active.next() : $('.slide').first();
    $next.addClass('active');
    $active.removeClass('active');
  };

  $(function() {
    setInterval( changeSlide, 5000 );
  });

  $('.thumbnail').on('click', function(){
    var idx = $(this).index();
    $('.featured-images').children('.active').removeClass('active');
    $('.featured-image-item').eq(idx).addClass('active');
    $('.thumbnail-images').children('.active').removeClass('active');
    $('.thumbnail').eq(idx).addClass('active');
  });

});
