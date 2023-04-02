window.addEventListener("load", (event) => {
	const footer = document.querySelector('footer');
	const footercont = $('<div class="container">').appendTo(footer);

	const footer1 = $('<div class="container-footer footer-1"></div>').appendTo(footercont);
	const footer2 = $('<div class="container-footer footer-2"></div>').appendTo(footercont);
	const footer3 = $('<div class="container-footer footer-3"></div>').appendTo(footercont);

	$("<h2>О НАС</h2>").appendTo(footer1);
	$("<p>EVERMEDIA PROJECT - медиапроект, специализирующийся в области разработки видеоигр, графического дизайна и иного мультимедиа контента</p>").appendTo(footer1);

	$("<h2>ССЫЛКИ</h2>").appendTo(footer2);
	var elm = $('<div class="flex-container"></div>').appendTo(footer2);
	$('<a class="extra-link-icon" href="https://www.youtube.com/@evermedia-project"><img src="images/socials/yt.png"></a>').appendTo(elm);
	$('<a class="extra-link-icon" href="https://discord.gg/GbzYVdF"><img src="images/socials/ds.png"></a>').appendTo(elm);
	$('<a class="extra-link-icon" href="https://t.me/evermedia_project"><img src="images/socials/tg_channel.png"></a>').appendTo(elm);
	$('<a class="extra-link-icon" href="https://t.me/evermedia_project_cm"><img src="images/socials/tg_chat.png"></a>').appendTo(elm);
	$('<a class="extra-link-icon" href="https://vk.com/evermedia_project"><img src="images/socials/vk.png"></a>').appendTo(elm);

	var bottomstr1 = '<p>Copyright © EVERMEDIA PROJECT, 2019-';
	var bottomstr2 = new Date().getFullYear();
	var bottomstr3 = '. All rights reserved.</p><a href="mailto:evereststudioproject@bk.ru" class="blue"> evereststudioproject@bk.ru</a>';
	var bottomstr = bottomstr1 + bottomstr2 + bottomstr3;

	$(bottomstr).appendTo(footer3);
});