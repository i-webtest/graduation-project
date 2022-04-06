"use strict";

const smoothScroll = () => {
  const links = document.querySelectorAll(".top-menu a");
  console.log(links);

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("click");

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
