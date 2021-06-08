---
title: 'В этом выпуске: Firefox 89, Safari 15 Beta, Jest 27, цикл статей о работе браузера, разработка базовых компонентов, обзорная статья о тестировании фронтенда и анонс WebExtensions Community Group.'
soundcloudLink: 'https://soundcloud.com/csssr/firefox-89-safari-15-beta-jest-27-rabota-brauzera-testirovanie-webextensions-community-group'
date: '2021-06-08T00:00:00.000Z'
episodeNumber: 174
tag: 'news'
author: 'Ислам Виндижев'
---

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

Первый материал выпуска — цикл статей о работе браузера от Ника Мостового. Пока есть 3 части: [о рендеринге страницы](https://xnim.me/blog/frontend-perf-for-newbies-part-1-critical-render-path), [методах оптимизации](https://xnim.me/blog/frontend-perf-improving-fmp-and-tti) и [об Event Loop и очереди рендеринга](https://xnim.me/blog/javascript-browser-event-loop-layout-paint-composite-call-stack).
</ParagraphWithImage>

Диего Хаз (Diego Haz) написал статью [о принципах разработки базовых компонентов](https://www.freecodecamp.org/news/introducing-the-single-element-pattern-dfbd2c295c5d/). «Базовый компонент» — это фундаментальная часть приложения, спроектированная по определенным правилам, что помогает легко масштабировать кодовую базу и не усложнять поддержку. Правила следующие: компонент рендерит один элемент, при возникновении исключения в компоненте всё приложение не должно упасть, рендерятся все HTML-атрибуты, применяются стили, передаваемые как пропсы, компонент добавляет все переданные ему обработчики событий. Неплохо, можно применять и с фреймворками, и при разработке библиотек компонентов.

На css-tricks появилась неплохая обзорная статья Евгения Клименченко о [тестировании фронтенда](https://css-tricks.com/front-end-testing-is-for-everyone/). Автор рассматривает unit-тесты, интеграционные и e2e-тесты, говорит о тестировании доступности, визуальных регрессий и производительности. Евгений делит тесты на категории по уровню — от низкого до высокого — и для каждого типа тестов приводит набор инструментов.

Том Макрайт (Tom MacWright) в своем блоге опубликовал статью «Vendor by default» — [о работе с зависимостями](https://macwright.com/2021/03/11/vendor-by-default.html). Суть в том, что код небольших зависимостей он копирует в свои проекты, разбирается в нём, рефакторит и удаляет ненужные части. Это позволяет лучше разобраться в библиотеке и её ограничениях. Иногда он отказывается от зависимости совсем и пишет нужный код сам или находит более подходящую альтернативу. Не уверен, что это подойдёт для работы на повседневных проектах, т.к., скорее, затруднит работу команды, но подход имеет право на жизнь.

Лин Кларк (Lin Clark) на Bytecode Alliance поделилась методами [оптимизации работы JavaScript-кода в WebAssembly-окружении](https://bytecodealliance.org/articles/making-javascript-run-fast-on-webassembly). Оптимизации — штука не универсальная, не на всех платформах можно применять любые: например, на iOS не работает JIT-компиляция. Участники Bytecode Alliance работают над решением на базе WebAssembly, которое позволит ускорить выполнение JS-кода. Планируется использовать снапшот памяти для уменьшения времени инициализации программы до нескольких микросекунд, а также AOT-компиляцию. Отмечается, что подход можно использовать не только с JavaScript, но и с Python, Ruby, Lua.

[JavaScript Notes & Reference](https://wesbos.com/javascript) — текстовые заметки и справочная информация по JavaScript, в основе которых лежит видеокурс Уэса Боса (Wes Bos). Уэс решил создать бесплатный текстовый ресурс с материалами курса и оформил его как отдельный раздел своего сайта.

Закрывает рубрику [progression.fyi](https://www.progression.fyi/). Это коллекция матриц компетенций, путей роста и карьерных путей разработчиков от разных компаний. Среди них можно увидеть Basecamp, BuzzFeed, CircleCI и много других компаний.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

Вышел [Firefox 89](https://hacks.mozilla.org/2021/06/looking-fine-with-firefox-89/). Впервые за несколько лет был значительно обновлён дизайн: обновлены табы, главное меню, спрятаны некоторые кнопки. В общем, теперь Firefox выглядит модно-молодёжно. В JavaScript включена поддержка top-level await. ArrayBuffer на 64-битных системах теперь может использовать до 8 Гб памяти вместо 2. Появилась поддержка forced-colors: active. Добавлены директивы line-gap-override, ascent-override и descent-override для @font-face, напомню, они помогают бороться с CLS. Добавлена реализация PerformanceEventTiming из Event Timing API для измерения времени обработки событий.
</ParagraphWithImage>

После презентации Apple появилась [бета Safari 15](https://developer.apple.com/documentation/safari-release-notes/safari-15-beta-release-notes). Наверное, самая большая новость — поддержка браузерных расширений на iPad и iOS. Также браузер подвергся редизайну: интерфейс стал лаконичнее, появились коллекции вкладок из коробки. Помимо этого появилась поддержка top-level await и ES модулей в сервис воркерах, гриды в веб-инспекторе. Была улучшена поддержка aspect-ratio(), продолжается работа над расширением поддержки WebAssembly, также был анонсирован ряд обновлений, касающихся приватности.

Доступен [Jest 27](https://jestjs.io/blog/2021/05/25/jest-27). Теперь тесты запускаются на 70% быстрее, а в интерактивном режиме можно поочередно переходить к упавшим тестам. Продолжается внедрение ES-модулей, была добавлена новая реализация мока таймеров. Был удален ряд устаревших методов и изменен ряд установок по умолчанию. Изменений много, больше подробностей — в обзоре релиза от Тима Секингера (Tim Seckinger).

Вышла версия [Node.js 16.3.0](https://nodejs.org/en/blog/release/v16.3.0/). Был добавлен алиас -C для флага --conditions, также была добавлена поддержка воркспейсов для npm install.

Фреймворк [Electron](https://www.electronjs.org/blog/electron-13-0) отметился релизом 13 мажорной версии. Версию Chrome обновили до 91, а V8 — до 9.1. Были добавлены новые методы API и выпущен ряд багфиксов.

Также отмечу релизы СУБД [Firebird 4.0](https://firebirdsql.org/en/news/firebird-4-0-is-released/) с поддержкой репликации и [ChromeOS 91](https://chromereleases.googleblog.com/2021/06/stable-channel-update-for-chrome-os.html).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

На сайте консорциума всемирной сети появился анонс начала работы [WebExtensions Community Group](https://www.w3.org/community/webextensions/2021/06/04/forming-the-wecg/). Инициировали создание группы Apple, Google, Microsoft и Mozilla. Основная цель — выработать общее видение для дальнейшей стандартизации браузерных расширений. Отмечается, что магазины расширений у каждого браузера останутся независимыми, в целях нет тотальной стандартизации каждого аспекта расширений. В целом это хорошая новость, посмотрим на работу группы в будущем.
</ParagraphWithImage>

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
