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
	if (visible == false)
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
	initialize();
	setVisible('.page', true);
	setVisible('.loading', false);
});