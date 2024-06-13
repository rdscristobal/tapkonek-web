import $ from "jquery";
import "../js/vegas.min.js";
import Image1 from "../img/cover-image1.jpg";
import Image2 from "../img/cover-image2.jpg";
import Image3 from "../img/cover-image3.jpg";

window.jQuery = $;
window.$ = $;

(function ($) {
  "use strict";

  // NAVBAR
  $(".navbar-collapse a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  $(function () {
    $(".hero-slides").vegas({
      slides: [
        {
          src: Image1,
        },
        {
          src: Image2,
        },
        {
          src: Image3,
        },
      ],
      timer: false,
      animation: "kenburns",
    });
  });

  // CUSTOM LINK
  $(".smoothscroll").click(function () {
    var el = $(this).attr("href");
    var elWrapped = $(el);
    var header_height = $(".navbar").height() + 60;

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $("body,html").animate(
        {
          scrollTop: totalScroll,
        },
        300
      );
    }
  });
})(window.jQuery);
