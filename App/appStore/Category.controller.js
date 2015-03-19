/**
 * Created by madr1c on 08/03/15.
 */

sap.ui.controller("appStore.Category", {

    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf appStore.App
     */

    categoryListItemPress: function (evt) {

        var router = sap.ui.core.UIComponent.getRouterFor(this);

        var context = evt.getSource().getBindingContext('applications');

        //Get category index
        var path = context.sPath; //"/collection/0"

        var start = path.lastIndexOf('/') + 1;

        var catIndex = path.substring(start, path.length);

        router.navTo('apps', {catIndex: catIndex});

    }
});