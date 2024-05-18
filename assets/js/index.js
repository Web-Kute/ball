const ball = document.getElementById('ball');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const reverseBtn = document.getElementById('reverse');
const speedUpBtn = document.getElementById('speed-up');
const slowDownBtn = document.getElementById('slow-down');

const rollAnimation = [
  {
    transform: 'rotate(0) translate3D(-50%, -50%, 0)',
    color: 'white',
  },
  {
    color: '#f0932b',
    offset: 0.3,
  },
  {
    transform: 'rotate(360deg) translate3D(-50%, -50%, 0)',
    color: 'white',
  },
];

const rollOptions = {
  duration: 3000,
  iterations: Infinity,
};

const roll = ball.animate(rollAnimation, rollOptions);

playBtn.addEventListener('click', () => {
  roll.playbackRate = 1;
  roll.play();
});

pauseBtn.addEventListener('click', () => roll.pause());
reverseBtn.addEventListener('click', () => roll.reverse());

speedUpBtn.addEventListener('click', () => {
  roll.playbackRate = roll.playbackRate * 2;
});

slowDownBtn.addEventListener('click', () => {
  roll.playbackRate = roll.playbackRate * 0.5;
});