var offset;
var features;
var homeBase;
var advantages;

$(window).load(function() {
  smoothScroll();
  offset = $('.nav.mobile').offset().top;
  features = $('#features').offset().top - 67;
  homeBase = $('#home-base').offset().top - 67;
  advantages = $('#advantages').offset().top - 67;
  stickyNav();
  currentDiv();
})

$(window).scroll(function() {
  stickyNav();
  currentDiv();
});

function smoothScroll() {
  $('.nav a').on('click', function(e) {
    e.preventDefault();
    if ($(window) > 900) {
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 600);
    } else {
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top - 67
      }, 600);
    }
    return false;
  })
}

function stickyNav()  {
  if ($(window).scrollTop() < offset) {
    $('.nav.mobile').removeClass('sticky');
    $('body').removeClass('sticky');
  } else if ($(window).scrollTop() > offset) {
    $('.nav.mobile').addClass('sticky');
     $('body').addClass('sticky');
  }
}

function currentDiv() {

  if ($(window).scrollTop() > features && $(window).scrollTop() < homeBase) {
    console.log('features');
  } else if ($(window).scrollTop() > homeBase && $(window).scrollTop() < advantages) {
    console.log('homebase');
  } else if ($(window).scrollTop() > advantages) {
    console.log('advantages')
  }
}
