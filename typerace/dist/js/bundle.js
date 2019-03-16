/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./typerace/src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./typerace/src/constructorLive.js":
/*!*****************************************!*\
  !*** ./typerace/src/constructorLive.js ***!
  \*****************************************/
/*! exports provided: constructorLive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"constructorLive\", function() { return constructorLive; });\nfunction constructorLive(amountLife) {\n  let newUl = '';\n\n  while (amountLife) {\n    newUl += '<li></li>';\n    // eslint-disable-next-line no-param-reassign\n    amountLife -= 1;\n  }\n  return newUl;\n}\n\n\n//# sourceURL=webpack:///./typerace/src/constructorLive.js?");

/***/ }),

/***/ "./typerace/src/eraseLife.js":
/*!***********************************!*\
  !*** ./typerace/src/eraseLife.js ***!
  \***********************************/
/*! exports provided: eraseLife */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eraseLife\", function() { return eraseLife; });\n// стираем жизнь\nfunction eraseLife(errorCounter) {\n  document.getElementById('listLive').querySelectorAll('li')[errorCounter].style.background = 'red';\n}\n\n\n//# sourceURL=webpack:///./typerace/src/eraseLife.js?");

/***/ }),

/***/ "./typerace/src/gameEnd.js":
/*!*********************************!*\
  !*** ./typerace/src/gameEnd.js ***!
  \*********************************/
/*! exports provided: gameEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameEnd\", function() { return gameEnd; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./typerace/src/variables.js\");\n/* harmony import */ var _getLokalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLokalStorage */ \"./typerace/src/getLokalStorage.js\");\n\n\n\nfunction gameEnd() {\n  localStorage.setItem(localStorage.length + 1, _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].currentTime + 1);\n  clearInterval(_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].timeGame);\n  clearTimeout(_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].timerId);\n  Object(_getLokalStorage__WEBPACK_IMPORTED_MODULE_1__[\"getLokalStorage\"])();\n}\n\n\n//# sourceURL=webpack:///./typerace/src/gameEnd.js?");

/***/ }),

/***/ "./typerace/src/gameOver.js":
/*!**********************************!*\
  !*** ./typerace/src/gameOver.js ***!
  \**********************************/
/*! exports provided: gameOver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameOver\", function() { return gameOver; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./typerace/src/variables.js\");\n/* harmony import */ var _getText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getText */ \"./typerace/src/getText.js\");\n/* harmony import */ var _constructorLive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructorLive */ \"./typerace/src/constructorLive.js\");\n\n\n\n\n// выводим сообщение о конце игры\nfunction gameOver() {\n  document.getElementById('inputText').disabled = true;\n  // eslint-disable-next-line no-alert\n  if (window.confirm('Начать заного?')) {\n    clearTimeout(_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].timerId);\n    document.getElementById('inputText').style.background = '';\n    document.getElementById('inputText').value = '';\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].timerId = setTimeout(gameOver, 300 * _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].textElem.length);\n    Object(_getText__WEBPACK_IMPORTED_MODULE_1__[\"getText\"])();\n    document.getElementById('listLive').innerHTML = Object(_constructorLive__WEBPACK_IMPORTED_MODULE_2__[\"constructorLive\"])(Math.trunc(_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].textElem.length / 30));\n    while (_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].errorCounter < Math.trunc(_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].textElem.length / 30)) {\n      document.getElementById('listLive').querySelectorAll('li')[_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].errorCounter].style.background = 'green';\n      _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].errorCounter += 1;\n    }\n    document.getElementById('inputText').disabled = false;\n  }\n  clearInterval(_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].timeGame);\n}\n\n\n//# sourceURL=webpack:///./typerace/src/gameOver.js?");

/***/ }),

/***/ "./typerace/src/getLokalStorage.js":
/*!*****************************************!*\
  !*** ./typerace/src/getLokalStorage.js ***!
  \*****************************************/
