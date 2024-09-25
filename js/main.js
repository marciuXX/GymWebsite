const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.burger-btn');

const handleNav = () => {

	navBtn.classList.toggle('burger-btn--active');
	navMobile.classList.toggle('nav-mobile--active');

    if (navBtn.classList.contains('burger-btn--active')) {
		document.body.style.setProperty('overflow', 'hidden');
	} else {
		document.body.style.removeProperty('overflow');
	}

};

navBtn.addEventListener('click', handleNav);
