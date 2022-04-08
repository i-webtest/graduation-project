"use strict";

const mobileMenu = () => {
  // const menu = document.querySelector(".mobile-menu");

  // const handleMenu = () => {
  //   menu.classList.toggle("active-menu");
  // };

  // const toggleMenu = (e) => {
  //   if (menu.classList.contains("active-menu")) {
  //     if (!e.target.closest("menu")) {
  //       handleMenu();
  //     } else if (e.target.closest("menu") && e.target.closest("ul>li>a")) {
  //       handleMenu();
  //     } else if (e.target.classList.contains("close-btn")) {
  //       e.preventDefault();
  //       handleMenu();
  //     }
  //   } else if (e.target.closest(".menu")) {
  //     handleMenu();
  //   }
  // };

  // document.body.addEventListener("click", toggleMenu);

  // const topMenu = document.querySelector(".top-menu");
  const mobileMenuButtons = document.querySelector(".mob-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");
  console.log(overlay);

  // const toggleMenu = (event) => {
  //   const id = event.target.getAttribute("href");

  //   if (event.target.closest(".mob-menu-btn")) {
  //     event.preventDefault();
  //     overlay.style.cssText = "opacity: 1; z-index: 1;";
  //     mobileMenu.style.right = -10 + "px";
  //   }

  //   if (event.target.closest(".mobile-menu-close")) {
  //     event.preventDefault();
  //     overlay.style.cssText = null;
  //     mobileMenu.style.right = -500 + "px";
  //   }

  //   if (event.target.closest("ul>li>a")) {
  //     event.preventDefault();
  //     document.querySelector(id).scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };

  mobileMenuButtons.addEventListener("click", (event) => {
    const toggleMenu = (event) => {
      const id = event.target.getAttribute("href");

      if (event.target.closest(".mob-menu-btn")) {
        event.preventDefault();
        overlay.style.cssText = "opacity: 1; z-index: 100;";
        mobileMenu.style.right = -10 + "px";
      }

      if (event.target.closest(".mobile-menu-close")) {
        event.preventDefault();
        overlay.style.cssText = null;
        mobileMenu.style.right = -500 + "px";
      }

      if (event.target.closest("ul>li>a")) {
        event.preventDefault();
        document.querySelector(id).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    toggleMenu(event);
  });

  overlay.addEventListener("click", (e) => {
    if (!e.target.closest(".mobile-menu") || e.target.classList.contains("mobile-menu-close")) {
      overlay.style.display = "none";
      mobileMenu.style.display = "none";
    }
  });

  // overlay.addEventListener("click", (e) => {
  //   if (!e.target.closest(".mobile-menu") || e.target.classList.contains("mobile-menu-close")) {
  //     overlay.style.display = "none";
  //   }
  // });

  // document.addEventListener("click", (event) => {
  //   toggleMenu(event);
  // });
};

export default mobileMenu;
