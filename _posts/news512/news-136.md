---
title: 'В этом выпуске: Bootstrap 5 beta, ускорение сайтов с ES2017, «Веб-альманах 2020», задачи по TypeScript и подготовка к интервью в Google.'
soundcloudLink: 'https://soundcloud.com/csssr/bootstrap-5-beta-1-type-challenges-uskorenie-s-es2017-web-almanac-2020-mdn-web-docs-na-yari'
date: '2020-12-16T00:00:00.000Z'
episodeNumber: 136
tag: 'news'
author: 'Ислам Виндижев'
---

<Note>
  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)
</Note>

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

  Хуссейн Джирде (Houssein Djirdeh) и Джейсон Миллер (Jason Miller) на web.dev рассказали, [как улучшить производительность сайта современным синтаксисом ES2017](https://web.dev/publish-modern-javascript/). Предлагается просто собирать два бандла — лёгкий на ES2017 и тяжёлый на ES5 — и использовать module/nomodule для доставки нужного бандла. Также авторы разбирают, как это сделать с помощью webpack и rollup. Помимо этого в статье анонсировали сервис [EStimator.dev](https://estimator.dev/), который оценивает, насколько улучшится производительность с ES2017.
</ParagraphWithImage>

Юбер Саблоньер (Hubert Sablonniere) в своём блоге решает [проблему сдвигов во время переключения состояний компонентов в интерфейсе](https://www.hsablonniere.com/prevent-layout-shifts-with-css-grid-stacks--qcj5jo/). Для этого он использует CSS Grid. Автор приводит описание самой проблемы и объясняет, почему её не очень удобно решать при помощи абсолютного позиционирования. Также Юбер рассказывает о решении на гридах и его преимуществах. На CSS-live есть [перевод на русский](https://css-live.ru/css/ubiraem-sdvigi-v-verstke-nalozheniyem-v-css-grid.html) от Ильи Стрельцина.

Артём Захарченко на dev.to поднимает тему [моков в тестировании](https://dev.to/kettanaito/when-should-i-not-use-mocks-in-testing-544e). Он рассказывает, что такое моки в принципе, зачем они нужны, какие есть подводные камни и когда их лучше всего использовать. Также затрагивается использование моков в тестах разного уровня: unit-тестах, интеграционных и end-to-end тестах.

Барри Поллард (Barry Pollard) на perfplanet рассказывает, [как встроить проверки Lighthouse в проект с помощью Github Actions](https://calendar.perfplanet.com/2020/running-lighthouse-in-github-actions/). В статье есть не только базовый пример использования, но и пример кастомизации набора проверок. Например, в случае Барри были актуальны неоптимизированные изображения, проблемы доступности и ещё некоторые параметры.

[Type Challenges](https://github.com/type-challenges/type-challenges) — набор задач по TypeScript. По задумке автора Энтони Фу (Anthony Fu) они помогут разобраться в тонкостях работы системы типов и освоить TypeScript. Задачи разделены на разные уровни — от «Hello, world!» до экстремально сложных. Дерзайте и попробуйте свои силы!

Джош Комо (Josh Comeau) в своём блоге подробно разобрал, [как и почему схлопываются margin](https://www.joshwcomeau.com/css/rules-of-margin-collapse/). Статья обширная и снабжена интерактивными примерами.

Нуани Виктори (Nwani Victory) на SmashingMagazine написал большую статью о [создании чат-бота для сайта с помощью Google Dialogflow](https://www.smashingmagazine.com/2020/12/conversational-nlp-enabled-chatbot-google-dialogflow/). Нуани рассказывает о самой платформе, настройках и обучении бота разным типам ответов. На все примеры можно посмотреть в [деморепозитории](https://github.com/vickywane/dialogflow-article-server), также автор оставил в конце статьи полезные ссылки.

Завершит рубрику материал о собеседованиях. Адилет Жаксибай (Adilet Zhaxybay), бывший инженер Google, создал ресурс [interviews.school](https://interviews.school/). Он посвящён аспектам подготовки к интервью и составлению резюме. Также там есть подборка алгоритмов на случай, если вас попросят переворачивать деревья на доске. Советы автора подходят, скорее, для трудоустройства в иностранные компании, но наверняка найдётся что-то полезное для каждого.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

  Появилась первая [бета Bootstrap 5](https://blog.getbootstrap.com/2020/12/07/bootstrap-5-beta-1/). В июне команда фреймворка рассказала о начале разработки пятой версии и появлении первой альфы. В бете добавили поддержку текста справа налево и utilities API, который позволяет просто кастомизировать и обновлять утилиты Bootstrap. Идёт работа по оптимизации JS: в планах уменьшить размер JS и поработать над производительностью.
</ParagraphWithImage>

Вышла версия [Wordpress 5.6 «Simone»](https://wordpress.org/news/2020/12/simone/). Это достаточно большой релиз. В нём улучшили гибкость разметки и добавили новые блоки. Также пропатчили автообновление, добавили больше поддержки PHP 8 и авторизацию через REST API Application Passwords.

[Laravel](https://github.com/laravel/laravel/releases/tag/v8.5.5) обновился до версии 8.5.5 и вышла [версия ядра Linux 5.10](https://lkml.org/lkml/2020/12/13/290) и [важный хотфикс версии 5.10.1](https://lkml.org/lkml/2020/12/14/860).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

  Продолжаем подводить итоги года. Опубликован [«Веб-альманах 2020»](https://almanac.httparchive.org/ru/2020/) — подробный отчёт HTTP Archive о состоянии веба. Отчет состоит из 22 глав, среди проанализированных областей: HTML, CSS, JS, SEO, CMS, доступность, приватность, безопасность и другие.
</ParagraphWithImage>

Инженеры Mozilla запустили новую [платформу Yari для MDN Web Docs](https://hacks.mozilla.org/2020/12/welcome-yari-mdn-web-docs-has-a-new-platform/). Переход на неё — часть плана по упрощению дополнения документации сообществом разработчиков. Теперь для публикации контента можно просто создать pull request. Также с сообществом обещают больше работать и быстрее обрабатывать обратную связь. В дальнейших планах: внедрение [новой стратегии локализации](https://hacks.mozilla.org/2020/12/an-update-on-mdn-web-docs-localization-strategy/), добавление поддержки Markdown и улучшение поиска.

<Note>
  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
</Note>
