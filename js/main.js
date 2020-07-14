$(document).ready(function () {
  $(".caret-tri").on("click", function () {
    $("#i-fas").toggleClass("fa-chevron-down fa-chevron-up");
    $(".card-accordions").toggleClass("border-show");
  });

  // preloader
  $(window).on('load', function () {
    $(".loader").delay(2000).fadeOut("slow");
    $("#overlayer").delay(2000).fadeOut("slow");
  });

  $('.scroll-x').on('scroll', function () {
    var y = $(this).scrollTop();
    if (y > 300) {
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
      $(".scroll-x").css({ "max-height": "42vh" });
    }
  });

  $(".scroll-x").scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll < 100) {
      $(".h").css("max-height", "100px");
      $(".nav").css({ "box-shadow": "none" });
    }
  });

  $('.nav-link').on('click', function () {
    setTimeout(function () {
      $(".menu-top").css({ "line-height": "0", "margin-bottom": "0px" });
      $('.pt4').css('padding-top', '0px');
      $(".h").css("max-height", "0px");
      $(".scroll-x").css("max-height", "83vh");
      $(".nav").css({ "box-shadow": "rgba(0, 0, 0, 0.15) 0px 5px 7px -2px" });
    }, 50);
    $('#back-to-top').css('display', 'block');
    $('.footer').css('bottom', '-56px');
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
    $(".scroll-x").css({ "max-height": "42vh" });
    $(".h").css("max-height", "100px");
    $(".nav").css({ "box-shadow": "none" });
    $('#back-to-top').css('display', 'none');
    $('.footer').css('bottom', '0px');
    return false;
  });
});


function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}