$(document).ready(function () {
  $(".karusel-1").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3200,
        nav: false,
      },
      600: {
        autoplay: true,
        autoplayTimeout: 3200,
        items: 1,
        dots: true,
      },
      1000: {
        items: 1,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3200,
      },
    },
  });
  $(".karusel-2").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      520: {
        items: 2,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4200,
      },
      780: {
        items: 3,
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4500,
      },
      1020: {
        items: 4,
      },
      1200: {
        items: 4,
        autoplay: true,
        autoplayTimeout: 4500,
        nav: true,
      },
    },
  });
  $(".hamburger-menu").click(function () {
    $(".header .menu-items").css({
      left: "15px",
      top: "15px",
    });
  });
  $(".header .navbar,.about-us, .mi-2, .head-footer").click(function () {
    $(".header .menu-items").css({
      left: "-335px",
      top: "-25px",
      transtion: "ease-out 0.2s",
    });
  });
  $(".content-catalog ul li").click(function () {
    let h = $(this).html();
    $(".content-catalog input").attr("placeholder", h);
  });
});
