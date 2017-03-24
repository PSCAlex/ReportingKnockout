import * as ko from "knockout";
import * as $ from "jquery";

export class DataCodeColumnsVM {
    name: string;
    columns: KnockoutObservableArray<string>;
    selectedColumns: KnockoutObservableArray<string>;

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
    name: string;
    columns: KnockoutObservableArray<string>;
    selectedColumns: KnockoutObservableArray<string>;

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