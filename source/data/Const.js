/*=============================================================================
_______  _______  __    _  _______  _______ 
|       ||       ||  |  | ||       ||       |
|       ||   _   ||   |_| ||  _____||_     _|
|       ||  | |  ||       || |_____   |   |  
|      _||  |_|  ||  _    ||_____  |  |   |  
|     |_ |       || | |   | _____| |  |   |  
|_______||_______||_|  |__||_______|  |___|  

	the app constants
=============================================================================*/

goog.provide("data.Const");


/**	
	the container of constants
	@typedef {Object}
*/
var CONST = {};

/** 
	the app states
	@const
	@enum {string}
*/
CONST.APPSTATES = {
	LOADING : 'LOADING',
	FULLSCREEN_MAP : 'MAP_LARGE',
	VIDEO_PLAYER : 'VIDEO_PLAYER'
};