const initApp = () => {
	const hamburgerBtn = document.getElementById('hamburger-button');
	const closeBtn = document.getElementById('close-button');
	const mobileMenu = document.getElementById('mobile-menu');
	const toggleMenu = () => {
		mobileMenu.classList.toggle('hidden');
		mobileMenu.classList.toggle('flex');
	};

	hamburgerBtn.addEventListener('click', toggleMenu);
	closeBtn.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);