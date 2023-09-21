/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/main.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/main.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/stratosskyeng.woff */ "./src/assets/fonts/stratosskyeng.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/stratosskyeng.woff2 */ "./src/assets/fonts/stratosskyeng.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "stratosskyeng";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff2");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "stratosskyeng";
  font-style: normal;
  font-weight: 400;
  color: #000000;
}

button {
  font-family: "stratosskyeng";
  cursor: pointer;
  border: none;
}

.container {
  position: relative;
  background-color: #004980;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c2f5ff;
  border-radius: 12px;
  padding: 50px 70px;
  max-width: 480px;
}
.content_header {
  font-size: 40px;
  max-width: 208px;
  margin-bottom: 48px;
  color: #004980;
  text-align: center;
}
.content_btn {
  display: flex;
  gap: 26px;
  justify-content: center;
}
.content_btn_item {
  color: #004980;
  background-color: white;
  font-size: 60px;
  width: 96px;
  height: 98px;
  border-radius: 10px;
  line-height: 72px;
}
.content_start {
  width: 246px;
  height: 48px;
  margin-top: 67px;
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  border-radius: 12px;
  background: #7ac100;
}

.content_btn_item.selected {
  border: 2px solid #004980;
}

.start {
  width: 1024px;
}
.start_first {
  margin: 22px 0 48px;
  display: flex;
  justify-content: space-between;
}
.start_first_timer {
  display: flex;
  color: white;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 72px;
}
.start_first_btn {
  width: 246px;
  height: 48px;
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  border-radius: 12px;
  background: #7ac100;
}
.start_second {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}
.start_second_img {
  cursor: pointer;
}

.alert {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0.9;
  background: #004980;
}

