"use strict";
	
		const slides = document.querySelectorAll('.slider__item'),
		buttonsCont = document.querySelector('.slider__buttons'),
		box = document.querySelector('.slider__box'),
		sliderLine = document.querySelector('.slider__line');
		

	
	sliderLine.style.width = 100 * slides.length + '%';
	let width = window.getComputedStyle(box).width;

	slides.forEach(slide => {
		slide.style.width = width;
	});
	
	let curPoz = 0,
		offset = 0,
		contWidth = width * slides.length,
		convWidth = +width.replace(/\D/g, '');

	

	console.log(document.documentElement.clientWidth);
	function createBtn() {
		if (slides.length >= 1) {

			for (let i = 1; i <= slides.length; i++) {
				buttonsCont.insertAdjacentHTML('beforeend', `<ul data-slide-to="${i}" class="slider__btn"></ul>`);
			}

		}
	}
	createBtn();

	let widthLine = convWidth * slides.length;
	let btnPoz = 0;

	let btns = document.querySelectorAll('.slider__btn');
	const dots = [];
	btns.forEach(dot => dots.push(dot));

	function showEnableBTN(i = btnPoz) {
		if (offset < convWidth) {
			dots.forEach(dot => dot.style.backgroundColor = "");
			btns[0].style.backgroundColor = "#848789";
		}else {
			dots.forEach(dot => dot.style.backgroundColor = "");
			btns[i].style.backgroundColor = "#848789";
		}

	}

	showEnableBTN();

	function moveRight() {
		if (offset == convWidth * (slides.length - 1)) {
			offset = 0;
			btnPoz = 0;
		} else {
			offset += convWidth;
			btnPoz++;
		}
		sliderLine.style.transform = `translateX(-${offset}px)`;
	}

	function moveLeft() {
		if (offset == 0) {
			offset = convWidth * (slides.length - 1);
		} else {
			offset -= convWidth;
		}
		sliderLine.style.transform = `translateX(-${offset}px)`;
		btnPoz--;
	}


	function slideShow() {
		setInterval(function () {
			moveRight();
			showEnableBTN();
		}, 3000);

	}





	buttonsCont.addEventListener('click', (e) => {
		if (e.target && e.target.classList.contains('slider__btn')) {
			const slideTo = e.target.getAttribute('data-slide-to');
			btnPoz = slideTo - 1;
			offset = btnPoz * convWidth;
			sliderLine.style.transform = `translateX(-${offset}px)`;
			console.log(offset);
			showEnableBTN();
	
	
		}
	});
	
	slideShow();
		
		


