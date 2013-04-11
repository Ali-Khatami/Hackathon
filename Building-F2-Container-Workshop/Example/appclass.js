F2.Apps["com_build_f2_container_example_app"] = (function() {
    var App_Class = function(appConfig, appContent, root) {
    	// constructor
    	this.appConfig = appConfig;
        this._instanceId = appConfig.instanceId;
    	this.appContent = appContent;
    	this.$root = $(root); //if you're using jQuery.
    };

    App_Class.prototype.init = function() {
        // perform init actions
        F2.log("Init called.")
        this._cacheElements();
        this._bindEvents();
    };

    App_Class.prototype._cacheElements = function() {
        this.CustomActionButton = $("button.customActionButton", this.$root);
    };

    App_Class.prototype._bindEvents = function() {
        this.CustomActionButton.on("click." + this._instanceId, function(){
            // my app emitting an event
            F2.Events.emit("containerExampleAppEvent", [{foo: "bar"}]);
        });

        // my app listening to an event
        F2.Events.on("containerExampleEvent", function(){
            F2.log("containerExampleEvent: ", arguments);
        });
    };

    return App_Class;
})();