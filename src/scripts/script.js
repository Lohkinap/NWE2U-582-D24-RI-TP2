// == [ LISTENER ] =============================================================

document.addEventListener('DOMContentLoaded', () => {
	initModal();
	initCounters();
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
	const modalContent = document.getElementById('modalContent');
	const modalImage = document.getElementById('modalImage');
	const modalExit = document.getElementById('modalExit');
	const modalOverlay = document.getElementById('modalOverlay');
	const images = document.querySelectorAll('#actors img, #media img, #facts img, #hero img');

	const openModal = (source) => {
		modalImage.src = source;
		modal.classList.remove('hidden');
		modal.classList.add('flex');
		document.body.classList.add('overflow-hidden');

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				modalOverlay.classList.remove('opacity-0');
				modalContent.classList.remove('opacity-0', 'scale-[0.3]');
			});
		});
	};

	const closeModal = () => {
		modalOverlay.classList.add('opacity-0');
		modalContent.classList.add('opacity-0', 'scale-[0.3]');

		setTimeout(() => {
			modal.classList.add('hidden');
			modal.classList.remove('flex');
			document.body.classList.remove('overflow-hidden');
		}, 300);
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
	const STEPS = 120;
	const INTERVAL = 3000 / STEPS;

	const target = parseFloat(element.dataset.target);
	const increment = target / STEPS;
	const decimals = parseInt(element.dataset.decimals) || 0;
	const suffix = element.dataset.suffix || '';

	let currentValue = 0;
	let stepCount = 0;

	const timer = setInterval(() => {
		stepCount++;
		currentValue += increment;
		if (stepCount >= STEPS) {
			currentValue = target;
			clearInterval(timer);
		}

		const formattedValue = decimals > 0 ? currentValue.toFixed(decimals) : Math.round(currentValue).toString();

		element.textContent = formattedValue + suffix;
	}, INTERVAL);
}
