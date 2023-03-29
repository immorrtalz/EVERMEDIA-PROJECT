$("body").css("overflow", "hidden");

$(window).on('load', function() {
	var preloaderFadeOutTime = 500;
	function hidePreloader()
	{
		var preloader = $('.loading-container');
		preloader.css("top", window.scrollY + 1);
		setTimeout(function() {
			preloader.fadeOut(preloaderFadeOutTime);
			$("body").css("overflow", "auto");
		}, 750);
	}
	hidePreloader();
})