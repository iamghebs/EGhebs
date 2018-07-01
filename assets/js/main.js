(function($) {

  "use strict";

  $(window).on('load', function() {

  /*Page Loader active
    ========================================================*/
    $('#spinner').fadeOut();

  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

  /*Modals https://codepen.io/anon/pen/KevLPK*/

  var modalBtns = [...document.querySelectorAll(".button")];
  modalBtns.forEach(function(btn){
  btn.onclick = function() {
  var modal = btn.getAttribute('data-modal');
  document.getElementById(modal).style.display = "block";
  }
  });

  window.onclick = function(event) {
  if (event.target.className === "modal") {
  event.target.style.display = "none";
  }
  }

      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });
    wow.init();

    // one page navigation
    $('.navbar-nav').onePageNav({
            currentClass: 'active'
    });

    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });

  });

}(jQuery));

  //.SmoothScroll codepen
  $('a.smooth-scroll[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
