/* Created by Tivotal */

$(document).ready(function () {
  $(".menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(".share").click(function () {
    $(this).toggleClass("share-active");
  });

  $(window).on("load scroll", function () {
    $(".menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    $("section").each(function () {
      let height = $(this).height();
      let top = $(window).scrollTop();
      let id = $(this).attr("id");
      let offset = $(this).offset().top - 200;

      if (top >= offset && top < height + offset) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  $(".screen-slider").owlCarousel({
    loop: true,
    center: true,
    autoplay: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      710: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $(".review-slider").owlCarousel({
    loop: true,
    center: true,
    autoplay: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      750: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
});
