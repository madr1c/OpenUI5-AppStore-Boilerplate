/**
 * Created by madr1c on 08/03/15.
 */

sap.ui.jsview("appStore.ApplicationInfo", {

    /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf appStore.ApplicationInfo
     */
    getControllerName: function () {
        return "appStore.ApplicationInfo";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf appStore.ApplicationInfo
     *
     * @return sap.m.Page object which represents the detailView of an item of the list of the Applications.view.js
     */
    createContent: function (oController) {

        return new sap.m.Page({

            //page title
            title: "{applications>name}",

            // navbutton visible
            showNavButton: true,

            // navButton behaviour
            navButtonPress: function () {
                window.history.go(-1);
            },

            // page center content
            content: [

                // app title
                new sap.m.ObjectHeader({
                    title: "{applications>name}"
                }),

                // Image and button
                new sap.m.HBox({
                    items: [new sap.m.Image({
                        src: "{applications>image}",
                        height: "200px"
                    }),
                        new sap.m.Button({
                            text: "{applications>button}",
                            press: function (evt) {
                                sap.app.store.common.downloadApp(evt, this);
                            }
                        })
                    ],
                    alignItems: sap.m.FlexAlignItems.Center,
                    justifyContent: sap.m.FlexJustifyContent.Center,
                    direction: "Column"
                }),

                // app description
                new sap.m.Text({
                    text: "\n {applications>description}",
                    width: "90%",
                    margin: {left: "50px", top: "20px"}
                }).addStyleClass('justify').addStyleClass('appInfoText')
            ]
        });
    }

});