.alert-wrapper {
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 480px;
  padding: 32px 10px 50px;
  border-radius: 12px;
  background: #c2f5ff;
}
.alert-wrapper > img {
  margin-bottom: 8px;
}
.alert-wrapper-title {
  color: var(--blue-120, #004980);
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
}
.alert-wrapper-text {
  margin: 28px 0 10px;
  font-size: 24px;
  line-height: 32px;
}
.alert-wrapper-time {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  font-size: 64px;
  line-height: 72px;
}
.alert-wrapper-button {
  width: 246px;
  height: 50px;
  color: #fff;
  text-align: center;
  font-family: "stratosskyeng";
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  border-radius: 12px;
  background: var(--salad-60, #7ac100);
}`, "",{"version":3,"sources":["webpack://./src/assets/scss/fonts.scss","webpack://./src/assets/scss/main.scss","webpack://./src/assets/scss/style.scss"],"names":[],"mappings":"AAAA;EACE,4BAAA;EACA,oHACE;ACAJ;ACDA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;ADGF;;ACAA;EACE,4BAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;ADGF;;ACAA;EACE,4BAAA;EACA,eAAA;EACA,YAAA;ADGF;;ACAA;EACE,kBAAA;EACA,yBAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;ADGF;;ACAA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,yBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;ADGF;ACDE;EACE,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;ADGJ;ACDE;EACE,aAAA;EACA,SAAA;EACA,uBAAA;ADGJ;ACFI;EACE,cAAA;EACA,uBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,iBAAA;ADIN;ACDE;EACE,YAAA;EACA,YAAA;EACA,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,mBAAA;ADGJ;;ACCA;EACE,yBAAA;ADEF;;ACCA;EACE,aAAA;ADEF;ACAE;EACE,mBAAA;EACA,aAAA;EACA,8BAAA;ADEJ;ACDI;EACE,aAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;ADGN;ACDI;EACE,YAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,mBAAA;ADGN;ACAE;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,uBAAA;ADEJ;ACDI;EACE,eAAA;ADGN;;ACEA;EACE,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,YAAA;EACA,mBAAA;ADCF;;ACEA;EACE,kBAAA;EACA,UAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;ADCF;ACCE;EACE,kBAAA;ADCJ;ACEE;EACE,+BAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;ADAJ;ACEE;EACE,mBAAA;EACA,eAAA;EACA,iBAAA;ADAJ;ACEE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;ADAJ;ACEE;EACE,YAAA;EACA,YAAA;EACA,WAAA;EACA,kBAAA;EACA,4BAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,oCAAA;ADAJ","sourcesContent":["@font-face {\r\n  font-family: \"stratosskyeng\";\r\n  src:\r\n    url(\"../fonts/stratosskyeng.woff\") format(\"woff\"),\r\n    url(\"../fonts/stratosskyeng.woff2\") format(\"woff2\");\r\n}\r\n","@font-face {\n  font-family: \"stratosskyeng\";\n  src: url(\"../fonts/stratosskyeng.woff\") format(\"woff\"), url(\"../fonts/stratosskyeng.woff2\") format(\"woff2\");\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"stratosskyeng\";\n  font-style: normal;\n  font-weight: 400;\n  color: #000000;\n}\n\nbutton {\n  font-family: \"stratosskyeng\";\n  cursor: pointer;\n  border: none;\n}\n\n.container {\n  position: relative;\n  background-color: #004980;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #c2f5ff;\n  border-radius: 12px;\n  padding: 50px 70px;\n  max-width: 480px;\n}\n.content_header {\n  font-size: 40px;\n  max-width: 208px;\n  margin-bottom: 48px;\n  color: #004980;\n  text-align: center;\n}\n.content_btn {\n  display: flex;\n  gap: 26px;\n  justify-content: center;\n}\n.content_btn_item {\n  color: #004980;\n  background-color: white;\n  font-size: 60px;\n  width: 96px;\n  height: 98px;\n  border-radius: 10px;\n  line-height: 72px;\n}\n.content_start {\n  width: 246px;\n  height: 48px;\n  margin-top: 67px;\n  text-align: center;\n  color: white;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n  border-radius: 12px;\n  background: #7ac100;\n}\n\n.content_btn_item.selected {\n  border: 2px solid #004980;\n}\n\n.start {\n  width: 1024px;\n}\n.start_first {\n  margin: 22px 0 48px;\n  display: flex;\n  justify-content: space-between;\n}\n.start_first_timer {\n  display: flex;\n  color: white;\n  font-size: 64px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 72px;\n}\n.start_first_btn {\n  width: 246px;\n  height: 48px;\n  text-align: center;\n  color: white;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n  border-radius: 12px;\n  background: #7ac100;\n}\n.start_second {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  justify-content: center;\n}\n.start_second_img {\n  cursor: pointer;\n}\n\n.alert {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  opacity: 0.9;\n  background: #004980;\n}\n\n.alert-wrapper {\n  position: absolute;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 480px;\n  padding: 32px 10px 50px;\n  border-radius: 12px;\n  background: #c2f5ff;\n}\n.alert-wrapper > img {\n  margin-bottom: 8px;\n}\n.alert-wrapper-title {\n  color: var(--blue-120, #004980);\n  font-size: 40px;\n  font-weight: 400;\n  line-height: 48px;\n}\n.alert-wrapper-text {\n  margin: 28px 0 10px;\n  font-size: 24px;\n  line-height: 32px;\n}\n.alert-wrapper-time {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 40px;\n  font-size: 64px;\n  line-height: 72px;\n}\n.alert-wrapper-button {\n  width: 246px;\n  height: 50px;\n  color: #fff;\n  text-align: center;\n  font-family: \"stratosskyeng\";\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n  border-radius: 12px;\n  background: var(--salad-60, #7ac100);\n}","//style.scss\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"stratosskyeng\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  color: #000000;\r\n}\r\n\r\nbutton {\r\n  font-family: \"stratosskyeng\";\r\n  cursor: pointer;\r\n  border: none;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  background-color: #004980;\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  background-color: #c2f5ff;\r\n  border-radius: 12px;\r\n  padding: 50px 70px;\r\n  max-width: 480px;\r\n\r\n  &_header {\r\n    font-size: 40px;\r\n    max-width: 208px;\r\n    margin-bottom: 48px;\r\n    color: #004980;\r\n    text-align: center;\r\n  }\r\n  &_btn {\r\n    display: flex;\r\n    gap: 26px;\r\n    justify-content: center;\r\n    &_item {\r\n      color: #004980;\r\n      background-color: white;\r\n      font-size: 60px;\r\n      width: 96px;\r\n      height: 98px;\r\n      border-radius: 10px;\r\n      line-height: 72px;\r\n    }\r\n  }\r\n  &_start {\r\n    width: 246px;\r\n    height: 48px;\r\n    margin-top: 67px;\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n    line-height: 32px;\r\n    border-radius: 12px;\r\n    background: #7ac100;\r\n  }\r\n}\r\n\r\n.content_btn_item.selected {\r\n  border: 2px solid #004980;\r\n}\r\n\r\n.start {\r\n  width: 1024px;\r\n\r\n  &_first {\r\n    margin: 22px 0 48px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    &_timer {\r\n      display: flex;\r\n      color: white;\r\n      font-size: 64px;\r\n      font-style: normal;\r\n      font-weight: 400;\r\n      line-height: 72px;\r\n    }\r\n    &_btn {\r\n      width: 246px;\r\n      height: 48px;\r\n      text-align: center;\r\n      color: white;\r\n      font-size: 24px;\r\n      font-weight: 400;\r\n      line-height: 32px;\r\n      border-radius: 12px;\r\n      background: #7ac100;\r\n    }\r\n  }\r\n  &_second {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    gap: 15px;\r\n    justify-content: center;\r\n    &_img {\r\n      cursor: pointer;\r\n    }\r\n  }\r\n}\r\n\r\n.alert {\r\n  position: absolute;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 2;\r\n  opacity: 0.9;\r\n  background: #004980;\r\n}\r\n\r\n.alert-wrapper {\r\n  position: absolute;\r\n  z-index: 3;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 480px;\r\n  padding: 32px 10px 50px;\r\n  border-radius: 12px;\r\n  background: #c2f5ff;\r\n\r\n  > img {\r\n    margin-bottom: 8px;\r\n  }\r\n\r\n  &-title {\r\n    color: var(--blue-120, #004980);\r\n    font-size: 40px;\r\n    font-weight: 400;\r\n    line-height: 48px;\r\n  }\r\n  &-text {\r\n    margin: 28px 0 10px;\r\n    font-size: 24px;\r\n    line-height: 32px;\r\n  }\r\n  &-time {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 40px;\r\n    font-size: 64px;\r\n    line-height: 72px;\r\n  }\r\n  &-button {\r\n    width: 246px;\r\n    height: 50px;\r\n    color: #fff;\r\n    text-align: center;\r\n    font-family: \"stratosskyeng\";\r\n    font-size: 24px;\r\n    font-weight: 400;\r\n    line-height: 32px;\r\n    border-radius: 12px;\r\n    background: var(--salad-60, #7ac100);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/js/gameControl.js":
/*!**************************************!*\
  !*** ./src/assets/js/gameControl.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enterPage: () => (/* binding */ enterPage),
/* harmony export */   getLevel: () => (/* binding */ getLevel),
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
const container = document.querySelector(".container");
const content = document.createElement("div");
content.classList.add("content");

const enterPage = () => {
  content.innerHTML = `
    <h1 class="content_header">Выбери сложность</h1>
    <div class="content_btn">
      <button class="content_btn_item" data-level="1">1</button>
      <button class="content_btn_item" data-level="2">2</button>
      <button class="content_btn_item" data-level="3">3</button>
    </div>
    <button class="content_start">Старт</button>
  `;

  container.appendChild(content);
  getLevel();
  startGame();
};

const removeSelect = (buttons) => {
  buttons.forEach((btn) => {
    btn.classList.remove("selected");
  });
};

const generateCardPairs = (level) => {
  const numPairs = parseInt(level) * 6; // Количество пар карт в зависимости от уровня
  // Генерация пар карт
  const suits = ["spades", "diamonds", "hearts", "cross"];
  const ranks = ["ace", "king", "queen", "jack", "10", "9", "8", "7", "6"];
  cardPairs = [];

  while (cardPairs.length < numPairs) {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    const image = `${rank}_${suit}.png`;

    if (!cardPairs.includes(image)) {
      cardPairs.push(image);
      cardPairs.push(image);
    }
  }

  return cardPairs.sort(() => Math.random() - 0.5);
};

// Добавляем обработчик клика на кнопки выбора уровня сложности
const getLevel = () => {
  const levelButtons = document.querySelectorAll(".content_btn_item");
  let selectedButton = null;

  removeSelect(levelButtons);

  levelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLevel = button.getAttribute("data-level");

      // Удаляем класс "selected" у всех кнопок
      removeSelect(levelButtons);

      // Добавляем класс "selected" только к выбранной кнопке
      button.classList.add("selected");

      // Обновляем выбранную кнопку
      selectedButton = button;

      localStorage.setItem("selectedLevel", selectedLevel); // Сохраняем выбранный уровень в localStorage
    });
  });
};

let cardPairs = [];

// Добавляем обработчик клика на кнопку "Старт"
const startGame = () => {
  const startButton = document.querySelector(".content_start");

  startButton.addEventListener("click", () => {
    // Получаем уровень сложности из localStorage
    const selectedLevel = localStorage.getItem("selectedLevel");

    if (!selectedLevel) {
      alert("Пожалуйста, выберите уровень сложности перед началом игры.");
      return;
    }

    const cardsList = generateCardPairs(selectedLevel).map((card) => {
      return `
          <img
            class="start_second_img"
            data-flipped="true"
            data-image="../img/${card}"
            src="../img/${card}"
            alt="Card"
          />
        `;
    });
    const startGameField = document.createElement("div");
    startGameField.classList.add("start");
    startGameField.innerHTML = `
      <div class="start_first">
        <div class="start_first_timer">00:00</div>
        <button class="start_first_btn">Начать заново</button>
      </div>
      <div class="start_second">
        ${cardsList.join("")}
      </div>
    `;

    container.removeChild(content);
    container.appendChild(startGameField);

    const cards = document.querySelectorAll(".start_second_img");
    let flippedCards = []; // Массив для хранения перевернутых карточек
    let matchedPairs = 0; // Количество пар, которые были найдены

    cards.forEach((card, index) => {
      card.setAttribute("data-flipped", true);
      setTimeout(() => {
        card.setAttribute("data-flipped", false);
        card.src = "../img/shirt.png";
      }, 5000);
    });

    // Добавляем обработчик клика на каждую карточку
    cards.forEach((card) => {
      card.addEventListener("click", handleCardClick);
    });
    // Функция для обработки клика на карточку
    function handleCardClick(event) {
      const card = event.target;

      if (card.dataset.flipped === "false" && flippedCards.length < 2) {
        flipCard(card);
        flippedCards.push(card);

        if (flippedCards.length === 2) {
          if (flippedCards[0].dataset.image === flippedCards[1].dataset.image) {
            setTimeout(() => {
              // Карты совпали
              matchedPairs++;
              flippedCards = [];

              // длинна массива сгенерированных карт
              if (matchedPairs === cardPairs.length / 2) {
                console.log("winner");
                startTimer(true);
                showWinner({ winner: true });
              }
            }, 1000); // Задержка перед проверкой
          } else {
            // Карты не совпали
            startTimer(true);
            showWinner({ winner: false });
          }
        }
      }
    }

    // Функция для переворота карточки
    function flipCard(card) {
      card.setAttribute("src", card.dataset.image);
      card.setAttribute("data-flipped", "true");
    }

    function showWinner({ winner }) {
      const time = document.querySelector(".start_first_timer").textContent;
      const alertPopup = document.createElement("div");
      alertPopup.classList.add("alert");

      const alertPopupWrapper = document.createElement("div");

      alertPopupWrapper.classList.add("alert-wrapper");
      alertPopupWrapper.innerHTML = `
              <img src="../img/${winner ? "celebration" : "dead"}.png" alt="" />
              <h3 class="alert-wrapper-title">Вы ${
                winner ? "выиграли" : "проиграли"
              } !</h3>
              <p class="alert-wrapper-text">Затраченное время:</p>
              <div class="alert-wrapper-time">
                ${time}
              </div>
              <button class="alert-wrapper-button">Играть снова</button>
            `;

      container.appendChild(alertPopup);
      container.appendChild(alertPopupWrapper);

      const restartGame = document.querySelector(".alert-wrapper-button");

      restartGame.addEventListener("click", () => {
        container.removeChild(alertPopup);
        container.removeChild(alertPopupWrapper);
        unflipCards();
        startTimer();
      });
    }

    const timerElement = document.querySelector(".start_first_timer");
    let timerInterval; // Переменная для хранения интервала таймера
    let seconds = 0;
    let minutes = 0;

    // Функция для обновления таймера
    function updateTimer() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

      timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }

    function startTimer(restart = false) {
      if (restart) {
        clearInterval(timerInterval);
        timerInterval = null;
        return;
      }

      seconds = 0;
      minutes = 0;
      timerInterval = setInterval(updateTimer, 1000);
      updateTimer();
    }

    // пока так
    // Отложенный старт после показа карт
    setTimeout(startTimer, 5000);

    // Функция для скрытия карточек
    function unflipCards() {
      cards.forEach((card) => {
        card.setAttribute("src", "../img/shirt.png");
        card.setAttribute("data-flipped", "false");
      });
      flippedCards = [];
      matchedPairs = 0;
    }

    // Начать заново
    const startNewGame = document.querySelector(".start_first_btn");
    startNewGame?.addEventListener("click", () => {
      localStorage.removeItem("selectedLevel");
      clearInterval(timerInterval);
      timerInterval = null;
      container.removeChild(startGameField);
      container.appendChild(content);
      getLevel();
    });
  });
};


/***/ }),

/***/ "./src/assets/fonts/stratosskyeng.woff":
/*!*********************************************!*\
  !*** ./src/assets/fonts/stratosskyeng.woff ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7d99bd522cf2d77ce4a.woff";

/***/ }),

/***/ "./src/assets/fonts/stratosskyeng.woff2":
/*!**********************************************!*\
  !*** ./src/assets/fonts/stratosskyeng.woff2 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ce93393e831d32412096.woff2";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_js_gameControl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/js/gameControl.js */ "./src/assets/js/gameControl.js");
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/scss/main.scss */ "./src/assets/scss/main.scss");



function component() {
  (0,_assets_js_gameControl_js__WEBPACK_IMPORTED_MODULE_0__.enterPage)();
}

document.body.append(component());

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map