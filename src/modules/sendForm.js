"use strict";

const sendForm = ({ formId }) => {
  const form = document.getElementById(formId);
  const modal = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");
  const statusBlock = document.createElement("div");

  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const textError = "Данные некорректны! Попробуйте ещё раз...";
  const successText = "Спасибо! Наш менеджер с вами свяжется!";

  const validate = (list) => {
    let success = true;

    list.forEach((item) => {
      if (item.name === "fio" && item.value.length < 2) {
        item.style.border = "3px solid red";

        success = false;
      }
      if ((item.name === "tel" && item.value.length < 6) || item.value.length > 16) {
        item.style.border = "3px solid red";

        success = false;
      }
    });
    return success;
  };

  const sendData = async (data) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => [(formBody[key] = val)]);

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;

          formElements.forEach((input) => {
            if (input.closest(".feedback")) {
              input.style.border = null;
            } else {
              input.value = "";
            }
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        })
        .finally(() => {
          setTimeout(() => (statusBlock.textContent = ""), 2000);
          setTimeout(() => {
            modal.style.display = "none";
            modalOverlay.style.display = "none";
          }, 3000);
        });
    } else {
      statusBlock.textContent = textError;
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму на место!");
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
