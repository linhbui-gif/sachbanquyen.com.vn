window.onload = () => {
  carousel.init();
  header.init();
  navigation.init();
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
    this.setupHomeCarousel();
    this.setupBookCarousel();
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
      Thumbs: {
        type: "classic",
      },
    });
  },
  setupHomeCarousel: function () {
    const container = document.getElementById("carouselHome");
    const options = {
      Navigation: false,
      Dots: {
        minCount: 2,
      },
    };
    new Carousel(container, options);
  },
  setupBookCarousel: function () {
    const container = document.getElementById("carouselFlashSale");
    const options = {
      Dots: false,
      Navigation: {
        prevTpl:
          '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">\n' +
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0309 0.46912C11.1007 0.538789 11.1561 0.621552 11.1939 0.71267C11.2318 0.803787 11.2512 0.901469 11.2512 1.00012C11.2512 1.09877 11.2318 1.19645 11.1939 1.28757C11.1561 1.37869 11.1007 1.46145 11.0309 1.53112L2.56038 10.0001L11.0309 18.4691C11.1006 18.5388 11.1559 18.6216 11.1937 18.7127C11.2314 18.8039 11.2508 18.9015 11.2508 19.0001C11.2508 19.0987 11.2314 19.1964 11.1937 19.2875C11.1559 19.3786 11.1006 19.4614 11.0309 19.5311C10.9611 19.6008 10.8784 19.6562 10.7873 19.6939C10.6961 19.7316 10.5985 19.7511 10.4999 19.7511C10.4013 19.7511 10.3036 19.7316 10.2125 19.6939C10.1214 19.6562 10.0386 19.6008 9.96888 19.5311L0.968881 10.5311C0.899037 10.4614 0.843623 10.3787 0.805813 10.2876C0.768003 10.1964 0.748541 10.0988 0.748541 10.0001C0.748541 9.90147 0.768003 9.80379 0.805813 9.71267C0.843623 9.62155 0.899037 9.53879 0.968881 9.46912L9.96888 0.46912C10.0385 0.399275 10.1213 0.343861 10.2124 0.306051C10.3035 0.268242 10.4012 0.248779 10.4999 0.248779C10.5985 0.248779 10.6962 0.268242 10.7873 0.306051C10.8784 0.343861 10.9612 0.399275 11.0309 0.46912Z" fill="white"/>\n' +
          "</svg>",
        nextTpl:
          '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">\n' +
          '<g id="Group">\n' +
          '<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M0.968997 19.5309C0.899153 19.4612 0.843738 19.3784 0.805928 19.2873C0.768119 19.1962 0.748657 19.0985 0.748657 18.9999C0.748657 18.9012 0.768119 18.8035 0.805928 18.7124C0.843738 18.6213 0.899153 18.5385 0.968997 18.4689L9.4395 9.99988L0.968998 1.53088C0.899266 1.46115 0.843951 1.37837 0.806213 1.28726C0.768474 1.19615 0.74905 1.0985 0.74905 0.999884C0.74905 0.901268 0.768474 0.803617 0.806213 0.712507C0.843951 0.621399 0.899266 0.538614 0.968998 0.468884C1.03873 0.399151 1.12151 0.343838 1.21262 0.306099C1.30373 0.26836 1.40138 0.248936 1.5 0.248936C1.59861 0.248936 1.69626 0.26836 1.78737 0.306099C1.87848 0.343838 1.96127 0.399151 2.031 0.468884L11.031 9.46888C11.1008 9.53855 11.1563 9.62131 11.1941 9.71243C11.2319 9.80355 11.2513 9.90123 11.2513 9.99988C11.2513 10.0985 11.2319 10.1962 11.1941 10.2873C11.1563 10.3784 11.1008 10.4612 11.031 10.5309L2.031 19.5309C1.96133 19.6007 1.87857 19.6561 1.78745 19.6939C1.69633 19.7318 1.59865 19.7512 1.5 19.7512C1.40135 19.7512 1.30366 19.7318 1.21255 19.6939C1.12143 19.6561 1.03867 19.6007 0.968997 19.5309Z" fill="white"/>\n' +
          "</g>\n" +
          "</svg>",
      },
    };
    new Carousel(container, options);
  },
};
const header = {
  init: function () {
    this.menuMobile();
    this.filterCategoryMobile();
    this.dropdownAccount();
  },
  dropdownAccount: function () {
    const headerAccount = document.querySelector(".Header-account");
    const headerDropdown = document.querySelector(".Header-sub-items");

    if (headerAccount && headerDropdown) {
      headerAccount?.addEventListener?.("click", (e) => {
        headerDropdown.classList.toggle("active");
      });
      const listener = (event) => {
        if (!headerDropdown || headerDropdown.contains(event.target)) return;
        headerDropdown.classList.remove("active");
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    }
  },
  menuMobile: function () {
    const btnMenu = document.querySelector(".NavigationMobile-open");
    const menu = document.querySelector(".NavigationMobile");

    if (btnMenu && menu) {
      const overlay = menu.querySelector(".NavigationMobile-overlay");
      const close = menu.querySelector(".NavigationMobile-close");

      btnMenu.addEventListener("click", () => {
        menu.classList.add("active");
      });
      overlay.addEventListener("click", () => {
        menu.classList.remove("active");
      });
      close.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    }
  },
  filterCategoryMobile: function () {
    const btnMenu = document.querySelector(".FilterCategoryMobile-open");
    const menu = document.querySelector(".FilterCategoryMobile");

    if (btnMenu && menu) {
      const overlay = menu.querySelector(".FilterCategoryMobile-overlay");
      const close = menu.querySelector(".FilterCategoryMobile-close");

      btnMenu.addEventListener("click", () => {
        menu.classList.add("active");
      });
      overlay.addEventListener("click", () => {
        menu.classList.remove("active");
      });
      close.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    }
  },
};

const navigation = {
  init: function () {
    this.dropdownSubmenu();
    this.dropdownSubmenuMobile();
  },
  dropdownSubmenu: function () {
    const navigationItems = document.querySelectorAll(".Navigation-list-item");

    navigationItems.forEach((item) => {
      const caretIcon = item.querySelector(".Navigation-list-item-caret");
      const subItems = item.querySelector(".Navigation-sub-items");

      if (caretIcon) {
        item?.addEventListener?.("click", (e) => {
          item.classList.toggle("active");
          subItems.classList.toggle("active");
        });
      }

      const listener = (event) => {
        if (!subItems || subItems.contains(event.target)) return;
        item.classList.remove("active");
        subItems.classList.remove("active");
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    });
  },
  dropdownSubmenuMobile: function () {
    const navigationItems = document.querySelectorAll(
      ".NavigationMobile-list-item"
    );

    navigationItems.forEach((item) => {
      const caretIcon = item.querySelector(".NavigationMobile-list-item-caret");
      const subItems = item.querySelector(".NavigationMobile-sub-items");

      if (caretIcon) {
        item?.addEventListener?.("click", (e) => {
          subItems.classList.toggle("active");
          item.classList.toggle("active");
        });
      }
    });
  },
};
