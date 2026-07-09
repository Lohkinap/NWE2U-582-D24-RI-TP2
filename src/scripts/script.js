// == [ LISTENER ] =============================================================

document.addEventListener('DOMContentLoaded', () => {
	initModal();
	initCounters();
	initChart();
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

	const openModal = (src) => {
		modalImage.src = src;
		modal.classList.remove('hidden');
		modal.classList.add('flex');
	};

	const closeModal = () => {
		modal.classList.add('hidden');
		modal.classList.remove('flex');
	};

	images.forEach((image) => {
		image.addEventListener('click', () => openModal(image.src));
	});

	modalExit.addEventListener('click', closeModal);
	modalOverlay.addEventListener('click', closeModal);

	document.addEventListener('keydown', (event) => {
		if (event.key === 'Escape') closeModal();
	});
}

function initCounters() {
	document.querySelectorAll('.counter').forEach((counter) => animateCounter(counter));
}

function animateCounter(element) {
	const target = parseFloat(element.dataset.target);
	const decimals = parseInt(element.dataset.decimals) || 0;
	const suffix = element.dataset.suffix || '';

	const STEPS = 120;
	const INTERVAL = 3000 / STEPS;
	const increment = target / STEPS;

	let currentValue = 0;
	let stepCount = 0;

	const timer = setInterval(() => {
		stepCount++;
		currentValue += increment;

		if (stepCount >= STEPS) {
			currentValue = target;
			clearInterval(timer);
		}

		element.textContent = formatCounterValue(currentValue, decimals) + suffix;
	}, INTERVAL);
}

function formatCounterValue(value, decimals) {
	if (decimals > 0) {
		return value.toFixed(decimals).replace('.', ',');
	}
	return Math.round(value).toString();
}
