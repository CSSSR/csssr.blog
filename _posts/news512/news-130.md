---
title: 'В этом выпуске: продолжение распила Тинькофф-монолита, полный гайд по CSS-градиентам и нативные HTML-формы, Chrome 87 с тулзами для отладки гридов, Mozilla 83 и TypeScript 4.1.'
soundcloudLink: 'https://soundcloud.com/csssr/chrome-87-firefox-83-typescript-41-aria-label-html-formy-css-gradienty-cssbattle-2020'
date: '2020-11-24T00:00:00.000Z'
episodeNumber: 130
tag: 'news'
author: 'Ислам Виндижев'
---

<Note>
  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)
</Note>

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

  Стефани Стимак на Smashing Magazine опубликовала [статью](https://www.smashingmagazine.com/2020/11/standardizing-select-native-html-form-controls/) о стандартизации нативных HTML-элементов форм. В статье приведен небольшой экскурс в прошлое HTML-форм, дан обзор текущего состояния элементов и рассказывается, что ждёт нас в будущем. Также в статье: главные боли нативных форм и как с этим жить.
</ParagraphWithImage>

[Заметка](https://html5accessibility.com/stuff/2020/11/07/not-so-short-note-on-aria-label-usage-big-table-edition/) Стива Фолкнера о работе HTML-атрибута aria-label. Стив собрал вопросы, которыми часто задаётся сам при работе с атрибутом, и ответил на них в виде таблицы. В таблице: HTML-элементы, однозначный ответ на вопрос, можно ли использовать с ними aria-label и короткие пояснения по каждому.

Тинькофф продолжает серию статей о распиле монолита. Напомню, что во второй части серии речь шла о Frame manager — оркестраторе фронтовых приложений. [В третьей части](https://habr.com/ru/company/tinkoff/blog/527922/) Станислав Петров рассказал о том, как решить задачу загрузки и отображения микрофронтендов без использования iFrame.

На css-tricks был опубликован [полный гайд по CSS градиентам](https://css-tricks.com/a-complete-guide-to-css-gradients/). Джефф Грэхем подробно разобрал линейные, конические и радиальные градиенты. Статья тщательно структурирована, по каждому градиенту есть синтаксис, примеры использования и подборка полезных статей. Также Джефф поделился полезными трюками по работе с градиентами.

Спустя почти два месяца после релиза Safari 14 вышел [официальный список изменений и нововведений](https://webkit.org/blog/11340/new-webkit-features-in-safari-14/). Среди основных — расширения для Safari, перевод веб-страниц на другие языки и улучшения производительности.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

  Доступен [Chrome 87](https://chromereleases.googleblog.com/2020/11/stable-channel-update-for-desktop_17.html). Соответственно, обновился и движок Chromium. Больше всего радует троттлинг неактивных вкладок, теперь ресурсов на них выделяется меньше. Это позволило почти в 5 раз сократить нагрузку на процессор при большом количестве вкладок, что, следовательно, увеличивает время автономной работы устройства. Ещё одно крутое изменение — [релиз человеческих инструментов для отладки гридов в DevTools](https://developers.google.com/web/updates/2020/10/devtools#css-grid).
</ParagraphWithImage>

Вышел [Mozilla Firefox 83](https://hacks.mozilla.org/2020/11/firefox-83-is-upon-us/). В нём включён Warp — новый JIT-компилятор движка SpiderMonkey, о котором мы рассказывали в прошлом выпуске. Был добавлен необязательный режим HTTPS-only и новое диалоговое окно веб-аутентификации, которое привязано к конкретной вкладке и не блокирует весь интерфейс.
[Firefox 83 for developers on MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/83), [Firefox 83 end-user release notes](https://www.mozilla.org/en-US/firefox/83.0/releasenotes/)

Браузер Tor отметился релизом [версии 10.0.5](https://blog.torproject.org/new-release-tor-browser-1005). В этот раз просто обновили версию Firefox до 78.5.0 с длительным сроком поддержки и инструментарий Tor до версии 0.4.4.6. Отмечу, что это только десктопная версия, релиз версии для Android перенесли на следующую неделю, но команда разработки обещает синхронизировать даты выхода.

Появилась [116-я версия Safari Technology Preview](https://webkit.org/blog/11348/release-notes-for-safari-technology-preview-116/). В ней добавились исправления Web Extensions, улучшения и исправления Web Inspector, включен Audio Worklet. Также в релизе баг-фиксы и мелкие правки.

Microsoft зарелизила [TypeScript 4.1](https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/). Были добавлены литеральные шаблонные типы. Появилась полноценная поддержка рекурсивных условных типов. Ещё теперь можно ремапить ключи в отображаемых типах. Есть и несколько breaking changes.

Завершают неделю релизов [Laravel 8.15](https://laravel-news.com/laravel-8-15-0) и [nginx Unit 1.21.0](https://mailman.nginx.org/pipermail/unit/2020-November/000228.html).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

  Браузерный движок Servo [перешёл в Linux Foundation](https://www.linuxfoundation.org/press-release/2020/11/open-source-web-engine-servo-to-be-hosted-at-linux-foundation/). Ранее движок разрабатывался Mozilla, но команда была полностью ликвидирована. Servo написан на Rust и позволяет использовать преимущества многоядерных процессоров. Это хорошая новость для сообщества, по идее переход должен способствовать развитию движка.
</ParagraphWithImage>

Доступны необработанные результаты опроса [State of CSS за 2020 год](https://whatsmissingfromcss.com/). Если вам не терпится узнать, что думают о CSS в 2020 — ознакомьтесь. Ну или подождите итоговых результатов.

Google экспериментирует с [WebP 2](https://www.phoronix.com/scan.php?page=news_item&px=Google-Experimental-WebP2). Как вы могли догадаться, это потенциальный преемник WebP. Задача WebP 2 в основном заключается в увеличении эффективности сжатия, примерно на 30%.

Стартовал [12-й CSS Battle](https://cssbattle.dev/battle/12). Напомню, это игра, в которой нужно выполнить ряд заданий с минимальным количество кода на CSS. Игра продлится до 21 декабря.

Все ссылки на инфоповоды и сопутствующие публикации ищите в описании. С вами был Ислам Виндижев, до встречи в следующем выпуске.

<Note>
  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
</Note>
