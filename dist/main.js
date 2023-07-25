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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.content{\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.header{\r\n\r\n    width: 100%;\r\n    background-color: #075985;\r\n    display: flex;\r\n    box-shadow: 5px 5px 10px rgba(39, 57, 71, 0.3);\r\n    justify-content: space-between;\r\n    \r\n}\r\n\r\n.header h1{\r\n    color:white;\r\n    margin-left: 10vw;\r\n    margin-right: 5vw;\r\n    \r\n}\r\n\r\n.mainPage{\r\n    display: flex;\r\n\r\n}\r\n\r\n.sideBar{\r\n    background-color: #f0f9ff;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 20%;\r\n    height: 90vh;\r\n    box-shadow: 5px 5px 10px rgba(39, 57, 71, 0.3);\r\n    \r\n\r\n\r\n}\r\n.sideBar h3{\r\n    font-size: 25px;\r\n    margin:  1vh ;\r\n    padding: 2vh;\r\n    \r\n}\r\n.sideBar h3:hover{\r\n    background-color: #075985;\r\n    background-size: cover;\r\n    color: white;\r\n    cursor: pointer;\r\n    padding: 2vh;\r\n    border-radius: 5px;\r\n    \r\n}\r\n/* style for +add task button */\r\n.taskPlus{\r\n    position: fixed;\r\n    top: 10%;\r\n    left: 80%;\r\n    \r\n    padding: 2vh;\r\n    border-radius: 5px;\r\n    \r\n    \r\n}\r\n.taskPlus:hover{\r\n    background-color: #075985;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n  \r\n  /* Media query for screens with a maximum width of 768px (e.g., mobile devices) */\r\n  @media screen and (max-width: 800px) {\r\n    .taskPlus {\r\n      top:7%;\r\n      left: 70%;\r\n    }\r\n    h1 {\r\n        font-size: 18px; /* Decrease font size for mobile devices */\r\n    }\r\n  }\r\n\r\n\r\n\r\n/* Styling for the New task form */\r\n.taskFormDisplay {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 40%;\r\n    max-height: 80vh;\r\n    padding: 2vh 5vh;\r\n    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.5);\r\n    background-color: #ffffff;\r\n    border: 0;\r\n    z-index: 9999;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 3vh 5vh 5vh 5vh;\r\n    display: none;\r\n  }\r\n \r\n .taskFormDisplay .newTask{\r\n\r\n    color:#082f49 ;\r\n    margin-bottom: 5vh;\r\n }\r\n  \r\n  \r\n \r\n  \r\n  /* Styling for text inputs and textarea */\r\n  input[type=\"text\"],\r\n  textarea,\r\n  input[type=\"date\"],\r\n  select {\r\n    padding: 1vh ;\r\n    border: 1px solid ;\r\n    border-radius: 3px;\r\n    margin-bottom: 4vh;\r\n    background-color: #fff;\r\n    width: 97%;\r\n    \r\n  }\r\n  .taskDesc{\r\n    height: 6vh;\r\n  }\r\n  \r\n  /* Styling for the checklist textarea */\r\n  textarea.checklist {\r\n    resize: vertical;\r\n  }\r\n  \r\n  /* Styling for buttons */\r\n  button {\r\n    padding: 8px 15px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    \r\n  }\r\n  .addtaskBtn{\r\n    background-color: #075985;\r\n    color: #fff;\r\n    margin-left: 1vw;\r\n  }\r\n  .cancel{\r\n    background-color: #f75539;\r\n    color: #fff;\r\n  }\r\n  /* Styling for the button container */\r\n  .buttonContainer {\r\n    display: flex;\r\n    justify-content: right;\r\n    margin-top: 10px;\r\n    \r\n  }\r\n  \r\n  /* Styling for the Due Date and Priority fields container */\r\n  .fieldContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    \r\n  }\r\n  \r\n  `, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Upcoming.js":
/*!*************************!*\
  !*** ./src/Upcoming.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction y(){\r\n    const pageContent = document.querySelector('.pageContent');\r\n    const hi= document.createElement('h1');\r\n    hi.textContent='hello'\r\n    pageContent.appendChild(hi);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (y);\n\n//# sourceURL=webpack://to-do-list/./src/Upcoming.js?");

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   taskPlus: () => (/* binding */ taskPlus)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n\r\nfunction inboxPage(){\r\n    const pageContent = document.querySelector('.pageContent');\r\n    \r\n    //const taskContent = document.querySelector('.taskContent');\r\n\r\n   (0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  pageContent.appendChild(taskPlus());\r\n    \r\n\r\n\r\n     \r\n}\r\n\r\nfunction taskPlus(){\r\n    const addTask = document.createElement('h1');\r\n    addTask.classList.add('taskPlus');\r\n    addTask.textContent= '+ Add Task';\r\n    (0,_task__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    const taskFormDisplay= document.querySelector('.taskFormDisplay');\r\n    addTask.addEventListener('click', () =>{\r\n       taskFormDisplay.style.display='block'\r\n    })\r\n    return addTask;\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inboxPage);\n\n//# sourceURL=webpack://to-do-list/./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ \"./src/loadPage.js\");\n\r\n\r\n(0,_loadPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\n/* harmony import */ var _sideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sideBar */ \"./src/sideBar.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction intialize(){\r\n\r\n    const content = document.querySelector('#content');\r\n    (0,_inbox__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_sideBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    \r\n    //addTaskForm();\r\n  \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (intialize);\n\n//# sourceURL=webpack://to-do-list/./src/loadPage.js?");

/***/ }),

