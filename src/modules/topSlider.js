"use strict";

const topSlider = () => {
  const sliderBlock = document.querySelector(".top-slider");
  const slides = sliderBlock.querySelectorAll(".item");

  const sliderDots = document.querySelector(".slick-dots");
  let dots = document.querySelectorAll(".dot");

  let currentSlide = 0;

  for (let i = 1; i < slides.length; i++) {
    slides[i].hidden = true;
  }

  let i = 0;

  setInterval(() => {
    slides[i].hidden = true;
    i = (i + 1) % slides.length;
    slides[i].hidden = false;
  }, 3000);
};

export default topSlider;
