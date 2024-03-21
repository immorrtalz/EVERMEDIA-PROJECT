/* $("body").css("overflow", "hidden");

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
}) */

function onReady(callback)
{
	var intervalId = window.setInterval(() =>
	{
		if (document.body !== undefined)
		{
			window.clearInterval(intervalId);
			callback.call(this);
		}
	}, 500);
}

function setVisible(selector, visible)
{
	if (!visible)
	{
		document.querySelector(selector).style.opacity = '0';

		setTimeout(() =>
		{
			document.querySelector(selector).style.visibility = visible ? 'visible' : 'hidden';
		}, 2000);
	}
	else document.querySelector(selector).style.visibility = visible ? 'visible' : 'hidden';
}

onReady(() =>
{
	document.body.style.overflow = 'visible';
	setVisible('.page', true);
	setVisible('.loading', false);
});