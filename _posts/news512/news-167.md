---
title: 'В этом выпуске: Chrome 91 Beta, postcss-eazy-z, tree-shaking библиотеки, полный гайд по кастомным CSS-свойствам и неполный гайд по Cumulative Layout Shift, функции плавности в CSS и Web Engines Hackfest 2021.'
soundcloudLink: 'https://soundcloud.com/csssr/chrome-91-beta-postcss-eazy-z-tree-shakeable-biblioteki-gaydy-po-kastomnym-css-svoystvam-i-cls'
date: '2021-04-30T00:00:00.000Z'
episodeNumber: 167
tag: 'news'
author: 'Ислам Виндижев'
---

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

Первый материал — [сборник рецептов для работы с Puppeteer](https://addyosmani.com/blog/puppeteer-recipes/) от Эдди Османи. Сборнику уже примерно год, но, насколько я понял, он обновляется и пополняется. В нём есть решения таких задач, как извлечение разных метрик, эмуляция медленного интернета или процессора, генерация отчета Lighthouse и многое другое. Если вы работаете с Puppeteer и автоматизацией тестирования — обязательно загляните.
</ParagraphWithImage>

На debugbear появилась статья, каких много не бывает, — [про DevTools и анализ производительности](https://www.debugbear.com/blog/devtools-performance). Я говорю, что их не бывает много, потому что в каждой находится что-то новое. Здесь и про запись профиля производительности, работу процессора, FPS, Web Vitals (куда же без них), про сбор дополнительной информации о рендере и не только. В этой статье есть еще и примеры интерпретации показателей, которые вы получите. Заглянуть в любом случае будет не лишним.

Минко Гечев (Minko Gechev) в блоге Angular написал статью [об изменении дефолтного пайплайна рендеринга ViewEngine](https://blog.angular.io/upcoming-improvements-to-angular-library-distribution-76c02f782aa4). Теперь по умолчанию будет использоваться Ivy. Для разработчиков переход должен стать незаметным, и View Engine будет опционально доступен при необходимости, но получит статус устаревшего. Отмечу, что по статистике Ivy уже пользуется больший процент разработчиков.

Франсуа Эндрикс (François Hendriks) написал статью о том, [как создать библиотеку, которая поддается тришейкингу](https://blog.theodo.com/2021/04/library-tree-shaking/). Если коротко, он выделил несколько принципов: стоит протестировать библиотеку на тришейкинг в известной среде с известным приложением; использовать ES-модули; разделить библиотеку на подмодули и следить за деревом модулей; а также использовать последнюю версию бандлера, который выполняет тришейкин. Франсуа раскрывает каждый из пунктов подробно.

На css-tricks Крис Койер (Chris Coyier) написал большой [гайд по кастомным CSS-свойствам](https://css-tricks.com/a-complete-guide-to-custom-properties/), или, как вы можете их знать, CSS-переменным. Гайд получился большой и, кажется, достоин звания «Complete guide». Крис напоминает, что фича позволяет использовать принцип Don’t repeat yourself и очень полезна для создания цветовых тем. Он начинает с основ и простых кейсов и постепенно переходит к сложным и продвинутым использованиям кастомных свойств. В статье много примеров и хорошее оглавление, так что можно легко обратиться к конкретной теме.

Если предыдущий гайд был Complete, то этот озаглавлен как Almost complete. Его написала Джесс Пек (Jess Peck), а посвящен он [Cumulative Layout Shift](https://jessbpeck.com/posts/completecls/). Джесс разбирает, как возникает это явление, как измерить метрику и в каких случаях чаще всего возникает сдвиг. Конечно же, она делится и советами по борьбе с проблемой.

Закрывает рубрику Адриан Беце(Adrian Bece) на SmashingMagazine со своей статьей [о функциях плавности анимации](https://www.smashingmagazine.com/2021/04/easing-functions-css-animations-transitions/). Существует 3 основных вида функций, которые применяются в CSS: линейная, ступенчатая и кривая Безье. Автор показывает, как работает каждый тип и как можно кастомизировать функции плавности.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

Наш коллега Никита Голубов написал [PostCSS-плагин для организации z-индексов](https://github.com/CSSSR/postcss-easy-z). Основная идея — использовать для z-индексов переменные, связанные друг с другом через calc. Это упрощает построение иерархии z-индексов и добавляет семантику, что помогает быстрее разобраться в индексах. Больше никаких магических чисел. Попробуйте, возможно он пригодится вам на проекте.
</ParagraphWithImage>

Пока мы ждем других крупных релизов, можно посмотреть и на [бету Chrome 91](https://blog.chromium.org/2021/04/chrome-91-handwriting-recognition-webxr.html). В бете планируется внедрить новую директиву @counter-style для списков, метатег battery-savings для экономии заряда, V8 планируется обновить до версии 9.1, также в планах поддержка ES-модулей для сервис-воркеров.

Сегодня поговорим еще и о браузерах, которые не часто светятся в инфополе. Состоялся релиз браузера [Vivaldi 3.8](https://vivaldi.com/blog/vivaldi-crumbles-cookie-dialogs-raises-privacy/). В этом выпуске отключили FLoC (напомню, это новый способ показа рекламы без отслеживания конкретного пользователя), появился блокировщик GDPR-панелей, были добавлены UI-улучшения. И в целом браузер интересный, многим он нравится за невероятную кастомизируемость и приверженность идеалам приватности. Дополнительно я приложу статью о том, [как Vivaldi выживает на рынке, развивается и зарабатывает](https://vc.ru/story/227125-zachem-delat-novyy-brauzer-i-kak-borotsya-s-chrome-kogda-zavisish-ot-ego-dvizhka-intervyu-s-sozdatelem-opera-i-vivaldi).

Другой браузер, о котором не каждый день услышишь — Palemoon. Это браузер, который ответвляется от Firefox. Он сохранил классический интерфейс, нацелен на эффективность работы и использования оперативки. Также есть фокус на кастомизируемость. В [релизе 29.2](https://forum.palemoon.org/viewtopic.php?t=26690&p=213782#p213782) убрали поддержку расширений Firefox, которые не были специально адаптированы под Palemoon.

Еще одно приложение на днях попалось мне на глаза. Это облачный [браузер Mighty](https://www.mightyapp.com/), который позиционирует себя как новый браузер, который потребляет в 10 раз меньше памяти, чем Chrome. Механизм работы, похоже, как у облачного гейминга. Можно запросить доступ и поучаствовать закрытой альфе (или бете, не совсем понятно).

Менеджер пакетов для PHP Composer [обновили](https://laravel-news.com/composer-security-update-cve-2021-29472) для устранения уязвимости. Composer оказался потенциально подвержен атакам при помощи инъекции команд. Команда разработки настоятельно рекомендует обновиться до версии 2.0.13 или 1.10.22.

Следующая новость — для любителей Linux. Вышла [Fedora 34](https://fedoramagazine.org/announcing-fedora-34/). Были обновлены ключевые пакеты и языки программирования, например, в 34 версии есть Ruby 3 и Go 1.16. Plasma теперь по умолчанию использует Wayland вместо X11. Еще одна крутая фича — прозрачная компрессия BTRFS: если коротко — пространство на диске будет использоваться более эффективно.

Не совсем релиз, но инструмент. Называется он [nessie](https://github.com/halvardssm/deno-nessie) — это вдохновленная Laravel библиотека миграций, которая работает с Deno. На данный момент она поддерживает PostgreSQL, MySQL и SQLite.

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

Пандемия отменила практически все офлайн-события. Тем не менее, в каких-то случаях это плюс. В этом году фестиваль [Web Engines Hackfest](https://webengineshackfest.org/2021/) пройдет онлайн. Раньше попасть на него можно было только по приглашению или через подачу заявки. Это мероприятие, на котором собираются все представители веба как платформы: разработчики движков, сторона тестирования, разработчики стандартов. Если вас интересуют браузеры и стандартизация веба — обязательно загляните. Мероприятие будет проходить с 3 до 11 мая.
</ParagraphWithImage>

Относительно недавно была статья об использовании графических процессоров для работы с графикой в браузере и использовании вычислительных ресурсов GPU. Так вот, появился [эксплейнер](https://gpuweb.github.io/gpuweb/explainer/) этого нового предложенного API. В целом он схож с WebGL, но, по идее, должен иметь прямой доступ к GPU и его продвинутым фичам.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
