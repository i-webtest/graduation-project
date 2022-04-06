"use strict";

const validation = () => {
  const inputName = document.querySelectorAll("input[name=fio]");
  const inputTel = document.querySelectorAll("input[name=tel]");

  inputName.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s]+/i, "");
      e.target.style.border = null;
    });
    item.addEventListener("invalid", (e) => {
      e.preventDefault();
      e.target.style.border = "1px solid red";
    });
  });

  inputTel.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d+()]+/gi, "");
      e.target.style.border = null;
    });
    item.addEventListener("invalid", (e) => {
      e.preventDefault();
      e.target.style.border = "1px solid red";
    });
  });
};

export default validation;
