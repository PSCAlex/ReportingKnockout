/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
/******/ })
/************************************************************************/
/******/ ({

/***/ 25:
/* unknown exports provided */
/*!**********************************************!*\
  !*** external "vendor_c1309751ff500057f4f4" ***!
  \**********************************************/
/***/ (function(module, exports) {

eval("module.exports = vendor_c1309751ff500057f4f4;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2ZW5kb3JfYzEzMDk3NTFmZjUwMDA1N2Y0ZjRcIj81NmQ0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gdmVuZG9yX2MxMzA5NzUxZmY1MDAwNTdmNGY0O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidmVuZG9yX2MxMzA5NzUxZmY1MDAwNTdmNGY0XCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 52:
/* unknown exports provided */
/* all exports used */
/*!******************************************************************************************************************************!*\
  !*** delegated ./node_modules/knockout/build/output/knockout-latest.debug.js from dll-reference vendor_c1309751ff500057f4f4 ***!
  \******************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(25))(13);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2tub2Nrb3V0L2J1aWxkL291dHB1dC9rbm9ja291dC1sYXRlc3QuZGVidWcuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jMTMwOTc1MWZmNTAwMDU3ZjRmND81N2U4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMjUpKSgxMyk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2tub2Nrb3V0L2J1aWxkL291dHB1dC9rbm9ja291dC1sYXRlc3QuZGVidWcuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jMTMwOTc1MWZmNTAwMDU3ZjRmNFxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ 83:
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************************************************!*\
  !*** delegated ./node_modules/jquery/dist/jquery.js from dll-reference vendor_c1309751ff500057f4f4 ***!
  \*****************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(25))(32);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2MxMzA5NzUxZmY1MDAwNTdmNGY0PzdiYjkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygyNSkpKDMyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYzEzMDk3NTFmZjUwMDA1N2Y0ZjRcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 84:
/* unknown exports provided */
/* all exports used */
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference vendor_c1309751ff500057f4f4 ***!
  \*********************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(25))(4);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZGVsZWdhdGVkIC4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9jMTMwOTc1MWZmNTAwMDU3ZjRmND8zNTE2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oMjUpKSg0KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBkZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2MxMzA5NzUxZmY1MDAwNTdmNGY0XG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 85:
/* exports provided: ReportingBaseVM */
/* exports used: ReportingBaseVM */
/*!*********************************!*\
  !*** ./Client/ts/ViewModels.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ 83);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(/*! knockout */ 52);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ReportingBaseVM; });\n\r\n\r\nvar ReportingBaseVM = (function () {\r\n    function ReportingBaseVM(name, url) {\r\n        var _this = this;\r\n        this.populateColumn = function (url) {\r\n            var self = _this;\r\n            __WEBPACK_IMPORTED_MODULE_0_jquery__[\"getJSON\"](url, function (data) {\r\n                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {\r\n                    var item = data_1[_i];\r\n                    self.columns.push(item);\r\n                }\r\n                self.columns.sort();\r\n            });\r\n        };\r\n        this.removeFromSelectedColumns = function (item) {\r\n            _this.selectedColumns.remove(item);\r\n            _this.selectedColumns.sort();\r\n        };\r\n        this.addToSelectedColumns = function (item) {\r\n            if (_this.selectedColumns.indexOf(item) < 0) {\r\n                _this.selectedColumns.push(item);\r\n                _this.selectedColumns.sort();\r\n            }\r\n        };\r\n        this.toPascal = function (str) {\r\n            return str.replace(/(\\w)(\\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); }).replace(/\\s+/g, '');\r\n        };\r\n        this.name = name;\r\n        this.columns = __WEBPACK_IMPORTED_MODULE_1_knockout__[\"observableArray\"]([]);\r\n        this.selectedColumns = __WEBPACK_IMPORTED_MODULE_1_knockout__[\"observableArray\"]([]);\r\n        this.populateColumn(url);\r\n        this.modelName = this.toPascal(this.name);\r\n    }\r\n    return ReportingBaseVM;\r\n}());\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQ2xpZW50L3RzL1ZpZXdNb2RlbHMudHM/Nzg3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVwb3J0aW5nQmFzZVZNIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIG1vZGVsTmFtZTogc3RyaW5nO1xyXG4gICAgY29sdW1uczogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8c3RyaW5nPjtcclxuICAgIHNlbGVjdGVkQ29sdW1uczogS25vY2tvdXRPYnNlcnZhYmxlQXJyYXk8c3RyaW5nPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoW10pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb2x1bW5zID0ga28ub2JzZXJ2YWJsZUFycmF5KFtdKTtcclxuICAgICAgICB0aGlzLnBvcHVsYXRlQ29sdW1uKHVybCk7XHJcbiAgICAgICAgdGhpcy5tb2RlbE5hbWUgPSB0aGlzLnRvUGFzY2FsKHRoaXMubmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9wdWxhdGVDb2x1bW4gPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgJC5nZXRKU09OKHVybCwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbHVtbnMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLmNvbHVtbnMuc29ydCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVGcm9tU2VsZWN0ZWRDb2x1bW5zID0gKGl0ZW0pID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29sdW1ucy5yZW1vdmUoaXRlbSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbHVtbnMuc29ydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvU2VsZWN0ZWRDb2x1bW5zID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENvbHVtbnMuaW5kZXhPZihpdGVtKSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbHVtbnMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENvbHVtbnMuc29ydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvUGFzY2FsID0gKHN0cjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFx3KShcXHcqKS9nLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZzAsIGcxLCBnMikgeyByZXR1cm4gZzEudG9VcHBlckNhc2UoKSArIGcyLnRvTG93ZXJDYXNlKCk7IH0pLnJlcGxhY2UoL1xccysvZywnJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ2xpZW50L3RzL1ZpZXdNb2RlbHMudHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFNQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQWpDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE2QkE7QUFBQTs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 86:
/* unknown exports provided */
/* all exports used */
/*!******************************************************************************!*\
  !*** ./~/expose-loader?$!./~/expose-loader?jQuery!./~/jquery/dist/jquery.js ***!
  \******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"$\"] = __webpack_require__(/*! -!./~/expose-loader?jQuery!./jquery.js */ 92);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 84)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2pxdWVyeS9kaXN0L2pxdWVyeS5qcz83ZGZhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsW1wiJFwiXSA9IHJlcXVpcmUoXCItIUM6XFxcXFVzZXJzXFxcXGFsZXhsXFxcXGdpdFxcXFxSZXBvcnRpbmdLbm9ja291dFxcXFxSZXBvcnRpbmdLbm9ja291dFxcXFxub2RlX21vZHVsZXNcXFxcZXhwb3NlLWxvYWRlclxcXFxpbmRleC5qcz9qUXVlcnkhLlxcXFxqcXVlcnkuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4cG9zZS1sb2FkZXI/JCEuL34vZXhwb3NlLWxvYWRlcj9qUXVlcnkhLi9+L2pxdWVyeS9kaXN0L2pxdWVyeS5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 87:
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./Client/css/site.css ***!
  \*****************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnQvY3NzL3NpdGUuY3NzPzU4NGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudC9jc3Mvc2l0ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 90:
/* exports provided: ReportingController */
/* all exports used */
/*!********************************!*\
  !*** ./Client/ts/Reporting.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(/*! knockout */ 52);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModels__ = __webpack_require__(/*! ./ViewModels */ 85);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ReportingController\", function() { return ReportingController; });\n//import * as $ from \"jquery\";\r\n//needed for jquery to be available on page\r\nvar $ = __webpack_require__(/*! expose-loader?$!expose-loader?jQuery!jquery */ 86);\r\n\r\n\r\n//page specific css here \r\n__webpack_require__(/*! ../css/site.css */ 87);\r\n($(function () {\r\n    var controller = new ReportingController();\r\n    var employeeColumnsVM = new __WEBPACK_IMPORTED_MODULE_1__ViewModels__[\"a\" /* ReportingBaseVM */](\"Employee\", \"/reporting/getEmployeeColumns\");\r\n    var dataCodesVM = new __WEBPACK_IMPORTED_MODULE_1__ViewModels__[\"a\" /* ReportingBaseVM */](\"Data Codes\", \"/reporting/getDataCodeColumns\");\r\n    var absenseVM = new __WEBPACK_IMPORTED_MODULE_1__ViewModels__[\"a\" /* ReportingBaseVM */](\"Absense\", \"/reporting/getAbsenseColumns\");\r\n    controller.addViewModel(employeeColumnsVM, dataCodesVM, absenseVM);\r\n    controller.init();\r\n    __WEBPACK_IMPORTED_MODULE_0_knockout__[\"applyBindings\"](controller);\r\n}));\r\nvar ReportingController = (function () {\r\n    function ReportingController() {\r\n        var _this = this;\r\n        this.init = function () {\r\n            _this.setTitle();\r\n        };\r\n        this.next = function () {\r\n            _this.selectedIndex(_this.selectedIndex() + 1);\r\n            _this.setTitle();\r\n        };\r\n        this.previous = function () {\r\n            _this.selectedIndex(_this.selectedIndex() - 1);\r\n            _this.setTitle();\r\n        };\r\n        this.addViewModel = function () {\r\n            var vm = [];\r\n            for (var _i = 0; _i < arguments.length; _i++) {\r\n                vm[_i] = arguments[_i];\r\n            }\r\n            for (var _a = 0, vm_1 = vm; _a < vm_1.length; _a++) {\r\n                var item = vm_1[_a];\r\n                _this.vmArray.push(item);\r\n            }\r\n        };\r\n        this.submit = function () {\r\n            var data = {};\r\n            for (var _i = 0, _a = _this.vmArray(); _i < _a.length; _i++) {\r\n                var item = _a[_i];\r\n                var name_1 = item.modelName;\r\n                var arr = item.selectedColumns().map(function (a) { return _this.toPascal(a); });\r\n                data[name_1] = arr;\r\n            }\r\n            $.post(\"/reporting/submit\", { columns: JSON.stringify(data) }, function (res) {\r\n                alert(res);\r\n            });\r\n        };\r\n        this.setTitle = function () {\r\n            if (_this.selectedIndex() >= 0 && _this.selectedIndex() < _this.vmArray().length) {\r\n                _this.title(_this.vmArray()[_this.selectedIndex()].name);\r\n            }\r\n            else {\r\n                _this.title(\"Review\");\r\n            }\r\n        };\r\n        this.testFunc = function () {\r\n            return \"This is another testtttttt\";\r\n        };\r\n        this.toPascal = function (str) {\r\n            return str.replace(/(\\w)(\\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); }).replace(/\\s+/g, '');\r\n        };\r\n        this.selectedIndex = __WEBPACK_IMPORTED_MODULE_0_knockout__[\"observable\"](0);\r\n        this.vmArray = __WEBPACK_IMPORTED_MODULE_0_knockout__[\"observableArray\"]([]);\r\n        this.title = __WEBPACK_IMPORTED_MODULE_0_knockout__[\"observable\"](\"\");\r\n    }\r\n    return ReportingController;\r\n}());\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQ2xpZW50L3RzL1JlcG9ydGluZy50cz9jMTRlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbi8vbmVlZGVkIGZvciBqcXVlcnkgdG8gYmUgYXZhaWxhYmxlIG9uIHBhZ2VcclxuY29uc3QgJCA9IHJlcXVpcmUoJ2V4cG9zZS1sb2FkZXI/JCFleHBvc2UtbG9hZGVyP2pRdWVyeSFqcXVlcnknKTtcclxuaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XHJcbmltcG9ydCB7IFJlcG9ydGluZ0Jhc2VWTSB9IGZyb20gXCIuL1ZpZXdNb2RlbHNcIjtcclxuXHJcbi8vcGFnZSBzcGVjaWZpYyBjc3MgaGVyZSBcclxucmVxdWlyZSgnLi4vY3NzL3NpdGUuY3NzJyk7XHJcblxyXG4oJChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgY29udHJvbGxlciA9IG5ldyBSZXBvcnRpbmdDb250cm9sbGVyKCk7XHJcbiAgICBsZXQgZW1wbG95ZWVDb2x1bW5zVk0gPSBuZXcgUmVwb3J0aW5nQmFzZVZNKFwiRW1wbG95ZWVcIiwgXCIvcmVwb3J0aW5nL2dldEVtcGxveWVlQ29sdW1uc1wiKTtcclxuICAgIGxldCBkYXRhQ29kZXNWTSA9IG5ldyBSZXBvcnRpbmdCYXNlVk0oXCJEYXRhIENvZGVzXCIsIFwiL3JlcG9ydGluZy9nZXREYXRhQ29kZUNvbHVtbnNcIik7XHJcbiAgICBsZXQgYWJzZW5zZVZNID0gbmV3IFJlcG9ydGluZ0Jhc2VWTShcIkFic2Vuc2VcIiwgXCIvcmVwb3J0aW5nL2dldEFic2Vuc2VDb2x1bW5zXCIpO1xyXG4gICAgY29udHJvbGxlci5hZGRWaWV3TW9kZWwoZW1wbG95ZWVDb2x1bW5zVk0sIGRhdGFDb2Rlc1ZNLCBhYnNlbnNlVk0pO1xyXG4gICAgY29udHJvbGxlci5pbml0KCk7XHJcbiAgICBrby5hcHBseUJpbmRpbmdzKGNvbnRyb2xsZXIpO1xyXG59KSk7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVwb3J0aW5nQ29udHJvbGxlciB7XHJcbiAgICB2bUFycmF5O1xyXG4gICAgc2VsZWN0ZWRJbmRleDtcclxuICAgIHRpdGxlO1xyXG4gICAganNvblRvU3VibWl0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGtvLm9ic2VydmFibGUoMCk7XHJcbiAgICAgICAgdGhpcy52bUFycmF5ID0ga28ub2JzZXJ2YWJsZUFycmF5KFtdKVxyXG4gICAgICAgIHRoaXMudGl0bGUgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleCgpICsgMSk7XHJcbiAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCh0aGlzLnNlbGVjdGVkSW5kZXgoKSAtIDEpO1xyXG4gICAgICAgIHRoaXMuc2V0VGl0bGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRWaWV3TW9kZWwgPSAoLi4udm0pID0+IHtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHZtKSB7XHJcbiAgICAgICAgICAgIHRoaXMudm1BcnJheS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHRoaXMudm1BcnJheSgpKSB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lID0gaXRlbS5tb2RlbE5hbWU7XHJcbiAgICAgICAgICAgIGxldCBhcnIgPSBpdGVtLnNlbGVjdGVkQ29sdW1ucygpLm1hcChhID0+IHRoaXMudG9QYXNjYWwoYSkpO1xyXG4gICAgICAgICAgICBkYXRhW25hbWVdID0gYXJyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJC5wb3N0KFwiL3JlcG9ydGluZy9zdWJtaXRcIiwgeyBjb2x1bW5zOiBKU09OLnN0cmluZ2lmeShkYXRhKSB9LCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRUaXRsZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEluZGV4KCkgPj0gMCAmJiB0aGlzLnNlbGVjdGVkSW5kZXgoKSA8IHRoaXMudm1BcnJheSgpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpdGxlKHRoaXMudm1BcnJheSgpW3RoaXMuc2VsZWN0ZWRJbmRleCgpXS5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUoXCJSZXZpZXdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdGVzdEZ1bmMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIFwiVGhpcyBpcyBhbm90aGVyIHRlc3R0dHR0dHRcIjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvUGFzY2FsID0gKHN0cjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFx3KShcXHcqKS9nLFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZzAsIGcxLCBnMikgeyByZXR1cm4gZzEudG9VcHBlckNhc2UoKSArIGcyLnRvTG93ZXJDYXNlKCk7IH0pLnJlcGxhY2UoL1xccysvZywgJycpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIENsaWVudC90cy9SZXBvcnRpbmcudHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQXREQTtBQUNBO0FBQ0E7QUFDQTtBQW9EQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 92:
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./~/expose-loader?jQuery!./~/jquery/dist/jquery.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"jQuery\"] = __webpack_require__(/*! -!./jquery.js */ 83);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 84)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2pxdWVyeS9kaXN0L2pxdWVyeS5qcz8zOThiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsW1wialF1ZXJ5XCJdID0gcmVxdWlyZShcIi0hLlxcXFxqcXVlcnkuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4cG9zZS1sb2FkZXI/alF1ZXJ5IS4vfi9qcXVlcnkvZGlzdC9qcXVlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

/******/ });
//# sourceMappingURL=reporting.js.map