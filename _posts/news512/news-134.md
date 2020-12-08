---
title: 'В этом выпуске: PhpStorm 2020.3; Lyft и Next.js; сравнение Puppeteer, Playwright и Selenium; font-display для медленных соединений; браузер, которому не нужны серверы, и State of JS 2020.'
soundcloudLink: 'https://soundcloud.com/csssr/phpstorm-20203-playwright-puppeteer-i-selenium-nextjs-v-lyft-beaker-10-state-of-js-2020'
date: '2020-12-08T00:00:00.000Z'
episodeNumber: 134
tag: 'news'
author: 'Ислам Виндижев'
---

<Note>
  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)
</Note>

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

  В блоге Checkly сравнивают [производительность Puppeteer, Playwright и Selenium](https://blog.checklyhq.com/puppeteer-vs-selenium-vs-playwright-speed-comparison/). Тесты прогонялись и на реальном, и на демоприложении. В конечном итоге на реальном приложении Playwright показал себя лучше всех, а Puppeteer продемонстрировал преимущество при выполнении коротких скриптов. Старичок Selenium в составе WebdriverIO оказался самым медлительным. Если вы сомневаетесь, в статье можно подробнее ознакомиться с тестированием и расчетом производительности.
</ParagraphWithImage>

  Статья о том, [как инженеры Lyft 100 фронтенд-микросервисов на Next.js переносили](https://eng.lyft.com/changing-lanes-how-lyft-is-migrating-100-frontend-microservices-to-next-js-42199aaebd5f). Команда разработки столкнулась с узкими местами производительности Lyft, сложностями с поддержкой и большим количеством инфраструктурного кода. В итоге было принято решение перейти на Next.js, и так родился сервис @lyft/service — новая платформа на Next.js. В шаблонном приложении размер бандла уменьшился на 845 килобайт, 10000 строк инфраструктурного кода были удалены. Подробнее можно прочитать в оригинальной статье или посмотреть [доклад Джошуа Каллендера (Joshua Callender)](https://www.youtube.com/watch?v=bQIRpDfEgok) на Next.js Conf.

  Мэтт Хоббс (Matt Hobbs) рассказал о нюансах использования [font-display при медленном соединении](https://calendar.perfplanet.com/2020/a-font-display-setting-for-slow-connections/). CSS-свойство font-display определяет стратегию рендеринга шрифта. Автор подробно рассматривает значения свойства и их особенности. Например, при использовании swap браузер отображает фоллбэк-шрифт сразу и ждёт, пока не загрузится шрифт. После загрузки происходит замена шрифта. Значение fallback похоже на swap, но браузер ждёт три секунды для замены шрифта. А при использовании optional, если в течение 100 мс браузер не загрузит шрифт, то будет отображаться фоллбэк без подмены. Сам Мэтт предпочитает font-display: swap.

  В блоге CatchJS была опубликована [статья про анализ производительности миллиона сайтов](https://catchjs.com/Blog/PerformanceInTheWild). Авторы оценили, как разные факторы — от версии HTTP до используемых библиотек — влияют на производительность. Самым интересным нам показался анализ JS-библиотек. Чаще всего на анализируемых страницах встречались jQuery, Google Analytics и Google Ads. Хуже всего влияли на TTI (Time-to-interaction) jQuery, Froogaloop и WooCommerce. Библиотеки, которые больше всего влияют на время полной загрузки страницы: Baidu Statistics, Amazon Publisher Services, jQuery, VK Open API, Zopim.

  Патрик Лауке (Patrick Lauke) опубликовал [статью про использование медиафич для определения устройств ввода](https://css-tricks.com/interaction-media-features-and-their-potential-for-incorrect-assumptions/). Interaction Media Feature проверяют поддержку hover, тача, стилуса и соответствующим образом адаптируют интерфейс. Pointer и hover предоставляют информацию о возможностях ввода того устройства, которое браузер считает основным. Any-pointer и any-hover представляют обобщенную информацию о всех подключенных устройствах ввода. Иногда этими медиафичами пользуются неправильно и отключают поддержку определенных типов устройств ввода. Это может ухудшить UI, т.к. устройства ввода могут быть подключены после загрузки веб-страницы.

  Если вам нужно использовать Container Queries уже сейчас, Крис Койер (Chrys Coyer) на css-tricks собрал [несколько решений](https://css-tricks.com/minimal-takes-on-faking-container-queries/) от других разработчиков. Все они используют JS, а большая часть — конкретно ResizeObserver.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

  Доступна [PhpStorm 2020.3](https://www.jetbrains.com/ru-ru/phpstorm/whatsnew/). Она поддерживает PHP 8 и Xdebug 3, в ней так же, как и в новом WebStorm, есть поддержка Code With Me и Tailwind CSS. В этой версии поддерживаются статические анализаторы кода Psalm и PHPStan. Доступны и улучшения редактора, как в WebStorm, релиз которого мы освещали в прошлом выпуске.
</ParagraphWithImage>

  Angular 11 и Vue 3 отличились минорными релизами с багфиксами. Это версии [Angular 11.0.3](https://github.com/angular/angular/releases/tag/11.0.3) и [Vue 3.0.4](https://github.com/vuejs/vue-next/releases/tag/v3.0.4).

  [ESLint](https://github.com/eslint/eslint/releases/tag/v7.15.0) обновился до версии 7.15. Главное дополнение — новое правило no-unsafe-optional-chaining. Оно нужно, чтобы отлавливать потенциальную ошибку типа в результате использования Optional Chaining.

  Пара багфикс-релизов от команды [npm](https://blog.npmjs.org/post/635957977230213120/release-v7015). В версиях 7.0.14 и 7.0.15 разработчики исправили пару проблем в зависимостях и обновили документацию.

  Также на этой неделе отмечу релизы [sqlite 3.34.0](https://www.sqlite.org/releaselog/3_34_0.html) и [Debian 10.7](https://www.debian.org/News/2020/20201205).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

  Вышла [версия 1.0 браузера Beaker](https://beakerbrowser.com/2020/12/02/beaker-1-0.html). Его начали разрабатывать еще в 2016 году. Он написан на JS, использует Chromium и Electron. При помощи p2p-протокола Hypercore все клиенты браузера объединяются в сеть, и сайты можно хостить со своего устройства без использования серверов. Ждёт ли нас эра веба без серверов, или это просто интересный концепт? Посмотрим.
</ParagraphWithImage>

  Авторы The State of CSS 2020 запустили ещё один опрос, теперь о JavaScript и его экосистеме: [The State of JS 2020](https://stateofjs.com/). Опрос ещё идёт, и вы можете принять в нём участие. Результаты мы обязательно осветим в одном из следующих выпусков.

<Note>
  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
</Note>
