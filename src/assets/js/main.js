window.onload = () => {
  carousel.init()
};

const loading = {
  init: function () {
    this.config();
  },
  config: function () {},
};
const carousel = {
  init: function () {
    // this.setupBookDetail();
    this.setupHomeBannerCarousel();
    this.setupFlashSaleBannerCarousel()
    this.setupFlashSaleBannerCarousel01()
    this.setupFlashSaleBannerCarousel02()
    this.setupBookCategory()
    this.setupBookSuggest()
  },
  setupBookDetail: function () {
    const container = document.getElementById("myCarousel");
    const options = {
      Dots: false,
      Thumbs: {
        type: "classic",
      },
    };

    new Carousel(container, options, { Thumbs });
    Fancybox.bind("[data-fancybox]", {
      Thumbs : {
        type: "classic"
      }
    });
  },
  setupHomeBannerCarousel: function () {
    $("#HomeBanner-top").owlCarousel({
      responsive: {
        0: {
          items: 1,
          slideBy: 1,
        },
        991: {
          items: 1,
          slideBy: 1,
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      smartSpeed: 300,
      lazyLoad: true,
      dots: true,
      nav: false,
      margin: 0,
    })
  },
  setupFlashSaleBannerCarousel: function () {
    $("#carouselFlashSale").owlCarousel({
      responsive: {
        0: {
          items: 2,
          slideBy: 2,
        },
        991: {
          items: 5,
          slideBy: 5,
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      smartSpeed: 300,
      lazyLoad: true,
      dots: false,
      nav: true,
      margin: 0,
      navText: [
        '<img src="./assets/icons/icon-circle-left.svg" alt="" />',
        '<img src="./assets/icons/icon-circle-right.svg" alt="" />',
      ],
    })
  },
  setupFlashSaleBannerCarousel01: function () {
    $("#carouselFlashSale01").owlCarousel({
      responsive: {
        0: {
          items: 2,
          slideBy: 2,
        },
        991: {
          items: 5,
          slideBy: 5,
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      smartSpeed: 300,
      lazyLoad: true,
      dots: false,
      nav: true,
      margin: 0,
      navText: [
        '<img src="./assets/icons/icon-circle-left.svg" alt="" />',
        '<img src="./assets/icons/icon-circle-right.svg" alt="" />',
      ],
    })
  },
  setupFlashSaleBannerCarousel02: function () {
    $("#carouselFlashSale02").owlCarousel({
      responsive: {
        0: {
          items: 2,
          slideBy: 2,
        },
        991: {
          items: 5,
          slideBy: 5,
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      smartSpeed: 300,
      lazyLoad: true,
      dots: false,
      nav: true,
      margin: 0,
      navText: [
        '<img src="./assets/icons/icon-circle-left.svg" alt="" />',
        '<img src="./assets/icons/icon-circle-right.svg" alt="" />',
      ],
    })
  },
  setupBookCategory: function () {
    $("#carouselBookCategory").owlCarousel({
      responsive: {
        0: {
          items: 2,
          slideBy: 2,
        },
        991: {
          items: 7,
          slideBy: 7,
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      smartSpeed: 300,
      lazyLoad: true,
      dots: false,
      nav: true,
      margin: 12,
      navText: [
        '<img src="./assets/icons/icon-circle-left.svg" alt="" />',
        '<img src="./assets/icons/icon-circle-right.svg" alt="" />',
      ],
    })
  },
  setupBookSuggest: function () {
    $("#carouselBookSuggest").owlCarousel({
      responsive: {
        0: {
          items: 2,
          slideBy: 2,
        },
        991: {
          items: 4,
          slideBy: 4,
        },
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      smartSpeed: 300,
      lazyLoad: true,
      dots: false,
      nav: true,
      margin: 12,
      navText: [
        '<img src="./assets/icons/icon-circle-left.svg" alt="" />',
        '<img src="./assets/icons/icon-circle-right.svg" alt="" />',
      ],
    })
  },
}
