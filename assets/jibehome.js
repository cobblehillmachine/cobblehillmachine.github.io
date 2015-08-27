$(window).load(function() {

})

function smoothScroll() {
  $('.nav a').on('click', function() {
    $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 600);
      return false;
  })
}
