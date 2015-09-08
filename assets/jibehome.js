var offset;

$(window).load(function() {
  smoothScroll();
  offset = $('.nav.mobile').offset().top + $('.nav.mobile').height();;
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



$(window).scroll(function() {
  if ($(window).scrollTop() < offset) {
    $('.nav.mobile').removeClass('sticky');
  } else if ($(window).scrollTop() > offset) {
    $('.nav.mobile').addClass('sticky');
  }
});

