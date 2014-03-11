/**=====
LoadingView
=======*/

goog.provide("views.LoadingView");

goog.require("views.AppDom");

//the application singleton
var LoadingView = {
	/** @private @type {Element} */
	div : AppDom.LoadingScreen,
	/** @private @type {Element} */
	bgDiv : null,
	/** @private @type {Array} */
	/** */
	initialize : function(){
		LoadingView.makeScreen();
		LoadingView.hideScreen();
	},
	
	/** make the screen **/
	makeScreen : function(){
		// holder for the song buttons
		LoadingView.bgDiv = goog.dom.createDom('div', { 'id': 'loadingBg' });
		LoadingView.bgDiv.textContent = "LOADING...";

		// draw the sucker
		goog.dom.appendChild(LoadingView.div, LoadingView.bgDiv);

		// handle clicks
		/*
		PartsScreen.clickHandler = new goog.events.EventHandler();
		PartsScreen.clickHandler.listen(PartsScreen.partsButtonsDiv, [goog.events.EventType.TOUCHSTART], PartsScreen.scrollStart);
		PartsScreen.clickHandler.listen(PartsScreen.partsButtonsDiv, [goog.events.EventType.TOUCHEND], PartsScreen.scrollEnd);
		PartsScreen.clickHandler.listen(PartsScreen.partsButtonsDiv, [goog.events.EventType.TOUCHMOVE], PartsScreen.scrolling);
		PartsScreen.clickHandler.listen(PartsScreen.div, [goog.events.EventType.TOUCHMOVE], PartsScreen.clicked);
		*/
	},

	/** make the screen **/
	hideScreen : function(){

	},
};

LoadingView.initialize();