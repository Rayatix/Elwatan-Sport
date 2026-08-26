// // class AutoSkeleton {
// //   constructor(selector = ".js-skeleton") {
// //     this.selector = selector;

// //     this.init();
// //   }

// //   init() {
// //     const items = document.querySelectorAll(this.selector);

// //     const observer = new IntersectionObserver(
// //       (entries, obs) => {
// //         entries.forEach((entry) => {
// //           if (!entry.isIntersecting) return;

// //           const el = entry.target;

// //           this.apply(el);

// //           // simulate fetch / loading
// //           setTimeout(() => {
// //             this.remove(el);
// //           }, 800);

// //           obs.unobserve(el);
// //         });
// //       },
// //       {
// //         threshold: 0.15,
// //         rootMargin: "200px",
// //       },
// //     );

// //     items.forEach((el) => observer.observe(el));
// //   }

// //   // ====================================
// //   // APPLY SKELETON
// //   // ====================================

// //   apply(el) {
// //     el.classList.add("skeleton-active");

// //     el.querySelectorAll("*").forEach((child) => {
// //       const rect = child.getBoundingClientRect();

// //       // ignore hidden/small
// //       if (
// //         rect.width < 15 ||
// //         rect.height < 8 ||
// //         window.getComputedStyle(child).display === "none"
// //       )
// //         return;

// //       // ====================================
// //       // IMAGES
// //       // ====================================

// //       if (child.tagName === "IMG" || child.classList.contains("avatar")) {
// //         child.classList.add("skel-img");

// //         child.dataset.src = child.src;

// //         // preserve size
// //         child.style.width = rect.width + "px";
// //         child.style.height = rect.height + "px";

// //         // aspect ratio
// //         child.style.aspectRatio = `${Math.round(rect.width)} / ${Math.round(rect.height)}`;

// //         // placeholder
// //         child.src =
// //           "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

// //         return;
// //       }

// //       // ====================================
// //       // BUTTONS
// //       // ====================================

// //       if (child.tagName === "BUTTON" || child.classList.contains("btn")) {
// //         child.classList.add("skel-button");

// //         child.dataset.html = child.innerHTML;

// //         child.innerHTML = "";

// //         child.style.width = rect.width + "px";
// //         child.style.height = rect.height + "px";

// //         return;
// //       }

// //       // ====================================
// //       // ICONS
// //       // ====================================

// //       if (child.tagName === "I" || child.tagName === "SVG") {
// //         child.classList.add("skel-icon");

// //         child.dataset.html = child.innerHTML;

// //         child.innerHTML = "";

// //         child.style.width = rect.width + "px";
// //         child.style.height = rect.height + "px";

// //         return;
// //       }

// //       // ====================================
// //       // TEXT
// //       // ====================================

// //       if (
// //         ["H1", "H2", "H3", "H4", "H5", "H6", "P", "SPAN", "A", "LI", "BUTTON"].includes(
// //           child.tagName,
// //         )
// //       ) {
// //         child.classList.add("skel-text");

// //         child.dataset.html = child.innerHTML;

// //         child.innerHTML = "";

// //         // inline fix
// //         if (window.getComputedStyle(child).display === "inline") {
// //           child.style.display = "inline-block";
// //         }

// //         // paragraph multiline
// //         if (child.tagName === "P") {
// //           const lines = 3;

// //           child.style.height = rect.height + "px";

// //           child.style.width = "100%";
// //         } else {
// //           child.style.width = rect.width + "px";
// //           child.style.height = rect.height + "px";
// //         }
// //       }
// //     });
// //   }

// //   // ====================================
// //   // REMOVE SKELETON
// //   // ====================================

// //   remove(el) {
// //     el.classList.remove("skeleton-active");

// //     el.querySelectorAll(
// //       ".skel-img, .skel-text, .skel-button, .skel-icon",
// //     ).forEach((child) => {
// //       // restore image
// //       if (child.tagName === "IMG" && child.dataset.src) {
// //         child.src = child.dataset.src;
// //       }

// //       // restore content
// //       if (child.dataset.html) {
// //         child.innerHTML = child.dataset.html;
// //       }

// //       // cleanup
// //       child.style.removeProperty("width");
// //       child.style.removeProperty("height");
// //       child.style.removeProperty("aspect-ratio");
// //     });
// //   }
// // }

