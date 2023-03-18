const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
	let leftPosition = e.pageX + 1;
	let topPosition = e.pageY - window.scrollY + 1;

	cursor.style.left = leftPosition + "px";
	cursor.style.top = topPosition + "px";
})
document.addEventListener("mouseover", (e) => {
	let leftPosition = e.pageX + 1;
	let topPosition = e.pageY - window.scrollY + 1;

	cursor.style.left = leftPosition + "px";
	cursor.style.top = topPosition + "px";

	const target = e.target
	if (target.tagName === 'A' || target.className.includes('btn-ripple') === true)
	{
		cursor.classList.add('cursor-hover');

		/*var elm = $("<span/>").appendTo(target).css({
			position: "absolute",
			top: 0,
			left: 0,
			width: 100 +"%",
			height: 100 + "%",
			background: "transparent",
		});*/
	}
})
document.addEventListener('mouseout', function(){
	cursor.classList.remove('cursor-click');
	cursor.classList.remove('cursor-hover');
});

document.addEventListener('mousedown', function(){
	cursor.classList.add('cursor-click');
});
document.addEventListener('mouseup', function(){
	cursor.classList.remove('cursor-click');
});