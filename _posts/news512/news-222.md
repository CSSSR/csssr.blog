---
title: 'В этом выпуске мы автоматизируем создание иконок при помощи Figma API, посмотрим на некоторые проблемы Node.js и окунёмся в проблему доступности с клавиатуры. Также мы коснёмся релиза TypeScript 4.9, поговорим про выход Rome 10 и Nuxt 3. В конце я позову вас поучаствовать в опросе State of JS 2022.'
soundcloudLink: 'https://soundcloud.com/csssr/ts-49-figma-api-i-svgr-nuxt-3-rome-10-state-of-js-2022'
date: '2022-11-29T00:00:00.000Z'
episodeNumber: 222
tag: 'news'
author: 'Ислам Виндижев'
---

Всем привет! Это «Новости 512» от CSSSR. В этом выпуске мы автоматизируем создание иконок при помощи Figma API, посмотрим на некоторые проблемы Node.js и окунёмся в проблему доступности с клавиатуры. Также мы коснёмся релиза TypeScript 4.9, поговорим про выход Rome 10 и Nuxt 3. В конце я позову вас поучаствовать в опросе State of JS 2022.

<ParagraphWithImage imageName="laptopNews" >
  ### Интересные публикации

У любого инструмента есть свои недостатки и способы с ними бороться. О некоторых [проблемах Node.js](https://blog.appsignal.com/2022/11/23/nodejs-architecture-pitfalls-to-avoid.html) написал Нейт Андерсон (Nate Anderson). Он рассматривает такие вопросы, как глобальные переменные и переменные окружения, какие проблемы они могут вызывать и как с ними бороться. Также он касается модулей в Node.js и того, почему слишком закрытые области видимости — это плохо. Для каждого случая он демонстрирует проблему, объясняет суть, а потом предлагает решение.
</ParagraphWithImage>

Вячеслав Конышев из нашей команды опубликовал свои первые статьи. С чем, кстати, я его поздравляю. В этой мини-серии из двух статей Слава создаёт React-компоненты иконок при помощи Figma API и SVGR. [Первая часть](https://dev.to/sm1t/sozdaiem-react-komponienty-ikonok-s-pomoshchiu-figma-api-i-svgr-chast-1-1j22) — знакомство с Figma API. Там же создаётся автоматизация для загрузки иконок из макетов. Во [второй части](https://dev.to/sm1t/sozdaiem-react-komponienty-ikonok-s-pomoshchiu-figma-api-i-svgr-chast-2-2h5c) svg-иконки преобразуются в готовые к использованию React-компоненты с помощью SVGR. В итоге создаётся компонент SvgIcon, который наделяет иконки общим API, потом он используется в SVGR Custom Template. Материал родился из практики, напрямую из рабочего кейса на проекте.

Vite продолжает набирать популярность, и всё больше людей используют его на своих проектах. Начать с ним работать — это половина дела. А вот [писать для него плагины](https://www.vuemastery.com/blog/building-a-plugin-with-vite/) — уже история поинтереснее. Следующий материал — гайд по созданию простеньких плагинов. В статье вы найдёте примеры создания трёх разных плагинов и пример публикации. Хорошая отправная точка для начала.

Иногда знания о структурах данных довольно сложно наложить на реальную фронтенд-разработку. Да ладно, иногда это просто пугает: куча теории, ничего непонятно. Если у вас были такие сложности, [следующая статья](https://profy.dev/article/javascript-data-structures) для вас. В ней Йоханнес Кетманн (Johannes Kettmann) старается преподнести структуры данных через примеры кода на React. Здесь вы увидите стек, очередь, Map и Set, простое дерево. Для каждой структуры есть описание и пример непосредственно на React.

Темани Афиф (Temani Afif) дописал ещё одну серию статей. О ней я тоже уже рассказывал: она посвящена сложным формам в CSS Grid. [В третьей части](https://css-tricks.com/css-grid-and-custom-shapes-part-3/) он продолжает усложнять формы и показывает классные примеры: проявление изображений из частичного превью в формах круга, треугольников и сложной мозаики. Внутри, как и в прошлых частях, готовые примеры и объяснение математики реализации этих примеров.

Завершит сегодняшнюю рубрику статья по доступности. Она касается работы с сайтами при помощи клавиатуры. Кристиан Диаз (Cristian Díaz) в SmashingMagazine опубликовал статью в двух частях. [В первой части](https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-html-css-part1/) он рассматривает HTML и CSS: различные атрибуты и свойства, некоторые паттерны реализации разметки с учётом доступности. [Вторая часть](https://www.smashingmagazine.com/2022/11/guide-keyboard-accessibility-javascript-part2/) построена аналогично, только целиком посвящена JavaScript. Получилось содержательно, рекомендую.

<ParagraphWithImage imageName="manWithLaptop">
  ### Новости релизов

Релиз TypeScript вышел по плану, 15-го ноября. [В новой версии 4.9](https://devblogs.microsoft.com/typescript/announcing-typescript-4-9/) появился оператор satisfies: с ним можно валидировать соответствие типа выражения без изменения типа результирующего. Оператор in стал полезнее при сокращении типов с отсутствующими свойствами. Напомню, что при сравнении с NaN TS теперь будет выводить ошибку и предлагать использовать не прямое сравнение, а другой метод.
</ParagraphWithImage>

Ещё один интересный релиз — [Rome 10](https://rome.tools/blog/2022/11/08/rome-10/). Потому что это первый стабильный релиз с момента перехода проекта на Rust. Этот релиз включает в себя новые быстрые линтер и инструмент форматирования кода. Мне кажется, что переход на Rust был верным решением, а проект продолжит развиваться. Напомню, что Rome позиционируется как монолитный тулчейн полного цикла со всем необходимым для разработки. На очереди реализация компилятора, бандрела, тест-раннера и других инструментов. Rome становится интереснее и, кажется, начинает возвращать к себе внимание.

Стабильный [релиз Nuxt 3](https://nuxt.com/v3) увидел свет. Он, конечно же, поддерживает Vue 3, и теперь у него под капотом Vite. Кроме того, Nuxt получил серверный движок Nitro, который использует Rollup и Node.js. В общем, пора обновляться.   

Вышел [Firefox 107](https://www.mozilla.org/en-US/firefox/107.0/releasenotes/). Теперь можно профилировать энергопотребление систем с процессорами Intel на Linux и macOS, также поработали над упрощением отладки расширений на базе web-extension. Был добавлен ряд CSS-свойств группы contain-intrinsic- и CSS-свойство font-palette. Традиционно был устранён ряд уязвимостей.

Angular достиг отметки [пятнадцатой мажорной версии](https://github.com/angular/angular/releases/tag/15.0.0). Есть несовместимости: изменились минимально поддерживаемые версии Node.js, больше не поддерживается TS старше версии 4.8. Некорректные конструкции внедрения зависимостей могут показывать новые ошибки, а имена кейфреймов теперь будут иметь префикс имени в скоупе. Больше подробностей — в release notes.

Не единственный релиз от Microsoft. Ещё один — [.NET 7](https://devblogs.microsoft.com/dotnet/announcing-dotnet-7/). Про весь релиз платформы можно почитать по ссылке в описании, но наверное будет интереснее про [ASP.NET](https://devblogs.microsoft.com/dotnet/announcing-asp-net-core-in-dotnet-7/). Например, появилась поддержка HTTP/3, а с веб-сокетами можно работать поверх HTTP/2. Ряд апдейтов получил Blazor. Доступен гайд по миграции с версии 6.0 до 7.0.

Я уже рассказывал о том, что в Deno работают над поддержкой npm-пакетов. В [версии 1.28](https://deno.com/blog/v1.28) фичу вывели из статуса экспериментальной в стабильную, хотя там наверняка ещё есть над чем поработать. Ещё одна связанная новость — на тему работы с npm выйдут тьюториалы. Также было анонсировано создание официального мануала по работе с Deno, потому что рантайм уже «дорос» до этого, по мнению команды.

Что ещё вышло с момента предыдущего выпуска? [Node.js 19.1.0](https://nodejs.org/en/blog/release/v19.1.0/) с поддержкой моков функций в npm:test, [Cypress 11.1.0](https://docs.cypress.io/guides/references/changelog#11-1-0), который теперь может работать с Next.js 13, а также [Playwright 1.28.0](https://github.com/microsoft/playwright/releases/tag/v1.28.0).

<ParagraphWithImage imageName="laptopNews" >
  ### Другие новости

Вслед за State of CSS стартовал [State of JS 2022](https://survey.devographics.com/survey/state-of-js/2022). Всё как обычно: опрос можно заполнить анонимно или зарегистрировавшись, поучаствовать в фидбеке для всего интернета и компаний-разработчиков браузеров. Результаты мы тоже будем освещать. По ссылке в описании сам опрос — если не лениво поучаствовать, обязательно приходите заполнить: у вас есть реальная возможность внести свой небольшой вклад в развитие веба.
</ParagraphWithImage>

Если опрос только начался, то конференция [GitHub Universe 2022](https://github.blog/2022-11-09-everything-new-from-github-universe-2022/) уже завершилась. На ней, конечно же, говорили о GitHub Copilot: был запущен ограниченный доступ для бизнеса. Сама компания заявляет, что Copilot может увеличить продуктивность разработчиков более чем на 50%. Как оно на самом деле — посмотрим, но доступ к Copilot for Business, конечно же, будет платным. Помним о том, что начинается судебная тяжба по Copilot. Что ещё? Планируется переработать поиск и навигацию по коду прямо на GitHub, увеличить количество часов работы Codespacec для индивидуальных разработчиков. Ещё одно направление развития — GitHub Projects. Появятся новые фичи, такие как родмапы, списки задач и другие продвинутые способы управления тасками. Назовите меня параноиком, но нас, пользователей, пытаются ещё плотнее поставить в зависимость от сервисов GitHub, что в принципе логично. Многие фичи пока находятся в закрытых или открытых бетах — посмотрим, во что они вырастут.

JetBrains порадовала всех анонсом новой IDE. На этот раз [для QA-разработчиков](https://blog.jetbrains.com/qa/2022/11/introducing-aqua-a-powerful-ide-for-test-automation-by-jetbrains/). Звучит очень неплохо: мультиязычность, поддержка инструментов и фреймворков для QA, нативная интеграция с ними. IDE пока находится в статусе публичного превью, так что её можно смело брать, пробовать и оставлять фидбек. По ценам пока непонятно. Посоветуйте вашим QA-инженерам: возможно, она поможет им в работе уже сейчас.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
