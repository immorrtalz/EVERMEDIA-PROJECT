var index = 0;

function prev(t)
{
	t.disabled = true;

	let elm = t.parentElement.children[0];
	let items = elm.getElementsByClassName("slider-item");

	items[0].classList.remove('active');
	items[0].classList.add('inactive');

	items[items.length - 1].classList.add('active');
	items[items.length - 1].classList.remove('inactive');

	setTimeout(function()
	{
		elm.prepend(items[items.length - 1]);
		t.disabled = false;
	}, 333);
}

function next(t)
{
	t.disabled = true;

	let elm = t.parentElement.children[0];
	let items = elm.getElementsByClassName("slider-item");

	items[0].classList.remove('active');
	items[0].classList.add('inactive');

	items[1].classList.add('active');
	items[1].classList.remove('inactive');

	setTimeout(function()
	{
		elm.append(items[0]);
		t.disabled = false;
	}, 333);
}