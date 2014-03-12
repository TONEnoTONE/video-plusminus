/**=====
LoadingView
=======*/

goog.provide("views.LoadingView");

goog.require("views.AppDom");

goog.require("goog.style");

//the application singleton
var LoadingView = {
	/** @private @type {Element} */
	div : AppDom.LoadingScreen,
	/** @private @type {Element} */
	textdiv : null,
	/** @private @type {Array} */
	/** */
	initialize : function(){
		LoadingView.makeScreen();
		LoadingView.hideScreen();
	},
	
	/** make the screen **/
	makeScreen : function(){
		// holder for the song buttons
		LoadingView.textdiv = goog.dom.createDom('div', { 'id': 'textdiv' });
		LoadingView.textdiv.textContent = "LOADING...";

		// draw the sucker
		goog.dom.appendChild(LoadingView.div, LoadingView.textdiv);

		setTimeout(function(){
    		AppState.fsm["showfullscreenmap"]();
    	}, 1000);
		
	},
	/** make the screen **/
	showScreen : function(){
		goog.style.setElementShown(LoadingView.div, true);
	},
	/** make the screen **/
	hideScreen : function(){
		goog.style.setElementShown(LoadingView.div, false);
	}
};

LoadingView.initialize();