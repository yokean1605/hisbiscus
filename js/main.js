(function ($) {
  "use strict"; // Start of use strict

  $(".caret-tri").on("click", function () {
    $("#i-fas").toggleClass("fa-chevron-up fa-chevron-down");
  });

  // preloader
  $(window).on('load', function () {
    $(".loader").delay(2000).fadeOut("slow");
    $("#overlayer").delay(2000).fadeOut("slow");
  });

  $('.scroll-x').on('scroll', function () {
    var y = $(this).scrollTop();
    if (y > 200) {
      $(".h").css("max-height", "0px");
      $(".nav").css({ "box-shadow": "rgba(0, 0, 0, 0.15) 0px 5px 7px -1px" });
      setTimeout(function () {
        $(".scroll-x").css("max-height", "79vh");
      }, 10);

    } else if (y < 5) {
      $(".scroll-x").css({ "max-height": "49vh" });
    }

  });

  $(".scroll-x").scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll == 0) {
      setTimeout(function () {
        $(".h").css("max-height", "100px");
        $(".nav").css({ "box-shadow": "none" });
      }, 10);
      // // $(".scroll-x").css("max-height", "39vh");
    }
  });

  $(".scroll-x").scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-to-top').fadeIn();
      $('.footer').css('bottom', '-56px');
    } else {
      $('#back-to-top').fadeOut();
      $('.footer').css('bottom', '0px');
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('#back-to-top').tooltip('hide');
    $('.footer').css('bottom', '-56px');
    $(".scroll-x").animate({ scrollTop: 0 }, 300);
    return false;
  });

  $('#back-to-top').tooltip('show');


})(jQuery); // End of use strict

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}