// // // ====================================
// // // RUN
// // // ====================================

// // document.addEventListener("DOMContentLoaded", () => {
// //   new AutoSkeleton(".js-skeleton");
// // });

// class AutoSkeleton {
//   constructor(selector = ".js-skeleton") {
//     this.selector = selector;
//     this.init();
//   }

//   init() {
//     const items = document.querySelectorAll(this.selector);

//     const observer = new IntersectionObserver(
//       (entries, obs) => {
//         entries.forEach((entry) => {
//           if (!entry.isIntersecting) return;

//           const el = entry.target;

//           this.apply(el);

//           setTimeout(() => {
//             this.remove(el);
//           }, 800);

//           obs.unobserve(el);
//         });
//       },
//       {
//         threshold: 0.15,
//         rootMargin: "200px",
//       },
//     );

//     items.forEach((el) => observer.observe(el));
//   }

//   apply(el) {
//     if (el.dataset.skeletonized) return;
//     el.dataset.skeletonized = "true";

//     el.classList.add("skeleton-active");

//     // IMPORTANT FIX 👉 lock layout only (NO position changes)
//     el.style.position = getComputedStyle(el).position || "relative";

//     const children = el.querySelectorAll("*");

//     children.forEach((child) => {
//       const rect = child.getBoundingClientRect();

//       if (
//         rect.width < 5 ||
//         rect.height < 5 ||
//         getComputedStyle(child).display === "none"
//       )
//         return;

//       child.dataset.originalHtml = child.innerHTML;

//       // IMAGE
//       if (child.tagName === "IMG") {
//         child.classList.add("skel-img");
//         child.dataset.src = child.src;

//         child.style.width = rect.width + "px";
//         child.style.height = rect.height + "px";

//         child.src =
//           "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

//         return;
//       }

//       // BUTTON
//       if (child.tagName === "BUTTON") {
//         child.classList.add("skel-button");
//         child.innerHTML = "";
//         child.style.width = rect.width + "px";
//         child.style.height = rect.height + "px";
//         return;
//       }

//       // ICON
//       if (child.tagName === "I" || child.tagName === "SVG") {
//         child.classList.add("skel-icon");
//         child.innerHTML = "";
//         child.style.width = rect.width + "px";
//         child.style.height = rect.height + "px";
//         return;
//       }

//       // TEXT
//       if (
//         [
//           "H1",
//           "H2",
//           "H3",
//           "H4",
//           "H5",
//           "H6",
//           "P",
//           "SPAN",
//           "A",
//           "LI",
//           "TD",
//           "TH",
//         ].includes(child.tagName)
//       ) {
//         child.classList.add("skel-text");
//         child.innerHTML = "";

//         child.style.width = rect.width + "px";
//         child.style.height = rect.height + "px";
//       }
//     });
//   }

//   remove(el) {
//     el.classList.remove("skeleton-active");

//     el.querySelectorAll(
//       ".skel-img, .skel-text, .skel-button, .skel-icon",
//     ).forEach((child) => {
//       if (child.tagName === "IMG" && child.dataset.src) {
//         child.src = child.dataset.src;
//       }

//       if (child.dataset.originalHtml) {
//         child.innerHTML = child.dataset.originalHtml;
//       }

//       child.style.removeProperty("width");
//       child.style.removeProperty("height");
//     });
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   new AutoSkeleton(".js-skeleton");
// });





class AutoSkeleton {
  constructor(selector = ".js-skeleton") {
    this.selector = selector;
    this.init();
  }

