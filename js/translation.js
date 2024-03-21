$(window).on('load', function()
{
	langId = localStorage.getItem('langId');

	if (langId === null) langId = 0;
	else langId = parseInt(langId);

	changeTranslation(langId);
	headerTitleChange();
});

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
	"Terms & Conditions"//currently 36
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
	"Условия испол-я"
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