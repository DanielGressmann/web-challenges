"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/random-character";
exports.ids = ["pages/api/random-character"];
exports.modules = {

/***/ "chance":
/*!*************************!*\
  !*** external "chance" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("chance");

/***/ }),

/***/ "(api)/./pages/api/random-character.js":
/*!***************************************!*\
  !*** ./pages/api/random-character.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chance */ \"chance\");\n/* harmony import */ var chance__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chance__WEBPACK_IMPORTED_MODULE_0__);\n\nconst chance = new (chance__WEBPACK_IMPORTED_MODULE_0___default())();\nfunction handler(request, response) {\n    const character = {\n        firstName: chance.first(),\n        lastName: chance.last(),\n        twitterName: chance.twitter(),\n        geoHash: chance.geohash()\n    };\n    response.status(200).json(character);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmFuZG9tLWNoYXJhY3Rlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFFNUIsTUFBTUMsU0FBUyxJQUFJRCwrQ0FBTUE7QUFFVixTQUFTRSxRQUFRQyxPQUFPLEVBQUVDLFFBQVE7SUFDL0MsTUFBTUMsWUFBWTtRQUNoQkMsV0FBV0wsT0FBT007UUFDbEJDLFVBQVVQLE9BQU9RO1FBQ2pCQyxhQUFhVCxPQUFPVTtRQUNwQkMsU0FBU1gsT0FBT1k7SUFDbEI7SUFFQVQsU0FBU1UsT0FBTyxLQUFLQyxLQUFLVjtBQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2tlbmQtYXBpLXJvdXRlc19yYW5kb20tY2hhcmFjdGVyLy4vcGFnZXMvYXBpL3JhbmRvbS1jaGFyYWN0ZXIuanM/MDMzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhbmNlIGZyb20gXCJjaGFuY2VcIjtcblxuY29uc3QgY2hhbmNlID0gbmV3IENoYW5jZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGNvbnN0IGNoYXJhY3RlciA9IHtcbiAgICBmaXJzdE5hbWU6IGNoYW5jZS5maXJzdCgpLFxuICAgIGxhc3ROYW1lOiBjaGFuY2UubGFzdCgpLFxuICAgIHR3aXR0ZXJOYW1lOiBjaGFuY2UudHdpdHRlcigpLFxuICAgIGdlb0hhc2g6IGNoYW5jZS5nZW9oYXNoKCksXG4gIH07XG5cbiAgcmVzcG9uc2Uuc3RhdHVzKDIwMCkuanNvbihjaGFyYWN0ZXIpO1xufVxuIl0sIm5hbWVzIjpbIkNoYW5jZSIsImNoYW5jZSIsImhhbmRsZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJjaGFyYWN0ZXIiLCJmaXJzdE5hbWUiLCJmaXJzdCIsImxhc3ROYW1lIiwibGFzdCIsInR3aXR0ZXJOYW1lIiwidHdpdHRlciIsImdlb0hhc2giLCJnZW9oYXNoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/random-character.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/random-character.js"));
module.exports = __webpack_exports__;

})();