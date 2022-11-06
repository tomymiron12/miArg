const _C = document.querySelector('.containero'), N = _C.children.length;
const firstCircle = document.getElementById("circle1");
const secondCircle = document.getElementById("circle2");
let a = 0;
let i = 0, x0 = null;

function unify(e) {	return e.changedTouches ? e.changedTouches[0] : e };

function lock(e) { x0 = unify(e).clientX };

function move(e) {
	if(x0 || x0 === 0) {
		let dx = unify(e).clientX - x0, s = Math.sign(dx);
		if(a == 0){
			firstCircle.style.backgroundColor = "#b3d1e9";
			secondCircle.style.backgroundColor = "#4191D0";
			a = 1;
		}else{
			firstCircle.style.backgroundColor = "#4191D0";
			secondCircle.style.backgroundColor = "#b3d1e9";
			a = 0;
		}
		if((i > 0 || s < 0) && (i < N - 1 || s > 0))
			_C.style.setProperty('--i', i -= s);
		x0 = null
	}
};

_C.style.setProperty('--n', N);

_C.addEventListener('mousedown', lock, false);
_C.addEventListener('touchstart', lock, false);

_C.addEventListener('touchmove', e => { e.preventDefault() }, false);

_C.addEventListener('mouseup', move, false);
_C.addEventListener('touchend', move, false);
document.addEventListener("click", (e) => {
	toggleFullScreen();

  }, false);
function toggleFullScreen() {
	document.documentElement.requestFullscreen();

  }