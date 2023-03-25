/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/github.svg */ "./src/images/github.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/exit.svg */ "./src/images/exit.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* NORMALIZING START */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 62.5%;\n  --main-text-color: #fff;\n  --header-footer-background: #333;\n  --header-height: clamp(12rem, 15vh, 25rem);\n  --sidebar-width: clamp(250px, 20vw, 400px);\n  --footer-height: clamp(50px, 5vh, 100px);\n  --sidebar-background: #ddd;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n/* NORMALIZING END */\n\n\n\n/* CONTENT START */\n.content {\n  width: 100%;\n  min-height: 100vh;\n  display: grid;\n  grid-template-areas:\n  \"header header header\"\n  \"sidebar main main\"\n  \"footer footer footer\";\n  grid-template-rows: var(--header-height) 1fr var(--footer-height);\n  grid-template-columns: var(--sidebar-width) 1fr;\n}\n/* CONTENT END */\n\n\n\n/* HEADER START */\n.header {\n  width: 100%;\n  height: var(--header-height);\n  background: var(--header-footer-background);\n  padding: 2rem 4rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 3rem;\n  grid-area: header;\n}\n\n.header__icon {\n  height: 100%;\n  object-fit: contain;\n}\n\n.header__title {\n  color: var(--main-text-color);\n  text-transform: uppercase;\n  font-size: 4rem;\n  letter-spacing: 1px;\n}\n/* HEADER END */\n\n\n\n/* SIDEBAR START */\n.sidebar {\n  grid-area: sidebar;\n  background: var(--sidebar-background);\n  width: var(--sidebar-width);\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n}\n\n.sidebar__todo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.sidebar__todo-div {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  padding: 1rem 0 1rem 2rem;\n  transition: all .2s linear;\n  border-radius: 1rem;\n  border: none;\n  background: none;\n}\n\n.sidebar__todo-div-image {\n  height: 2rem;\n  object-fit: contain;\n}\n\n.sidebar__todo-div-title {\n  font-size: 1.7rem;\n  text-transform: uppercase;\n  color: var(--header-footer-background);\n  font-weight: normal;\n}\n\n.sidebar__project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.sidebar__project-section-title {\n  text-transform: uppercase;\n  font-size: 2.5rem;\n  color: var(--header-footer-background);\n}\n\n.sidebar__project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.sidebar__project-container-button, .inbox__project-container-button {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n  text-transform: uppercase;\n  color: var(--header-footer-background);\n  padding: 1rem 2rem;\n  background: none;\n  border: none;\n  transition: all .3s linear;\n  border-radius: 1rem;\n  width: 100%;\n}\n\n.sidebar__project-container-add, .inbox__project-container-add {\n  height: 2rem;\n}\n/* SIDEBAR END */\n\n\n\n/* MAIN START */\n.main {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  padding: 0 10rem;\n}\n\n.inbox-section, .today-section, .this-week-section {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 3rem 0;\n  gap: 3rem;\n  max-width: 1024px;\n}\n\n.inbox-section__title, .today-section__title, .this-week-section__title {\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n  gap: 2rem;\n}\n/* MAIN END */\n\n\n\n/* FOOTER START */\n.footer {\n  width: 100%;\n  height: var(--footer-height);\n  background: var(--header-footer-background);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  grid-area: footer;\n  padding: 1rem;\n}\n\n.footer__copyright {\n  color: var(--main-text-color);\n  font-size: 2rem;\n  text-align: center;\n}\n\n.footer__icon {\n  transition: all .3s linear;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center / contain;\n  display: block;\n  height: 100%;\n  width: 3rem;\n}\n/* FOOTER END */\n\n\n\n/* ADD FORM START */\n.add-form {\n  display: grid;\n  grid-template-areas:\n  \"input input\"\n  \"submit reset\";\n  gap: 2rem;\n  width: 100%;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.add-form__input {\n  grid-area: input;\n  border-radius: .5rem;\n  padding: 1rem;\n  font-size: 2rem;\n  width: 100%;\n  border: none;\n  outline: 1px solid var(--header-footer-background);\n}\n\n.add-form__input:invalid {\n  outline: 1px solid red;\n}\n\n.add-form__input:valid {\n  outline: 1px solid green;\n}\n\n.add-form__submit, .add-form__reset {\n  text-transform: uppercase;\n  font-size: 1.5rem;\n  padding: 1rem 2rem;\n  border-radius: .5rem;\n  border: 1px solid var(--header-footer-background);\n  transition: all .2s linear;\n}\n\n.add-form__submit {\n  grid-area: submit;\n  background: lightgreen;\n}\n\n.add-form__reset {\n  grid-area: reset;\n  background: lightcoral;\n}\n/* ADD FORM END */\n\n\n\n/* TASK START */\n.task {\n  width: 100%;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 1rem;\n  transition: all .2s linear;\n}\n\n.task__first-section, .task__second-section {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.task__check {\n  width: 2.5rem;\n  height: 2.5rem;\n  background: transparent;\n  border: 2px solid var(--header-footer-background);\n  border-radius: 50%;\n}\n\n.task__title {\n  font-size: 2rem;\n  font-weight: 400;\n  max-width: 300px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.task__title_done {\n  text-decoration: line-through;\n}\n\n.task__no-date {\n  font-size: 2rem;\n}\n\n.task__date {\n  font-size: 1.5rem;\n  border-radius: .5rem;\n  border: 1px solid var(--header-footer-background);\n  padding: .5rem;\n}\n\n.task__delete, .project__delete {\n  width: 3rem;\n  height: 3rem;\n  border: none;\n  visibility: hidden;\n  opacity: 0;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center / contain;\n  transition: all .2s linear;\n}\n/* TASK END */\n\n\n\n/* PROJECT START */\n.project {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  border-radius: 1rem;\n  border: none;\n  padding: 1rem 2rem;\n  transition: all .2s linear;\n  background: none;\n}\n\n.project__left-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  text-transform: uppercase;\n}\n\n.project__left-section-icon {\n  width: 3rem;\n  height: 3rem;\n}\n\n.project__left-section-title {\n  font-weight: 400;\n  max-width: 90px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.project__delete {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n/* PROJECT END */\n\n\n\n/* ACTIVE STATES START*/\n.sidebar__todo-div_active {\n  background: var(--main-text-color);\n}\n\n.sidebar__todo-div_active .sidebar__todo-div-title, .sidebar__todo-div_active .project__left-section-title {\n  font-weight: bold;\n}\n\n.task__check_active {\n  background: var(--header-footer-background);\n}\n/* ACTIVE STATES END */\n\n\n\n/* HOVERS START */\n@media (hover: hover) {\n  .sidebar__todo-div:hover, .sidebar__project-container-button:hover {\n    background: var(--main-text-color);\n    cursor: pointer;\n  }\n\n  .add-form__submit:hover {\n    cursor: pointer;\n    background: green;\n    color: var(--main-text-color);\n  }\n\n  .add-form__reset:hover {\n    cursor: pointer;\n    background: red;\n    color: var(--main-text-color);\n  }\n\n  .inbox__project-container-button:hover {\n    cursor: pointer;\n    background: var(--sidebar-background);\n  }\n\n  .task:hover {\n    background: var(--sidebar-background);\n  }\n\n  .project:hover {\n    cursor: pointer;\n    background: var(--main-text-color);\n  }\n\n  .task:hover .task__delete, .project:hover .project__delete {\n    visibility: unset;\n    opacity: unset;\n  }\n\n  .task__delete:hover , .task__no-date:hover, .task__check:hover, .task__date:hover, .project__delete:hover {\n    cursor: pointer;\n  }\n}\n/* HOVERS END */\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["/* NORMALIZING START */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 62.5%;\n  --main-text-color: #fff;\n  --header-footer-background: #333;\n  --header-height: clamp(12rem, 15vh, 25rem);\n  --sidebar-width: clamp(250px, 20vw, 400px);\n  --footer-height: clamp(50px, 5vh, 100px);\n  --sidebar-background: #ddd;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n/* NORMALIZING END */\n\n\n\n/* CONTENT START */\n.content {\n  width: 100%;\n  min-height: 100vh;\n  display: grid;\n  grid-template-areas:\n  \"header header header\"\n  \"sidebar main main\"\n  \"footer footer footer\";\n  grid-template-rows: var(--header-height) 1fr var(--footer-height);\n  grid-template-columns: var(--sidebar-width) 1fr;\n}\n/* CONTENT END */\n\n\n\n/* HEADER START */\n.header {\n  width: 100%;\n  height: var(--header-height);\n  background: var(--header-footer-background);\n  padding: 2rem 4rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 3rem;\n  grid-area: header;\n}\n\n.header__icon {\n  height: 100%;\n  object-fit: contain;\n}\n\n.header__title {\n  color: var(--main-text-color);\n  text-transform: uppercase;\n  font-size: 4rem;\n  letter-spacing: 1px;\n}\n/* HEADER END */\n\n\n\n/* SIDEBAR START */\n.sidebar {\n  grid-area: sidebar;\n  background: var(--sidebar-background);\n  width: var(--sidebar-width);\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n}\n\n.sidebar__todo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.sidebar__todo-div {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  padding: 1rem 0 1rem 2rem;\n  transition: all .2s linear;\n  border-radius: 1rem;\n  border: none;\n  background: none;\n}\n\n.sidebar__todo-div-image {\n  height: 2rem;\n  object-fit: contain;\n}\n\n.sidebar__todo-div-title {\n  font-size: 1.7rem;\n  text-transform: uppercase;\n  color: var(--header-footer-background);\n  font-weight: normal;\n}\n\n.sidebar__project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.sidebar__project-section-title {\n  text-transform: uppercase;\n  font-size: 2.5rem;\n  color: var(--header-footer-background);\n}\n\n.sidebar__project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.sidebar__project-container-button, .inbox__project-container-button {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n  text-transform: uppercase;\n  color: var(--header-footer-background);\n  padding: 1rem 2rem;\n  background: none;\n  border: none;\n  transition: all .3s linear;\n  border-radius: 1rem;\n  width: 100%;\n}\n\n.sidebar__project-container-add, .inbox__project-container-add {\n  height: 2rem;\n}\n/* SIDEBAR END */\n\n\n\n/* MAIN START */\n.main {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  padding: 0 10rem;\n}\n\n.inbox-section, .today-section, .this-week-section {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 3rem 0;\n  gap: 3rem;\n  max-width: 1024px;\n}\n\n.inbox-section__title, .today-section__title, .this-week-section__title {\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n  gap: 2rem;\n}\n/* MAIN END */\n\n\n\n/* FOOTER START */\n.footer {\n  width: 100%;\n  height: var(--footer-height);\n  background: var(--header-footer-background);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  grid-area: footer;\n  padding: 1rem;\n}\n\n.footer__copyright {\n  color: var(--main-text-color);\n  font-size: 2rem;\n  text-align: center;\n}\n\n.footer__icon {\n  transition: all .3s linear;\n  background: url(../images/github.svg) no-repeat center / contain;\n  display: block;\n  height: 100%;\n  width: 3rem;\n}\n/* FOOTER END */\n\n\n\n/* ADD FORM START */\n.add-form {\n  display: grid;\n  grid-template-areas:\n  \"input input\"\n  \"submit reset\";\n  gap: 2rem;\n  width: 100%;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.add-form__input {\n  grid-area: input;\n  border-radius: .5rem;\n  padding: 1rem;\n  font-size: 2rem;\n  width: 100%;\n  border: none;\n  outline: 1px solid var(--header-footer-background);\n}\n\n.add-form__input:invalid {\n  outline: 1px solid red;\n}\n\n.add-form__input:valid {\n  outline: 1px solid green;\n}\n\n.add-form__submit, .add-form__reset {\n  text-transform: uppercase;\n  font-size: 1.5rem;\n  padding: 1rem 2rem;\n  border-radius: .5rem;\n  border: 1px solid var(--header-footer-background);\n  transition: all .2s linear;\n}\n\n.add-form__submit {\n  grid-area: submit;\n  background: lightgreen;\n}\n\n.add-form__reset {\n  grid-area: reset;\n  background: lightcoral;\n}\n/* ADD FORM END */\n\n\n\n/* TASK START */\n.task {\n  width: 100%;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 1rem;\n  transition: all .2s linear;\n}\n\n.task__first-section, .task__second-section {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.task__check {\n  width: 2.5rem;\n  height: 2.5rem;\n  background: transparent;\n  border: 2px solid var(--header-footer-background);\n  border-radius: 50%;\n}\n\n.task__title {\n  font-size: 2rem;\n  font-weight: 400;\n  max-width: 300px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.task__title_done {\n  text-decoration: line-through;\n}\n\n.task__no-date {\n  font-size: 2rem;\n}\n\n.task__date {\n  font-size: 1.5rem;\n  border-radius: .5rem;\n  border: 1px solid var(--header-footer-background);\n  padding: .5rem;\n}\n\n.task__delete, .project__delete {\n  width: 3rem;\n  height: 3rem;\n  border: none;\n  visibility: hidden;\n  opacity: 0;\n  background: url(../images/exit.svg) no-repeat center / contain;\n  transition: all .2s linear;\n}\n/* TASK END */\n\n\n\n/* PROJECT START */\n.project {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  border-radius: 1rem;\n  border: none;\n  padding: 1rem 2rem;\n  transition: all .2s linear;\n  background: none;\n}\n\n.project__left-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  text-transform: uppercase;\n}\n\n.project__left-section-icon {\n  width: 3rem;\n  height: 3rem;\n}\n\n.project__left-section-title {\n  font-weight: 400;\n  max-width: 90px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.project__delete {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n/* PROJECT END */\n\n\n\n/* ACTIVE STATES START*/\n.sidebar__todo-div_active {\n  background: var(--main-text-color);\n}\n\n.sidebar__todo-div_active .sidebar__todo-div-title, .sidebar__todo-div_active .project__left-section-title {\n  font-weight: bold;\n}\n\n.task__check_active {\n  background: var(--header-footer-background);\n}\n/* ACTIVE STATES END */\n\n\n\n/* HOVERS START */\n@media (hover: hover) {\n  .sidebar__todo-div:hover, .sidebar__project-container-button:hover {\n    background: var(--main-text-color);\n    cursor: pointer;\n  }\n\n  .add-form__submit:hover {\n    cursor: pointer;\n    background: green;\n    color: var(--main-text-color);\n  }\n\n  .add-form__reset:hover {\n    cursor: pointer;\n    background: red;\n    color: var(--main-text-color);\n  }\n\n  .inbox__project-container-button:hover {\n    cursor: pointer;\n    background: var(--sidebar-background);\n  }\n\n  .task:hover {\n    background: var(--sidebar-background);\n  }\n\n  .project:hover {\n    cursor: pointer;\n    background: var(--main-text-color);\n  }\n\n  .task:hover .task__delete, .project:hover .project__delete {\n    visibility: unset;\n    opacity: unset;\n  }\n\n  .task__delete:hover , .task__no-date:hover, .task__check:hover, .task__date:hover, .project__delete:hover {\n    cursor: pointer;\n  }\n}\n/* HOVERS END */\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createFooter = (() => {
  const footer = document.createElement('footer')

  const copyright = document.createElement('p')
  copyright.textContent = `Copyright © ${new Date().getFullYear()} Abuzar Mamedov`

  const footerIcon = document.createElement('a')
  footerIcon.className = 'footer__icon'
  footerIcon.href = 'https://github.com/DanieleDefoe'
  footerIcon.target = '_blank'
  footerIcon.rel = 'noreferrer noopener nofollow'

  footer.className = 'footer'
  copyright.className = 'footer__copyright'

  footer.append(copyright)
  footer.append(footerIcon)

  return footer
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);


