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
    this.setupBookDetail02();
    this.setupHomeBannerCarousel();
    this.setupFlashSaleBannerCarousel();
    this.setupFlashSaleBannerCarousel01();
    this.setupFlashSaleBannerCarousel02();
    this.setupBookCategory();
    this.setupBookCategoryQuaySach();
    this.setupBookSuggest();
    this.carouselBookSuggestQuaySach();
    this.setupBookSameCategory();
    this.setupBookBenitorCategory();
  },
  setupBookDetail: function () {
    $(document).ready(function() {
      $("#big").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
      });

      $("#thumbs").owlCarousel({
        items: 2,
        nav: false,
        dots: false,
        margin: 15,
        responsive: {
          0: {
            items: 1,
            slideBy: 1,
            margin: 4
          },
          991: {
            items: 2,
            slideBy: 1,
          },
        },
      });
      $("#thumbs").on("click", ".owl-item", function (e) {
        e.preventDefault();
        var thumbnailIndex = $(this).index();
        $("#big").trigger("to.owl.carousel", [thumbnailIndex, 300]);
      });
        Fancybox.bind("[data-fancybox]", {
          Thumbs: {
            type: "classic",
          },
          width: 525,
          height:525
        })
    });

    var mobileQuery = window.matchMedia('(max-width: 1200px)');

    mobileQuery.addListener(handleWindowSizeChange);
    function handleWindowSizeChange(e) {
      if (e.matches) {
        $("#thumbs").find('.owl-item').css('width', '74px');
      }
    }
    handleWindowSizeChange(mobileQuery);
  },
  setupBookDetail02: function () {
    $(document).ready(function() {
      $("#big02").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: [
          '<img src="./assets/icons/arrow-left-single.svg" alt="" />',
          '<img src="./assets/icons/arrow-right-single.svg" alt="" />',
        ],
      });

      $("#thumbs02").owlCarousel({
        items: 4,
        nav: false,
        dots: false,
        margin: 15
      });
      $("#thumbs02").on("click", ".owl-item", function (e) {
        e.preventDefault();
        var thumbnailIndex = $(this).index();
        console.log('thumbnailIndex', thumbnailIndex)
        $("#big02").trigger("to.owl.carousel", [thumbnailIndex, 300]);
      });
    });

  },
  setupHomeBannerCarousel: function () {
    $("#carouselHome").owlCarousel({
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
    });
  },
  setupFlashSaleBannerCarousel: function () {
    $("#carouselFlashSale").owlCarousel({
      responsive: {
        0: {
          items: 2,
          slideBy: 2,
          margin: 10,
          nav: false,
        },
        768: {
          items: 3,
          slideBy: 3,
          margin: 10,
        },
        1200: {
          items: 5,
          slideBy: 5,
          margin: 10,
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
        '<img src="./assets/icons/arrow-left-single.svg" alt="" />',
        '<img src="./assets/icons/arrow-right-single.svg" alt="" />',
      ],
    });
  },
  setupFlashSaleBannerCarousel01: function () {
    $("#carouselFlashSale01").owlCarousel({
      responsive: {
        0: {
          items: 2,
          slideBy: 1,
          nav:false
        },
        768: {
          items: 3,
          slideBy: 1,
        },
        992: {
          items: 4,
          slideBy: 1,
        },
        1200: {
          items: 5,
          slideBy: 1,
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
      margin: 10,
      navText: [
        '<img src="./assets/icons/arrow-left-single.svg" alt="" />',
        '<img src="./assets/icons/arrow-right-single.svg" alt="" />',
      ],
    });
  },
  setupFlashSaleBannerCarousel02: function () {
    $("#carouselFlashSale02").owlCarousel({
      responsive: {
        0: {
          items: 2,
          slideBy: 2,
          nav:false
        },
        768: {
          items: 3,
          slideBy: 3,
        },
        1200: {
          items: 5,
          slideBy: 5,
          margin: 10,
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
        '<img src="./assets/icons/arrow-left-single.svg" alt="" />',
        '<img src="./assets/icons/arrow-right-single.svg" alt="" />',
      ],
    });
  },
  setupBookCategory: function () {
    $("#carouselBookCategory").owlCarousel({
      responsive: {
        0: {
          items: 3,
          slideBy: 1,
        },
        767: {
          items: 4,
          slideBy: 1,
        },
        991: {
          items: 6,
          slideBy: 1,
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
        '<img src="./assets/icons/arrow-left-single.svg" alt="" />',
        '<img src="./assets/icons/arrow-right-single.svg" alt="" />',
      ],
    })
  },
  setupBookCategoryQuaySach: function () {
    $("#carouselBookCategoryQuaysach").owlCarousel({
      responsive: {
        0: {
          items: 3,
          slideBy: 1,
        },
        991: {
          items: 7,
          slideBy: 1,
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
        '<img src="./assets/icons/arrow-left-single.svg" alt="" />',
        '<img src="./assets/icons/arrow-right-single.svg" alt="" />',
      ],
    })
  },
  setupBookSuggest: function () {
    $("#carouselBookSuggest").owlCarousel({
      responsive: {
        0: {
          items: 2,
          slideBy: 2,
          nav:false
        },
        767: {
          items: 3,
          slideBy: 1,
          nav:false
        },
        1200: {
          items: 4,
          slideBy: 1,
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
        '<img src="./assets/icons/arrow-left-single.svg" alt="" />',
        '<img src="./assets/icons/arrow-right-single.svg" alt="" />',
      ],
    })
  },
  carouselBookSuggestQuaySach: function () {
    $("#carouselBookSuggestQuaySach").owlCarousel({
      responsive: {
        0: {
          items: 2,
          slideBy: 2,
          nav:false
        },
        991: {
          items: 3,
          slideBy: 1,
        },
        1200: {
          items: 4,
          slideBy: 1,
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
        '<img src="./assets/icons/arrow-left-single.svg" alt="" />',
        '<img src="./assets/icons/arrow-right-single.svg" alt="" />',
      ],
    })
  },
  setupBookSameCategory: function () {
    $("#carouselBookSameCategory").owlCarousel({
      responsive: {
        0: {
          items: 2,
          slideBy: 2,
        },
        767: {
          items: 4,
          slideBy: 1,
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
      margin: 15,
      navText: [
        '<img src="./assets/icons/arrow-left-single.svg" alt="" />',
        '<img src="./assets/icons/arrow-right-single.svg" alt="" />',
      ],
    });
  },
  setupBookBenitorCategory: function () {
    $("#carouselBookBenitor").owlCarousel({
      responsive: {
        0: {
          items: 2.2,
          slideBy: 1,
          nav: false
        },
        991: {
          items: 5,
          slideBy: 1,
        },
      },
      loop: false,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: false,
      smartSpeed: 300,
      lazyLoad: true,
      dots: false,
      nav: true,
      margin: 15,
      navText: [
        '<img src="./assets/icons/arrow-left-single.svg" alt="" />',
        '<img src="./assets/icons/arrow-right-single.svg" alt="" />',
      ],
    });
  },
};

function SelectDropdown(optional) {
  const customSelect = document.getElementById(optional.select);
  const customOptions = document.getElementById(optional.options);
  customSelect && customSelect.addEventListener('click', () => {
    customOptions.classList.toggle('active')
  });
  customOptions && customOptions.addEventListener('click', (e) => {
    if (e.target.classList.contains('option')) {
      const selectedOption = e.target;
      const selectedValue = selectedOption.getAttribute('data-value');
      customSelect.querySelector('.Select-label').textContent = selectedOption.textContent;
      customOptions.classList.remove('active')
      console.log('Selected Value:', selectedValue);
    }
  });
  document.addEventListener('click', (e) => {
    if (customSelect && !customSelect.contains(e.target)) {
      customOptions.classList.remove('active')
    }
  });
}
function QuantityControl(container) {
  function createQuantityControl(subContainer) {
    const decreaseButton = subContainer.querySelector(".decrease-button");
    const increaseButton = subContainer.querySelector(".increase-button");
    const quantityInput = subContainer.querySelector('input[type="number"]');

    let quantity = 1;

    decreaseButton.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity;
      }
    });

    increaseButton.addEventListener("click", () => {
      quantity++;
      quantityInput.value = quantity;
    });

    quantityInput.addEventListener("input", () => {
      let newQuantity = parseInt(quantityInput.value);
      if (isNaN(newQuantity) || newQuantity < 1) {
        newQuantity = 1;
      }
      quantity = newQuantity;
      quantityInput.value = quantity;
    });
  }
  const products = document.querySelectorAll("." + container);
  products.forEach((product) => {
    createQuantityControl(product.querySelector(".quantity-control"));
  });
}
function SeeMoreComponent(contentId, seeMoreBtnId) {
  const content = document.getElementById(contentId);
  const seeMoreBtn = document.getElementById(seeMoreBtnId);
  let isExpanded = false;

  function toggleContent() {
    if (!isExpanded) {
      content.classList.remove("active");
      seeMoreBtn.querySelector("span").textContent = "Xem đầy đủ";
    } else {
      if (seeMoreBtn) {
        content.classList.add("active");
        seeMoreBtn.querySelector("span").textContent = "Thu gọn";
      }
    }
    isExpanded = !isExpanded;
  }

  function setupEventListeners() {
    seeMoreBtn && seeMoreBtn.addEventListener("click", toggleContent);
  }

  if (content) {
    toggleContent();
  }
  if (seeMoreBtn) {
    setupEventListeners();
  }
}
function ActiveItemsComponent(container) {
  const itemsContainer = document.getElementById(container.containerItem);
  const items = itemsContainer && itemsContainer.querySelectorAll(".item-list");
  let activeItem = null;

  function setActiveItem(item) {
    if (activeItem) {
      activeItem.classList.remove("active");
    }
    item && item.classList.add("active");
    activeItem = item;
  }

  items &&
    items.forEach((item) => {
      item.addEventListener("click", () => {
        setActiveItem(item);
      });
    });

  setActiveItem(items?.[0]);
}
function ShowMenuMobile(){
  const menuWrapper = document.querySelector('.menu-mobile');
  const overlay = document.querySelector('.overlay-backdrop')
  const button = document.querySelector('.header-mobile-action .bars')
  button && button.addEventListener('click', () => {
    menuWrapper.classList.add('active')
    overlay.classList.add('active')
  })
  overlay && overlay.addEventListener('click', (ev) => {
    const clicked = ev.target;
    if(clicked.classList.contains('overlay-backdrop')){
      clicked.classList.remove('active')
      menuWrapper.classList.remove('active')
    }
  })
}
function CountDown(options){
   const countDownDate = new Date("Oct 31, 2023 15:37:25").getTime();
   let container = document.getElementById(options.container);
   const x = setInterval(function() {

    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
     // document.querySelector(".days").innerHTML = days;
     if(container){
       container.querySelector(".hours").innerHTML = hours;
       container.querySelector(".minutes").innerHTML = minutes;
       container.querySelector(".seconds").innerHTML = seconds;
       if (distance < 0) {
         clearInterval(x);
         container.innerHTML = "EXPIRED";
       }
     }
  }, 1000);
}
new ShowMenuMobile()
new ActiveItemsComponent({
  containerItem: "BookDetail-choose",
});
new ActiveItemsComponent({
  containerItem: "itemsContainer",
});
new SelectDropdown({
  select: 'customSelect',
  options: 'customOptions',
});
new SelectDropdown({
  select: 'selectInput',
  options: 'optionInput',
});
new SelectDropdown({
  select: 'selectInputMobile',
  options: 'optionInputMobile',
});
new QuantityControl('product')
new QuantityControl('BookDetail-data-item-quantity')
new QuantityControl('Cart-info-mobile-btn')
new SeeMoreComponent('content', 'seeMoreBtn');
new SeeMoreComponent('see-more', 'seeBtn');
new SeeMoreComponent('content-tab-see', 'seeAboutBtn');
new CountDown({
  container: "CountDown"
});
new CountDown({
  container: "countdown2"
});
$('.btn-scroll').on('click', function(event) {
  event.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 'slow');
});
