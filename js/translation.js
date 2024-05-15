function initialize()
{
	langId = localStorage.getItem('langId');

	if (langId === null) langId = 0;
	else langId = parseInt(langId);

	changeTranslation(langId);
	headerTitleChange();
}

const translationsEN = [
	"Home",
	"Projects",
	"Design",
	"by immorrtalz",
	"When ",
	"design",
	"application",
	"is not just ",
	"pictures",
	"code",
	"Feel this world with us!",
	"Dive in",
	"PROJECTS",
	"Apps and games for PC and mobile",
	"Modern minimalistic audioplayer",
	"Mobile runner in a space setting",
	"Horror-survival in a laboratory",
	"Soon... or not...",
	"DESIGN",
	"Aesthetic and affordable PREMIUM design*",
	"Banner",
	"For forum/advertising etc.",
	"Avatar",
	"For any profile",
	"Landing",
	"Small website layout",
	"Application interface layout",
	"LANGUAGE",
	"LINKS",
	"* Order a design",
	"SOCIALS",
	"NOT FOUND",
	"The content you're looking for was not found...",
	"Go back",
	"all rights reserved",
	"Privacy Policy",
	"Terms & Conditions",
	"Support",
	"senpai",
	"the\u00A0project",
	"with\u00A0money",
	"Do a good deed – help us with a coin 🙏",
	"Donate",
	"DONATE",
	"Choose a convenient payment method",
	"By a card",
	"Any bank cards",
	"Other",
	"Contact us on Telegram",
	"Click to copy address",
	"❤️Support⚡",
	"About the game",
	"by EVERMEDIA PROJECT",
	"Conquer space in a mobile runner for Android!",
	"Download",
	"LICENSES AND AGREEMENTS",
	"Copyrights and other aspects",
	"ABOUT THE GAME",
	"Creation history, gameplay, etc.",
	"Development of the game began on January 23, 2022, on a quiet winter evening. By the summer of that year, several alpha builds had been released, and the first testers appeared.\u2048\u2048By the end of the year, the game went into beta, and the speed of development increased greatly, more and more attention was paid to the comfort of the game process.\u2048\u2048The last beta version was released in May 2023, and on June 24 of the same year The game was released on four platforms."//currently 60
];

const translationsRU = [
	"Главная",
	"Проекты",
	"Дизайн",
	"immorrtalz",
	"Когда ",
	"дизайн\u00A0–",
	"приложение\u00A0–",
	"не просто ",
	"картинки",
	"код",
	"Прочувствуй этот мир с нами!",
	"Погрузиться",
	"ПРОЕКТЫ",
	"Приложения и игры для ПК и смартфонов",
	"Современный минималистичный аудиоплеер",
	"Мобильный раннер в космическом сеттинге",
	"Хоррор-выживание в лаборатории",
	"Скоро... или не скоро...",
	"ДИЗАЙН",
	"Эстетичный и доступный ПРЕМИУМ дизайн*",
	"Баннер",
	"Форумный/рекламный и др.",
	"Аватарка",
	"Для любого профиля",
	"Лендинг",
	"Макет небольшого сайта",
	"Макет интерфейса приложения",
	"ЯЗЫК",
	"ССЫЛКИ",
	"* Заказать дизайн",
	"СОЦСЕТИ",
	"НЕ НАЙДЕНО",
	"Контент, который вы искали, не найден...",
	"На главную",
	"все права защищены",
	"Политика конфид-ти",
	"Условия испол-я",
	"Поддержи",
	"семпая",
	"проект",
	"денюжкой",
	"Сделай доброе дело – помоги нам копеечкой 🙏",
	"Пожертвовать",
	"ПОЖЕРТВОВАТЬ",
	"Выбери удобный метод оплаты",
	"Картой",
	"Любые банковские карты",
	"Другое",
	"Напиши в Telegram",
	"Нажми, чтобы скопировать адрес",
	"❤️Поддержать⚡",
	"Об игре",
	"EVERMEDIA PROJECT",
	"Покори космос в мобильном раннере для Android!",
	"Скачать",
	"ЛИЦЕНЗИИ И СОГЛАШЕНИЯ",
	"Авторские права и иные аспекты",
	"ОБ ИГРЕ",
	"История создания, геймплей и прочее",
	"Разработка игры началась 23 января 2022 года, в тихий зимний вечер. К лету того же года было выпущено несколько альфа-сборок, появились первые тестеры.<br><br>К концу года игра вышла в бету, и скорость разработки сильно увеличилась, всё больше внимания уделялось на комфортность процесса игры.<br><br>В мае 2023 вышла последняя бета-версия, а 24 июня того же года состоялся релиз игры на четырёх площадках."
];

const translatableElms = document.querySelectorAll('[data-translationid]');

function changeTranslation(langId)
{
	localStorage.setItem('langId', langId.toString());

	for (var i = 0; i < translatableElms.length; i++)
	{
		if (langId == 0) translatableElms[i].textContent = translationsEN[translatableElms[i].dataset.translationid];
		else translatableElms[i].textContent = translationsRU[translatableElms[i].dataset.translationid];
	}
}