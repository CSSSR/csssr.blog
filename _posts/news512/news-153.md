---
title: 'В этом выпуске: вводный туториал по Rollup, CSS-in-JS в DevTools, тени и псевдоэлементы ::before/::after, Safari Technology Preview 121, Laravel 8.29 и отчет прозрачности от GitHub.'
soundcloudLink: 'https://soundcloud.com/csssr/ne-bandlom-edinym-css-in-js-v-devtools-tutorial-po-rollup-teni-psevdoelementy-before-i-after'
date: '2021-03-03T00:00:00.000Z'
episodeNumber: 153
tag: 'news'
author: 'Ислам Виндижев'
---

<Note>
  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)
</Note>

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

Нолан Лоусон (Nolan Lawson) в своем блоге рассказал [о некоторых характеристиках производительности JavaScript](https://nolanlawson.com/2021/02/23/javascript-performance-beyond-bundle-size/), за которыми стоит следить для улучшения UX. Кроме размера бандла важно обращать внимание на время парсинга, компиляции и исполнения кода, на объем потребляемой памяти и потребление энергии. Конечно же, Нолан рассказывает и о том, как измерить все эти показатели, а также приводит небольшие примеры.
</ParagraphWithImage>

Следующий материал — [о бандлере Rollup](https://www.sitepoint.com/rollup-javascript-bundler-introduction/). Если вы давно хотели попробовать другой бандлер или именно Rollup, то этот гайд очень даже подойдет. Крейг Баклер (Craig Buckler) написал туториал по Rollup, который покрывает установку и базовую настройку, создание конфигурации, использование плагинов, обработку нескольких бандлов и другие фичи.

В новом выпуске HTTP 203 Джейк Арчибальд (Jake Archibald) и Сурма (Surma) разбираются с [тасками в JS](https://www.youtube.com/watch?v=8eHInw9_U8k). Речь пойдет о планировании тасков в нашем любимом языке (я про JavaScript). Сурма отталкивается от доклада Джейка об Event Loop с JSConf.Asia и старается восполнить пробелы. Кстати, доклад тоже хороший, приложу ссылку.

Chrome DevTools теперь [поддерживают CSS-in-JS](https://developers.google.com/web/updates/2021/02/css-in-js). Об этом написал статью Алекс Руденко — разработчик из команды Chrome DevTools. Теперь CSS-in-JS можно  редактировать, для этого внутреннее представление стали преобразовывать в текст и добавили механизм, который передает изменения в стилях. Подробнее о фиче и реализации поддержки CSS-in-JS в DevTools — в статье Алекса.

Роб О'Лири (Rob O'Leary) на css-tricks написал статью [о тенях](https://css-tricks.com/getting-deep-into-shadows/). Она интересна тем, что Роб говорит и о физических основах теней, распределении света и о том, как это влияет на восприятие. Потом он переходит к вполне реальным эффектам, которые создаются при помощи теней. Например, эффекты выпуклости и вогнутости. Также он рассматривает влияние теней на доступность, производительность. Естественно, в статье есть и лучшие практики применения теней.

Уилл Бойд (Will Boyd) написал статью [о псевдоэлементах ::before и ::after](https://codersblock.com/blog/diving-into-the-before-and-after-pseudo-elements/). Он начинает с основ, а затем разбирает интересные кейсы: работу с кавычками, декоративные элементы, использование изображений в content. Получилось интересно, загляните, если интересуетесь нюансами CSS и ::before и ::after в частности.

Лия Веру (Lea Verou) в своем блоге рассказывает [о перегрузке функций](https://lea.verou.me/2021/02/mass-function-overloading-why-and-how/). Вообще, о перегрузке функций нечасто услышишь в JS-среде, потому что в JS нет перегрузки функций. Это когда методы или функции имеют одинаковое название, но разную сигнатуру — например, разное количество аргументов. Решение Лии не универсальное и его не вполне можно назвать перегрузкой. Но посмотреть можно. Для чего это может пригодиться и как это реализовала она — читайте в статье.

В заключение рубрики — статья [о текущем состоянии GDPR](https://www.smashingmagazine.com/2021/03/state-gdpr-2021-cookie-consent-designers-developers/). Напомню, речь идет о General Data Protection Regulation или, как сказали бы многие, плашке с куки. Дэнни Блюстоун (Danny Bluestone) на SmashingMagazine коротко рассказывает о том, как развивались требования GDPR, и каковы они сейчас. В статье есть 2 коротких списка: «что надо знать о GDPR дизайнеру» и «что надо знать о GDPR разработчику».

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

В [Safari Technology Preview 121](https://webkit.org/blog/11555/release-notes-for-safari-technology-preview-121/) поработали над GPU process, ускорили JSON.parse, добавили массивы с BigInt и экспериментальную поддержку приватных методов. Кроме того, в этой версии много улучшений и исправлений aspect-ratio и гридов, различные исправления медиа. Для WebAssembly добавили потоковую компиляцию и Bulk-memory operations, а Reference Types теперь работают по умолчанию.
</ParagraphWithImage>

Состоялся релиз [CakePHP 4.2.4](https://github.com/cakephp/cakephp/releases/tag/4.2.4). Была улучшена поддержка PHP 8, документация по API также была обновлена. DatabaseSession теперь использует запись из таблицы сессий при создании и удалении записей.

Вышла версия [Laravel 8.29](https://laravel-news.com/laravel-8-29-0). Продолжается развитие параллельного тестирования: был добавлен метод инициализации тестовых баз setUpTestDatabase() для разных параллельных тестов. Также был добавлен вспомогательный метод collect(), который позволяет преобразовывать ответы из JSON в коллекцию.

Не вполне связан с разработкой, но тоже довольно интересный релиз. Команда проекта Tor представила [OnionShare 2.3](https://blog.torproject.org/new-release-onionshare-23). Это утилита, которая позволяет безопасно и анонимно передавать и получать файлы. В этой версии появились вкладки и одноразовые приватные чаты без сохранения истории переписки.

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

GitHub опубликовал ежегодный [отчёт о блокировках за 2020 год](https://github.blog/2021-02-25-2020-transparency-report/). От государственных служб поступило 44 требования удаления контента, все из России. Забавно, но это были гисты с инструкциями по суициду, мошенничеством и пропагандой сект. GitHub также получил 303 запроса о раскрытии данных пользователей от судебных органов разных стран. Также поступило 2500 апелляций о необоснованных блокировках из Крыма, Ирана и других санкционных территорий. Приятно, что около 2100 из них удовлетворили и разблокировали пользователей.
</ParagraphWithImage>

[Хорошие новости](https://lists.ubuntu.com/archives/ubuntu-devel-announce/2021-February/001288.html) от Canonical и release-команды Ubuntu. Организация обещает повысить качество промежуточных LTS-версий, сдвигая дату релиза. В чем суть: раньше релиз выходил в срок любой ценой, даже в ущерб тестированию, теперь будет наоборот — сроки будут сдвигать для тестирования, если сборка не вполне стабильна. Хороший ход и отличные новости.

Финальный материал — об участии в разработке браузеров. Оказалось, что у всех мажорных браузеров есть свои гайды для контрибьюторов. Так что если посмотреть на браузер изнутри и поучаствовать в его разработке — ваша мечта, то она вполне реальна. Прикладываю ссылки на гайды для [WebKit](https://github.com/WebKit/WebKit/blob/main/Introduction.md), [Firefox](https://firefox-source-docs.mozilla.org/index.html) и [Chromium](https://chromium.googlesource.com/chromium/src/+/master/docs/contributing.md). Сразу скажу, что у Chromium он выглядит немного куцым, а вот у WebKit и Firefox они очень даже солидные.

<Note>
  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
</Note>
