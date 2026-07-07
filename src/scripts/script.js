function updateBackgroundPosition() {
	const INTENSITY = 90; // min = 0, max = 100

	const scrollRatio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
	const offset = scrollRatio * (INTENSITY * -1);

	document.querySelector('.page__background').style.transform = `scale(1.3) translateY(${offset}px)`;
}

window.addEventListener('scroll', updateBackgroundPosition);
window.addEventListener('resize', updateBackgroundPosition);
