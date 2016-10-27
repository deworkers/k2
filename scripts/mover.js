$(document).ready(function() {
	$('.header__mobile-menu').click(function() {
		$(this).next().slideToggle();
		$('.header__mobile-menu').toggleClass('header__mobile-menu--open');
	});



	
});