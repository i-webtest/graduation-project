"use strict";

const smoothScroll = () => {
  const links = document.querySelectorAll(".top-menu a");
  const buttonUp = document.querySelector(".up");

  // const section = document.getElementById("services");

  window.onscroll = function () {
    if (window.pageYOffset > 580) {
      buttonUp.style.display = "block";
    } else {
      buttonUp.style.display = "none";
    }
  };

  buttonUp.addEventListener("click", () => {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  });

  /////////////////////////

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const id = link.getAttribute("href").substring(1);
      const section = document.getElementById(id);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    });
  });
};

export default smoothScroll;
