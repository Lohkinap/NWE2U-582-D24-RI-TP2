// == [ LISTENER ] =============================================================

document.addEventListener('DOMContentLoaded', initModal);

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
