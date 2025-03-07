---
title: 'В этом выпуске мы поговорим о релизах браузеров, выходе TypeScript 5.5, React Compiler, антипаттернах менеджмента для CTO, 10 годах Vue.js и подготовке многоформатных JS-модулей.'
soundcloudLink: 'https://soundcloud.com/csssr/typescript-55-safari-18-beta-chrome-126-firefox-127-antipatterny-dlya-cto-state-of-js-2023'
date: '2024-06-25T00:00:00.000Z'
episodeNumber: 257
tag: 'news'
author: 'Ислам Виндижев'
---

Всем привет, это «Новости 512» от CSSSR. В этом выпуске мы поговорим о релизах браузеров, выходе TypeScript 5.5, React Compiler, антипаттернах менеджмента для CTO, 10 годах Vue.js и подготовке многоформатных JS-модулей. 

<ParagraphWithImage imageName="laptopNews" >
  ### Интересные публикации

Совсем недавно я говорил о React Compiler. Конечно же, уже нашлись энтузиасты, которые захотели попробовать его первыми. Надя Макаревич (Nadia Makarevich) [попробовала](https://www.developerway.com/posts/i-tried-react-compiler) его с canary-версией Next.js. Она рассказывает про саму фичу, рассматривает разные кейсы и проверяет, насколько правдивы обещания на счёт того, что мы сможем забыть про ручную мемоизацию. Как итог, Надя заключила, что из коробки он устранит два ненужных ре-рендера из десяти. Тем не менее она считает, что с дополнительными изменениями в коде он раскроется лучше, хотя адаптировать его просто и прямолинейно пока не получится. В общем, есть куда расти. Посмотрим, каким он будет в конечном итоге.
</ParagraphWithImage>

А нужен ли React Compiler вообще? Майк Джонсон (Mike Johnson), как закоренелый пользователь MobX, [говорит](https://www.mikejohnson.dev/posts/2024/06/mobx-react-compiler) о том, что, возможно, и не нужен. На самом деле это ответ посту Нади: он расширяет её пример при помощи MobX и экспериментирует, используя MobX совместно с компилятором. Он говорит о том, что MobX тоже умеет мемоизировать компоненты и компилятор не очень сильно повлиял на приложение. В общем, я не эксперт по MobX, но у меня сложилось впечатление, что он просто немного топит за него. Тем не менее эта точка зрения имеет право на жизнь, а на статью определённо стоит взглянуть. 

Следующий материал пригодится техническим лидерам и CTO. CTO с многолетним опытом Уилл Ларсон (Will Larson) [поделился своим опытом](https://review.firstround.com/unexpected-anti-patterns-for-engineering-leaders-lessons-from-stripe-uber-carta/) в подкасте In Depth. Это выжимка из эпизода. Уилл рассказал о том, что выявил 3 неожиданных антипаттерна, которые считаются хорошими практиками. В интервью он рассказал о том, почему не всегда стоит уходить от микроменеджмента, почему не всегда стоит прекращать ориентироваться на, казалось бы, сломанные метрики и как можно выстрелить себе в ногу, полностью ограждая команду от окружающих проблем и среды для фокуса. По каждому пункту он приводит пример того, как стоило бы поступить в той или иной ситуации. Достаточно интересный взгляд.

Давайте вернёмся к техническим историям. Джеймс Синклер (James Sinclair) в своём блоге опубликовал [большой гайд](https://jrsinclair.com/articles/2024/how-to-compose-functions-that-take-multiple-parameters-epic-guide/) по композиции JavaScript-функций с несколькими аргументами. Строго говоря, композиция работает только с унарными функциями. Что делать, если это не так? Джеймс предлагает несколько обходных путей. Он рассматривает составные типы данных, каррирование и частичное применение, также он касается использования утилит `ap()` и `flatMap()`. Для каждого случая он приводит пример применения и рассказывает, когда это может быть полезно.

Джон Райли (John Reilly) написал [статью](https://johnnyreilly.com/dual-publishing-esm-cjs-modules-with-tsup-and-are-the-types-wrong) о том, как публиковать модули, которые одновременно поддерживают форматы ESM и CommonJS при помощи библиотеки `tsup` и инструмента `Are the Types Wrong?`. Примерчик довольно небольшой. Сначала он генерирует все необходимые файлы при помощи `tsup`, а потом проверяет package.json `Are the Types Wrong?` на предмет того, что оба формата корректно поддерживаются. Такое решение не покрывает абсолютно все кейсы, но стоит взглянуть, как раз в вашем случае может пригодиться. В описании выпуска будет ссылка на статью и оба инструмента.

Следующая [статья](https://www.telerik.com/blogs/angular-directives-vs-vue-directives) посвящена сравнению директив в Angular и Vue. Кристиан Нуамба (Christian Nwamba) рассказал о разных видах директив — структурных, атрибутных и компонентных — и показал, как они работают в обоих фреймворках. Сравнение довольно простенькое, но есть примеры приложений с директивами — думаю, будет интересно тем, кто хочет перейти с одного фреймворка на другой или быть мастером всех фреймворков сразу.

Несколько раз я касался Node.js Test Runner, а разные авторы уже пробовали его на своих мини-проектах. Появился [официальный гайд от Node.js](https://nodejs.org/en/learn/test-runner/using-test-runner). Он небольшой, покрывает базовую конфигурацию и распространённые кейсы применения. Если вы любите официальные гайды, добро пожаловать по ссылке.

Теперь немного из YouTube-пространства. Первое видео — от Эвана Ю. Он рефлексирует о [10 годах Vue.js](https://www.youtube.com/watch?v=OmrwRrZitv4), рассказывает о главных сложностях и направлении, в котором фреймворк будет двигаться дальше.

Второе [видео](https://www.youtube.com/watch?v=PxIBWjiv3og&ab_channel=Effect%7CTypeScriptatScale) — об [Effect](https://github.com/Effect-TS). Это, можно сказать, экосистема библиотек для написания поддерживаемого и масштабируемого TypeScript-кода. Покрывает много кейсов, обратите внимание.

Про Container Query писали довольно много, а сама фича стала популярной. Джеф Грэхем (Geoff Graham) на CSS-Tricks опубликовал [обширный гайд](https://css-tricks.com/css-container-queries/) по фиче. Он рассказывает о том, как она вообще появилась, как её применять, и, конечно, приводит примеры. Помимо этого, в гайде есть нюансы работы Container Query и дополнительные ссылки на статьи и обучающие материалы.

Ещё немного про CSS. Это [подборка материалов](https://www.smashingmagazine.com/2024/06/css-tips-and-techniques/) с полезными советами и приёмами CSS. Стоит пробежаться — возможно, вы найдёте для себя что-то новенькое.

В конце рубрики небольшая [заметка](https://habr.com/ru/articles/823102/) об автоматизации некоторых процессов на производстве. Вернее, это не автоматизация, а скорее небольшая CRM, но тем не менее. Автор Павел написал на Хабре заметку о том, как начал самостоятельно осваивать программирование и в итоге облегчил себе работу, написав для этого веб-приложение. Этот пост не про устройство проекта под капотом, а про процессы, которые «оцифровали». Тем не менее заметка интересная, если понравится — похвалите автора голосом.

<ParagraphWithImage imageName="manWithLaptop">
  ### Новости релизов

Вышел Chrome 126. В этом релизе View Transition API добавили возможность плавного перехода между разными документами, снова включили CloseWatcher API, который помогает отслеживать запросы к закрытию диалогов и поповеров. Были и другие изменения, больше подробностей — в обзорах [Chrome](https://developer.chrome.com/blog/new-in-chrome-126) и [Devtools](https://developer.chrome.com/blog/new-in-devtools-126) от Google.
</ParagraphWithImage>

У [Firefox 127](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/127) релиз тоже относительно небольшой. Для объекта `Set` добавили поддержку ряда методов для работы с множествами. Также была добавлена полная поддержка Clipboard API. Больше подробностей — по ссылке в описании.

На WWDC 2024 показали [бету Safari 18](https://www.webkit.org/blog/15443/news-from-wwdc24-webkit-in-safari-18-beta/). Теперь браузер поддерживает Style Queries для работы в связке с кастомными свойствами: получается, что можно применить определённые стили при определённом значении свойства. Появилась поддержка View Transitions API и относительных цветов. Анимировали свойство `display`, добавили свойство `content-visibility` и ключевое слово `safe` для флексов. Для JS особо ничего не было: была проделана большая работа для веб-расширений и представлена поддержка WebXR. WebXR — это API, который позволяет принести в веб дополненную и виртуальную реальность. Это большой шаг в сторону разработки AR/VR-решений на базе веба, например для тех же Apple Vision Pro. Больше подробностей — в блоге WebKit.

В этом выпуске я отмечу выход браузера [Vivaldi 6.8](https://vivaldi.com/ru/blog/desktop/desktop-releases/vivaldi-on-desktop-6-8/). Обычно я про него не рассказываю, потому что под капотом, грубо говоря, Chromium и большого смысла нет. Однако, с точки зрения пользователей, там много интересных фич и возможностей кастомизации. В этом релизе вышло обновление 2.0 их встроенного почтового клиента, что вообще звучит удобно. В самом Vivaldi много и других фишек, так что рекомендую потрогать — возможно, он поможет вам прокачать своё рабочее окружение.

Вышел [TypeScript 5.5](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5/). Мы уже немного касались его на выходе беты. Кажется, это самый большой релиз TS за несколько лет с интересными фичами. Предикаты для выведенных типов позволят проще работать с данными, типы можно будет импортировать в JSDoc через комменты, добавили изолированные декларации для библиотек отдельными файлами и несколько других фич. Кстати, ещё TypeScript с этой версии научится базово проверять синтаксис регулярных выражений (раньше не умел совсем). Также я приложу ссылку на получасовой подробный [разбор](https://www.youtube.com/watch?v=4XgIvE5SH4Y) релиза.

Вышел [htmx 2.0](https://htmx.org/posts/2024-06-17-htmx-2-0-0-is-released/). Здесь прекратили поддержку Internet Explorer, сделали ряд инфраструктурных изменений, добавили поддержку подключения как модулей разных форматов, а расширения вынесли в отдельный репозиторий. При этом основная функциональность и API остались без изменений.

Также в этом выпуске я отмечу релизы [ESLint 9.5](https://eslint.org/blog/2024/06/eslint-v9.5.0-released/), [Electron 31](https://www.electronjs.org/blog/electron-31-0), [Rust 1.79](https://blog.rust-lang.org/2024/06/13/Rust-1.79.0.html) и [pnpm 9.4.0](https://github.com/pnpm/pnpm/releases/tag/v9.4.0).

<ParagraphWithImage imageName="laptopNews" >
    ### Другие новости

Доступны результаты опроса [State of JS 2023](https://2023.stateofjs.com/en-US). В этом году Vite стал самой адаптируемой и любимой технологией разработчиков и, пожалуй, заслуженно: он быстрее, проще конфигурируется, проще адаптируется к уже существующим проектам. «Большая тройка» фреймворков ожидаемо не изменилась: React, Angular и Vue — в этом порядке. Следом за ними Svelte, уже который год. Astro вызывает большой интерес — многие как минимум пробуют с ним поработать. Среди мета-фреймворков впереди всех Next.js и Nuxt.js, а Gatsby сдал свои позиции. Среди инструментов для тестирования старые знакомые, такие как Jest и Mocha, всё ещё доминируют, при этом за два года значительно возрос интерес к Vitest (с 2 до 34%). Билдят по-прежнему Webpack, но его стремительно нагоняет Vite. Самой популярной фичей самого JS стало `nullish coalescing`, а самой большой проблемой до сих пор считается поддержка браузерами разных API. В общем, год был интересный, очень советую заглянуть в раздел `Other tools` и в целом более подробно ознакомиться с результатами опроса.
</ParagraphWithImage>

Вышла версия 1.0 сервиса [Solo](https://soloist.ai/) от Mozilla. Это сервис, который позволяет сгенерировать сайт с использованием машинного обучения. Пока сервис предлагает выбрать тематику сайта, а потом предлагает в визуальном режиме его подправить. Затем его можно перенести на свой хостинг и поправить как хочется. Вряд ли это конец эпохи разработчиков, но следить за развитием таких сервисов всегда интересно.

И в конце выпуска [статистика](https://www.slashdata.co/post/59-of-developers-use-ai-tools-25-2m-javascript-users) о разработчиках от SlashData: они дают некоторую оценку сообществам разработчиков по количеству участников. Так, они оценивают в 25 миллионов количество JS-разработчиков, Python и Java в 18 и 17.5 миллионов, следом за ними идут C++ и C# с довольно большим отрывом. Ещё один интересный поинт связан с технологиями ИИ. Разработчики стали чаще задавать чат-ботам вопросы по программированию (42%), ещё часть генерирует ассеты и просто так или иначе использует ИИ в работе.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
