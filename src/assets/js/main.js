window.onload = () => {
  carousel.init()
  seeMore.init()
  activeItem.init()
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
    if (container !== null){
      new Carousel(container, options, { Thumbs });
      Fancybox.bind("[data-fancybox]", {
        Thumbs : {
          type: "classic"
        }
      });
    }
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
      margin: 7.5,
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
const seeMore = {
  init:function (){
    this.seeMore()
  },
  seeMore:function (){
     const TableWrapper = document.querySelector('.BookDetail-table');
     let isExpand = false;
     if(TableWrapper == null) return;
     TableWrapper.addEventListener('click', (event) => {
       const clicked = event.target;
       if(clicked.classList.contains('see-full') && !isExpand){
         clicked.closest('.BookDetail-table').classList.add('active');
         clicked.innerText = "Thu gọn"
       } else if(clicked.classList.contains('see-full') && isExpand){
         clicked.closest('.BookDetail-table').classList.remove('active');
         clicked.innerText = "Xem đầy đủ"
       }
       isExpand = !isExpand;
     })
  },
}
const activeItem = {
  init:function (){
    this.activeItem()
  },
  activeItem: function (){
      const wrapper = document.querySelector('.BookDetail-suggest')
      const item = document.querySelectorAll('.BookDetail-suggest-wrapper .BookDetail-suggest-wrapper-item')
      wrapper.addEventListener('click', (e) => {
        const clicked = e.target;
        item.forEach((element) => element.classList.remove('active'))
        if(clicked.classList.contains('BookDetail-suggest-wrapper-item')){
          clicked.classList.add('active')
        } else {
          if(clicked.classList.contains('ebook-text')){
            clicked.closest('.BookDetail-suggest-wrapper-item').classList.add('active')
          }
        }
      })
  }
}
