const cursor = document.querySelector(".cursor");
const cursorGlow = document.querySelector(".cursor-glow");

var inputX = 0;
var inputY = 0;
var currentMouseTarget = 'null';
var raf;

if (isMobile())
{
	cursor.remove();
	cursorGlow.remove();
}
else
{
	document.addEventListener("mousemove", (e) =>
	{
		inputX = e.pageX;
		inputY = e.pageY - window.scrollY;
	});

	raf = window.requestAnimationFrame(animFrame);

	document.addEventListener("mouseover", (e) =>
	{
		if (e.target.tagName === 'A' || e.target.className.includes('btn-ripple'))
		{
			cursor.classList.add('cursor-hover');
			currentMouseTarget = e.target;
		}
	});

	document.addEventListener('mouseout', () =>
	{
		cursor.classList.remove('cursor-click');
		cursor.classList.remove('cursor-hover');
		currentMouseTarget = 'null';
	});

	document.addEventListener('mousedown', () => { cursor.classList.add('cursor-click'); });
	document.addEventListener('mouseup', () => { cursor.classList.remove('cursor-click'); });
}

function animFrame()
{
	cursor.style.left = lerp(cursor.style.left.replace('px', ''), inputX, 0.1) + "px";
	cursor.style.top = lerp(cursor.style.top.replace('px', ''), inputY, 0.1) + "px";

	cursorGlow.style.left = lerp(cursorGlow.style.left.replace('px', ''), inputX, 0.9) + "px";
	cursorGlow.style.top = lerp(cursorGlow.style.top.replace('px', ''), inputY, 0.9) + "px";

	if (currentMouseTarget != 'null') cursorGlow.style.opacity = '0.5';
	else cursorGlow.style.opacity = '0';

	raf = window.requestAnimationFrame(animFrame);
}

function lerp(start, end, t) { return start * (1 - t) + end * t; }

function isMobile()
{
	const minWidth = 768; // Minimum width for desktop devices
	return window.innerWidth < minWidth || screen.width < minWidth;
}
