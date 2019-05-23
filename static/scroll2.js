var frameNumber = 0;
var playConst = 1000;
var setHeight = document.getElementById("set-height");
var vid = document.getElementById("video");

vid.addEventListener("loadedmetadata", function() {
  setHeight.style.height = Math.floor(vid.duration) + playConst + "px";
});


play = function() {
  var frameNumber = window.pageYOffset / playConst;
  vid.currentTime = frameNumber;
  window.requestAnimationFrame(play);
};

window.requestAnimationFrame(play);
