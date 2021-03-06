---
title: 'В этом выпуске: новый официальный мануал по TypeScript, цена использования useMemo, кастомные CSS-свойства с @property, заблуждения о микрофронтендах, интервью с создателем Node.js и Deno Райаном Далом, ускорение релизных циклов V8 и Chrome, а также разбор Core Web Vitals от Rambler Group. '
soundcloudLink: 'https://soundcloud.com/csssr/manual-po-typescript-property-zabluzhdeniya-o-mikrofrontendakh-tsena-usememo-intervyu-rayana-dala'
date: '2021-03-10T00:00:00.000Z'
episodeNumber: 155
tag: 'news'
author: 'Ислам Виндижев'
---

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

[О настоящей стоимости useMemo](https://habr.com/ru/post/544930/) в своей статье на Хабре рассказывает Александр Бальцевич, также известный как IT Синяк. На примере простого конвертера валют он наглядно показывает, когда использовать useMemo стоит, а когда нет. Автор буквально считает память, количество операций и другие показатели с учетом разных сценариев рендера. Итог простой: в некоторых ситуациях бывает дешевле произвести расчет заново, чем получить его мемоизированное значение. Кстати, эта статья — расшифровка [оригинального видео](https://www.youtube.com/watch?v=i6DPqqbdIyw).
</ParagraphWithImage>

Джей Томпкинс (Jhey Tompkins) в своей статье на css-tricks рассказал [об использовании пока ещё экспериментального CSS-свойства @property](https://css-tricks.com/exploring-property-and-its-animating-powers/), которое позволяет определять кастомные CSS-свойства. Джей в своей статье применяет свойство для разного рода анимаций и показывает несколько применений технологии. Фича интересная, применений можно найти уйму, стоит только проявить фантазию.

Флориан Раппл (Florian Rappl) написал статью [об 11 заблуждениях, связанных с микрофронтендами](https://blog.bitsrc.io/11-popular-misconceptions-about-micro-frontends-d5daecc92efb). Флориан упоминает такие распространённые заблуждения, как обязательность использования разных фреймворков, и то, что микрофронтенды работают только на клиенте. Также он упоминает code sharing, заблуждение связанное с микросервисной архитектурой и монорепозиториями.

Юна Кравец (Una Kravets)  рассказала [об обработке анимаций на графическом процессоре систем](https://developer.chrome.com/blog/hardware-accelerated-animations/). Chrome уже давно обрабатывает некоторые CSS-трансформации на GPU. А в Chrome 89 на GPU обрабатываются и SVG-анимации. С точки зрения разработки делать ничего не нужно, GPU автоматически решает, какие анимации обрабатывать. Также теперь будут обрабатываются трансформации, которые используют проценты как единицы измерения. В будущих релизах список анимаций, которые будут обрабатываться GPU, расширится.

Следующий материал — [интервью с создателем Node.js и Deno Райаном Далом](https://evrone.ru/ryan-dahl-interview) от команды Evrone. Он рассказал об основных задачах по развитию Deno, поделился мнением о будущем JavaScript и TypeScript, поведал о сторонних проектах экосистемы Deno и о том, как бы он изменил свой подход к Node.js, если бы мог путешествовать во времени. Затронули и другие темы: разработку на Rust, возможность добавления типизации в JavaScript и работу Райана в Vim.

В блоге Rambler Group подробно разбирали [Core Web Vitals](https://habr.com/ru/company/rambler_group/blog/544904/). Все уже успели пошуметь о новых метриках, и обсудить, и построить теории заговора. Эта статья несколько более полезная — в ней метрики подробно разбираются, рассказывается, почему выбрали именно их и как их правильно интерпретировать. В конце статьи есть раздел с советами по улучшению этих показателей и ссылки на другие полезные статьи по теме. Напомню, в недалеком будущем именно эти метрики будут участвовать в ранжировании ресурсов поисковой системой.

Завершает рубрику ресурс, на котором собраны [фичи, о реализации которых не могут договориться разные браузеры](https://webapicontroversy.com/). Речь идет о таких фичах, как, например, Web NFC, Web Bluetooth и другие. Список интересен еще и тем, что в нём есть и причины, по которым тот или иной браузер не реализует фичу.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

Релизов на этой неделе не то чтобы много, но есть о чём поговорить.
</ParagraphWithImage>

Вышло новое официальное [руководство по TypeScript](https://devblogs.microsoft.com/typescript/announcing-the-new-typescript-handbook/). Старую версию полностью переработали, это заняло около двух лет. Теперь это не набор статей, а полноценная книга, которую можно рекомендовать всем, кто только начинает изучать TypeScript. Все редкие кейсы использования TypeScript переместили в справочник. [Руководство](https://www.typescriptlang.org/docs/handbook/intro.html) есть в форматах pdf/epub, также доступна веб-версия.

Тем временем Angular плавно идет к 12 версии. Уже доступна третья предрелизная версия [12.0.0-next.3](https://github.com/angular/angular/releases/tag/12.0.0-next.3). Перспективы следующие: поддержки npm 7 пока не будет, команда пытается интегрироваться, но из-за двух багов npm пока не получается, будет добавлена поддержка Webpack 5 и, соответственно, Module Federation. Будут и breaking changes: минимально-поддерживаемой версией Node.js станет 12.13, а минимально-поддерживаемой версией Karma станет 6.0.0. Кроме того, естественно, продолжается поддержка текущей мажорной версии, предыдущим было обновление 11.2.3.

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

[GitHub снова оказался уязвим](https://github.blog/2021-03-08-github-security-update-a-bug-related-to-handling-of-authenticated-sessions/). На этот раз проблема была суровая: ни много ни мало, один пользователь мог получить полный доступ к сеансу другого. Уязвимость появилась из-за состояния гонки при обработке запросов бэкендом. Сообщается, что проблема проявляется крайне редко и затрагивает очень маленький процент пользователей. Проблему уже пофиксили и обещают, что такого больше не повторится, из-за этого 8 марта все пользователи были разлогинены.
</ParagraphWithImage>

Объявляю 2021 год годом ускорения релизов. [Google Chrome переходит на новый релизный цикл](https://developer.chrome.com/blog/faster-release-cycle/): браузер будет выходить каждые 4 недели вместо 6. Новый [график](https://chromiumdash.appspot.com/schedule) вступит в силу с Chrome 94, который выйдет 21 сентября.

Вслед за Chrome и именно для ускорения релизов [аналогично поступает команда V8](https://v8.dev/blog/faster-releases). Соответственно, начнут синхронно с браузером, первая версия движка в новом релизном графике будет 9.4.

Вот вам еще событие из мира Ubuntu. Canonical объявила что будущие приложения для Ubuntu будут [написаны на Flutter](https://twitter.com/ubuntu/status/1367063203600031746). Напомню, что на прошлой неделе вышла вторая версия фреймворка. Так что вполне возможно, что пора присмотреться к нему и к языку Dart повнимательнее.

<Note>
  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
</Note>
