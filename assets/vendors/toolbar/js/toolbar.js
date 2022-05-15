(function ($) {
  "use strict";

  // boxed layout switcher
  if ($(".boxed-switcher").length) {
    $(".boxed-switcher").on("click", function () {
      $("body").toggleClass("boxed-wrapper");
      window.dispatchEvent(new Event('resize'));
    });
  }

  // color switcher

  if ($("#styleOptions").length) {
    $("#styleOptions").styleSwitcher({
      hasPreview: false,
      fullPath: "assets/css/colors/",
      cookie: {
        expires: 999,
        isManagingLoad: true
      }
    });
  }

  if ($("#colorMode").length) {
    $("#colorMode").styleSwitcher({
      hasPreview: false,
      fullPath: "assets/css/",
      defaultThemeId: 'jssMode',
      cookie: {
        expires: 999,
        isManagingLoad: true
      }
    });
  }

  if ($(".style-switcher").length) {
    $("#switcher-toggler").on("click", function (e) {
      e.preventDefault();
      $(".style-switcher").toggleClass("active");
    });
  }

})(jQuery);