"use strict";

const mobileMenu = () => {
  const mobileMenuBtn = document.querySelector(".mob-menu-btn");
  const menuCloseBtn = document.querySelector(".mobile-menu-close");
  const mobileMenu = document.querySelector(".mobile-menu");
  const menuLinks = mobileMenu.querySelectorAll("ul>li>a");
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");

  const handleMenu = () => {
    mobileMenu.classList.toggle("open");
    body.classList.toggle("lock");
  };

  mobileMenuBtn.addEventListener("click", handleMenu);
  overlay.addEventListener("click", handleMenu);
  menuCloseBtn.addEventListener("click", handleMenu);

  menuLinks.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      handleMenu();

      let href = e.target.getAttribute("href").substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = 50;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
};

export default mobileMenu;
