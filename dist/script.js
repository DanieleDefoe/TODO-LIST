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
___CSS_LOADER_EXPORT___.push([module.id, "/* NORMALIZING START */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 62.5%;\n  --main-text-color: #fff;\n  --header-footer-background: #333;\n  --header-height: clamp(12rem, 15vh, 25rem);\n  --sidebar-width: clamp(250px, 20vw, 400px);\n  --footer-height: clamp(50px, 5vh, 100px);\n  --sidebar-background: #ddd;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n/* NORMALIZING END */\n\n\n\n/* CONTENT START */\n.content {\n  width: 100%;\n  min-height: 100vh;\n  display: grid;\n  grid-template-areas:\n  \"header header header\"\n  \"sidebar main main\"\n  \"footer footer footer\";\n  grid-template-rows: var(--header-height) 1fr var(--footer-height);\n  grid-template-columns: var(--sidebar-width) 1fr;\n}\n/* CONTENT END */\n\n\n\n/* HEADER START */\n.header {\n  width: 100%;\n  height: var(--header-height);\n  background: var(--header-footer-background);\n  padding: 2rem 4rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 3rem;\n  grid-area: header;\n}\n\n.header__icon {\n  height: 100%;\n  object-fit: contain;\n}\n\n.header__title {\n  color: var(--main-text-color);\n  text-transform: uppercase;\n  font-size: 4rem;\n  letter-spacing: 1px;\n}\n/* HEADER END */\n\n\n\n/* SIDEBAR START */\n.sidebar {\n  grid-area: sidebar;\n  background: var(--sidebar-background);\n  width: var(--sidebar-width);\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n}\n\n.sidebar__todo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.sidebar__todo-div {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  padding: 1rem 0 1rem 2rem;\n  transition: all .2s linear;\n  border-radius: 1rem;\n  border: none;\n  background: none;\n}\n\n.sidebar__todo-div-image {\n  height: 2rem;\n  object-fit: contain;\n}\n\n.sidebar__todo-div-title {\n  font-size: 1.7rem;\n  text-transform: uppercase;\n  color: var(--header-footer-background);\n  font-weight: normal;\n}\n\n.sidebar__project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.sidebar__project-section-title {\n  text-transform: uppercase;\n  font-size: 2.5rem;\n  color: var(--header-footer-background);\n}\n\n.sidebar__project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.sidebar__project-container-button, .inbox__project-container-button {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n  text-transform: uppercase;\n  color: var(--header-footer-background);\n  padding: 1rem 2rem;\n  background: none;\n  border: none;\n  transition: all .3s linear;\n  border-radius: 1rem;\n  width: 100%;\n}\n\n.sidebar__project-container-add, .inbox__project-container-add {\n  height: 2rem;\n}\n/* SIDEBAR END */\n\n\n\n/* MAIN START */\n.main {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  padding: 0 10rem;\n}\n\n.inbox-section, .today-section, .this-week-section {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 3rem 0;\n  gap: 3rem;\n  max-width: 1024px;\n}\n\n.inbox-section__title, .today-section__title, .this-week-section__title {\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n  gap: 2rem;\n}\n/* MAIN END */\n\n\n\n/* FOOTER START */\n.footer {\n  width: 100%;\n  height: var(--footer-height);\n  background: var(--header-footer-background);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  grid-area: footer;\n  padding: 1rem;\n}\n\n.footer__copyright {\n  color: var(--main-text-color);\n  font-size: 2rem;\n  text-align: center;\n}\n\n.footer__icon {\n  transition: all .3s linear;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center / contain;\n  display: block;\n  height: 100%;\n  width: 3rem;\n}\n/* FOOTER END */\n\n\n\n/* ADD FORM START */\n.add-form {\n  display: grid;\n  grid-template-areas:\n  \"input input\"\n  \"submit reset\";\n  gap: 2rem;\n  width: 100%;\n}\n\n.add-form__input {\n  grid-area: input;\n  border-radius: .5rem;\n  padding: 1rem;\n  font-size: 2rem;\n  width: 100%;\n  border: none;\n  outline: 1px solid var(--header-footer-background);\n}\n\n.add-form__input:invalid {\n  outline: 1px solid red;\n}\n\n.add-form__input:valid {\n  outline: 1px solid green;\n}\n\n.add-form__submit, .add-form__reset {\n  text-transform: uppercase;\n  font-size: 1.5rem;\n  padding: 1rem 2rem;\n  border-radius: .5rem;\n  border: 1px solid var(--header-footer-background);\n  transition: all .2s linear;\n}\n\n.add-form__submit {\n  grid-area: submit;\n  background: lightgreen;\n}\n\n.add-form__reset {\n  grid-area: reset;\n  background: lightcoral;\n}\n/* ADD FORM END */\n\n\n\n/* TASK START */\n.task {\n  width: 100%;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 1rem;\n  transition: all .2s linear;\n}\n\n.task__first-section, .task__second-section {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.task__check {\n  width: 2.5rem;\n  height: 2.5rem;\n  background: transparent;\n  border: 2px solid var(--header-footer-background);\n  border-radius: 50%;\n}\n\n.task__title {\n  font-size: 2rem;\n  font-weight: 400;\n  max-width: 300px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.task__title_done {\n  text-decoration: line-through;\n}\n\n.task__no-date {\n  font-size: 2rem;\n}\n\n.task__date {\n  font-size: 1.5rem;\n  border-radius: .5rem;\n  border: 1px solid var(--header-footer-background);\n  padding: .5rem;\n}\n\n.task__delete, .project__delete {\n  width: 3rem;\n  height: 3rem;\n  border: none;\n  visibility: hidden;\n  opacity: 0;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center / contain;\n  transition: all .2s linear;\n}\n/* TASK END */\n\n\n\n/* PROJECT START */\n.project {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  border-radius: 1rem;\n  border: none;\n  padding: 1rem 2rem;\n  transition: all .2s linear;\n  background: none;\n}\n\n.project__left-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  text-transform: uppercase;\n}\n\n.project__left-section-icon {\n  width: 3rem;\n  height: 3rem;\n}\n\n.project__left-section-title {\n  font-weight: 400;\n}\n\n.project__delete {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n/* PROJECT END */\n\n\n\n/* ACTIVE STATES START*/\n.sidebar__todo-div_active {\n  background: var(--main-text-color);\n}\n\n.sidebar__todo-div_active .sidebar__todo-div-title, .sidebar__todo-div_active .project__left-section-title {\n  font-weight: bold;\n}\n\n.task__check_active {\n  background: var(--header-footer-background);\n}\n/* ACTIVE STATES END */\n\n\n\n/* HOVERS START */\n@media (hover: hover) {\n  .sidebar__todo-div:hover, .sidebar__project-container-button:hover {\n    background: var(--main-text-color);\n    cursor: pointer;\n  }\n\n  .add-form__submit:hover {\n    cursor: pointer;\n    background: green;\n    color: var(--main-text-color);\n  }\n\n  .add-form__reset:hover {\n    cursor: pointer;\n    background: red;\n    color: var(--main-text-color);\n  }\n\n  .inbox__project-container-button:hover {\n    cursor: pointer;\n    background: var(--sidebar-background);\n  }\n\n  .task:hover {\n    background: var(--sidebar-background);\n  }\n\n  .project:hover {\n    cursor: pointer;\n    background: var(--main-text-color);\n  }\n\n  .task:hover .task__delete, .project:hover .project__delete {\n    visibility: unset;\n    opacity: unset;\n  }\n\n  .task__delete:hover , .task__no-date:hover, .task__check:hover, .task__date:hover, .project__delete:hover {\n    cursor: pointer;\n  }\n}\n/* HOVERS END */\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":["/* NORMALIZING START */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 62.5%;\n  --main-text-color: #fff;\n  --header-footer-background: #333;\n  --header-height: clamp(12rem, 15vh, 25rem);\n  --sidebar-width: clamp(250px, 20vw, 400px);\n  --footer-height: clamp(50px, 5vh, 100px);\n  --sidebar-background: #ddd;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n/* NORMALIZING END */\n\n\n\n/* CONTENT START */\n.content {\n  width: 100%;\n  min-height: 100vh;\n  display: grid;\n  grid-template-areas:\n  \"header header header\"\n  \"sidebar main main\"\n  \"footer footer footer\";\n  grid-template-rows: var(--header-height) 1fr var(--footer-height);\n  grid-template-columns: var(--sidebar-width) 1fr;\n}\n/* CONTENT END */\n\n\n\n/* HEADER START */\n.header {\n  width: 100%;\n  height: var(--header-height);\n  background: var(--header-footer-background);\n  padding: 2rem 4rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 3rem;\n  grid-area: header;\n}\n\n.header__icon {\n  height: 100%;\n  object-fit: contain;\n}\n\n.header__title {\n  color: var(--main-text-color);\n  text-transform: uppercase;\n  font-size: 4rem;\n  letter-spacing: 1px;\n}\n/* HEADER END */\n\n\n\n/* SIDEBAR START */\n.sidebar {\n  grid-area: sidebar;\n  background: var(--sidebar-background);\n  width: var(--sidebar-width);\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n}\n\n.sidebar__todo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.sidebar__todo-div {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  padding: 1rem 0 1rem 2rem;\n  transition: all .2s linear;\n  border-radius: 1rem;\n  border: none;\n  background: none;\n}\n\n.sidebar__todo-div-image {\n  height: 2rem;\n  object-fit: contain;\n}\n\n.sidebar__todo-div-title {\n  font-size: 1.7rem;\n  text-transform: uppercase;\n  color: var(--header-footer-background);\n  font-weight: normal;\n}\n\n.sidebar__project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.sidebar__project-section-title {\n  text-transform: uppercase;\n  font-size: 2.5rem;\n  color: var(--header-footer-background);\n}\n\n.sidebar__project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.sidebar__project-container-button, .inbox__project-container-button {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n  text-transform: uppercase;\n  color: var(--header-footer-background);\n  padding: 1rem 2rem;\n  background: none;\n  border: none;\n  transition: all .3s linear;\n  border-radius: 1rem;\n  width: 100%;\n}\n\n.sidebar__project-container-add, .inbox__project-container-add {\n  height: 2rem;\n}\n/* SIDEBAR END */\n\n\n\n/* MAIN START */\n.main {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  padding: 0 10rem;\n}\n\n.inbox-section, .today-section, .this-week-section {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 3rem 0;\n  gap: 3rem;\n  max-width: 1024px;\n}\n\n.inbox-section__title, .today-section__title, .this-week-section__title {\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n  gap: 2rem;\n}\n/* MAIN END */\n\n\n\n/* FOOTER START */\n.footer {\n  width: 100%;\n  height: var(--footer-height);\n  background: var(--header-footer-background);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  grid-area: footer;\n  padding: 1rem;\n}\n\n.footer__copyright {\n  color: var(--main-text-color);\n  font-size: 2rem;\n  text-align: center;\n}\n\n.footer__icon {\n  transition: all .3s linear;\n  background: url(../images/github.svg) no-repeat center / contain;\n  display: block;\n  height: 100%;\n  width: 3rem;\n}\n/* FOOTER END */\n\n\n\n/* ADD FORM START */\n.add-form {\n  display: grid;\n  grid-template-areas:\n  \"input input\"\n  \"submit reset\";\n  gap: 2rem;\n  width: 100%;\n}\n\n.add-form__input {\n  grid-area: input;\n  border-radius: .5rem;\n  padding: 1rem;\n  font-size: 2rem;\n  width: 100%;\n  border: none;\n  outline: 1px solid var(--header-footer-background);\n}\n\n.add-form__input:invalid {\n  outline: 1px solid red;\n}\n\n.add-form__input:valid {\n  outline: 1px solid green;\n}\n\n.add-form__submit, .add-form__reset {\n  text-transform: uppercase;\n  font-size: 1.5rem;\n  padding: 1rem 2rem;\n  border-radius: .5rem;\n  border: 1px solid var(--header-footer-background);\n  transition: all .2s linear;\n}\n\n.add-form__submit {\n  grid-area: submit;\n  background: lightgreen;\n}\n\n.add-form__reset {\n  grid-area: reset;\n  background: lightcoral;\n}\n/* ADD FORM END */\n\n\n\n/* TASK START */\n.task {\n  width: 100%;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 1rem;\n  transition: all .2s linear;\n}\n\n.task__first-section, .task__second-section {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.task__check {\n  width: 2.5rem;\n  height: 2.5rem;\n  background: transparent;\n  border: 2px solid var(--header-footer-background);\n  border-radius: 50%;\n}\n\n.task__title {\n  font-size: 2rem;\n  font-weight: 400;\n  max-width: 300px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.task__title_done {\n  text-decoration: line-through;\n}\n\n.task__no-date {\n  font-size: 2rem;\n}\n\n.task__date {\n  font-size: 1.5rem;\n  border-radius: .5rem;\n  border: 1px solid var(--header-footer-background);\n  padding: .5rem;\n}\n\n.task__delete, .project__delete {\n  width: 3rem;\n  height: 3rem;\n  border: none;\n  visibility: hidden;\n  opacity: 0;\n  background: url(../images/exit.svg) no-repeat center / contain;\n  transition: all .2s linear;\n}\n/* TASK END */\n\n\n\n/* PROJECT START */\n.project {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  border-radius: 1rem;\n  border: none;\n  padding: 1rem 2rem;\n  transition: all .2s linear;\n  background: none;\n}\n\n.project__left-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  text-transform: uppercase;\n}\n\n.project__left-section-icon {\n  width: 3rem;\n  height: 3rem;\n}\n\n.project__left-section-title {\n  font-weight: 400;\n}\n\n.project__delete {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n/* PROJECT END */\n\n\n\n/* ACTIVE STATES START*/\n.sidebar__todo-div_active {\n  background: var(--main-text-color);\n}\n\n.sidebar__todo-div_active .sidebar__todo-div-title, .sidebar__todo-div_active .project__left-section-title {\n  font-weight: bold;\n}\n\n.task__check_active {\n  background: var(--header-footer-background);\n}\n/* ACTIVE STATES END */\n\n\n\n/* HOVERS START */\n@media (hover: hover) {\n  .sidebar__todo-div:hover, .sidebar__project-container-button:hover {\n    background: var(--main-text-color);\n    cursor: pointer;\n  }\n\n  .add-form__submit:hover {\n    cursor: pointer;\n    background: green;\n    color: var(--main-text-color);\n  }\n\n  .add-form__reset:hover {\n    cursor: pointer;\n    background: red;\n    color: var(--main-text-color);\n  }\n\n  .inbox__project-container-button:hover {\n    cursor: pointer;\n    background: var(--sidebar-background);\n  }\n\n  .task:hover {\n    background: var(--sidebar-background);\n  }\n\n  .project:hover {\n    cursor: pointer;\n    background: var(--main-text-color);\n  }\n\n  .task:hover .task__delete, .project:hover .project__delete {\n    visibility: unset;\n    opacity: unset;\n  }\n\n  .task__delete:hover , .task__no-date:hover, .task__check:hover, .task__date:hover, .project__delete:hover {\n    cursor: pointer;\n  }\n}\n/* HOVERS END */\n"],"sourceRoot":""}]);
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
/* harmony import */ var _inboxAddForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inboxAddForm */ "./src/inboxAddForm.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");




