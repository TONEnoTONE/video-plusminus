/**=====
MapView
=======*/

goog.provide("views.MapView");

goog.require("views.AppDom");

goog.require("goog.style");
goog.require("goog.dom");
goog.require("goog.dom.vendor");
goog.require("goog.style.transition");

//the application singleton
var MapView = {
	/** @private @type {Element} */
	div : AppDom.MapLarge,
	/** @private @type {Element} */
	textdiv : null,
	/** @private @type {Element} */
	mapdiv : null,
	/** @private @type {Imahe} */
	mapimage : null,
	/** */
	initialize : function(){
		MapView.makeScreen();
		MapView.hideScreen();

		var transformString = goog.string.buildString("translate3d(0,0,0)");
		goog.style.setStyle(MapView.mapdiv, {
			'transform': transformString,
		});
	},
	/** 
		
	*/
	makeScreen : function() {
		// holder for the map
		MapView.mapdiv = goog.dom.createDom('div', { 'id': 'mapdiv' });
		var mapimage = new Image();
		mapimage.src = "./assets/images/map/nyc-subway-map-hi-res-top-left.png";
		mapimage.id = "map";
		// holder for the text
		//MapView.textdiv = goog.dom.createDom('div', { 'id': 'textdiv' });
		//MapView.textdiv.textContent = "HI!! OMG!!! I'm a map!!!...";
		
		// draw the sucker
		goog.dom.appendChild(MapView.mapdiv, mapimage);
		goog.dom.appendChild(MapView.div, MapView.mapdiv);
		//goog.dom.appendChild(MapView.div, MapView.mapdiv);
		//goog.dom.appendChild(MapView.div, MapView.textdiv);

	},
	/** 
		
	*/
	showScreen : function() {
		goog.style.setElementShown(MapView.div, true);

		setTimeout(function(){
			AppState.fsm["showvideoplayer"]();
		}, 500)
	},

	/** 
		
	*/
	hideScreen : function() {
		goog.style.setElementShown(MapView.div, false);
	}
};

MapView.initialize();