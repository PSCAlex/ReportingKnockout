import * as ko from "knockout";
import * as $ from "jquery";
import * as VMs from "./ViewModels";

($(function () {
    let controller = new ReportingController();
    ko.applyBindings(controller);
}));

export class ReportingController {
    vmArray;
    selectedIndex;
    title;
    jsonToSubmit;

    constructor() {
        this.selectedIndex = ko.observable(0);
        this.vmArray = ko.observableArray([new VMs.EmployeeColumnsVM(), new VMs.DataCodeColumnsVM()])
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