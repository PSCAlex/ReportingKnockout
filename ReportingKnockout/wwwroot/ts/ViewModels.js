"use strict";
var ko = require("knockout");
var $ = require("jquery");
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
//# sourceMappingURL=ViewModels.js.map