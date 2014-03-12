 
/*=============================================================================
The state machine for the application. This is intended to handle the state for
all the navigable screens in the app.

=============================================================================*/

goog.provide("managers.AppState");

goog.require("managers.ViewController");
goog.require("managers.LoadingManager");

/** 
	@typedef {Object}
*/
var AppState = {
	/** 
	The Finite State Machine
	@dict
	*/
	fsm : {},
	/** 
	init the app state
	*/
	initialize : function(){
		AppState.fsm = StateMachine.create({

			"events": [	
				{ "name": 'start', 				"from": 'none',   			"to": 'loading' },
				{ "name": 'showfullscreenmap',	"from": ['loading'],		"to": 'fullscreenmap' },
				{ "name": 'showvideoplayer',	"from": ['fullscreenmap'],	"to": 'videoplayer' }
			],

			"callbacks": {
				// ON BEFORE
				"onbeforestart": function(event, from, to){},
				"onbeforeshowfullscreenmap": function(event, from, to){},
				"onbeforeshowvideoplayer": function(event, from, to){},
				
				// ON SHOW
				"onstart": function(event, from, to) { 
					LoadingManager.loadApp(AppState.onAppLoaded);
					ViewController.showView(CONST.APPSTATES.LOADING);
				},
				"onshowfullscreenmap": function(event, from, to) { 
					ViewController.showView(CONST.APPSTATES.FULLSCREEN_MAP);
					//ScreenController.showScreen(CONST.APPSTATES.SCREEN_SPLASH);
				},
				"onshowvideoplayer": function(event, from, to) { 
					ViewController.showView(CONST.APPSTATES.VIDEO_PLAYER);
				},
				
				
				// ON LEAVE
				"onleaveloading": function(event, from, to) { 
					//ScreenController.hideScreen(CONST.APPSTATES.SCREEN_SPLASH);
					//return StateMachine.ASYNC;
				},
				"onleavefullscreenmap":  function(event, from, to) {
					//ScreenController.hideScreen(CONST.APPSTATES.SCREEN_SONGS);
					//return StateMachine.ASYNC;
				},
				"onleavevideoplayer":  function(event, from, to) { 
					//ScreenController.hideScreen(CONST.APPSTATES.SCREEN_PARTS);
					//return StateMachine.ASYNC;
				},

				// ON
				"onsplash": function(event, from, to) {},
				"onfullscreenmap":  function(event, from, to) {},
				"onvideoplayer":  function(event, from, to) {},
				
				"onchangestate": function(event, from, to) {}
			}
	  	});
	},

	/** 
		Callback for when the Application has finished it's initial loading
		@private
	*/
	// AppState.fsm.transition;
	onAppLoaded : function() {
		AppState.fsm["showfullscreenmap"]();
	},
	/** 
		start the fsm
	*/
	start : function(){
		AppState.fsm['start']();
	},
};
AppState.initialize();