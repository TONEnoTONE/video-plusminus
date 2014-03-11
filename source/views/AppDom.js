/*=============================================================================
why is this here?

good question. instead of tying the code to a particular dom state, we can generate 
the dom here and only make JS refernces to it. 

basically. another level of abstraction. and you don't need to touch the dom. 

and it fixes some circular dependency issues
=============================================================================*/


goog.provide("views.AppDom");

goog.require("goog.dom");
goog.require("data.Const");

/** 
	@const
	@typedef {Object}
*/
var AppDom = {
	//the top level elements
	/** @type {Element} */
	Shell : goog.dom.createDom("div", {"id" : "Shell"}),
	/** @type {Element} */
	LoadingScreen : goog.dom.createDom("div", {"id" : "LoadingScreen", "class" : "screen"}),
	/** @type {Element} */
	BigMapHolder : goog.dom.createDom("div", {"id" : "BigMapHolder", "class" : "screen"}),
	
	//add them in the right places
	initialize : function(){
		goog.dom.appendChild(document.body, AppDom.Shell);
		goog.dom.appendChild(AppDom.Shell, AppDom.LoadingScreen);
		goog.dom.appendChild(AppDom.Shell, AppDom.BigMapHolder);
	},
}

AppDom.initialize();