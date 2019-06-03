var playConst = 500;
var unknownConst = 300
var setHeight = document.getElementById("set-height");
var vid = document.getElementById("video");

vid.playbackRate = 1;

vid.addEventListener("loadedmetadata", function() {
	setHeight.style.height = Math.ceil(vid.duration) * playConst + "px";
});


function play() {
	var frameNumber = window.pageYOffset / playConst;
	vid.currentTime = frameNumber;
	console.log(vid.currentTime);
	
	if (vid.currentTime >= vid.duration) {
		console.log("end");
		document.documentElement.scrollTo = 0;
		document.body.scrollTo = 0;
		
	};
	
	window.requestAnimationFrame(play);
};

window.requestAnimationFrame(play);
