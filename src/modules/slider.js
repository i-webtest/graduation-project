"use strict";

// import Swiper, { Navigation } from "swiper";

const slider = () => {
  const cards = document.querySelectorAll(".col-sm-6");
  const buttonPrev = document.querySelector(".arrow-left");
  const buttonNext = document.querySelector(".arrow-right");

  let viewCard;

  if (window.outerWidth < 570) {
    viewCard = 1;
  } else if (window.outerWidth < 870 && window.outerWidth > 570) {
    viewCard = 2;
  } else {
    viewCard = 3;
  }

  let start = 0;

  cards.forEach((item) => {
    if (start < viewCard) {
      start++;
    } else {
      item.style.display = "none";
    }
  });

  start = 0;
  if (start === 0) {
    buttonPrev.style.opacity = 0.2;
  }
  buttonPrev.addEventListener("click", () => {
    if (start > 0) {
      start = start - 1;
      viewCard = viewCard - 1;
      cards[start].style.display = "block";
      cards[viewCard].style.display = "none";
      buttonNext.style.opacity = 1;
      if (start === 0) {
        buttonPrev.style.opacity = 0.2;
      }
    }
  });
  buttonNext.addEventListener("click", () => {
    if (viewCard < cards.length) {
      cards[start++].style.display = "none";
      cards[viewCard++].style.display = "block";
      if (viewCard === cards.length) {
        buttonNext.style.opacity = 0.2;
      }
      buttonPrev.style.opacity = 1;
    }
  });
};

export default slider;
