/**======================================================
@license (c) 2014 TONEnoTONE, Yotam Mann, & Chris Deaner
========================================================*/

goog.provide("SubwayVideo");

goog.require("managers.AppState");

//the application singleton
var SubwayVideo = {
	/** */
	initialize : function(){
		// start the application
		AppState.start();
		//console.log("oh hi there");
	},
};

SubwayVideo.initialize();