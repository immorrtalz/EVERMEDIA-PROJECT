/* window.addEventListener('scroll', () =>
	{
		let topHeader = document.querySelector('.top-header');
		let isScrolled = window.scrollY > 0;
		topHeader.classList.toggle('top-header-scrolled', isScrolled);
		if (window.scrollY == 0) navbarUnExpand();
	}); */


/*window.addEventListener('load', function(event)
{
	navbarUnExpand();
});

window.addEventListener('scroll', function ()
{
	let topHeader = document.querySelector('.top-header');
	let isScrolled = window.scrollY > 0;
	topHeader.classList.toggle('top-header-scrolled', isScrolled);
	if (window.scrollY == 0) navbarUnExpand();
});

function navbarExpand()
{
	let topHeader = document.querySelector('.top-header');
	topHeader.classList.add('top-header-scrolled');
	document.getElementById("navbar-expanded").style.height="4rem";
	document.getElementById("navbar-expander").setAttribute("onClick", "javascript: navbarUnExpand();");
	document.getElementById("navbar-expander").style.width="30px";
	document.getElementById("navbar-expander").style.height="30px";
}

function navbarUnExpand()
{
	let topHeader = document.querySelector('.top-header');
	let isScrolled = window.scrollY > 0;
	topHeader.classList.toggle('top-header-scrolled', isScrolled);
	document.getElementById("navbar-expanded").style.height="0";
	document.getElementById("navbar-expander").setAttribute("onClick", "javascript: navbarExpand();");
	document.getElementById("navbar-expander").style.width="40px";
	document.getElementById("navbar-expander").style.height="40px";
}

function closeTopAnnouncement()
{
	document.getElementById("top-announcement").style.display="none";
}*/