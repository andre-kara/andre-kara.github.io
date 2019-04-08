(function() {
	const header = document.querySelector('#js-header');

	window.addEventListener('scroll',function(){
		console.log('11');
		document.documentElement.scrollTop > 0 ? header.classList.add('fixed') :
			header.classList.remove('fixed');
	})
}());