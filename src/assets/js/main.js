window.onload = () => {
  carousel.init();
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
    this.setupFlashSaleBannerCarousel();
    this.setupFlashSaleBannerCarousel01();
    this.setupFlashSaleBannerCarousel02();
    this.setupBookCategory();
    this.setupBookSuggest();
  },
  setupBookDetail: function () {
    const container = document.getElementById("myCarousel");
    const options = {
      Dots: false,
      Thumbs: {
        type: "classic",
      },
    };
    if (container !== null) {
      new Carousel(container, options, { Thumbs });
      Fancybox.bind("[data-fancybox]", {
        Thumbs: {
          type: "classic",
        },
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
    });
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
      margin: 15,
      navText: [
        '<img src="./assets/icons/icon-circle-left.svg" alt="" />',
        '<img src="./assets/icons/icon-circle-right.svg" alt="" />',
      ],
    });
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
      margin: 15,
      navText: [
        '<img src="./assets/icons/icon-circle-left.svg" alt="" />',
        '<img src="./assets/icons/icon-circle-right.svg" alt="" />',
      ],
    });
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
      margin: 15,
      navText: [
        '<img src="./assets/icons/icon-circle-left.svg" alt="" />',
        '<img src="./assets/icons/icon-circle-right.svg" alt="" />',
      ],
    });
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
    });
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
      customSelect.querySelector('.' + optional.label).textContent = selectedOption.textContent;
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
new ActiveItemsComponent({
  containerItem: "BookDetail-choose",
});
new ActiveItemsComponent({
  containerItem: "itemsContainer",
});
new SelectDropdown({
  select: "customSelect",
  options: "customOptions",
  label: "Select-label",
});
new QuantityControl('product')
new QuantityControl('BookDetail-data-item-quantity')
new SeeMoreComponent('content', 'seeMoreBtn');
new SeeMoreComponent('see-more', 'seeBtn');
new SeeMoreComponent('content-tab-see', 'seeAboutBtn');
