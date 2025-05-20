sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.acn.training.project1.controller.View1", {
        onInit() {
        },

        onSavePress: function () {
            
        },

        onClearPress: function () {
            const view = this.getView();
            const inputs = view.findAggregatedObjects(true, (control) => control.isA("sap.m.Input"));
            inputs.forEach((input) => input.setValue(""));
            const selects = view.findAggregatedObjects(true, (control) => control.isA("sap.m.Select"));
            selects.forEach((select) => select.setSelectedKey(null));
            
        }
    });
});
