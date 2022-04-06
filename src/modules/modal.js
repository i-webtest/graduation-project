"use strict";

import { animate } from "./helpers";

const modal = () => {
  const callbackBtn = document.querySelectorAll(".callback-btn");
  const modalCallback = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalClose = document.querySelector(".modal-close");

  const screen = window.screen.width;

  callbackBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalOverlay.style.display = "block";
      modalCallback.style.display = "block";
      modalCallback.style.top = -50 + "%";

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
  });

  modalClose.addEventListener("click", () => {
    modalOverlay.style.display = "none";
    modalCallback.style.display = "none";
  });

  document.addEventListener("keydown", (event) => {
    const key = event.key;
    if (key === "Escape") {
      modalOverlay.style.display = "none";
      modalCallback.style.display = "none";
    }
  });
};

export default modal;