/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_header_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/header-icon.svg */ "./src/images/header-icon.svg");

// IIFE
const createHeader = (() => {
  const header = document.createElement('header')
  header.className = 'header'

  const headerIcon = new Image()
  headerIcon.className = 'header__icon'
  headerIcon.src = _images_header_icon_svg__WEBPACK_IMPORTED_MODULE_0__

  const headerTitle = document.createElement('h1')
  headerTitle.className = 'header__title'
  headerTitle.textContent = 'todo list'

  header.append(headerIcon)
  header.append(headerTitle)

  return header
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);


/***/ }),

/***/ "./src/inboxAddButton.js":
/*!*******************************!*\
  !*** ./src/inboxAddButton.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_add_project_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/add-project.svg */ "./src/images/add-project.svg");


const createAddButton = (() => {
  const addProjectButton = document.createElement('button')
  addProjectButton.className = 'inbox__project-container-button'

  const addProjectButtonIcon = new Image()
  addProjectButtonIcon.className = 'inbox__project-container-add'
  addProjectButtonIcon.src = _images_add_project_svg__WEBPACK_IMPORTED_MODULE_0__

  const addProjectButtonTitle = document.createElement('h3')
  addProjectButtonTitle.className = 'inbox__project-container-title'

  addProjectButton.append(addProjectButtonIcon, addProjectButtonTitle)

  return addProjectButton
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAddButton);


/***/ }),

/***/ "./src/inboxAddForm.js":
/*!*****************************!*\
  !*** ./src/inboxAddForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createAddForm = (() => {
  const form = document.createElement('form')
  form.className = 'add-form'
  form.id = 'inbox-form'

  const projectInput = document.createElement('input')
  projectInput.className = 'add-form__input'
  projectInput.id = 'inbox-form__input'
  projectInput.name = 'inbox-form__input'
  projectInput.setAttribute('required', true)
  projectInput.setAttribute('minlength', 1)

  const submitButton = document.createElement('button')
  submitButton.className = 'add-form__submit'
  submitButton.type = 'submit'
  submitButton.textContent = 'add'
  submitButton.id = 'inbox-submit'

  const resetButton = document.createElement('button')
  resetButton.className = 'add-form__reset'
  resetButton.type = 'reset'
  resetButton.textContent = 'cancel'
  resetButton.id = 'inbox-reset'

  form.append(projectInput, submitButton, resetButton)

  return form
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAddForm);


/***/ }),

/***/ "./src/inboxSection.js":
/*!*****************************!*\
  !*** ./src/inboxSection.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inboxAddButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inboxAddButton */ "./src/inboxAddButton.js");
//  MOVE EVERY FUCKING EVENT LISTENER TO MAIN


const createInboxSection = (() => {
  const inboxSection = document.createElement('section')
  inboxSection.className = 'inbox-section'

  const inboxSectionTitle = document.createElement('h2')
  inboxSectionTitle.className = 'inbox-section__title'
  inboxSectionTitle.textContent = 'inbox'

  _inboxAddButton__WEBPACK_IMPORTED_MODULE_0__["default"].querySelector('.inbox__project-container-title').textContent = 'add task'

  inboxSection.append(inboxSectionTitle, _inboxAddButton__WEBPACK_IMPORTED_MODULE_0__["default"])

  return inboxSection
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInboxSection);


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inboxSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inboxSection */ "./src/inboxSection.js");
/* harmony import */ var _inboxAddButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inboxAddButton */ "./src/inboxAddButton.js");
/* harmony import */ var _inboxAddForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inboxAddForm */ "./src/inboxAddForm.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* eslint-disable max-len */






const createMain = (() => {
  const main = document.createElement('main')
  main.className = 'main'

  main.append(_inboxSection__WEBPACK_IMPORTED_MODULE_0__["default"])

  main.addEventListener('click', (e) => {
    e.stopPropagation()
    if (e.target) {
      if (e.target.className === 'inbox__project-container-button' || e.target.parentElement.className === 'inbox__project-container-button') {
        main.querySelector('.inbox__project-container-button').remove()
        main.firstElementChild.append(_inboxAddForm__WEBPACK_IMPORTED_MODULE_2__["default"])
      }
    }
  })

  const attachListenersToNewTask = (newTask) => {
    const checkCircle = newTask.querySelector('.task__check')
    const taskTitle = newTask.querySelector('.task__title')
    const noDateText = newTask.querySelector('.task__no-date')
    const secondSection = newTask.querySelector('.task__second-section')
    const deleteButton = newTask.querySelector('.task__delete')

    taskTitle.textContent = main.querySelector('.add-form__input').value

    checkCircle.addEventListener('click', (e) => {
      e.stopPropagation()
      checkCircle.classList.toggle('task__check_active')
      taskTitle.classList.toggle('task__title_done')
    })

    noDateText.addEventListener('click', (e) => {
      e.stopPropagation()
      noDateText.remove()
      const calendarInput = document.createElement('input')
      calendarInput.type = 'date'
      calendarInput.className = 'task__date'
      calendarInput.addEventListener('change', () => {
        noDateText.textContent = calendarInput.value.split('-').reverse().join('/')
        calendarInput.remove()
        secondSection.prepend(noDateText)
      })
      secondSection.prepend(calendarInput)
    })

    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation()
      newTask.remove()
    })
  }

  const closeFormOpenButton = (e) => {
    e.stopPropagation()
    const { target } = e
    if (e.type === 'submit') {
      e.preventDefault()
      const newTask = _task__WEBPACK_IMPORTED_MODULE_3__["default"].cloneNode(true)
      attachListenersToNewTask(newTask)
      main.firstElementChild.insertBefore(newTask, main.firstElementChild.firstElementChild.nextElementSibling)
      target.reset()
    }
    target.remove()
    main.firstElementChild.append(_inboxAddButton__WEBPACK_IMPORTED_MODULE_1__["default"])
  }

  main.addEventListener('submit', closeFormOpenButton)
  main.addEventListener('reset', closeFormOpenButton)

  return main
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_project_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/project-icon.svg */ "./src/images/project-icon.svg");


