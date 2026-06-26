document.addEventListener("DOMContentLoaded", () => {
  const openBtns = document.querySelectorAll(".open-modal");
  const modals = document.querySelectorAll(".modal");
  const closeBtns = document.querySelectorAll(".close-modal");

  function openModal(id) {
    modals.forEach((modal) => {
      if (modal.dataset.modal === id) {
        modal.classList.add("active");
      }
    });
  }

  function closeAll() {
    modals.forEach((m) => m.classList.remove("active"));
  }

  openBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.modal;
      openModal(id);
    });
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", closeAll);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });
});

//
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  lazy: true,
});

// Clubs Slider
var clubSlider = new Swiper(".side-news-slider", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 12,
  freeMode: false,
  lazy: true,
});

// Tabs
document.querySelectorAll(".tabs").forEach((tabsWrapper) => {
  const tabs = tabsWrapper.querySelectorAll(".tabs__btn");
  const panels = tabsWrapper.querySelectorAll(".tabs__panel");
  const indicator = tabsWrapper.querySelector(".tabs__indicator");

  const isRTL = tabsWrapper.dir === "rtl";

  let current = [...tabs].findIndex((tab) => tab.classList.contains("active"));

  if (current === -1) current = 0;

  function moveIndicator(el) {
    const parent = el.parentElement;

    indicator.style.width = el.offsetWidth + "px";

    if (isRTL) {
      const right = parent.offsetWidth - (el.offsetLeft + el.offsetWidth);

      indicator.style.right = right + "px";
      indicator.style.left = "auto";
    } else {
      indicator.style.left = el.offsetLeft + "px";
    }
  }

  function goToTab(index) {
    if (index === current) return;

    tabs.forEach((t) => t.classList.remove("active"));
    panels.forEach((p) => p.classList.remove("active"));

    tabs[index].classList.add("active");
    panels[index].classList.add("active");

    moveIndicator(tabs[index]);

    current = index;
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => goToTab(i));
  });

  moveIndicator(tabs[current]);
});

// Matches Tabs
const matchesTabs = document.querySelector(".matches-tabs");

if (matchesTabs) {
  const tabs = matchesTabs.querySelectorAll(".matches-tabs__btn");
  const panels = matchesTabs.querySelectorAll(".matches-tabs__panel");
  const indicator = matchesTabs.querySelector(".matches-tabs__indicator");

  const isRTL = matchesTabs.dir === "rtl";

  let current = 1;

  function moveIndicator(el) {
    const parent = el.parentElement;

    indicator.style.width = el.offsetWidth + "px";

    if (isRTL) {
      const right = parent.offsetWidth - (el.offsetLeft + el.offsetWidth);

      indicator.style.right = right + "px";
      indicator.style.left = "auto";
    } else {
      indicator.style.left = el.offsetLeft + "px";
    }
  }

  function goToTab(index) {
    if (index === current) return;

    tabs.forEach((t) => t.classList.remove("active"));
    panels.forEach((p) => p.classList.remove("active"));

    tabs[index].classList.add("active");
    panels[index].classList.add("active");

    moveIndicator(tabs[index]);

    current = index;
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => goToTab(i));
  });

  moveIndicator(tabs[current]);
}

// For Side Menu
const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("open");
  overlay.classList.add("show");

  document.querySelectorAll(".side-menu__links a").forEach((link) => {
    link.style.animation = "none";
    link.offsetHeight;
    link.style.animation = "";
  });
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  sideMenu.classList.remove("open");
  overlay.classList.remove("show");
}