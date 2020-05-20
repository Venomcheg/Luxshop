function body_lock_remove(delay) {
	var body = document.querySelector("body");

	if (!body.classList.contains('_wait')) {
		var lock_padding = document.querySelectorAll("._lp");
		setTimeout(function () {
			for (var index = 0; index < lock_padding.length; index++) {
				var el = lock_padding[index];
				el.style.paddingRight = '0px';
			}

			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);
		body.classList.add("_wait");
		setTimeout(function () {
			body.classList.remove("_wait");
		}, delay);
	}
}

function body_lock_add(delay) {
	var body = document.querySelector("body");

	if (!body.classList.contains('_wait')) {
		var lock_padding = document.querySelectorAll("._lp");

		for (var index = 0; index < lock_padding.length; index++) {
			var el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}

		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");
		body.classList.add("_wait");
		setTimeout(function () {
			body.classList.remove("_wait");
		}, delay);
	}
}
let user_icon = document.querySelector(".user-header__icon");
user_icon.addEventListener("click", function (e) {
	let user_menu = document.querySelector(".user-header__menu");
	user_menu.classList.toggle("_active");
});

var iconMenu = document.querySelector(".icon-menu");

if (iconMenu != null) {
	var delay = 500;
	var body = document.querySelector("body");
	var menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (!body.classList.contains('_wait')) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};

function menu_close() {
	var iconMenu = document.querySelector(".icon-menu");
	var menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}

document.documentElement.addEventListener('click', function (e) {
	if (!e.target.closest(".user-header")) {
		let user_menu = document.querySelector('.user-header__menu');
		user_menu.classList.remove('_active');
	}
})
let sliders = document.querySelectorAll("._swiper");
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add("swiper-bild");
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);

		}
	}
	sliders_bild_callback();
}
function sliders_bild_callback(params) { }

let main_slider = new Swiper('.main-slider__body', {
	/*
	effect: 'fade',
	autoplay: {
	delay: 3000,
	disableOnInteraction: false,
	},
	*/
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	//autoHeight: true,
	speed: 800,
	//touchRatio: 0,
	//simulateTouch: false,
	loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.control-main-slider__arrow_next',
		prevEl: '.control-main-slider__arrow_prev',

	},

});