const createProject = (() => {
  const project = document.createElement('button')
  project.className = 'project'

  const leftSection = document.createElement('div')
  leftSection.className = 'project__left-section'
  const leftSectionIcon = new Image()
  leftSectionIcon.className = 'project__left-section-icon'
  leftSectionIcon.src = _images_project_icon_svg__WEBPACK_IMPORTED_MODULE_0__
  const leftSectionTitle = document.createElement('h3')
  leftSectionTitle.className = 'project__left-section-title'
  leftSection.append(leftSectionIcon, leftSectionTitle)

  const deleteButton = document.createElement('button')
  deleteButton.className = 'project__delete'

  project.append(leftSection, deleteButton)

  return project
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);


/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebarTodoSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebarTodoSection */ "./src/sidebarTodoSection.js");
/* harmony import */ var _sidebarProjectSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebarProjectSection */ "./src/sidebarProjectSection.js");
// SECTIONS



const createSidebar = (() => {
  const sidebar = document.createElement('aside')
  sidebar.className = 'sidebar'

  sidebar.append(_sidebarTodoSection__WEBPACK_IMPORTED_MODULE_0__["default"], _sidebarProjectSection__WEBPACK_IMPORTED_MODULE_1__["default"])

  return sidebar
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSidebar);


/***/ }),

/***/ "./src/sidebarAddButton.js":
/*!*********************************!*\
  !*** ./src/sidebarAddButton.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_add_project_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/add-project.svg */ "./src/images/add-project.svg");


const createAddButton = (() => {
  const addProjectButton = document.createElement('button')
  addProjectButton.className = 'sidebar__project-container-button'

  const addProjectButtonIcon = new Image()
  addProjectButtonIcon.className = 'sidebar__project-container-add'
  addProjectButtonIcon.src = _images_add_project_svg__WEBPACK_IMPORTED_MODULE_0__

  const addProjectButtonTitle = document.createElement('h3')
  addProjectButtonTitle.className = 'sidebar__project-container-title'

  addProjectButton.append(addProjectButtonIcon, addProjectButtonTitle)

  return addProjectButton
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAddButton);


/***/ }),

/***/ "./src/sidebarAddForm.js":
/*!*******************************!*\
  !*** ./src/sidebarAddForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createAddForm = (() => {
  const form = document.createElement('form')
  form.className = 'add-form'
  form.id = 'add-form'

  const projectInput = document.createElement('input')
  projectInput.className = 'add-form__input'
  projectInput.id = 'add-form__input'
  projectInput.name = 'add-form__input'
  projectInput.setAttribute('required', true)
  projectInput.setAttribute('minlength', 1)

  const submitButton = document.createElement('button')
  submitButton.className = 'add-form__submit'
  submitButton.type = 'submit'
  submitButton.textContent = 'add'
  submitButton.id = 'sidebar-submit'

  const resetButton = document.createElement('button')
  resetButton.className = 'add-form__reset'
  resetButton.type = 'reset'
  resetButton.textContent = 'cancel'
  resetButton.id = 'sidebar-reset'

  form.append(projectInput, submitButton, resetButton)

  return form
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAddForm);


/***/ }),

/***/ "./src/sidebarChangeMain.js":
/*!**********************************!*\
  !*** ./src/sidebarChangeMain.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _inboxSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inboxSection */ "./src/inboxSection.js");
/* harmony import */ var _todaySection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todaySection */ "./src/todaySection.js");
/* harmony import */ var _thisWeekSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thisWeekSection */ "./src/thisWeekSection.js");
//  MOVE EVERY FUCKING EVENT LISTENER TO MAIN






const createdPages = {}
const generatedSection = _inboxSection__WEBPACK_IMPORTED_MODULE_1__["default"].cloneNode('.inbox-section__title', '.inbox__project-container-button')

const changeMainState = (sidebarButton) => {
  if (sidebarButton.classList.contains('sidebar__todo-div_active')) return
  document.querySelector('.sidebar__todo-div_active').classList.remove('sidebar__todo-div_active')
  sidebarButton.classList.add('sidebar__todo-div_active')

  _main__WEBPACK_IMPORTED_MODULE_0__["default"].innerHTML = ''

  const identifier = sidebarButton.getAttribute('data-id') || sidebarButton.id
  const key = sidebarButton.innerHTML

  if (identifier === 'INBOX') {
    _main__WEBPACK_IMPORTED_MODULE_0__["default"].append(_inboxSection__WEBPACK_IMPORTED_MODULE_1__["default"])
  } else if (identifier === 'TODAY') {
    _main__WEBPACK_IMPORTED_MODULE_0__["default"].append(_todaySection__WEBPACK_IMPORTED_MODULE_2__["default"])
  } else if (identifier === 'THIS-WEEK') {
    _main__WEBPACK_IMPORTED_MODULE_0__["default"].append(_thisWeekSection__WEBPACK_IMPORTED_MODULE_3__["default"])
  } else if (!Object.keys(createdPages).includes(key)) {
    generatedSection.querySelector('.inbox-section__title').textContent = identifier
    createdPages[key] = generatedSection.cloneNode(true)
    _main__WEBPACK_IMPORTED_MODULE_0__["default"].append(createdPages[key])
  } else {
    _main__WEBPACK_IMPORTED_MODULE_0__["default"].append(createdPages[key])
  }
  console.log(createdPages)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeMainState);


/***/ }),

/***/ "./src/sidebarProjectSection.js":
/*!**************************************!*\
  !*** ./src/sidebarProjectSection.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebarAddButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebarAddButton */ "./src/sidebarAddButton.js");
/* harmony import */ var _sidebarAddForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebarAddForm */ "./src/sidebarAddForm.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _sidebarChangeMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebarChangeMain */ "./src/sidebarChangeMain.js");
/* eslint-disable no-param-reassign */






const createProjectSection = (() => {
  const projectSection = document.createElement('section')
  projectSection.className = 'sidebar__project-section'

  const projectSectionTitle = document.createElement('h2')
  projectSectionTitle.className = 'sidebar__project-section-title'
  projectSectionTitle.textContent = 'projects'

  const projectSectionContainer = document.createElement('div')
  projectSectionContainer.className = 'sidebar__project-container'

  _sidebarAddButton__WEBPACK_IMPORTED_MODULE_0__["default"].querySelector('.sidebar__project-container-title').textContent = 'add project'

  projectSectionContainer.append(_sidebarAddButton__WEBPACK_IMPORTED_MODULE_0__["default"])

  _sidebarAddButton__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('click', () => {
    _sidebarAddButton__WEBPACK_IMPORTED_MODULE_0__["default"].remove()
    projectSectionContainer.append(_sidebarAddForm__WEBPACK_IMPORTED_MODULE_1__["default"])
  })

  const attachListenersToNewProject = (newProject) => {
    newProject.addEventListener('click', () => (0,_sidebarChangeMain__WEBPACK_IMPORTED_MODULE_3__["default"])(newProject))

    const deleteButton = newProject.querySelector('.project__delete')
    const projectTitle = newProject.querySelector('.project__left-section-title')

    deleteButton.addEventListener('click', (e) => {
      e.stopPropagation()
      newProject.remove()
    })

    const newMainSectionTitle = _sidebarAddForm__WEBPACK_IMPORTED_MODULE_1__["default"].querySelector('.add-form__input').value

    newProject.setAttribute('data-id', newMainSectionTitle.toUpperCase())

    projectTitle.textContent = newMainSectionTitle
  }

  const closeFormOpenButton = (e) => {
    const { target } = e
    if (e.type === 'submit') {
      e.preventDefault()
      const newProject = _project__WEBPACK_IMPORTED_MODULE_2__["default"].cloneNode(true)
      attachListenersToNewProject(newProject)
      projectSectionContainer.insertBefore(newProject, projectSectionContainer.firstElementChild)
      target.reset()
    }
    target.remove()
    projectSectionContainer.append(_sidebarAddButton__WEBPACK_IMPORTED_MODULE_0__["default"])
  }

  _sidebarAddForm__WEBPACK_IMPORTED_MODULE_1__["default"].addEventListener('submit', closeFormOpenButton)
  _sidebarAddForm__WEBPACK_IMPORTED_MODULE_1__["default"].addEventListener('reset', closeFormOpenButton)

  projectSection.append(projectSectionTitle, projectSectionContainer)

  return projectSection
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjectSection);


/***/ }),

/***/ "./src/sidebarTodoSection.js":
/*!***********************************!*\
  !*** ./src/sidebarTodoSection.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_inbox_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/inbox.svg */ "./src/images/inbox.svg");
/* harmony import */ var _images_calendar_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/calendar.svg */ "./src/images/calendar.svg");
/* harmony import */ var _images_week_calendar_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/week-calendar.svg */ "./src/images/week-calendar.svg");
/* harmony import */ var _sidebarChangeMain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebarChangeMain */ "./src/sidebarChangeMain.js");




// click event handler


