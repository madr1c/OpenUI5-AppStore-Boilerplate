/**
 * Created by madr1c on 08/03/15.
 */

sap.ui.controller("appStore.ApplicationInfo", {

    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf appStore.ApplicationInfo
     */
    onInit: function () {

        this.router = sap.ui.core.UIComponent.getRouterFor(this);
        this.router.attachRoutePatternMatched(this._handleRouteMatched, this);

    },

    _handleRouteMatched: function (evt) {

        if ("appInfo" !== evt.getParameter("name")) {
            return;
        }

        this.catIndex = evt.getParameter("arguments").catIndex;
        this.appIndex = evt.getParameter("arguments").appIndex;

        var context = sap.ui.getCore().byId("app").getModel('applications').getContext('/collection/' + this.catIndex + '/apps/' + this.appIndex);

        this.getView().setBindingContext(context, 'applications');

    }
});