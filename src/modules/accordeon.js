"use strict";

const accordeon = () => {
  const accordeonButtons = document.querySelectorAll(".accordeon .element");
  const accordeonContent = document.querySelectorAll(".accordeon .element-content");
  // console.log(accordeonButtons);
  // console.log(accordeonContent);

  accordeonButtons.forEach((item, index) => {
    const title = item.querySelector(".title");
    // console.log(item);

    title.addEventListener("click", () => {
      if (accordeonContent[index].classList.contains("active")) {
        accordeonContent[index].style.display = "none";
      } else {
        accordeonContent[index].style.display = "block";
      }
      accordeonContent[index].classList.toggle("active");
      item.classList.toggle("active");

      accordeonButtons.forEach((elem, index2) => {
        if (index !== index2) {
          elem.classList.remove("active");
          accordeonContent[index2].style.display = "none";
          accordeonContent[index2].classList.remove("active");
        }
      });
    });
  });
};

export default accordeon;
