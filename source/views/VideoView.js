/**=====
VideoView
=======*/

goog.provide("views.VideoView");

goog.require("views.AppDom");

goog.require("goog.style");
goog.require("goog.dom");
goog.require("goog.dom.vendor");
goog.require("goog.style.transition");

//the application singleton
var VideoView = {
	/** @private @type {Element} */
	div : AppDom.VideoView,
	/** @private @type {Element} */
	videocontainer : null,
	/** @private @type {Element} */
	videoplayer : null,

	initialize :  function() {
		VideoView.hideScreen();
		VideoView.makeScreen();
	},
	makeScreen : function() {
		// holder for the map
		VideoView.videocontainer = goog.dom.createDom('div', { 'id': 'videocontainer' });
		VideoView.videoplayer = goog.dom.createDom('video', { 'id': 'videoplayer' });
		VideoView.videosource = goog.dom.createDom('source', { 'src': 'http://tonenotone.com/videos/plusminus/assets/videos/8thave.mp4', 'type': 'video/mp4' });

		// draw the sucker
		goog.dom.appendChild(VideoView.div, VideoView.videocontainer);
		goog.dom.appendChild(VideoView.videocontainer, VideoView.videoplayer);
		goog.dom.appendChild(VideoView.videoplayer, VideoView.videosource);
	},
	/** 
	*/
	showScreen : function() {
		goog.style.setElementShown(VideoView.div, true);
		VideoView.videoplayer.load();
		//VideoView.videoplayer.oncanplaythrough = function(){
		VideoView.videoplayer.play();
		//}
	},
	/** 
	*/
	hideScreen : function() {
		goog.style.setElementShown(VideoView.div, false);
	}
}
VideoView.initialize();