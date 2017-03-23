import * as ko from "knockout";
import * as $ from "jquery";

($(function () {
    //let controller = new ReportingController();
    ko.applyBindings(new EmployeeColumnsVM(), document.getElementById("employeeColumns"))
}));

export class ReportingController {
    employeeColumnsVM;

    constructor() {
        this.employeeColumnsVM = new EmployeeColumnsVM();
    }

    init = () => {
        ko.applyBindings(this.employeeColumnsVM, document.getElementById("employeeColumns"))
    }

}

export class EmployeeColumnsVM {
    columns;
    selectedColumns;

    constructor() {
        this.columns = ko.observableArray([]);
        this.selectedColumns = ko.observableArray([]);
        this.populateColumn();
    }

    populateColumn = () => {
        var self = this;
        $.getJSON("/reporting/getEmployeeColumns", function (data) {
            for (let item of data) {
                self.columns.push(item);
            }
            self.columns.sort();
        });
        
    }

    removeFromSelectedColumns = (item) => {
        this.selectedColumns.remove(item);
        this.selectedColumns.sort();
    }

    addToSelectedColumns = (item) => {
        if (this.selectedColumns.indexOf(item) < 0) {
            this.selectedColumns.push(item);
            this.selectedColumns.sort();
        }
    }
}