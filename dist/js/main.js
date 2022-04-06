/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ formId: [\"form-callback\"] });\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n\r\n\r\nconst animate = ({ timing, draw, duration }) => {\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) {\r\n      timeFraction = 1;\r\n    }\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst modal = () => {\r\n  const callbackBtn = document.querySelectorAll(\".callback-btn\");\r\n  const modalCallback = document.querySelector(\".modal-callback\");\r\n  const modalOverlay = document.querySelector(\".modal-overlay\");\r\n  const modalClose = document.querySelector(\".modal-close\");\r\n\r\n  const screen = window.screen.width;\r\n\r\n  callbackBtn.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      modalOverlay.style.display = \"block\";\r\n      modalCallback.style.display = \"block\";\r\n      modalCallback.style.top = -50 + \"%\";\r\n\r\n      if (screen > 768) {\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n          duration: 500,\r\n          timing(timeFraction) {\r\n            return timeFraction;\r\n          },\r\n          draw(progress) {\r\n            modalCallback.style.top = -50 + 80 * progress + \"%\";\r\n          },\r\n        });\r\n      } else {\r\n        modalOverlay.style.display = \"block\";\r\n        modalCallback.style.top = 20 + \"%\";\r\n      }\r\n    });\r\n  });\r\n\r\n  modalOverlay.addEventListener(\"click\", () => {\r\n    modalOverlay.style.display = \"none\";\r\n    modalCallback.style.display = \"none\";\r\n  });\r\n\r\n  modalClose.addEventListener(\"click\", () => {\r\n    modalOverlay.style.display = \"none\";\r\n    modalCallback.style.display = \"none\";\r\n  });\r\n\r\n  document.addEventListener(\"keydown\", (event) => {\r\n    const key = event.key;\r\n    if (key === \"Escape\") {\r\n      modalOverlay.style.display = \"none\";\r\n      modalCallback.style.display = \"none\";\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst sendForm = ({ formId }) => {\r\n  const form = document.getElementById(formId);\r\n  const statusBlock = document.createElement(\"div\");\r\n  const loadText = \"Загрузка...\";\r\n  const errorText = \"Ошибка...\";\r\n  const successText = \"Спасибо! Наш менеджер с вами свяжется!\";\r\n  const textError = \"Попробуйте ещё раз...\";\r\n  // const name = document.querySelectorAll(\".form-control\")[0];\r\n  // const phone = document.querySelectorAll(\".form-control\")[1];\r\n  // console.log(name);\r\n  // console.log(phone);\r\n\r\n  statusBlock.style.color = \"#fff\";\r\n\r\n  const validate = (list) => {\r\n    let success = true;\r\n\r\n    list.forEach((item) => {\r\n      item.style.border = null;\r\n      if (item.name === \"fio\") {\r\n        if (item.value.length < 2) {\r\n          item.style.border = \"1px solid red\";\r\n          success = false;\r\n        }\r\n      } else if (item.name === \"tel\") {\r\n        item.require = true;\r\n        if (item.value.length < 6 || item.value.length > 16) {\r\n          success = false;\r\n          item.style.border = \"1px solid red\";\r\n        }\r\n      } else {\r\n        success = true;\r\n      }\r\n    });\r\n\r\n    return success;\r\n  };\r\n\r\n  // const validate = (list) => {\r\n  //   let success = true;\r\n\r\n  //   list.forEach((item) => {\r\n  //     item.style.border = null;\r\n  //     if (item.name === \"fio\") {\r\n  //       if (item.value.length < 2) {\r\n  //         item.style.border = \"1px solid red\";\r\n  //         success = false;\r\n  //       }\r\n  //     } else if (item.name === \"tel\") {\r\n  //       if (item.value.length < 6 || item.value.length > 16) {\r\n  //         success = false;\r\n  //         item.style.border = \"1px solid red\";\r\n  //       }\r\n  //     } else {\r\n  //       success = true;\r\n  //     }\r\n  //   });\r\n\r\n  //   return success;\r\n  // };\r\n\r\n  const sendData = (data) => {\r\n    return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n      method: \"POST\",\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n    }).then((res) => res.json());\r\n  };\r\n\r\n  const submitForm = () => {\r\n    const formElements = form.querySelectorAll(\"input\");\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n\r\n    statusBlock.textContent = loadText;\r\n    form.append(statusBlock);\r\n\r\n    formData.forEach((val, key) => {\r\n      formBody[key] = val;\r\n    });\r\n\r\n    if (validate(formElements)) {\r\n      sendData(formBody)\r\n        .then((data) => {\r\n          statusBlock.textContent = successText;\r\n\r\n          formElements.forEach((input) => {\r\n            input.value = \"\";\r\n          });\r\n          setInterval(() => {\r\n            statusBlock.textContent = \"\";\r\n          }, 3000);\r\n        })\r\n        .catch((error) => {\r\n          statusBlock.textContent = errorText;\r\n        });\r\n    } else {\r\n      // alert(\"Данные не валидны!\");\r\n\r\n      form.append(statusBlock);\r\n      statusBlock.textContent = textError;\r\n\r\n      // formElements.forEach((input) => {\r\n      //   input.value = \"\";\r\n      // });\r\n      setTimeout(() => {\r\n        statusBlock.textContent = \"\";\r\n      }, 2000);\r\n    }\r\n  };\r\n\r\n  try {\r\n    if (!form) {\r\n      throw new Error(\"Верните форму на место!\");\r\n    }\r\n\r\n    form.addEventListener(\"submit\", (event) => {\r\n      event.preventDefault();\r\n\r\n      submitForm();\r\n    });\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst validation = () => {\r\n  const inputName = document.querySelectorAll(\"input[name=fio]\");\r\n  const inputTel = document.querySelectorAll(\"input[name=tel]\");\r\n\r\n  console.log(inputTel);\r\n\r\n  inputName.forEach((item) => {\r\n    item.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\\s]+/i, \"\");\r\n      e.target.style.border = null;\r\n    });\r\n    item.addEventListener(\"invalid\", (e) => {\r\n      e.preventDefault();\r\n      e.target.style.border = \"1px solid red\";\r\n    });\r\n  });\r\n\r\n  inputTel.forEach((item) => {\r\n    item.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^\\d+()]+/gi, \"\");\r\n      e.target.style.border = null;\r\n    });\r\n    item.addEventListener(\"invalid\", (e) => {\r\n      e.preventDefault();\r\n      e.target.style.border = \"1px solid red\";\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\r\n\n\n//# sourceURL=webpack:///./modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;