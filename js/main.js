window.addEventListener('load', function(event) {
	navpagesUnExpand();
});

window.addEventListener('scroll', function () {
	let nav = document.querySelector('nav');
	let windowPosition = window.scrollY > 0;
	nav.classList.toggle('scrolledNav', windowPosition);
	if (window.scrollY == 0)
	{
		navpagesUnExpand();
	}
});

function navpagesExpand() {
	let nav = document.querySelector('nav');
	nav.classList.add('scrolledNav');
	document.getElementById("navpages-expanded").style.height="fit-content";
	document.getElementById("navpages-expander").setAttribute("onClick", "javascript: navpagesUnExpand();");
	document.getElementById("navpages-expander").style.width="30px";
	document.getElementById("navpages-expander").style.height="30px";
}

function navpagesUnExpand() {
	let nav = document.querySelector('nav');
	let windowPosition = window.scrollY > 0;
	nav.classList.toggle('scrolledNav', windowPosition);
	document.getElementById("navpages-expanded").style.height="0";
	document.getElementById("navpages-expander").setAttribute("onClick", "javascript: navpagesExpand();");
	document.getElementById("navpages-expander").style.width="40px";
	document.getElementById("navpages-expander").style.height="40px";
}

function closeTopAnnouncement() {
	document.getElementById("top-announcement").style.display="none";
}