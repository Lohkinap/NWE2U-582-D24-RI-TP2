// == [ LISTENERS ] ============================================================

document.addEventListener('DOMContentLoaded', () => {
	initCounters();
	initModal();
	initNewsletter();
	updateBackgroundPosition();
});

document.addEventListener('scroll', updateBackgroundPosition);
document.addEventListener('resize', updateBackgroundPosition);

// == [ INIT ] ============================================================

function initCounters() {
	document.querySelectorAll('.counter').forEach((counter) => animateCounter(counter));
}

function initModal() {
	const modal = document.getElementById('modal');
	const modalContent = document.getElementById('modalContent');
	const modalImage = document.getElementById('modalImage');
	const modalExit = document.getElementById('modalExit');
	const modalOverlay = document.getElementById('modalOverlay');
	const images = document.querySelectorAll('#actors img, #facts img, #gallery img, #hero img, #media img, #set img, #trivia img');

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

function initNewsletter() {
	const form = document.getElementById('newsletter');
	const input = document.getElementById('newsletter-email');
	const successMsg = document.getElementById('newsletter-success');
	const errorContainer = document.getElementById('newsletter-errors');

	form.addEventListener('submit', (event) => {
		event.preventDefault();

		errorContainer.innerHTML = '';
		const email = input.value;
		const errors = [];

		const hasValue = /\S/.test(email);
		const hasValidPattern = /^[^@]+@[^@]+\.[^@]+$/.test(email);
		const hasWhitespace = (email.match(/\s/g) || []).length > 0;

		if (!hasValue) {
			errors.push('Le champ est obligatoire');
		} else if (!hasValidPattern) {
			errors.push("Le format de l'adresse est invalide");
		} else if (hasWhitespace) {
			errors.push("Le champ ne doit pas contenir d'espaces");
		}

		const isValid = errors.length === 0;

		if (!isValid) {
			errors.forEach((error) => {
				const p = document.createElement('p');
				p.textContent = error;
				errorContainer.appendChild(p);
			});
		}

		errorContainer.classList.toggle('hidden', isValid);
		successMsg.classList.toggle('hidden', !isValid);
		input.classList.toggle('border-red-500', !isValid);

		if (isValid) {
			input.value = '';
		}
	});
}

// == [ FUNCTIONS ] ============================================================

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

function updateBackgroundPosition() {
	const INTENSITY = 90; // min = 0, max = 100

	const scrollRatio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
	const offset = scrollRatio * (INTENSITY * -1);

	document.querySelector('.page__background').style.transform = `scale(1.3) translateY(${offset}px)`;
}
