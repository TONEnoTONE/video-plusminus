 
/*=============================================================================
View Controller. Handles all the switching of views stuff
=============================================================================*/

goog.provide("managers.ViewController");

goog.require("data.Const");
goog.require("views.LoadingView");
goog.require("views.MapView");

/** 
	@typedef {Object}
*/
var ViewController = {
	/** 
		Static list of screens
		@type {Object}
		@private
	**/
	screens : {},
	/** 
	init
	*/
	initialize : function(){
		// set up available screens
		ViewController.screens[CONST.APPSTATES.LOADING] = LoadingView;
		ViewController.screens[CONST.APPSTATES.FULLSCREEN_MAP] = MapView;
	},

	/** 
		@param {CONST.APPSTATES} view
	*/
	showView : function(view) {
		ViewController.screens[view].showScreen();
	},

	/** 
		@param {CONST.APPSTATES} view
	*/
	hideView : function(view) {
		// track that we are here
		ViewController.screens[view].hideScreen();
	}
};
ViewController.initialize();