$(window).load(function() {
  smoothScroll();
})

function smoothScroll() {
  $('.nav a').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 600);
      return false;
  })
}


var $window = $(window);
var $stickyEl = $('.nav.mobile');
var elTop = $('.nav.mobile').offset().top;

$window.scroll(function() {
  $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
});

