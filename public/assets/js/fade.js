const timeTran = 20;
const durationFade = 6000;

function fadeIn(el) {
	let opacity = 0.01;
	const timer = setInterval(function() {
		if(opacity >= 1) {
			clearInterval(timer);
		}
		document.querySelector(el).style.opacity = opacity;
		opacity += opacity * 0.1;
	}, timeTran);
}

function fadeOut(el, photo) {
	let opacity = 1;
	const timer = setInterval(function() {
		if(opacity <= 0.01) {
			clearInterval(timer);
      document.querySelector(el).style.background = 'url(' + photo +')';
      fadeIn(el);
		}
		document.querySelector(el).style.opacity = opacity;
		opacity -= opacity * 0.1;
	}, timeTran);
}

let num = 0;
let photo = '';
const timerGlobal = setInterval(function() {
  num++;
  if(num > 72)
    num = 10;
    photo = '/assets/images/fade/y' + num + '.png';
  fadeOut('#mi-face', photo);
}, durationFade);