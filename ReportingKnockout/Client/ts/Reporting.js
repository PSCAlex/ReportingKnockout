"use strict";
var $ = require("jquery");
var ko = require("knockout");
var VMs = require("./ViewModels");
require('../css/site.css');
($(function () {
    var controller = new ReportingController();
    var employeeColumnsVM = new VMs.ReportingBaseVM("Employee", "/reporting/getEmployeeColumns");
    var dataCodesVM = new VMs.ReportingBaseVM("Data Codes", "/reporting/getDataCodeColumns");
    var absenseVM = new VMs.ReportingBaseVM("Absense", "/reporting/getAbsenseColumns");
    controller.addViewModel(employeeColumnsVM, dataCodesVM, absenseVM);
    controller.init();
    ko.applyBindings(controller);
}));
var ReportingController = (function () {
    function ReportingController() {
        var _this = this;
        this.init = function () {
            _this.setTitle();
        };
        this.next = function () {
            _this.selectedIndex(_this.selectedIndex() + 1);
            _this.setTitle();
        };
        this.previous = function () {
            _this.selectedIndex(_this.selectedIndex() - 1);
            _this.setTitle();
        };
        this.addViewModel = function () {
            var vm = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                vm[_i] = arguments[_i];
            }
            for (var _a = 0, vm_1 = vm; _a < vm_1.length; _a++) {
                var item = vm_1[_a];
                _this.vmArray.push(item);
            }
        };
        this.submit = function () {
            var data = {};
            for (var _i = 0, _a = _this.vmArray(); _i < _a.length; _i++) {
                var item = _a[_i];
                var name_1 = item.modelName;
                var arr = item.selectedColumns().map(function (a) { return _this.toPascal(a); });
                data[name_1] = arr;
            }
            $.post("/reporting/submit", { columns: JSON.stringify(data) }, function (res) {
                alert(res);
            });
        };
        this.setTitle = function () {
            if (_this.selectedIndex() >= 0 && _this.selectedIndex() < _this.vmArray().length) {
                _this.title(_this.vmArray()[_this.selectedIndex()].name);
            }
            else {
                _this.title("Review");
            }
        };
        this.testFunc = function () {
            return "This is another testtttttt";
        };
        this.toPascal = function (str) {
            return str.replace(/(\w)(\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); }).replace(/\s+/g, '');
        };
        this.selectedIndex = ko.observable(0);
        this.vmArray = ko.observableArray([]);
        this.title = ko.observable("");
    }
    return ReportingController;
}());
exports.ReportingController = ReportingController;
//# sourceMappingURL=Reporting.js.map