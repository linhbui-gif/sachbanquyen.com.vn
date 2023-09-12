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
