/**=====
MapView
=======*/

goog.provide("views.MapView");

goog.require("views.AppDom");

//the application singleton
var MapView = {
	/** @private @type {Element} */
	div : AppDom.MapLarge,
	/** */
	initialize : function(){
		MapView.makeScreen();
		MapView.hideScreen();
	},
	/** 
		
	*/
	makeScreen : function() {
		// holder for the song buttons
		MapView.textdiv = goog.dom.createDom('div', { 'id': 'textdiv' });
		MapView.textdiv.textContent = "HI!! OMG!!! I'm a map!!!...";
		// draw the sucker
		goog.dom.appendChild(MapView.div, MapView.textdiv);
	},
	/** 
		
	*/
	showScreen : function() {
		goog.style.setElementShown(MapView.div, true);
	},

	/** 
		
	*/
	hideScreen : function() {
		goog.style.setElementShown(MapView.div, false);
	}
};

MapView.initialize();