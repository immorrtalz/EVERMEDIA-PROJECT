$("html").on("mousedown", ".btn-ripple", function(event)
{
	const btn = $(event.target);
	const classes = event.target.className;
	var x = event.pageX - btn.offset().left;
	var y = event.pageY - btn.offset().top;

	var elm0 = $("<span/>").appendTo(btn).css(
	{
		position: "absolute",
		top: "0",
		left: "0",
		width: "100%",
		height: "100%",
		background: "transparent",
	});

	setTimeout(() =>
	{
		elm0.remove();
	}, 3000);

	var elm = $("<span/>").appendTo(elm0).css(
	{
		left: x + "px",
		top: y + "px"
	}).addClass("ripple");

	setTimeout(() =>
	{
		elm.remove();
	}, 3000);
});