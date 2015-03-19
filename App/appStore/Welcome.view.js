/**
 * Created by madr1c on 08/03/15.
 */

sap.ui.jsview("appStore.Welcome", {

    /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf appStore.Welcome
     */
    getControllerName: function () {
        return "appStore.Welcome";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf appStore.Welcome
     *
     * @return sap.m.Page object which represents the list of applications
     */
    createContent: function (oController) {

        // Welcome image
        var oImage = new sap.m.Image({
            src: "resources/welcome.png",
            width: '500px'
        }).addStyleClass('welcomeImage');

        // Welcome page text
        var oText = new sap.m.Text({
            text: "{language>/welcomePageText}"
        }).addStyleClass('welcomeText');

        return new sap.m.Page({
            title: "{language>/welcomePageTitle}",
            headerContent: [
                // header content goes here
            ],

            // Page center content
            content: [
                new sap.m.VBox({
                    items: [oImage, oText],
                    alignItems: sap.m.FlexAlignItems.Center,
                    justifyContent: sap.m.FlexJustifyContent.Center
                })
            ]
        });
    }
});