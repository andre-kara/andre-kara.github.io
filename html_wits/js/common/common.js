(function() {
	// // svg preload
	// let svg = document.querySelector('#mini-logo');
	// let svgAnimation = new LazyLinePainter(svg, {
	// 	strokeColor: '#000',
	// 	strokeWidth : 2,
	// 	strokeCap: 'square'
	// });
	//
	// svgAnimation.paint();

	// preload
	window.addEventListener('load', function(){
		let wrap = document.getElementsByClassName('preload-wrapper')[0];
		if(wrap.classList.contains('load')) return;

		setTimeout(()=> wrap.classList.add('load'), 3100);
	});

	// NEXT PAGE

	const btnPage = document.querySelector('#js-next-page');
	const overlayPage = document.querySelector('.js-overlay-page');

	const _body = document.querySelector('.body');
	const _header = document.querySelector('.header');

	const words = document.querySelector('.js-words');
	const contactUs = document.querySelector('.js-contact-us');
	const homeFooter = document.querySelector('.js-home-footer');
	const page_2 = document.querySelector('.js-page');

	btnPage.addEventListener('click', function(){
		overlayPage.classList.add('active');
		setTimeout(function(){
			_body.classList.add('body_white');
			_header.classList.add('header_white');
			page_2.style.display = 'block';
		},1000)
		words.classList.add('d-none');
		homeFooter.classList.add('d-none');
		contactUs.classList.add('d-none');
	});


	$('#js-info').popover({
		html: true,
		container: 'body',
		template: '<div class="popover popover-custom">' +
		'<div class="arrow">' +
		'</div><h3 class="popover-header"></h3>' +
		'<div class="popover-body"></div>' +
		'</div>'
	});

}());