/*! exports provided: getLokalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLokalStorage\", function() { return getLokalStorage; });\n// история побед\nfunction getLokalStorage() {\n  let j = 0;\n\n  for (let i = localStorage.length - 4; i <= localStorage.length; i++) {\n    document.getElementById('conteinerButton').querySelectorAll('span')[j].innerHTML =\n      localStorage.getItem(i) < 60 && localStorage.getItem(i) !== null ?\n        `00:${localStorage.getItem(i)}` :\n        `0${Math.floor(localStorage.getItem(i) / 60)}:${\n          localStorage.getItem(i) % 60 > 9 ? localStorage.getItem(i) % 60 : `0${localStorage.getItem(i) % 60}`\n        }`;\n    j += 1;\n  }\n}\n\n\n//# sourceURL=webpack:///./typerace/src/getLokalStorage.js?");

/***/ }),

/***/ "./typerace/src/getText.js":
/*!*********************************!*\
  !*** ./typerace/src/getText.js ***!
  \*********************************/
/*! exports provided: getText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getText\", function() { return getText; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./typerace/src/variables.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ \"./typerace/src/timer.js\");\n\n\n\n// запрос теста\nfunction getText() {\n  const newText = new XMLHttpRequest();\n\n  newText.open('GET', 'https://fish-text.ru/get?format=html&number=1', false);\n  newText.send();\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].textElem = `key${newText.responseText.replace('<p>', '').replace('</p>', '')}`;\n  document.getElementById('text').innerHTML = `<p><span></span>${_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].textElem.replace('key', '')}</p>`;\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].timeText = Math.floor((300 * _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].textElem.length) / 1000);\n  Object(_timer__WEBPACK_IMPORTED_MODULE_1__[\"timer\"])(_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].timeText);\n}\n\n\n//# sourceURL=webpack:///./typerace/src/getText.js?");

/***/ }),

/***/ "./typerace/src/main.js":
/*!******************************!*\
  !*** ./typerace/src/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./typerace/src/variables.js\");\n/* harmony import */ var _getLokalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLokalStorage */ \"./typerace/src/getLokalStorage.js\");\n/* harmony import */ var _gameEnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameEnd */ \"./typerace/src/gameEnd.js\");\n/* harmony import */ var _constructorLive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructorLive */ \"./typerace/src/constructorLive.js\");\n/* harmony import */ var _eraseLife__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eraseLife */ \"./typerace/src/eraseLife.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer */ \"./typerace/src/timer.js\");\n/* harmony import */ var _getText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getText */ \"./typerace/src/getText.js\");\n/* harmony import */ var _gameOver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gameOver */ \"./typerace/src/gameOver.js\");\n/* eslint-disable spaced-comment */\n\n\n\n\n\n\n\n\n\nObject(_getText__WEBPACK_IMPORTED_MODULE_6__[\"getText\"])();\nObject(_getLokalStorage__WEBPACK_IMPORTED_MODULE_1__[\"getLokalStorage\"])();\n//расчет возможного кол-ва ошибок\n_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].errorCounter = Math.trunc(_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].textElem.length / 30);\n//следим за ошибками в input\n// eslint-disable-next-line func-names\ndocument.getElementById('inputText').oninput = function() {\n  const inputEle = `key${document.getElementById('inputText').value}`;\n\n  if (_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].textElem.includes(inputEle)) {\n    document.getElementById('text').innerHTML = `<span>${document.getElementById('inputText').value}</span>${_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].textElem\n      .replace(`key${document.getElementById('inputText').value}`, '')}`;\n    document.getElementById('inputText').style.background = '';\n  } else {\n    document.getElementById('inputText').style.background = 'red';\n  }\n  // eslint-disable-next-line no-unused-expressions\n  !_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].textElem.includes(inputEle) ? Object(_eraseLife__WEBPACK_IMPORTED_MODULE_4__[\"eraseLife\"])(--_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].errorCounter) : '';\n  // eslint-disable-next-line no-unused-expressions\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].errorCounter < 1 ? Object(_gameOver__WEBPACK_IMPORTED_MODULE_7__[\"gameOver\"])() : '';\n  if (inputEle === _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].textElem) {\n    // eslint-disable-next-line no-use-before-define\n    document.getElementById('inputText').value = '';\n    Object(_gameEnd__WEBPACK_IMPORTED_MODULE_2__[\"gameEnd\"])();\n    Object(_getText__WEBPACK_IMPORTED_MODULE_6__[\"getText\"])();\n  }\n};\n\n//выводим скорость набора текста\nsetInterval(() => {\n  if ((document.getElementById('inputText').value.length - _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].textSpeed) * 20 > 0) {\n    document.getElementById('printSpeed').innerHTML = (document.getElementById('inputText').value.length - _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].textSpeed) * 20;\n  }\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].textSpeed = document.getElementById('inputText').value.length;\n}, 3000);\n\n\n// eslint-disable-next-line no-use-before-define\n_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].timerId = setTimeout(_gameOver__WEBPACK_IMPORTED_MODULE_7__[\"gameOver\"], 300 * _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].textElem.length);\n\n//выводим количество жизни\ndocument.getElementById('listLive').innerHTML = Object(_constructorLive__WEBPACK_IMPORTED_MODULE_3__[\"constructorLive\"])(Math.trunc(_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].textElem.length / 30));\n\n\n// eslint-disable-next-line func-names\ndocument.getElementById('stop').onclick = function() {\n  const stopStyle = getComputedStyle(document.getElementById('stop'));\n\n  const temp = _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].currentTime;\n\n  if (stopStyle.backgroundImage === 'url(\"http://www.cgliberty.com/itrazvedka/icons/49.png\")') {\n    document.getElementById('stop').style.backgroundImage =\n      'url(\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWeUlaiJxx2xUx5jqTuamVHco_rVe73oV-TdY4QxZ6ZVSNpnH\")';\n    clearInterval(_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].timeGame);\n    clearTimeout(_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].timerId);\n    document.getElementById('inputText').disabled = true;\n  } else {\n    document.getElementById('stop').style.backgroundImage = 'url(\"http://www.cgliberty.com/itrazvedka/icons/49.png\")';\n    Object(_timer__WEBPACK_IMPORTED_MODULE_5__[\"timer\"])(temp);\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].timerId = setTimeout(_gameOver__WEBPACK_IMPORTED_MODULE_7__[\"gameOver\"], (temp + 1) * 1000);\n    document.getElementById('inputText').disabled = false;\n  }\n};\n\n\n//# sourceURL=webpack:///./typerace/src/main.js?");

