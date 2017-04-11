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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/*!**********************************************!*\
  !*** external "vendor_a977745adb401c6f6327" ***!
  \**********************************************/
/***/ (function(module, exports) {

eval("module.exports = vendor_a977745adb401c6f6327;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInZlbmRvcl9hOTc3NzQ1YWRiNDAxYzZmNjMyN1wiP2UyNmYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB2ZW5kb3JfYTk3Nzc0NWFkYjQwMWM2ZjYzMjc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2ZW5kb3JfYTk3Nzc0NWFkYjQwMWM2ZjYzMjdcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************************************************************************************!*\
  !*** delegated ./node_modules/knockout/build/output/knockout-latest.debug.js from dll-reference vendor_a977745adb401c6f6327 ***!
  \******************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(0))(94);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMva25vY2tvdXQvYnVpbGQvb3V0cHV0L2tub2Nrb3V0LWxhdGVzdC5kZWJ1Zy5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2E5Nzc3NDVhZGI0MDFjNmY2MzI3PzFmMjYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoOTQpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9rbm9ja291dC9idWlsZC9vdXRwdXQva25vY2tvdXQtbGF0ZXN0LmRlYnVnLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYTk3Nzc0NWFkYjQwMWM2ZjYzMjdcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************************************************!*\
  !*** delegated ./node_modules/jquery/dist/jquery.js from dll-reference vendor_a977745adb401c6f6327 ***!
  \*****************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(0))(129);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYTk3Nzc0NWFkYjQwMWM2ZjYzMjc/OWJlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKSgxMjkpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMgZnJvbSBkbGwtcmVmZXJlbmNlIHZlbmRvcl9hOTc3NzQ1YWRiNDAxYzZmNjMyN1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/webpack/buildin/global.js from dll-reference vendor_a977745adb401c6f6327 ***!
  \*********************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(0))(37);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgdmVuZG9yX2E5Nzc3NDVhZGI0MDFjNmY2MzI3PzZlNGMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygwKSkoMzcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGRlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzIGZyb20gZGxsLXJlZmVyZW5jZSB2ZW5kb3JfYTk3Nzc0NWFkYjQwMWM2ZjYzMjdcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 4 */
