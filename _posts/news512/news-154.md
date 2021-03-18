---
title: 'В этом выпуске: «История фронтенда» от CSSSR, релиз Chrome 89, import maps, Flutter 2.0, коллекция free-for.dev, производительность Vue, внутренние структуры данных движка Ivy.'
soundcloudLink: 'https://soundcloud.com/csssr/istoriya-frontenda-ot-csssr-chrome-89-flutter-2-import-maps-free-fordev-struktury-dannykh-ivy'
date: '2021-03-05T00:00:00.000Z'
episodeNumber: 154
tag: 'news'
author: 'Ислам Виндижев'
---

<Note>
  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)
</Note>

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

Мы выложили [первый эпизод сериала «История фронтенда»](https://www.youtube.com/watch?v=7nrDctGYOIk). После большого ресёрча по теме, редактуры, корректировок и монтажа с озвучкой родился 12-минутный выпуск. Весь материал первого эпизода не поместился в видео, поэтому мы дополнительно выпустили крутецкий [текстовый материал](https://blog.csssr.com/ru/article/frontend-history-the-browser-that-could-do-everything/). Наслаждайтесь, оставляйте комментарии, это поможет нам сделать следующий эпизод лучше. Пока не совсем понятно, когда он выйдет, но работа уже ведется, обязательно анонсируем.
</ParagraphWithImage>

Фернандо Дольо (Fernando Doglio) написал статью [о 5 видах зависимостей](https://blog.bitsrc.io/everything-you-ever-wanted-to-know-but-were-afraid-to-ask-about-javascript-dependencies-175220f0dcfb). Речь идёт об обычных зависимостях, peer- и dev-зависимостях, связанных и опциональных зависимостях. По каждому виду Фернандо приводит объяснение и примеры (там, где это возможно). Неплохая короткая статья, которая поможет базово разобраться в различиях типов зависимостей. Также есть [в переводе](https://habr.com/ru/company/otus/blog/545008/) на Хабре.

В Chrome 89 [поддерживаются import maps](https://jspm.org/import-map-cdn). Гай Бедфорд (Guy Bedford) рассказал, что в этом хорошего. Вкратце, import maps позволяет подключать модули в браузере примерно так же, как мы уже привыкли делать это в JS-приложениях. Это позволяет пользоваться преимуществами модульного кеширования и, соответственно, позитивно влияет на производительность. Пока что есть поддержка в Chrome 89, а для других браузеров — полифилл.

Алексей Кузнецов написал статью [о производительности Vue.js](https://habr.com/ru/post/543298/). Приёмы — посложнее самых очевидных. Реактивность стоит ограничивать с Object.freeze, использовать функциональные геттеры не стоит, потому что они не кешируются, и, конечно, большую роль играет грамотное разбиение на компоненты.

Мишко Хевери (Miško Hevery) в блоге Angular написал небольшую статью [о работе нового движка Ivy](https://blog.angular.io/ivys-internal-data-structures-f410509c7480). В частности статья посвящена внутренним структурам данных движка. Он описывает, как внутри представляются шаблоны, как составляется логическое дерево, как работает дерево рендера и как они взаимодействуют. Полезно, особенно если вы интересуетесь внутренним устройством Angular и его компонентов.

Следующий материал — [вводный туториал по Aleph.js](https://blog.bitsrc.io/introduction-to-aleph-the-react-framework-in-deno-322ec26d0fa9). Это React-фреймворк, который работает не на Node.js, а на Deno. Сложно сказать, насколько пора создавать такие инструменты и что будет дальше с Deno, но оно имеет место быть. Фреймворк, конечно же, обещает, что его не нужно настраивать, TypeScript поддерживается из коробки, поддерживаются SSR и SSG. Если вы уже попробовали Deno, то почему бы не попробовать и этот фреймворк.

Крис Локлин (Chris Laughlin) написал статью [о микрофронтендах](https://www.sitepoint.com/a-beginners-guide-to-the-micro-front-end-architecture/). Это не хардкорный труд, а небольшой вводный гайд. Для примера используется Module Federation Webpack 5. На небольшом приложении Крис демонстрирует разделение на микросервисы, логику и базовые принципы подхода.


Закроет рубрику ресурс [free-for.dev](https://free-for.dev/). Это большая коллекция сервисов, решений и приложений, в которую внесли вклад более 500 человек. Продукты в этой коллекции предоставляют бесплатные тарифы или какие-то лимиты для бесплатного использования, либо что-то похожее. Облачные платформы, CI/CD-решения, IDE и редакторы, тестирование, анализ безопасности — и это далеко не полный список категорий из перечня. Обязательно взгляните, возможно вы найдёте классную штуку, которую захотите попробовать или использовать на постоянной основе.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

Вышел Chrome 89. Теперь для JS-модулей поддерживается Top-level await. Стали доступны по умолчанию новые аппаратные API, например, WebNFC. PWA-приложения теперь можно установить, только если они поддерживают offline-режим. Пока просто выдается предупреждение, но начиная с Chrome 93 их установка будет жестко заблокирована. Также теперь доступны Web Share API и Web Share Target API. Подробнее о релизе браузера можно узнать [в обзоре Пита Лепэйджа (Pete LePage)](https://developer.chrome.com/blog/new-in-chrome-89/). DevTools, конечно же, с новинками. Lighthouse обновили до 7 версии. Добавлена поддержка эмуляции устройств со складным экраном и многое другое. Подробности — [в обзоре от Джеселин Йин (Jecelyn Yeen)](https://developers.google.com/web/updates/2021/01/devtools).
</ParagraphWithImage>

Спустя почти 2 года с выпуска первой версии вышло мажорное обновление Flutter. В [версии 2.0](https://developers.googleblog.com/2021/03/announcing-flutter-2.html) создание веб-приложений из беты перешло в статус стабильной фичи, создание десктопных приложений доступно как бета. Также подвезли null safety и другие фичи. Кроме анонса я приложу ссылку на [полный обзор нововведений](https://medium.com/flutter/whats-new-in-flutter-2-0-fe8e95ecc65) от Криса Селса (Chris Sells).

Доступен [Deno 1.8](https://deno.land/posts/v1.8). Добавили поддержку TypeScript 4.2, WebGPU, API интернационализации (Intl), import maps и поддержку загрузки приватных модулей. Это не полный список, подробности — в release notes.

Вышла [12 версия фреймворка Electron](https://www.electronjs.org/blog/electron-12-0). Версию Chromium обновили до 89, Node.js до 14.16, а V8 до 8.9. Модуль remote был помечен как устаревший, был добавлен новый API webFrameMain. Подробнее — в блоге Electron.

Также отмечу обновление current-версии [Node.js 15.11.0](https://nodejs.org/en/blog/release/v15.11.0/), релиз [Ember 3.25](https://blog.emberjs.com/ember-3-25-released/) и выход [jQuery 3.6.0](https://blog.jquery.com/2021/03/02/jquery-3-6-0-released/).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

Компания Brave [выкупила поисковую систему Cliqz](https://brave.com/brave-search/). Напомню, что компания делает браузер Brave, который нацелен на приватность и безопасность пользователей. Наработки Cliqz нужны для создания поисковой системы, которая не отслеживает пользователей и тесно интегрирована с браузером. Поисковую систему планируется развивать при участии сообщества, хотя пока и не совсем понятно, как это будет выглядеть. Brave на Chromium и развивается под руководством Брендана Айка (Brendan Eich), создателя JavaScript и бывшего руководителя Mozilla. Посмотрим, что из этого получится.
</ParagraphWithImage>

<Note>
  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
</Note>
