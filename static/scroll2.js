var playConst = 500;
var unknownConst = 300
var setHeight = document.getElementById("set-height");
var vid = document.getElementById("video");
var vidEnd = 0;
vid.playbackRate = 1;


vid.addEventListener("loadedmetadata", function() {
	setHeight.style.height = Math.ceil(vid.duration) * playConst + "px";
	vidEnd = vid.duration - 2;
	window.requestAnimationFrame(play);
});


function play() {
	var frameNumber = window.pageYOffset / playConst;
	vid.currentTime = frameNumber;
	console.log(frameNumber);
	if (vid.currentTime >= vidEnd) {
		window.pageYOffset = 0;
		console.log("end");
		window.scrollTo(0,0);
		vid.frameNumber = 0;
		vid.currentTime = 0;
	};
	
	window.requestAnimationFrame(play);
};


