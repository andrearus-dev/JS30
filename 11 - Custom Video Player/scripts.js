//Get our elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//Build our functions 

function togglePlat() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//hook up to event listeners

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);