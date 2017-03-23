"use strict";
var ko = require("knockout");
var $ = require("jquery");
($(function () {
    //let controller = new ReportingController();
    ko.applyBindings(new EmployeeColumnsVM(), document.getElementById("employeeColumns"));
}));
var ReportingController = (function () {
    function ReportingController() {
        var _this = this;
        this.init = function () {
            ko.applyBindings(_this.employeeColumnsVM, document.getElementById("employeeColumns"));
        };
        this.employeeColumnsVM = new EmployeeColumnsVM();
    }
    return ReportingController;
}());
exports.ReportingController = ReportingController;
var EmployeeColumnsVM = (function () {
    function EmployeeColumnsVM() {
        var _this = this;
        this.populateColumn = function () {
            var self = _this;
            $.getJSON("/reporting/getEmployeeColumns", function (data) {
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
        this.columns = ko.observableArray([]);
        this.selectedColumns = ko.observableArray([]);
        this.populateColumn();
    }
    return EmployeeColumnsVM;
}());
exports.EmployeeColumnsVM = EmployeeColumnsVM;
//# sourceMappingURL=reporting.js.map