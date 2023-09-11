window.onload = () => {
  // owlCarousel.init()
  // loading.init();
};

const loading = {
  init: function () {
    this.config();
  },
  config: function () {},
};

const owlCarousel = {
  init: function () {
    // this.setupTeamCarousel()
  },
  setupTeamCarousel: function () {
    const $owl = $("#about-team-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1,
          slideBy: 1,
        },
        575: {
          items: 2,
          slideBy: 2,
        },
        700: {
          items: 3,
          slideBy: 3,
        },
        991: {
          items: 4,
          slideBy: 4,
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      smartSpeed: 300,
      lazyLoad: true,
      dots: true,
      nav: true,
      navText: [
        '<img src="./assets/icons/icon-arrow-left-white.svg" alt="" />',
        '<img src="./assets/icons/icon-arrow-right-white.svg" alt="" />',
      ],
      margin: 20,
    });
  },
};
