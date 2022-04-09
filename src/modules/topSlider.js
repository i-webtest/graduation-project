"use strict";

const topSlider = () => {
  const sliderBlock = document.querySelector(".top-slider");
  const slides = sliderBlock.querySelectorAll(".item");

  const sliderDots = document.querySelector(".slick-dots");
  let dots = document.querySelectorAll(".dot");

  let currentSlide = 0;

  /////////////////////////
  // const createDots = () => {
  //   sliderDots.innerHTML = "";

  //   slides.forEach((item, index) => {
  //     const dot = document.createElement("li");
  //     dot.classList.add("dot");

  //     if (item.classList.contains("item-active")) {
  //       dot.classList.add("slick-active");
  //       currentSlide = index;
  //     }

  //     sliderDots.append(dot);
  //   });
  //   dots = document.querySelectorAll(".dot");
  // };
  // createDots();

  ////////////////////////
  for (let i = 1; i < slides.length; i++) {
    slides[i].hidden = true;
  }

  let i = 0;

  setInterval(() => {
    slides[i].hidden = true;
    i = (i + 1) % slides.length;
    slides[i].hidden = false;
    ///////////////////
  }, 3000);
};

export default topSlider;