const createInboxSection = (() => {
  const inboxSection = document.createElement('section')
  inboxSection.className = 'inbox-section'

  const inboxSectionTitle = document.createElement('h2')
  inboxSectionTitle.className = 'inbox-section__title'
  inboxSectionTitle.textContent = 'inbox'

  _inboxAddButton__WEBPACK_IMPORTED_MODULE_0__["default"].querySelector('.inbox__project-container-title').textContent = 'add task'

  inboxSection.append(inboxSectionTitle, _inboxAddButton__WEBPACK_IMPORTED_MODULE_0__["default"])

  _inboxAddButton__WEBPACK_IMPORTED_MODULE_0__["default"].addEventListener('click', () => {
    _inboxAddButton__WEBPACK_IMPORTED_MODULE_0__["default"].remove()
    inboxSection.append(_inboxAddForm__WEBPACK_IMPORTED_MODULE_1__["default"])
  })

  const attachListenersToNewTask = (newTask) => {
    const checkCircle = newTask.querySelector('.task__check')
    const taskTitle = newTask.querySelector('.task__title')
    const noDateText = newTask.querySelector('.task__no-date')
    const secondSection = newTask.querySelector('.task__second-section')
    const deleteButton = newTask.querySelector('.task__delete')

    taskTitle.textContent = _inboxAddForm__WEBPACK_IMPORTED_MODULE_1__["default"].querySelector('.add-form__input').value

    checkCircle.addEventListener('click', () => {
      checkCircle.classList.toggle('task__check_active')
      taskTitle.classList.toggle('task__title_done')
    })

    noDateText.addEventListener('click', () => {
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

    deleteButton.addEventListener('click', () => {
      newTask.remove()
    })
  }

  const closeFormOpenButton = (e) => {
    const { target } = e
    if (e.type === 'submit') {
      e.preventDefault()
      const newTask = _task__WEBPACK_IMPORTED_MODULE_2__["default"].cloneNode(true)
      attachListenersToNewTask(newTask)
      inboxSection.insertBefore(newTask, inboxSectionTitle.nextElementSibling)
      target.reset()
    }
    target.remove()
    inboxSection.append(_inboxAddButton__WEBPACK_IMPORTED_MODULE_0__["default"])
  }

  _inboxAddForm__WEBPACK_IMPORTED_MODULE_1__["default"].addEventListener('submit', closeFormOpenButton)
  _inboxAddForm__WEBPACK_IMPORTED_MODULE_1__["default"].addEventListener('reset', closeFormOpenButton)

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


const createMain = (() => {
  const main = document.createElement('main')
  main.className = 'main'

  main.append(_inboxSection__WEBPACK_IMPORTED_MODULE_0__["default"])

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






const changeMainState = (sidebarButton) => {
  if (sidebarButton.classList.contains('sidebar__todo-div_active')) return
  document.querySelector('.sidebar__todo-div_active').classList.remove('sidebar__todo-div_active')
  sidebarButton.classList.add('sidebar__todo-div_active')

  _main__WEBPACK_IMPORTED_MODULE_0__["default"].innerHTML = ''

  const identifier = sidebarButton.id
  if (identifier === 'inbox') {
    _main__WEBPACK_IMPORTED_MODULE_0__["default"].append(_inboxSection__WEBPACK_IMPORTED_MODULE_1__["default"])
  } else if (identifier === 'today') {
    _main__WEBPACK_IMPORTED_MODULE_0__["default"].append(_todaySection__WEBPACK_IMPORTED_MODULE_2__["default"])
  } else if (identifier === 'this-week') {
    _main__WEBPACK_IMPORTED_MODULE_0__["default"].append(_thisWeekSection__WEBPACK_IMPORTED_MODULE_3__["default"])
  } else {
    const inboxSectionClone = _inboxSection__WEBPACK_IMPORTED_MODULE_1__["default"].cloneNode(true)
    inboxSectionClone.id = identifier
    inboxSectionClone.querySelector('.inbox-section__title').textContent = identifier.replace(/-/g, /\s/)
    inboxSectionClone.querySelectorAll('.task').forEach((task) => task.remove())
    sidebarButton.querySelector('.project__delete').addEventListener('click', () => {
      _main__WEBPACK_IMPORTED_MODULE_0__["default"].innerHTML = ''
    })
    _main__WEBPACK_IMPORTED_MODULE_0__["default"].append(inboxSectionClone)
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

    deleteButton.addEventListener('click', () => {
      newProject.remove()
    })

    const newMainSectionTitle = _sidebarAddForm__WEBPACK_IMPORTED_MODULE_1__["default"].querySelector('.add-form__input').value

    newProject.id = newMainSectionTitle.replace(/\W+/g, '-').toUpperCase()

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
    contentDiv.id = content.title.replace(/\s/, '-')

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLGVBQWUsV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssYUFBYSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsS0FBSyxhQUFhLFlBQVksTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLGVBQWUsV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1B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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUMyQjs7QUFFM0I7QUFDNkI7QUFDRTtBQUNOO0FBQ0k7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLCtDQUFNO0FBQ3ZCLGlCQUFpQixnREFBTztBQUN4QixpQkFBaUIsNkNBQUk7QUFDckIsaUJBQWlCLCtDQUFNOztBQUV2QjtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5ib3hBZGRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luYm94QWRkRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5ib3hTZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyQWRkQnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyQWRkRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhckNoYW5nZU1haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGViYXJQcm9qZWN0U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhclRvZG9TZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90aGlzV2Vla1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZGF5U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2dpdGh1Yi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZXhpdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogTk9STUFMSVpJTkcgU1RBUlQgKi9cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbiAgLS1tYWluLXRleHQtY29sb3I6ICNmZmY7XFxuICAtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZDogIzMzMztcXG4gIC0taGVhZGVyLWhlaWdodDogY2xhbXAoMTJyZW0sIDE1dmgsIDI1cmVtKTtcXG4gIC0tc2lkZWJhci13aWR0aDogY2xhbXAoMjUwcHgsIDIwdncsIDQwMHB4KTtcXG4gIC0tZm9vdGVyLWhlaWdodDogY2xhbXAoNTBweCwgNXZoLCAxMDBweCk7XFxuICAtLXNpZGViYXItYmFja2dyb3VuZDogI2RkZDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcbi8qIE5PUk1BTElaSU5HIEVORCAqL1xcblxcblxcblxcbi8qIENPTlRFTlQgU1RBUlQgKi9cXG4uY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxuICBcXFwic2lkZWJhciBtYWluIG1haW5cXFwiXFxuICBcXFwiZm9vdGVyIGZvb3RlciBmb290ZXJcXFwiO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1oZWFkZXItaGVpZ2h0KSAxZnIgdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXNpZGViYXItd2lkdGgpIDFmcjtcXG59XFxuLyogQ09OVEVOVCBFTkQgKi9cXG5cXG5cXG5cXG4vKiBIRUFERVIgU1RBUlQgKi9cXG4uaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nOiAycmVtIDRyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogM3JlbTtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbn1cXG5cXG4uaGVhZGVyX19pY29uIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5oZWFkZXJfX3RpdGxlIHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcbi8qIEhFQURFUiBFTkQgKi9cXG5cXG5cXG5cXG4vKiBTSURFQkFSIFNUQVJUICovXFxuLnNpZGViYXIge1xcbiAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG4gIHdpZHRoOiB2YXIoLS1zaWRlYmFyLXdpZHRoKTtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHJlbTtcXG59XFxuXFxuLnNpZGViYXJfX3RvZG8tc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLnNpZGViYXJfX3RvZG8tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwIDFyZW0gMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5zaWRlYmFyX190b2RvLWRpdi1pbWFnZSB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uc2lkZWJhcl9fdG9kby1kaXYtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uc2lkZWJhcl9fcHJvamVjdC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzcmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9fcHJvamVjdC1zZWN0aW9uLXRpdGxlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uc2lkZWJhcl9fcHJvamVjdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24sIC5pbmJveF9fcHJvamVjdC1jb250YWluZXItYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2lkZWJhcl9fcHJvamVjdC1jb250YWluZXItYWRkLCAuaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLWFkZCB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcbi8qIFNJREVCQVIgRU5EICovXFxuXFxuXFxuXFxuLyogTUFJTiBTVEFSVCAqL1xcbi5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTByZW07XFxufVxcblxcbi5pbmJveC1zZWN0aW9uLCAudG9kYXktc2VjdGlvbiwgLnRoaXMtd2Vlay1zZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogM3JlbSAwO1xcbiAgZ2FwOiAzcmVtO1xcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XFxufVxcblxcbi5pbmJveC1zZWN0aW9uX190aXRsZSwgLnRvZGF5LXNlY3Rpb25fX3RpdGxlLCAudGhpcy13ZWVrLXNlY3Rpb25fX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG4vKiBNQUlOIEVORCAqL1xcblxcblxcblxcbi8qIEZPT1RFUiBTVEFSVCAqL1xcbi5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mb290ZXJfX2NvcHlyaWdodCB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlcl9faWNvbiB7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAzcmVtO1xcbn1cXG4vKiBGT09URVIgRU5EICovXFxuXFxuXFxuXFxuLyogQUREIEZPUk0gU1RBUlQgKi9cXG4uYWRkLWZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICBcXFwiaW5wdXQgaW5wdXRcXFwiXFxuICBcXFwic3VibWl0IHJlc2V0XFxcIjtcXG4gIGdhcDogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLWZvcm1fX2lucHV0IHtcXG4gIGdyaWQtYXJlYTogaW5wdXQ7XFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBmb250LXNpemU6IDJyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uYWRkLWZvcm1fX2lucHV0OmludmFsaWQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmFkZC1mb3JtX19pbnB1dDp2YWxpZCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgZ3JlZW47XFxufVxcblxcbi5hZGQtZm9ybV9fc3VibWl0LCAuYWRkLWZvcm1fX3Jlc2V0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbn1cXG5cXG4uYWRkLWZvcm1fX3N1Ym1pdCB7XFxuICBncmlkLWFyZWE6IHN1Ym1pdDtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XFxufVxcblxcbi5hZGQtZm9ybV9fcmVzZXQge1xcbiAgZ3JpZC1hcmVhOiByZXNldDtcXG4gIGJhY2tncm91bmQ6IGxpZ2h0Y29yYWw7XFxufVxcbi8qIEFERCBGT1JNIEVORCAqL1xcblxcblxcblxcbi8qIFRBU0sgU1RBUlQgKi9cXG4udGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbn1cXG5cXG4udGFza19fZmlyc3Qtc2VjdGlvbiwgLnRhc2tfX3NlY29uZC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrX19jaGVjayB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi50YXNrX190aXRsZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi50YXNrX190aXRsZV9kb25lIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4udGFza19fbm8tZGF0ZSB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi50YXNrX19kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbiAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi50YXNrX19kZWxldGUsIC5wcm9qZWN0X19kZWxldGUge1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbn1cXG4vKiBUQVNLIEVORCAqL1xcblxcblxcblxcbi8qIFBST0pFQ1QgU1RBUlQgKi9cXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnByb2plY3RfX2xlZnQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLnByb2plY3RfX2xlZnQtc2VjdGlvbi1pY29uIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4ucHJvamVjdF9fbGVmdC1zZWN0aW9uLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5wcm9qZWN0X19kZWxldGUge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbn1cXG4vKiBQUk9KRUNUIEVORCAqL1xcblxcblxcblxcbi8qIEFDVElWRSBTVEFURVMgU1RBUlQqL1xcbi5zaWRlYmFyX190b2RvLWRpdl9hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLnNpZGViYXJfX3RvZG8tZGl2X2FjdGl2ZSAuc2lkZWJhcl9fdG9kby1kaXYtdGl0bGUsIC5zaWRlYmFyX190b2RvLWRpdl9hY3RpdmUgLnByb2plY3RfX2xlZnQtc2VjdGlvbi10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhc2tfX2NoZWNrX2FjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbn1cXG4vKiBBQ1RJVkUgU1RBVEVTIEVORCAqL1xcblxcblxcblxcbi8qIEhPVkVSUyBTVEFSVCAqL1xcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAuc2lkZWJhcl9fdG9kby1kaXY6aG92ZXIsIC5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAuYWRkLWZvcm1fX3N1Ym1pdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgfVxcblxcbiAgLmFkZC1mb3JtX19yZXNldDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5pbmJveF9fcHJvamVjdC1jb250YWluZXItYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgfVxcblxcbiAgLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgfVxcblxcbiAgLnByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICB9XFxuXFxuICAudGFzazpob3ZlciAudGFza19fZGVsZXRlLCAucHJvamVjdDpob3ZlciAucHJvamVjdF9fZGVsZXRlIHtcXG4gICAgdmlzaWJpbGl0eTogdW5zZXQ7XFxuICAgIG9wYWNpdHk6IHVuc2V0O1xcbiAgfVxcblxcbiAgLnRhc2tfX2RlbGV0ZTpob3ZlciAsIC50YXNrX19uby1kYXRlOmhvdmVyLCAudGFza19fY2hlY2s6aG92ZXIsIC50YXNrX19kYXRlOmhvdmVyLCAucHJvamVjdF9fZGVsZXRlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG4vKiBIT1ZFUlMgRU5EICovXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsc0JBQXNCO0FBQ3RCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQywwQ0FBMEM7RUFDMUMsMENBQTBDO0VBQzFDLHdDQUF3QztFQUN4QywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxtSkFBbUo7QUFDcko7QUFDQSxvQkFBb0I7Ozs7QUFJcEIsa0JBQWtCO0FBQ2xCO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2I7Ozt3QkFHc0I7RUFDdEIsaUVBQWlFO0VBQ2pFLCtDQUErQztBQUNqRDtBQUNBLGdCQUFnQjs7OztBQUloQixpQkFBaUI7QUFDakI7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLDJDQUEyQztFQUMzQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFDQSxlQUFlOzs7O0FBSWYsa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQywyQkFBMkI7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Q2hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBQ0EsZUFBZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBOT1JNQUxJWklORyBTVEFSVCAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAtLW1haW4tdGV4dC1jb2xvcjogI2ZmZjtcXG4gIC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kOiAjMzMzO1xcbiAgLS1oZWFkZXItaGVpZ2h0OiBjbGFtcCgxMnJlbSwgMTV2aCwgMjVyZW0pO1xcbiAgLS1zaWRlYmFyLXdpZHRoOiBjbGFtcCgyNTBweCwgMjB2dywgNDAwcHgpO1xcbiAgLS1mb290ZXItaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dmgsIDEwMHB4KTtcXG4gIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiAjZGRkO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuLyogTk9STUFMSVpJTkcgRU5EICovXFxuXFxuXFxuXFxuLyogQ09OVEVOVCBTVEFSVCAqL1xcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXG4gIFxcXCJzaWRlYmFyIG1haW4gbWFpblxcXCJcXG4gIFxcXCJmb290ZXIgZm9vdGVyIGZvb3RlclxcXCI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHZhcigtLWhlYWRlci1oZWlnaHQpIDFmciB2YXIoLS1mb290ZXItaGVpZ2h0KTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tc2lkZWJhci13aWR0aCkgMWZyO1xcbn1cXG4vKiBDT05URU5UIEVORCAqL1xcblxcblxcblxcbi8qIEhFQURFUiBTVEFSVCAqL1xcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIHBhZGRpbmc6IDJyZW0gNHJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAzcmVtO1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxufVxcblxcbi5oZWFkZXJfX2ljb24ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcXG59XFxuXFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuLyogSEVBREVSIEVORCAqL1xcblxcblxcblxcbi8qIFNJREVCQVIgU1RBUlQgKi9cXG4uc2lkZWJhciB7XFxuICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9fdG9kby1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9fdG9kby1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnNpZGViYXJfX3RvZG8tZGl2LWltYWdlIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5zaWRlYmFyX190b2RvLWRpdi10aXRsZSB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LXNlY3Rpb24tdGl0bGUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLnNpZGViYXJfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbiwgLmluYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci1hZGQsIC5pbmJveF9fcHJvamVjdC1jb250YWluZXItYWRkIHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLyogU0lERUJBUiBFTkQgKi9cXG5cXG5cXG5cXG4vKiBNQUlOIFNUQVJUICovXFxuLm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxMHJlbTtcXG59XFxuXFxuLmluYm94LXNlY3Rpb24sIC50b2RheS1zZWN0aW9uLCAudGhpcy13ZWVrLXNlY3Rpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcmVtIDA7XFxuICBnYXA6IDNyZW07XFxuICBtYXgtd2lkdGg6IDEwMjRweDtcXG59XFxuXFxuLmluYm94LXNlY3Rpb25fX3RpdGxlLCAudG9kYXktc2VjdGlvbl9fdGl0bGUsIC50aGlzLXdlZWstc2VjdGlvbl9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XFxuICBnYXA6IDJyZW07XFxufVxcbi8qIE1BSU4gRU5EICovXFxuXFxuXFxuXFxuLyogRk9PVEVSIFNUQVJUICovXFxuLmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0tZm9vdGVyLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmZvb3Rlcl9fY29weXJpZ2h0IHtcXG4gIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyX19pY29uIHtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgbGluZWFyO1xcbiAgYmFja2dyb3VuZDogdXJsKC4uL2ltYWdlcy9naXRodWIuc3ZnKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDNyZW07XFxufVxcbi8qIEZPT1RFUiBFTkQgKi9cXG5cXG5cXG5cXG4vKiBBREQgRk9STSBTVEFSVCAqL1xcbi5hZGQtZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gIFxcXCJpbnB1dCBpbnB1dFxcXCJcXG4gIFxcXCJzdWJtaXQgcmVzZXRcXFwiO1xcbiAgZ2FwOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtZm9ybV9faW5wdXQge1xcbiAgZ3JpZC1hcmVhOiBpbnB1dDtcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5hZGQtZm9ybV9faW5wdXQ6aW52YWxpZCB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4uYWRkLWZvcm1fX2lucHV0OnZhbGlkIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmFkZC1mb3JtX19zdWJtaXQsIC5hZGQtZm9ybV9fcmVzZXQge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XFxufVxcblxcbi5hZGQtZm9ybV9fc3VibWl0IHtcXG4gIGdyaWQtYXJlYTogc3VibWl0O1xcbiAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXG59XFxuXFxuLmFkZC1mb3JtX19yZXNldCB7XFxuICBncmlkLWFyZWE6IHJlc2V0O1xcbiAgYmFja2dyb3VuZDogbGlnaHRjb3JhbDtcXG59XFxuLyogQUREIEZPUk0gRU5EICovXFxuXFxuXFxuXFxuLyogVEFTSyBTVEFSVCAqL1xcbi50YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XFxufVxcblxcbi50YXNrX19maXJzdC1zZWN0aW9uLCAudGFza19fc2Vjb25kLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tfX2NoZWNrIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnRhc2tfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnRhc2tfX3RpdGxlX2RvbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi50YXNrX19uby1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnRhc2tfX2RhdGUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nOiAuNXJlbTtcXG59XFxuXFxuLnRhc2tfX2RlbGV0ZSwgLnByb2plY3RfX2RlbGV0ZSB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2V4aXQuc3ZnKSBuby1yZXBlYXQgY2VudGVyIC8gY29udGFpbjtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbn1cXG4vKiBUQVNLIEVORCAqL1xcblxcblxcblxcbi8qIFBST0pFQ1QgU1RBUlQgKi9cXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgbGluZWFyO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnByb2plY3RfX2xlZnQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLnByb2plY3RfX2xlZnQtc2VjdGlvbi1pY29uIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbn1cXG5cXG4ucHJvamVjdF9fbGVmdC1zZWN0aW9uLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5wcm9qZWN0X19kZWxldGUge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbn1cXG4vKiBQUk9KRUNUIEVORCAqL1xcblxcblxcblxcbi8qIEFDVElWRSBTVEFURVMgU1RBUlQqL1xcbi5zaWRlYmFyX190b2RvLWRpdl9hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLnNpZGViYXJfX3RvZG8tZGl2X2FjdGl2ZSAuc2lkZWJhcl9fdG9kby1kaXYtdGl0bGUsIC5zaWRlYmFyX190b2RvLWRpdl9hY3RpdmUgLnByb2plY3RfX2xlZnQtc2VjdGlvbi10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhc2tfX2NoZWNrX2FjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbn1cXG4vKiBBQ1RJVkUgU1RBVEVTIEVORCAqL1xcblxcblxcblxcbi8qIEhPVkVSUyBTVEFSVCAqL1xcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAuc2lkZWJhcl9fdG9kby1kaXY6aG92ZXIsIC5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAuYWRkLWZvcm1fX3N1Ym1pdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgfVxcblxcbiAgLmFkZC1mb3JtX19yZXNldDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5pbmJveF9fcHJvamVjdC1jb250YWluZXItYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgfVxcblxcbiAgLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgfVxcblxcbiAgLnByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICB9XFxuXFxuICAudGFzazpob3ZlciAudGFza19fZGVsZXRlLCAucHJvamVjdDpob3ZlciAucHJvamVjdF9fZGVsZXRlIHtcXG4gICAgdmlzaWJpbGl0eTogdW5zZXQ7XFxuICAgIG9wYWNpdHk6IHVuc2V0O1xcbiAgfVxcblxcbiAgLnRhc2tfX2RlbGV0ZTpob3ZlciAsIC50YXNrX19uby1kYXRlOmhvdmVyLCAudGFza19fY2hlY2s6aG92ZXIsIC50YXNrX19kYXRlOmhvdmVyLCAucHJvamVjdF9fZGVsZXRlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG4vKiBIT1ZFUlMgRU5EICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVGb290ZXIgPSAoKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBBYnV6YXIgTWFtZWRvdmBcblxuICBjb25zdCBmb290ZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gIGZvb3Rlckljb24uY2xhc3NOYW1lID0gJ2Zvb3Rlcl9faWNvbidcbiAgZm9vdGVySWNvbi5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9EYW5pZWxlRGVmb2UnXG4gIGZvb3Rlckljb24udGFyZ2V0ID0gJ19ibGFuaydcbiAgZm9vdGVySWNvbi5yZWwgPSAnbm9yZWZlcnJlciBub29wZW5lciBub2ZvbGxvdydcblxuICBmb290ZXIuY2xhc3NOYW1lID0gJ2Zvb3RlcidcbiAgY29weXJpZ2h0LmNsYXNzTmFtZSA9ICdmb290ZXJfX2NvcHlyaWdodCdcblxuICBmb290ZXIuYXBwZW5kKGNvcHlyaWdodClcbiAgZm9vdGVyLmFwcGVuZChmb290ZXJJY29uKVxuXG4gIHJldHVybiBmb290ZXJcbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyXG4iLCJpbXBvcnQgSWNvbiBmcm9tICcuL2ltYWdlcy9oZWFkZXItaWNvbi5zdmcnXG4vLyBJSUZFXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICBoZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcidcblxuICBjb25zdCBoZWFkZXJJY29uID0gbmV3IEltYWdlKClcbiAgaGVhZGVySWNvbi5jbGFzc05hbWUgPSAnaGVhZGVyX19pY29uJ1xuICBoZWFkZXJJY29uLnNyYyA9IEljb25cblxuICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgaGVhZGVyVGl0bGUuY2xhc3NOYW1lID0gJ2hlYWRlcl9fdGl0bGUnXG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gJ3RvZG8gbGlzdCdcblxuICBoZWFkZXIuYXBwZW5kKGhlYWRlckljb24pXG4gIGhlYWRlci5hcHBlbmQoaGVhZGVyVGl0bGUpXG5cbiAgcmV0dXJuIGhlYWRlclxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIZWFkZXJcbiIsImltcG9ydCBBZGRQcm9qZWN0SWNvbiBmcm9tICcuL2ltYWdlcy9hZGQtcHJvamVjdC5zdmcnXG5cbmNvbnN0IGNyZWF0ZUFkZEJ1dHRvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTmFtZSA9ICdpbmJveF9fcHJvamVjdC1jb250YWluZXItYnV0dG9uJ1xuXG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b25JY29uID0gbmV3IEltYWdlKClcbiAgYWRkUHJvamVjdEJ1dHRvbkljb24uY2xhc3NOYW1lID0gJ2luYm94X19wcm9qZWN0LWNvbnRhaW5lci1hZGQnXG4gIGFkZFByb2plY3RCdXR0b25JY29uLnNyYyA9IEFkZFByb2plY3RJY29uXG5cbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBhZGRQcm9qZWN0QnV0dG9uVGl0bGUuY2xhc3NOYW1lID0gJ2luYm94X19wcm9qZWN0LWNvbnRhaW5lci10aXRsZSdcblxuICBhZGRQcm9qZWN0QnV0dG9uLmFwcGVuZChhZGRQcm9qZWN0QnV0dG9uSWNvbiwgYWRkUHJvamVjdEJ1dHRvblRpdGxlKVxuXG4gIHJldHVybiBhZGRQcm9qZWN0QnV0dG9uXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkZEJ1dHRvblxuIiwiY29uc3QgY3JlYXRlQWRkRm9ybSA9ICgoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgZm9ybS5jbGFzc05hbWUgPSAnYWRkLWZvcm0nXG4gIGZvcm0uaWQgPSAnaW5ib3gtZm9ybSdcblxuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIHByb2plY3RJbnB1dC5jbGFzc05hbWUgPSAnYWRkLWZvcm1fX2lucHV0J1xuICBwcm9qZWN0SW5wdXQuaWQgPSAnaW5ib3gtZm9ybV9faW5wdXQnXG4gIHByb2plY3RJbnB1dC5uYW1lID0gJ2luYm94LWZvcm1fX2lucHV0J1xuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsIHRydWUpXG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsIDEpXG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgc3VibWl0QnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtZm9ybV9fc3VibWl0J1xuICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnXG4gIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdhZGQnXG4gIHN1Ym1pdEJ1dHRvbi5pZCA9ICdpbmJveC1zdWJtaXQnXG5cbiAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICByZXNldEJ1dHRvbi5jbGFzc05hbWUgPSAnYWRkLWZvcm1fX3Jlc2V0J1xuICByZXNldEJ1dHRvbi50eXBlID0gJ3Jlc2V0J1xuICByZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9ICdjYW5jZWwnXG4gIHJlc2V0QnV0dG9uLmlkID0gJ2luYm94LXJlc2V0J1xuXG4gIGZvcm0uYXBwZW5kKHByb2plY3RJbnB1dCwgc3VibWl0QnV0dG9uLCByZXNldEJ1dHRvbilcblxuICByZXR1cm4gZm9ybVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGRGb3JtXG4iLCJpbXBvcnQgYWRkQnV0dG9uIGZyb20gJy4vaW5ib3hBZGRCdXR0b24nXG5pbXBvcnQgYWRkRm9ybSBmcm9tICcuL2luYm94QWRkRm9ybSdcbmltcG9ydCB0YXNrIGZyb20gJy4vdGFzaydcblxuY29uc3QgY3JlYXRlSW5ib3hTZWN0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgaW5ib3hTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gIGluYm94U2VjdGlvbi5jbGFzc05hbWUgPSAnaW5ib3gtc2VjdGlvbidcblxuICBjb25zdCBpbmJveFNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgaW5ib3hTZWN0aW9uVGl0bGUuY2xhc3NOYW1lID0gJ2luYm94LXNlY3Rpb25fX3RpdGxlJ1xuICBpbmJveFNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9ICdpbmJveCdcblxuICBhZGRCdXR0b24ucXVlcnlTZWxlY3RvcignLmluYm94X19wcm9qZWN0LWNvbnRhaW5lci10aXRsZScpLnRleHRDb250ZW50ID0gJ2FkZCB0YXNrJ1xuXG4gIGluYm94U2VjdGlvbi5hcHBlbmQoaW5ib3hTZWN0aW9uVGl0bGUsIGFkZEJ1dHRvbilcblxuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkQnV0dG9uLnJlbW92ZSgpXG4gICAgaW5ib3hTZWN0aW9uLmFwcGVuZChhZGRGb3JtKVxuICB9KVxuXG4gIGNvbnN0IGF0dGFjaExpc3RlbmVyc1RvTmV3VGFzayA9IChuZXdUYXNrKSA9PiB7XG4gICAgY29uc3QgY2hlY2tDaXJjbGUgPSBuZXdUYXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrX19jaGVjaycpXG4gICAgY29uc3QgdGFza1RpdGxlID0gbmV3VGFzay5xdWVyeVNlbGVjdG9yKCcudGFza19fdGl0bGUnKVxuICAgIGNvbnN0IG5vRGF0ZVRleHQgPSBuZXdUYXNrLnF1ZXJ5U2VsZWN0b3IoJy50YXNrX19uby1kYXRlJylcbiAgICBjb25zdCBzZWNvbmRTZWN0aW9uID0gbmV3VGFzay5xdWVyeVNlbGVjdG9yKCcudGFza19fc2Vjb25kLXNlY3Rpb24nKVxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG5ld1Rhc2sucXVlcnlTZWxlY3RvcignLnRhc2tfX2RlbGV0ZScpXG5cbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybV9faW5wdXQnKS52YWx1ZVxuXG4gICAgY2hlY2tDaXJjbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjaGVja0NpcmNsZS5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrX19jaGVja19hY3RpdmUnKVxuICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC50b2dnbGUoJ3Rhc2tfX3RpdGxlX2RvbmUnKVxuICAgIH0pXG5cbiAgICBub0RhdGVUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbm9EYXRlVGV4dC5yZW1vdmUoKVxuICAgICAgY29uc3QgY2FsZW5kYXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgIGNhbGVuZGFySW5wdXQudHlwZSA9ICdkYXRlJ1xuICAgICAgY2FsZW5kYXJJbnB1dC5jbGFzc05hbWUgPSAndGFza19fZGF0ZSdcbiAgICAgIGNhbGVuZGFySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBub0RhdGVUZXh0LnRleHRDb250ZW50ID0gY2FsZW5kYXJJbnB1dC52YWx1ZS5zcGxpdCgnLScpLnJldmVyc2UoKS5qb2luKCcvJylcbiAgICAgICAgY2FsZW5kYXJJbnB1dC5yZW1vdmUoKVxuICAgICAgICBzZWNvbmRTZWN0aW9uLnByZXBlbmQobm9EYXRlVGV4dClcbiAgICAgIH0pXG4gICAgICBzZWNvbmRTZWN0aW9uLnByZXBlbmQoY2FsZW5kYXJJbnB1dClcbiAgICB9KVxuXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbmV3VGFzay5yZW1vdmUoKVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBjbG9zZUZvcm1PcGVuQnV0dG9uID0gKGUpID0+IHtcbiAgICBjb25zdCB7IHRhcmdldCB9ID0gZVxuICAgIGlmIChlLnR5cGUgPT09ICdzdWJtaXQnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrLmNsb25lTm9kZSh0cnVlKVxuICAgICAgYXR0YWNoTGlzdGVuZXJzVG9OZXdUYXNrKG5ld1Rhc2spXG4gICAgICBpbmJveFNlY3Rpb24uaW5zZXJ0QmVmb3JlKG5ld1Rhc2ssIGluYm94U2VjdGlvblRpdGxlLm5leHRFbGVtZW50U2libGluZylcbiAgICAgIHRhcmdldC5yZXNldCgpXG4gICAgfVxuICAgIHRhcmdldC5yZW1vdmUoKVxuICAgIGluYm94U2VjdGlvbi5hcHBlbmQoYWRkQnV0dG9uKVxuICB9XG5cbiAgYWRkRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBjbG9zZUZvcm1PcGVuQnV0dG9uKVxuICBhZGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgY2xvc2VGb3JtT3BlbkJ1dHRvbilcblxuICByZXR1cm4gaW5ib3hTZWN0aW9uXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUluYm94U2VjdGlvblxuIiwiaW1wb3J0IGluYm94U2VjdGlvbiBmcm9tICcuL2luYm94U2VjdGlvbidcblxuY29uc3QgY3JlYXRlTWFpbiA9ICgoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgbWFpbi5jbGFzc05hbWUgPSAnbWFpbidcblxuICBtYWluLmFwcGVuZChpbmJveFNlY3Rpb24pXG5cbiAgcmV0dXJuIG1haW5cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWFpblxuIiwiaW1wb3J0IHByb2plY3RJY29uIGZyb20gJy4vaW1hZ2VzL3Byb2plY3QtaWNvbi5zdmcnXG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgcHJvamVjdC5jbGFzc05hbWUgPSAncHJvamVjdCdcblxuICBjb25zdCBsZWZ0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGxlZnRTZWN0aW9uLmNsYXNzTmFtZSA9ICdwcm9qZWN0X19sZWZ0LXNlY3Rpb24nXG4gIGNvbnN0IGxlZnRTZWN0aW9uSWNvbiA9IG5ldyBJbWFnZSgpXG4gIGxlZnRTZWN0aW9uSWNvbi5jbGFzc05hbWUgPSAncHJvamVjdF9fbGVmdC1zZWN0aW9uLWljb24nXG4gIGxlZnRTZWN0aW9uSWNvbi5zcmMgPSBwcm9qZWN0SWNvblxuICBjb25zdCBsZWZ0U2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBsZWZ0U2VjdGlvblRpdGxlLmNsYXNzTmFtZSA9ICdwcm9qZWN0X19sZWZ0LXNlY3Rpb24tdGl0bGUnXG4gIGxlZnRTZWN0aW9uLmFwcGVuZChsZWZ0U2VjdGlvbkljb24sIGxlZnRTZWN0aW9uVGl0bGUpXG5cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdwcm9qZWN0X19kZWxldGUnXG5cbiAgcHJvamVjdC5hcHBlbmQobGVmdFNlY3Rpb24sIGRlbGV0ZUJ1dHRvbilcblxuICByZXR1cm4gcHJvamVjdFxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0XG4iLCIvLyBTRUNUSU9OU1xuaW1wb3J0IHRvZG9TZWN0aW9uIGZyb20gJy4vc2lkZWJhclRvZG9TZWN0aW9uJ1xuaW1wb3J0IHByb2plY3RTZWN0aW9uIGZyb20gJy4vc2lkZWJhclByb2plY3RTZWN0aW9uJ1xuXG5jb25zdCBjcmVhdGVTaWRlYmFyID0gKCgpID0+IHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJylcbiAgc2lkZWJhci5jbGFzc05hbWUgPSAnc2lkZWJhcidcblxuICBzaWRlYmFyLmFwcGVuZCh0b2RvU2VjdGlvbiwgcHJvamVjdFNlY3Rpb24pXG5cbiAgcmV0dXJuIHNpZGViYXJcbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2lkZWJhclxuIiwiaW1wb3J0IEFkZFByb2plY3RJY29uIGZyb20gJy4vaW1hZ2VzL2FkZC1wcm9qZWN0LnN2ZydcblxuY29uc3QgY3JlYXRlQWRkQnV0dG9uID0gKCgpID0+IHtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGFkZFByb2plY3RCdXR0b24uY2xhc3NOYW1lID0gJ3NpZGViYXJfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbidcblxuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uSWNvbiA9IG5ldyBJbWFnZSgpXG4gIGFkZFByb2plY3RCdXR0b25JY29uLmNsYXNzTmFtZSA9ICdzaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci1hZGQnXG4gIGFkZFByb2plY3RCdXR0b25JY29uLnNyYyA9IEFkZFByb2plY3RJY29uXG5cbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICBhZGRQcm9qZWN0QnV0dG9uVGl0bGUuY2xhc3NOYW1lID0gJ3NpZGViYXJfX3Byb2plY3QtY29udGFpbmVyLXRpdGxlJ1xuXG4gIGFkZFByb2plY3RCdXR0b24uYXBwZW5kKGFkZFByb2plY3RCdXR0b25JY29uLCBhZGRQcm9qZWN0QnV0dG9uVGl0bGUpXG5cbiAgcmV0dXJuIGFkZFByb2plY3RCdXR0b25cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRkQnV0dG9uXG4iLCJjb25zdCBjcmVhdGVBZGRGb3JtID0gKCgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICBmb3JtLmNsYXNzTmFtZSA9ICdhZGQtZm9ybSdcbiAgZm9ybS5pZCA9ICdhZGQtZm9ybSdcblxuICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gIHByb2plY3RJbnB1dC5jbGFzc05hbWUgPSAnYWRkLWZvcm1fX2lucHV0J1xuICBwcm9qZWN0SW5wdXQuaWQgPSAnYWRkLWZvcm1fX2lucHV0J1xuICBwcm9qZWN0SW5wdXQubmFtZSA9ICdhZGQtZm9ybV9faW5wdXQnXG4gIHByb2plY3RJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdHJ1ZSlcbiAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgnbWlubGVuZ3RoJywgMSlcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBzdWJtaXRCdXR0b24uY2xhc3NOYW1lID0gJ2FkZC1mb3JtX19zdWJtaXQnXG4gIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCdcbiAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ2FkZCdcbiAgc3VibWl0QnV0dG9uLmlkID0gJ3NpZGViYXItc3VibWl0J1xuXG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgcmVzZXRCdXR0b24uY2xhc3NOYW1lID0gJ2FkZC1mb3JtX19yZXNldCdcbiAgcmVzZXRCdXR0b24udHlwZSA9ICdyZXNldCdcbiAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSAnY2FuY2VsJ1xuICByZXNldEJ1dHRvbi5pZCA9ICdzaWRlYmFyLXJlc2V0J1xuXG4gIGZvcm0uYXBwZW5kKHByb2plY3RJbnB1dCwgc3VibWl0QnV0dG9uLCByZXNldEJ1dHRvbilcblxuICByZXR1cm4gZm9ybVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGRGb3JtXG4iLCJpbXBvcnQgbWFpbiBmcm9tICcuL21haW4nXG5cbmltcG9ydCBpbmJveFNlY3Rpb24gZnJvbSAnLi9pbmJveFNlY3Rpb24nXG5pbXBvcnQgdG9kYXlTZWN0aW9uIGZyb20gJy4vdG9kYXlTZWN0aW9uJ1xuaW1wb3J0IHRoaXNXZWVrU2VjdGlvbiBmcm9tICcuL3RoaXNXZWVrU2VjdGlvbidcblxuY29uc3QgY2hhbmdlTWFpblN0YXRlID0gKHNpZGViYXJCdXR0b24pID0+IHtcbiAgaWYgKHNpZGViYXJCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyX190b2RvLWRpdl9hY3RpdmUnKSkgcmV0dXJuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX190b2RvLWRpdl9hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyX190b2RvLWRpdl9hY3RpdmUnKVxuICBzaWRlYmFyQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXJfX3RvZG8tZGl2X2FjdGl2ZScpXG5cbiAgbWFpbi5pbm5lckhUTUwgPSAnJ1xuXG4gIGNvbnN0IGlkZW50aWZpZXIgPSBzaWRlYmFyQnV0dG9uLmlkXG4gIGlmIChpZGVudGlmaWVyID09PSAnaW5ib3gnKSB7XG4gICAgbWFpbi5hcHBlbmQoaW5ib3hTZWN0aW9uKVxuICB9IGVsc2UgaWYgKGlkZW50aWZpZXIgPT09ICd0b2RheScpIHtcbiAgICBtYWluLmFwcGVuZCh0b2RheVNlY3Rpb24pXG4gIH0gZWxzZSBpZiAoaWRlbnRpZmllciA9PT0gJ3RoaXMtd2VlaycpIHtcbiAgICBtYWluLmFwcGVuZCh0aGlzV2Vla1NlY3Rpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaW5ib3hTZWN0aW9uQ2xvbmUgPSBpbmJveFNlY3Rpb24uY2xvbmVOb2RlKHRydWUpXG4gICAgaW5ib3hTZWN0aW9uQ2xvbmUuaWQgPSBpZGVudGlmaWVyXG4gICAgaW5ib3hTZWN0aW9uQ2xvbmUucXVlcnlTZWxlY3RvcignLmluYm94LXNlY3Rpb25fX3RpdGxlJykudGV4dENvbnRlbnQgPSBpZGVudGlmaWVyLnJlcGxhY2UoLy0vZywgL1xccy8pXG4gICAgaW5ib3hTZWN0aW9uQ2xvbmUucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKS5mb3JFYWNoKCh0YXNrKSA9PiB0YXNrLnJlbW92ZSgpKVxuICAgIHNpZGViYXJCdXR0b24ucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2RlbGV0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbWFpbi5pbm5lckhUTUwgPSAnJ1xuICAgIH0pXG4gICAgbWFpbi5hcHBlbmQoaW5ib3hTZWN0aW9uQ2xvbmUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlTWFpblN0YXRlXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IGFkZEJ1dHRvbiBmcm9tICcuL3NpZGViYXJBZGRCdXR0b24nXG5pbXBvcnQgYWRkRm9ybSBmcm9tICcuL3NpZGViYXJBZGRGb3JtJ1xuaW1wb3J0IHByb2plY3QgZnJvbSAnLi9wcm9qZWN0J1xuXG5pbXBvcnQgY2hhbmdlTWFpblN0YXRlIGZyb20gJy4vc2lkZWJhckNoYW5nZU1haW4nXG5cbmNvbnN0IGNyZWF0ZVByb2plY3RTZWN0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgcHJvamVjdFNlY3Rpb24uY2xhc3NOYW1lID0gJ3NpZGViYXJfX3Byb2plY3Qtc2VjdGlvbidcblxuICBjb25zdCBwcm9qZWN0U2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICBwcm9qZWN0U2VjdGlvblRpdGxlLmNsYXNzTmFtZSA9ICdzaWRlYmFyX19wcm9qZWN0LXNlY3Rpb24tdGl0bGUnXG4gIHByb2plY3RTZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAncHJvamVjdHMnXG5cbiAgY29uc3QgcHJvamVjdFNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBwcm9qZWN0U2VjdGlvbkNvbnRhaW5lci5jbGFzc05hbWUgPSAnc2lkZWJhcl9fcHJvamVjdC1jb250YWluZXInXG5cbiAgYWRkQnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci10aXRsZScpLnRleHRDb250ZW50ID0gJ2FkZCBwcm9qZWN0J1xuXG4gIHByb2plY3RTZWN0aW9uQ29udGFpbmVyLmFwcGVuZChhZGRCdXR0b24pXG5cbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZEJ1dHRvbi5yZW1vdmUoKVxuICAgIHByb2plY3RTZWN0aW9uQ29udGFpbmVyLmFwcGVuZChhZGRGb3JtKVxuICB9KVxuXG4gIGNvbnN0IGF0dGFjaExpc3RlbmVyc1RvTmV3UHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiB7XG4gICAgbmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNoYW5nZU1haW5TdGF0ZShuZXdQcm9qZWN0KSlcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IG5ld1Byb2plY3QucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2RlbGV0ZScpXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gbmV3UHJvamVjdC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fbGVmdC1zZWN0aW9uLXRpdGxlJylcblxuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG5ld1Byb2plY3QucmVtb3ZlKClcbiAgICB9KVxuXG4gICAgY29uc3QgbmV3TWFpblNlY3Rpb25UaXRsZSA9IGFkZEZvcm0ucXVlcnlTZWxlY3RvcignLmFkZC1mb3JtX19pbnB1dCcpLnZhbHVlXG5cbiAgICBuZXdQcm9qZWN0LmlkID0gbmV3TWFpblNlY3Rpb25UaXRsZS5yZXBsYWNlKC9cXFcrL2csICctJykudG9VcHBlckNhc2UoKVxuXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gbmV3TWFpblNlY3Rpb25UaXRsZVxuICB9XG5cbiAgY29uc3QgY2xvc2VGb3JtT3BlbkJ1dHRvbiA9IChlKSA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGVcbiAgICBpZiAoZS50eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdC5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgIGF0dGFjaExpc3RlbmVyc1RvTmV3UHJvamVjdChuZXdQcm9qZWN0KVxuICAgICAgcHJvamVjdFNlY3Rpb25Db250YWluZXIuaW5zZXJ0QmVmb3JlKG5ld1Byb2plY3QsIHByb2plY3RTZWN0aW9uQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKVxuICAgICAgdGFyZ2V0LnJlc2V0KClcbiAgICB9XG4gICAgdGFyZ2V0LnJlbW92ZSgpXG4gICAgcHJvamVjdFNlY3Rpb25Db250YWluZXIuYXBwZW5kKGFkZEJ1dHRvbilcbiAgfVxuXG4gIGFkZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY2xvc2VGb3JtT3BlbkJ1dHRvbilcbiAgYWRkRm9ybS5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIGNsb3NlRm9ybU9wZW5CdXR0b24pXG5cbiAgcHJvamVjdFNlY3Rpb24uYXBwZW5kKHByb2plY3RTZWN0aW9uVGl0bGUsIHByb2plY3RTZWN0aW9uQ29udGFpbmVyKVxuXG4gIHJldHVybiBwcm9qZWN0U2VjdGlvblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQcm9qZWN0U2VjdGlvblxuIiwiaW1wb3J0IEluYm94SWNvbiBmcm9tICcuL2ltYWdlcy9pbmJveC5zdmcnXG5pbXBvcnQgQ2FsZW5kYXJJY29uIGZyb20gJy4vaW1hZ2VzL2NhbGVuZGFyLnN2ZydcbmltcG9ydCBXZWVrbHlJY29uIGZyb20gJy4vaW1hZ2VzL3dlZWstY2FsZW5kYXIuc3ZnJ1xuXG4vLyBjbGljayBldmVudCBoYW5kbGVyXG5pbXBvcnQgY2hhbmdlTWFpblN0YXRlIGZyb20gJy4vc2lkZWJhckNoYW5nZU1haW4nXG5cbmNvbnN0IGNyZWF0ZVRvZG9TZWN0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgdG9kb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgdG9kb1NlY3Rpb24uY2xhc3NOYW1lID0gJ3NpZGViYXJfX3RvZG8tc2VjdGlvbidcblxuICBjb25zdCB0b2RvU2VjdGlvbkNvbnRlbnQgPSBbXG4gICAge1xuICAgICAgaW1hZ2U6IEluYm94SWNvbixcbiAgICAgIHRpdGxlOiAnaW5ib3gnLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2U6IENhbGVuZGFySWNvbixcbiAgICAgIHRpdGxlOiAndG9kYXknLFxuICAgIH0sXG4gICAge1xuICAgICAgaW1hZ2U6IFdlZWtseUljb24sXG4gICAgICB0aXRsZTogJ3RoaXMgd2VlaycsXG4gICAgfSxcbiAgXVxuXG4gIHRvZG9TZWN0aW9uQ29udGVudC5mb3JFYWNoKChjb250ZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnRlbnREaXYuY2xhc3NOYW1lID0gJ3NpZGViYXJfX3RvZG8tZGl2J1xuICAgIGNvbnRlbnREaXYuaWQgPSBjb250ZW50LnRpdGxlLnJlcGxhY2UoL1xccy8sICctJylcblxuICAgIGlmIChpbmRleCA9PT0gMCkgY29udGVudERpdi5jbGFzc05hbWUgPSAnc2lkZWJhcl9fdG9kby1kaXYgc2lkZWJhcl9fdG9kby1kaXZfYWN0aXZlJ1xuXG4gICAgY29uc3QgY29udGVudERpdkltYWdlID0gbmV3IEltYWdlKClcbiAgICBjb250ZW50RGl2SW1hZ2UuY2xhc3NOYW1lID0gJ3NpZGViYXJfX3RvZG8tZGl2LWltYWdlJ1xuICAgIGNvbnRlbnREaXZJbWFnZS5zcmMgPSBjb250ZW50LmltYWdlXG5cbiAgICBjb25zdCBjb250ZW50RGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgY29udGVudERpdlRpdGxlLmNsYXNzTmFtZSA9ICdzaWRlYmFyX190b2RvLWRpdi10aXRsZSdcbiAgICBjb250ZW50RGl2VGl0bGUudGV4dENvbnRlbnQgPSBjb250ZW50LnRpdGxlXG5cbiAgICBjb250ZW50RGl2LmFwcGVuZChjb250ZW50RGl2SW1hZ2UsIGNvbnRlbnREaXZUaXRsZSlcblxuICAgIGNvbnRlbnREaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjaGFuZ2VNYWluU3RhdGUoY29udGVudERpdikpXG5cbiAgICB0b2RvU2VjdGlvbi5hcHBlbmQoY29udGVudERpdilcbiAgfSlcblxuICByZXR1cm4gdG9kb1NlY3Rpb25cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVG9kb1NlY3Rpb25cbiIsImNvbnN0IGNyZWF0ZVRhc2sgPSAoKCkgPT4ge1xuICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgdGFzay5jbGFzc05hbWUgPSAndGFzaydcblxuICBjb25zdCBmaXJzdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBmaXJzdFNlY3Rpb24uY2xhc3NOYW1lID0gJ3Rhc2tfX2ZpcnN0LXNlY3Rpb24nXG4gIGNvbnN0IGNoZWNrQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY2hlY2tDaXJjbGUuY2xhc3NOYW1lID0gJ3Rhc2tfX2NoZWNrJ1xuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpXG4gIHRhc2tUaXRsZS5jbGFzc05hbWUgPSAndGFza19fdGl0bGUnXG4gIGZpcnN0U2VjdGlvbi5hcHBlbmQoY2hlY2tDaXJjbGUsIHRhc2tUaXRsZSlcblxuICBjb25zdCBzZWNvbmRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc2Vjb25kU2VjdGlvbi5jbGFzc05hbWUgPSAndGFza19fc2Vjb25kLXNlY3Rpb24nXG4gIGNvbnN0IG5vRGF0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgbm9EYXRlVGV4dC5jbGFzc05hbWUgPSAndGFza19fbm8tZGF0ZSdcbiAgbm9EYXRlVGV4dC50ZXh0Q29udGVudCA9ICdObyBEYXRlJ1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ3Rhc2tfX2RlbGV0ZSdcbiAgc2Vjb25kU2VjdGlvbi5hcHBlbmQobm9EYXRlVGV4dCwgZGVsZXRlQnV0dG9uKVxuXG4gIHRhc2suYXBwZW5kKGZpcnN0U2VjdGlvbiwgc2Vjb25kU2VjdGlvbilcblxuICByZXR1cm4gdGFza1xufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrXG4iLCJjb25zdCBjcmVhdGVUaGlzV2Vla1NlY3Rpb24gPSAoKCkgPT4ge1xuICBjb25zdCB0aGlzV2Vla1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcbiAgdGhpc1dlZWtTZWN0aW9uLmNsYXNzTmFtZSA9ICd0aGlzLXdlZWstc2VjdGlvbidcblxuICBjb25zdCB0aGlzV2Vla1NlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgdGhpc1dlZWtTZWN0aW9uVGl0bGUuY2xhc3NOYW1lID0gJ3RoaXMtd2Vlay1zZWN0aW9uX190aXRsZSdcbiAgdGhpc1dlZWtTZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAndGhpcyB3ZWVrJ1xuXG4gIHRoaXNXZWVrU2VjdGlvbi5hcHBlbmQodGhpc1dlZWtTZWN0aW9uVGl0bGUpXG5cbiAgcmV0dXJuIHRoaXNXZWVrU2VjdGlvblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUaGlzV2Vla1NlY3Rpb25cbiIsImNvbnN0IGNyZWF0ZVRvZGF5U2VjdGlvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IHRvZGF5U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICB0b2RheVNlY3Rpb24uY2xhc3NOYW1lID0gJ3RvZGF5LXNlY3Rpb24nXG5cbiAgY29uc3QgdG9kYXlTZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIHRvZGF5U2VjdGlvblRpdGxlLmNsYXNzTmFtZSA9ICd0b2RheS1zZWN0aW9uX190aXRsZSdcbiAgdG9kYXlTZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAndG9kYXknXG5cbiAgdG9kYXlTZWN0aW9uLmFwcGVuZCh0b2RheVNlY3Rpb25UaXRsZSlcblxuICByZXR1cm4gdG9kYXlTZWN0aW9uXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRvZGF5U2VjdGlvblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gU1RZTEVTXG5pbXBvcnQgJy4vc3R5bGVzL2luZGV4LmNzcydcblxuLy8gQ09SRSBQQVJUU1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCBzaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbidcbmltcG9ydCBmb290ZXIgZnJvbSAnLi9mb290ZXInXG5cbi8vIGltcG9ydCBJY29uIGZyb20gJy4vaW1hZ2VzL2ljb24uc3ZnXG4vLyBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpXG4vLyBpbWFnZS5zcmMgPSBJY29uXG5cbmNvbnN0IGNyZWF0ZUFwcCA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250ZW50LmNsYXNzTmFtZSA9ICdjb250ZW50J1xuXG4gIGNvbnRlbnQuYXBwZW5kKGhlYWRlcilcbiAgY29udGVudC5hcHBlbmQoc2lkZWJhcilcbiAgY29udGVudC5hcHBlbmQobWFpbilcbiAgY29udGVudC5hcHBlbmQoZm9vdGVyKVxuXG4gIHJldHVybiBjb250ZW50XG59KSgpXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kKGNyZWF0ZUFwcClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==