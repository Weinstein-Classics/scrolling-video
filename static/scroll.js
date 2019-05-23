var body = document.getElementById("main");
var scrollLim = 9088;

var frameNumber = 0,
	playbackConstant = 1000, // Playback scrolling sensitivity
	setHeight = document.getElementById("set-height"),
	vid = document.getElementById('vid');


vid.addEventListener('loadedmetadata', function() {
	setHeight.style.height = Math.floor(vid.duration) * playbackConstant + "px";
});

function scrollPlay() {
    var frameNumber = window.pageYOffset / playbackConstant;
    vid.currentTime = frameNumber;
    window.requestAnimationFrame(scrolPlay);
}

window.requestAnimationFrame(scrollPlay);

/*
body.onscroll = function() {
  vid.currentTime = map(document.documentElement.scrollTop);
};

map = function(value) {
  coeff = scrollLim/vid.duration;
  return value / coeff;
}
*/
