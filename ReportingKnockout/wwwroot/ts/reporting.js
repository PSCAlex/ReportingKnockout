"use strict";
var ko = require("knockout");
var $ = require("jquery");
var VMs = require("./ViewModels");
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
        this.employeeColumnsVM = ko.observable(new VMs.EmployeeColumnsVM());
        this.dataCodeColumnsVM = ko.observable(new VMs.DataCodeColumnsVM());
        this.vmArray = ko.observableArray([this.employeeColumnsVM(), this.dataCodeColumnsVM()]);
        this.title = ko.observable(this.vmArray()[0].name);
    }
    return ReportingController;
}());
exports.ReportingController = ReportingController;
//# sourceMappingURL=reporting.js.map