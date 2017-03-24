import * as ko from "knockout";
import * as $ from "jquery";
import * as VMs from "./ViewModels";

($(function () {
    let controller = new ReportingController();
    let employeeColumnsVM = new VMs.EmployeeColumnsVM();
    let dataCodesVM = new VMs.DataCodeColumnsVM();
    controller.addViewModel(employeeColumnsVM, dataCodesVM);
    controller.init();
    ko.applyBindings(controller);
}));

export class ReportingController {
    vmArray;
    selectedIndex;
    title;
    jsonToSubmit;

    constructor() {
        this.selectedIndex = ko.observable(0);
        this.vmArray = ko.observableArray([])
        this.title = ko.observable("");
    }

    init = () => {
        this.setTitle();
    }

    next = () => {
        this.selectedIndex(this.selectedIndex() + 1);
        this.setTitle();
    }

    previous = () => {
        this.selectedIndex(this.selectedIndex() - 1);
        this.setTitle();
    }

    addViewModel = (...vm) => {
        for (let item of vm) {
            this.vmArray.push(item);
        }
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