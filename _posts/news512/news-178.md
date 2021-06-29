---
title: 'В этом выпуске: ECMAScript 2021, TablesNG, тег <head>, WebAssembly для JavaScript-разработчиков, security-релизы Node.js июля, Microsoft Teams 2.0 и бета обновленных GitHub Issues.'
soundcloudLink: 'https://soundcloud.com/csssr/ecmascript-2021-tablesng-head-security-relizy-nodejs-obnovlenie-github-issues-ms-teams-20'
date: '2021-06-29T00:00:00.000Z'
episodeNumber: 178
tag: 'news'
author: 'Ислам Виндижев'
---

<ParagraphWithImage imageName="manWithLaptop">
  ### Интересные публикации

Стандарт языка [ECMAScript 2021](https://www.ecma-international.org/news/ecma-international-approves-new-standards-4/) был принят. В стандарт вошли следующие фичи: оператор логического присваивания, разделители чисел, String.prototype.replaceAll(), Promise.any(), WeakRef и FinalizationRegistry. Подробнее о фичах можно прочитать [в обзоре Алекса Андерсона (R. Alex Anderson)](https://ui.dev/es2021/). Хочу напомнить, что это только часть спецификации, также были приняты обновленные стандарты интернационализации и API для встраиваемых систем.
</ParagraphWithImage>

Еще одно нововведение в Chrome 91 — включение по умолчанию [TablesNG](https://developer.chrome.com/blog/tablesng/). Это переписанный модуль рендеринга таблиц. Новый модуль позволил исправить кучу багов таблиц, и работы продолжаются. Подробнее — в статье Юны Кравец (Una Kravets) и Алекса Тотика (Aleks Totic).

Следующий материал — от доктора Акселя. В своем блоге он рассказал о [пропозале](https://2ality.com/2021/06/error-cause.html), по которому опционально объект класса Error может ссылаться на ошибку, которая его вызвала. По идее это может упростить дебаггинг и сэкономить время разработчика.

Джош Бушеа (Josh Buchea) на GitHub собрал всё, что может находиться [внутри тега <head>](https://github.com/joshbuchea/HEAD). Он приводит необходимый минимум, рассказывает о ссылках, иконках, метаинформации, которые можно размещать внутри тега, упоминает специфичную для платформ и социальных сетей метаинформацию, а также делится ссылками на полезные материалы и документацию. Доступно и [на русском](https://github.com/Konfuze/HEAD).

Алексей Шепелев собрал [22 CSS-приема](https://betterprogramming.pub/22-css-tricks-that-can-make-you-a-layout-ninja-452847fba639), которыми должен владеть настоящий ниндзя разметки. Здесь и гриды, и флексы, и бэкграунд, и другие свойства. Наверняка многие из них вы знаете, но, возможно, найдёте для себя и что-то новое.

Адам Аргайл (Adam Argyle) на web.dev написал о том, [как можно создавать цветовые схемы на CSS](https://web.dev/building-a-color-scheme/). Он предлагает вычислять значения светлой и темной схемы исходя из базового цвета при помощи кастомных CSS-свойств. Адам приводит авторскую реализацию и призывает поделиться своей.

Новая статья Ахмада Шадида (Ahmad Shadeed) посвящена боли многих — [кастомным скроллбарам](https://ishadeed.com/article/custom-scrollbars-css/). Он рассказывает о возможностях кастомизации скроллбаров при помощи только CSS. Как всегда, статья сопровождена примерами.

Завершает рубрику [WebAssembly для JavaScript-разработчиков](https://pascalpares.appspot.ovh/webassembly-for-javascript-developers/) от Паскаля Пареза (Pascal Pares). Если вы ещё не попробовали работать с WebAssembly – самое время, как минимум, для расширения кругозора.

<ParagraphWithImage imageName="laptopNews" >
  ### Новости релизов

Был опубликован [анонс июльских security-релизов Node.js](https://nodejs.org/en/blog/vulnerability/july-2021-security-releases/). В версиях 14 и 16 будут устранены две уязвимости средней тяжести, в 12 — три средней тяжести и одна, которой был присвоен уровень опасности «высокий». Обновления будут доступны ориентировочно 1 июля.
</ParagraphWithImage>

За день до анонса вышла версия [Node.js 16.4.0](https://nodejs.org/en/blog/release/v16.4.0/). В ней была стабилизирована часть AsyncLocalStorage, также были обновлены npm и V8.

Пробежимся по браузерам. В [Firefox 89.0.2](https://www.mozilla.org/en-US/firefox/89.0.2/releasenotes/) подъехал небольшой фикс для Linux-версии. Tor обновился до версии [10.0.18](https://blog.torproject.org/new-release-tor-browser-10018). Также доступно [Safari Technology Preview 126](https://webkit.org/blog/11727/release-notes-for-safari-technology-preview-126-with-safari-15-features/) с фичами Safari 15.

Закроет рубрику Tailwind CSS релизом [версии 2.2](https://blog.tailwindcss.com/tailwindcss-2-2). Улучшена производительность, добавлена поддержка минификации и PostCSS-плагинов и другие фичи, многие из которых доступны только в режиме Just-in-Time.

<ParagraphWithImage imageName="laptopDialog">
  ### Другие новости

Microsoft и так уже достаточно громко заявил о себе на рынке командных мессенджеров и рабочих пространств. Останавливаться компания, кажется, не собирается. Том Арбатнот (Tom Arbuthnot) в своем блоге опубликовал заметку о том, [что может измениться в Microsoft Teams](https://tomtalks.blog/2021/06/microsoft-teams-2-0-will-use-half-the-memory-dropping-electron-for-edge-webview2/), а именно: переход с Electron на Edge WebView 2, отказ от Angular и переход на React, использование GraphQL Apollo. Если коротко, приложение Teams 2.0 может быть гораздо более производительным и потреблять меньше памяти. Серьезный камень в огород Slack, но пока не факт. Будем следить за развитием событий.
</ParagraphWithImage>

В блоге GitHub появился пост [об улучшенных Issues](https://github.com/features/issues). Выглядит как гибрид уже существующих досок, Issues и пул-реквестов, но пока неоднозначно: табличное представление, разбиение Issues на саб-таски и много других возможностей. Больше похоже на потенциально перегруженный интерфейс, но кто знает. Фича ещё недоступна, можно записаться на бету.

Не так давно мы рассказывали, что браузер Brave приступил к разработке своего поискового движка после покупки Cliqz. Идея в том, чтобы поисковик соблюдал принципы открытости и приватности пользователей. Публично доступна бета поискового движка Brave, также она есть по адресу [search.brave.com](https://brave.com/brave-search-beta/). Очень интересно, к чему приведет эта инициатива.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
