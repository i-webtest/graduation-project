"use strict";

import { animate } from "./helpers";

const modal = () => {
  const modalCallback = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalClose = document.querySelector(".modal-close");
  const btnModal = document.querySelectorAll(".fancyboxModal");
  const body = document.querySelector("body");

  const screen = window.screen.width;

  btnModal.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();

      modalOverlay.style.display = "block";
      modalCallback.style.display = "block";
      modalCallback.style.top = -50 + "%";
      body.classList.add("lock");

      if (screen > 768) {
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modalCallback.style.top = -50 + 80 * progress + "%";
          },
        });
      } else {
        modalOverlay.style.display = "block";
        modalCallback.style.top = 20 + "%";
      }
    });
  });

  modalOverlay.addEventListener("click", () => {
    modalOverlay.style.display = "none";
    modalCallback.style.display = "none";
    body.classList.remove("lock");
  });

  modalClose.addEventListener("click", () => {
    modalOverlay.style.display = "none";
    modalCallback.style.display = "none";
    body.classList.remove("lock");
  });

  document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key === "Escape") {
      modalOverlay.style.display = "none";
      modalCallback.style.display = "none";
      body.classList.remove("lock");
    }
  });
};

export default modal;
