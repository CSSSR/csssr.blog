---
title: 'В этом выпуске: Chrome 90, Deno 1.9, инъекции кода в JavaScript и анализ производительности JS, миграция DevTools на TypeScript, обзор относительно новых сборщиков, верстка писем, pnpm 6 и ESLint 7.24.0.'
soundcloudLink: 'https://soundcloud.com/csssr/chrome-90-deno-19-analiz-proizvoditelnosti-js-sborshchiki-verstka-pisem-pnpm-6-eslint-7240'
date: '2021-04-16T00:00:00.000Z'
episodeNumber: 163
tag: 'news'
author: 'Ислам Виндижев'
---

  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

Лиран Тал (Liran Tal) в своём блоге написал статью о том, [как избежать инъекций кода в JavaScript](https://snyk.io/blog/5-ways-to-prevent-code-injection-in-javascript-and-node-js/). В общей сложности он даёт 5 рекомендаций. Стоит избегать использования eval(), setTimeout() и setInterval(), также рекомендуется не использовать конструктор new Function(). Помимо этого стоит избегать сериализации кода в JS. И напротив, Лиран рекомендует использовать линтер безопасности Node.js и статический анализатор кода для поиска таких проблем.
</ParagraphWithImage>

Хью Хаворт (Hugh Haworth) на css-tricks опубликовал [статью-сравнение разных относительно новых сборщиков](https://css-tricks.com/comparing-the-new-generation-of-build-tools/): esbuild, Snowpack, Vite и wmr. Не могу сказать, что это именно сравнение, скорее, обзор. Потому что те же Snowpack и Vite используют esbuild под капотом для сборки. Обзор получился подробный и обширный, в конце раздела с каждым сборщиком есть таблица фич, а в конце статьи сводная таблица со сравнением фич всех сборщиков.

Тим ван дер Липпе (Tim van der Lippe) написал статью о том, [как DevTools мигрировали на TypeScript](https://developer.chrome.com/blog/migrating-to-typescript/). С ростом кодовой базы пришлось сделать непростой выбор между улучшением Closure Compiler и внедрением TypeScript. Выбрали последнее. Это позволило улучшить проверку типов и начать пользоваться такими фичами, как интерфейсы. Тим описывает сам процесс миграции и к чему это привело.

Продолжаем тему TypeScript. Microsoft опубликовали небольшой [курс по TypeScript](https://docs.microsoft.com/en-us/learn/paths/build-javascript-applications-typescript/). Курс бесплатный, для прохождения нужен Microsoft-аккаунт. В курсе нет продвинутых фич, но он хорошо подходит для знакомства. На сайте время прохождения курса оценено в 6 часов.

Филип Уолтон (Philip Walton) на web.dev написал статью [о дебаге Web Vitals в «боевых» условиях](https://web.dev/debug-web-vitals-in-the-field/). В тексте описывается, как получать информацию по метрикам из браузера пользователя для их дебага. Для сбора данных используется библиотека web-vitals, приведены примеры использования API для получения данных по конкретным метрикам Web Vitals.

Следующий материал продолжает тему дебага, но в нём речь пойдет про производительность JS. Крейг Баклер (Craig Buckler) написал статью, в которой рассказывает о большом количестве [инструментов и техник анализа производительности JavaScript](https://blog.asayer.io/the-ultimate-guide-to-fixing-javascript-performance-problems-in-browser-devtools): от DevTools и Lighthouse до анализа потребления памяти и загрузки процессора. Получилось неплохо, возможно, в этой статье вы найдете немало нового для дебага производительности JS.

Завершат рубрику 2 материала со SmashingMagazine. Первый — от Виталия Фридмана — посвящен [верстке писем](https://www.smashingmagazine.com/2021/04/complete-guide-html-email-templates-tools/). Автор собрал обширный список инструментов, генераторов, фреймворков, шаблонов и хороших практик. Второй написал Дэвен Ратхор (Deven Rathore). Это [гайд по созданию приложения для видеостриминга](https://www.smashingmagazine.com/2021/04/building-video-streaming-app-nuxtjs-node-express/) с использованием Nuxt.js, Node.js и Express.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

Релиз [Chrome 90](https://developer.chrome.com/blog/new-in-chrome-90/) первый в этом выпуске. Что нового: overflow:clip, декларативный Shadow DOM, https теперь используется по умолчанию. Кроме того, Feature Policy API переименовали в Permissions Policy, соответствующий заголовок тоже. DevTools традиционно с обновлениями: выкатились новые инструменты отладки флексов, таб issues обновился, в панели Cookies появилась колонка SameParty, также улучшили производительность. И это еще не все улучшения. Также отмечу, что релиз 90 версии Chrome был слегка задержан, скорее всего, из-за двух уязвимостей нулевого дня и выхода обновления 89 версии с их устранением.
</ParagraphWithImage>

Deno отметился релизом [1.9](https://deno.com/blog/v1.9). Была добавлена нативная поддержка HTTP/2 и Blob/Data URL для fetch. Появился метод Deno.memoryUsage(). Также в очередной раз прокачали LSP.

Далее релиз пакетного менеджера [pnpm](https://github.com/pnpm/pnpm/releases/tag/v6.0.0). Это пакетный менеджер, который, по заявлению команды, в 2 раза быстрее своих конкурентов и позволяет не дублировать зависимости за счет использования ссылок. Новая 6 версия не поддерживает Node.js 10, была добавлена новая команда pnpm fetch. Посмотрите, возможно этот пакетный менеджер подойдет вашему проекту. Кстати, пишут, что он хорош для монорепозиториев.

Вышел [ESLint 7.24.0](https://eslint.org/blog/2021/04/eslint-v7.24.0-released). В новой версии у правил no-implicit-coercion и no-multi-assign появились новые опции. Также в no-unused-vars поправили один баг и подвезли пачку фиксов в документацию.

Также отмечу релиз [Laravel 8.37](https://laravel-news.com/laravel-anonymous-migrations) с анонимными миграциями и релиз [nginx 1.19.10](http://nginx.org/en/CHANGES).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

Помните историю о конфликте Amazon и Elasticsearch? Коротко напомню: Elasticsearch устали от того, что на их open-source продукте зарабатывают просто так, и перевели свой одноименный продукт на несвободную лицензию. Amazon тогда грозился форкнуть Elasticsearch и сделать свой продукт. Это случилось. Гигант представил [OpenSearch](https://aws.amazon.com/blogs/opensource/introducing-opensearch/) — тот самый форк Elasticsearch. Вышло примерно как я и предполагал — просто сделали свое. И даже слегка пожурили Elasticsearch за жадность, сказав, что OpenSearch будет открытым, распространяться под свободной лицензией и так далее. К работе над проектом уже присоединились, например, Red Hat и Logz.io. В будущем сервис Amazon Elasticsearch Service будет переименован в Amazon OpenSearch Service. В общем, Amazon зарабатывать не перестанет.
</ParagraphWithImage>

Продолжается и, я надеюсь, заканчивается скандал вокруг возвращения Столлмана в FSF. На сайте фонда были опубликованы заявления [от лица фонда](https://www.fsf.org/news/statement-of-fsf-board-on-election-of-richard-stallman) и [самого Столлмана](https://www.fsf.org/news/rms-addresses-the-free-software-community). В первом объясняется, что возвращение Столлмана — взвешенный шаг, и его экспертиза очень нужна фонду, при этом он работает как волонтер. Во втором заявлении высказался сам Столлман и объяснил, что вызвало ряд непониманий его слов и действий в сообществе. Кроме того, он призвал направить критику в его адрес, а не в адрес фонда. Посмотрим, поможет ли это прекратить бойкоты и возобновить сотрудничество с разными организациями.

[Vue 3 отказывается от поддержки IE11](https://github.com/vuejs/rfcs/blob/ie11/active-rfcs/0000-vue3-ie11-support.md). Эван Ю опубликовал gist с объяснением,
почему поддержку решили не добавлять. Напомню, что поддержки IE11 не было, но её хотели добавить. В 2021 году к этому вопросу вернулись, рассмотрели все аргументы за и против и решили, что не нужно. Вместо этого решили добавить в Vue 2 совместимость с фичами Vue 3, что позволит комфортнее использовать Vue 2 тем, кому нужна поддержка IE11, и упростит миграцию на Vue 3 в будущем.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
