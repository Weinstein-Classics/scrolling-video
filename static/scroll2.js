var playConst = 500; // Scrolling Sensitivity
var setHeight = document.getElementById("set-height");
var vid = document.getElementById("video");
var vidEnd = 0;
vid.playbackRate = 1;


vid.addEventListener("loadedmetadata", function() {
	setHeight.style.height = Math.ceil(vid.duration) * playConst + playConst + "px"; // sets height
	vidEnd = vid.duration; // sets the end of video
	
	
	window.requestAnimationFrame(play); // adds play function to run each frame
});


function play() {
	vid.currentTime = window.pageYOffset / playConst; // sets time to window y pos
	if (vid.currentTime >= vidEnd) { // end of video
		window.scrollTo(0,0); // move to top of screen
		vid.currentTime = 0; // reset video time to 0
	};
	
	window.requestAnimationFrame(play); // recursive call
};


