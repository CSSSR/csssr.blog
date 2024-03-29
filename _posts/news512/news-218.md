---
title: 'В этом выпуске: первый день рождения Доки, обновлённый гайд по рендерингу React, бета TypeScript 4.9, релизы фреймворков Fresh и Astro, книга Саши Беспоясова о рефакторинге, а также несколько материалов по Node.js.'
soundcloudLink: 'https://soundcloud.com/csssr/typescript-49-beta-rendering-v-react-refaktoring-na-maksimalkakh-doke-1-god'
date: '2022-10-14T00:00:00.000Z'
episodeNumber: 218
tag: 'news'
author: 'Ислам Виндижев'
---

Всем привет! Это «Новости 512» от CSSSR. Выпуск будет несколько короче из-за небольшого промежутка, но новостей есть. В этом выпуске: обновлённый гайд по рендерингу React, бета TypeScript 4.9, релизы фреймворков Fresh и Astro, книга Саши Беспоясова о рефакторинге, а также несколько материалов по Node.js. Ещё мы немного отметим день рождения проекта «Дока».

<ParagraphWithImage imageName="laptopNews" >
  ### Интересные публикации

Первый материал — [обновлённый гайд по рендерингу в React](https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/). Мейнтейнер Redux Марк Эриксон (Mark Erikson) обновил свою статью с учётом React 18 и будущих изменений, которые были анонсированы. Это исчерпывающий гайд, который начинается с самого понятия рендеринга и обзора обработки рендеров в React. Затем автор касается измерения производительности компонентов и техник оптимизации рендеринга. Здесь же вы найдёте заметки о рендеринге в зависимости от контекста и с React-Redux, а также мысли Марка о React Forget и селекторах контекста.
</ParagraphWithImage>

Как-то я уже рассказывал про эту шпаргалку по контейнеризации Node.js-приложений с Docker. Это еще один [обновлённый гайд](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/) от Лирана Тала (Liran Tal) и Йони Голдберга (Yoni Goldberg). В статье вы найдёте рекомендации по базовой работе с образами, управлению зависимостями приложения, диагностике безопасности и другим аспектам контейнеризации. Шпаргалку можно также скачать как PDF-файл — она была обновлена в сентябре этого года.

В августе в Node.js 18.8.0 появился встроенный тестовый фреймворк [node:test](https://itnext.io/the-new-test-framework-built-in-to-node-js-18-8-0-1d78315ac9f9). Посмотреть на него поближе вызвался Дэвид Хэррон (David Herron). По его словам, он очень напоминает Mocha. Дэвид разбирается в устройстве пакета и показывает примеры решения типовых задач написания тестов с применением node:test. В конечном итоге node:test не такой продвинутый в плане фич, как уже существующие решения, но уже вполне готов к применению и подойдёт для решения ряда задач без использования зависимостей.

Следующий материал — для любителей практики и гайдов. Дэвид Наво (David Navo) предлагает читателям создать [свою собственную Kanban-доску](https://javascript.plainenglish.io/building-a-beautiful-kanban-board-with-node-js-react-and-websockets-d6114e187e10) с использованием React, Node.js и веб-сокетов. Он, конечно, пиарит проект Novu, над которым работает. Это инфраструктура для уведомлений с открытым кодом. Но в целом в статье приятный пошаговый гайд по созданию аналога Trello-доски с тасками, комментами и другими плюшками. Вполне можно попробовать для практики.

Давно в эпизодах не было материалов от Саши Беспоясова. Момент настал: недавно он напомнил о своей [книге, посвящённой рефакторингу](https://github.com/bespoyasov/refactor-like-a-superhero-online-book/blob/main/manuscript-ru/README.md). В ней затрагиваются как и совсем, казалось бы, мелкие вопросы, такие как имена функций и переменных, так и крупные, архитектурные проблемы и рефакторинг как процесс. Если вы слышали только слово «рефакторинг», но никогда не разбирались, это то что нужно.

Завершит рубрику Темани Афиф (Temani Afif), который продолжает разбираться с математическими выражениями и сложными формами. Новая статья посвящена созданию [волнообразных форм](https://css-tricks.com/how-to-create-wavy-shapes-patterns-in-css/). Он разбирает базовую математику, стоящую за волнами, касается создания градиентов и сложных волнистых паттернов. В конце он показывает готовые примеры очень классных штук. Возможно, он когда-нибудь доберётся и до тригонометрических функций.

<ParagraphWithImage imageName="manWithLaptop">
  ### Новости релизов

Вышла [бета TypeScript 4.9](https://devblogs.microsoft.com/typescript/announcing-typescript-4-9-beta/), совсем скоро будет доступен и релиз-кандидат. Наверное, основная фишка — оператор satisfies, который позволяет валидировать соответствие типа выражения какому-то типу без изменения результирующего типа. Оператор in станет более полезным при сокращении типов с отсутствующими свойствами. Ещё один лучик добра — это оберегалочка от прямого сравнения с NaN: теперь TS будет выводить ошибку и предлагать использовать не прямое сравнение, а другой метод.
</ParagraphWithImage>

Firefox, остановись. Вышло [обновление 105.0.3](https://www.mozilla.org/en-US/firefox/105.0.3/releasenotes/). В нём была исправлена проблема с вылетами браузера на Windows из-за установленных антивирусов Avast или AVG.

Фреймворк [Fresh 1.1](https://deno.com/blog/fresh-1.1) уже некоторое время доступен. Напомню, это full-stack фреймворк для Deno. Теперь он умеет по умолчанию работать в режиме JSX без дополнительных манипуляций, поддерживает Preact Signals и Preact DevTools. Также была добавлена экспериментальная поддержка нового высокопроизводительного HTTP-сервера Deno.serve.

Фреймворк Astro отметился [версией 1.4.0](https://astro.build/blog/astro-140/). Был добавлен модуль Astro.cookies для работы с Cookies, поддержка JSX и TSX для Vue, также была улучшена очерёдность стилей.

[Rust 1.64.0](https://blog.rust-lang.org/2022/09/22/Rust-1.64.0.html) доступен для использования. Для конструкции .await доступен новый трейт IntoFuture, rust-analyzer стал частью инструментов Rust, для Cargo доступны многоцелевые билды и наследование воркспейсов. Также была оптимизирована компиляция для Windows, что ускорило билды на 10-20%.

Прошло, кажется, года 3 с момента выхода 6-ой мажорной версии VirtualBox. Наконец вышла [седьмая](https://www.mail-archive.com/vbox-announce@virtualbox.org/msg00218.html). Была добавлена поддержка полного шифрования виртуальных машин, возможность управлять облачными виртуальными машинами, значительно доработан (а местами совсем переработан) интерфейс. С полным списком изменений можно ознакомиться в release notes.

Также отмечу security-релиз [Fastify 4.8.1](https://github.com/fastify/fastify/releases/tag/v4.8.1).

<ParagraphWithImage imageName="laptopNews" >
  ### Другие новости

В прошлом выпуске мы отмечали 10 лет TypeScript, а в этом отметим [первый день рождения Доки](https://twitter.com/doka_guide/status/1580182439393398784). Дока — уже нечто большее, чем справочник: проект объединяет людей, расширяет знания и сознания, меняет к лучшему участников и веб. Мои поздравления. По этому поводу у Доки появился свой дискорд. К выпуску я приложу твит со ссылкой на дискорд — присоединяйтесь!
</ParagraphWithImage>

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
