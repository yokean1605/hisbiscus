(function ($) {
  "use strict"; // Start of use strict

  $(".caret-tri")
    .on("click", function () {
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
      $(".scroll-x").css("max-height", "74vh");
      $("span").css({ "line-height": "0px" });
      setTimeout(function () {
      }, 500);

    } else if (y < 5) {
      $(".scroll-x").css({ "max-height": "39vh" });
    }

  });

  $(".scroll-x").scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll == 0) {
      setTimeout(function () {
        $(".h").css("max-height", "100px");
        $("span").css({ "line-height": "1.5" });
      }, 300);
      // // $(".scroll-x").css("max-height", "39vh");
    }
  });

})(jQuery); // End of use strict

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}