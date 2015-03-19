/**
 * Created by madr1c on 08/03/15.
 */

jQuery.sap.declare("sap.app.store.common");

sap.app.store.common = {

    /**
     * Routes to welcome page
     *
     * @param e        event
     * @param obj    object
     */
    pressHome: function (e, obj) {

        var router = sap.ui.core.UIComponent.getRouterFor(obj);

        router.navTo("Welcome");
    },

    downloadApp: function (e, obj) {

        //Get data of clicked app
        var model = obj.getModel("applications");
        var path = e.getSource().getBindingContext('applications').getPath();

        //var data = model.getProperty(path);

        //Forward user to app store or download link

    }
};