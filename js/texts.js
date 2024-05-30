if (document.querySelector("#currentyear") !== null && document.querySelector("#currentyear") !== undefined)
	document.querySelector("#currentyear").textContent = new Date().getFullYear();

var headerTitleChanging1;
var headerTitleChanging2;
var headerTitleChangeIndex = 0;
var intervalSet = false;

function headerTitleChange()
{
	headerTitleChanging1 = document.querySelectorAll('.header-title-changing')[0];
	headerTitleChanging2 = document.querySelectorAll('.header-title-changing')[1];

	if (headerTitleChanging1 === undefined || headerTitleChanging2 === undefined) return;

	headerTitleChanging1.style.width = headerTitleChanging1.children[headerTitleChangeIndex].getBoundingClientRect().width + 'px';
	headerTitleChanging2.style.width = headerTitleChanging2.children[headerTitleChangeIndex].getBoundingClientRect().width + 'px';

	headerTitleChanging1.style.height = headerTitleChanging1.children[headerTitleChangeIndex].getBoundingClientRect().height + 'px';
	headerTitleChanging2.style.height = headerTitleChanging2.children[headerTitleChangeIndex].getBoundingClientRect().height + 'px';

	if (headerTitleChangeIndex == 0)
	{
		for (var i = 0; i < headerTitleChanging1.children.length; i++)
			headerTitleChanging1.children[i].style.top = '0px';

		for (var i = 0; i < headerTitleChanging2.children.length; i++)
			headerTitleChanging2.children[i].style.top = '0px';
	}
	else
	{
		for (var i = 0; i < headerTitleChanging1.children.length; i++)
			headerTitleChanging1.children[i].style.top = '-' + headerTitleChanging1.children[0].getBoundingClientRect().height + 'px';

		for (var i = 0; i < headerTitleChanging2.children.length; i++)
			headerTitleChanging2.children[i].style.top = '-' + headerTitleChanging2.children[0].getBoundingClientRect().height + 'px';
	}

	headerTitleChangeIndex = headerTitleChangeIndex == 0 ? 1 : 0;

	if (!intervalSet)
	{
		intervalSet = true;
		setInterval(headerTitleChange, 2000);
	}
}

function copyToClipboard(text)
{
	navigator.clipboard.writeText(text);
}