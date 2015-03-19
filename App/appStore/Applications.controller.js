/**
 * Created by madr1c on 08/03/15.
 */

sap.ui.controller("appStore.Applications", {

    /**
     * Called when a controller is instantiated and its View controls (if available) are already created.
     * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
     * @memberOf appStore.Applications
     */
    onInit: function () {

        this.router = sap.ui.core.UIComponent.getRouterFor(this);
        this.router.attachRoutePatternMatched(this._handleRouteMatched, this);

    },

    _handleRouteMatched: function (evt) {

        if ("apps" !== evt.getParameter("name")) {
            return;
        }

        this.catIndex = evt.getParameter("arguments").catIndex;

        var context = sap.ui.getCore().byId("app").getModel('applications').getContext('/collection/' + this.catIndex);

        this.getView().setBindingContext(context, 'applications');

    },

    appPress: function (oEvent) {

        var oBindingContext = oEvent.getSource().getBindingContext('applications');

        var sPath = oBindingContext.sPath;

        var start = sPath.lastIndexOf("/") + 1;

        var appIndex = sPath.substring(start, sPath.length);

        this.router.navTo("appInfo", {catIndex: this.catIndex, appIndex: appIndex})

    }
});