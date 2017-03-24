"use strict";
var ko = require("knockout");
var $ = require("jquery");
($(function () {
    var controller = new ReportingController();
    ko.applyBindings(controller);
}));
var ReportingController = (function () {
    function ReportingController() {
        var _this = this;
        this.next = function () {
            _this.selectedIndex(_this.selectedIndex() + 1);
            _this.setTitle();
        };
        this.previous = function () {
            _this.selectedIndex(_this.selectedIndex() - 1);
            _this.setTitle();
        };
        this.setTitle = function () {
            if (_this.selectedIndex() >= 0 && _this.selectedIndex() < _this.vmArray().length) {
                _this.title(_this.vmArray()[_this.selectedIndex()].name);
            }
            else {
                _this.title("Review");
            }
        };
        this.selectedIndex = ko.observable(0);
        this.employeeColumnsVM = ko.observable(new EmployeeColumnsVM());
        this.dataCodeColumnsVM = ko.observable(new DataCodeColumnsVM());
        this.vmArray = ko.observableArray([this.employeeColumnsVM(), this.dataCodeColumnsVM()]);
        this.title = ko.observable(this.vmArray()[0].name);
    }
    return ReportingController;
}());
exports.ReportingController = ReportingController;
var DataCodeColumnsVM = (function () {
    function DataCodeColumnsVM() {
        var _this = this;
        this.populateColumn = function () {
            var self = _this;
            $.getJSON("/reporting/getDataCodeColumns", function (data) {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var item = data_1[_i];
                    self.columns.push(item);
                }
                self.columns.sort();
            });
        };
        this.removeFromSelectedColumns = function (item) {
            _this.selectedColumns.remove(item);
            _this.selectedColumns.sort();
        };
        this.addToSelectedColumns = function (item) {
            if (_this.selectedColumns.indexOf(item) < 0) {
                _this.selectedColumns.push(item);
                _this.selectedColumns.sort();
            }
        };
        this.name = "Data Codes";
        this.columns = ko.observableArray([]);
        this.selectedColumns = ko.observableArray([]);
        this.populateColumn();
    }
    return DataCodeColumnsVM;
}());
exports.DataCodeColumnsVM = DataCodeColumnsVM;
var EmployeeColumnsVM = (function () {
    function EmployeeColumnsVM() {
        var _this = this;
        this.populateColumn = function () {
            var self = _this;
            $.getJSON("/reporting/getEmployeeColumns", function (data) {
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var item = data_2[_i];
                    self.columns.push(item);
                }
                self.columns.sort();
            });
        };
        this.removeFromSelectedColumns = function (item) {
            _this.selectedColumns.remove(item);
            _this.selectedColumns.sort();
        };
        this.addToSelectedColumns = function (item) {
            if (_this.selectedColumns.indexOf(item) < 0) {
                _this.selectedColumns.push(item);
                _this.selectedColumns.sort();
            }
        };
        this.name = "Employee";
        this.columns = ko.observableArray([]);
        this.selectedColumns = ko.observableArray([]);
        this.populateColumn();
    }
    return EmployeeColumnsVM;
}());
exports.EmployeeColumnsVM = EmployeeColumnsVM;
//# sourceMappingURL=reporting.js.map