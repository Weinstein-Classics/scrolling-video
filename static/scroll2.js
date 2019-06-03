var playConst = 500;
var unknownConst = 300
var setHeight = document.getElementById("set-height");
var vid = document.getElementById("video");

vid.playbackRate = 1;
var vidEnd = vid.duration - 1.5;

vid.addEventListener("loadedmetadata", function() {
	setHeight.style.height = Math.ceil(vid.duration) * playConst + "px";
});


function play() {
	var frameNumber = window.pageYOffset / playConst;
	vid.currentTime = frameNumber;
	console.log(vid.currentTime);
	
	if (vid.currentTime >= vidEnd) {
		console.log("end");
		vid.frameNumber = 0;
		vid.currentTime = 0;
		window.pageYOffset = 0;
	};
	
	window.requestAnimationFrame(play);
};

window.requestAnimationFrame(play);