/* exports provided: ReportingBaseVM */
/* exports used: ReportingBaseVM */
/*!*********************************!*\
  !*** ./Client/ts/ViewModels.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(/*! knockout */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ReportingBaseVM; });\n\r\n\r\nvar ReportingBaseVM = (function () {\r\n    function ReportingBaseVM(name, url) {\r\n        var _this = this;\r\n        this.populateColumn = function (url) {\r\n            var self = _this;\r\n            __WEBPACK_IMPORTED_MODULE_0_jquery__[\"getJSON\"](url, function (data) {\r\n                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {\r\n                    var item = data_1[_i];\r\n                    self.columns.push(item);\r\n                }\r\n                self.columns.sort();\r\n            });\r\n        };\r\n        this.removeFromSelectedColumns = function (item) {\r\n            _this.selectedColumns.remove(item);\r\n            _this.selectedColumns.sort();\r\n        };\r\n        this.addToSelectedColumns = function (item) {\r\n            if (_this.selectedColumns.indexOf(item) < 0) {\r\n                _this.selectedColumns.push(item);\r\n                _this.selectedColumns.sort();\r\n            }\r\n        };\r\n        this.toPascal = function (str) {\r\n            return str.replace(/(\\w)(\\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); }).replace(/\\s+/g, '');\r\n        };\r\n        this.name = name;\r\n        this.columns = __WEBPACK_IMPORTED_MODULE_1_knockout__[\"observableArray\"]([]);\r\n        this.selectedColumns = __WEBPACK_IMPORTED_MODULE_1_knockout__[\"observableArray\"]([]);\r\n        this.populateColumn(url);\r\n        this.modelName = this.toPascal(this.name);\r\n    }\r\n    return ReportingBaseVM;\r\n}());\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DbGllbnQvdHMvVmlld01vZGVscy50cz83ODdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXBvcnRpbmdCYXNlVk0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbW9kZWxOYW1lOiBzdHJpbmc7XHJcbiAgICBjb2x1bW5zOiBLbm9ja291dE9ic2VydmFibGVBcnJheTxzdHJpbmc+O1xyXG4gICAgc2VsZWN0ZWRDb2x1bW5zOiBLbm9ja291dE9ic2VydmFibGVBcnJheTxzdHJpbmc+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgdXJsOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuY29sdW1ucyA9IGtvLm9ic2VydmFibGVBcnJheShbXSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENvbHVtbnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoW10pO1xyXG4gICAgICAgIHRoaXMucG9wdWxhdGVDb2x1bW4odXJsKTtcclxuICAgICAgICB0aGlzLm1vZGVsTmFtZSA9IHRoaXMudG9QYXNjYWwodGhpcy5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3B1bGF0ZUNvbHVtbiA9ICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAkLmdldEpTT04odXJsLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY29sdW1ucy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYuY29sdW1ucy5zb3J0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUZyb21TZWxlY3RlZENvbHVtbnMgPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDb2x1bW5zLnJlbW92ZShpdGVtKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29sdW1ucy5zb3J0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVG9TZWxlY3RlZENvbHVtbnMgPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQ29sdW1ucy5pbmRleE9mKGl0ZW0pIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ29sdW1ucy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ29sdW1ucy5zb3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9QYXNjYWwgPSAoc3RyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXHcpKFxcdyopL2csXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChnMCwgZzEsIGcyKSB7IHJldHVybiBnMS50b1VwcGVyQ2FzZSgpICsgZzIudG9Mb3dlckNhc2UoKTsgfSkucmVwbGFjZSgvXFxzKy9nLCcnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBDbGllbnQvdHMvVmlld01vZGVscy50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQU1BO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTZCQTtBQUFBOzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!******************************************************************************!*\
  !*** ./~/expose-loader?$!./~/expose-loader?jQuery!./~/jquery/dist/jquery.js ***!
  \******************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"$\"] = __webpack_require__(/*! -!./~/expose-loader?jQuery!./jquery.js */ 11);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL34vanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzPzdkZmEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxbXCIkXCJdID0gcmVxdWlyZShcIi0hQzpcXFxcVXNlcnNcXFxcYWxleGxcXFxcZ2l0XFxcXFJlcG9ydGluZ0tub2Nrb3V0XFxcXFJlcG9ydGluZ0tub2Nrb3V0XFxcXG5vZGVfbW9kdWxlc1xcXFxleHBvc2UtbG9hZGVyXFxcXGluZGV4LmpzP2pRdWVyeSEuXFxcXGpxdWVyeS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXhwb3NlLWxvYWRlcj8kIS4vfi9leHBvc2UtbG9hZGVyP2pRdWVyeSEuL34vanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!*****************************!*\
  !*** ./Client/css/site.css ***!
  \*****************************/
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL0NsaWVudC9jc3Mvc2l0ZS5jc3M/NTg0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50L2Nzcy9zaXRlLmNzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/* exports provided: ReportingController */
/* all exports used */
/*!********************************!*\
  !*** ./Client/ts/Reporting.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(/*! knockout */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModels__ = __webpack_require__(/*! ./ViewModels */ 4);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ReportingController\", function() { return ReportingController; });\n//import * as $ from \"jquery\";\r\n//needed for jquery to be available on page\r\nvar $ = __webpack_require__(/*! expose-loader?$!expose-loader?jQuery!jquery */ 5);\r\n\r\n\r\n//page specific css here \r\n__webpack_require__(/*! ../css/site.css */ 6);\r\n($(function () {\r\n    var controller = new ReportingController();\r\n    var employeeColumnsVM = new __WEBPACK_IMPORTED_MODULE_1__ViewModels__[\"a\" /* ReportingBaseVM */](\"Employee\", \"/reporting/getEmployeeColumns\");\r\n    var dataCodesVM = new __WEBPACK_IMPORTED_MODULE_1__ViewModels__[\"a\" /* ReportingBaseVM */](\"Data Codes\", \"/reporting/getDataCodeColumns\");\r\n    var absenseVM = new __WEBPACK_IMPORTED_MODULE_1__ViewModels__[\"a\" /* ReportingBaseVM */](\"Absense\", \"/reporting/getAbsenseColumns\");\r\n    controller.addViewModel(employeeColumnsVM, dataCodesVM, absenseVM);\r\n    controller.init();\r\n    __WEBPACK_IMPORTED_MODULE_0_knockout__[\"applyBindings\"](controller);\r\n}));\r\nvar ReportingController = (function () {\r\n    function ReportingController() {\r\n        var _this = this;\r\n        this.init = function () {\r\n            _this.setTitle();\r\n        };\r\n        this.next = function () {\r\n            _this.selectedIndex(_this.selectedIndex() + 1);\r\n            _this.setTitle();\r\n        };\r\n        this.previous = function () {\r\n            _this.selectedIndex(_this.selectedIndex() - 1);\r\n            _this.setTitle();\r\n        };\r\n        this.addViewModel = function () {\r\n            var vm = [];\r\n            for (var _i = 0; _i < arguments.length; _i++) {\r\n                vm[_i] = arguments[_i];\r\n            }\r\n            for (var _a = 0, vm_1 = vm; _a < vm_1.length; _a++) {\r\n                var item = vm_1[_a];\r\n                _this.vmArray.push(item);\r\n            }\r\n        };\r\n        this.submit = function () {\r\n            var data = {};\r\n            for (var _i = 0, _a = _this.vmArray(); _i < _a.length; _i++) {\r\n                var item = _a[_i];\r\n                var name_1 = item.modelName;\r\n                var arr = item.selectedColumns().map(function (a) { return _this.toPascal(a); });\r\n                data[name_1] = arr;\r\n            }\r\n            $.post(\"/reporting/submit\", { columns: JSON.stringify(data) }, function (res) {\r\n                alert(res);\r\n            });\r\n        };\r\n        this.setTitle = function () {\r\n            if (_this.selectedIndex() >= 0 && _this.selectedIndex() < _this.vmArray().length) {\r\n                _this.title(_this.vmArray()[_this.selectedIndex()].name);\r\n            }\r\n            else {\r\n                _this.title(\"Review\");\r\n            }\r\n        };\r\n        this.testFunc = function () {\r\n            return \"This is another testtttttt\";\r\n        };\r\n        this.toPascal = function (str) {\r\n            return str.replace(/(\\w)(\\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); }).replace(/\\s+/g, '');\r\n        };\r\n        this.selectedIndex = __WEBPACK_IMPORTED_MODULE_0_knockout__[\"observable\"](0);\r\n        this.vmArray = __WEBPACK_IMPORTED_MODULE_0_knockout__[\"observableArray\"]([]);\r\n        this.title = __WEBPACK_IMPORTED_MODULE_0_knockout__[\"observable\"](\"\");\r\n    }\r\n    return ReportingController;\r\n}());\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9DbGllbnQvdHMvUmVwb3J0aW5nLnRzP2MxNGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcclxuLy9uZWVkZWQgZm9yIGpxdWVyeSB0byBiZSBhdmFpbGFibGUgb24gcGFnZVxyXG5jb25zdCAkID0gcmVxdWlyZSgnZXhwb3NlLWxvYWRlcj8kIWV4cG9zZS1sb2FkZXI/alF1ZXJ5IWpxdWVyeScpO1xyXG5pbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcclxuaW1wb3J0IHsgUmVwb3J0aW5nQmFzZVZNIH0gZnJvbSBcIi4vVmlld01vZGVsc1wiO1xyXG5cclxuLy9wYWdlIHNwZWNpZmljIGNzcyBoZXJlIFxyXG5yZXF1aXJlKCcuLi9jc3Mvc2l0ZS5jc3MnKTtcclxuXHJcbigkKGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBjb250cm9sbGVyID0gbmV3IFJlcG9ydGluZ0NvbnRyb2xsZXIoKTtcclxuICAgIGxldCBlbXBsb3llZUNvbHVtbnNWTSA9IG5ldyBSZXBvcnRpbmdCYXNlVk0oXCJFbXBsb3llZVwiLCBcIi9yZXBvcnRpbmcvZ2V0RW1wbG95ZWVDb2x1bW5zXCIpO1xyXG4gICAgbGV0IGRhdGFDb2Rlc1ZNID0gbmV3IFJlcG9ydGluZ0Jhc2VWTShcIkRhdGEgQ29kZXNcIiwgXCIvcmVwb3J0aW5nL2dldERhdGFDb2RlQ29sdW1uc1wiKTtcclxuICAgIGxldCBhYnNlbnNlVk0gPSBuZXcgUmVwb3J0aW5nQmFzZVZNKFwiQWJzZW5zZVwiLCBcIi9yZXBvcnRpbmcvZ2V0QWJzZW5zZUNvbHVtbnNcIik7XHJcbiAgICBjb250cm9sbGVyLmFkZFZpZXdNb2RlbChlbXBsb3llZUNvbHVtbnNWTSwgZGF0YUNvZGVzVk0sIGFic2Vuc2VWTSk7XHJcbiAgICBjb250cm9sbGVyLmluaXQoKTtcclxuICAgIGtvLmFwcGx5QmluZGluZ3MoY29udHJvbGxlcik7XHJcbn0pKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXBvcnRpbmdDb250cm9sbGVyIHtcclxuICAgIHZtQXJyYXk7XHJcbiAgICBzZWxlY3RlZEluZGV4O1xyXG4gICAgdGl0bGU7XHJcbiAgICBqc29uVG9TdWJtaXQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0ga28ub2JzZXJ2YWJsZSgwKTtcclxuICAgICAgICB0aGlzLnZtQXJyYXkgPSBrby5vYnNlcnZhYmxlQXJyYXkoW10pXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IGtvLm9ic2VydmFibGUoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFRpdGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXgodGhpcy5zZWxlY3RlZEluZGV4KCkgKyAxKTtcclxuICAgICAgICB0aGlzLnNldFRpdGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4KHRoaXMuc2VsZWN0ZWRJbmRleCgpIC0gMSk7XHJcbiAgICAgICAgdGhpcy5zZXRUaXRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFZpZXdNb2RlbCA9ICguLi52bSkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygdm0pIHtcclxuICAgICAgICAgICAgdGhpcy52bUFycmF5LnB1c2goaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBsZXQgZGF0YSA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52bUFycmF5KCkpIHtcclxuICAgICAgICAgICAgbGV0IG5hbWUgPSBpdGVtLm1vZGVsTmFtZTtcclxuICAgICAgICAgICAgbGV0IGFyciA9IGl0ZW0uc2VsZWN0ZWRDb2x1bW5zKCkubWFwKGEgPT4gdGhpcy50b1Bhc2NhbChhKSk7XHJcbiAgICAgICAgICAgIGRhdGFbbmFtZV0gPSBhcnI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkLnBvc3QoXCIvcmVwb3J0aW5nL3N1Ym1pdFwiLCB7IGNvbHVtbnM6IEpTT04uc3RyaW5naWZ5KGRhdGEpIH0sIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgYWxlcnQocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFRpdGxlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSW5kZXgoKSA+PSAwICYmIHRoaXMuc2VsZWN0ZWRJbmRleCgpIDwgdGhpcy52bUFycmF5KCkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUodGhpcy52bUFycmF5KClbdGhpcy5zZWxlY3RlZEluZGV4KCldLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aXRsZShcIlJldmlld1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0ZXN0RnVuYyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gXCJUaGlzIGlzIGFub3RoZXIgdGVzdHR0dHR0dFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG9QYXNjYWwgPSAoc3RyOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXHcpKFxcdyopL2csXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChnMCwgZzEsIGcyKSB7IHJldHVybiBnMS50b1VwcGVyQ2FzZSgpICsgZzIudG9Mb3dlckNhc2UoKTsgfSkucmVwbGFjZSgvXFxzKy9nLCAnJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ2xpZW50L3RzL1JlcG9ydGluZy50cyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFNQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBdERBO0FBQ0E7QUFDQTtBQUNBO0FBb0RBO0FBQUE7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 10 */,
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./~/expose-loader?jQuery!./~/jquery/dist/jquery.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {module.exports = global[\"jQuery\"] = __webpack_require__(/*! -!./jquery.js */ 2);\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9+L2pxdWVyeS9kaXN0L2pxdWVyeS5qcz8zOThiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsW1wialF1ZXJ5XCJdID0gcmVxdWlyZShcIi0hLlxcXFxqcXVlcnkuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4cG9zZS1sb2FkZXI/alF1ZXJ5IS4vfi9qcXVlcnkvZGlzdC9qcXVlcnkuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);
//# sourceMappingURL=reporting.js.map