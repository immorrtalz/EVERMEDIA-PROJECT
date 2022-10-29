// var sliders = document.querySelectorAll('.slider-area');

// var sliderExample = sliders[0];

// var productItem = sliders[0].querySelectorAll('.slider-item');

// $('.slider-area').on('mouseover', function(e) {
// 	var str = e.target.id;
// 	str.slice(7);
// 	//sliders[parseInt(str)]
// 	var sliderIndex = parseInt(str);
// 	sliderExample = sliders[sliderIndex];
// 	//console.log(sliderExample);
// 	productItem = sliderExample.querySelectorAll('.slider-item'),
// 	productCurrentItem = productItem.filter('.active');
// 	//var temp = $('.slider-item'),
// 		//productCurrentItem = productItem.filter('.active');
// });

// var productItem = $('.slider-item'),
// 	productCurrentItem = productItem.filter('.active');

var index = 0;

function prev(t)
{
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

	// items[index].classList.remove('active');
	// items[index].classList.add('inactive');

	// if (index > 0)
	// {
	// 	index -= 1;
	// 	items[index].classList.remove('inactive');
	// 	items[index].classList.add('active');
	// }
	// else
	// {
	// 	index = items.length - 1;
	// 	items[index].classList.remove('inactive');
	// 	items[index].classList.add('active');
	// }
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

	// items[index].classList.remove('active');
	// items[index].classList.add('inactive');

	// if (index < items.length - 1)
	// {
	// 	index += 1;
	// 	items[index].classList.remove('inactive');
	// 	items[index].classList.add('active');
	// }
	// else
	// {
	// 	index = 0;
	// 	items[index].classList.remove('inactive');
	// 	items[index].classList.add('active');
	// }
}

// $('.next').on('click', function(e) {
// 	e.preventDefault();

// 	var nextItem = productCurrentItem.next();

// 	productCurrentItem.removeClass('active');
// 	productCurrentItem.addClass('inactive');

// 	if (nextItem.length)
// 	{
// 		productCurrentItem = nextItem.addClass('active');
// 		productCurrentItem.removeClass('inactive');
// 	}
// 	else
// 	{
// 		productCurrentItem = productItem.first().addClass('active');
// 		productCurrentItem.first().removeClass('inactive');
// 	}
// });

// $('.prev').on('click', function(e) {
// 	e.preventDefault();

// 	var prevItem = productCurrentItem.prev();

// 	productCurrentItem.removeClass('active');
// 	productCurrentItem.addClass('inactive');

// 	if (prevItem.length)
// 	{
// 		productCurrentItem = prevItem.addClass('active');
// 		productCurrentItem.removeClass('inactive');
// 	}
// 	else
// 	{
// 		productCurrentItem = productItem.last().addClass('active');
// 		productCurrentItem.removeClass('inactive');
// 	}
// });

//НЕ ПОДДЕРЖИВАЕТСЯ НЕСКОЛЬКО СЛАЙДЕРОВ (В НАЧАЛЕ ДОБАВЛЯЕТСЯ ПУСТОТА)