const createTodoSection = (() => {
  const todoSection = document.createElement('section')
  todoSection.className = 'sidebar__todo-section'

  const todoSectionContent = [
    {
      image: _images_inbox_svg__WEBPACK_IMPORTED_MODULE_0__,
      title: 'inbox',
    },
    {
      image: _images_calendar_svg__WEBPACK_IMPORTED_MODULE_1__,
      title: 'today',
    },
    {
      image: _images_week_calendar_svg__WEBPACK_IMPORTED_MODULE_2__,
      title: 'this week',
    },
  ]

  todoSectionContent.forEach((content, index) => {
    const contentDiv = document.createElement('button')
    contentDiv.className = 'sidebar__todo-div'
    contentDiv.id = content.title.replace(/\W+/g, '-').toUpperCase()

    if (index === 0) contentDiv.className = 'sidebar__todo-div sidebar__todo-div_active'

    const contentDivImage = new Image()
    contentDivImage.className = 'sidebar__todo-div-image'
    contentDivImage.src = content.image

    const contentDivTitle = document.createElement('h3')
    contentDivTitle.className = 'sidebar__todo-div-title'
    contentDivTitle.textContent = content.title

    contentDiv.append(contentDivImage, contentDivTitle)

    contentDiv.addEventListener('click', () => (0,_sidebarChangeMain__WEBPACK_IMPORTED_MODULE_3__["default"])(contentDiv))

    todoSection.append(contentDiv)
  })

  return todoSection
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoSection);


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createTask = (() => {
  const task = document.createElement('div')
  task.className = 'task'

  const firstSection = document.createElement('div')
  firstSection.className = 'task__first-section'
  const checkCircle = document.createElement('div')
  checkCircle.className = 'task__check'
  const taskTitle = document.createElement('h4')
  taskTitle.className = 'task__title'
  firstSection.append(checkCircle, taskTitle)

  const secondSection = document.createElement('div')
  secondSection.className = 'task__second-section'
  const noDateText = document.createElement('p')
  noDateText.className = 'task__no-date'
  noDateText.textContent = 'No Date'
  const deleteButton = document.createElement('button')
  deleteButton.className = 'task__delete'
  secondSection.append(noDateText, deleteButton)

  task.append(firstSection, secondSection)

  return task
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);


/***/ }),

/***/ "./src/thisWeekSection.js":
/*!********************************!*\
  !*** ./src/thisWeekSection.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createThisWeekSection = (() => {
  const thisWeekSection = document.createElement('section')
  thisWeekSection.className = 'this-week-section'

  const thisWeekSectionTitle = document.createElement('h2')
  thisWeekSectionTitle.className = 'this-week-section__title'
  thisWeekSectionTitle.textContent = 'this week'

  thisWeekSection.append(thisWeekSectionTitle)

  return thisWeekSection
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createThisWeekSection);


/***/ }),

/***/ "./src/todaySection.js":
/*!*****************************!*\
  !*** ./src/todaySection.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createTodaySection = (() => {
  const todaySection = document.createElement('section')
  todaySection.className = 'today-section'

  const todaySectionTitle = document.createElement('h2')
  todaySectionTitle.className = 'today-section__title'
  todaySectionTitle.textContent = 'today'

  todaySection.append(todaySectionTitle)

  return todaySection
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodaySection);


/***/ }),

/***/ "./src/images/add-project.svg":
/*!************************************!*\
  !*** ./src/images/add-project.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ccb4d64059afe6c75edf.svg";

/***/ }),

/***/ "./src/images/calendar.svg":
/*!*********************************!*\
  !*** ./src/images/calendar.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "686ede7a74b0827fa575.svg";

/***/ }),

/***/ "./src/images/exit.svg":
/*!*****************************!*\
  !*** ./src/images/exit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82b189471948ae60947c.svg";

/***/ }),

/***/ "./src/images/github.svg":
/*!*******************************!*\
  !*** ./src/images/github.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d7703c89d24838dd17f0.svg";

/***/ }),

/***/ "./src/images/header-icon.svg":
/*!************************************!*\
  !*** ./src/images/header-icon.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15f8603760ce6de58393.svg";

/***/ }),

/***/ "./src/images/inbox.svg":
/*!******************************!*\
  !*** ./src/images/inbox.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c40bedd9b56dacf157b.svg";

/***/ }),

/***/ "./src/images/project-icon.svg":
/*!*************************************!*\
  !*** ./src/images/project-icon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c115642cf15be9f65ad.svg";

/***/ }),

/***/ "./src/images/week-calendar.svg":
/*!**************************************!*\
  !*** ./src/images/week-calendar.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af27a7fbbbdb86b660fc.svg";

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
/******/ 		__webpack_require__.p = "/";
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
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
// STYLES


// CORE PARTS





// import Icon from './images/icon.svg
// const image = new Image()
// image.src = Icon

