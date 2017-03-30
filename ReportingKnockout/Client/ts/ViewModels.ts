import * as $ from "jquery";
import * as ko from "knockout";

export class ReportingBaseVM {
    name: string;
    modelName: string;
    columns: KnockoutObservableArray<string>;
    selectedColumns: KnockoutObservableArray<string>;

    constructor(name: string, url: string) {
        this.name = name;
        this.columns = ko.observableArray([]);
        this.selectedColumns = ko.observableArray([]);
        this.populateColumn(url);
        this.modelName = this.toPascal(this.name);
    }

    populateColumn = (url: string) => {
        var self = this;
        $.getJSON(url, function (data) {
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

    private toPascal = (str: string) => {
        return str.replace(/(\w)(\w*)/g,
            function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); }).replace(/\s+/g,'');
    }
}