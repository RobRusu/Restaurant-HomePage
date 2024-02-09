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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Background3.jpg */ \"./src/Background3.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Titles.ttf */ \"./src/Titles.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Contents.ttf */ \"./src/Contents.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: 50%;\n  --fries: #F4C63E;\n  --ketchup: #BB2B1B;\n  --border: #DF9D00;\n}\n\n@font-face {\n  font-family: 'Titles';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  font-weight: bold;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Contents';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n\nheader {\n  box-shadow: 0 5px 5px var(--ketchup);\n}\n\n.title {\n  font-family: 'Titles';\n  height: 7vh;\n  font-size: 5rem;\n  text-align: center;\n  background-color: var(--fries);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--ketchup);\n}\n\nnav {\n  display: flex;\n  justify-content: space-around;\n  background-color: var(--fries);\n  padding: 2vh;\n}\n\n.headerBtn {\n  padding: 1vh 4vw;\n  background-color: var(--ketchup);\n  color: white;\n  font-weight: bold;\n  border: 0.5vh solid var(--border);\n  border-radius: 5px;\n  font-family: 'Contents';\n  font-size: 2vh;\n  &:hover{\n    cursor: pointer;\n    background-color: #992316;\n    /* background-image: url('./Splash.png');\n    background-repeat: no-repeat;\n    background-size: 100%; */\n  }\n}\n\n#content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 5vh 0;\n  position: relative;\n}\n\n.content {\n  width: min(100rem, 90%);\n  background-color: var(--fries);\n  text-align: center;\n  padding: 0 4vw 4vh 4vw;\n  border-radius: 10px;\n  border: 0.5vh solid var(--border);\n}\n\n.heading {\n  height: 30%;\n  margin-bottom: 3vh;\n  margin-top: 2vh;\n  font-family: 'Titles';\n  font-size: 2vh;\n}\n\n.titleHome {\n  height: 30%;\n  font-size: 3.5vh;\n  font-weight:600;\n  margin-bottom: 2vh;\n}\n\n.schedule {\n  font-size: 3vh;\n  padding-bottom: 1vh;\n  font-weight: 600;\n}\n\n.drinks,\n.drink,\n.dish,\n.desserts,\n.dessert {\n  display: flex;\n  gap: 2vw;\n  justify-content: center;\n  position: relative;\n}\n\n.drink:nth-child(odd),\n.dish:nth-child(odd),\n.dessert:nth-child(odd){\n  margin: 0 0 0 2vw;\n}\n\n.drink:nth-child(even),\n.dish:nth-child(even),\n.dessert:nth-child(even){\n  margin: 0 2vw 0 0;\n}\n\n.dishes {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  gap: 2vw;\n}\n\n.drinks,\n.dishes,\n.desserts {\n  margin: 0 2vw;\n}\n\nimg {\n  width: 60%;\n  border: 0.5rem solid var(--border);\n  border-radius: 10px;\n  box-shadow: 0 0 10px 10px var(--ketchup);\n}\n\n.menu {\n  padding: 1vh 1vw;\n  border: 1vh solid var(--border);\n  background-color: var(--ketchup);\n  color: white;\n  font-weight: bold;\n  margin: 2vh 2vw;\n  font-size: 3vh;\n  border-radius: 50px;\n  box-shadow: 0 10px 5px var(--ketchup);\n  font-family: 'Titles';\n}\n\n#content > .content > p:nth-child(1) {\n  margin: 2vh 0;\n  padding: 1vh 1vw;\n  font-size: 6vh;\n}\n\n.description {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Contents';\n  font-size: 1.7vh;\n}\n\n.description > p:nth-child(1) {\n  font-size: 2vh;\n  font-weight: bold;\n  margin-bottom: 1vh;\n}\n\n.contact {\n  border: 1vh solid var(--border);\n  background-color: var(--ketchup);\n  color: white;\n  font-weight: bold;\n  border-radius: 2vh;\n  font-family: 'Titles';\n}\n\n.contacts > p {\n  margin: 0 2vw 1vh 2vw;\n  text-align: center;\n  border: 0.5vh solid var(--border);\n  padding: 1vh 1vw;\n  background-color: var(--ketchup);\n  color: white;\n  font-weight: bold;\n  border-radius: 1vh;\n  font-family: 'Contents';\n  font-size: 1.5vh;\n}\n\n.hours {\n  background-color: var(--ketchup);\n  border: 1vh solid var(--border);\n  color: white;\n  padding: 1vh;\n  font-size: 2vh;\n  border-radius: 10px;\n  font-family: 'Contents';\n}\n\n.homeContent {\n  display: flex;\n  flex-direction: column;\n  width: min(61rem, 80%);\n}\n\nfooter {\n  background-color: var(--fries);\n  text-align: center;\n  padding: 2vh;\n  font-family: 'Contents';\n  font-size: 2vh;\n  position: absolute;\n  width: 100%;\n}\n\na {\n  color: inherit;\n}\n\n.drink > img + p,\n.dish > img + p,\n.dessert > img + p {\n  position: absolute;\n  bottom: 1vh;\n  left: 1vh;\n  color: white;\n  font-size: 1vh;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contacts: () => (/* binding */ contacts)\n/* harmony export */ });\nfunction contacts() {\n  const contacts = document.createElement('div');\n  contacts.classList.add('contacts');\n\n\n  const restaurantNumber = document.createElement('p');\n  restaurantNumber.classList.add('restNumber');\n  restaurantNumber.textContent = \"Restaurant Number: 555-420-1337\"\n\n  const restaurantEmail = document.createElement('p');\n  restaurantEmail.classList.add('restEmail');\n  restaurantEmail.textContent = \"Restaurant Email: surelyNotFake@isReal.com\"\n\n  const potatoNumber = document.createElement('p');\n  potatoNumber.classList.add('potatoNumber');\n  potatoNumber.textContent = \"Potato Garden Number: 555-420-7331\"\n\n  const potatoEmail = document.createElement('p');\n  potatoEmail.classList.add('potatoEmail');\n  potatoEmail.textContent = \"Potato Garden Email: AnotherRealAddress@isReal.com\"\n\n  const tomatoNumber = document.createElement('p');\n  tomatoNumber.classList.add('tomatoNumber');\n  tomatoNumber.textContent = \"Tomato Garden Number: 555-420-3371\"\n\n  const tomatoEmail = document.createElement('p');\n  tomatoEmail.classList.add('tomatoEmail');\n  tomatoEmail.textContent = \"Tomato Garden Email: RealTomatoEmail@isReal.com\"\n\n  const secretNumber = document.createElement('p');\n  secretNumber.classList.add('secretNumber');\n  secretNumber.textContent = \"Secret Number: 555-666-6969\"\n\n  contacts.append(restaurantNumber, restaurantEmail, potatoNumber, potatoEmail, tomatoNumber, tomatoEmail, secretNumber)\n\n  return contacts;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDiv: () => (/* binding */ createDiv),\n/* harmony export */   createTitle: () => (/* binding */ createTitle)\n/* harmony export */ });\nfunction createTitle(){\n  const element = document.createElement('div')\n  element.textContent = 'World of Fries';\n  element.classList.add('title');\n\n  return element;\n}\n\nfunction createDiv(className = 'randomClass'){\n  const element = document.createElement('div');\n  element.classList.add('content', className);\n\n  return element;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/content.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footer: () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer(){\n  const mainFooter = document.querySelector('footer');\n  mainFooter.style.bottom = 0;\n  const footer = document.createElement('p');\n  footer.textContent = 'Copyright © 2024 - '\n  const link = document.createElement('a');\n  link.textContent = 'Made by RobRusu';\n  link.href = 'https://github.com/RobRusu';\n  footer.appendChild(link);\n\n  return footer\n}\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   description: () => (/* binding */ description),\n/* harmony export */   hours: () => (/* binding */ hours)\n/* harmony export */ });\nfunction description(){\n  const heading = document.createElement('div');\n\n  const titleHome = document.createElement('p');\n  titleHome.textContent = 'A few words for our customers'\n  titleHome.classList.add('titleHome');\n\n  const description = document.createElement('p');\n  description.textContent = \"Come and enjoy the most delicious fries you have ever eaten. After this experience, we promise that you will want to come back here every day. Our potatoes are grown by ourselves and are considered a world's wonder.\"\n  description.classList.add('description');\n  \n  heading.append(titleHome, description);\n  heading.classList.add('heading', 'home');\n\n  return heading;\n}\n\nfunction hours(){\n  const hours = document.createElement('div');\n\n  const schedule = document.createElement('p');\n  schedule.textContent = 'Opening hours';\n  schedule.classList.add('schedule');\n\n  const mondayFriday = document.createElement('p');\n  mondayFriday.textContent = 'Monday - Friday: 8AM - 8PM'\n  mondayFriday.classList.add('weekDays');\n\n  const saturday = document.createElement('p');\n  saturday.textContent = 'Saturday: 7AM - 11PM'\n  saturday.classList.add('weekend');\n\n  const sunday = document.createElement('p');\n  sunday.textContent = 'Sunday: 10AM - 8PM';\n  sunday.classList.add('weekend');\n\n  hours.append(schedule, mondayFriday, saturday, sunday);\n  hours.classList.add('hours', 'home');\n  \n  return hours;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.js */ \"./src/content.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _Drink1_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Drink1.jpg */ \"./src/Drink1.jpg\");\n/* harmony import */ var _Drink2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Drink2.jpg */ \"./src/Drink2.jpg\");\n/* harmony import */ var _Dish1_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Dish1.jpg */ \"./src/Dish1.jpg\");\n/* harmony import */ var _Dish2_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Dish2.jpg */ \"./src/Dish2.jpg\");\n/* harmony import */ var _Dish3_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Dish3.jpg */ \"./src/Dish3.jpg\");\n/* harmony import */ var _Dish4_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Dish4.jpg */ \"./src/Dish4.jpg\");\n/* harmony import */ var _Dessert3_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Dessert3.jpg */ \"./src/Dessert3.jpg\");\n/* harmony import */ var _Dessert2_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Dessert2.jpg */ \"./src/Dessert2.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction buttons() {\n  const btns = document.querySelectorAll('button');\n  btns.forEach((btn) => {\n    btn.classList.add('headerBtn');\n  })\n}\n\nfunction image(type, number, picture, name) {\n  let position = `.${type}:nth-child(${number})`;\n  const element = document.querySelector(position);\n  const myIcon = new Image();\n  myIcon.src = picture;\n  const creator = document.createElement('p')\n  creator.textContent = name;\n  element.prepend(myIcon, creator);\n}\n\nfunction menuDescription(type, drinkNumber, number, details){\n  let position = `.${type}:nth-child(${drinkNumber}) > .description > p:nth-child(${number})`;\n  const element = document.querySelector(position);\n  element.textContent = details;\n}\n\nbuttons();\ndocument.querySelector('header').prepend((0,_content_js__WEBPACK_IMPORTED_MODULE_1__.createTitle)());\ndocument.querySelector('#content').appendChild((0,_content_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)('homeContent'));\ndocument.querySelector('.content').append((0,_home_js__WEBPACK_IMPORTED_MODULE_2__.description)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.hours)());\ndocument.querySelector('footer').append((0,_footer_js__WEBPACK_IMPORTED_MODULE_5__.footer)());\n\ndocument.querySelector('button:nth-child(1)').addEventListener('click', () =>{\n  const mainContent = document.querySelector('#content');\n  const content = document.querySelector('.content');\n  document.querySelector('footer').removeChild(document.querySelector('footer > p'));\n  document.querySelector('footer').append((0,_footer_js__WEBPACK_IMPORTED_MODULE_5__.footer)());\n  mainContent.removeChild(content);\n  document.querySelector('#content').appendChild((0,_content_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)('homeContent'));\n  document.querySelector('.content').append((0,_home_js__WEBPACK_IMPORTED_MODULE_2__.description)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.hours)());\n});\n\ndocument.querySelector('button:nth-child(2)').addEventListener('click', () =>{\n  const mainContent = document.querySelector('#content');\n  const content = document.querySelector('.content');\n  document.querySelector('footer').style.removeProperty('bottom');\n  mainContent.removeChild(content);\n  document.querySelector('#content').appendChild((0,_content_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)());\n  document.querySelector('.content').append((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu)('Menu', 'menu'),(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu)('Drinks'), (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.drinks)(),(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu)('Main Dishes'), (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.dishes)(),(0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu)('Desserts'), (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.desserts)());\n\n  // drinks\n  image('drink', 1, _Drink1_jpg__WEBPACK_IMPORTED_MODULE_6__, 'Created by: Jcomp on Freepik');\n  menuDescription('drink',1,1,'Tomato smoothie');\n  menuDescription('drink',1,2,'A smoothie make out of the most organic and fresh tomatoes there are.');\n  image('drink', 2, _Drink2_jpg__WEBPACK_IMPORTED_MODULE_7__, 'Created by: KamranAydinov on Freepik');\n  menuDescription('drink',2,1,'Tomato tea');\n  menuDescription('drink',2,2,'The most calming and soothing tomato tea. Become one with the vines.');\n\n  //dishes\n  image('dish', 1, _Dish1_jpg__WEBPACK_IMPORTED_MODULE_8__, 'Created by: mdjaff on Freepik');\n  menuDescription('dish', 1,1, 'Small Crispy Fries');\n  menuDescription('dish', 1,2, 'A small portion of the most delicious fries.Comes with ketchup and mayo.');\n\n  image('dish', 2, _Dish2_jpg__WEBPACK_IMPORTED_MODULE_9__, 'Created by: KamranAydinov on Freepik');\n  menuDescription('dish', 2,1, 'Bucket Fries');\n  menuDescription('dish', 2,2, 'A whole bucket of fries just for you! Includes multiple sauces and seasonings.');\n\n  image('dish', 3, _Dish3_jpg__WEBPACK_IMPORTED_MODULE_10__, 'Created by: KamranAydinov on Freepik');\n  menuDescription('dish', 3,1, 'Fries and Chicken Strips');\n  menuDescription('dish', 3,2, 'A small portion of fries and crispy chicken strips made from our basement chickens. Comes with ketchup and garlic mayo.');\n\n  image('dish', 4, _Dish4_jpg__WEBPACK_IMPORTED_MODULE_11__, 'Created by: Jcomp on Freepik');\n  menuDescription('dish', 4,1, 'Large Crispy Fries');\n  menuDescription('dish', 4,2, 'A large portion of the most delicious fries you will ever eat. Comes with ketchup and mayo.');\n\n  // desserts\n\n  image('dessert', 1, _Dessert3_jpg__WEBPACK_IMPORTED_MODULE_12__, 'Created by: KamranAydinov on Freepik');\n  menuDescription('dessert', 1,1, 'Sweet potato cookies');\n  menuDescription('dessert', 1,2, 'Sweet potato cookies with orange. These are definitely made out of sweet potatoes.');\n\n  image('dessert', 2, _Dessert2_jpg__WEBPACK_IMPORTED_MODULE_13__, 'Created by: KamranAydinov on Freepik');\n  menuDescription('dessert', 2,1, 'Sweet potato cupcakes');\n  menuDescription('dessert', 2,2, 'Be ready to eat the most delicious cupcakes every made out of the most delicious sweet potatoes.');\n});\n\ndocument.querySelector('button:nth-child(3)').addEventListener('click', () =>{\n  const mainContent = document.querySelector('#content');\n  const content = document.querySelector('.content');\n  document.querySelector('footer').removeChild(document.querySelector('footer > p'));\n  document.querySelector('footer').append((0,_footer_js__WEBPACK_IMPORTED_MODULE_5__.footer)());\n  mainContent.removeChild(content);\n  document.querySelector('#content').appendChild((0,_content_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)());\n  document.querySelector('.content').append((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.menu)('Contacts', 'contact'), (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.contacts)());\n});\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   desserts: () => (/* binding */ desserts),\n/* harmony export */   dishes: () => (/* binding */ dishes),\n/* harmony export */   drinks: () => (/* binding */ drinks),\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu(title, addClass = 'menu'){\n  const menuTitle = document.createElement('p');\n  menuTitle.textContent = title;\n  menuTitle.classList.add(addClass);\n\n  return menuTitle;\n};\n\nfunction drinks(){\n  const drinks = document.createElement('div');\n  drinks.classList.add('drinks');\n\n  for (let i = 0; i < 2; i++){\n    const drink = document.createElement('div');\n    drink.classList.add('drink');\n    const description = document.createElement('div');\n    description.classList.add('description');\n    const drinkTitle = document.createElement('p');\n    const drinkDescription = document.createElement('p');\n    description.append(drinkTitle, drinkDescription);\n    drink.append(description);\n\n    drinks.appendChild(drink);\n  }\n\n  return drinks\n}\n\nfunction dishes(){\n  const dishes = document.createElement('div');\n  dishes.classList.add('dishes');\n\n  for(let i = 0; i < 4; i++){\n    const dish = document.createElement('div');\n    dish.classList.add('dish');\n    const description = document.createElement('div');\n    description.classList.add('description');\n    const dishTitle = document.createElement('p');\n    const dishDescription = document.createElement('p');\n    description.append(dishTitle, dishDescription);\n    dish.append(description);\n\n    dishes.appendChild(dish);\n  }\n\n  return dishes;\n}\n\nfunction desserts(){\n  const desserts = document.createElement('div');\n  desserts.classList.add('desserts');\n\n  for(let i = 0; i < 2; i++){\n    const dessert = document.createElement('div');\n    dessert.classList.add('dessert');\n    const description = document.createElement('div');\n    description.classList.add('description');\n    const dessertTitle = document.createElement('p');\n    const dessertDescription = document.createElement('p');\n    description.append(dessertTitle, dessertDescription);\n    dessert.append(description);\n\n    desserts.appendChild(dessert);\n  }\n\n  return desserts;\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/Background3.jpg":
/*!*****************************!*\
  !*** ./src/Background3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c66efe11db6906618a26.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Background3.jpg?");

/***/ }),

