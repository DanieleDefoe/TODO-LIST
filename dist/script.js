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
___CSS_LOADER_EXPORT___.push([module.id, "/* NORMALIZING START */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 62.5%;\n  --main-text-color: #fff;\n  --header-footer-background: #333;\n  --header-height: clamp(12rem, 15vh, 25rem);\n  --sidebar-width: clamp(250px, 20vw, 400px);\n  --footer-height: clamp(50px, 5vh, 100px);\n  --sidebar-background: #ddd;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n/* NORMALIZING END */\n\n\n\n/* CONTENT START */\n.content {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-areas:\n  \"header header header\"\n  \"sidebar main main\"\n  \"footer footer footer\";\n  grid-template-rows: var(--header-height) 1fr var(--footer-height);\n  grid-template-columns: var(--sidebar-width) 1fr;\n}\n/* CONTENT END */\n\n\n\n/* HEADER START */\n.header {\n  width: 100%;\n  height: var(--header-height);\n  background: var(--header-footer-background);\n  padding: 2rem 4rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 3rem;\n  grid-area: header;\n}\n\n.header__icon {\n  height: 100%;\n  object-fit: contain;\n}\n\n.header__title {\n  color: var(--main-text-color);\n  text-transform: uppercase;\n  font-size: 4rem;\n  letter-spacing: 1px;\n}\n/* HEADER END */\n\n\n\n/* SIDEBAR START */\n.sidebar {\n  grid-area: sidebar;\n  background: var(--sidebar-background);\n  width: var(--sidebar-width);\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n  overflow-y: auto;\n}\n\n.sidebar__todo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.sidebar__todo-div {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  padding: 1rem 0 1rem 2rem;\n  transition: all .2s linear;\n  border-radius: 1rem;\n  border: none;\n  background: none;\n}\n\n.sidebar__todo-div-image {\n  height: 2rem;\n  object-fit: contain;\n}\n\n.sidebar__todo-div-title {\n  font-size: 1.7rem;\n  text-transform: uppercase;\n  color: var(--header-footer-background);\n  font-weight: normal;\n}\n\n.sidebar__project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.sidebar__project-section-title {\n  text-transform: uppercase;\n  font-size: 2.5rem;\n  color: var(--header-footer-background);\n}\n\n.sidebar__project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.sidebar__project-container-button, .inbox__project-container-button {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n  text-transform: uppercase;\n  color: var(--header-footer-background);\n  padding: 1rem 2rem;\n  background: none;\n  border: none;\n  transition: all .3s linear;\n  border-radius: 1rem;\n  width: 100%;\n}\n\n.sidebar__project-container-add, .inbox__project-container-add {\n  height: 2rem;\n}\n/* SIDEBAR END */\n\n\n\n/* MAIN START */\n.main {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  padding: 0 10rem;\n  overflow-y: auto;\n}\n\n.inbox-section, .today-section, .this-week-section {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 3rem 0;\n  gap: 3rem;\n  max-width: 1024px;\n}\n\n.inbox-section__title, .today-section__title, .this-week-section__title {\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n  gap: 2rem;\n}\n/* MAIN END */\n\n\n\n/* FOOTER START */\n.footer {\n  width: 100%;\n  height: var(--footer-height);\n  background: var(--header-footer-background);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  grid-area: footer;\n  padding: 1rem;\n}\n\n.footer__copyright {\n  color: var(--main-text-color);\n  font-size: 2rem;\n  text-align: center;\n}\n\n.footer__icon {\n  transition: all .3s linear;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center / contain;\n  display: block;\n  height: 100%;\n  width: 3rem;\n}\n/* FOOTER END */\n\n\n\n/* ADD FORM START */\n.add-form {\n  display: grid;\n  grid-template-areas:\n  \"input input\"\n  \"submit reset\";\n  gap: 2rem;\n  width: 100%;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.add-form__input {\n  grid-area: input;\n  border-radius: .5rem;\n  padding: 1rem;\n  font-size: 2rem;\n  width: 100%;\n  border: none;\n  outline: 1px solid var(--header-footer-background);\n}\n\n.add-form__input:invalid {\n  outline: 1px solid red;\n}\n\n.add-form__input:valid {\n  outline: 1px solid green;\n}\n\n.add-form__submit, .add-form__reset {\n  text-transform: uppercase;\n  font-size: 1.5rem;\n  padding: 1rem 2rem;\n  border-radius: .5rem;\n  border: 1px solid var(--header-footer-background);\n  transition: all .2s linear;\n}\n\n.add-form__submit {\n  grid-area: submit;\n  background: lightgreen;\n}\n\n.add-form__reset {\n  grid-area: reset;\n  background: lightcoral;\n}\n/* ADD FORM END */\n\n\n\n/* TASK START */\n.task {\n  width: 100%;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 1rem;\n  transition: all .2s linear;\n}\n\n.task__first-section, .task__second-section {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.task__check {\n  width: 2.5rem;\n  height: 2.5rem;\n  background: transparent;\n  border: 2px solid var(--header-footer-background);\n  border-radius: 50%;\n}\n\n.task__title {\n  font-size: 2rem;\n  font-weight: 400;\n  max-width: 300px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.task__title_done {\n  text-decoration: line-through;\n}\n\n.task__no-date {\n  font-size: 2rem;\n}\n\n.task__date {\n  font-size: 1.5rem;\n  border-radius: .5rem;\n  border: 1px solid var(--header-footer-background);\n  padding: .5rem;\n}\n\n.task__delete, .project__delete {\n  width: 3rem;\n  height: 3rem;\n  border: none;\n  visibility: hidden;\n  opacity: 0;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center / contain;\n  transition: all .2s linear;\n}\n/* TASK END */\n\n\n\n/* PROJECT START */\n.project {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  border-radius: 1rem;\n  border: none;\n  padding: 1rem 2rem;\n  transition: all .2s linear;\n  background: none;\n}\n\n.project__left-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  text-transform: uppercase;\n}\n\n.project__left-section-icon {\n  width: 3rem;\n  height: 3rem;\n}\n\n.project__left-section-title {\n  font-weight: 400;\n  max-width: 90px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.project__delete {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n/* PROJECT END */\n\n\n\n/* ACTIVE STATES START*/\n.sidebar__todo-div_active {\n  background: var(--main-text-color);\n}\n\n.sidebar__todo-div_active .sidebar__todo-div-title, .sidebar__todo-div_active .project__left-section-title {\n  font-weight: bold;\n}\n\n.task__check_active {\n  background: var(--header-footer-background);\n}\n/* ACTIVE STATES END */\n\n\n\n/* HOVERS START */\n@media (hover: hover) {\n  .sidebar__todo-div:hover, .sidebar__project-container-button:hover {\n    background: var(--main-text-color);\n    cursor: pointer;\n  }\n\n  .add-form__submit:hover {\n    cursor: pointer;\n    background: green;\n    color: var(--main-text-color);\n  }\n\n  .add-form__reset:hover {\n    cursor: pointer;\n    background: red;\n    color: var(--main-text-color);\n  }\n\n  .inbox__project-container-button:hover {\n    cursor: pointer;\n    background: var(--sidebar-background);\n  }\n\n  .task:hover {\n    background: var(--sidebar-background);\n  }\n\n  .project:hover {\n    cursor: pointer;\n    background: var(--main-text-color);\n  }\n\n  .task:hover .task__delete, .project:hover .project__delete {\n    visibility: unset;\n    opacity: unset;\n  }\n\n  .task__delete:hover , .task__no-date:hover, .task__check:hover, .task__date:hover, .project__delete:hover {\n    cursor: pointer;\n  }\n}\n/* HOVERS END */\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["/* NORMALIZING START */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 62.5%;\n  --main-text-color: #fff;\n  --header-footer-background: #333;\n  --header-height: clamp(12rem, 15vh, 25rem);\n  --sidebar-width: clamp(250px, 20vw, 400px);\n  --footer-height: clamp(50px, 5vh, 100px);\n  --sidebar-background: #ddd;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n/* NORMALIZING END */\n\n\n\n/* CONTENT START */\n.content {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-areas:\n  \"header header header\"\n  \"sidebar main main\"\n  \"footer footer footer\";\n  grid-template-rows: var(--header-height) 1fr var(--footer-height);\n  grid-template-columns: var(--sidebar-width) 1fr;\n}\n/* CONTENT END */\n\n\n\n/* HEADER START */\n.header {\n  width: 100%;\n  height: var(--header-height);\n  background: var(--header-footer-background);\n  padding: 2rem 4rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 3rem;\n  grid-area: header;\n}\n\n.header__icon {\n  height: 100%;\n  object-fit: contain;\n}\n\n.header__title {\n  color: var(--main-text-color);\n  text-transform: uppercase;\n  font-size: 4rem;\n  letter-spacing: 1px;\n}\n/* HEADER END */\n\n\n\n/* SIDEBAR START */\n.sidebar {\n  grid-area: sidebar;\n  background: var(--sidebar-background);\n  width: var(--sidebar-width);\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n  overflow-y: auto;\n}\n\n.sidebar__todo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.sidebar__todo-div {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  padding: 1rem 0 1rem 2rem;\n  transition: all .2s linear;\n  border-radius: 1rem;\n  border: none;\n  background: none;\n}\n\n.sidebar__todo-div-image {\n  height: 2rem;\n  object-fit: contain;\n}\n\n.sidebar__todo-div-title {\n  font-size: 1.7rem;\n  text-transform: uppercase;\n  color: var(--header-footer-background);\n  font-weight: normal;\n}\n\n.sidebar__project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.sidebar__project-section-title {\n  text-transform: uppercase;\n  font-size: 2.5rem;\n  color: var(--header-footer-background);\n}\n\n.sidebar__project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.sidebar__project-container-button, .inbox__project-container-button {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n  text-transform: uppercase;\n  color: var(--header-footer-background);\n  padding: 1rem 2rem;\n  background: none;\n  border: none;\n  transition: all .3s linear;\n  border-radius: 1rem;\n  width: 100%;\n}\n\n.sidebar__project-container-add, .inbox__project-container-add {\n  height: 2rem;\n}\n/* SIDEBAR END */\n\n\n\n/* MAIN START */\n.main {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  padding: 0 10rem;\n  overflow-y: auto;\n}\n\n.inbox-section, .today-section, .this-week-section {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 3rem 0;\n  gap: 3rem;\n  max-width: 1024px;\n}\n\n.inbox-section__title, .today-section__title, .this-week-section__title {\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n  gap: 2rem;\n}\n/* MAIN END */\n\n\n\n/* FOOTER START */\n.footer {\n  width: 100%;\n  height: var(--footer-height);\n  background: var(--header-footer-background);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  grid-area: footer;\n  padding: 1rem;\n}\n\n.footer__copyright {\n  color: var(--main-text-color);\n  font-size: 2rem;\n  text-align: center;\n}\n\n.footer__icon {\n  transition: all .3s linear;\n  background: url(../images/github.svg) no-repeat center / contain;\n  display: block;\n  height: 100%;\n  width: 3rem;\n}\n/* FOOTER END */\n\n\n\n/* ADD FORM START */\n.add-form {\n  display: grid;\n  grid-template-areas:\n  \"input input\"\n  \"submit reset\";\n  gap: 2rem;\n  width: 100%;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.add-form__input {\n  grid-area: input;\n  border-radius: .5rem;\n  padding: 1rem;\n  font-size: 2rem;\n  width: 100%;\n  border: none;\n  outline: 1px solid var(--header-footer-background);\n}\n\n.add-form__input:invalid {\n  outline: 1px solid red;\n}\n\n.add-form__input:valid {\n  outline: 1px solid green;\n}\n\n.add-form__submit, .add-form__reset {\n  text-transform: uppercase;\n  font-size: 1.5rem;\n  padding: 1rem 2rem;\n  border-radius: .5rem;\n  border: 1px solid var(--header-footer-background);\n  transition: all .2s linear;\n}\n\n.add-form__submit {\n  grid-area: submit;\n  background: lightgreen;\n}\n\n.add-form__reset {\n  grid-area: reset;\n  background: lightcoral;\n}\n/* ADD FORM END */\n\n\n\n/* TASK START */\n.task {\n  width: 100%;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 1rem;\n  transition: all .2s linear;\n}\n\n.task__first-section, .task__second-section {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.task__check {\n  width: 2.5rem;\n  height: 2.5rem;\n  background: transparent;\n  border: 2px solid var(--header-footer-background);\n  border-radius: 50%;\n}\n\n.task__title {\n  font-size: 2rem;\n  font-weight: 400;\n  max-width: 300px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.task__title_done {\n  text-decoration: line-through;\n}\n\n.task__no-date {\n  font-size: 2rem;\n}\n\n.task__date {\n  font-size: 1.5rem;\n  border-radius: .5rem;\n  border: 1px solid var(--header-footer-background);\n  padding: .5rem;\n}\n\n.task__delete, .project__delete {\n  width: 3rem;\n  height: 3rem;\n  border: none;\n  visibility: hidden;\n  opacity: 0;\n  background: url(../images/exit.svg) no-repeat center / contain;\n  transition: all .2s linear;\n}\n/* TASK END */\n\n\n\n/* PROJECT START */\n.project {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  border-radius: 1rem;\n  border: none;\n  padding: 1rem 2rem;\n  transition: all .2s linear;\n  background: none;\n}\n\n.project__left-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  text-transform: uppercase;\n}\n\n.project__left-section-icon {\n  width: 3rem;\n  height: 3rem;\n}\n\n.project__left-section-title {\n  font-weight: 400;\n  max-width: 90px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.project__delete {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n/* PROJECT END */\n\n\n\n/* ACTIVE STATES START*/\n.sidebar__todo-div_active {\n  background: var(--main-text-color);\n}\n\n.sidebar__todo-div_active .sidebar__todo-div-title, .sidebar__todo-div_active .project__left-section-title {\n  font-weight: bold;\n}\n\n.task__check_active {\n  background: var(--header-footer-background);\n}\n/* ACTIVE STATES END */\n\n\n\n/* HOVERS START */\n@media (hover: hover) {\n  .sidebar__todo-div:hover, .sidebar__project-container-button:hover {\n    background: var(--main-text-color);\n    cursor: pointer;\n  }\n\n  .add-form__submit:hover {\n    cursor: pointer;\n    background: green;\n    color: var(--main-text-color);\n  }\n\n  .add-form__reset:hover {\n    cursor: pointer;\n    background: red;\n    color: var(--main-text-color);\n  }\n\n  .inbox__project-container-button:hover {\n    cursor: pointer;\n    background: var(--sidebar-background);\n  }\n\n  .task:hover {\n    background: var(--sidebar-background);\n  }\n\n  .project:hover {\n    cursor: pointer;\n    background: var(--main-text-color);\n  }\n\n  .task:hover .task__delete, .project:hover .project__delete {\n    visibility: unset;\n    opacity: unset;\n  }\n\n  .task__delete:hover , .task__no-date:hover, .task__check:hover, .task__date:hover, .project__delete:hover {\n    cursor: pointer;\n  }\n}\n/* HOVERS END */\n"],"sourceRoot":""}]);
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

/***/ "./src/findDateDelta.js":
/*!******************************!*\
  !*** ./src/findDateDelta.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const findDateDelta = (date1, date2) => {
  const msPerDay = 1000 * 60 * 60 * 24

  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate())

  return Math.floor((utc2 - utc1) / msPerDay)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findDateDelta);


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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "thisWeekTasks": () => (/* binding */ thisWeekTasks),
/* harmony export */   "todayTasks": () => (/* binding */ todayTasks)
/* harmony export */ });
/* harmony import */ var _inboxSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inboxSection */ "./src/inboxSection.js");
/* harmony import */ var _inboxAddForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inboxAddForm */ "./src/inboxAddForm.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _findDateDelta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./findDateDelta */ "./src/findDateDelta.js");
/* eslint-disable max-len */







