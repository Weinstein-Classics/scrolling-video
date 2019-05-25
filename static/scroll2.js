var frameNumber = 0;
var playConst = 500;
var setHeight = document.getElementById("set-height");
var vid = document.getElementById("video");

vid.addEventListener("loadedmetadata", function() {
	setHeight.style.height = Math.floor(vid.duration) + playConst + "px";
});


function play() {
	var frameNumber = window.pageYOffset / playConst;
	vid.currentTime = frameNumber;
	window.requestAnimationFrame(play);
};

window.requestAnimationFrame(play);
