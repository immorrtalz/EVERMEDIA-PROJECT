document.querySelector("#currentyear").textContent = new Date().getFullYear();

const headerTitleChanging1 = document.querySelectorAll('.header-title-changing')[0];
const headerTitleChanging2 = document.querySelectorAll('.header-title-changing')[1];
var headerTitleChangeIndex = 0;

function headerTitleChange()
{
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
}

setInterval(headerTitleChange, 2000);