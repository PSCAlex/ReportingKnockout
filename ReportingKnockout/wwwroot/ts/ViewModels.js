"use strict";
var ko = require("knockout");
var $ = require("jquery");
var ReportingBaseVM = (function () {
    function ReportingBaseVM(name, url) {
        var _this = this;
        this.populateColumn = function (url) {
            var self = _this;
            $.getJSON(url, function (data) {
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
        this.toPascal = function (str) {
            return str.replace(/(\w)(\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); }).replace(/\s+/g, '');
        };
        this.name = name;
        this.columns = ko.observableArray([]);
        this.selectedColumns = ko.observableArray([]);
        this.populateColumn(url);
        this.modelName = this.toPascal(this.name);
    }
    return ReportingBaseVM;
}());
exports.ReportingBaseVM = ReportingBaseVM;
//# sourceMappingURL=ViewModels.js.map