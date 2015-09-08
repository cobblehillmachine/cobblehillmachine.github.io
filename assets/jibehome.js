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

var offset = $('.nav.mobile').offset().top

$(window).scroll(function() {
  $('.nav.mobile').toggleClass('sticky', $(window).scrollTop() > offset);
});