const createApp = (() => {
  const content = document.createElement('div')
  content.className = 'content'

  content.append(_header__WEBPACK_IMPORTED_MODULE_1__["default"])
  content.append(_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"])
  content.append(_main__WEBPACK_IMPORTED_MODULE_3__["default"])
  content.append(_footer__WEBPACK_IMPORTED_MODULE_4__["default"])

  return content
})()

document.body.append(createApp)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLEtBQUssZUFBZSxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxhQUFhLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLGFBQWEsWUFBWSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxlQUFlLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtB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LGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYmpDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQzJCOztBQUUzQjtBQUM2QjtBQUNFO0FBQ047QUFDSTs7QUFFN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsK0NBQU07QUFDdkIsaUJBQWlCLGdEQUFPO0FBQ3hCLGlCQUFpQiw2Q0FBSTtBQUNyQixpQkFBaUIsK0NBQU07O0FBRXZCO0FBQ0EsQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luZGV4LmNzcz82MzQ5Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmJveEFkZEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5ib3hBZGRGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmJveFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGViYXJBZGRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGViYXJBZGRGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyQ2hhbmdlTWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhclByb2plY3RTZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyVG9kb1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RoaXNXZWVrU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kYXlTZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZ2l0aHViLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9leGl0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBOT1JNQUxJWklORyBTVEFSVCAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAtLW1haW4tdGV4dC1jb2xvcjogI2ZmZjtcXG4gIC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kOiAjMzMzO1xcbiAgLS1oZWFkZXItaGVpZ2h0OiBjbGFtcCgxMnJlbSwgMTV2aCwgMjVyZW0pO1xcbiAgLS1zaWRlYmFyLXdpZHRoOiBjbGFtcCgyNTBweCwgMjB2dywgNDAwcHgpO1xcbiAgLS1mb290ZXItaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dmgsIDEwMHB4KTtcXG4gIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiAjZGRkO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuLyogTk9STUFMSVpJTkcgRU5EICovXFxuXFxuXFxuXFxuLyogQ09OVEVOVCBTVEFSVCAqL1xcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gIFxcXCJzaWRlYmFyIG1haW4gbWFpblxcXCJcXG4gIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLWhlYWRlci1oZWlnaHQpIDFmciB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tc2lkZWJhci13aWR0aCkgMWZyO1xcbn1cXG4vKiBDT05URU5UIEVORCAqL1xcblxcblxcblxcbi8qIEhFQURFUiBTVEFSVCAqL1xcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbi5oZWFkZXJfX2ljb24ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuLyogSEVBREVSIEVORCAqL1xcblxcblxcblxcbi8qIFNJREVCQVIgU1RBUlQgKi9cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9fdG9kby1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9fdG9kby1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnNpZGViYXJfX3RvZG8tZGl2LWltYWdlIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5zaWRlYmFyX190b2RvLWRpdi10aXRsZSB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LXNlY3Rpb24tdGl0bGUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLnNpZGViYXJfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbiwgLmluYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci1hZGQsIC5pbmJveF9fcHJvamVjdC1jb250YWluZXItYWRkIHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLyogU0lERUJBUiBFTkQgKi9cXG5cXG5cXG5cXG4vKiBNQUlOIFNUQVJUICovXFxuLm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxMHJlbTtcXG59XFxuXFxuLmluYm94LXNlY3Rpb24sIC50b2RheS1zZWN0aW9uLCAudGhpcy13ZWVrLXNlY3Rpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcmVtIDA7XFxuICBnYXA6IDNyZW07XFxuICBtYXgtd2lkdGg6IDEwMjRweDtcXG59XFxuXFxuLmluYm94LXNlY3Rpb25fX3RpdGxlLCAudG9kYXktc2VjdGlvbl9fdGl0bGUsIC50aGlzLXdlZWstc2VjdGlvbl9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XFxuICBnYXA6IDJyZW07XFxufVxcbi8qIE1BSU4gRU5EICovXFxuXFxuXFxuXFxuLyogRk9PVEVSIFNUQVJUICovXFxuLmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZvb3Rlcl9fY29weXJpZ2h0IHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyX19pY29uIHtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDNyZW07XFxufVxcbi8qIEZPT1RFUiBFTkQgKi9cXG5cXG5cXG5cXG4vKiBBREQgRk9STSBTVEFSVCAqL1xcbi5hZGQtZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gIFxcXCJpbnB1dCBpbnB1dFxcXCJcXG4gIFxcXCJzdWJtaXQgcmVzZXRcXFwiO1xcbiAgZ2FwOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5cXG4uYWRkLWZvcm1fX2lucHV0IHtcXG4gIGdyaWQtYXJlYTogaW5wdXQ7XFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uYWRkLWZvcm1fX2lucHV0OmludmFsaWQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmFkZC1mb3JtX19pbnB1dDp2YWxpZCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgZ3JlZW47XFxufVxcblxcbi5hZGQtZm9ybV9fc3VibWl0LCAuYWRkLWZvcm1fX3Jlc2V0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbn1cXG5cXG4uYWRkLWZvcm1fX3N1Ym1pdCB7XFxuICBncmlkLWFyZWE6IHN1Ym1pdDtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5hZGQtZm9ybV9fcmVzZXQge1xcbiAgZ3JpZC1hcmVhOiByZXNldDtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Y29yYWw7XFxufVxcbi8qIEFERCBGT1JNIEVORCAqL1xcblxcblxcblxcbi8qIFRBU0sgU1RBUlQgKi9cXG4udGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbn1cXG5cXG4udGFza19fZmlyc3Qtc2VjdGlvbiwgLnRhc2tfX3NlY29uZC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrX19jaGVjayB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi50YXNrX190aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50YXNrX190aXRsZV9kb25lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFza19fbm8tZGF0ZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi50YXNrX19kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbiAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi50YXNrX19kZWxldGUsIC5wcm9qZWN0X19kZWxldGUge1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbn1cXG4vKiBUQVNLIEVORCAqL1xcblxcblxcblxcbi8qIFBST0pFQ1QgU1RBUlQgKi9cXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnByb2plY3RfX2xlZnQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLnByb2plY3RfX2xlZnQtc2VjdGlvbi1pY29uIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4ucHJvamVjdF9fbGVmdC1zZWN0aW9uLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXgtd2lkdGg6IDkwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ucHJvamVjdF9fZGVsZXRlIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG59XFxuLyogUFJPSkVDVCBFTkQgKi9cXG5cXG5cXG5cXG4vKiBBQ1RJVkUgU1RBVEVTIFNUQVJUKi9cXG4uc2lkZWJhcl9fdG9kby1kaXZfYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxufVxcblxcbi5zaWRlYmFyX190b2RvLWRpdl9hY3RpdmUgLnNpZGViYXJfX3RvZG8tZGl2LXRpdGxlLCAuc2lkZWJhcl9fdG9kby1kaXZfYWN0aXZlIC5wcm9qZWN0X19sZWZ0LXNlY3Rpb24tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YXNrX19jaGVja19hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG59XFxuLyogQUNUSVZFIFNUQVRFUyBFTkQgKi9cXG5cXG5cXG5cXG4vKiBIT1ZFUlMgU1RBUlQgKi9cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgLnNpZGViYXJfX3RvZG8tZGl2OmhvdmVyLCAuc2lkZWJhcl9fcHJvamVjdC1jb250YWluZXItYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmFkZC1mb3JtX19zdWJtaXQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5hZGQtZm9ybV9fcmVzZXQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICB9XFxuXFxuICAuaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gIH1cXG5cXG4gIC50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgfVxcblxcbiAgLnRhc2s6aG92ZXIgLnRhc2tfX2RlbGV0ZSwgLnByb2plY3Q6aG92ZXIgLnByb2plY3RfX2RlbGV0ZSB7XFxuICAgIHZpc2liaWxpdHk6IHVuc2V0O1xcbiAgICBvcGFjaXR5OiB1bnNldDtcXG4gIH1cXG5cXG4gIC50YXNrX19kZWxldGU6aG92ZXIgLCAudGFza19fbm8tZGF0ZTpob3ZlciwgLnRhc2tfX2NoZWNrOmhvdmVyLCAudGFza19fZGF0ZTpob3ZlciwgLnByb2plY3RfX2RlbGV0ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuLyogSE9WRVJTIEVORCAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHNCQUFzQjtBQUN0QjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsMENBQTBDO0VBQzFDLDBDQUEwQztFQUMxQyx3Q0FBd0M7RUFDeEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUpBQW1KO0FBQ3JKO0FBQ0Esb0JBQW9COzs7O0FBSXBCLGtCQUFrQjtBQUNsQjtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiOzs7d0JBR3NCO0VBQ3RCLGlFQUFpRTtFQUNqRSwrQ0FBK0M7QUFDakQ7QUFDQSxnQkFBZ0I7Ozs7QUFJaEIsaUJBQWlCO0FBQ2pCO0VBQ0UsV0FBVztFQUNYLDRCQUE0QjtF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aUI7QUFDbkI7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7QUFDQSxzQkFBc0I7Ozs7QUFJdEIsaUJBQWlCO0FBQ2pCO0VBQ0U7SUFDRSxrQ0FBa0M7SUFDbEMsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBQ0EsZUFBZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBOT1JNQUxJWklORyBTVEFSVCAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAtLW1haW4tdGV4dC1jb2xvcjogI2ZmZjtcXG4gIC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kOiAjMzMzO1xcbiAgLS1oZWFkZXItaGVpZ2h0OiBjbGFtcCgxMnJlbSwgMTV2aCwgMjVyZW0pO1xcbiAgLS1zaWRlYmFyLXdpZHRoOiBjbGFtcCgyNTBweCwgMjB2dywgNDAwcHgpO1xcbiAgLS1mb290ZXItaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dmgsIDEwMHB4KTtcXG4gIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiAjZGRkO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuLyogTk9STUFMSVpJTkcgRU5EICovXFxuXFxuXFxuXFxuLyogQ09OVEVOVCBTVEFSVCAqL1xcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gIFxcXCJzaWRlYmFyIG1haW4gbWFpblxcXCJcXG4gIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLWhlYWRlci1oZWlnaHQpIDFmciB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tc2lkZWJhci13aWR0aCkgMWZyO1xcbn1cXG4vKiBDT05URU5UIEVORCAqL1xcblxcblxcblxcbi8qIEhFQURFUiBTVEFSVCAqL1xcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbi5oZWFkZXJfX2ljb24ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuLyogSEVBREVSIEVORCAqL1xcblxcblxcblxcbi8qIFNJREVCQVIgU1RBUlQgKi9cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9fdG9kby1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9fdG9kby1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnNpZGViYXJfX3RvZG8tZGl2LWltYWdlIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5zaWRlYmFyX190b2RvLWRpdi10aXRsZSB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LXNlY3Rpb24tdGl0bGUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLnNpZGViYXJfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbiwgLmluYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci1hZGQsIC5pbmJveF9fcHJvamVjdC1jb250YWluZXItYWRkIHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLyogU0lERUJBUiBFTkQgKi9cXG5cXG5cXG5cXG4vKiBNQUlOIFNUQVJUICovXFxuLm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxMHJlbTtcXG59XFxuXFxuLmluYm94LXNlY3Rpb24sIC50b2RheS1zZWN0aW9uLCAudGhpcy13ZWVrLXNlY3Rpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcmVtIDA7XFxuICBnYXA6IDNyZW07XFxuICBtYXgtd2lkdGg6IDEwMjRweDtcXG59XFxuXFxuLmluYm94LXNlY3Rpb25fX3RpdGxlLCAudG9kYXktc2VjdGlvbl9fdGl0bGUsIC50aGlzLXdlZWstc2VjdGlvbl9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XFxuICBnYXA6IDJyZW07XFxufVxcbi8qIE1BSU4gRU5EICovXFxuXFxuXFxuXFxuLyogRk9PVEVSIFNUQVJUICovXFxuLmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZvb3Rlcl9fY29weXJpZ2h0IHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyX19pY29uIHtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9naXRodWIuc3ZnKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDNyZW07XFxufVxcbi8qIEZPT1RFUiBFTkQgKi9cXG5cXG5cXG5cXG4vKiBBREQgRk9STSBTVEFSVCAqL1xcbi5hZGQtZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gIFxcXCJpbnB1dCBpbnB1dFxcXCJcXG4gIFxcXCJzdWJtaXQgcmVzZXRcXFwiO1xcbiAgZ2FwOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbn1cXG5cXG4uYWRkLWZvcm1fX2lucHV0IHtcXG4gIGdyaWQtYXJlYTogaW5wdXQ7XFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uYWRkLWZvcm1fX2lucHV0OmludmFsaWQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmFkZC1mb3JtX19pbnB1dDp2YWxpZCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgZ3JlZW47XFxufVxcblxcbi5hZGQtZm9ybV9fc3VibWl0LCAuYWRkLWZvcm1fX3Jlc2V0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbn1cXG5cXG4uYWRkLWZvcm1fX3N1Ym1pdCB7XFxuICBncmlkLWFyZWE6IHN1Ym1pdDtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5hZGQtZm9ybV9fcmVzZXQge1xcbiAgZ3JpZC1hcmVhOiByZXNldDtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Y29yYWw7XFxufVxcbi8qIEFERCBGT1JNIEVORCAqL1xcblxcblxcblxcbi8qIFRBU0sgU1RBUlQgKi9cXG4udGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbn1cXG5cXG4udGFza19fZmlyc3Qtc2VjdGlvbiwgLnRhc2tfX3NlY29uZC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrX19jaGVjayB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi50YXNrX190aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50YXNrX190aXRsZV9kb25lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFza19fbm8tZGF0ZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi50YXNrX19kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbiAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi50YXNrX19kZWxldGUsIC5wcm9qZWN0X19kZWxldGUge1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9leGl0LnN2Zykgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcXG59XFxuLyogVEFTSyBFTkQgKi9cXG5cXG5cXG5cXG4vKiBQUk9KRUNUIFNUQVJUICovXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0X19sZWZ0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5wcm9qZWN0X19sZWZ0LXNlY3Rpb24taWNvbiB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLnByb2plY3RfX2xlZnQtc2VjdGlvbi10aXRsZSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWF4LXdpZHRoOiA5MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnByb2plY3RfX2RlbGV0ZSB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxufVxcbi8qIFBST0pFQ1QgRU5EICovXFxuXFxuXFxuXFxuLyogQUNUSVZFIFNUQVRFUyBTVEFSVCovXFxuLnNpZGViYXJfX3RvZG8tZGl2X2FjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uc2lkZWJhcl9fdG9kby1kaXZfYWN0aXZlIC5zaWRlYmFyX190b2RvLWRpdi10aXRsZSwgLnNpZGViYXJfX3RvZG8tZGl2X2FjdGl2ZSAucHJvamVjdF9fbGVmdC1zZWN0aW9uLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGFza19fY2hlY2tfYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxufVxcbi8qIEFDVElWRSBTVEFURVMgRU5EICovXFxuXFxuXFxuXFxuLyogSE9WRVJTIFNUQVJUICovXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gIC5zaWRlYmFyX190b2RvLWRpdjpob3ZlciwgLnNpZGViYXJfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5hZGQtZm9ybV9fc3VibWl0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICB9XFxuXFxuICAuYWRkLWZvcm1fX3Jlc2V0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgfVxcblxcbiAgLmluYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICB9XFxuXFxuICAudGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICB9XFxuXFxuICAucHJvamVjdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC50YXNrOmhvdmVyIC50YXNrX19kZWxldGUsIC5wcm9qZWN0OmhvdmVyIC5wcm9qZWN0X19kZWxldGUge1xcbiAgICB2aXNpYmlsaXR5OiB1bnNldDtcXG4gICAgb3BhY2l0eTogdW5zZXQ7XFxuICB9XFxuXFxuICAudGFza19fZGVsZXRlOmhvdmVyICwgLnRhc2tfX25vLWRhdGU6aG92ZXIsIC50YXNrX19jaGVjazpob3ZlciwgLnRhc2tfX2RhdGU6aG92ZXIsIC5wcm9qZWN0X19kZWxldGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcbi8qIEhPVkVSUyBFTkQgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNyZWF0ZUZvb3RlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG5cbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEFidXphciBNYW1lZG92YFxuXG4gIGNvbnN0IGZvb3Rlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgZm9vdGVySWNvbi5jbGFzc05hbWUgPSAnZm9vdGVyX19pY29uJ1xuICBmb290ZXJJY29uLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0RhbmllbGVEZWZvZSdcbiAgZm9vdGVySWNvbi50YXJnZXQgPSAnX2JsYW5rJ1xuICBmb290ZXJJY29uLnJlbCA9ICdub3JlZmVycmVyIG5vb3BlbmVyIG5vZm9sbG93J1xuXG4gIGZvb3Rlci5jbGFzc05hbWUgPSAnZm9vdGVyJ1xuICBjb3B5cmlnaHQuY2xhc3NOYW1lID0gJ2Zvb3Rlcl9fY29weXJpZ2h0J1xuXG4gIGZvb3Rlci5hcHBlbmQoY29weXJpZ2h0KVxuICBmb290ZXIuYXBwZW5kKGZvb3Rlckljb24pXG5cbiAgcmV0dXJuIGZvb3RlclxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXJcbiIsImltcG9ydCBJY29uIGZyb20gJy4vaW1hZ2VzL2hlYWRlci1pY29uLnN2Zydcbi8vIElJRkVcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gIGhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJ1xuXG4gIGNvbnN0IGhlYWRlckljb24gPSBuZXcgSW1hZ2UoKVxuICBoZWFkZXJJY29uLmNsYXNzTmFtZSA9ICdoZWFkZXJfX2ljb24nXG4gIGhlYWRlckljb24uc3JjID0gSWNvblxuXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICBoZWFkZXJUaXRsZS5jbGFzc05hbWUgPSAnaGVhZGVyX190aXRsZSdcbiAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAndG9kbyBsaXN0J1xuXG4gIGhlYWRlci5hcHBlbmQoaGVhZGVySWNvbilcbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJUaXRsZSlcblxuICByZXR1cm4gaGVhZGVyXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlclxuIiwiaW1wb3J0IEFkZFByb2plY3RJY29uIGZyb20gJy4vaW1hZ2VzL2FkZC1wcm9qZWN0LnN2ZydcblxuY29uc3QgY3JlYXRlQWRkQnV0dG9uID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGFkZFByb2plY3RCdXR0b24uY2xhc3NOYW1lID0gJ2luYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24nXG5cbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbkljb24gPSBuZXcgSW1hZ2UoKVxuICBhZGRQcm9qZWN0QnV0dG9uSWNvbi5jbGFzc05hbWUgPSAnaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLWFkZCdcbiAgYWRkUHJvamVjdEJ1dHRvbkljb24uc3JjID0gQWRkUHJvamVjdEljb25cblxuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIGFkZFByb2plY3RCdXR0b25UaXRsZS5jbGFzc05hbWUgPSAnaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLXRpdGxlJ1xuXG4gIGFkZFByb2plY3RCdXR0b24uYXBwZW5kKGFkZFByb2plY3RCdXR0b25JY29uLCBhZGRQcm9qZWN0QnV0dG9uVGl0bGUpXG5cbiAgcmV0dXJuIGFkZFByb2plY3RCdXR0b25cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRkQnV0dG9uXG4iLCJjb25zdCBjcmVhdGVBZGRGb3JtID0gKCgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICBmb3JtLmNsYXNzTmFtZSA9ICdhZGQtZm9ybSdcbiAgZm9ybS5pZCA9ICdpbmJveC1mb3JtJ1xuXG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgcHJvamVjdElucHV0LmNsYXNzTmFtZSA9ICdhZGQtZm9ybV9faW5wdXQnXG4gIHByb2plY3RJbnB1dC5pZCA9ICdpbmJveC1mb3JtX19pbnB1dCdcbiAgcHJvamVjdElucHV0Lm5hbWUgPSAnaW5ib3gtZm9ybV9faW5wdXQnXG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSlcbiAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgMSlcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBzdWJtaXRCdXR0b24uY2xhc3NOYW1lID0gJ2FkZC1mb3JtX19zdWJtaXQnXG4gIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCdcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ2FkZCdcbiAgc3VibWl0QnV0dG9uLmlkID0gJ2luYm94LXN1Ym1pdCdcblxuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIHJlc2V0QnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtZm9ybV9fcmVzZXQnXG4gIHJlc2V0QnV0dG9uLnR5cGUgPSAncmVzZXQnXG4gIHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gJ2NhbmNlbCdcbiAgcmVzZXRCdXR0b24uaWQgPSAnaW5ib3gtcmVzZXQnXG5cbiAgZm9ybS5hcHBlbmQocHJvamVjdElucHV0LCBzdWJtaXRCdXR0b24sIHJlc2V0QnV0dG9uKVxuXG4gIHJldHVybiBmb3JtXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkZEZvcm1cbiIsIi8vICBNT1ZFIEVWRVJZIEZVQ0tJTkcgRVZFTlQgTElTVEVORVIgVE8gTUFJTlxuaW1wb3J0IGFkZEJ1dHRvbiBmcm9tICcuL2luYm94QWRkQnV0dG9uJ1xuXG5jb25zdCBjcmVhdGVJbmJveFNlY3Rpb24gPSAoKCkgPT4ge1xuICBjb25zdCBpbmJveFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgaW5ib3hTZWN0aW9uLmNsYXNzTmFtZSA9ICdpbmJveC1zZWN0aW9uJ1xuXG4gIGNvbnN0IGluYm94U2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICBpbmJveFNlY3Rpb25UaXRsZS5jbGFzc05hbWUgPSAnaW5ib3gtc2VjdGlvbl9fdGl0bGUnXG4gIGluYm94U2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ2luYm94J1xuXG4gIGFkZEJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLXRpdGxlJykudGV4dENvbnRlbnQgPSAnYWRkIHRhc2snXG5cbiAgaW5ib3hTZWN0aW9uLmFwcGVuZChpbmJveFNlY3Rpb25UaXRsZSwgYWRkQnV0dG9uKVxuXG4gIHJldHVybiBpbmJveFNlY3Rpb25cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5ib3hTZWN0aW9uXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgaW5ib3hTZWN0aW9uIGZyb20gJy4vaW5ib3hTZWN0aW9uJ1xuXG5pbXBvcnQgYWRkQnV0dG9uIGZyb20gJy4vaW5ib3hBZGRCdXR0b24nXG5pbXBvcnQgYWRkRm9ybSBmcm9tICcuL2luYm94QWRkRm9ybSdcbmltcG9ydCB0YXNrIGZyb20gJy4vdGFzaydcblxuY29uc3QgY3JlYXRlTWFpbiA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgbWFpbi5jbGFzc05hbWUgPSAnbWFpbidcblxuICBtYWluLmFwcGVuZChpbmJveFNlY3Rpb24pXG5cbiAgbWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGlmIChlLnRhcmdldCkge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2luYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24nIHx8IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSAnaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbicpIHtcbiAgICAgICAgbWFpbi5xdWVyeVNlbGVjdG9yKCcuaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbicpLnJlbW92ZSgpXG4gICAgICAgIG1haW4uZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kKGFkZEZvcm0pXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IGF0dGFjaExpc3RlbmVyc1RvTmV3VGFzayA9IChuZXdUYXNrKSA9PiB7XG4gICAgY29uc3QgY2hlY2tDaXJjbGUgPSBuZXdUYXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrX19jaGVjaycpXG4gICAgY29uc3QgdGFza1RpdGxlID0gbmV3VGFzay5xdWVyeVNlbGVjdG9yKCcudGFza19fdGl0bGUnKVxuICAgIGNvbnN0IG5vRGF0ZVRleHQgPSBuZXdUYXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrX19uby1kYXRlJylcbiAgICBjb25zdCBzZWNvbmRTZWN0aW9uID0gbmV3VGFzay5xdWVyeVNlbGVjdG9yKCcudGFza19fc2Vjb25kLXNlY3Rpb24nKVxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG5ld1Rhc2sucXVlcnlTZWxlY3RvcignLnRhc2tfX2RlbGV0ZScpXG5cbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBtYWluLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybV9faW5wdXQnKS52YWx1ZVxuXG4gICAgY2hlY2tDaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgY2hlY2tDaXJjbGUuY2xhc3NMaXN0LnRvZ2dsZSgndGFza19fY2hlY2tfYWN0aXZlJylcbiAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrX190aXRsZV9kb25lJylcbiAgICB9KVxuXG4gICAgbm9EYXRlVGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBub0RhdGVUZXh0LnJlbW92ZSgpXG4gICAgICBjb25zdCBjYWxlbmRhcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgY2FsZW5kYXJJbnB1dC50eXBlID0gJ2RhdGUnXG4gICAgICBjYWxlbmRhcklucHV0LmNsYXNzTmFtZSA9ICd0YXNrX19kYXRlJ1xuICAgICAgY2FsZW5kYXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgIG5vRGF0ZVRleHQudGV4dENvbnRlbnQgPSBjYWxlbmRhcklucHV0LnZhbHVlLnNwbGl0KCctJykucmV2ZXJzZSgpLmpvaW4oJy8nKVxuICAgICAgICBjYWxlbmRhcklucHV0LnJlbW92ZSgpXG4gICAgICAgIHNlY29uZFNlY3Rpb24ucHJlcGVuZChub0RhdGVUZXh0KVxuICAgICAgfSlcbiAgICAgIHNlY29uZFNlY3Rpb24ucHJlcGVuZChjYWxlbmRhcklucHV0KVxuICAgIH0pXG5cbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgbmV3VGFzay5yZW1vdmUoKVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBjbG9zZUZvcm1PcGVuQnV0dG9uID0gKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGVcbiAgICBpZiAoZS50eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBuZXdUYXNrID0gdGFzay5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgIGF0dGFjaExpc3RlbmVyc1RvTmV3VGFzayhuZXdUYXNrKVxuICAgICAgbWFpbi5maXJzdEVsZW1lbnRDaGlsZC5pbnNlcnRCZWZvcmUobmV3VGFzaywgbWFpbi5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcpXG4gICAgICB0YXJnZXQucmVzZXQoKVxuICAgIH1cbiAgICB0YXJnZXQucmVtb3ZlKClcbiAgICBtYWluLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZChhZGRCdXR0b24pXG4gIH1cblxuICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNsb3NlRm9ybU9wZW5CdXR0b24pXG4gIG1haW4uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCBjbG9zZUZvcm1PcGVuQnV0dG9uKVxuXG4gIHJldHVybiBtYWluXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW5cbiIsImltcG9ydCBwcm9qZWN0SWNvbiBmcm9tICcuL2ltYWdlcy9wcm9qZWN0LWljb24uc3ZnJ1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIHByb2plY3QuY2xhc3NOYW1lID0gJ3Byb2plY3QnXG5cbiAgY29uc3QgbGVmdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZWZ0U2VjdGlvbi5jbGFzc05hbWUgPSAncHJvamVjdF9fbGVmdC1zZWN0aW9uJ1xuICBjb25zdCBsZWZ0U2VjdGlvbkljb24gPSBuZXcgSW1hZ2UoKVxuICBsZWZ0U2VjdGlvbkljb24uY2xhc3NOYW1lID0gJ3Byb2plY3RfX2xlZnQtc2VjdGlvbi1pY29uJ1xuICBsZWZ0U2VjdGlvbkljb24uc3JjID0gcHJvamVjdEljb25cbiAgY29uc3QgbGVmdFNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgbGVmdFNlY3Rpb25UaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdF9fbGVmdC1zZWN0aW9uLXRpdGxlJ1xuICBsZWZ0U2VjdGlvbi5hcHBlbmQobGVmdFNlY3Rpb25JY29uLCBsZWZ0U2VjdGlvblRpdGxlKVxuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAncHJvamVjdF9fZGVsZXRlJ1xuXG4gIHByb2plY3QuYXBwZW5kKGxlZnRTZWN0aW9uLCBkZWxldGVCdXR0b24pXG5cbiAgcmV0dXJuIHByb2plY3Rcbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdFxuIiwiLy8gU0VDVElPTlNcbmltcG9ydCB0b2RvU2VjdGlvbiBmcm9tICcuL3NpZGViYXJUb2RvU2VjdGlvbidcbmltcG9ydCBwcm9qZWN0U2VjdGlvbiBmcm9tICcuL3NpZGViYXJQcm9qZWN0U2VjdGlvbidcblxuY29uc3QgY3JlYXRlU2lkZWJhciA9ICgoKSA9PiB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpXG4gIHNpZGViYXIuY2xhc3NOYW1lID0gJ3NpZGViYXInXG5cbiAgc2lkZWJhci5hcHBlbmQodG9kb1NlY3Rpb24sIHByb2plY3RTZWN0aW9uKVxuXG4gIHJldHVybiBzaWRlYmFyXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNpZGViYXJcbiIsImltcG9ydCBBZGRQcm9qZWN0SWNvbiBmcm9tICcuL2ltYWdlcy9hZGQtcHJvamVjdC5zdmcnXG5cbmNvbnN0IGNyZWF0ZUFkZEJ1dHRvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTmFtZSA9ICdzaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24nXG5cbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbkljb24gPSBuZXcgSW1hZ2UoKVxuICBhZGRQcm9qZWN0QnV0dG9uSWNvbi5jbGFzc05hbWUgPSAnc2lkZWJhcl9fcHJvamVjdC1jb250YWluZXItYWRkJ1xuICBhZGRQcm9qZWN0QnV0dG9uSWNvbi5zcmMgPSBBZGRQcm9qZWN0SWNvblxuXG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgYWRkUHJvamVjdEJ1dHRvblRpdGxlLmNsYXNzTmFtZSA9ICdzaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci10aXRsZSdcblxuICBhZGRQcm9qZWN0QnV0dG9uLmFwcGVuZChhZGRQcm9qZWN0QnV0dG9uSWNvbiwgYWRkUHJvamVjdEJ1dHRvblRpdGxlKVxuXG4gIHJldHVybiBhZGRQcm9qZWN0QnV0dG9uXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkZEJ1dHRvblxuIiwiY29uc3QgY3JlYXRlQWRkRm9ybSA9ICgoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgZm9ybS5jbGFzc05hbWUgPSAnYWRkLWZvcm0nXG4gIGZvcm0uaWQgPSAnYWRkLWZvcm0nXG5cbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBwcm9qZWN0SW5wdXQuY2xhc3NOYW1lID0gJ2FkZC1mb3JtX19pbnB1dCdcbiAgcHJvamVjdElucHV0LmlkID0gJ2FkZC1mb3JtX19pbnB1dCdcbiAgcHJvamVjdElucHV0Lm5hbWUgPSAnYWRkLWZvcm1fX2lucHV0J1xuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpXG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsIDEpXG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgc3VibWl0QnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtZm9ybV9fc3VibWl0J1xuICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnXG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdhZGQnXG4gIHN1Ym1pdEJ1dHRvbi5pZCA9ICdzaWRlYmFyLXN1Ym1pdCdcblxuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIHJlc2V0QnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtZm9ybV9fcmVzZXQnXG4gIHJlc2V0QnV0dG9uLnR5cGUgPSAncmVzZXQnXG4gIHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gJ2NhbmNlbCdcbiAgcmVzZXRCdXR0b24uaWQgPSAnc2lkZWJhci1yZXNldCdcblxuICBmb3JtLmFwcGVuZChwcm9qZWN0SW5wdXQsIHN1Ym1pdEJ1dHRvbiwgcmVzZXRCdXR0b24pXG5cbiAgcmV0dXJuIGZvcm1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRkRm9ybVxuIiwiLy8gIE1PVkUgRVZFUlkgRlVDS0lORyBFVkVOVCBMSVNURU5FUiBUTyBNQUlOXG5pbXBvcnQgbWFpbiBmcm9tICcuL21haW4nXG5cbmltcG9ydCBpbmJveFNlY3Rpb24gZnJvbSAnLi9pbmJveFNlY3Rpb24nXG5pbXBvcnQgdG9kYXlTZWN0aW9uIGZyb20gJy4vdG9kYXlTZWN0aW9uJ1xuaW1wb3J0IHRoaXNXZWVrU2VjdGlvbiBmcm9tICcuL3RoaXNXZWVrU2VjdGlvbidcblxuY29uc3QgY3JlYXRlZFBhZ2VzID0ge31cbmNvbnN0IGdlbmVyYXRlZFNlY3Rpb24gPSBpbmJveFNlY3Rpb24uY2xvbmVOb2RlKCcuaW5ib3gtc2VjdGlvbl9fdGl0bGUnLCAnLmluYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24nKVxuXG5jb25zdCBjaGFuZ2VNYWluU3RhdGUgPSAoc2lkZWJhckJ1dHRvbikgPT4ge1xuICBpZiAoc2lkZWJhckJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXJfX3RvZG8tZGl2X2FjdGl2ZScpKSByZXR1cm5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3RvZG8tZGl2X2FjdGl2ZScpLmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXJfX3RvZG8tZGl2X2FjdGl2ZScpXG4gIHNpZGViYXJCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2lkZWJhcl9fdG9kby1kaXZfYWN0aXZlJylcblxuICBtYWluLmlubmVySFRNTCA9ICcnXG5cbiAgY29uc3QgaWRlbnRpZmllciA9IHNpZGViYXJCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgfHwgc2lkZWJhckJ1dHRvbi5pZFxuICBjb25zdCBrZXkgPSBzaWRlYmFyQnV0dG9uLmlubmVySFRNTFxuXG4gIGlmIChpZGVudGlmaWVyID09PSAnSU5CT1gnKSB7XG4gICAgbWFpbi5hcHBlbmQoaW5ib3hTZWN0aW9uKVxuICB9IGVsc2UgaWYgKGlkZW50aWZpZXIgPT09ICdUT0RBWScpIHtcbiAgICBtYWluLmFwcGVuZCh0b2RheVNlY3Rpb24pXG4gIH0gZWxzZSBpZiAoaWRlbnRpZmllciA9PT0gJ1RISVMtV0VFSycpIHtcbiAgICBtYWluLmFwcGVuZCh0aGlzV2Vla1NlY3Rpb24pXG4gIH0gZWxzZSBpZiAoIU9iamVjdC5rZXlzKGNyZWF0ZWRQYWdlcykuaW5jbHVkZXMoa2V5KSkge1xuICAgIGdlbmVyYXRlZFNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmluYm94LXNlY3Rpb25fX3RpdGxlJykudGV4dENvbnRlbnQgPSBpZGVudGlmaWVyXG4gICAgY3JlYXRlZFBhZ2VzW2tleV0gPSBnZW5lcmF0ZWRTZWN0aW9uLmNsb25lTm9kZSh0cnVlKVxuICAgIG1haW4uYXBwZW5kKGNyZWF0ZWRQYWdlc1trZXldKVxuICB9IGVsc2Uge1xuICAgIG1haW4uYXBwZW5kKGNyZWF0ZWRQYWdlc1trZXldKVxuICB9XG4gIGNvbnNvbGUubG9nKGNyZWF0ZWRQYWdlcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlTWFpblN0YXRlXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IGFkZEJ1dHRvbiBmcm9tICcuL3NpZGViYXJBZGRCdXR0b24nXG5pbXBvcnQgYWRkRm9ybSBmcm9tICcuL3NpZGViYXJBZGRGb3JtJ1xuaW1wb3J0IHByb2plY3QgZnJvbSAnLi9wcm9qZWN0J1xuXG5pbXBvcnQgY2hhbmdlTWFpblN0YXRlIGZyb20gJy4vc2lkZWJhckNoYW5nZU1haW4nXG5cbmNvbnN0IGNyZWF0ZVByb2plY3RTZWN0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgcHJvamVjdFNlY3Rpb24uY2xhc3NOYW1lID0gJ3NpZGViYXJfX3Byb2plY3Qtc2VjdGlvbidcblxuICBjb25zdCBwcm9qZWN0U2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICBwcm9qZWN0U2VjdGlvblRpdGxlLmNsYXNzTmFtZSA9ICdzaWRlYmFyX19wcm9qZWN0LXNlY3Rpb24tdGl0bGUnXG4gIHByb2plY3RTZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAncHJvamVjdHMnXG5cbiAgY29uc3QgcHJvamVjdFNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBwcm9qZWN0U2VjdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnc2lkZWJhcl9fcHJvamVjdC1jb250YWluZXInXG5cbiAgYWRkQnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci10aXRsZScpLnRleHRDb250ZW50ID0gJ2FkZCBwcm9qZWN0J1xuXG4gIHByb2plY3RTZWN0aW9uQ29udGFpbmVyLmFwcGVuZChhZGRCdXR0b24pXG5cbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZEJ1dHRvbi5yZW1vdmUoKVxuICAgIHByb2plY3RTZWN0aW9uQ29udGFpbmVyLmFwcGVuZChhZGRGb3JtKVxuICB9KVxuXG4gIGNvbnN0IGF0dGFjaExpc3RlbmVyc1RvTmV3UHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiB7XG4gICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNoYW5nZU1haW5TdGF0ZShuZXdQcm9qZWN0KSlcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG5ld1Byb2plY3QucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2RlbGV0ZScpXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gbmV3UHJvamVjdC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fbGVmdC1zZWN0aW9uLXRpdGxlJylcblxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICBuZXdQcm9qZWN0LnJlbW92ZSgpXG4gICAgfSlcblxuICAgIGNvbnN0IG5ld01haW5TZWN0aW9uVGl0bGUgPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybV9faW5wdXQnKS52YWx1ZVxuXG4gICAgbmV3UHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBuZXdNYWluU2VjdGlvblRpdGxlLnRvVXBwZXJDYXNlKCkpXG5cbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBuZXdNYWluU2VjdGlvblRpdGxlXG4gIH1cblxuICBjb25zdCBjbG9zZUZvcm1PcGVuQnV0dG9uID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZVxuICAgIGlmIChlLnR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0LmNsb25lTm9kZSh0cnVlKVxuICAgICAgYXR0YWNoTGlzdGVuZXJzVG9OZXdQcm9qZWN0KG5ld1Byb2plY3QpXG4gICAgICBwcm9qZWN0U2VjdGlvbkNvbnRhaW5lci5pbnNlcnRCZWZvcmUobmV3UHJvamVjdCwgcHJvamVjdFNlY3Rpb25Db250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpXG4gICAgICB0YXJnZXQucmVzZXQoKVxuICAgIH1cbiAgICB0YXJnZXQucmVtb3ZlKClcbiAgICBwcm9qZWN0U2VjdGlvbkNvbnRhaW5lci5hcHBlbmQoYWRkQnV0dG9uKVxuICB9XG5cbiAgYWRkRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBjbG9zZUZvcm1PcGVuQnV0dG9uKVxuICBhZGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgY2xvc2VGb3JtT3BlbkJ1dHRvbilcblxuICBwcm9qZWN0U2VjdGlvbi5hcHBlbmQocHJvamVjdFNlY3Rpb25UaXRsZSwgcHJvamVjdFNlY3Rpb25Db250YWluZXIpXG5cbiAgcmV0dXJuIHByb2plY3RTZWN0aW9uXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3RTZWN0aW9uXG4iLCJpbXBvcnQgSW5ib3hJY29uIGZyb20gJy4vaW1hZ2VzL2luYm94LnN2ZydcbmltcG9ydCBDYWxlbmRhckljb24gZnJvbSAnLi9pbWFnZXMvY2FsZW5kYXIuc3ZnJ1xuaW1wb3J0IFdlZWtseUljb24gZnJvbSAnLi9pbWFnZXMvd2Vlay1jYWxlbmRhci5zdmcnXG5cbi8vIGNsaWNrIGV2ZW50IGhhbmRsZXJcbmltcG9ydCBjaGFuZ2VNYWluU3RhdGUgZnJvbSAnLi9zaWRlYmFyQ2hhbmdlTWFpbidcblxuY29uc3QgY3JlYXRlVG9kb1NlY3Rpb24gPSAoKCkgPT4ge1xuICBjb25zdCB0b2RvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICB0b2RvU2VjdGlvbi5jbGFzc05hbWUgPSAnc2lkZWJhcl9fdG9kby1zZWN0aW9uJ1xuXG4gIGNvbnN0IHRvZG9TZWN0aW9uQ29udGVudCA9IFtcbiAgICB7XG4gICAgICBpbWFnZTogSW5ib3hJY29uLFxuICAgICAgdGl0bGU6ICdpbmJveCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZTogQ2FsZW5kYXJJY29uLFxuICAgICAgdGl0bGU6ICd0b2RheScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpbWFnZTogV2Vla2x5SWNvbixcbiAgICAgIHRpdGxlOiAndGhpcyB3ZWVrJyxcbiAgICB9LFxuICBdXG5cbiAgdG9kb1NlY3Rpb25Db250ZW50LmZvckVhY2goKGNvbnRlbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgY29udGVudERpdi5jbGFzc05hbWUgPSAnc2lkZWJhcl9fdG9kby1kaXYnXG4gICAgY29udGVudERpdi5pZCA9IGNvbnRlbnQudGl0bGUucmVwbGFjZSgvXFxXKy9nLCAnLScpLnRvVXBwZXJDYXNlKClcblxuICAgIGlmIChpbmRleCA9PT0gMCkgY29udGVudERpdi5jbGFzc05hbWUgPSAnc2lkZWJhcl9fdG9kby1kaXYgc2lkZWJhcl9fdG9kby1kaXZfYWN0aXZlJ1xuXG4gICAgY29uc3QgY29udGVudERpdkltYWdlID0gbmV3IEltYWdlKClcbiAgICBjb250ZW50RGl2SW1hZ2UuY2xhc3NOYW1lID0gJ3NpZGViYXJfX3RvZG8tZGl2LWltYWdlJ1xuICAgIGNvbnRlbnREaXZJbWFnZS5zcmMgPSBjb250ZW50LmltYWdlXG5cbiAgICBjb25zdCBjb250ZW50RGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgY29udGVudERpdlRpdGxlLmNsYXNzTmFtZSA9ICdzaWRlYmFyX190b2RvLWRpdi10aXRsZSdcbiAgICBjb250ZW50RGl2VGl0bGUudGV4dENvbnRlbnQgPSBjb250ZW50LnRpdGxlXG5cbiAgICBjb250ZW50RGl2LmFwcGVuZChjb250ZW50RGl2SW1hZ2UsIGNvbnRlbnREaXZUaXRsZSlcblxuICAgIGNvbnRlbnREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjaGFuZ2VNYWluU3RhdGUoY29udGVudERpdikpXG5cbiAgICB0b2RvU2VjdGlvbi5hcHBlbmQoY29udGVudERpdilcbiAgfSlcblxuICByZXR1cm4gdG9kb1NlY3Rpb25cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kb1NlY3Rpb25cbiIsImNvbnN0IGNyZWF0ZVRhc2sgPSAoKCkgPT4ge1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGFzay5jbGFzc05hbWUgPSAndGFzaydcblxuICBjb25zdCBmaXJzdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBmaXJzdFNlY3Rpb24uY2xhc3NOYW1lID0gJ3Rhc2tfX2ZpcnN0LXNlY3Rpb24nXG4gIGNvbnN0IGNoZWNrQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY2hlY2tDaXJjbGUuY2xhc3NOYW1lID0gJ3Rhc2tfX2NoZWNrJ1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpXG4gIHRhc2tUaXRsZS5jbGFzc05hbWUgPSAndGFza19fdGl0bGUnXG4gIGZpcnN0U2VjdGlvbi5hcHBlbmQoY2hlY2tDaXJjbGUsIHRhc2tUaXRsZSlcblxuICBjb25zdCBzZWNvbmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc2Vjb25kU2VjdGlvbi5jbGFzc05hbWUgPSAndGFza19fc2Vjb25kLXNlY3Rpb24nXG4gIGNvbnN0IG5vRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgbm9EYXRlVGV4dC5jbGFzc05hbWUgPSAndGFza19fbm8tZGF0ZSdcbiAgbm9EYXRlVGV4dC50ZXh0Q29udGVudCA9ICdObyBEYXRlJ1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ3Rhc2tfX2RlbGV0ZSdcbiAgc2Vjb25kU2VjdGlvbi5hcHBlbmQobm9EYXRlVGV4dCwgZGVsZXRlQnV0dG9uKVxuXG4gIHRhc2suYXBwZW5kKGZpcnN0U2VjdGlvbiwgc2Vjb25kU2VjdGlvbilcblxuICByZXR1cm4gdGFza1xufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrXG4iLCJjb25zdCBjcmVhdGVUaGlzV2Vla1NlY3Rpb24gPSAoKCkgPT4ge1xuICBjb25zdCB0aGlzV2Vla1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgdGhpc1dlZWtTZWN0aW9uLmNsYXNzTmFtZSA9ICd0aGlzLXdlZWstc2VjdGlvbidcblxuICBjb25zdCB0aGlzV2Vla1NlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgdGhpc1dlZWtTZWN0aW9uVGl0bGUuY2xhc3NOYW1lID0gJ3RoaXMtd2Vlay1zZWN0aW9uX190aXRsZSdcbiAgdGhpc1dlZWtTZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAndGhpcyB3ZWVrJ1xuXG4gIHRoaXNXZWVrU2VjdGlvbi5hcHBlbmQodGhpc1dlZWtTZWN0aW9uVGl0bGUpXG5cbiAgcmV0dXJuIHRoaXNXZWVrU2VjdGlvblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUaGlzV2Vla1NlY3Rpb25cbiIsImNvbnN0IGNyZWF0ZVRvZGF5U2VjdGlvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IHRvZGF5U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICB0b2RheVNlY3Rpb24uY2xhc3NOYW1lID0gJ3RvZGF5LXNlY3Rpb24nXG5cbiAgY29uc3QgdG9kYXlTZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIHRvZGF5U2VjdGlvblRpdGxlLmNsYXNzTmFtZSA9ICd0b2RheS1zZWN0aW9uX190aXRsZSdcbiAgdG9kYXlTZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAndG9kYXknXG5cbiAgdG9kYXlTZWN0aW9uLmFwcGVuZCh0b2RheVNlY3Rpb25UaXRsZSlcblxuICByZXR1cm4gdG9kYXlTZWN0aW9uXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvZGF5U2VjdGlvblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gU1RZTEVTXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LmNzcydcblxuLy8gQ09SRSBQQVJUU1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCBzaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbidcbmltcG9ydCBmb290ZXIgZnJvbSAnLi9mb290ZXInXG5cbi8vIGltcG9ydCBJY29uIGZyb20gJy4vaW1hZ2VzL2ljb24uc3ZnXG4vLyBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXG4vLyBpbWFnZS5zcmMgPSBJY29uXG5cbmNvbnN0IGNyZWF0ZUFwcCA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250ZW50LmNsYXNzTmFtZSA9ICdjb250ZW50J1xuXG4gIGNvbnRlbnQuYXBwZW5kKGhlYWRlcilcbiAgY29udGVudC5hcHBlbmQoc2lkZWJhcilcbiAgY29udGVudC5hcHBlbmQobWFpbilcbiAgY29udGVudC5hcHBlbmQoZm9vdGVyKVxuXG4gIHJldHVybiBjb250ZW50XG59KSgpXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kKGNyZWF0ZUFwcClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==