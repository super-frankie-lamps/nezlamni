const initApp = () => {
	const hamburgerBtn = document.getElementById('hamburger-button');
	const mobileMenu = document.getElementById('mobile-menu');
	const toggleMenu = () => {
		mobileMenu.classList.toggle('animate-open-menu');
		mobileMenu.classList.toggle('animate-close-menu');
		hamburgerBtn.classList.toggle('toggle-btn');
		setTimeout(() => {
			mobileMenu.classList.toggle('flex');
			mobileMenu.classList.toggle('hidden');
		}, 300);
	};

	hamburgerBtn.addEventListener('click', toggleMenu);

	if (jarallax) {
		jarallax(document.querySelectorAll('.parallax'), {
			speed: 0.8,
			disableParallax: function () {
				return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
			  },
		});
	}
}

document.addEventListener('DOMContentLoaded', initApp);