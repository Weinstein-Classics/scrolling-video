var frameNumber = 0;
var playConst = 500;
var setHeight = document.getElementById("set-height");
var vid = document.getElementById("video");

vid.playbackRate = 1;

vid.addEventListener("loadedmetadata", function() {
	setHeight.style.height = Math.floor(vid.duration) * playConst + "px";
});


function play() {
	var frameNumber = window.pageYOffset / playConst;
	vid.currentTime = frameNumber;
	window.requestAnimationFrame(play);
	if (vid.currentTime = vid.duration - 1) {
		window.location.href = '#main'
		
	};
};

window.requestAnimationFrame(play);
