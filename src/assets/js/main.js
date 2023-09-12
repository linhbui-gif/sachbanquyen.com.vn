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
    this.setupBookDetail();
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
}

// const owlCarousel = {
//   init: function () {
//     this.setupBookDetailCarousel()
//   },
//   setupBookDetailCarousel: function () {
//     $("#BookDetailSection-carousel").owlCarousel({
//       responsive: {
//         0: {
//           items: 1,
//           nav: true,
//           mouseDrag: true,
//           touchDrag: true,
//         },
//         991: {
//           items: 1,
//           mouseDrag: true,
//           touchDrag: true,
//         },
//       },
//       loop: false,
//       autoplay: false,
//       autoplayTimeout: 4000,
//       autoplayHoverPause: true,
//       smartSpeed: 300,
//       lazyLoad: true,
//       dots: true,
//       nav: true,
//       dotsData: true,
//       navText: [
//         '<img src="./assets/icons/icon-angle-left-gray-light.svg" alt="" />',
//         '<img src="./assets/icons/icon-angle-right-gray-light.svg" alt="" />',
//       ],
//       margin: 0,
//     });
//   },
// };
