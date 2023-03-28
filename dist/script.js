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
___CSS_LOADER_EXPORT___.push([module.id, "/* NORMALIZING START */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 62.5%;\n  --main-text-color: #fff;\n  --header-footer-background: #333;\n  --header-height: clamp(12rem, 15vh, 25rem);\n  --sidebar-width: clamp(250px, 20vw, 400px);\n  --footer-height: clamp(50px, 5vh, 100px);\n  --sidebar-background: #ddd;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n/* NORMALIZING END */\n\n\n\n/* CONTENT START */\n.content {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-areas:\n  \"header header header\"\n  \"sidebar main main\"\n  \"footer footer footer\";\n  grid-template-rows: var(--header-height) 1fr var(--footer-height);\n  grid-template-columns: var(--sidebar-width) 1fr;\n}\n/* CONTENT END */\n\n\n\n/* HEADER START */\n.header {\n  width: 100%;\n  height: var(--header-height);\n  background: var(--header-footer-background);\n  padding: 2rem 4rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 3rem;\n  grid-area: header;\n}\n\n.header__icon {\n  height: 100%;\n  object-fit: contain;\n}\n\n.header__title {\n  color: var(--main-text-color);\n  text-transform: uppercase;\n  font-size: 4rem;\n  letter-spacing: 1px;\n}\n/* HEADER END */\n\n\n\n/* SIDEBAR START */\n.sidebar {\n  grid-area: sidebar;\n  background: var(--sidebar-background);\n  width: var(--sidebar-width);\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n  overflow-y: auto;\n}\n\n.sidebar__todo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.sidebar__todo-div {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  padding: 1rem 0 1rem 2rem;\n  transition: all .2s linear;\n  border-radius: 1rem;\n  border: none;\n  background: none;\n}\n\n.sidebar__todo-div-image {\n  height: 2rem;\n  object-fit: contain;\n}\n\n.sidebar__todo-div-title {\n  font-size: 1.7rem;\n  text-transform: uppercase;\n  color: var(--header-footer-background);\n  font-weight: normal;\n}\n\n.sidebar__project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.sidebar__project-section-title {\n  text-transform: uppercase;\n  font-size: 2.5rem;\n  color: var(--header-footer-background);\n}\n\n.sidebar__project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.sidebar__project-container-button, .inbox__project-container-button {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n  text-transform: uppercase;\n  color: var(--header-footer-background);\n  padding: 1rem 2rem;\n  background: none;\n  border: none;\n  transition: all .3s linear;\n  border-radius: 1rem;\n  width: 100%;\n}\n\n.sidebar__project-container-add, .inbox__project-container-add {\n  height: 2rem;\n}\n/* SIDEBAR END */\n\n\n\n/* MAIN START */\n.main {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  padding: 0 10rem;\n  overflow-y: auto;\n}\n\n.inbox-section, .today-section, .this-week-section {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 3rem 0;\n  gap: 3rem;\n  max-width: 1024px;\n}\n\n.inbox-section__title, .today-section__title, .this-week-section__title {\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n  gap: 2rem;\n}\n/* MAIN END */\n\n\n\n/* FOOTER START */\n.footer {\n  width: 100%;\n  height: var(--footer-height);\n  background: var(--header-footer-background);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  grid-area: footer;\n  padding: 1rem;\n}\n\n.footer__copyright {\n  color: var(--main-text-color);\n  font-size: 2rem;\n  text-align: center;\n}\n\n.footer__icon {\n  transition: all .3s linear;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center / contain;\n  display: block;\n  height: 100%;\n  width: 3rem;\n}\n/* FOOTER END */\n\n\n\n/* ADD FORM START */\n.add-form {\n  display: grid;\n  grid-template-areas:\n  \"input input\"\n  \"submit reset\";\n  gap: 2rem;\n  width: 100%;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.add-form__input {\n  grid-area: input;\n  border-radius: .5rem;\n  padding: 1rem;\n  font-size: 2rem;\n  width: 100%;\n  border: none;\n  outline: 1px solid var(--header-footer-background);\n}\n\n.add-form__input:invalid {\n  outline: 1px solid red;\n}\n\n.add-form__input:valid {\n  outline: 1px solid green;\n}\n\n.add-form__submit, .add-form__reset {\n  text-transform: uppercase;\n  font-size: 1.5rem;\n  padding: 1rem 2rem;\n  border-radius: .5rem;\n  border: 1px solid var(--header-footer-background);\n  transition: all .2s linear;\n}\n\n.add-form__submit {\n  grid-area: submit;\n  background: lightgreen;\n}\n\n.add-form__reset {\n  grid-area: reset;\n  background: lightcoral;\n}\n/* ADD FORM END */\n\n\n\n/* TASK START */\n.task {\n  width: 100%;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 1rem;\n  transition: all .2s linear;\n}\n\n.task__first-section, .task__second-section {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.task__check {\n  width: 2.5rem;\n  height: 2.5rem;\n  background: transparent;\n  border: 2px solid var(--header-footer-background);\n  border-radius: 50%;\n}\n\n.task__title {\n  font-size: 2rem;\n  font-weight: 400;\n  max-width: 300px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.task__title_done {\n  text-decoration: line-through;\n}\n\n.task__no-date {\n  font-size: 2rem;\n}\n\n.task__date {\n  font-size: 1.5rem;\n  border-radius: .5rem;\n  border: 1px solid var(--header-footer-background);\n  padding: .5rem;\n}\n\n.task__delete, .project__delete {\n  width: 3rem;\n  height: 3rem;\n  border: none;\n  visibility: hidden;\n  opacity: 0;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center / contain;\n  transition: all .2s linear;\n}\n/* TASK END */\n\n\n\n/* PROJECT START */\n.project {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  border-radius: 1rem;\n  border: none;\n  padding: 1rem 2rem;\n  transition: all .2s linear;\n  background: none;\n}\n\n.project__left-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  text-transform: uppercase;\n}\n\n.project__left-section-icon {\n  width: 3rem;\n  height: 3rem;\n}\n\n.project__left-section-title {\n  font-weight: 400;\n  max-width: 90px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.project__delete {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n/* PROJECT END */\n\n\n\n/* ACTIVE STATES START*/\n.sidebar__todo-div_active {\n  background: var(--main-text-color);\n}\n\n.sidebar__todo-div_active .sidebar__todo-div-title, .sidebar__todo-div_active .project__left-section-title {\n  font-weight: bold;\n}\n\n.task__check_active {\n  background: var(--header-footer-background);\n}\n/* ACTIVE STATES END */\n\n\n\n/* HOVERS START */\n@media (hover: hover) {\n  .sidebar__todo-div:hover, .sidebar__project-container-button:hover {\n    background: var(--main-text-color);\n    cursor: pointer;\n  }\n\n  .add-form__submit:hover {\n    cursor: pointer;\n    background: green;\n    color: var(--main-text-color);\n  }\n\n  .add-form__reset:hover {\n    cursor: pointer;\n    background: red;\n    color: var(--main-text-color);\n  }\n\n  .inbox__project-container-button:hover {\n    cursor: pointer;\n    background: var(--sidebar-background);\n  }\n\n  .task:hover {\n    background: var(--sidebar-background);\n  }\n\n  .project:hover {\n    cursor: pointer;\n    background: var(--main-text-color);\n  }\n\n  .task:hover .task__delete, .project:hover .project__delete {\n    visibility: unset;\n    opacity: unset;\n  }\n\n  .task__delete:hover , .task__no-date:hover, .task__check:hover, .task__date:hover, .project__delete:hover {\n    cursor: pointer;\n  }\n}\n/* HOVERS END */\n", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,gCAAgC;EAChC,0CAA0C;EAC1C,0CAA0C;EAC1C,wCAAwC;EACxC,0BAA0B;AAC5B;;AAEA;EACE,mJAAmJ;AACrJ;AACA,oBAAoB;;;;AAIpB,kBAAkB;AAClB;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb;;;wBAGsB;EACtB,iEAAiE;EACjE,+CAA+C;AACjD;AACA,gBAAgB;;;;AAIhB,iBAAiB;AACjB;EACE,WAAW;EACX,4BAA4B;EAC5B,2CAA2C;EAC3C,kBAAkB;EAClB,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,yBAAyB;EACzB,eAAe;EACf,mBAAmB;AACrB;AACA,eAAe;;;;AAIf,kBAAkB;AAClB;EACE,kBAAkB;EAClB,qCAAqC;EACrC,2BAA2B;EAC3B,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,SAAS;EACT,mBAAmB;EACnB,yBAAyB;EACzB,0BAA0B;EAC1B,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,sCAAsC;EACtC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,SAAS;EACT,yBAAyB;EACzB,sCAAsC;EACtC,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,YAAY;AACd;AACA,gBAAgB;;;;AAIhB,eAAe;AACf;EACE,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,oBAAoB;EACpB,SAAS;AACX;AACA,aAAa;;;;AAIb,iBAAiB;AACjB;EACE,WAAW;EACX,4BAA4B;EAC5B,2CAA2C;EAC3C,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,8EAAgE;EAChE,cAAc;EACd,YAAY;EACZ,WAAW;AACb;AACA,eAAe;;;;AAIf,mBAAmB;AACnB;EACE,aAAa;EACb;;gBAEc;EACd,SAAS;EACT,WAAW;EACX,qCAAqC;AACvC;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;EACpB,aAAa;EACb,eAAe;EACf,WAAW;EACX,YAAY;EACZ,kDAAkD;AACpD;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,kBAAkB;EAClB,oBAAoB;EACpB,iDAAiD;EACjD,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;AACxB;AACA,iBAAiB;;;;AAIjB,eAAe;AACf;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,uBAAuB;EACvB,iDAAiD;EACjD,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,oBAAoB;EACpB,iDAAiD;EACjD,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,8EAA8D;EAC9D,0BAA0B;AAC5B;AACA,aAAa;;;;AAIb,kBAAkB;AAClB;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,0BAA0B;EAC1B,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;EACT,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;AACA,gBAAgB;;;;AAIhB,uBAAuB;AACvB;EACE,kCAAkC;AACpC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,2CAA2C;AAC7C;AACA,sBAAsB;;;;AAItB,iBAAiB;AACjB;EACE;IACE,kCAAkC;IAClC,eAAe;EACjB;;EAEA;IACE,eAAe;IACf,iBAAiB;IACjB,6BAA6B;EAC/B;;EAEA;IACE,eAAe;IACf,eAAe;IACf,6BAA6B;EAC/B;;EAEA;IACE,eAAe;IACf,qCAAqC;EACvC;;EAEA;IACE,qCAAqC;EACvC;;EAEA;IACE,eAAe;IACf,kCAAkC;EACpC;;EAEA;IACE,iBAAiB;IACjB,cAAc;EAChB;;EAEA;IACE,eAAe;EACjB;AACF;AACA,eAAe","sourcesContent":["/* NORMALIZING START */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  font-size: 62.5%;\n  --main-text-color: #fff;\n  --header-footer-background: #333;\n  --header-height: clamp(12rem, 15vh, 25rem);\n  --sidebar-width: clamp(250px, 20vw, 400px);\n  --footer-height: clamp(50px, 5vh, 100px);\n  --sidebar-background: #ddd;\n}\n\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n/* NORMALIZING END */\n\n\n\n/* CONTENT START */\n.content {\n  width: 100%;\n  height: 100vh;\n  display: grid;\n  grid-template-areas:\n  \"header header header\"\n  \"sidebar main main\"\n  \"footer footer footer\";\n  grid-template-rows: var(--header-height) 1fr var(--footer-height);\n  grid-template-columns: var(--sidebar-width) 1fr;\n}\n/* CONTENT END */\n\n\n\n/* HEADER START */\n.header {\n  width: 100%;\n  height: var(--header-height);\n  background: var(--header-footer-background);\n  padding: 2rem 4rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 3rem;\n  grid-area: header;\n}\n\n.header__icon {\n  height: 100%;\n  object-fit: contain;\n}\n\n.header__title {\n  color: var(--main-text-color);\n  text-transform: uppercase;\n  font-size: 4rem;\n  letter-spacing: 1px;\n}\n/* HEADER END */\n\n\n\n/* SIDEBAR START */\n.sidebar {\n  grid-area: sidebar;\n  background: var(--sidebar-background);\n  width: var(--sidebar-width);\n  padding: 3rem;\n  display: flex;\n  flex-direction: column;\n  gap: 4rem;\n  overflow-y: auto;\n}\n\n.sidebar__todo-section {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.sidebar__todo-div {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  padding: 1rem 0 1rem 2rem;\n  transition: all .2s linear;\n  border-radius: 1rem;\n  border: none;\n  background: none;\n}\n\n.sidebar__todo-div-image {\n  height: 2rem;\n  object-fit: contain;\n}\n\n.sidebar__todo-div-title {\n  font-size: 1.7rem;\n  text-transform: uppercase;\n  color: var(--header-footer-background);\n  font-weight: normal;\n}\n\n.sidebar__project-section {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\n.sidebar__project-section-title {\n  text-transform: uppercase;\n  font-size: 2.5rem;\n  color: var(--header-footer-background);\n}\n\n.sidebar__project-container {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n}\n\n.sidebar__project-container-button, .inbox__project-container-button {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n  text-transform: uppercase;\n  color: var(--header-footer-background);\n  padding: 1rem 2rem;\n  background: none;\n  border: none;\n  transition: all .3s linear;\n  border-radius: 1rem;\n  width: 100%;\n}\n\n.sidebar__project-container-add, .inbox__project-container-add {\n  height: 2rem;\n}\n/* SIDEBAR END */\n\n\n\n/* MAIN START */\n.main {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  padding: 0 10rem;\n  overflow-y: auto;\n}\n\n.inbox-section, .today-section, .this-week-section {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 3rem 0;\n  gap: 3rem;\n  max-width: 1024px;\n}\n\n.inbox-section__title, .today-section__title, .this-week-section__title {\n  font-size: 3.5rem;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n  gap: 2rem;\n}\n/* MAIN END */\n\n\n\n/* FOOTER START */\n.footer {\n  width: 100%;\n  height: var(--footer-height);\n  background: var(--header-footer-background);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2rem;\n  grid-area: footer;\n  padding: 1rem;\n}\n\n.footer__copyright {\n  color: var(--main-text-color);\n  font-size: 2rem;\n  text-align: center;\n}\n\n.footer__icon {\n  transition: all .3s linear;\n  background: url(../images/github.svg) no-repeat center / contain;\n  display: block;\n  height: 100%;\n  width: 3rem;\n}\n/* FOOTER END */\n\n\n\n/* ADD FORM START */\n.add-form {\n  display: grid;\n  grid-template-areas:\n  \"input input\"\n  \"submit reset\";\n  gap: 2rem;\n  width: 100%;\n  grid-template-columns: repeat(2, 1fr);\n}\n\n.add-form__input {\n  grid-area: input;\n  border-radius: .5rem;\n  padding: 1rem;\n  font-size: 2rem;\n  width: 100%;\n  border: none;\n  outline: 1px solid var(--header-footer-background);\n}\n\n.add-form__input:invalid {\n  outline: 1px solid red;\n}\n\n.add-form__input:valid {\n  outline: 1px solid green;\n}\n\n.add-form__submit, .add-form__reset {\n  text-transform: uppercase;\n  font-size: 1.5rem;\n  padding: 1rem 2rem;\n  border-radius: .5rem;\n  border: 1px solid var(--header-footer-background);\n  transition: all .2s linear;\n}\n\n.add-form__submit {\n  grid-area: submit;\n  background: lightgreen;\n}\n\n.add-form__reset {\n  grid-area: reset;\n  background: lightcoral;\n}\n/* ADD FORM END */\n\n\n\n/* TASK START */\n.task {\n  width: 100%;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 1rem;\n  transition: all .2s linear;\n}\n\n.task__first-section, .task__second-section {\n  display: flex;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.task__check {\n  width: 2.5rem;\n  height: 2.5rem;\n  background: transparent;\n  border: 2px solid var(--header-footer-background);\n  border-radius: 50%;\n}\n\n.task__title {\n  font-size: 2rem;\n  font-weight: 400;\n  max-width: 300px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.task__title_done {\n  text-decoration: line-through;\n}\n\n.task__no-date {\n  font-size: 2rem;\n}\n\n.task__date {\n  font-size: 1.5rem;\n  border-radius: .5rem;\n  border: 1px solid var(--header-footer-background);\n  padding: .5rem;\n}\n\n.task__delete, .project__delete {\n  width: 3rem;\n  height: 3rem;\n  border: none;\n  visibility: hidden;\n  opacity: 0;\n  background: url(../images/exit.svg) no-repeat center / contain;\n  transition: all .2s linear;\n}\n/* TASK END */\n\n\n\n/* PROJECT START */\n.project {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  border-radius: 1rem;\n  border: none;\n  padding: 1rem 2rem;\n  transition: all .2s linear;\n  background: none;\n}\n\n.project__left-section {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  text-transform: uppercase;\n}\n\n.project__left-section-icon {\n  width: 3rem;\n  height: 3rem;\n}\n\n.project__left-section-title {\n  font-weight: 400;\n  max-width: 90px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.project__delete {\n  width: 2.5rem;\n  height: 2.5rem;\n}\n/* PROJECT END */\n\n\n\n/* ACTIVE STATES START*/\n.sidebar__todo-div_active {\n  background: var(--main-text-color);\n}\n\n.sidebar__todo-div_active .sidebar__todo-div-title, .sidebar__todo-div_active .project__left-section-title {\n  font-weight: bold;\n}\n\n.task__check_active {\n  background: var(--header-footer-background);\n}\n/* ACTIVE STATES END */\n\n\n\n/* HOVERS START */\n@media (hover: hover) {\n  .sidebar__todo-div:hover, .sidebar__project-container-button:hover {\n    background: var(--main-text-color);\n    cursor: pointer;\n  }\n\n  .add-form__submit:hover {\n    cursor: pointer;\n    background: green;\n    color: var(--main-text-color);\n  }\n\n  .add-form__reset:hover {\n    cursor: pointer;\n    background: red;\n    color: var(--main-text-color);\n  }\n\n  .inbox__project-container-button:hover {\n    cursor: pointer;\n    background: var(--sidebar-background);\n  }\n\n  .task:hover {\n    background: var(--sidebar-background);\n  }\n\n  .project:hover {\n    cursor: pointer;\n    background: var(--main-text-color);\n  }\n\n  .task:hover .task__delete, .project:hover .project__delete {\n    visibility: unset;\n    opacity: unset;\n  }\n\n  .task__delete:hover , .task__no-date:hover, .task__check:hover, .task__date:hover, .project__delete:hover {\n    cursor: pointer;\n  }\n}\n/* HOVERS END */\n"],"sourceRoot":""}]);
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
  localStorage.removeItem(sidebarButton.outerHTML, sidebarButton.outerHTML)
  sidebarButton.classList.add('sidebar__todo-div_active')
  localStorage.setItem(sidebarButton.outerHTML, sidebarButton.outerHTML)

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
    if (e.target.className === 'project__delete') {
      e.stopPropagation()
      localStorage.removeItem(e.target.parentElement.outerHTML)
      localStorage.removeItem(e.target.parentElement.querySelector('.project__left-section-title').textContent.toUpperCase())
      e.target.parentElement.remove()
      _main__WEBPACK_IMPORTED_MODULE_4__["default"].innerHTML = ''
    }
    if (e.target.classList.contains('project') || e.target.closest('.project')) {
      if (e.target.closest('.project')) {
        (0,_sidebarChangeMain__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target.closest('.project'))
        return
      }
      (0,_sidebarChangeMain__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target)
    }
  })

  const closeFormOpenButton = (e) => {
    const { target } = e
    if (e.type === 'submit') {
      e.preventDefault()
      const newProject = _project__WEBPACK_IMPORTED_MODULE_2__["default"].cloneNode(true)
      newProject.querySelector('.project__left-section-title').textContent = _sidebarAddForm__WEBPACK_IMPORTED_MODULE_1__["default"].querySelector('.add-form__input').value
      newProject.setAttribute('data-id', newProject.querySelector('.project__left-section-title').textContent.toUpperCase())
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
/******/ 		__webpack_require__.p = "./";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLGVBQWUsV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxhQUFhLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxLQUFLLGFBQWEsWUFBWSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxlQUFlLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLGFBQWEsWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxlQUFlLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sZUFBZSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssMERBQTBELGNBQWMsZUFBZSwyQkFBMkIsR0FBRyxXQUFXLHFCQUFxQiw0QkFBNEIscUNBQXFDLCtDQUErQywrQ0FBK0MsNkNBQTZDLCtCQUErQixHQUFHLFVBQVUsd0pBQXdKLEdBQUcsOERBQThELGdCQUFnQixrQkFBa0Isa0JBQWtCLDBHQUEwRyxzRUFBc0Usb0RBQW9ELEdBQUcsd0RBQXdELGdCQUFnQixpQ0FBaUMsZ0RBQWdELHVCQUF1QixrQkFBa0IsZ0NBQWdDLHdCQUF3QixjQUFjLHNCQUFzQixHQUFHLG1CQUFtQixpQkFBaUIsd0JBQXdCLEdBQUcsb0JBQW9CLGtDQUFrQyw4QkFBOEIsb0JBQW9CLHdCQUF3QixHQUFHLHlEQUF5RCx1QkFBdUIsMENBQTBDLGdDQUFnQyxrQkFBa0Isa0JBQWtCLDJCQUEyQixjQUFjLHFCQUFxQixHQUFHLDRCQUE0QixrQkFBa0IsMkJBQTJCLGNBQWMsR0FBRyx3QkFBd0Isa0JBQWtCLGNBQWMsd0JBQXdCLDhCQUE4QiwrQkFBK0Isd0JBQXdCLGlCQUFpQixxQkFBcUIsR0FBRyw4QkFBOEIsaUJBQWlCLHdCQUF3QixHQUFHLDhCQUE4QixzQkFBc0IsOEJBQThCLDJDQUEyQyx3QkFBd0IsR0FBRywrQkFBK0Isa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcscUNBQXFDLDhCQUE4QixzQkFBc0IsMkNBQTJDLEdBQUcsaUNBQWlDLGtCQUFrQiwyQkFBMkIsY0FBYyxHQUFHLDBFQUEwRSxrQkFBa0Isd0JBQXdCLGdDQUFnQyxjQUFjLDhCQUE4QiwyQ0FBMkMsdUJBQXVCLHFCQUFxQixpQkFBaUIsK0JBQStCLHdCQUF3QixnQkFBZ0IsR0FBRyxvRUFBb0UsaUJBQWlCLEdBQUcsb0RBQW9ELG9CQUFvQixrQkFBa0IsNEJBQTRCLHFCQUFxQixxQkFBcUIsR0FBRyx3REFBd0QsZ0JBQWdCLGlCQUFpQixrQkFBa0IsMkJBQTJCLHdCQUF3Qix1QkFBdUIsb0JBQW9CLGNBQWMsc0JBQXNCLEdBQUcsNkVBQTZFLHNCQUFzQiw4QkFBOEIseUJBQXlCLGNBQWMsR0FBRyxxREFBcUQsZ0JBQWdCLGlDQUFpQyxnREFBZ0Qsa0JBQWtCLDRCQUE0Qix3QkFBd0IsY0FBYyxzQkFBc0Isa0JBQWtCLEdBQUcsd0JBQXdCLGtDQUFrQyxvQkFBb0IsdUJBQXVCLEdBQUcsbUJBQW1CLCtCQUErQixxRUFBcUUsbUJBQW1CLGlCQUFpQixnQkFBZ0IsR0FBRywyREFBMkQsa0JBQWtCLGdFQUFnRSxjQUFjLGdCQUFnQiwwQ0FBMEMsR0FBRyxzQkFBc0IscUJBQXFCLHlCQUF5QixrQkFBa0Isb0JBQW9CLGdCQUFnQixpQkFBaUIsdURBQXVELEdBQUcsOEJBQThCLDJCQUEyQixHQUFHLDRCQUE0Qiw2QkFBNkIsR0FBRyx5Q0FBeUMsOEJBQThCLHNCQUFzQix1QkFBdUIseUJBQXlCLHNEQUFzRCwrQkFBK0IsR0FBRyx1QkFBdUIsc0JBQXNCLDJCQUEyQixHQUFHLHNCQUFzQixxQkFBcUIsMkJBQTJCLEdBQUcscURBQXFELGdCQUFnQix1QkFBdUIsa0JBQWtCLG1DQUFtQyx3QkFBd0Isd0JBQXdCLCtCQUErQixHQUFHLGlEQUFpRCxrQkFBa0IsZ0JBQWdCLHdCQUF3QixHQUFHLGtCQUFrQixrQkFBa0IsbUJBQW1CLDRCQUE0QixzREFBc0QsdUJBQXVCLEdBQUcsa0JBQWtCLG9CQUFvQixxQkFBcUIscUJBQXFCLDRCQUE0Qix3QkFBd0IscUJBQXFCLEdBQUcsdUJBQXVCLGtDQUFrQyxHQUFHLG9CQUFvQixvQkFBb0IsR0FBRyxpQkFBaUIsc0JBQXNCLHlCQUF5QixzREFBc0QsbUJBQW1CLEdBQUcscUNBQXFDLGdCQUFnQixpQkFBaUIsaUJBQWlCLHVCQUF1QixlQUFlLG1FQUFtRSwrQkFBK0IsR0FBRyx1REFBdUQsa0JBQWtCLG1DQUFtQyxnQkFBZ0Isd0JBQXdCLHdCQUF3QixpQkFBaUIsdUJBQXVCLCtCQUErQixxQkFBcUIsR0FBRyw0QkFBNEIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsY0FBYyw4QkFBOEIsR0FBRyxpQ0FBaUMsZ0JBQWdCLGlCQUFpQixHQUFHLGtDQUFrQyxxQkFBcUIsb0JBQW9CLHFCQUFxQiw0QkFBNEIsd0JBQXdCLEdBQUcsc0JBQXNCLGtCQUFrQixtQkFBbUIsR0FBRyxnRkFBZ0YsdUNBQXVDLEdBQUcsZ0hBQWdILHNCQUFzQixHQUFHLHlCQUF5QixnREFBZ0QsR0FBRyw0RUFBNEUsd0VBQXdFLHlDQUF5QyxzQkFBc0IsS0FBSywrQkFBK0Isc0JBQXNCLHdCQUF3QixvQ0FBb0MsS0FBSyw4QkFBOEIsc0JBQXNCLHNCQUFzQixvQ0FBb0MsS0FBSyw4Q0FBOEMsc0JBQXNCLDRDQUE0QyxLQUFLLG1CQUFtQiw0Q0FBNEMsS0FBSyxzQkFBc0Isc0JBQXNCLHlDQUF5QyxLQUFLLGtFQUFrRSx3QkFBd0IscUJBQXFCLEtBQUssaUhBQWlILHNCQUFzQixLQUFLLEdBQUcsdUNBQXVDO0FBQy80bUI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNaMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDVDVCO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsMEJBQTBCOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCZ0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixvREFBSTs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVELGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQjBCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixvREFBYzs7QUFFM0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDbEI5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0I1QjtBQUN3Qzs7QUFFeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHFFQUF1Qjs7QUFFekIseUNBQXlDLHVEQUFTOztBQUVsRDtBQUNBLENBQUM7O0FBRUQsaUVBQWUsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmpDO0FBQ3lDOztBQUVMO0FBQ1g7O0FBRWtCOztBQUUzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLHFEQUFZOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxREFBTztBQUNuRCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QiwwREFBYTs7QUFFekM7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLFlBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0Esc0JBQXNCLHVEQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSx3RUFBK0I7QUFDckMsTUFBTSxrRUFBeUIsQ0FBQyx1RUFBOEIsRUFBRSw2R0FBb0U7QUFDcEk7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxVQUFVOztBQUVXOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZlOztBQUVuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscURBQVc7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxDQUFDOztBQUVELGlFQUFlLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkI1QjtBQUM4QztBQUNNOztBQUVwRDtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLDJEQUFXLEVBQUUsOERBQWM7O0FBRTVDO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7O0FDYnlCOztBQUVyRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QixvREFBYzs7QUFFM0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDbEI5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QjVCO0FBQ0E7QUFDQTtBQUN5Qjs7QUFFZ0I7O0FBRVM7O0FBRVA7O0FBRTNDLHNFQUE2QjtBQUM3QixNQUFNLHFEQUFrQjtBQUN4QjtBQUNBLElBQUksa0RBQWU7QUFDbkIsSUFBSSxTQUFTLHdEQUFxQjtBQUNsQyxLQUFLLDBEQUFhO0FBQ2xCLElBQUkscURBQWtCO0FBQ3RCO0FBQ0EsQ0FBQzs7QUFFRCx5QkFBeUIsK0RBQXNCOztBQUUvQyxxQkFBcUIsK0RBQXNCO0FBQzNDLHdCQUF3QiwrREFBc0I7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUUsdURBQWM7O0FBRWhCOztBQUVBO0FBQ0E7QUFDQSxVQUFVLHFEQUFrQjtBQUM1QixLQUFLO0FBQ0wsSUFBSSxxREFBa0I7QUFDdEI7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0EsVUFBVSxxREFBa0I7QUFDNUIsS0FBSztBQUNMLElBQUksd0RBQXFCO0FBQ3pCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSxvREFBVyxDQUFDLHFEQUFZO0FBQzVCLElBQUk7QUFDSjtBQUNBLElBQUksb0RBQVc7QUFDZixJQUFJO0FBQ0o7QUFDQSxJQUFJLG9EQUFXO0FBQ2YsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRUFBdUI7QUFDM0IsSUFBSTtBQUNKLElBQUksZ0VBQXVCO0FBQzNCO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RTlCO0FBQzBDO0FBQ0o7QUFDUDs7QUFFa0I7O0FBRXhCOztBQUV6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRSx1RUFBdUI7O0FBRXpCLGlDQUFpQyx5REFBUzs7QUFFMUMsRUFBRSwwRUFBMEI7QUFDNUI7QUFDQSxJQUFJLGdFQUFnQjtBQUNwQixtQ0FBbUMsdURBQU87QUFDMUMsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVEQUFjO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQWU7QUFDdkI7QUFDQTtBQUNBLE1BQU0sOERBQWU7QUFDckI7QUFDQSxHQUFHOztBQUVIO0FBQ0EsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7QUFDQSx5QkFBeUIsMERBQWlCO0FBQzFDLDZFQUE2RSxxRUFBcUI7QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHlEQUFTO0FBQzVDOztBQUVBLEVBQUUsd0VBQXdCO0FBQzFCLEVBQUUsd0VBQXdCOztBQUUxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQsaUVBQWUsb0JBQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VPO0FBQ007QUFDRzs7QUFFbkQ7QUFDaUQ7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSw4Q0FBUztBQUN0QjtBQUNBLEtBQUs7QUFDTDtBQUNBLGFBQWEsaURBQVk7QUFDekI7QUFDQSxLQUFLO0FBQ0w7QUFDQSxhQUFhLHNEQUFVO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsK0NBQStDLDhEQUFlOztBQUU5RDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0FDbkRoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJ6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUMyQjs7QUFFM0I7QUFDNkI7QUFDRTtBQUNOO0FBQ0k7O0FBRTdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLCtDQUFNO0FBQ3ZCLGlCQUFpQixnREFBTztBQUN4QixpQkFBaUIsNkNBQUk7QUFDckIsaUJBQWlCLCtDQUFNOztBQUV2QjtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9maW5kRGF0ZURlbHRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5ib3hBZGRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luYm94QWRkRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5ib3hTZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyQWRkQnV0dG9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zaWRlYmFyQWRkRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhckNoYW5nZU1haW4uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NpZGViYXJQcm9qZWN0U2VjdGlvbi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc2lkZWJhclRvZG9TZWN0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvZ2l0aHViLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9leGl0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBOT1JNQUxJWklORyBTVEFSVCAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAtLW1haW4tdGV4dC1jb2xvcjogI2ZmZjtcXG4gIC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kOiAjMzMzO1xcbiAgLS1oZWFkZXItaGVpZ2h0OiBjbGFtcCgxMnJlbSwgMTV2aCwgMjVyZW0pO1xcbiAgLS1zaWRlYmFyLXdpZHRoOiBjbGFtcCgyNTBweCwgMjB2dywgNDAwcHgpO1xcbiAgLS1mb290ZXItaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dmgsIDEwMHB4KTtcXG4gIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiAjZGRkO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuLyogTk9STUFMSVpJTkcgRU5EICovXFxuXFxuXFxuXFxuLyogQ09OVEVOVCBTVEFSVCAqL1xcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcbiAgXFxcInNpZGViYXIgbWFpbiBtYWluXFxcIlxcbiAgXFxcImZvb3RlciBmb290ZXIgZm9vdGVyXFxcIjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0taGVhZGVyLWhlaWdodCkgMWZyIHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1zaWRlYmFyLXdpZHRoKSAxZnI7XFxufVxcbi8qIENPTlRFTlQgRU5EICovXFxuXFxuXFxuXFxuLyogSEVBREVSIFNUQVJUICovXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbiAgcGFkZGluZzogMnJlbSA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuLmhlYWRlcl9faWNvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uaGVhZGVyX190aXRsZSB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG4vKiBIRUFERVIgRU5EICovXFxuXFxuXFxuXFxuLyogU0lERUJBUiBTVEFSVCAqL1xcbi5zaWRlYmFyIHtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDRyZW07XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uc2lkZWJhcl9fdG9kby1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9fdG9kby1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnNpZGViYXJfX3RvZG8tZGl2LWltYWdlIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5zaWRlYmFyX190b2RvLWRpdi10aXRsZSB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LXNlY3Rpb24tdGl0bGUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLnNpZGViYXJfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbiwgLmluYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci1hZGQsIC5pbmJveF9fcHJvamVjdC1jb250YWluZXItYWRkIHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLyogU0lERUJBUiBFTkQgKi9cXG5cXG5cXG5cXG4vKiBNQUlOIFNUQVJUICovXFxuLm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxMHJlbTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5pbmJveC1zZWN0aW9uLCAudG9kYXktc2VjdGlvbiwgLnRoaXMtd2Vlay1zZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogM3JlbSAwO1xcbiAgZ2FwOiAzcmVtO1xcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XFxufVxcblxcbi5pbmJveC1zZWN0aW9uX190aXRsZSwgLnRvZGF5LXNlY3Rpb25fX3RpdGxlLCAudGhpcy13ZWVrLXNlY3Rpb25fX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG4vKiBNQUlOIEVORCAqL1xcblxcblxcblxcbi8qIEZPT1RFUiBTVEFSVCAqL1xcbi5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mb290ZXJfX2NvcHlyaWdodCB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlcl9faWNvbiB7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAzcmVtO1xcbn1cXG4vKiBGT09URVIgRU5EICovXFxuXFxuXFxuXFxuLyogQUREIEZPUk0gU1RBUlQgKi9cXG4uYWRkLWZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICBcXFwiaW5wdXQgaW5wdXRcXFwiXFxuICBcXFwic3VibWl0IHJlc2V0XFxcIjtcXG4gIGdhcDogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuLmFkZC1mb3JtX19pbnB1dCB7XFxuICBncmlkLWFyZWE6IGlucHV0O1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmFkZC1mb3JtX19pbnB1dDppbnZhbGlkIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5hZGQtZm9ybV9faW5wdXQ6dmFsaWQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4uYWRkLWZvcm1fX3N1Ym1pdCwgLmFkZC1mb3JtX19yZXNldCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcXG59XFxuXFxuLmFkZC1mb3JtX19zdWJtaXQge1xcbiAgZ3JpZC1hcmVhOiBzdWJtaXQ7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uYWRkLWZvcm1fX3Jlc2V0IHtcXG4gIGdyaWQtYXJlYTogcmVzZXQ7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGNvcmFsO1xcbn1cXG4vKiBBREQgRk9STSBFTkQgKi9cXG5cXG5cXG5cXG4vKiBUQVNLIFNUQVJUICovXFxuLnRhc2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcXG59XFxuXFxuLnRhc2tfX2ZpcnN0LXNlY3Rpb24sIC50YXNrX19zZWNvbmQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza19fY2hlY2sge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFza19fdGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udGFza19fdGl0bGVfZG9uZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2tfX25vLWRhdGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGFza19fZGF0ZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4udGFza19fZGVsZXRlLCAucHJvamVjdF9fZGVsZXRlIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcXG59XFxuLyogVEFTSyBFTkQgKi9cXG5cXG5cXG5cXG4vKiBQUk9KRUNUIFNUQVJUICovXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0X19sZWZ0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5wcm9qZWN0X19sZWZ0LXNlY3Rpb24taWNvbiB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuLnByb2plY3RfX2xlZnQtc2VjdGlvbi10aXRsZSB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWF4LXdpZHRoOiA5MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnByb2plY3RfX2RlbGV0ZSB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxufVxcbi8qIFBST0pFQ1QgRU5EICovXFxuXFxuXFxuXFxuLyogQUNUSVZFIFNUQVRFUyBTVEFSVCovXFxuLnNpZGViYXJfX3RvZG8tZGl2X2FjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbn1cXG5cXG4uc2lkZWJhcl9fdG9kby1kaXZfYWN0aXZlIC5zaWRlYmFyX190b2RvLWRpdi10aXRsZSwgLnNpZGViYXJfX3RvZG8tZGl2X2FjdGl2ZSAucHJvamVjdF9fbGVmdC1zZWN0aW9uLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udGFza19fY2hlY2tfYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxufVxcbi8qIEFDVElWRSBTVEFURVMgRU5EICovXFxuXFxuXFxuXFxuLyogSE9WRVJTIFNUQVJUICovXFxuQG1lZGlhIChob3ZlcjogaG92ZXIpIHtcXG4gIC5zaWRlYmFyX190b2RvLWRpdjpob3ZlciwgLnNpZGViYXJfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5hZGQtZm9ybV9fc3VibWl0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcXG4gICAgY29sb3I6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICB9XFxuXFxuICAuYWRkLWZvcm1fX3Jlc2V0OmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgfVxcblxcbiAgLmluYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICB9XFxuXFxuICAudGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICB9XFxuXFxuICAucHJvamVjdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC50YXNrOmhvdmVyIC50YXNrX19kZWxldGUsIC5wcm9qZWN0OmhvdmVyIC5wcm9qZWN0X19kZWxldGUge1xcbiAgICB2aXNpYmlsaXR5OiB1bnNldDtcXG4gICAgb3BhY2l0eTogdW5zZXQ7XFxuICB9XFxuXFxuICAudGFza19fZGVsZXRlOmhvdmVyICwgLnRhc2tfX25vLWRhdGU6aG92ZXIsIC50YXNrX19jaGVjazpob3ZlciwgLnRhc2tfX2RhdGU6aG92ZXIsIC5wcm9qZWN0X19kZWxldGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcbi8qIEhPVkVSUyBFTkQgKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxzQkFBc0I7QUFDdEI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLDBDQUEwQztFQUMxQywwQ0FBMEM7RUFDMUMsd0NBQXdDO0VBQ3hDLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1KQUFtSjtBQUNySjtBQUNBLG9CQUFvQjs7OztBQUlwQixrQkFBa0I7QUFDbEI7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYjs7O3dCQUdzQjtFQUN0QixpRUFBaUU7RUFDakUsK0NBQStDO0FBQ2pEO0FBQ0EsZ0JBQWdCOzs7O0FBSWhCLGlCQUFpQjtBQUNqQjtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUNBLGVBQWU7Ozs7QUFJZixrQkFBa0I7QUFDbEI7RUFDRSxrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtF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bnRcIjpbXCIvKiBOT1JNQUxJWklORyBTVEFSVCAqL1xcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxuICAtLW1haW4tdGV4dC1jb2xvcjogI2ZmZjtcXG4gIC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kOiAjMzMzO1xcbiAgLS1oZWFkZXItaGVpZ2h0OiBjbGFtcCgxMnJlbSwgMTV2aCwgMjVyZW0pO1xcbiAgLS1zaWRlYmFyLXdpZHRoOiBjbGFtcCgyNTBweCwgMjB2dywgNDAwcHgpO1xcbiAgLS1mb290ZXItaGVpZ2h0OiBjbGFtcCg1MHB4LCA1dmgsIDEwMHB4KTtcXG4gIC0tc2lkZWJhci1iYWNrZ3JvdW5kOiAjZGRkO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuLyogTk9STUFMSVpJTkcgRU5EICovXFxuXFxuXFxuXFxuLyogQ09OVEVOVCBTVEFSVCAqL1xcbi5jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcbiAgXFxcInNpZGViYXIgbWFpbiBtYWluXFxcIlxcbiAgXFxcImZvb3RlciBmb290ZXIgZm9vdGVyXFxcIjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogdmFyKC0taGVhZGVyLWhlaWdodCkgMWZyIHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1zaWRlYmFyLXdpZHRoKSAxZnI7XFxufVxcbi8qIENPTlRFTlQgRU5EICovXFxuXFxuXFxuXFxuLyogSEVBREVSIFNUQVJUICovXFxuLmhlYWRlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbiAgcGFkZGluZzogMnJlbSA0cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDNyZW07XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG59XFxuXFxuLmhlYWRlcl9faWNvbiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvYmplY3QtZml0OiBjb250YWluO1xcbn1cXG5cXG4uaGVhZGVyX190aXRsZSB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG4vKiBIRUFERVIgRU5EICovXFxuXFxuXFxuXFxuLyogU0lERUJBUiBTVEFSVCAqL1xcbi5zaWRlYmFyIHtcXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNpZGViYXItYmFja2dyb3VuZCk7XFxuICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDRyZW07XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uc2lkZWJhcl9fdG9kby1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uc2lkZWJhcl9fdG9kby1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLnNpZGViYXJfX3RvZG8tZGl2LWltYWdlIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XFxufVxcblxcbi5zaWRlYmFyX190b2RvLWRpdi10aXRsZSB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNyZW07XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LXNlY3Rpb24tdGl0bGUge1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLnNpZGViYXJfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbiwgLmluYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBsaW5lYXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci1hZGQsIC5pbmJveF9fcHJvamVjdC1jb250YWluZXItYWRkIHtcXG4gIGhlaWdodDogMnJlbTtcXG59XFxuLyogU0lERUJBUiBFTkQgKi9cXG5cXG5cXG5cXG4vKiBNQUlOIFNUQVJUICovXFxuLm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMCAxMHJlbTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbi5pbmJveC1zZWN0aW9uLCAudG9kYXktc2VjdGlvbiwgLnRoaXMtd2Vlay1zZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogM3JlbSAwO1xcbiAgZ2FwOiAzcmVtO1xcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XFxufVxcblxcbi5pbmJveC1zZWN0aW9uX190aXRsZSwgLnRvZGF5LXNlY3Rpb25fX3RpdGxlLCAudGhpcy13ZWVrLXNlY3Rpb25fX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xcbiAgZ2FwOiAycmVtO1xcbn1cXG4vKiBNQUlOIEVORCAqL1xcblxcblxcblxcbi8qIEZPT1RFUiBTVEFSVCAqL1xcbi5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IHZhcigtLWZvb3Rlci1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mb290ZXJfX2NvcHlyaWdodCB7XFxuICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZvb3Rlcl9faWNvbiB7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGxpbmVhcjtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvZ2l0aHViLnN2Zykgbm8tcmVwZWF0IGNlbnRlciAvIGNvbnRhaW47XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAzcmVtO1xcbn1cXG4vKiBGT09URVIgRU5EICovXFxuXFxuXFxuXFxuLyogQUREIEZPUk0gU1RBUlQgKi9cXG4uYWRkLWZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICBcXFwiaW5wdXQgaW5wdXRcXFwiXFxuICBcXFwic3VibWl0IHJlc2V0XFxcIjtcXG4gIGdhcDogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG59XFxuXFxuLmFkZC1mb3JtX19pbnB1dCB7XFxuICBncmlkLWFyZWE6IGlucHV0O1xcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmFkZC1mb3JtX19pbnB1dDppbnZhbGlkIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5hZGQtZm9ybV9faW5wdXQ6dmFsaWQge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4uYWRkLWZvcm1fX3N1Ym1pdCwgLmFkZC1mb3JtX19yZXNldCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWRlci1mb290ZXItYmFja2dyb3VuZCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcXG59XFxuXFxuLmFkZC1mb3JtX19zdWJtaXQge1xcbiAgZ3JpZC1hcmVhOiBzdWJtaXQ7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcbn1cXG5cXG4uYWRkLWZvcm1fX3Jlc2V0IHtcXG4gIGdyaWQtYXJlYTogcmVzZXQ7XFxuICBiYWNrZ3JvdW5kOiBsaWdodGNvcmFsO1xcbn1cXG4vKiBBREQgRk9STSBFTkQgKi9cXG5cXG5cXG5cXG4vKiBUQVNLIFNUQVJUICovXFxuLnRhc2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGxpbmVhcjtcXG59XFxuXFxuLnRhc2tfX2ZpcnN0LXNlY3Rpb24sIC50YXNrX19zZWNvbmQtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza19fY2hlY2sge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4udGFza19fdGl0bGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udGFza19fdGl0bGVfZG9uZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnRhc2tfX25vLWRhdGUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4udGFza19fZGF0ZSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZGVyLWZvb3Rlci1iYWNrZ3JvdW5kKTtcXG4gIHBhZGRpbmc6IC41cmVtO1xcbn1cXG5cXG4udGFza19fZGVsZXRlLCAucHJvamVjdF9fZGVsZXRlIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgb3BhY2l0eTogMDtcXG4gIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvZXhpdC5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgLyBjb250YWluO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XFxufVxcbi8qIFRBU0sgRU5EICovXFxuXFxuXFxuXFxuLyogUFJPSkVDVCBTVEFSVCAqL1xcbi5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMXJlbSAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBsaW5lYXI7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdF9fbGVmdC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ucHJvamVjdF9fbGVmdC1zZWN0aW9uLWljb24ge1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbi5wcm9qZWN0X19sZWZ0LXNlY3Rpb24tdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG1heC13aWR0aDogOTBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5wcm9qZWN0X19kZWxldGUge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbn1cXG4vKiBQUk9KRUNUIEVORCAqL1xcblxcblxcblxcbi8qIEFDVElWRSBTVEFURVMgU1RBUlQqL1xcbi5zaWRlYmFyX190b2RvLWRpdl9hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLnNpZGViYXJfX3RvZG8tZGl2X2FjdGl2ZSAuc2lkZWJhcl9fdG9kby1kaXYtdGl0bGUsIC5zaWRlYmFyX190b2RvLWRpdl9hY3RpdmUgLnByb2plY3RfX2xlZnQtc2VjdGlvbi10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRhc2tfX2NoZWNrX2FjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1oZWFkZXItZm9vdGVyLWJhY2tncm91bmQpO1xcbn1cXG4vKiBBQ1RJVkUgU1RBVEVTIEVORCAqL1xcblxcblxcblxcbi8qIEhPVkVSUyBTVEFSVCAqL1xcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XFxuICAuc2lkZWJhcl9fdG9kby1kaXY6aG92ZXIsIC5zaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lci1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICAuYWRkLWZvcm1fX3N1Ym1pdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLXRleHQtY29sb3IpO1xcbiAgfVxcblxcbiAgLmFkZC1mb3JtX19yZXNldDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbiAgICBjb2xvcjogdmFyKC0tbWFpbi10ZXh0LWNvbG9yKTtcXG4gIH1cXG5cXG4gIC5pbmJveF9fcHJvamVjdC1jb250YWluZXItYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgfVxcblxcbiAgLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbiAgfVxcblxcbiAgLnByb2plY3Q6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tdGV4dC1jb2xvcik7XFxuICB9XFxuXFxuICAudGFzazpob3ZlciAudGFza19fZGVsZXRlLCAucHJvamVjdDpob3ZlciAucHJvamVjdF9fZGVsZXRlIHtcXG4gICAgdmlzaWJpbGl0eTogdW5zZXQ7XFxuICAgIG9wYWNpdHk6IHVuc2V0O1xcbiAgfVxcblxcbiAgLnRhc2tfX2RlbGV0ZTpob3ZlciAsIC50YXNrX19uby1kYXRlOmhvdmVyLCAudGFza19fY2hlY2s6aG92ZXIsIC50YXNrX19kYXRlOmhvdmVyLCAucHJvamVjdF9fZGVsZXRlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG4vKiBIT1ZFUlMgRU5EICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBmaW5kRGF0ZURlbHRhID0gKGRhdGUxLCBkYXRlMikgPT4ge1xuICBjb25zdCBtc1BlckRheSA9IDEwMDAgKiA2MCAqIDYwICogMjRcblxuICBjb25zdCB1dGMxID0gRGF0ZS5VVEMoZGF0ZTEuZ2V0RnVsbFllYXIoKSwgZGF0ZTEuZ2V0TW9udGgoKSwgZGF0ZTEuZ2V0RGF0ZSgpKVxuICBjb25zdCB1dGMyID0gRGF0ZS5VVEMoZGF0ZTIuZ2V0RnVsbFllYXIoKSwgZGF0ZTIuZ2V0TW9udGgoKSwgZGF0ZTIuZ2V0RGF0ZSgpKVxuXG4gIHJldHVybiBNYXRoLmZsb29yKCh1dGMyIC0gdXRjMSkgLyBtc1BlckRheSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmluZERhdGVEZWx0YVxuIiwiY29uc3QgY3JlYXRlRm9vdGVyID0gKCgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcblxuICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gQWJ1emFyIE1hbWVkb3ZgXG5cbiAgY29uc3QgZm9vdGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICBmb290ZXJJY29uLmNsYXNzTmFtZSA9ICdmb290ZXJfX2ljb24nXG4gIGZvb3Rlckljb24uaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vRGFuaWVsZURlZm9lJ1xuICBmb290ZXJJY29uLnRhcmdldCA9ICdfYmxhbmsnXG4gIGZvb3Rlckljb24ucmVsID0gJ25vcmVmZXJyZXIgbm9vcGVuZXIgbm9mb2xsb3cnXG5cbiAgZm9vdGVyLmNsYXNzTmFtZSA9ICdmb290ZXInXG4gIGNvcHlyaWdodC5jbGFzc05hbWUgPSAnZm9vdGVyX19jb3B5cmlnaHQnXG5cbiAgZm9vdGVyLmFwcGVuZChjb3B5cmlnaHQpXG4gIGZvb3Rlci5hcHBlbmQoZm9vdGVySWNvbilcblxuICByZXR1cm4gZm9vdGVyXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlclxuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9pbWFnZXMvaGVhZGVyLWljb24uc3ZnJ1xuLy8gSUlGRVxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgaGVhZGVyLmNsYXNzTmFtZSA9ICdoZWFkZXInXG5cbiAgY29uc3QgaGVhZGVySWNvbiA9IG5ldyBJbWFnZSgpXG4gIGhlYWRlckljb24uY2xhc3NOYW1lID0gJ2hlYWRlcl9faWNvbidcbiAgaGVhZGVySWNvbi5zcmMgPSBJY29uXG5cbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gIGhlYWRlclRpdGxlLmNsYXNzTmFtZSA9ICdoZWFkZXJfX3RpdGxlJ1xuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9ICd0b2RvIGxpc3QnXG5cbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJJY29uKVxuICBoZWFkZXIuYXBwZW5kKGhlYWRlclRpdGxlKVxuXG4gIHJldHVybiBoZWFkZXJcbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyXG4iLCJpbXBvcnQgQWRkUHJvamVjdEljb24gZnJvbSAnLi9pbWFnZXMvYWRkLXByb2plY3Quc3ZnJ1xuXG5jb25zdCBjcmVhdGVBZGRCdXR0b24gPSAoKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc05hbWUgPSAnaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbidcblxuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uSWNvbiA9IG5ldyBJbWFnZSgpXG4gIGFkZFByb2plY3RCdXR0b25JY29uLmNsYXNzTmFtZSA9ICdpbmJveF9fcHJvamVjdC1jb250YWluZXItYWRkJ1xuICBhZGRQcm9qZWN0QnV0dG9uSWNvbi5zcmMgPSBBZGRQcm9qZWN0SWNvblxuXG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgYWRkUHJvamVjdEJ1dHRvblRpdGxlLmNsYXNzTmFtZSA9ICdpbmJveF9fcHJvamVjdC1jb250YWluZXItdGl0bGUnXG5cbiAgYWRkUHJvamVjdEJ1dHRvbi5hcHBlbmQoYWRkUHJvamVjdEJ1dHRvbkljb24sIGFkZFByb2plY3RCdXR0b25UaXRsZSlcblxuICByZXR1cm4gYWRkUHJvamVjdEJ1dHRvblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGRCdXR0b25cbiIsImNvbnN0IGNyZWF0ZUFkZEZvcm0gPSAoKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gIGZvcm0uY2xhc3NOYW1lID0gJ2FkZC1mb3JtJ1xuICBmb3JtLmlkID0gJ2luYm94LWZvcm0nXG5cbiAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICBwcm9qZWN0SW5wdXQuY2xhc3NOYW1lID0gJ2FkZC1mb3JtX19pbnB1dCdcbiAgcHJvamVjdElucHV0LmlkID0gJ2luYm94LWZvcm1fX2lucHV0J1xuICBwcm9qZWN0SW5wdXQubmFtZSA9ICdpbmJveC1mb3JtX19pbnB1dCdcbiAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKVxuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAxKVxuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc05hbWUgPSAnYWRkLWZvcm1fX3N1Ym1pdCdcbiAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0J1xuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnYWRkJ1xuICBzdWJtaXRCdXR0b24uaWQgPSAnaW5ib3gtc3VibWl0J1xuXG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgcmVzZXRCdXR0b24uY2xhc3NOYW1lID0gJ2FkZC1mb3JtX19yZXNldCdcbiAgcmVzZXRCdXR0b24udHlwZSA9ICdyZXNldCdcbiAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSAnY2FuY2VsJ1xuICByZXNldEJ1dHRvbi5pZCA9ICdpbmJveC1yZXNldCdcblxuICBmb3JtLmFwcGVuZChwcm9qZWN0SW5wdXQsIHN1Ym1pdEJ1dHRvbiwgcmVzZXRCdXR0b24pXG5cbiAgcmV0dXJuIGZvcm1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRkRm9ybVxuIiwiLy8gIE1PVkUgRVZFUlkgRlVDS0lORyBFVkVOVCBMSVNURU5FUiBUTyBNQUlOXG5pbXBvcnQgYWRkQnV0dG9uIGZyb20gJy4vaW5ib3hBZGRCdXR0b24nXG5cbmNvbnN0IGNyZWF0ZUluYm94U2VjdGlvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IGluYm94U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICBpbmJveFNlY3Rpb24uY2xhc3NOYW1lID0gJ2luYm94LXNlY3Rpb24nXG5cbiAgY29uc3QgaW5ib3hTZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIGluYm94U2VjdGlvblRpdGxlLmNsYXNzTmFtZSA9ICdpbmJveC1zZWN0aW9uX190aXRsZSdcbiAgaW5ib3hTZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnaW5ib3gnXG5cbiAgYWRkQnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5pbmJveF9fcHJvamVjdC1jb250YWluZXItdGl0bGUnKS50ZXh0Q29udGVudCA9ICdhZGQgdGFzaydcblxuICBpbmJveFNlY3Rpb24uYXBwZW5kKGluYm94U2VjdGlvblRpdGxlLCBhZGRCdXR0b24pXG5cbiAgcmV0dXJuIGluYm94U2VjdGlvblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVJbmJveFNlY3Rpb25cbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBpbmJveFNlY3Rpb24gZnJvbSAnLi9pbmJveFNlY3Rpb24nXG5cbmltcG9ydCBhZGRGb3JtIGZyb20gJy4vaW5ib3hBZGRGb3JtJ1xuaW1wb3J0IHRhc2sgZnJvbSAnLi90YXNrJ1xuXG5pbXBvcnQgZmluZERhdGVEZWx0YSBmcm9tICcuL2ZpbmREYXRlRGVsdGEnXG5cbmNvbnN0IHRvZGF5VGFza3MgPSBbXVxuY29uc3QgdGhpc1dlZWtUYXNrcyA9IFtdXG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gIG1haW4uY2xhc3NOYW1lID0gJ21haW4nXG5cbiAgbWFpbi5hcHBlbmQoaW5ib3hTZWN0aW9uKVxuXG4gIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCkge1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2luYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24nIHx8IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lID09PSAnaW5ib3hfX3Byb2plY3QtY29udGFpbmVyLWJ1dHRvbicpIHtcbiAgICAgICAgLy8gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveF9fcHJvamVjdC1jb250YWluZXItYnV0dG9uJykucmVtb3ZlKClcbiAgICAgICAgbWFpbi5maXJzdEVsZW1lbnRDaGlsZC5pbnNlcnRCZWZvcmUoYWRkRm9ybSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24nKSlcbiAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrX19jaGVjaycpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykub3V0ZXJIVE1MKVxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCd0YXNrX19jaGVja19hY3RpdmUnKVxuICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZSgndGFza19fdGl0bGVfZG9uZScpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykub3V0ZXJIVE1MLCBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLm91dGVySFRNTClcbiAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAndGFza19fbm8tZGF0ZScpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5vdXRlckhUTUwpXG4gICAgICAgIGNvbnN0IGNhbGVuZGFySW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGNhbGVuZGFySW5wdXQudHlwZSA9ICdkYXRlJ1xuICAgICAgICBjYWxlbmRhcklucHV0LmNsYXNzTmFtZSA9ICd0YXNrX19kYXRlJ1xuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLnF1ZXJ5U2VsZWN0b3IoJy50YXNrX19zZWNvbmQtc2VjdGlvbicpLnByZXBlbmQoY2FsZW5kYXJJbnB1dClcbiAgICAgICAgY2FsZW5kYXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IGNhbGVuZGFySW5wdXQudmFsdWUuc3BsaXQoJy0nKS5qb2luKCcvJylcbiAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcbiAgICAgICAgICBjb25zdCBwbGFubmVkRGF0ZSA9IG5ldyBEYXRlKGNhbGVuZGFySW5wdXQudmFsdWUpXG5cbiAgICAgICAgICBjb25zdCBkYXRlRGVsdGEgPSBmaW5kRGF0ZURlbHRhKGN1cnJlbnREYXRlLCBwbGFubmVkRGF0ZSlcblxuICAgICAgICAgIGlmIChkYXRlRGVsdGEgPj0gMCAmJiBkYXRlRGVsdGEgPD0gMSkge1xuICAgICAgICAgICAgdG9kYXlUYXNrcy5wdXNoKG1haW4uZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nKVxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZURlbHRhIDw9IDcgJiYgZGF0ZURlbHRhID4gMSkge1xuICAgICAgICAgICAgdGhpc1dlZWtUYXNrcy5wdXNoKG1haW4uZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQubmV4dEVsZW1lbnRTaWJsaW5nKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhbGVuZGFySW5wdXQuY2xvc2VzdCgnLnRhc2snKS5xdWVyeVNlbGVjdG9yKCcudGFza19fc2Vjb25kLXNlY3Rpb24nKS5wcmVwZW5kKGUudGFyZ2V0KVxuICAgICAgICAgIGNhbGVuZGFySW5wdXQucmVtb3ZlKClcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLm91dGVySFRNTCwgZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5vdXRlckhUTUwpXG4gICAgICAgIH0pXG4gICAgICAgIGUudGFyZ2V0LnJlbW92ZSgpXG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3Rhc2tfX2RlbGV0ZScpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZS50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5vdXRlckhUTUwpXG4gICAgICAgIHRvZGF5VGFza3Muc3BsaWNlKHRvZGF5VGFza3MuaW5kZXhPZihlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpKSwgMSlcbiAgICAgICAgdGhpc1dlZWtUYXNrcy5zcGxpY2UodGhpc1dlZWtUYXNrcy5pbmRleE9mKGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJykpLCAxKVxuICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCcudGFzaycpLnJlbW92ZSgpXG4gICAgICB9XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC1zZWN0aW9uX190aXRsZScpLnRleHRDb250ZW50LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtc2VjdGlvbicpLm91dGVySFRNTClcbiAgfSlcblxuICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC1zZWN0aW9uX190aXRsZScpLnRleHRDb250ZW50LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtc2VjdGlvbicpLm91dGVySFRNTClcbiAgfSlcblxuICBjb25zdCBjbG9zZUZvcm1PcGVuQnV0dG9uID0gKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGVcbiAgICBpZiAoZS50eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBuZXdUYXNrID0gdGFzay5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgIG5ld1Rhc2sucXVlcnlTZWxlY3RvcignLnRhc2tfX3RpdGxlJykudGV4dENvbnRlbnQgPSBtYWluLnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZm9ybV9faW5wdXQnKS52YWx1ZVxuICAgICAgbWFpbi5maXJzdEVsZW1lbnRDaGlsZC5pbnNlcnRCZWZvcmUobmV3VGFzaywgbWFpbi5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuZXdUYXNrLm91dGVySFRNTCwgbmV3VGFzay5vdXRlckhUTUwpXG4gICAgICB0YXJnZXQucmVzZXQoKVxuICAgIH1cbiAgICB0YXJnZXQucmVtb3ZlKClcbiAgICAvLyBtYWluLmZpcnN0RWxlbWVudENoaWxkLmFwcGVuZChhZGRCdXR0b24pXG4gIH1cblxuICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNsb3NlRm9ybU9wZW5CdXR0b24pXG4gIG1haW4uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCBjbG9zZUZvcm1PcGVuQnV0dG9uKVxuXG4gIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKGtleS5pbmNsdWRlcygnY2xhc3M9XCJ0YXNrJykpIHtcbiAgICAgIGluYm94U2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBrZXkpXG4gICAgICBpbmJveFNlY3Rpb24uaW5zZXJ0QmVmb3JlKGluYm94U2VjdGlvbi5maXJzdEVsZW1lbnRDaGlsZCwgaW5ib3hTZWN0aW9uLmZpcnN0RWxlbWVudENoaWxkLm5leHRFbGVtZW50U2libGluZy5uZXh0RWxlbWVudFNpYmxpbmcpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBtYWluXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW5cblxuZXhwb3J0IHsgdG9kYXlUYXNrcywgdGhpc1dlZWtUYXNrcyB9XG4iLCJpbXBvcnQgcHJvamVjdEljb24gZnJvbSAnLi9pbWFnZXMvcHJvamVjdC1pY29uLnN2ZydcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICgoKSA9PiB7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICBwcm9qZWN0LmNsYXNzTmFtZSA9ICdwcm9qZWN0J1xuXG4gIGNvbnN0IGxlZnRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgbGVmdFNlY3Rpb24uY2xhc3NOYW1lID0gJ3Byb2plY3RfX2xlZnQtc2VjdGlvbidcbiAgY29uc3QgbGVmdFNlY3Rpb25JY29uID0gbmV3IEltYWdlKClcbiAgbGVmdFNlY3Rpb25JY29uLmNsYXNzTmFtZSA9ICdwcm9qZWN0X19sZWZ0LXNlY3Rpb24taWNvbidcbiAgbGVmdFNlY3Rpb25JY29uLnNyYyA9IHByb2plY3RJY29uXG4gIGNvbnN0IGxlZnRTZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIGxlZnRTZWN0aW9uVGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3RfX2xlZnQtc2VjdGlvbi10aXRsZSdcbiAgbGVmdFNlY3Rpb24uYXBwZW5kKGxlZnRTZWN0aW9uSWNvbiwgbGVmdFNlY3Rpb25UaXRsZSlcblxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ3Byb2plY3RfX2RlbGV0ZSdcblxuICBwcm9qZWN0LmFwcGVuZChsZWZ0U2VjdGlvbiwgZGVsZXRlQnV0dG9uKVxuXG4gIHJldHVybiBwcm9qZWN0XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3RcbiIsIi8vIFNFQ1RJT05TXG5pbXBvcnQgdG9kb1NlY3Rpb24gZnJvbSAnLi9zaWRlYmFyVG9kb1NlY3Rpb24nXG5pbXBvcnQgcHJvamVjdFNlY3Rpb24gZnJvbSAnLi9zaWRlYmFyUHJvamVjdFNlY3Rpb24nXG5cbmNvbnN0IGNyZWF0ZVNpZGViYXIgPSAoKCkgPT4ge1xuICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKVxuICBzaWRlYmFyLmNsYXNzTmFtZSA9ICdzaWRlYmFyJ1xuXG4gIHNpZGViYXIuYXBwZW5kKHRvZG9TZWN0aW9uLCBwcm9qZWN0U2VjdGlvbilcblxuICByZXR1cm4gc2lkZWJhclxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaWRlYmFyXG4iLCJpbXBvcnQgQWRkUHJvamVjdEljb24gZnJvbSAnLi9pbWFnZXMvYWRkLXByb2plY3Quc3ZnJ1xuXG5jb25zdCBjcmVhdGVBZGRCdXR0b24gPSAoKCkgPT4ge1xuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc05hbWUgPSAnc2lkZWJhcl9fcHJvamVjdC1jb250YWluZXItYnV0dG9uJ1xuXG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b25JY29uID0gbmV3IEltYWdlKClcbiAgYWRkUHJvamVjdEJ1dHRvbkljb24uY2xhc3NOYW1lID0gJ3NpZGViYXJfX3Byb2plY3QtY29udGFpbmVyLWFkZCdcbiAgYWRkUHJvamVjdEJ1dHRvbkljb24uc3JjID0gQWRkUHJvamVjdEljb25cblxuICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gIGFkZFByb2plY3RCdXR0b25UaXRsZS5jbGFzc05hbWUgPSAnc2lkZWJhcl9fcHJvamVjdC1jb250YWluZXItdGl0bGUnXG5cbiAgYWRkUHJvamVjdEJ1dHRvbi5hcHBlbmQoYWRkUHJvamVjdEJ1dHRvbkljb24sIGFkZFByb2plY3RCdXR0b25UaXRsZSlcblxuICByZXR1cm4gYWRkUHJvamVjdEJ1dHRvblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGRCdXR0b25cbiIsImNvbnN0IGNyZWF0ZUFkZEZvcm0gPSAoKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gIGZvcm0uY2xhc3NOYW1lID0gJ2FkZC1mb3JtJ1xuICBmb3JtLmlkID0gJ2FkZC1mb3JtJ1xuXG4gIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgcHJvamVjdElucHV0LmNsYXNzTmFtZSA9ICdhZGQtZm9ybV9faW5wdXQnXG4gIHByb2plY3RJbnB1dC5pZCA9ICdhZGQtZm9ybV9faW5wdXQnXG4gIHByb2plY3RJbnB1dC5uYW1lID0gJ2FkZC1mb3JtX19pbnB1dCdcbiAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCB0cnVlKVxuICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnLCAxKVxuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIHN1Ym1pdEJ1dHRvbi5jbGFzc05hbWUgPSAnYWRkLWZvcm1fX3N1Ym1pdCdcbiAgc3VibWl0QnV0dG9uLnR5cGUgPSAnc3VibWl0J1xuICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnYWRkJ1xuICBzdWJtaXRCdXR0b24uaWQgPSAnc2lkZWJhci1zdWJtaXQnXG5cbiAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICByZXNldEJ1dHRvbi5jbGFzc05hbWUgPSAnYWRkLWZvcm1fX3Jlc2V0J1xuICByZXNldEJ1dHRvbi50eXBlID0gJ3Jlc2V0J1xuICByZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9ICdjYW5jZWwnXG4gIHJlc2V0QnV0dG9uLmlkID0gJ3NpZGViYXItcmVzZXQnXG5cbiAgZm9ybS5hcHBlbmQocHJvamVjdElucHV0LCBzdWJtaXRCdXR0b24sIHJlc2V0QnV0dG9uKVxuXG4gIHJldHVybiBmb3JtXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkZEZvcm1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGVxZXFlcSAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWR1cGxpY2F0ZXMgKi9cbi8vICBNT1ZFIEVWRVJZIEZVQ0tJTkcgRVZFTlQgTElTVEVORVIgVE8gTUFJTlxuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluJ1xuXG5pbXBvcnQgaW5ib3hTZWN0aW9uIGZyb20gJy4vaW5ib3hTZWN0aW9uJ1xuXG5pbXBvcnQgeyB0b2RheVRhc2tzLCB0aGlzV2Vla1Rhc2tzIH0gZnJvbSAnLi9tYWluJ1xuXG5pbXBvcnQgZmluZERhdGVEZWx0YSBmcm9tICcuL2ZpbmREYXRlRGVsdGEnXG5cbmluYm94U2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpLmZvckVhY2goKHRhc2spID0+IHtcbiAgaWYgKHRvZGF5VGFza3MuaW5kZXhPZih0YXNrKSA9PT0gLTFcbiAgJiYgbmV3IERhdGUodGFzay5xdWVyeVNlbGVjdG9yKCcudGFza19fbm8tZGF0ZScpLnRleHRDb250ZW50KS5nZXREYXRlKCkgPT0gbmV3IERhdGUoKS5nZXREYXRlKCkpIHtcbiAgICB0b2RheVRhc2tzLnB1c2godGFzay5jbG9uZU5vZGUodHJ1ZSkpXG4gIH0gZWxzZSBpZiAodGhpc1dlZWtUYXNrcy5pbmRleE9mKHRhc2spID09PSAtMVxuICAmJiBmaW5kRGF0ZURlbHRhKG5ldyBEYXRlKHRhc2sucXVlcnlTZWxlY3RvcignLnRhc2tfX25vLWRhdGUnKS50ZXh0Q29udGVudCksIG5ldyBEYXRlKCkpIDw9IDcpIHtcbiAgICB0aGlzV2Vla1Rhc2tzLnB1c2godGFzay5jbG9uZU5vZGUodHJ1ZSkpXG4gIH1cbn0pXG5cbmNvbnN0IGdlbmVyYXRlZFNlY3Rpb24gPSBpbmJveFNlY3Rpb24uY2xvbmVOb2RlKCcuaW5ib3gtc2VjdGlvbl9fdGl0bGUnLCAnLmluYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24nKVxuXG5jb25zdCB0b2RheVNlY3Rpb24gPSBpbmJveFNlY3Rpb24uY2xvbmVOb2RlKHRydWUpXG5jb25zdCB0aGlzV2Vla1NlY3Rpb24gPSBpbmJveFNlY3Rpb24uY2xvbmVOb2RlKHRydWUpXG50b2RheVNlY3Rpb24ucXVlcnlTZWxlY3RvcignLmluYm94X19wcm9qZWN0LWNvbnRhaW5lci1idXR0b24nKS5yZW1vdmUoKVxudGhpc1dlZWtTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5pbmJveF9fcHJvamVjdC1jb250YWluZXItYnV0dG9uJykucmVtb3ZlKClcblxuY29uc3QgY2hhbmdlTWFpblN0YXRlID0gKHNpZGViYXJCdXR0b24pID0+IHtcbiAgaWYgKHNpZGViYXJCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyX190b2RvLWRpdl9hY3RpdmUnKSkgcmV0dXJuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdG9kby1kaXZfYWN0aXZlJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fdG9kby1kaXZfYWN0aXZlJykuY2xhc3NMaXN0LnJlbW92ZSgnc2lkZWJhcl9fdG9kby1kaXZfYWN0aXZlJylcbiAgfVxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzaWRlYmFyQnV0dG9uLm91dGVySFRNTCwgc2lkZWJhckJ1dHRvbi5vdXRlckhUTUwpXG4gIHNpZGViYXJCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2lkZWJhcl9fdG9kby1kaXZfYWN0aXZlJylcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2lkZWJhckJ1dHRvbi5vdXRlckhUTUwsIHNpZGViYXJCdXR0b24ub3V0ZXJIVE1MKVxuXG4gIG1haW4uaW5uZXJIVE1MID0gJydcblxuICBjb25zdCBpZGVudGlmaWVyID0gc2lkZWJhckJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSB8fCBzaWRlYmFyQnV0dG9uLmlkLnJlcGxhY2UoLy0rL2csICcgJylcblxuICBpZiAoaWRlbnRpZmllciA9PT0gJ1RPREFZJykge1xuICAgIHRvZGF5U2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0b2RheVRhc2tzLmluZGV4T2YodGFzaykgPT09IC0xKSB0YXNrLnJlbW92ZSgpXG4gICAgfSlcbiAgICB0b2RheVRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRvZGF5U2VjdGlvbi5hcHBlbmQodGFzay5jbG9uZU5vZGUodHJ1ZSkpXG4gICAgfSlcbiAgfSBlbHNlIGlmIChpZGVudGlmaWVyID09PSAnVEhJUyBXRUVLJykge1xuICAgIHRoaXNXZWVrU2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGlmICh0b2RheVRhc2tzLmluZGV4T2YodGFzaykgPT09IC0xKSB0YXNrLnJlbW92ZSgpXG4gICAgfSlcbiAgICB0aGlzV2Vla1Rhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHRoaXNXZWVrU2VjdGlvbi5hcHBlbmQodGFzay5jbG9uZU5vZGUodHJ1ZSkpXG4gICAgfSlcbiAgfVxuXG4gIGlmIChpZGVudGlmaWVyID09PSAnSU5CT1gnKSB7XG4gICAgbWFpbi5hcHBlbmQoaW5ib3hTZWN0aW9uKVxuICB9IGVsc2UgaWYgKGlkZW50aWZpZXIgPT09ICdUSElTIFdFRUsnKSB7XG4gICAgdGhpc1dlZWtTZWN0aW9uLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gaWRlbnRpZmllclxuICAgIG1haW4uYXBwZW5kKHRoaXNXZWVrU2VjdGlvbilcbiAgfSBlbHNlIGlmIChpZGVudGlmaWVyID09PSAnVE9EQVknKSB7XG4gICAgdG9kYXlTZWN0aW9uLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gaWRlbnRpZmllclxuICAgIG1haW4uYXBwZW5kKHRvZGF5U2VjdGlvbilcbiAgfSBlbHNlIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oaWRlbnRpZmllcikpIHtcbiAgICBjb25zdCBjbG9uZSA9IGdlbmVyYXRlZFNlY3Rpb24uY2xvbmVOb2RlKHRydWUpXG4gICAgY2xvbmUucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKS5mb3JFYWNoKCh0YXNrKSA9PiB0YXNrLnJlbW92ZSgpKVxuICAgIGNsb25lLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID0gaWRlbnRpZmllclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkZW50aWZpZXIsIGNsb25lLm91dGVySFRNTClcbiAgICBtYWluLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGlkZW50aWZpZXIpKVxuICB9IGVsc2Uge1xuICAgIG1haW4uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgbG9jYWxTdG9yYWdlLmdldEl0ZW0oaWRlbnRpZmllcikpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlTWFpblN0YXRlXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IGFkZEJ1dHRvbiBmcm9tICcuL3NpZGViYXJBZGRCdXR0b24nXG5pbXBvcnQgYWRkRm9ybSBmcm9tICcuL3NpZGViYXJBZGRGb3JtJ1xuaW1wb3J0IHByb2plY3QgZnJvbSAnLi9wcm9qZWN0J1xuXG5pbXBvcnQgY2hhbmdlTWFpblN0YXRlIGZyb20gJy4vc2lkZWJhckNoYW5nZU1haW4nXG5cbmltcG9ydCBtYWluIGZyb20gJy4vbWFpbidcblxuY29uc3QgY3JlYXRlUHJvamVjdFNlY3Rpb24gPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxuICBwcm9qZWN0U2VjdGlvbi5jbGFzc05hbWUgPSAnc2lkZWJhcl9fcHJvamVjdC1zZWN0aW9uJ1xuXG4gIGNvbnN0IHByb2plY3RTZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIHByb2plY3RTZWN0aW9uVGl0bGUuY2xhc3NOYW1lID0gJ3NpZGViYXJfX3Byb2plY3Qtc2VjdGlvbi10aXRsZSdcbiAgcHJvamVjdFNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9ICdwcm9qZWN0cydcblxuICBjb25zdCBwcm9qZWN0U2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHByb2plY3RTZWN0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzaWRlYmFyX19wcm9qZWN0LWNvbnRhaW5lcidcblxuICBhZGRCdXR0b24ucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3Byb2plY3QtY29udGFpbmVyLXRpdGxlJykudGV4dENvbnRlbnQgPSAnYWRkIHByb2plY3QnXG5cbiAgcHJvamVjdFNlY3Rpb25Db250YWluZXIuYXBwZW5kKGFkZEJ1dHRvbilcblxuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBhZGRCdXR0b24ucmVtb3ZlKClcbiAgICBwcm9qZWN0U2VjdGlvbkNvbnRhaW5lci5hcHBlbmQoYWRkRm9ybSlcbiAgfSlcblxuICBwcm9qZWN0U2VjdGlvbkNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ3Byb2plY3RfX2RlbGV0ZScpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQub3V0ZXJIVE1MKVxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oZS50YXJnZXQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fbGVmdC1zZWN0aW9uLXRpdGxlJykudGV4dENvbnRlbnQudG9VcHBlckNhc2UoKSlcbiAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucmVtb3ZlKClcbiAgICAgIG1haW4uaW5uZXJIVE1MID0gJydcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpIHx8IGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0JykpIHtcbiAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpKSB7XG4gICAgICAgIGNoYW5nZU1haW5TdGF0ZShlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdCcpKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNoYW5nZU1haW5TdGF0ZShlLnRhcmdldClcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgY2xvc2VGb3JtT3BlbkJ1dHRvbiA9IChlKSA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXQgfSA9IGVcbiAgICBpZiAoZS50eXBlID09PSAnc3VibWl0Jykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdC5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgIG5ld1Byb2plY3QucXVlcnlTZWxlY3RvcignLnByb2plY3RfX2xlZnQtc2VjdGlvbi10aXRsZScpLnRleHRDb250ZW50ID0gYWRkRm9ybS5xdWVyeVNlbGVjdG9yKCcuYWRkLWZvcm1fX2lucHV0JykudmFsdWVcbiAgICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgbmV3UHJvamVjdC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdF9fbGVmdC1zZWN0aW9uLXRpdGxlJykudGV4dENvbnRlbnQudG9VcHBlckNhc2UoKSlcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5ld1Byb2plY3Qub3V0ZXJIVE1MLCBuZXdQcm9qZWN0Lm91dGVySFRNTClcbiAgICAgIHByb2plY3RTZWN0aW9uQ29udGFpbmVyLmluc2VydEJlZm9yZShuZXdQcm9qZWN0LCBwcm9qZWN0U2VjdGlvbkNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZClcbiAgICAgIHRhcmdldC5yZXNldCgpXG4gICAgfVxuICAgIHRhcmdldC5yZW1vdmUoKVxuICAgIHByb2plY3RTZWN0aW9uQ29udGFpbmVyLmFwcGVuZChhZGRCdXR0b24pXG4gIH1cblxuICBhZGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNsb3NlRm9ybU9wZW5CdXR0b24pXG4gIGFkZEZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCBjbG9zZUZvcm1PcGVuQnV0dG9uKVxuXG4gIHByb2plY3RTZWN0aW9uLmFwcGVuZChwcm9qZWN0U2VjdGlvblRpdGxlLCBwcm9qZWN0U2VjdGlvbkNvbnRhaW5lcilcblxuICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmIChrZXkuaW5jbHVkZXMoJ2NsYXNzPVwicHJvamVjdFwiJykpIHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpXG4gICAgICBwcm9qZWN0U2VjdGlvbkNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBuZXdQcm9qZWN0KVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gcHJvamVjdFNlY3Rpb25cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUHJvamVjdFNlY3Rpb25cbiIsImltcG9ydCBJbmJveEljb24gZnJvbSAnLi9pbWFnZXMvaW5ib3guc3ZnJ1xuaW1wb3J0IENhbGVuZGFySWNvbiBmcm9tICcuL2ltYWdlcy9jYWxlbmRhci5zdmcnXG5pbXBvcnQgV2Vla2x5SWNvbiBmcm9tICcuL2ltYWdlcy93ZWVrLWNhbGVuZGFyLnN2ZydcblxuLy8gY2xpY2sgZXZlbnQgaGFuZGxlclxuaW1wb3J0IGNoYW5nZU1haW5TdGF0ZSBmcm9tICcuL3NpZGViYXJDaGFuZ2VNYWluJ1xuXG5jb25zdCBjcmVhdGVUb2RvU2VjdGlvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IHRvZG9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXG4gIHRvZG9TZWN0aW9uLmNsYXNzTmFtZSA9ICdzaWRlYmFyX190b2RvLXNlY3Rpb24nXG5cbiAgY29uc3QgdG9kb1NlY3Rpb25Db250ZW50ID0gW1xuICAgIHtcbiAgICAgIGltYWdlOiBJbmJveEljb24sXG4gICAgICB0aXRsZTogJ2luYm94JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiBDYWxlbmRhckljb24sXG4gICAgICB0aXRsZTogJ3RvZGF5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiBXZWVrbHlJY29uLFxuICAgICAgdGl0bGU6ICd0aGlzIHdlZWsnLFxuICAgIH0sXG4gIF1cblxuICB0b2RvU2VjdGlvbkNvbnRlbnQuZm9yRWFjaCgoY29udGVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb250ZW50RGl2LmNsYXNzTmFtZSA9ICdzaWRlYmFyX190b2RvLWRpdidcbiAgICBjb250ZW50RGl2LmlkID0gY29udGVudC50aXRsZS5yZXBsYWNlKC9cXFcrL2csICctJykudG9VcHBlckNhc2UoKVxuXG4gICAgaWYgKGluZGV4ID09PSAwKSBjb250ZW50RGl2LmNsYXNzTmFtZSA9ICdzaWRlYmFyX190b2RvLWRpdiBzaWRlYmFyX190b2RvLWRpdl9hY3RpdmUnXG5cbiAgICBjb25zdCBjb250ZW50RGl2SW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIGNvbnRlbnREaXZJbWFnZS5jbGFzc05hbWUgPSAnc2lkZWJhcl9fdG9kby1kaXYtaW1hZ2UnXG4gICAgY29udGVudERpdkltYWdlLnNyYyA9IGNvbnRlbnQuaW1hZ2VcblxuICAgIGNvbnN0IGNvbnRlbnREaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBjb250ZW50RGl2VGl0bGUuY2xhc3NOYW1lID0gJ3NpZGViYXJfX3RvZG8tZGl2LXRpdGxlJ1xuICAgIGNvbnRlbnREaXZUaXRsZS50ZXh0Q29udGVudCA9IGNvbnRlbnQudGl0bGVcblxuICAgIGNvbnRlbnREaXYuYXBwZW5kKGNvbnRlbnREaXZJbWFnZSwgY29udGVudERpdlRpdGxlKVxuXG4gICAgY29udGVudERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNoYW5nZU1haW5TdGF0ZShjb250ZW50RGl2KSlcblxuICAgIHRvZG9TZWN0aW9uLmFwcGVuZChjb250ZW50RGl2KVxuICB9KVxuXG4gIHJldHVybiB0b2RvU2VjdGlvblxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUb2RvU2VjdGlvblxuIiwiY29uc3QgY3JlYXRlVGFzayA9ICgoKSA9PiB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICB0YXNrLmNsYXNzTmFtZSA9ICd0YXNrJ1xuXG4gIGNvbnN0IGZpcnN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGZpcnN0U2VjdGlvbi5jbGFzc05hbWUgPSAndGFza19fZmlyc3Qtc2VjdGlvbidcbiAgY29uc3QgY2hlY2tDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjaGVja0NpcmNsZS5jbGFzc05hbWUgPSAndGFza19fY2hlY2snXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0JylcbiAgdGFza1RpdGxlLmNsYXNzTmFtZSA9ICd0YXNrX190aXRsZSdcbiAgZmlyc3RTZWN0aW9uLmFwcGVuZChjaGVja0NpcmNsZSwgdGFza1RpdGxlKVxuXG4gIGNvbnN0IHNlY29uZFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBzZWNvbmRTZWN0aW9uLmNsYXNzTmFtZSA9ICd0YXNrX19zZWNvbmQtc2VjdGlvbidcbiAgY29uc3Qgbm9EYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICBub0RhdGVUZXh0LmNsYXNzTmFtZSA9ICd0YXNrX19uby1kYXRlJ1xuICBub0RhdGVUZXh0LnRleHRDb250ZW50ID0gJ05vIERhdGUnXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAndGFza19fZGVsZXRlJ1xuICBzZWNvbmRTZWN0aW9uLmFwcGVuZChub0RhdGVUZXh0LCBkZWxldGVCdXR0b24pXG5cbiAgdGFzay5hcHBlbmQoZmlyc3RTZWN0aW9uLCBzZWNvbmRTZWN0aW9uKVxuXG4gIHJldHVybiB0YXNrXG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2tcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBTVFlMRVNcbmltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJ1xuXG4vLyBDT1JFIFBBUlRTXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyJ1xuaW1wb3J0IHNpZGViYXIgZnJvbSAnLi9zaWRlYmFyJ1xuaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluJ1xuaW1wb3J0IGZvb3RlciBmcm9tICcuL2Zvb3RlcidcblxuLy8gaW1wb3J0IEljb24gZnJvbSAnLi9pbWFnZXMvaWNvbi5zdmdcbi8vIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKClcbi8vIGltYWdlLnNyYyA9IEljb25cblxuY29uc3QgY3JlYXRlQXBwID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNvbnRlbnQuY2xhc3NOYW1lID0gJ2NvbnRlbnQnXG5cbiAgY29udGVudC5hcHBlbmQoaGVhZGVyKVxuICBjb250ZW50LmFwcGVuZChzaWRlYmFyKVxuICBjb250ZW50LmFwcGVuZChtYWluKVxuICBjb250ZW50LmFwcGVuZChmb290ZXIpXG5cbiAgcmV0dXJuIGNvbnRlbnRcbn0pKClcblxuZG9jdW1lbnQuYm9keS5hcHBlbmQoY3JlYXRlQXBwKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9