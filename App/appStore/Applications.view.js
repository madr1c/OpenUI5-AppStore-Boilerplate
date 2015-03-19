/**
 * Created by madr1c on 08/03/15.
 */

sap.ui.jsview("appStore.Applications", {

    /** Specifies the Controller belonging to this View.
     * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
     * @memberOf appStore.Applications
     */
    getControllerName: function () {
        return "appStore.Applications";
    },

    /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed.
     * Since the Controller is given to this method, its event handlers can be attached right away.
     * @memberOf appStore.Applications
     *
     * @return sap.m.Page object which represents the list of applications
     */
    createContent: function (oController) {

        // Initializes tableView template
        var oTable = new sap.m.Table("applicationsTable", {
            inset: true,
            columns: [
                //image
                new sap.m.Column({
                    hAlign: "Left",
                    width: "100px",
                    demandPopin: true,
                    popinDisplay: "Block",
                    minScreenWidth: sap.m.ScreenSize.Medium
                }),
                //title/desc
                new sap.m.Column({
                    hAlign: "Left",
                    demandPopin: true,
                    popinDisplay: "Block",
                    minScreenWidth: sap.m.ScreenSize.Medium
                })

            ]
        });

        // Initializes an itemView template
        var oTemplate = new sap.m.ColumnListItem({
            type: sap.m.ListType.Active,
            cells: [
                // image
                new sap.m.Image({
                    src: "{applications>image}",
                    height: "100px"
                }),

                // title/desc
                new sap.m.Text({
                    text: "{applications>name} \n \n {applications>title}"
                })
            ]
        });

        // Bubbles an event to Applications.controller.js if a list item was clicked
        oTemplate.attachPress(function (evt) {
            oController.appPress(evt);
        });

        // Wrap items of the loaded JSON into itemView template
        oTable.bindAggregation("items", "applications>apps", oTemplate);

        return new sap.m.Page({

            // page title
            title: "{applications>category}",

            // page center content
            content: [oTable]
        });
    }

});