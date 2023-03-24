$(window).on('load', function() {
	var preloaderFadeOutTime = 500;
	function hidePreloader()
	{
		var preloader = $('.loading-container');
		setTimeout(function() {
			preloader.fadeOut(preloaderFadeOutTime);
		}, 750);
	}
	hidePreloader();
})