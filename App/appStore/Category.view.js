/**
 * Created by madr1c on 08/03/15.
 */

sap.ui.jsview("appStore.Category", {

    /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf appStore.Category
     */
    getControllerName: function () {
        return "appStore.Category";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf appStore.Category
     *
     * @return sap.m.Page object which represents the list of categories
     */
    createContent: function (oController) {

        //Create list which will be shown in this view
        var oList = new sap.m.List({
            id: "listId"
        });

        //Bind list to our JSON model
        oList.bindItems({
                path: "applications>/collection",
                template: new sap.m.StandardListItem({
                    title: "{applications>category}",
                    icon: "{applications>icon}",
                    //Navigation list
                    type: sap.m.ListType.Navigation,
                    //Bubble event to category controller which will be fired by clicking on a list item
                    press: function (evt) {
                        oController.categoryListItemPress(evt);
                    }
                })
            }
        );

        return new sap.m.Page({

            // Category title
            title: "{language>/categoryHeader}",

            // Page header content
            headerContent: new sap.m.Button({

                // home icon
                icon: "sap-icon://home",

                // On press it routes us to the welcome page
                press: function (evt) {
                    sap.app.store.common.pressHome(evt, oController);
                }
            }),

            // Page center content
            content: [oList]
        });
    }

});