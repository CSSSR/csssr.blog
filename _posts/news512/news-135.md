---
title: 'В этом выпуске: бета Chrome 88, NodeJS 15.4.0, Google Dev Summit 2020, Ruby и Ruby on Rails в 2020, Tinder для разработчиков в VS Code.'
soundcloudLink: 'https://soundcloud.com/csssr/nodejs-1540-chrome-88-beta-platforma-bbc-ror-v-2020-google-dev-summit-2020-tinder-v-vscode'
date: '2020-12-11T00:00:00.000Z'
episodeNumber: 135
tag: 'news'
author: 'Ислам Виндижев'
---

<Note>
  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)
</Note>

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

  Инженеры BBC рассказали, как [перевели ресурс BBC World Service на изоморфное React-приложение](https://medium.com/bbc-design-engineering/bbc-world-service-web-performance-26b08f7abfcc). Это высоконагруженный ресурс, на котором публикуются новости на 40 языках, и эти особенности нужно было учесть. Кроме того, необходимо было позаботиться о доступности и производительности. Итогом стала разработка собственной платформы Simorgh. В среднем производительность страниц увеличилась на 80%, значительно улучшились показатели Lighthouse. Simorgh — это open-source, на него можно посмотреть и [на GitHub](https://github.com/bbc/simorgh).
</ParagraphWithImage>

  Елизавета Добрянская — фронтенд разработчик из компании ДомКлик — поделилась на Хабре [опытом внедрения в продукт стейт-менеджера Effector](https://habr.com/ru/company/domclick/blog/532016/). В статье есть небольшой экскурс в основы Effector и рассказ о том, почему было сложно начать с ним работать и как его подружили с TypeScript. Финал хороший: Effector внедрили, команда счастлива. Статья снабжена большим количеством примеров и демоприложением, которое доступно на GitHub.

  В блоге Яндекса на Хабре появился [транскрипт доклада Алексея Веселовского о TypeScript](https://habr.com/ru/company/yandex/blog/532240/). Алексей рассмотрел особенности конфигурации TS, рассказал о том, чего лучше избегать, и о вещах, с которыми нужно быть предельно осторожным. Также он упомянул об io-ts — библиотеке, которая может обнаружить попадание в код данных, способных вызвать ошибки.

  Саймон Уики (Simon Wicki) в своём блоге написал статью о том, [почему пора отказаться от Google Fonts в пользу self-hosted шрифтов](https://wicki.io/posts/2020-11-goodbye-google-fonts/). По мнению Саймона, аргумент о скорости загрузки из CDN больше не актуален из-за разделения кеша, начиная с 86-ой версии Chrome. Он приводит небольшое сравнение скорости загрузки и призывает хостить шрифты самостоятельно.

  Следующий материал [о монолите и микрофронтендах](https://blog.bitsrc.io/monolith-vs-micro-frontend-e6e9772a068b). Флориан Раппл (Florian Rappl) на Medium рассуждает о плюсах и минусах обоих подходов. Будучи фанатом монолитных систем, Флориан отмечает, что микрофронтенды привносят в проекты гибкость, масштабируемость и независимость частей приложения. Основная мысль проста: у монолитных приложений есть свои преимущества, и с них проще начать, а когда выбрать микрофронтенды и выбирать ли их — понять достаточно легко.

  На Хабре вышел перевод статьи Vira Vashkovska о том, [почему команда Syndicode использует Ruby в 2020 году](https://habr.com/ru/post/521594/). Распространено мнение, что Ruby и его экосистема умирают, с чем автор не согласна. Она отмечает пару недостатков Ruby и приводит ряд аргументов в защиту Ruby on Rails, среди них быстрота и эффективность разработки, преимущества для владельцев продуктов. Также она приводит топ-5 сфер, в которых Ruby и Ruby on Rails живы как никогда. Это e-commerce, SaaS, разработка MVP, кроссплатформенные приложения и IoT.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

  Вышел [Node.js 15.4.0](https://nodejs.org/en/blog/release/v15.4.0/). В этой версии добавили поддержку AbortSignal API. AbortSignal — это объект сигнала, который позволяет общаться с DOM при помощи запроса (например, Fetch) и при необходимости прервать его с помощью объекта AbortController. Также с релизом была поставлена пачка небольших багфиксов.
</ParagraphWithImage>

  [Анонс релиза Chrome 88](https://blog.chromium.org/2020/12/chrome-88-digital-goods-lighting.html). В бете Chrome 88 target=_blank работает как rel=noopener, псевдоэлемент :not() поддерживает сложные селекторы, а значение path() заработало в свойстве clip-path. Был добавлен метод performance.measureMemory(), а поддержка FTP и веб-компонентов v0 — удалена. Релиз запланирован на 19 января.

  Вышла версия [Ruby on Rails 6.1](https://weblog.rubyonrails.org/2020/12/9/Rails-6-1-0-release/). В релизе: улучшения для работы с несколькими базами данных, апгрейд Active Storage и объекты ошибок для Active Model. Без багфиксов и оптимизации производительности также не обошлось.

  Webpack получил обновление. Релиз [Webpack 5.10.0](https://github.com/webpack/webpack/releases/tag/v5.10.0) был направлен на оптимизацию сайд-эффектов, когда используется реэкспорт и конкатенация модулей. Разработчики немного прокачали внутреннюю структуру тайпингов и поработали над производительностью output.pathinfo().  

  Также отмечу релизы [Bash 5.1](https://lists.gnu.org/archive/html/bug-bash/2020-12/msg00002.html) — кстати, с последнего релиза прошло 2 года, — и [CentOS 8.3](https://www.mail-archive.com/centos-announce@centos.org/msg11827.html).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

  [Google Dev Summit](https://developer.chrome.com/devsummit/schedule/) стартовал 9 декабря. Первый день был посвящён перформансу, Core Web Vitals и приватности. Второй — DevTools, CSS Houdini, WebAssembly, PWA, Workbox, SEO и будущему веба. Все записи доступны.
</ParagraphWithImage>

  Автор Babel и Yarn Себастьян МакКензи (Sebastian McKenzie) объявил о запуске [сбора средств на разработку Rome](https://rome.tools/funding/). Напомню, Rome — многофункциональный инструмент, который может собирать бандл, прогонять тесты, устанавливать пакеты и много чего ещё. По словам Себастьяна, Rome сможет заменить Babel, ESLint, Yarn, Prettier и Webpack. Целевая сумма — 100 000 долларов, которые позволят Себастьяну работать над проектом независимо. Сейчас он нигде не работает и полностью посвятил свое время Rome. Оказать поддержку можно на сайте проекта.

  В заключение выпуска немного забавного. Бен Авад (Ben Awad) — автор плагина со сторис для VS Code — продолжает удивлять. На этот раз он создал плагин, который добавляет в редактор кода [Tinder для программистов](https://habr.com/ru/news/t/532242/). В нём «свайпить» нужно, оценивая не внешность, а фрагмент кода.

<Note>
  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
</Note>