/***/ "./src/sideBar.js":
/*!************************!*\
  !*** ./src/sideBar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\n/* harmony import */ var _Upcoming__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Upcoming */ \"./src/Upcoming.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\r\n\r\n\r\n\r\n \r\n\r\n function sideBar(){\r\n    //const content = document.querySelector('#content');\r\n    const pageContent = document.querySelector('.pageContent');\r\n    const sideBar = document.querySelector('.sideBar');\r\n    const displayinbox = document.createElement('h3');\r\n    displayinbox.classList.add('displayInbox');\r\n    displayinbox.textContent= 'Inbox';\r\n    sideBar.appendChild(displayinbox);\r\n    const displayToday = document.createElement('h3');\r\n    displayToday.classList.add('displayToday');\r\n    displayToday.textContent= 'Today';\r\n    sideBar.appendChild(displayToday);\r\n    const displayUpcoming = document.createElement('h3');\r\n    displayUpcoming.classList.add('displayUpcomming');\r\n    displayUpcoming.textContent= 'Upcoming';\r\n    sideBar.appendChild(displayUpcoming);\r\n    \r\n\r\n    displayinbox.addEventListener('click', ()=>{\r\n        pageContent.innerHTML = '';\r\n        (0,_task__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n        ;(0,_inbox__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n           \r\n    })\r\n\r\n    displayUpcoming.addEventListener('click', ()=>{\r\n        pageContent.innerHTML = '';\r\n        (0,_Upcoming__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n        \r\n    })\r\n\r\n    displayToday.addEventListener('click', ()=>{\r\n        \r\n    });\r\n\r\n    //content.appendChild(sideBar);\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sideBar);\n\n//# sourceURL=webpack://to-do-list/./src/sideBar.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   myTask: () => (/* binding */ myTask)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\nlet tasks =[];\r\n\r\nfunction addTaskForm(){\r\n\r\n    const pageContent = document.querySelector('.pageContent');\r\n    const taskFormDisplay = document.createElement('div');\r\n    taskFormDisplay.classList.add('taskFormDisplay');\r\n    const newTask = document.createElement('h2');\r\n    newTask.classList.add('newTask');\r\n    newTask.textContent= 'New Task';\r\n    taskFormDisplay.appendChild(newTask);\r\n\r\n    const taskForm = document.createElement('form');\r\n    taskForm.classList.add('taskForm');\r\n\r\n// Task Title Input\r\n    const titleLabel = document.createElement('label');\r\n    titleLabel.textContent = 'Task Title:';\r\n    titleLabel.style.fontWeight = 'bold'; // Set label text to bold\r\n    const taskTitle = document.createElement('input');\r\n    taskTitle.classList.add('taskTitle');\r\n    taskTitle.type = 'text';\r\n    taskTitle.name = 'taskTitle';\r\n    taskTitle.required = true;\r\n    taskTitle.placeholder = 'Task Title';\r\n\r\n    // Task Description Input\r\n    const taskDesc = document.createElement('input');\r\n    taskDesc.classList.add('taskDesc');\r\n    taskDesc.type = 'text';\r\n    taskDesc.name = 'taskDesc';\r\n    taskDesc.required = false;\r\n    taskDesc.placeholder = 'Description';\r\n\r\n\r\n// Due Date Input\r\n\r\n    const dueDateInput = document.createElement('input');\r\n    dueDateInput.classList.add('dueDate');\r\n    dueDateInput.type = 'date';\r\n    dueDateInput.name = 'dueDate';\r\n    dueDateInput.required = true;\r\n    dueDateInput.placeholder = 'Due date';\r\n\r\n// Priority Dropdown Menu\r\n    const prioritySelect = document.createElement('select');\r\n    prioritySelect.classList.add('priority');\r\n    prioritySelect.name = 'priority';\r\n    const highOption = document.createElement('option');\r\n    highOption.value = 'high';\r\n    highOption.textContent = 'High';\r\n    const mediumOption = document.createElement('option');\r\n    mediumOption.value = 'medium';\r\n    mediumOption.textContent = 'Medium';\r\n    const lowOption = document.createElement('option');\r\n    lowOption.value = 'low';\r\n    lowOption.textContent = 'Low';\r\n    prioritySelect.placeholder = 'Priority';\r\n    prioritySelect.appendChild(highOption);\r\n    prioritySelect.appendChild(mediumOption);\r\n    prioritySelect.appendChild(lowOption);\r\n\r\n// Due Date and Priority Container\r\n    const fieldContainer = document.createElement('div');\r\n    fieldContainer.classList.add('fieldContainer');\r\n    fieldContainer.appendChild(dueDateInput);\r\n    fieldContainer.appendChild(prioritySelect);\r\n\r\n// ... (Previous code)\r\n\r\n// Add Task Button\r\n    const addButton = document.createElement('button');\r\n    addButton.type = 'submit';\r\n    addButton.textContent = 'Add Task';\r\n    addButton.classList.add('addtaskBtn')\r\n// Cancel Button\r\n    const cancelButton = document.createElement('button');\r\n    cancelButton.type = 'button';\r\n    cancelButton.textContent = 'Cancel';\r\n    cancelButton.classList.add('cancel');\r\n\r\n// Button Container\r\n    const buttonContainer = document.createElement('div');\r\n    buttonContainer.classList.add('buttonContainer');\r\n    buttonContainer.appendChild(cancelButton);\r\n    buttonContainer.appendChild(addButton);\r\n\r\n// Append all elements to the form\r\n\r\n    taskForm.appendChild(taskTitle);\r\n    taskForm.appendChild(taskDesc);\r\n    taskForm.appendChild(fieldContainer); // Append the Due Date and Priority container\r\n    taskForm.appendChild(buttonContainer); // Append the button container\r\n\r\n\r\n    taskFormDisplay.appendChild(taskForm);\r\n\r\n    pageContent.appendChild(taskFormDisplay);\r\n\r\n\r\n    addButton.addEventListener('click', (e) => {\r\n          e.preventDefault(); // Prevent form submission\r\n      \r\n          // Get the input values from the form\r\n          const title = taskTitle.value;\r\n          const desc = taskDesc.value;\r\n          const dueDate = dueDateInput.value;\r\n          const priority = prioritySelect.value;\r\n      \r\n          // Create a new task object using the 'book' constructor function\r\n          const newTask = new taskInfo(title, desc, dueDate, priority);\r\n      \r\n          // Push the new task to the 'tasks' array\r\n          tasks.push(newTask);\r\n      \r\n          // Optional: Display the newly added task in the console\r\n          console.log(newTask);\r\n      \r\n          // Optional: Clear the form inputs after submission\r\n          taskTitle.value = '';\r\n          taskDesc.value = '';\r\n          dueDateInput.value = '';\r\n          prioritySelect.value = 'high'; // Set a default priority value\r\n      \r\n          // Optional: Hide the form after submission\r\n          taskFormDisplay.style.display = 'none';\r\n          myTask()\r\n\r\n        });\r\n      \r\n      cancelButton.addEventListener('click', () =>{\r\n        taskTitle.value = '';\r\n          taskDesc.value = '';\r\n          dueDateInput.value = '';\r\n          prioritySelect.value = 'high'; // Set a default priority value\r\n      \r\n          // Optional: Hide the form after submission\r\n          taskFormDisplay.style.display = 'none';\r\n      })\r\n     \r\n\r\n      \r\n}\r\n\r\nfunction taskInfo(title, desc, dueDate, priority) {\r\n    this.title = title;\r\n    this.desc = desc;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n}\r\n\r\n\r\nfunction createTaskElement(container, task) {\r\n    const taskElement = document.createElement('div');\r\n    taskElement.classList.add('taskElement');\r\n  \r\n    const titleElement = document.createElement('h3');\r\n    titleElement.textContent = `Title: ${task.title}`;\r\n    titleElement.classList.add('titleElement');\r\n  \r\n    const descElement = document.createElement('p');\r\n    descElement.textContent = `Description: ${task.desc}`;\r\n    descElement.classList.add('descElement');\r\n    const dueDateElement = document.createElement('p');\r\n    dueDateElement.textContent = `Due Date: ${task.dueDate}`;\r\n    dueDateElement.classList.add('dueDateElement')\r\n  \r\n    const priorityElement = document.createElement('p');\r\n    priorityElement.textContent = `Priority: ${task.priority}`;\r\n  \r\n    // Append all elements to the taskElement\r\n    taskElement.appendChild(titleElement);\r\n    taskElement.appendChild(descElement);\r\n    taskElement.appendChild(dueDateElement);\r\n    taskElement.appendChild(priorityElement);\r\n  \r\n    // Append the taskElement to the specified container\r\n    container.appendChild(taskElement);\r\n  }\r\n  \r\n  function myTask() {\r\n    const taskContent = document.createElement('div');\r\n    taskContent.classList.add('taskContent');\r\n  \r\n    // Loop through the tasks array and create elements for each task\r\n    \r\n      createTaskElement(taskContent, tasks[tasks.length - 1]);\r\n    // Optional: Display the taskContent in the console\r\n    console.log(taskContent);\r\n  \r\n    // Append the taskContent to the page\r\n    const pageContent = document.querySelector('.pageContent');\r\n    pageContent.appendChild(taskContent);\r\n  }\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTaskForm);\n\n//# sourceURL=webpack://to-do-list/./src/task.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;