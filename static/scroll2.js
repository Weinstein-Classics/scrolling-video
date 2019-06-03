var playConst = 500;
var setHeight = document.getElementById("set-height");
var vid = document.getElementById("video");
var vidEnd = 0;
vid.playbackRate = 1;


vid.addEventListener("loadedmetadata", function() {
	setHeight.style.height = Math.ceil(vid.duration) * playConst + playConst + "px";
	vidEnd = vid.duration;
	window.requestAnimationFrame(play);
});


function play() {
	vid.currentTime = window.pageYOffset / playConst;
	if (vid.currentTime >= vidEnd) {
		window.scrollTo(0,0);
		vid.currentTime = 0;
	};
	
	window.requestAnimationFrame(play);
};