/***/ "./src/Contents.ttf":
/*!**************************!*\
  !*** ./src/Contents.ttf ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31f0a02d84d42627c894.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/Contents.ttf?");

/***/ }),

/***/ "./src/Dessert2.jpg":
/*!**************************!*\
  !*** ./src/Dessert2.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bebf485be8aa19b3847e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Dessert2.jpg?");

/***/ }),

/***/ "./src/Dessert3.jpg":
/*!**************************!*\
  !*** ./src/Dessert3.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c2f1d5791b73f3526335.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Dessert3.jpg?");

/***/ }),

/***/ "./src/Dish1.jpg":
/*!***********************!*\
  !*** ./src/Dish1.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8bf4a8fcab34375cf498.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Dish1.jpg?");

/***/ }),

/***/ "./src/Dish2.jpg":
/*!***********************!*\
  !*** ./src/Dish2.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"19ae75a50f5f6923c19a.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Dish2.jpg?");

/***/ }),

/***/ "./src/Dish3.jpg":
/*!***********************!*\
  !*** ./src/Dish3.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bf9cbe304dd3ede72f5d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Dish3.jpg?");

/***/ }),

/***/ "./src/Dish4.jpg":
/*!***********************!*\
  !*** ./src/Dish4.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9725f79f09ab9b9e6bda.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Dish4.jpg?");

/***/ }),

/***/ "./src/Drink1.jpg":
/*!************************!*\
  !*** ./src/Drink1.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31e7584dc99f8511f5a9.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Drink1.jpg?");

/***/ }),

/***/ "./src/Drink2.jpg":
/*!************************!*\
  !*** ./src/Drink2.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b9382faa110ddb3409f3.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/Drink2.jpg?");

/***/ }),

/***/ "./src/Titles.ttf":
/*!************************!*\
  !*** ./src/Titles.ttf ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b78b535a0525794dd2ad.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/Titles.ttf?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;