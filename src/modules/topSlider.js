"use strict";

const topSlider = () => {
  const sliderBlock = document.querySelector(".top-slider");
  const slides = document.querySelectorAll(".top-slider .item");
  const table = document.querySelectorAll(".top-slider .table");
  // let dots = document.querySelectorAll(".dot");

  // console.log(table);

  // const timeInterval = 3000;

  let currentSlide = 0;
  let interval;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, "item-active");
    prevSlide(table, currentSlide, "active");

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    // if (currentSlide < 0) {
    //   currentSlide = slides.length - 1;
    // }

    nextSlide(slides, currentSlide, "item-active");
    nextSlide(table, currentSlide, "active");
    // nextSlide(dots, currentSlide, "dot-active");
  };

  const startSlide = () => {
    interval = setInterval(autoSlide, 3000);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  if (slides.length > 0) {
    sliderBlock.addEventListener("click", (e) => {
      e.preventDefault();

      if (!e.target.matches(".dot")) {
        return;
      }

      prevSlide(slides, currentSlide, "item-active");
      prevSlide(table, currentSlide, "active");

      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }

      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }

      nextSlide(slides, currentSlide, "item-active");
      nextSlide(table, currentSlide, "active");
    });
  }

  startSlide();
};

export default topSlider;