  init() {
    const items = document.querySelectorAll(this.selector);

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target;

          this.apply(el);

          setTimeout(() => {
            this.remove(el);
          }, 800);

          obs.unobserve(el);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "200px",
      },
    );

    items.forEach((el) => observer.observe(el));
  }

  // ====================================
  // APPLY SKELETON
  // ====================================

  apply(el) {
    if (el.dataset.skeletonized) return;

    el.dataset.skeletonized = "true";
    el.classList.add("skeleton-active");

    // ====================================
    // TABLE - BULK SKELETON
    // ====================================

    if (el.classList.contains("table-standing")) {
      this.applyTableSkeleton(el);
      return;
    }

    // ====================================
    // NORMAL ELEMENTS
    // ====================================

    const children = el.querySelectorAll("*");

    children.forEach((child) => {
      const rect = child.getBoundingClientRect();

      if (
        rect.width < 5 ||
        rect.height < 5 ||
        getComputedStyle(child).display === "none"
      ) {
        return;
      }

      child.dataset.originalHtml = child.innerHTML;

      // ====================================
      // IMAGE
      // ====================================

      if (child.tagName === "IMG") {
        child.classList.add("skel-img");

        child.dataset.src = child.src;

        child.style.width = rect.width + "px";
        child.style.height = rect.height + "px";

        child.src =
          "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

        return;
      }

      // ====================================
      // BUTTON
      // ====================================

      if (child.tagName === "BUTTON") {
        child.classList.add("skel-button");

        child.innerHTML = "";

        child.style.width = rect.width + "px";
        child.style.height = rect.height + "px";

        return;
      }

      // ====================================
      // ICON
      // ====================================

      if (child.tagName === "I" || child.tagName === "SVG") {
        child.classList.add("skel-icon");

        child.innerHTML = "";

        child.style.width = rect.width + "px";
        child.style.height = rect.height + "px";

        return;
      }

      // ====================================
      // TEXT
      // ====================================

      if (
        [
          "H1",
          "H2",
          "H3",
          "H4",
          "H5",
          "H6",
          "P",
          "SPAN",
          "A",
          "LI",
        ].includes(child.tagName)
      ) {
        child.classList.add("skel-text");

        child.innerHTML = "";

        child.style.width = rect.width + "px";
        child.style.height = rect.height + "px";
      }
    });
  }

  // ====================================
  // TABLE BULK SKELETON
  // ====================================

  applyTableSkeleton(el) {
    el.classList.add("skeleton-table");

    const table = el.querySelector("table");

    if (!table) return;

    // Save original visibility
    table.dataset.originalVisibility =
      getComputedStyle(table).visibility;

    // Keep the table layout exactly as it is
    // but hide the actual content.
    table.classList.add("table-skeleton-content");

    // Save text content
    table.querySelectorAll("th, td").forEach((cell) => {
      cell.dataset.originalHtml = cell.innerHTML;
      cell.classList.add("table-skeleton-cell");

      // Don't modify width / height
      // Don't change position
      // Don't add individual skeleton elements
      cell.innerHTML = "";
    });

    // Hide images inside table
    table.querySelectorAll("img").forEach((img) => {
      img.dataset.src = img.src;
      img.src =
        "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    });
  }

  // ====================================
  // REMOVE SKELETON
  // ====================================

  remove(el) {
    el.classList.remove("skeleton-active");

    // ====================================
    // TABLE
    // ====================================

    if (el.classList.contains("table-standing")) {
      this.removeTableSkeleton(el);

      delete el.dataset.skeletonized;

      return;
    }

    // ====================================
    // NORMAL ELEMENTS
    // ====================================

    el.querySelectorAll(
      ".skel-img, .skel-text, .skel-button, .skel-icon",
    ).forEach((child) => {
      // Restore image
      if (child.tagName === "IMG" && child.dataset.src) {
        child.src = child.dataset.src;
      }

      // Restore content
      if (child.dataset.originalHtml) {
        child.innerHTML = child.dataset.originalHtml;
      }

      // Cleanup
      child.style.removeProperty("width");
      child.style.removeProperty("height");
    });

    delete el.dataset.skeletonized;
  }

  // ====================================
  // REMOVE TABLE SKELETON
  // ====================================

  removeTableSkeleton(el) {
    el.classList.remove("skeleton-table");

    const table = el.querySelector("table");

    if (!table) return;

    // Restore cells
    table.querySelectorAll(".table-skeleton-cell").forEach((cell) => {
      if (cell.dataset.originalHtml !== undefined) {
        cell.innerHTML = cell.dataset.originalHtml;
      }

      cell.classList.remove("table-skeleton-cell");

      delete cell.dataset.originalHtml;
    });

    // Restore images
    table.querySelectorAll("img").forEach((img) => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
        delete img.dataset.src;
      }
    });

    table.classList.remove("table-skeleton-content");

    delete table.dataset.originalVisibility;
  }
}

// ====================================
// RUN
// ====================================

document.addEventListener("DOMContentLoaded", () => {
  new AutoSkeleton(".js-skeleton");
});