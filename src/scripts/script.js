// == [ LISTENER ] =============================================================

document.addEventListener('DOMContentLoaded', () => {
	initModal();
	// initCarousel();
});

document.addEventListener('scroll', updateBackgroundPosition);
document.addEventListener('resize', updateBackgroundPosition);

// == [ FUNCTION ] =============================================================

function updateBackgroundPosition() {
	const INTENSITY = 90; // min = 0, max = 100

	const scrollRatio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
	const offset = scrollRatio * (INTENSITY * -1);

	document.querySelector('.page__background').style.transform = `scale(1.3) translateY(${offset}px)`;
}

function initModal() {
	const modal = document.getElementById('modal');
	const modalImage = document.getElementById('modalImage');
	const modalExit = document.getElementById('modalExit');
	const modalOverlay = document.getElementById('modalOverlay');

	const images = document.querySelectorAll('#actors img, #media img, #facts img');

	images.forEach((image) => {
		image.addEventListener('click', () => {
			modalImage.src = image.src;
			modal.classList.remove('hidden');
		});
	});

	const closeModal = () => modal.classList.add('hidden');

	modalExit.addEventListener('click', closeModal);
	modalOverlay.addEventListener('click', closeModal);

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') closeModal();
	});
}

// function initCarousel() {
// 	const buttons = document.querySelectorAll('a[href^="#item"]');

// 	buttons.forEach((button) => {
// 		button.addEventListener('click', scrollToItem);
// 	});
// }

// function scrollToItem(event) {
// 	event.preventDefault();

// 	const id = this.getAttribute('href');
// 	const image = document.querySelector(id);
// 	const container = image.parentElement;

// 	container.scrollTo({
// 		left: image.offsetLeft,
// 		behavior: 'smooth',
// 	});
// }
