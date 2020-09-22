if(document.querySelector(".swiper-container")) {
	@@include("modules/swiper.min.js")
}

const header = document.querySelector('.header');
if(header) {
	const burger = header.querySelector('.header__burger');
	const menu = header.querySelector('.header__menu');

	burger.addEventListener('click', () => {
		menu.classList.toggle('active');
	});
	document.addEventListener('click', e => {
		const target = e.target;
		if(!header.contains(target)) {
			menu.classList.remove('active');
		}
	});
	window.addEventListener('resize', () => {
		if(window.innerWidth < 920
			&& menu.classList.contains('active')) {
			menu.classList.remove('active');
		}
	});

}