const todayTasks = []
const thisWeekTasks = []

const createMain = (() => {
  const main = document.createElement('main')
  main.className = 'main'

  main.append(_inboxSection__WEBPACK_IMPORTED_MODULE_0__["default"])

  main.addEventListener('click', (e) => {
    e.stopPropagation()
    if (e.target) {
      if (e.target.className === 'inbox__project-container-button' || e.target.parentElement.className === 'inbox__project-container-button') {
        // e.currentTarget.querySelector('.inbox__project-container-button').remove()
        main.firstElementChild.insertBefore(_inboxAddForm__WEBPACK_IMPORTED_MODULE_1__["default"], document.querySelector('.inbox__project-container-button'))
      } else if (e.target.classList.contains('task__check')) {
        localStorage.removeItem(e.target.closest('.task').outerHTML)
        e.target.classList.toggle('task__check_active')
        e.target.nextElementSibling.classList.toggle('task__title_done')
        localStorage.setItem(e.target.closest('.task').outerHTML, e.target.closest('.task').outerHTML)
      } else if (e.target.className === 'task__no-date') {
        localStorage.removeItem(e.target.closest('.task').outerHTML)
        const calendarInput = document.createElement('input')
        calendarInput.type = 'date'
        calendarInput.className = 'task__date'
        e.target.closest('.task').querySelector('.task__second-section').prepend(calendarInput)
        calendarInput.addEventListener('input', () => {
          e.target.textContent = calendarInput.value.split('-').join('/')
          const currentDate = new Date()
          const plannedDate = new Date(calendarInput.value)

          const dateDelta = (0,_findDateDelta__WEBPACK_IMPORTED_MODULE_3__["default"])(currentDate, plannedDate)

          if (dateDelta >= 0 && dateDelta <= 1) {
            todayTasks.push(main.firstElementChild.firstElementChild.nextElementSibling)
          } else if (dateDelta <= 7 && dateDelta > 1) {
            thisWeekTasks.push(main.firstElementChild.firstElementChild.nextElementSibling)
          }

          calendarInput.closest('.task').querySelector('.task__second-section').prepend(e.target)
          calendarInput.remove()
          localStorage.setItem(e.target.closest('.task').outerHTML, e.target.closest('.task').outerHTML)
        })
        e.target.remove()
      } else if (e.target.className === 'task__delete') {
        localStorage.removeItem(e.target.closest('.task').outerHTML)
        todayTasks.splice(todayTasks.indexOf(e.target.closest('.task')), 1)
        thisWeekTasks.splice(thisWeekTasks.indexOf(e.target.closest('.task')), 1)
        e.target.closest('.task').remove()
      }
    }
    localStorage.setItem(document.querySelector('.inbox-section__title').textContent, document.querySelector('.inbox-section').outerHTML)
  })

  main.addEventListener('keypress', () => {
    localStorage.setItem(document.querySelector('.inbox-section__title').textContent, document.querySelector('.inbox-section').outerHTML)
  })

  const closeFormOpenButton = (e) => {
    e.stopPropagation()
    const { target } = e
    if (e.type === 'submit') {
      e.preventDefault()
      const newTask = _task__WEBPACK_IMPORTED_MODULE_2__["default"].cloneNode(true)
      newTask.querySelector('.task__title').textContent = main.querySelector('.add-form__input').value
      main.firstElementChild.insertBefore(newTask, main.firstElementChild.firstElementChild.nextElementSibling)
      localStorage.setItem(newTask.outerHTML, newTask.outerHTML)
      target.reset()
    }
    target.remove()
    // main.firstElementChild.append(addButton)
  }

  main.addEventListener('submit', closeFormOpenButton)
  main.addEventListener('reset', closeFormOpenButton)

  Object.keys(localStorage).forEach((key) => {
    if (key.includes('class="task')) {
      _inboxSection__WEBPACK_IMPORTED_MODULE_0__["default"].insertAdjacentHTML('afterbegin', key)
      _inboxSection__WEBPACK_IMPORTED_MODULE_0__["default"].insertBefore(_inboxSection__WEBPACK_IMPORTED_MODULE_0__["default"].firstElementChild, _inboxSection__WEBPACK_IMPORTED_MODULE_0__["default"].firstElementChild.nextElementSibling.nextElementSibling)
    }
  })

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

  const deleteButton = document.createElement('div')
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
/* harmony import */ var _findDateDelta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./findDateDelta */ "./src/findDateDelta.js");
/* eslint-disable eqeqeq */
/* eslint-disable import/no-duplicates */
//  MOVE EVERY FUCKING EVENT LISTENER TO MAIN








_inboxSection__WEBPACK_IMPORTED_MODULE_1__["default"].querySelectorAll('.task').forEach((task) => {
  if (_main__WEBPACK_IMPORTED_MODULE_0__.todayTasks.indexOf(task) === -1
  && new Date(task.querySelector('.task__no-date').textContent).getDate() == new Date().getDate()) {
    _main__WEBPACK_IMPORTED_MODULE_0__.todayTasks.push(task.cloneNode(true))
  } else if (_main__WEBPACK_IMPORTED_MODULE_0__.thisWeekTasks.indexOf(task) === -1
  && (0,_findDateDelta__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(task.querySelector('.task__no-date').textContent), new Date()) <= 7) {
    _main__WEBPACK_IMPORTED_MODULE_0__.thisWeekTasks.push(task.cloneNode(true))
  }
})

const generatedSection = _inboxSection__WEBPACK_IMPORTED_MODULE_1__["default"].cloneNode('.inbox-section__title', '.inbox__project-container-button')

const todaySection = _inboxSection__WEBPACK_IMPORTED_MODULE_1__["default"].cloneNode(true)
const thisWeekSection = _inboxSection__WEBPACK_IMPORTED_MODULE_1__["default"].cloneNode(true)
todaySection.querySelector('.inbox__project-container-button').remove()
thisWeekSection.querySelector('.inbox__project-container-button').remove()

const changeMainState = (sidebarButton) => {
  if (sidebarButton.classList.contains('sidebar__todo-div_active')) return
  if (document.querySelector('.sidebar__todo-div_active')) {
    document.querySelector('.sidebar__todo-div_active').classList.remove('sidebar__todo-div_active')
  }
  sidebarButton.classList.add('sidebar__todo-div_active')

  _main__WEBPACK_IMPORTED_MODULE_0__["default"].innerHTML = ''

  const identifier = sidebarButton.getAttribute('data-id') || sidebarButton.id.replace(/-+/g, ' ')

  if (identifier === 'TODAY') {
    todaySection.querySelectorAll('.task').forEach((task) => {
      if (_main__WEBPACK_IMPORTED_MODULE_0__.todayTasks.indexOf(task) === -1) task.remove()
    })
    _main__WEBPACK_IMPORTED_MODULE_0__.todayTasks.forEach((task) => {
      todaySection.append(task.cloneNode(true))
    })
  } else if (identifier === 'THIS WEEK') {
    thisWeekSection.querySelectorAll('.task').forEach((task) => {
      if (_main__WEBPACK_IMPORTED_MODULE_0__.todayTasks.indexOf(task) === -1) task.remove()
    })
    _main__WEBPACK_IMPORTED_MODULE_0__.thisWeekTasks.forEach((task) => {
      thisWeekSection.append(task.cloneNode(true))
    })
  }

  if (identifier === 'INBOX') {
    _main__WEBPACK_IMPORTED_MODULE_0__["default"].append(_inboxSection__WEBPACK_IMPORTED_MODULE_1__["default"])
  } else if (identifier === 'THIS WEEK') {
    thisWeekSection.firstElementChild.textContent = identifier
    _main__WEBPACK_IMPORTED_MODULE_0__["default"].append(thisWeekSection)
  } else if (identifier === 'TODAY') {
    todaySection.firstElementChild.textContent = identifier
    _main__WEBPACK_IMPORTED_MODULE_0__["default"].append(todaySection)
  } else if (!localStorage.getItem(identifier)) {
    const clone = generatedSection.cloneNode(true)
    clone.querySelectorAll('.task').forEach((task) => task.remove())
    clone.firstElementChild.textContent = identifier
    localStorage.setItem(identifier, clone.outerHTML)
    _main__WEBPACK_IMPORTED_MODULE_0__["default"].insertAdjacentHTML('afterbegin', localStorage.getItem(identifier))
  } else {
    _main__WEBPACK_IMPORTED_MODULE_0__["default"].insertAdjacentHTML('afterbegin', localStorage.getItem(identifier))
  }
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
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main */ "./src/main.js");
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

  _sidebarAddButton__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('click', (e) => {
    e.stopPropagation()
    _sidebarAddButton__WEBPACK_IMPORTED_MODULE_0__["default"].remove()
    projectSectionContainer.append(_sidebarAddForm__WEBPACK_IMPORTED_MODULE_1__["default"])
  })

  projectSectionContainer.addEventListener('click', (e) => {
    e.stopPropagation()
    if (e.target.className === 'project__delete') {
      localStorage.removeItem(e.target.parentElement.outerHTML)
      e.target.parentElement.remove()
      _main__WEBPACK_IMPORTED_MODULE_4__["default"].innerHTML = ''
    }
    if (e.target.classList.contains('project') || e.target.closest('.project')) {
      if (e.target.closest('.project')) {
        e.target.closest('.project').setAttribute('data-id', e.target.closest('.project').querySelector('.project__left-section-title').textContent.toUpperCase())
        ;(0,_sidebarChangeMain__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target.closest('.project'))
        return
      }
      e.target.setAttribute('data-id', e.target.querySelector('.project__left-section-title').textContent.toUpperCase())
      ;(0,_sidebarChangeMain__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target)
    }
  })

  const closeFormOpenButton = (e) => {
    const { target } = e
    if (e.type === 'submit') {
      e.preventDefault()
      const newProject = _project__WEBPACK_IMPORTED_MODULE_2__["default"].cloneNode(true)
      newProject.querySelector('.project__left-section-title').textContent = _sidebarAddForm__WEBPACK_IMPORTED_MODULE_1__["default"].querySelector('.add-form__input').value
      localStorage.setItem(newProject.outerHTML, newProject.outerHTML)
      projectSectionContainer.insertBefore(newProject, projectSectionContainer.firstElementChild)
      target.reset()
    }
    target.remove()
    projectSectionContainer.append(_sidebarAddButton__WEBPACK_IMPORTED_MODULE_0__["default"])
  }

  _sidebarAddForm__WEBPACK_IMPORTED_MODULE_1__["default"].addEventListener('submit', closeFormOpenButton)
  _sidebarAddForm__WEBPACK_IMPORTED_MODULE_1__["default"].addEventListener('reset', closeFormOpenButton)

  projectSection.append(projectSectionTitle, projectSectionContainer)

  Object.keys(localStorage).forEach((key) => {
    if (key.includes('class="project"')) {
      const newProject = localStorage.getItem(key)
      projectSectionContainer.insertAdjacentHTML('afterbegin', newProject)
    }
  })

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
/******/ 		__webpack_require__.p = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLGVBQWUsV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxhQUFhLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLGFBQWEsWUFBWSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxlQUFlLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFB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YTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDMkI7O0FBRTNCO0FBQzZCO0FBQ0U7QUFDTjtBQUNJOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQiwrQ0FBTTtBQUN2QixpQkFBaUIsZ0RBQU87QUFDeEIsaUJBQWlCLDZDQUFJO0FBQ3JCLGlCQUFpQiwrQ0FBTTs7QUFFdkI7QUFDQSxDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmluZERhdGVEZWx0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luYm94QWRkQnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmJveEFkZEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luYm94U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhckFkZEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhckFkZEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGViYXJDaGFuZ2VNYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyUHJvamVjdFNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGViYXJUb2RvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2dpdGh1Yi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZXhpdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogTk9STUFMSVpJTkcgU1RBUlQgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgLS1tYWluLXRleHQtY29sb3I6ICNmZmY7XFxuICAtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZDogIzMzMztcXG4gIC0taGVhZGVyLWhlaWdodDogY2xhbXAoMTJyZW0sIDE1dmgsIDI1cmVtKTtcXG4gIC0tc2lkZWJhci13aWR0aDogY2xhbXAoMjUwcHgsIDIwdncsIDQwMHB4KTtcXG4gIC0tZm9vdGVyLWhlaWdodDogY2xhbXAoNTBweCwgNXZoLCAxMDBweCk7XFxuICAtLXNpZGViYXItYmFja2dyb3VuZDogI2RkZDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcbi8qIE5PUk1BTElaSU5HIEVORCAqL1xcblxcblxcblxcbi8qIENPTlRFTlQgU1RBUlQgKi9cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gIFxcXCJzaWRlYmFyIG1haW4gbWFpblxcXCJcXG4gIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLWhlYWRlci1oZWlnaHQpIDFmciB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tc2lkZWJhci13aWR0aCkgMWZyO1xcbn1cXG4vKiBDT05URU5UIEVORCAqL1xcblxcblxcblxcbi8qIEhFQURFUiBTVEFSVCAqL1xcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbi5oZWFkZXJfX2ljb24ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuLyogSEVBREVSIEVORCAqL1xcblxcblxcblxcbi8qIFNJREVCQVIgU1RBUlQgKi9cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cmVtO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnNpZGViYXJfX3RvZG8tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLnNpZGViYXJfX3RvZG8tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwIDFyZW0gMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyX190b2RvLWRpdi1pbWFnZSB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uc2lkZWJhcl9fdG9kby1kaXYtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uc2lkZWJhcl9fcHJvamVjdC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9fcHJvamVjdC1zZWN0aW9uLXRpdGxlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uc2lkZWJhcl9fcHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24sIC5pbmJveF9fcHJvamVjdC1jb250YWluZXItYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2lkZWJhcl9fcHJvamVjdC1jb250YWluZXItYWRkLCAuaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLWFkZCB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcbi8qIFNJREVCQVIgRU5EICovXFxuXFxuXFxuXFxuLyogTUFJTiBTVEFSVCAqL1xcbi5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTByZW07XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uaW5ib3gtc2VjdGlvbiwgLnRvZGF5LXNlY3Rpb24sIC50aGlzLXdlZWstc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNyZW0gMDtcXG4gIGdhcDogM3JlbTtcXG4gIG1heC13aWR0aDogMTAyNHB4O1xcbn1cXG5cXG4uaW5ib3gtc2VjdGlvbl9fdGl0bGUsIC50b2RheS1zZWN0aW9uX190aXRsZSwgLnRoaXMtd2Vlay1zZWN0aW9uX190aXRsZSB7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogLjVweDtcXG4gIGdhcDogMnJlbTtcXG59XFxuLyogTUFJTiBFTkQgKi9cXG5cXG5cXG5cXG4vKiBGT09URVIgU1RBUlQgKi9cXG4uZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZm9vdGVyX19jb3B5cmlnaHQge1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXJfX2ljb24ge1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogM3JlbTtcXG59XFxuLyogRk9PVEVSIEVORCAqL1xcblxcblxcblxcbi8qIEFERCBGT1JNIFNUQVJUICovXFxuLmFkZC1mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgXFxcImlucHV0IGlucHV0XFxcIlxcbiAgXFxcInN1Ym1pdCByZXNldFxcXCI7XFxuICBnYXA6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcblxcbi5hZGQtZm9ybV9faW5wdXQge1xcbiAgZ3JpZC1hcmVhOiBpbnB1dDtcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5hZGQtZm9ybV9faW5wdXQ6aW52YWxpZCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uYWRkLWZvcm1fX2lucHV0OnZhbGlkIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmFkZC1mb3JtX19zdWJtaXQsIC5hZGQtZm9ybV9fcmVzZXQge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XFxufVxcblxcbi5hZGQtZm9ybV9fc3VibWl0IHtcXG4gIGdyaWQtYXJlYTogc3VibWl0O1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXG59XFxuXFxuLmFkZC1mb3JtX19yZXNldCB7XFxuICBncmlkLWFyZWE6IHJlc2V0O1xcbiAgYmFja2dyb3VuZDogbGlnaHRjb3JhbDtcXG59XFxuLyogQUREIEZPUk0gRU5EICovXFxuXFxuXFxuXFxuLyogVEFTSyBTVEFSVCAqL1xcbi50YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XFxufVxcblxcbi50YXNrX19maXJzdC1zZWN0aW9uLCAudGFza19fc2Vjb25kLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tfX2NoZWNrIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2tfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2tfX3RpdGxlX2RvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrX19uby1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnRhc2tfX2RhdGUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLnRhc2tfX2RlbGV0ZSwgLnByb2plY3RfX2RlbGV0ZSB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XFxufVxcbi8qIFRBU0sgRU5EICovXFxuXFxuXFxuXFxuLyogUFJPSkVDVCBTVEFSVCAqL1xcbi5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdF9fbGVmdC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ucHJvamVjdF9fbGVmdC1zZWN0aW9uLWljb24ge1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi5wcm9qZWN0X19sZWZ0LXNlY3Rpb24tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1heC13aWR0aDogOTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5wcm9qZWN0X19kZWxldGUge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbn1cXG4vKiBQUk9KRUNUIEVORCAqL1xcblxcblxcblxcbi8qIEFDVElWRSBTVEFURVMgU1RBUlQqL1xcbi5zaWRlYmFyX190b2RvLWRpdl9hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLnNpZGViYXJfX3RvZG8tZGl2X2FjdGl2ZSAuc2lkZWJhcl9fdG9kby1kaXYtdGl0bGUsIC5zaWRlYmFyX190b2RvLWRpdl9hY3RpdmUgLnByb2plY3RfX2xlZnQtc2VjdGlvbi10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhc2tfX2NoZWNrX2FjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbn1cXG4vKiBBQ1RJVkUgU1RBVEVTIEVORCAqL1xcblxcblxcblxcbi8qIEhPVkVSUyBTVEFSVCAqL1xcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAuc2lkZWJhcl9fdG9kby1kaXY6aG92ZXIsIC5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAuYWRkLWZvcm1fX3N1Ym1pdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgfVxcblxcbiAgLmFkZC1mb3JtX19yZXNldDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5pbmJveF9fcHJvamVjdC1jb250YWluZXItYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgfVxcblxcbiAgLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgfVxcblxcbiAgLnByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICB9XFxuXFxuICAudGFzazpob3ZlciAudGFza19fZGVsZXRlLCAucHJvamVjdDpob3ZlciAucHJvamVjdF9fZGVsZXRlIHtcXG4gICAgdmlzaWJpbGl0eTogdW5zZXQ7XFxuICAgIG9wYWNpdHk6IHVuc2V0O1xcbiAgfVxcblxcbiAgLnRhc2tfX2RlbGV0ZTpob3ZlciAsIC50YXNrX19uby1kYXRlOmhvdmVyLCAudGFza19fY2hlY2s6aG92ZXIsIC50YXNrX19kYXRlOmhvdmVyLCAucHJvamVjdF9fZGVsZXRlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG4vKiBIT1ZFUlMgRU5EICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsc0JBQXNCO0FBQ3RCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQywwQ0FBMEM7RUFDMUMsMENBQTBDO0VBQzFDLHdDQUF3QztFQUN4QywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxtSkFBbUo7QUFDcko7QUFDQSxvQkFBb0I7Ozs7QUFJcEIsa0JBQWtCO0FBQ2xCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2I7Ozt3QkFHc0I7RUFDdEIsaUVBQWlFO0VBQ2pFLCtDQUErQztBQUNqRDtBQUNBLGdCQUFnQjs7OztBQUloQixpQkFBaUI7QUFDakI7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQSxlQUFlOzs7O0FBSWYsa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQywyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIs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W1wiLyogTk9STUFMSVpJTkcgU1RBUlQgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgLS1tYWluLXRleHQtY29sb3I6ICNmZmY7XFxuICAtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZDogIzMzMztcXG4gIC0taGVhZGVyLWhlaWdodDogY2xhbXAoMTJyZW0sIDE1dmgsIDI1cmVtKTtcXG4gIC0tc2lkZWJhci13aWR0aDogY2xhbXAoMjUwcHgsIDIwdncsIDQwMHB4KTtcXG4gIC0tZm9vdGVyLWhlaWdodDogY2xhbXAoNTBweCwgNXZoLCAxMDBweCk7XFxuICAtLXNpZGViYXItYmFja2dyb3VuZDogI2RkZDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcbi8qIE5PUk1BTElaSU5HIEVORCAqL1xcblxcblxcblxcbi8qIENPTlRFTlQgU1RBUlQgKi9cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gIFxcXCJzaWRlYmFyIG1haW4gbWFpblxcXCJcXG4gIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLWhlYWRlci1oZWlnaHQpIDFmciB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tc2lkZWJhci13aWR0aCkgMWZyO1xcbn1cXG4vKiBDT05URU5UIEVORCAqL1xcblxcblxcblxcbi8qIEhFQURFUiBTVEFSVCAqL1xcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbi5oZWFkZXJfX2ljb24ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuLyogSEVBREVSIEVORCAqL1xcblxcblxcblxcbi8qIFNJREVCQVIgU1RBUlQgKi9cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cmVtO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnNpZGViYXJfX3RvZG8tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLnNpZGViYXJfX3RvZG8tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwIDFyZW0gMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyX190b2RvLWRpdi1pbWFnZSB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uc2lkZWJhcl9fdG9kby1kaXYtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uc2lkZWJhcl9fcHJvamVjdC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9fcHJvamVjdC1zZWN0aW9uLXRpdGxlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uc2lkZWJhcl9fcHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24sIC5pbmJveF9fcHJvamVjdC1jb250YWluZXItYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2lkZWJhcl9fcHJvamVjdC1jb250YWluZXItYWRkLCAuaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLWFkZCB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcbi8qIFNJREVCQVIgRU5EICovXFxuXFxuXFxuXFxuLyogTUFJTiBTVEFSVCAqL1xcbi5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTByZW07XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uaW5ib3gtc2VjdGlvbiwgLnRvZGF5LXNlY3Rpb24sIC50aGlzLXdlZWstc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNyZW0gMDtcXG4gIGdhcDogM3JlbTtcXG4gIG1heC13aWR0aDogMTAyNHB4O1xcbn1cXG5cXG4uaW5ib3gtc2VjdGlvbl9fdGl0bGUsIC50b2RheS1zZWN0aW9uX190aXRsZSwgLnRoaXMtd2Vlay1zZWN0aW9uX190aXRsZSB7XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBsZXR0ZXItc3BhY2luZzogLjVweDtcXG4gIGdhcDogMnJlbTtcXG59XFxuLyogTUFJTiBFTkQgKi9cXG5cXG5cXG5cXG4vKiBGT09URVIgU1RBUlQgKi9cXG4uZm9vdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZm9vdGVyX19jb3B5cmlnaHQge1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICBmb250LXNpemU6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXJfX2ljb24ge1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2dpdGh1Yi5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogM3JlbTtcXG59XFxuLyogRk9PVEVSIEVORCAqL1xcblxcblxcblxcbi8qIEFERCBGT1JNIFNUQVJUICovXFxuLmFkZC1mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgXFxcImlucHV0IGlucHV0XFxcIlxcbiAgXFxcInN1Ym1pdCByZXNldFxcXCI7XFxuICBnYXA6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxufVxcblxcbi5hZGQtZm9ybV9faW5wdXQge1xcbiAgZ3JpZC1hcmVhOiBpbnB1dDtcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5hZGQtZm9ybV9faW5wdXQ6aW52YWxpZCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uYWRkLWZvcm1fX2lucHV0OnZhbGlkIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmFkZC1mb3JtX19zdWJtaXQsIC5hZGQtZm9ybV9fcmVzZXQge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XFxufVxcblxcbi5hZGQtZm9ybV9fc3VibWl0IHtcXG4gIGdyaWQtYXJlYTogc3VibWl0O1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXG59XFxuXFxuLmFkZC1mb3JtX19yZXNldCB7XFxuICBncmlkLWFyZWE6IHJlc2V0O1xcbiAgYmFja2dyb3VuZDogbGlnaHRjb3JhbDtcXG59XFxuLyogQUREIEZPUk0gRU5EICovXFxuXFxuXFxuXFxuLyogVEFTSyBTVEFSVCAqL1xcbi50YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XFxufVxcblxcbi50YXNrX19maXJzdC1zZWN0aW9uLCAudGFza19fc2Vjb25kLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tfX2NoZWNrIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2tfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2tfX3RpdGxlX2RvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrX19uby1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnRhc2tfX2RhdGUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLnRhc2tfX2RlbGV0ZSwgLnByb2plY3RfX2RlbGV0ZSB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2V4aXQuc3ZnKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbn1cXG4vKiBUQVNLIEVORCAqL1xcblxcblxcblxcbi8qIFBST0pFQ1QgU1RBUlQgKi9cXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnByb2plY3RfX2xlZnQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLnByb2plY3RfX2xlZnQtc2VjdGlvbi1pY29uIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4ucHJvamVjdF9fbGVmdC1zZWN0aW9uLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXgtd2lkdGg6IDkwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ucHJvamVjdF9fZGVsZXRlIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG59XFxuLyogUFJPSkVDVCBFTkQgKi9cXG5cXG5cXG5cXG4vKiBBQ1RJVkUgU1RBVEVTIFNUQVJUKi9cXG4uc2lkZWJhcl9fdG9kby1kaXZfYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxufVxcblxcbi5zaWRlYmFyX190b2RvLWRpdl9hY3RpdmUgLnNpZGViYXJfX3RvZG8tZGl2LXRpdGxlLCAuc2lkZWJhcl9fdG9kby1kaXZfYWN0aXZlIC5wcm9qZWN0X19sZWZ0LXNlY3Rpb24tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50YXNrX19jaGVja19hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG59XFxuLyogQUNUSVZFIFNUQVRFUyBFTkQgKi9cXG5cXG5cXG5cXG4vKiBIT1ZFUlMgU1RBUlQgKi9cXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xcbiAgLnNpZGViYXJfX3RvZG8tZGl2OmhvdmVyLCAuc2lkZWJhcl9fcHJvamVjdC1jb250YWluZXItYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcblxcbiAgLmFkZC1mb3JtX19zdWJtaXQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5hZGQtZm9ybV9fcmVzZXQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICB9XFxuXFxuICAuaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gIH1cXG5cXG4gIC50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgfVxcblxcbiAgLnRhc2s6aG92ZXIgLnRhc2tfX2RlbGV0ZSwgLnByb2plY3Q6aG92ZXIgLnByb2plY3RfX2RlbGV0ZSB7XFxuICAgIHZpc2liaWxpdHk6IHVuc2V0O1xcbiAgICBvcGFjaXR5OiB1bnNldDtcXG4gIH1cXG5cXG4gIC50YXNrX19kZWxldGU6aG92ZXIgLCAudGFza19fbm8tZGF0ZTpob3ZlciwgLnRhc2tfX2NoZWNrOmhvdmVyLCAudGFza19fZGF0ZTpob3ZlciwgLnByb2plY3RfX2RlbGV0ZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuLyogSE9WRVJTIEVORCAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgZmluZERhdGVEZWx0YSA9IChkYXRlMSwgZGF0ZTIpID0+IHtcbiAgY29uc3QgbXNQZXJEYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0XG5cbiAgY29uc3QgdXRjMSA9IERhdGUuVVRDKGRhdGUxLmdldEZ1bGxZZWFyKCksIGRhdGUxLmdldE1vbnRoKCksIGRhdGUxLmdldERhdGUoKSlcbiAgY29uc3QgdXRjMiA9IERhdGUuVVRDKGRhdGUyLmdldEZ1bGxZZWFyKCksIGRhdGUyLmdldE1vbnRoKCksIGRhdGUyLmdldERhdGUoKSlcblxuICByZXR1cm4gTWF0aC5mbG9vcigodXRjMiAtIHV0YzEpIC8gbXNQZXJEYXkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmREYXRlRGVsdGFcbiIsImNvbnN0IGNyZWF0ZUZvb3RlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG5cbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEFidXphciBNYW1lZG92YFxuXG4gIGNvbnN0IGZvb3Rlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgZm9vdGVySWNvbi5jbGFzc05hbWUgPSAnZm9vdGVyX19pY29uJ1xuICBmb290ZXJJY29uLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0RhbmllbGVEZWZvZSdcbiAgZm9vdGVySWNvbi50YXJnZXQgPSAnX2JsYW5rJ1xuICBmb290ZXJJY29uLnJlbCA9ICdub3JlZmVycmVyIG5vb3BlbmVyIG5vZm9sbG93J1xuXG4gIGZvb3Rlci5jbGFzc05hbWUgPSAnZm9vdGVyJ1xuICBjb3B5cmlnaHQuY2xhc3NOYW1lID0gJ2Zvb3Rlcl9fY29weXJpZ2h0J1xuXG4gIGZvb3Rlci5hcHBlbmQoY29weXJpZ2h0KVxuICBmb290ZXIuYXBwZW5kKGZvb3Rlckljb24pXG5cbiAgcmV0dXJuIGZvb3RlclxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXJcbiIsImltcG9ydCBJY29uIGZyb20gJy4vaW1hZ2VzL2hlYWRlci1pY29uLnN2Zydcbi8vIElJRkVcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gIGhlYWRlci5jbGFzc05hbWUgPSAnaGVhZGVyJ1xuXG4gIGNvbnN0IGhlYWRlckljb24gPSBuZXcgSW1hZ2UoKVxuICBoZWFkZXJJY29uLmNsYXNzTmFtZSA9ICdoZWFkZXJfX2ljb24nXG4gIGhlYWRlckljb24uc3JjID0gSWNvblxuXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICBoZWFkZXJUaXRsZS5jbGFzc05hbWUgPSAnaGVhZGVyX190aXRsZSdcbiAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSAndG9kbyBsaXN0J1xuXG4gIGhlYWRlci5hcHBlbmQoaGVhZGVySWNvbilcbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJUaXRsZSlcblxuICByZXR1cm4gaGVhZGVyXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlclxuIiwiaW1wb3J0IEFkZFByb2plY3RJY29uIGZyb20gJy4vaW1hZ2VzL2FkZC1wcm9qZWN0LnN2ZydcblxuY29uc3QgY3JlYXRlQWRkQnV0dG9uID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGFkZFByb2plY3RCdXR0b24uY2xhc3NOYW1lID0gJ2luYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24nXG5cbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbkljb24gPSBuZXcgSW1hZ2UoKVxuICBhZGRQcm9qZWN0QnV0dG9uSWNvbi5jbGFzc05hbWUgPSAnaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLWFkZCdcbiAgYWRkUHJvamVjdEJ1dHRvbkljb24uc3JjID0gQWRkUHJvamVjdEljb25cblxuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIGFkZFByb2plY3RCdXR0b25UaXRsZS5jbGFzc05hbWUgPSAnaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLXRpdGxlJ1xuXG4gIGFkZFByb2plY3RCdXR0b24uYXBwZW5kKGFkZFByb2plY3RCdXR0b25JY29uLCBhZGRQcm9qZWN0QnV0dG9uVGl0bGUpXG5cbiAgcmV0dXJuIGFkZFByb2plY3RCdXR0b25cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRkQnV0dG9uXG4iLCJjb25zdCBjcmVhdGVBZGRGb3JtID0gKCgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICBmb3JtLmNsYXNzTmFtZSA9ICdhZGQtZm9ybSdcbiAgZm9ybS5pZCA9ICdpbmJveC1mb3JtJ1xuXG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgcHJvamVjdElucHV0LmNsYXNzTmFtZSA9ICdhZGQtZm9ybV9faW5wdXQnXG4gIHByb2plY3RJbnB1dC5pZCA9ICdpbmJveC1mb3JtX19pbnB1dCdcbiAgcHJvamVjdElucHV0Lm5hbWUgPSAnaW5ib3gtZm9ybV9faW5wdXQnXG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSlcbiAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgMSlcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBzdWJtaXRCdXR0b24uY2xhc3NOYW1lID0gJ2FkZC1mb3JtX19zdWJtaXQnXG4gIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCdcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ2FkZCdcbiAgc3VibWl0QnV0dG9uLmlkID0gJ2luYm94LXN1Ym1pdCdcblxuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIHJlc2V0QnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtZm9ybV9fcmVzZXQnXG4gIHJlc2V0QnV0dG9uLnR5cGUgPSAncmVzZXQnXG4gIHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gJ2NhbmNlbCdcbiAgcmVzZXRCdXR0b24uaWQgPSAnaW5ib3gtcmVzZXQnXG5cbiAgZm9ybS5hcHBlbmQocHJvamVjdElucHV0LCBzdWJtaXRCdXR0b24sIHJlc2V0QnV0dG9uKVxuXG4gIHJldHVybiBmb3JtXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkZEZvcm1cbiIsIi8vICBNT1ZFIEVWRVJZIEZVQ0tJTkcgRVZFTlQgTElTVEVORVIgVE8gTUFJTlxuaW1wb3J0IGFkZEJ1dHRvbiBmcm9tICcuL2luYm94QWRkQnV0dG9uJ1xuXG5jb25zdCBjcmVhdGVJbmJveFNlY3Rpb24gPSAoKCkgPT4ge1xuICBjb25zdCBpbmJveFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgaW5ib3hTZWN0aW9uLmNsYXNzTmFtZSA9ICdpbmJveC1zZWN0aW9uJ1xuXG4gIGNvbnN0IGluYm94U2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICBpbmJveFNlY3Rpb25UaXRsZS5jbGFzc05hbWUgPSAnaW5ib3gtc2VjdGlvbl9fdGl0bGUnXG4gIGluYm94U2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ2luYm94J1xuXG4gIGFkZEJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLXRpdGxlJykudGV4dENvbnRlbnQgPSAnYWRkIHRhc2snXG5cbiAgaW5ib3hTZWN0aW9uLmFwcGVuZChpbmJveFNlY3Rpb25UaXRsZSwgYWRkQnV0dG9uKVxuXG4gIHJldHVybiBpbmJveFNlY3Rpb25cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSW5ib3hTZWN0aW9uXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5pbXBvcnQgaW5ib3hTZWN0aW9uIGZyb20gJy4vaW5ib3hTZWN0aW9uJ1xuXG5pbXBvcnQgYWRkRm9ybSBmcm9tICcuL2luYm94QWRkRm9ybSdcbmltcG9ydCB0YXNrIGZyb20gJy4vdGFzaydcblxuaW1wb3J0IGZpbmREYXRlRGVsdGEgZnJvbSAnLi9maW5kRGF0ZURlbHRhJ1xuXG5jb25zdCB0b2RheVRhc2tzID0gW11cbmNvbnN0IHRoaXNXZWVrVGFza3MgPSBbXVxuXG5jb25zdCBjcmVhdGVNYWluID0gKCgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICBtYWluLmNsYXNzTmFtZSA9ICdtYWluJ1xuXG4gIG1haW4uYXBwZW5kKGluYm94U2VjdGlvbilcblxuICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgaWYgKGUudGFyZ2V0KSB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAnaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbicgfHwgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09ICdpbmJveF9fcHJvamVjdC1jb250YWluZXItYnV0dG9uJykge1xuICAgICAgICAvLyBlLmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcignLmluYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24nKS5yZW1vdmUoKVxuICAgICAgICBtYWluLmZpcnN0RWxlbWVudENoaWxkLmluc2VydEJlZm9yZShhZGRGb3JtLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbicpKVxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2tfX2NoZWNrJykpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5vdXRlckhUTUwpXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2tfX2NoZWNrX2FjdGl2ZScpXG4gICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrX190aXRsZV9kb25lJylcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5vdXRlckhUTUwsIGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykub3V0ZXJIVE1MKVxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09ICd0YXNrX19uby1kYXRlJykge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLm91dGVySFRNTClcbiAgICAgICAgY29uc3QgY2FsZW5kYXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgY2FsZW5kYXJJbnB1dC50eXBlID0gJ2RhdGUnXG4gICAgICAgIGNhbGVuZGFySW5wdXQuY2xhc3NOYW1lID0gJ3Rhc2tfX2RhdGUnXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykucXVlcnlTZWxlY3RvcignLnRhc2tfX3NlY29uZC1zZWN0aW9uJykucHJlcGVuZChjYWxlbmRhcklucHV0KVxuICAgICAgICBjYWxlbmRhcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gY2FsZW5kYXJJbnB1dC52YWx1ZS5zcGxpdCgnLScpLmpvaW4oJy8nKVxuICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxuICAgICAgICAgIGNvbnN0IHBsYW5uZWREYXRlID0gbmV3IERhdGUoY2FsZW5kYXJJbnB1dC52YWx1ZSlcblxuICAgICAgICAgIGNvbnN0IGRhdGVEZWx0YSA9IGZpbmREYXRlRGVsdGEoY3VycmVudERhdGUsIHBsYW5uZWREYXRlKVxuXG4gICAgICAgICAgaWYgKGRhdGVEZWx0YSA+PSAwICYmIGRhdGVEZWx0YSA8PSAxKSB7XG4gICAgICAgICAgICB0b2RheVRhc2tzLnB1c2gobWFpbi5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcpXG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRlRGVsdGEgPD0gNyAmJiBkYXRlRGVsdGEgPiAxKSB7XG4gICAgICAgICAgICB0aGlzV2Vla1Rhc2tzLnB1c2gobWFpbi5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FsZW5kYXJJbnB1dC5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy50YXNrX19zZWNvbmQtc2VjdGlvbicpLnByZXBlbmQoZS50YXJnZXQpXG4gICAgICAgICAgY2FsZW5kYXJJbnB1dC5yZW1vdmUoKVxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykub3V0ZXJIVE1MLCBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLm91dGVySFRNTClcbiAgICAgICAgfSlcbiAgICAgICAgZS50YXJnZXQucmVtb3ZlKClcbiAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAndGFza19fZGVsZXRlJykge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLm91dGVySFRNTClcbiAgICAgICAgdG9kYXlUYXNrcy5zcGxpY2UodG9kYXlUYXNrcy5pbmRleE9mKGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykpLCAxKVxuICAgICAgICB0aGlzV2Vla1Rhc2tzLnNwbGljZSh0aGlzV2Vla1Rhc2tzLmluZGV4T2YoZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKSksIDEpXG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykucmVtb3ZlKClcbiAgICAgIH1cbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LXNlY3Rpb25fX3RpdGxlJykudGV4dENvbnRlbnQsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC1zZWN0aW9uJykub3V0ZXJIVE1MKVxuICB9KVxuXG4gIG1haW4uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LXNlY3Rpb25fX3RpdGxlJykudGV4dENvbnRlbnQsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC1zZWN0aW9uJykub3V0ZXJIVE1MKVxuICB9KVxuXG4gIGNvbnN0IGNsb3NlRm9ybU9wZW5CdXR0b24gPSAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZVxuICAgIGlmIChlLnR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrLmNsb25lTm9kZSh0cnVlKVxuICAgICAgbmV3VGFzay5xdWVyeVNlbGVjdG9yKCcudGFza19fdGl0bGUnKS50ZXh0Q29udGVudCA9IG1haW4ucXVlcnlTZWxlY3RvcignLmFkZC1mb3JtX19pbnB1dCcpLnZhbHVlXG4gICAgICBtYWluLmZpcnN0RWxlbWVudENoaWxkLmluc2VydEJlZm9yZShuZXdUYXNrLCBtYWluLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZylcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld1Rhc2sub3V0ZXJIVE1MLCBuZXdUYXNrLm91dGVySFRNTClcbiAgICAgIHRhcmdldC5yZXNldCgpXG4gICAgfVxuICAgIHRhcmdldC5yZW1vdmUoKVxuICAgIC8vIG1haW4uZmlyc3RFbGVtZW50Q2hpbGQuYXBwZW5kKGFkZEJ1dHRvbilcbiAgfVxuXG4gIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY2xvc2VGb3JtT3BlbkJ1dHRvbilcbiAgbWFpbi5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIGNsb3NlRm9ybU9wZW5CdXR0b24pXG5cbiAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoa2V5LmluY2x1ZGVzKCdjbGFzcz1cInRhc2snKSkge1xuICAgICAgaW5ib3hTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGtleSlcbiAgICAgIGluYm94U2VjdGlvbi5pbnNlcnRCZWZvcmUoaW5ib3hTZWN0aW9uLmZpcnN0RWxlbWVudENoaWxkLCBpbmJveFNlY3Rpb24uZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIG1haW5cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWFpblxuXG5leHBvcnQgeyB0b2RheVRhc2tzLCB0aGlzV2Vla1Rhc2tzIH1cbiIsImltcG9ydCBwcm9qZWN0SWNvbiBmcm9tICcuL2ltYWdlcy9wcm9qZWN0LWljb24uc3ZnJ1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIHByb2plY3QuY2xhc3NOYW1lID0gJ3Byb2plY3QnXG5cbiAgY29uc3QgbGVmdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBsZWZ0U2VjdGlvbi5jbGFzc05hbWUgPSAncHJvamVjdF9fbGVmdC1zZWN0aW9uJ1xuICBjb25zdCBsZWZ0U2VjdGlvbkljb24gPSBuZXcgSW1hZ2UoKVxuICBsZWZ0U2VjdGlvbkljb24uY2xhc3NOYW1lID0gJ3Byb2plY3RfX2xlZnQtc2VjdGlvbi1pY29uJ1xuICBsZWZ0U2VjdGlvbkljb24uc3JjID0gcHJvamVjdEljb25cbiAgY29uc3QgbGVmdFNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgbGVmdFNlY3Rpb25UaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdF9fbGVmdC1zZWN0aW9uLXRpdGxlJ1xuICBsZWZ0U2VjdGlvbi5hcHBlbmQobGVmdFNlY3Rpb25JY29uLCBsZWZ0U2VjdGlvblRpdGxlKVxuXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAncHJvamVjdF9fZGVsZXRlJ1xuXG4gIHByb2plY3QuYXBwZW5kKGxlZnRTZWN0aW9uLCBkZWxldGVCdXR0b24pXG5cbiAgcmV0dXJuIHByb2plY3Rcbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdFxuIiwiLy8gU0VDVElPTlNcbmltcG9ydCB0b2RvU2VjdGlvbiBmcm9tICcuL3NpZGViYXJUb2RvU2VjdGlvbidcbmltcG9ydCBwcm9qZWN0U2VjdGlvbiBmcm9tICcuL3NpZGViYXJQcm9qZWN0U2VjdGlvbidcblxuY29uc3QgY3JlYXRlU2lkZWJhciA9ICgoKSA9PiB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpXG4gIHNpZGViYXIuY2xhc3NOYW1lID0gJ3NpZGViYXInXG5cbiAgc2lkZWJhci5hcHBlbmQodG9kb1NlY3Rpb24sIHByb2plY3RTZWN0aW9uKVxuXG4gIHJldHVybiBzaWRlYmFyXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNpZGViYXJcbiIsImltcG9ydCBBZGRQcm9qZWN0SWNvbiBmcm9tICcuL2ltYWdlcy9hZGQtcHJvamVjdC5zdmcnXG5cbmNvbnN0IGNyZWF0ZUFkZEJ1dHRvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTmFtZSA9ICdzaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24nXG5cbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbkljb24gPSBuZXcgSW1hZ2UoKVxuICBhZGRQcm9qZWN0QnV0dG9uSWNvbi5jbGFzc05hbWUgPSAnc2lkZWJhcl9fcHJvamVjdC1jb250YWluZXItYWRkJ1xuICBhZGRQcm9qZWN0QnV0dG9uSWNvbi5zcmMgPSBBZGRQcm9qZWN0SWNvblxuXG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgYWRkUHJvamVjdEJ1dHRvblRpdGxlLmNsYXNzTmFtZSA9ICdzaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci10aXRsZSdcblxuICBhZGRQcm9qZWN0QnV0dG9uLmFwcGVuZChhZGRQcm9qZWN0QnV0dG9uSWNvbiwgYWRkUHJvamVjdEJ1dHRvblRpdGxlKVxuXG4gIHJldHVybiBhZGRQcm9qZWN0QnV0dG9uXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkZEJ1dHRvblxuIiwiY29uc3QgY3JlYXRlQWRkRm9ybSA9ICgoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgZm9ybS5jbGFzc05hbWUgPSAnYWRkLWZvcm0nXG4gIGZvcm0uaWQgPSAnYWRkLWZvcm0nXG5cbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBwcm9qZWN0SW5wdXQuY2xhc3NOYW1lID0gJ2FkZC1mb3JtX19pbnB1dCdcbiAgcHJvamVjdElucHV0LmlkID0gJ2FkZC1mb3JtX19pbnB1dCdcbiAgcHJvamVjdElucHV0Lm5hbWUgPSAnYWRkLWZvcm1fX2lucHV0J1xuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpXG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsIDEpXG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgc3VibWl0QnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtZm9ybV9fc3VibWl0J1xuICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnXG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdhZGQnXG4gIHN1Ym1pdEJ1dHRvbi5pZCA9ICdzaWRlYmFyLXN1Ym1pdCdcblxuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIHJlc2V0QnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtZm9ybV9fcmVzZXQnXG4gIHJlc2V0QnV0dG9uLnR5cGUgPSAncmVzZXQnXG4gIHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gJ2NhbmNlbCdcbiAgcmVzZXRCdXR0b24uaWQgPSAnc2lkZWJhci1yZXNldCdcblxuICBmb3JtLmFwcGVuZChwcm9qZWN0SW5wdXQsIHN1Ym1pdEJ1dHRvbiwgcmVzZXRCdXR0b24pXG5cbiAgcmV0dXJuIGZvcm1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRkRm9ybVxuIiwiLyogZXNsaW50LWRpc2FibGUgZXFlcWVxICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZHVwbGljYXRlcyAqL1xuLy8gIE1PVkUgRVZFUlkgRlVDS0lORyBFVkVOVCBMSVNURU5FUiBUTyBNQUlOXG5pbXBvcnQgbWFpbiBmcm9tICcuL21haW4nXG5cbmltcG9ydCBpbmJveFNlY3Rpb24gZnJvbSAnLi9pbmJveFNlY3Rpb24nXG5cbmltcG9ydCB7IHRvZGF5VGFza3MsIHRoaXNXZWVrVGFza3MgfSBmcm9tICcuL21haW4nXG5cbmltcG9ydCBmaW5kRGF0ZURlbHRhIGZyb20gJy4vZmluZERhdGVEZWx0YSdcblxuaW5ib3hTZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJykuZm9yRWFjaCgodGFzaykgPT4ge1xuICBpZiAodG9kYXlUYXNrcy5pbmRleE9mKHRhc2spID09PSAtMVxuICAmJiBuZXcgRGF0ZSh0YXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrX19uby1kYXRlJykudGV4dENvbnRlbnQpLmdldERhdGUoKSA9PSBuZXcgRGF0ZSgpLmdldERhdGUoKSkge1xuICAgIHRvZGF5VGFza3MucHVzaCh0YXNrLmNsb25lTm9kZSh0cnVlKSlcbiAgfSBlbHNlIGlmICh0aGlzV2Vla1Rhc2tzLmluZGV4T2YodGFzaykgPT09IC0xXG4gICYmIGZpbmREYXRlRGVsdGEobmV3IERhdGUodGFzay5xdWVyeVNlbGVjdG9yKCcudGFza19fbm8tZGF0ZScpLnRleHRDb250ZW50KSwgbmV3IERhdGUoKSkgPD0gNykge1xuICAgIHRoaXNXZWVrVGFza3MucHVzaCh0YXNrLmNsb25lTm9kZSh0cnVlKSlcbiAgfVxufSlcblxuY29uc3QgZ2VuZXJhdGVkU2VjdGlvbiA9IGluYm94U2VjdGlvbi5jbG9uZU5vZGUoJy5pbmJveC1zZWN0aW9uX190aXRsZScsICcuaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbicpXG5cbmNvbnN0IHRvZGF5U2VjdGlvbiA9IGluYm94U2VjdGlvbi5jbG9uZU5vZGUodHJ1ZSlcbmNvbnN0IHRoaXNXZWVrU2VjdGlvbiA9IGluYm94U2VjdGlvbi5jbG9uZU5vZGUodHJ1ZSlcbnRvZGF5U2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbicpLnJlbW92ZSgpXG50aGlzV2Vla1NlY3Rpb24ucXVlcnlTZWxlY3RvcignLmluYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24nKS5yZW1vdmUoKVxuXG5jb25zdCBjaGFuZ2VNYWluU3RhdGUgPSAoc2lkZWJhckJ1dHRvbikgPT4ge1xuICBpZiAoc2lkZWJhckJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3NpZGViYXJfX3RvZG8tZGl2X2FjdGl2ZScpKSByZXR1cm5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX190b2RvLWRpdl9hY3RpdmUnKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX190b2RvLWRpdl9hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyX190b2RvLWRpdl9hY3RpdmUnKVxuICB9XG4gIHNpZGViYXJCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2lkZWJhcl9fdG9kby1kaXZfYWN0aXZlJylcblxuICBtYWluLmlubmVySFRNTCA9ICcnXG5cbiAgY29uc3QgaWRlbnRpZmllciA9IHNpZGViYXJCdXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgfHwgc2lkZWJhckJ1dHRvbi5pZC5yZXBsYWNlKC8tKy9nLCAnICcpXG5cbiAgaWYgKGlkZW50aWZpZXIgPT09ICdUT0RBWScpIHtcbiAgICB0b2RheVNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodG9kYXlUYXNrcy5pbmRleE9mKHRhc2spID09PSAtMSkgdGFzay5yZW1vdmUoKVxuICAgIH0pXG4gICAgdG9kYXlUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0b2RheVNlY3Rpb24uYXBwZW5kKHRhc2suY2xvbmVOb2RlKHRydWUpKVxuICAgIH0pXG4gIH0gZWxzZSBpZiAoaWRlbnRpZmllciA9PT0gJ1RISVMgV0VFSycpIHtcbiAgICB0aGlzV2Vla1NlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodG9kYXlUYXNrcy5pbmRleE9mKHRhc2spID09PSAtMSkgdGFzay5yZW1vdmUoKVxuICAgIH0pXG4gICAgdGhpc1dlZWtUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0aGlzV2Vla1NlY3Rpb24uYXBwZW5kKHRhc2suY2xvbmVOb2RlKHRydWUpKVxuICAgIH0pXG4gIH1cblxuICBpZiAoaWRlbnRpZmllciA9PT0gJ0lOQk9YJykge1xuICAgIG1haW4uYXBwZW5kKGluYm94U2VjdGlvbilcbiAgfSBlbHNlIGlmIChpZGVudGlmaWVyID09PSAnVEhJUyBXRUVLJykge1xuICAgIHRoaXNXZWVrU2VjdGlvbi5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IGlkZW50aWZpZXJcbiAgICBtYWluLmFwcGVuZCh0aGlzV2Vla1NlY3Rpb24pXG4gIH0gZWxzZSBpZiAoaWRlbnRpZmllciA9PT0gJ1RPREFZJykge1xuICAgIHRvZGF5U2VjdGlvbi5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IGlkZW50aWZpZXJcbiAgICBtYWluLmFwcGVuZCh0b2RheVNlY3Rpb24pXG4gIH0gZWxzZSBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKGlkZW50aWZpZXIpKSB7XG4gICAgY29uc3QgY2xvbmUgPSBnZW5lcmF0ZWRTZWN0aW9uLmNsb25lTm9kZSh0cnVlKVxuICAgIGNsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJykuZm9yRWFjaCgodGFzaykgPT4gdGFzay5yZW1vdmUoKSlcbiAgICBjbG9uZS5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IGlkZW50aWZpZXJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZGVudGlmaWVyLCBjbG9uZS5vdXRlckhUTUwpXG4gICAgbWFpbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpZGVudGlmaWVyKSlcbiAgfSBlbHNlIHtcbiAgICBtYWluLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGlkZW50aWZpZXIpKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNoYW5nZU1haW5TdGF0ZVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBhZGRCdXR0b24gZnJvbSAnLi9zaWRlYmFyQWRkQnV0dG9uJ1xuaW1wb3J0IGFkZEZvcm0gZnJvbSAnLi9zaWRlYmFyQWRkRm9ybSdcbmltcG9ydCBwcm9qZWN0IGZyb20gJy4vcHJvamVjdCdcblxuaW1wb3J0IGNoYW5nZU1haW5TdGF0ZSBmcm9tICcuL3NpZGViYXJDaGFuZ2VNYWluJ1xuXG5pbXBvcnQgbWFpbiBmcm9tICcuL21haW4nXG5cbmNvbnN0IGNyZWF0ZVByb2plY3RTZWN0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgcHJvamVjdFNlY3Rpb24uY2xhc3NOYW1lID0gJ3NpZGViYXJfX3Byb2plY3Qtc2VjdGlvbidcblxuICBjb25zdCBwcm9qZWN0U2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICBwcm9qZWN0U2VjdGlvblRpdGxlLmNsYXNzTmFtZSA9ICdzaWRlYmFyX19wcm9qZWN0LXNlY3Rpb24tdGl0bGUnXG4gIHByb2plY3RTZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAncHJvamVjdHMnXG5cbiAgY29uc3QgcHJvamVjdFNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBwcm9qZWN0U2VjdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnc2lkZWJhcl9fcHJvamVjdC1jb250YWluZXInXG5cbiAgYWRkQnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci10aXRsZScpLnRleHRDb250ZW50ID0gJ2FkZCBwcm9qZWN0J1xuXG4gIHByb2plY3RTZWN0aW9uQ29udGFpbmVyLmFwcGVuZChhZGRCdXR0b24pXG5cbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgYWRkQnV0dG9uLnJlbW92ZSgpXG4gICAgcHJvamVjdFNlY3Rpb25Db250YWluZXIuYXBwZW5kKGFkZEZvcm0pXG4gIH0pXG5cbiAgcHJvamVjdFNlY3Rpb25Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAncHJvamVjdF9fZGVsZXRlJykge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZS50YXJnZXQucGFyZW50RWxlbWVudC5vdXRlckhUTUwpXG4gICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpXG4gICAgICBtYWluLmlubmVySFRNTCA9ICcnXG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3QnKSB8fCBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpKSB7XG4gICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QnKSkge1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2xlZnQtc2VjdGlvbi10aXRsZScpLnRleHRDb250ZW50LnRvVXBwZXJDYXNlKCkpXG4gICAgICAgIGNoYW5nZU1haW5TdGF0ZShlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0X19sZWZ0LXNlY3Rpb24tdGl0bGUnKS50ZXh0Q29udGVudC50b1VwcGVyQ2FzZSgpKVxuICAgICAgY2hhbmdlTWFpblN0YXRlKGUudGFyZ2V0KVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBjbG9zZUZvcm1PcGVuQnV0dG9uID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZVxuICAgIGlmIChlLnR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0LmNsb25lTm9kZSh0cnVlKVxuICAgICAgbmV3UHJvamVjdC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fbGVmdC1zZWN0aW9uLXRpdGxlJykudGV4dENvbnRlbnQgPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybV9faW5wdXQnKS52YWx1ZVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmV3UHJvamVjdC5vdXRlckhUTUwsIG5ld1Byb2plY3Qub3V0ZXJIVE1MKVxuICAgICAgcHJvamVjdFNlY3Rpb25Db250YWluZXIuaW5zZXJ0QmVmb3JlKG5ld1Byb2plY3QsIHByb2plY3RTZWN0aW9uQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKVxuICAgICAgdGFyZ2V0LnJlc2V0KClcbiAgICB9XG4gICAgdGFyZ2V0LnJlbW92ZSgpXG4gICAgcHJvamVjdFNlY3Rpb25Db250YWluZXIuYXBwZW5kKGFkZEJ1dHRvbilcbiAgfVxuXG4gIGFkZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY2xvc2VGb3JtT3BlbkJ1dHRvbilcbiAgYWRkRm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIGNsb3NlRm9ybU9wZW5CdXR0b24pXG5cbiAgcHJvamVjdFNlY3Rpb24uYXBwZW5kKHByb2plY3RTZWN0aW9uVGl0bGUsIHByb2plY3RTZWN0aW9uQ29udGFpbmVyKVxuXG4gIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGtleS5pbmNsdWRlcygnY2xhc3M9XCJwcm9qZWN0XCInKSkge1xuICAgICAgY29uc3QgbmV3UHJvamVjdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICAgIHByb2plY3RTZWN0aW9uQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIG5ld1Byb2plY3QpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBwcm9qZWN0U2VjdGlvblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0U2VjdGlvblxuIiwiaW1wb3J0IEluYm94SWNvbiBmcm9tICcuL2ltYWdlcy9pbmJveC5zdmcnXG5pbXBvcnQgQ2FsZW5kYXJJY29uIGZyb20gJy4vaW1hZ2VzL2NhbGVuZGFyLnN2ZydcbmltcG9ydCBXZWVrbHlJY29uIGZyb20gJy4vaW1hZ2VzL3dlZWstY2FsZW5kYXIuc3ZnJ1xuXG4vLyBjbGljayBldmVudCBoYW5kbGVyXG5pbXBvcnQgY2hhbmdlTWFpblN0YXRlIGZyb20gJy4vc2lkZWJhckNoYW5nZU1haW4nXG5cbmNvbnN0IGNyZWF0ZVRvZG9TZWN0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgdG9kb1NlY3Rpb24uY2xhc3NOYW1lID0gJ3NpZGViYXJfX3RvZG8tc2VjdGlvbidcblxuICBjb25zdCB0b2RvU2VjdGlvbkNvbnRlbnQgPSBbXG4gICAge1xuICAgICAgaW1hZ2U6IEluYm94SWNvbixcbiAgICAgIHRpdGxlOiAnaW5ib3gnLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2U6IENhbGVuZGFySWNvbixcbiAgICAgIHRpdGxlOiAndG9kYXknLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2U6IFdlZWtseUljb24sXG4gICAgICB0aXRsZTogJ3RoaXMgd2VlaycsXG4gICAgfSxcbiAgXVxuXG4gIHRvZG9TZWN0aW9uQ29udGVudC5mb3JFYWNoKChjb250ZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnRlbnREaXYuY2xhc3NOYW1lID0gJ3NpZGViYXJfX3RvZG8tZGl2J1xuICAgIGNvbnRlbnREaXYuaWQgPSBjb250ZW50LnRpdGxlLnJlcGxhY2UoL1xcVysvZywgJy0nKS50b1VwcGVyQ2FzZSgpXG5cbiAgICBpZiAoaW5kZXggPT09IDApIGNvbnRlbnREaXYuY2xhc3NOYW1lID0gJ3NpZGViYXJfX3RvZG8tZGl2IHNpZGViYXJfX3RvZG8tZGl2X2FjdGl2ZSdcblxuICAgIGNvbnN0IGNvbnRlbnREaXZJbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgY29udGVudERpdkltYWdlLmNsYXNzTmFtZSA9ICdzaWRlYmFyX190b2RvLWRpdi1pbWFnZSdcbiAgICBjb250ZW50RGl2SW1hZ2Uuc3JjID0gY29udGVudC5pbWFnZVxuXG4gICAgY29uc3QgY29udGVudERpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGNvbnRlbnREaXZUaXRsZS5jbGFzc05hbWUgPSAnc2lkZWJhcl9fdG9kby1kaXYtdGl0bGUnXG4gICAgY29udGVudERpdlRpdGxlLnRleHRDb250ZW50ID0gY29udGVudC50aXRsZVxuXG4gICAgY29udGVudERpdi5hcHBlbmQoY29udGVudERpdkltYWdlLCBjb250ZW50RGl2VGl0bGUpXG5cbiAgICBjb250ZW50RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2hhbmdlTWFpblN0YXRlKGNvbnRlbnREaXYpKVxuXG4gICAgdG9kb1NlY3Rpb24uYXBwZW5kKGNvbnRlbnREaXYpXG4gIH0pXG5cbiAgcmV0dXJuIHRvZG9TZWN0aW9uXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvZG9TZWN0aW9uXG4iLCJjb25zdCBjcmVhdGVUYXNrID0gKCgpID0+IHtcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRhc2suY2xhc3NOYW1lID0gJ3Rhc2snXG5cbiAgY29uc3QgZmlyc3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZmlyc3RTZWN0aW9uLmNsYXNzTmFtZSA9ICd0YXNrX19maXJzdC1zZWN0aW9uJ1xuICBjb25zdCBjaGVja0NpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNoZWNrQ2lyY2xlLmNsYXNzTmFtZSA9ICd0YXNrX19jaGVjaydcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKVxuICB0YXNrVGl0bGUuY2xhc3NOYW1lID0gJ3Rhc2tfX3RpdGxlJ1xuICBmaXJzdFNlY3Rpb24uYXBwZW5kKGNoZWNrQ2lyY2xlLCB0YXNrVGl0bGUpXG5cbiAgY29uc3Qgc2Vjb25kU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHNlY29uZFNlY3Rpb24uY2xhc3NOYW1lID0gJ3Rhc2tfX3NlY29uZC1zZWN0aW9uJ1xuICBjb25zdCBub0RhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIG5vRGF0ZVRleHQuY2xhc3NOYW1lID0gJ3Rhc2tfX25vLWRhdGUnXG4gIG5vRGF0ZVRleHQudGV4dENvbnRlbnQgPSAnTm8gRGF0ZSdcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICd0YXNrX19kZWxldGUnXG4gIHNlY29uZFNlY3Rpb24uYXBwZW5kKG5vRGF0ZVRleHQsIGRlbGV0ZUJ1dHRvbilcblxuICB0YXNrLmFwcGVuZChmaXJzdFNlY3Rpb24sIHNlY29uZFNlY3Rpb24pXG5cbiAgcmV0dXJuIHRhc2tcbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFza1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBTVFlMRVNcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJ1xuXG4vLyBDT1JFIFBBUlRTXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xuaW1wb3J0IHNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluJ1xuaW1wb3J0IGZvb3RlciBmcm9tICcuL2Zvb3RlcidcblxuLy8gaW1wb3J0IEljb24gZnJvbSAnLi9pbWFnZXMvaWNvbi5zdmdcbi8vIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKClcbi8vIGltYWdlLnNyYyA9IEljb25cblxuY29uc3QgY3JlYXRlQXBwID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gJ2NvbnRlbnQnXG5cbiAgY29udGVudC5hcHBlbmQoaGVhZGVyKVxuICBjb250ZW50LmFwcGVuZChzaWRlYmFyKVxuICBjb250ZW50LmFwcGVuZChtYWluKVxuICBjb250ZW50LmFwcGVuZChmb290ZXIpXG5cbiAgcmV0dXJuIGNvbnRlbnRcbn0pKClcblxuZG9jdW1lbnQuYm9keS5hcHBlbmQoY3JlYXRlQXBwKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9