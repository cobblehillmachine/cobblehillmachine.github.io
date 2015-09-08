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



$(window).scroll(function() {
  $('.nav.mobile').addClass('sticky', $(window).scrollTop() > $('.nav.mobile').offset().top);
  $('.nav.mobile').removeClass('sticky', $(window).scrollTop() < $('.nav.mobile').offset().top);
});

