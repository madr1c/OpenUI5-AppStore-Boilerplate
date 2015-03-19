/**
 * Created by madr1c on 08/03/15.
 */

jQuery.sap.declare("sap.app.store.Component");

/**
 * Controls routing
 */
sap.ui.core.UIComponent.extend("sap.app.store.Component", {

    metadata: {

        routing: {

            config: {
                viewType: "JS",
                viewPath: "appStore",      //Path to view
                targetControl: "splitApp",
                clearTarget: false,
                transition: "slide"     //Effect while moving to another site
            },

            routes: [
                {
                    pattern: "",
                    name: "default",
                    view: "Category",
                    targetAggregation: "masterPages",
                    subroutes: [
                        {
                            pattern: "",
                            name: "Welcome",
                            view: "Welcome",
                            targetAggregation: "detailPages"
                        },

                        {
                            pattern: "category/{catIndex}",
                            name: "apps",
                            view: "Applications",
                            targetAggregation: "detailPages"
                        },

                        {
                            pattern: "category/{catIndex}/apps/{appIndex}",
                            name: "appInfo",
                            view: "ApplicationInfo",
                            targetAggregation: "detailPages"
                        }
                    ]
                }
            ]

        }

    },

    init: function () {

        // Load resources in global jQuery scope
        jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
        jQuery.sap.require("sap.ui.core.routing.HashChanger");
        jQuery.sap.includeStyleSheet("css/custom.css");

        //call createContent
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

        this._router = this.getRouter();

        //initlialize the router
        this._routeHandler = new sap.m.routing.RouteMatchedHandler(this._router);
        this._router.initialize();


    },

    /**
     * Standard function which creates the app content to be put into HTML
     *
     * @returns {sap.ui.core.mvc.View}      app content
     */
    createContent: function () {

        //Declare model variables
        var oModel;
        var oLModel;

        //initialize view
        var oView = sap.ui.view({
            id: "app",
            viewName: "appStore.App",
            type: "JS",
            viewData: {component: this}
        });

        //Localize client
        var locale = sap.ui.getCore().getConfiguration().getLanguage();

        //initialize model
        if ("de" === locale.toString().substring(0, 2)) {
            oModel = new sap.ui.model.json.JSONModel('model/Applications_de.json');
            oLModel = new sap.ui.model.json.JSONModel('model/Store_de.json');
        }
        else {
            //Default language english
            oModel = new sap.ui.model.json.JSONModel('model/Applications_en.json');
            oLModel = new sap.ui.model.json.JSONModel('model/Store_en.json');
        }

        //Set application list
        oView.setModel(oModel, 'applications');

        //Set store language
        oView.setModel(oLModel, 'language');

        return oView;

    }


});
