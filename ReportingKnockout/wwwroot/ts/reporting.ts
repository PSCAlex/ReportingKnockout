import * as ko from "knockout";
import * as $ from "jquery";

($(function () {
    let controller = new ReportingController();
    ko.applyBindings(controller);
}));

export class ReportingController {
    employeeColumnsVM;
    dataCodeColumnsVM;
    vmArray;
    selectedIndex;
    title

    constructor() {
        this.selectedIndex = ko.observable(0);
        this.employeeColumnsVM = ko.observable(new EmployeeColumnsVM());
        this.dataCodeColumnsVM = ko.observable(new DataCodeColumnsVM());

        this.vmArray = ko.observableArray([this.employeeColumnsVM(), this.dataCodeColumnsVM()])

        this.title = ko.observable(this.vmArray()[0].name);
    }

    next = () => {
        this.selectedIndex(this.selectedIndex() + 1);
        this.setTitle();
    }

    previous = () => {
        this.selectedIndex(this.selectedIndex() - 1);
        this.setTitle();
    }

    private setTitle = () => {
        if (this.selectedIndex() >= 0 && this.selectedIndex() < this.vmArray().length) {
            this.title(this.vmArray()[this.selectedIndex()].name);
        }
        else {
            this.title("Review");
        }
    }
}

export class DataCodeColumnsVM {
    name;
    columns;
    selectedColumns;

    constructor() {
        this.name = "Data Codes";
        this.columns = ko.observableArray([]);
        this.selectedColumns = ko.observableArray([]);
        this.populateColumn();
    }

    populateColumn = () => {
        var self = this;
        $.getJSON("/reporting/getDataCodeColumns", function (data) {
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

export class EmployeeColumnsVM {
    name;
    columns;
    selectedColumns;

    constructor() {
        this.name = "Employee";
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