/***/ }),

/***/ "./typerace/src/timer.js":
/*!*******************************!*\
  !*** ./typerace/src/timer.js ***!
  \*******************************/
/*! exports provided: timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timer\", function() { return timer; });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./typerace/src/variables.js\");\n\n\nfunction timer(timeText) {\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].currentTime = timeText;\n  _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].timeGame = setInterval(() => {\n    // eslint-disable-next-line no-unused-expressions\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].currentTime >= 60 ? (document.getElementById('printTimeMin').innerHTML = `0${Math.floor(_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].currentTime / 60)}`) : '';\n    document.getElementById('printTimeSec').innerHTML = _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].currentTime % 60 < 10 ?\n      `0${_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].currentTime % 60}` :\n      _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].currentTime % 60;\n    if (_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].currentTime < 10 && _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].currentTime % 2) {\n      document.getElementById('textTime').style.color = 'red';\n      document.getElementById('textTime').style.fontSize = '1.8em';\n    } else if (_variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].currentTime < 10) {\n      document.getElementById('textTime').style.color = '';\n      document.getElementById('textTime').style.fontSize = '1.5em';\n    }\n    _variables__WEBPACK_IMPORTED_MODULE_0__[\"variables\"].currentTime -= 1;\n  }, 1000);\n}\n\n\n//# sourceURL=webpack:///./typerace/src/timer.js?");

/***/ }),

/***/ "./typerace/src/variables.js":
/*!***********************************!*\
  !*** ./typerace/src/variables.js ***!
  \***********************************/
/*! exports provided: variables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"variables\", function() { return variables; });\nconst variables = {\n  textElem: '',\n  timeGame: '',\n  timeText: '',\n  currentTime: '',\n  textSpeed: '',\n  errorCounter: '',\n  timerId: ''\n};\n\n\n//# sourceURL=webpack:///./typerace/src/variables.js?");

/***/ })

/******/ });