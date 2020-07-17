(function ($) {
  "use strict"; // start of use strict

  // preloader
  $(window).on('load', function () {
    $(".loader").delay(2000).fadeOut("slow");
    $("#overlayer").delay(2000).fadeOut("slow");
  });

  // accodion icon down and up
  $(".caret-tri").on("click", function () {
    $("#i-fas").toggleClass("fa-chevron-down fa-chevron-up");
    $(".card-accordions").toggleClass("border-show");
  });


  // animate scroll
  $('.scroll-x').on('scroll', function () {
    var y = $(this).scrollTop();
    if (y) {
      $(".menu-top").css({ "line-height": "0", "margin-bottom": "0px" });
      $('.pt4').css('padding-top', '0px');
      $(".h").css("max-height", "0px");
      $(".scroll-x").css("max-height", "83vh");
      $(".nav").css({ "box-shadow": "rgba(0, 0, 0, 0.15) 0px 5px 7px -2px" });
    }

    if (y < 100) {
      setTimeout(function () {
        $('.pt4').css('padding-top', '0.85rem');
        $(".menu-top").css({ "line-height": "1.2", "margin-bottom": "1rem" });
      }, 100);
      $(".scroll-x").css({ "max-height": "50vh" });
    }
  });

  $(".scroll-x").scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll < 100) {
      $(".h").css("max-height", "100px");
      $(".nav").css({ "box-shadow": "none" });
    }
  });

  $(".scroll-x").scroll(function () {
    if ($(this).scrollTop()) {
      $('#back-to-top').css('display', 'block');
      $('.footer').css('bottom', '-56px');
    } else {
      $('#back-to-top').css('display', 'none');
      $('.footer').css('bottom', '0px');
    }
  });

  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('.footer').css('bottom', '-56px');
    $(".scroll-x").animate({ scrollTop: 0 }, 100);
    setTimeout(function () {
      $('.pt4').css('padding-top', '0.85rem');
      $(".menu-top").css({ "line-height": "1.2", "margin-bottom": "1rem" });
    }, 100);
    $(".scroll-x").css({ "max-height": "50vh" });
    $(".h").css("max-height", "100px");
    $(".nav").css({ "box-shadow": "none" });
    $('#back-to-top').css('display', 'none');
    $('.footer').css('bottom', '0px');
    return false;
  });
  // end animate scroll

  // click nav-link class, scroll down
  $('.nav-link').on('click', function () {
    setTimeout(function () {
      $(".menu-top").css({ "line-height": "0", "margin-bottom": "0px" });
      $('.pt4').css('padding-top', '0px');
      $(".h").css("max-height", "0px");
      $(".scroll-x").css("max-height", "83vh");
      $(".nav").css({ "box-shadow": "rgba(0, 0, 0, 0.15) 0px 5px 7px -2px" });
    }, 10);
    $('#back-to-top').css('display', 'block');
    $('.footer').css('bottom', '-56px');
  });


  // open click div unlimited
  var panelTriggers = document.getElementsByClassName('js-cd-panel-trigger');
  if (panelTriggers.length > 0) {
    for (var i = 0; i < panelTriggers.length; i++) {
      (function (i) {
        var panelClass = 'js-cd-panel-' + panelTriggers[i].getAttribute('data-panel');
        var panel = document.getElementsByClassName(panelClass)[0];

        // open panel when clicking on trigger btn
        panelTriggers[i].addEventListener('click', function (event) {
          event.preventDefault();
          addClass(panel, 'cd-panel--is-visible');
        });

        //close panel when clicking on 'x' or outside the panel
        panel.addEventListener('click', function (event) {
          if (hasClass(event.target, 'js-cd-close') || hasClass(event.target, panelClass)) {
            event.preventDefault();
            removeClass(panel, 'cd-panel--is-visible');
          }
        });
      })(i);
    }
  }

  function hasClass(el, className) {
    if (el.classList) return el.classList.contains(className);
    else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }
  function addClass(el, className) {
    if (el.classList) el.classList.add(className);
    else if (!hasClass(el, className)) el.className += " " + className;
  }
  function removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
  }
  // end click div unlimited

  //  rating star
  $('#user-rating-form').on('change', '[name="rating"]', function () {
    $('#selected-rating').text($('[name="rating"]:checked').val());
  });

})(jQuery);

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

