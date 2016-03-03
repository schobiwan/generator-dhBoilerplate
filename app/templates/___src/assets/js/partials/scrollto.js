/**
 * Scroll to
 * use data-delay="100" or antoher number do set a timeout for the scrolling
 */

var _viewport = $('html, body');

$('a[href^="#"]').on('click', function(event) {

  var _target = $( $(this).attr('href') );
  var _delay  = $(this).attr('data-delay');

  if( _target.length ) {
    event.preventDefault();

    if ( _delay != '' ) {

      setTimeout(function(){
        _viewport.animate({
          scrollTop: _target.offset().top - dh_headerHeight()
        }, 250, function () {
          window.location.hash = _target.selector;
        });
      }, _delay);

    } else {

      _viewport.animate({
        scrollTop: _target.offset().top - dh_headerHeight()
      }, 250, function () {
        window.location.hash = _target.selector;
      });

    }
  }
});

_viewport.bind("scroll mousedown DOMMouseScroll mousewheel keyup touchmove", function(){
  _viewport.stop();
});



$(window).scroll(function() {

  var _topButton = $('.backToTop');

  if ($(window).scrollTop() >= 80 ) {

    _topButton.addClass('active');

  } else {

    _topButton.removeClass('active');

  }
});