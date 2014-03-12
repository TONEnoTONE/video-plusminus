/*===============================================================================================================================
 ___      _______  _______  ______   ___   __    _  _______    __   __  _______  __    _  _______  _______  _______  ______   
|   |    |       ||   _   ||      | |   | |  |  | ||       |  |  |_|  ||   _   ||  |  | ||   _   ||       ||       ||    _ |  
|   |    |   _   ||  |_|  ||  _    ||   | |   |_| ||    ___|  |       ||  |_|  ||   |_| ||  |_|  ||    ___||    ___||   | ||  
|   |    |  | |  ||       || | |   ||   | |       ||   | __   |       ||       ||       ||       ||   | __ |   |___ |   |_||_ 
|   |___ |  |_|  ||       || |_|   ||   | |  _    ||   ||  |  |       ||       ||  _    ||       ||   ||  ||    ___||    __  |
|       ||       ||   _   ||       ||   | | | |   ||   |_| |  | ||_|| ||   _   || | |   ||   _   ||   |_| ||   |___ |   |  | |
|_______||_______||__| |__||______| |___| |_|  |__||_______|  |_|   |_||__| |__||_|  |__||__| |__||_______||_______||___|  |_|
=============================================================================================================================== */


goog.provide("managers.LoadingManager");

// goog
goog.require("goog.Uri");
goog.require("goog.net.XhrManager");
// app
//goog.require("managers.Version");

/** 
	@typedef {Object}
*/
var LoadingManager = {
	/** @private
		@type {number} */
	loadedFiles : 0,
	/** @private
		@type {number} */
	requiredFiles : 0,
	/** @private
		@type {function() | null} */
	onloadcallback : null,
	/** initializer */
	initialize : function() {
		LoadingManager.loadRequiredAssets();
	},
	/** 
		@param {function()} callback
	*/
	loadApp : function(callback){
		LoadingManager.onloadcallback = callback ;
	},
	/**
	Where we load all the assets absolutely needed for app to start
	@private
	*/
	loadRequiredAssets : function() {
		var requiredAssets = [];
		requiredAssets.push({ url: "map/nyc-subway-map-hi-res-top-left.png", type: "image" });
			
		LoadingManager.requiredFiles = requiredAssets.length;

		for (var i = 0; i < requiredAssets.length; i++){
			var assetToLoad = requiredAssets[i];
			console.log("Loading: " + assetToLoad.url);
			if ( assetToLoad.type == "image" ) {
				LoadingManager.loadImage( assetToLoad.url, function(){
					LoadingManager.resolvePreload();
				});
			}
		}

		
	},

	/** 
		call internally when a load is resolved to increment the loaded files
		@private
	*/
	resolvePreload : function(){
		LoadingManager.loadedFiles++;
		if (LoadingManager.loadedFiles === LoadingManager.requiredFiles){
			LoadingManager.allLoaded();
		}
	},

	/** 
		@param {string} url of an image
		@param {function(Image)} callback invoked with an image
	*/
	loadImage : function(url, callback){
		var img = new Image();
		img.onload = function(){
			callback(img);
			//LoadingManager.loadResolved();
		};
		img.src = "./assets/images/"+url;
	},
	/** 
		@private
		called when everything is loaded
		keeps trying to call the callback until one is available
	*/
	allLoaded : function(){
		//invoke the callback (if it's been assigned)
		if (LoadingManager.onloadcallback !== null){
			LoadingManager.onloadcallback();
		//otherwise set a timeout to try again in the future
		} else {
			setTimeout(function(){
				LoadingManager.allLoaded();
			}, 100);
		}
	}

}
LoadingManager.initialize();