/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const toggleMobileNavigation = __webpack_require__(/*! ./module/toggleMobileNavigation.js */ \"./src/js/module/toggleMobileNavigation.js\");\r\nconst hideMobileNavigationOnDesktop = __webpack_require__(/*! ./module/hideMobileNavigationOnDesktop.js */ \"./src/js/module/hideMobileNavigationOnDesktop.js\");\r\nconst initStickyHeader = __webpack_require__(/*! ./module/initStickyHeader.js */ \"./src/js/module/initStickyHeader.js\");\r\n\r\nconst init = () => {\r\n    const hamburger = document.querySelector('.hamburger');\r\n\r\n    hamburger.addEventListener('click', toggleMobileNavigation);\r\n    window.addEventListener('resize', hideMobileNavigationOnDesktop);\r\n    window.addEventListener('scroll', initStickyHeader);\r\n}\r\n\r\nwindow.addEventListener('load', init);\n\n//# sourceURL=webpack://landing-daietto/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/hideMobileNavigationOnDesktop.js":
/*!********************************************************!*\
  !*** ./src/js/module/hideMobileNavigationOnDesktop.js ***!
  \********************************************************/
/***/ (function(module) {

eval("const hideMobileNavigationOnDesktop = e => {\r\n    const windowInnerWidth = window.innerWidth;\r\n    const navigation = document.querySelector('.header__navigation');\r\n\r\n    if (windowInnerWidth > 992) navigation.classList.remove('opened');\r\n}\r\n\r\nmodule.exports = hideMobileNavigationOnDesktop;\n\n//# sourceURL=webpack://landing-daietto/./src/js/module/hideMobileNavigationOnDesktop.js?");

/***/ }),

/***/ "./src/js/module/initStickyHeader.js":
/*!*******************************************!*\
  !*** ./src/js/module/initStickyHeader.js ***!
  \*******************************************/
/***/ (function(module) {

eval("const initStickyHeader = e => {\r\n    const header = document.querySelector('.header');\r\n    const scrollY = window.scrollY;\r\n\r\n    header.classList.toggle('sticky', scrollY > 0);\r\n}\r\n\r\nmodule.exports = initStickyHeader;\n\n//# sourceURL=webpack://landing-daietto/./src/js/module/initStickyHeader.js?");

/***/ }),

/***/ "./src/js/module/toggleMobileNavigation.js":
/*!*************************************************!*\
  !*** ./src/js/module/toggleMobileNavigation.js ***!
  \*************************************************/
/***/ (function(module) {

eval("const toggleMobileNavigation = e => {\r\n    const navigation = document.querySelector('.header__navigation');\r\n\r\n    navigation.classList.toggle('opened');\r\n}\r\n\r\nmodule.exports = toggleMobileNavigation;\n\n//# sourceURL=webpack://landing-daietto/./src/js/module/toggleMobileNavigation.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;