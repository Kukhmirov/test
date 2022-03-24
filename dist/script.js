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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_popap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/popap */ "./src/js/modules/popap.js");
/* harmony import */ var _modules_gamburger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gamburger */ "./src/js/modules/gamburger.js");
/* harmony import */ var _modules_itemsProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/itemsProduct */ "./src/js/modules/itemsProduct.js");



window.addEventListener("DOMContentLoaded", () => {
  // gamburger menu 
  Object(_modules_itemsProduct__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_gamburger__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./src/js/modules/gamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/gamburger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function gamburgerMenu() {
  const menuToggle = document.querySelector('.hamburger-menu'),
        body = document.querySelector('.body');
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('hamburger-menu--active');
    document.querySelector('.head__body').classList.toggle('head__body--active');
    menuToggle.classList.contains('hamburger-menu--active') ? body.style.overflow = 'hidden' : body.style.overflow = 'initial';
  });
}

/* harmony default export */ __webpack_exports__["default"] = (gamburgerMenu);

/***/ }),

/***/ "./src/js/modules/itemsProduct.js":
/*!****************************************!*\
  !*** ./src/js/modules/itemsProduct.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _serverItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serverItems */ "./src/js/modules/serverItems.js");
/* harmony import */ var _popap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popap */ "./src/js/modules/popap.js");



function itemsProduct() {
  const parentItems = document.querySelector('.parent-items');
  const itemsService = new _serverItems__WEBPACK_IMPORTED_MODULE_0__["default"]();

  function onData() {
    itemsService.getAllItems().then(res => {
      console.log(res);
      addCard(res);
    });
  } // data.forEach(item => console.log(item))


  const addCard = data => {
    data.forEach(item => {
      const itemCard = document.createElement('li');
      itemCard.classList.add('item');
      parentItems.append(itemCard);
      itemCard.innerHTML = `
                <img src=${item.thumbnail} alt="img car">
            `;
    });
    Object(_popap__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
  };

  const onError = () => {
    console.log(1);
  };

  onData();
}

/* harmony default export */ __webpack_exports__["default"] = (itemsProduct);

/***/ }),

/***/ "./src/js/modules/popap.js":
/*!*********************************!*\
  !*** ./src/js/modules/popap.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function popap(data) {
  const items = document.querySelectorAll('.item'),
        parent = document.querySelector('.parent-items');
  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.classList.add('modal');
      parent.append(modal);
      modal.innerHTML = `
                <div class="modal__wrapper">
                    <span>X</span>
                    <img src=${data[index].thumbnail} alt="img car">
                    <div class="numImg">${data[index].name}</div>
                </div>
                `;
      const closeModal = document.querySelector(".modal__wrapper span");
      closeModal.addEventListener('click', () => {
        modal.remove();
      });
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (popap);

/***/ }),

/***/ "./src/js/modules/serverItems.js":
/*!***************************************!*\
  !*** ./src/js/modules/serverItems.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ItemsService {
  constructor() {
    var _this = this;

    _defineProperty(this, "_apiBase", 'https://gateway.marvel.com:443/v1/public/');

    _defineProperty(this, "_apiKey", 'apikey=32a817fadf47affcfc4d0e3b3fec83d9');

    _defineProperty(this, "_baseOffset", 200);

    _defineProperty(this, "getRecurce", async url => {
      let res = await fetch(url);

      if (!res.ok) {
        throw new Error(`ошибка по адресу ${urk}, статус ошибки - ${res.status}`);
      }

      return await res.json();
    });

    _defineProperty(this, "getAllItems", async function () {
      let offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this._baseOffset;
      const res = await _this.getRecurce(`${_this._apiBase}characters?limit=7&offset=${offset}&${_this._apiKey}`);
      return res.data.results.map(item => _this.transformItems(item));
    });

    _defineProperty(this, "transformItems", item => {
      return {
        name: item.name,
        thumbnail: item.thumbnail.path + '.' + item.thumbnail.extension
      };
    });
  }

}

;
/* harmony default export */ __webpack_exports__["default"] = (ItemsService);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map