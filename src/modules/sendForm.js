"use strict";

const sendForm = ({ formId }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Наш менеджер с вами свяжется!";
  const textError = "Попробуйте ещё раз...";

  console.log("отправка формы");
  statusBlock.style.color = "#fff";
};

export default sendForm;
