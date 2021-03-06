// preloader
$(window).on('load', function () {
  $(".loader").delay(2000).fadeOut("slow");
  $("#overlayer").delay(2000).fadeOut("slow");
});

$(document).ready(function () {
  "use strict"; // start of use strict

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
      $(".scroll-x").css("max-height", "85vh");
      $(".nav-shadow").css({ "box-shadow": "rgba(0, 0, 0, 0.15) 0px 5px 7px -6px" });
    }

    if (y < 10) {
      $('.pt4').css('padding-top', '0.85rem');
      $(".menu-top").css({ "line-height": "1.2", "margin-bottom": "1rem" });
      $(".scroll-x").css({ "max-height": "55vh" });
    }
  });

  $(".scroll-x").scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll < 10) {
      $(".h").css("max-height", "100px");
      $(".nav-shadow").css({ "box-shadow": "none" });
    }
  });

  $(".scroll-x").scroll(function () {
    if ($(this).scrollTop()) {
      $('#back-to-top').css('bottom', '0px');
    } else {
      $('#back-to-top').css('bottom', '-100px');
    }
  });

  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $(".scroll-x").scrollTop(0);
    $('.pt4').css('padding-top', '0.85rem');
    $(".menu-top").css({ "line-height": "1.2", "margin-bottom": "1rem" });
    $(".scroll-x").css({ "max-height": "50vh" });
    $(".h").css("max-height", "100px");
    $(".nav-shadow").css({ "box-shadow": "none" });
    $('#back-to-top').css('bottom', '0');
    return false;
  });
  // end animate scroll

  // click nav-link class, scroll down
  $('.b-nav-tab').on('click', function () {
    setTimeout(function () {
      $(".menu-top").css({ "line-height": "0", "margin-bottom": "0px" });
      $('.pt4').css('padding-top', '0px');
      $(".h").css("max-height", "0px");
      $(".scroll-x").css("max-height", "85vh");
      $(".nav-shadow").css({ "box-shadow": "rgba(0, 0, 0, 0.15) 0px 8px 6px -4px" });
    }, 10);
    $('#back-to-top').css('display', 'block');
  });

  $(".b-nav-tab").on('click', function (e) {
    e.preventDefault();
    $('.scroll-x').scrollTop(20);
    $(this).toggleClass("active");
  })

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

});


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function Tabs() {
  var bindAll = function () {
    var menuElements = document.querySelectorAll('[data-tab]');
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].addEventListener('click', change, false);
    }
  }

  var clear = function () {
    var menuElements = document.querySelectorAll('[data-tab]');
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.remove('active');
      var id = menuElements[i].getAttribute('data-tab');
      document.getElementById(id).classList.remove('active');
    }
  }

  var change = function (e) {
    clear();
    e.target.classList.add('active');
    var id = e.currentTarget.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  }

  bindAll();
}

var connectTabs = new Tabs();
