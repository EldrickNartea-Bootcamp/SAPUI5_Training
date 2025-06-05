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
            this.getView().byId("iptName").setValue("");
            this.getView().byId("iptStreet").setValue("");
            this.getView().byId("iptStreet1").setValue("");
            this.getView().byId("iptZip").setValue("");
            this.getView().byId("iptCity").setValue("");
            this.getView().byId("slctCntry").setValue("");
            
        }
    });
});
