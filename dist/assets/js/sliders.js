// Club Slider
var clubSlider = new Swiper(".club-slider", {
  slidesPerView: 5.5,
  spaceBetween: 12,
  freeMode: true,
  loop: true,

  on: {
    init: function () {
      const el = this.el;

      el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  lazy: {
    loadPrevNext: true,
    loadOnTransitionStart: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    300: {
      slidesPerView: 1.5,
    },
    575.98: {
      slidesPerView: 2.5,
    },
    767.98: {
      slidesPerView: 3.5,
    },
    991.98: {
      slidesPerView: 3.5,
    },
    1199.98: {
      slidesPerView: 5.5,
    },
  },
});

// Match Slider
var matchSlider = new Swiper(".match-slider", {
  slidesPerView: 4.3,
  spaceBetween: 12,
  freeMode: true,
  loop: true,
  on: {
    init: function () {
      const el = this.el;

      el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    300: {
      slidesPerView: 1.5,
    },
    575.98: {
      slidesPerView: 2.3,
    },
    767.98: {
      slidesPerView: 2.3,
    },
    991.98: {
      slidesPerView: 3.3,
    },
    1199.98: {
      slidesPerView: 4.3,
    },
  },
});

// Trends Slider
var trendsSlider = new Swiper(".trendsSlider", {
  slidesPerView: 3.5,
  spaceBetween: 24,
  freeMode: true,
  loop: true,

  on: {
    init: function () {
      const el = this.el;

      el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  lazy: {
    loadPrevNext: true,
    loadOnTransitionStart: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    300: {
      slidesPerView: 1.5,
    },
    575.98: {
      slidesPerView: 1.5,
    },
    767.98: {
      slidesPerView: 2.3,
    },
    991.98: {
      slidesPerView: 2.3,
    },
    1199.98: {
      slidesPerView: 3.5,
    },
  },
});

// Inside Trend (Modal) Slider
var clubSlider = new Swiper(".inside-slider", {
  slidesPerView: 1,
  spaceBetween: 12,
  loop: true,

  on: {
    init: function () {
      const el = this.el;

      el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  lazy: {
    loadPrevNext: true,
    loadOnTransitionStart: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Related Slider
var relatedSlider = new Swiper(".related-slider-slide", {
  slidesPerView: 2.99,
  spaceBetween: 24,
  freeMode: true,
  loop: true,
  rtl: true,

  on: {
    init: function () {
      const el = this.el;

      el.addEventListener("mouseenter", () => {
        this.autoplay.stop();
      });

      el.addEventListener("mouseleave", () => {
        this.autoplay.start();
      });
    },
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  lazy: {
    loadPrevNext: true,
    loadOnTransitionStart: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    300: {
      slidesPerView: 1.5,
    },
    575.98: {
      slidesPerView: 2.3,
    },
    767.98: {
      slidesPerView: 2.3,
    },
    991.98: {
      slidesPerView: 2.3,
    },
    1199.98: {
      slidesPerView: 2.99,
    },
  },
});
