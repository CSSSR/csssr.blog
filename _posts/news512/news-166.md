---
title: 'В этом выпуске: производительность CSS-in-JS в рантайме, ленивая загрузка свойств в JS, обзор новых псевдоклассов, пояснение спецификации CSS Nesting, релиз Ubuntu 21.04 и open-source часы.'
soundcloudLink: 'https://soundcloud.com/csssr/proizvoditelnost-css-in-js-uchastie-v-razvitii-mdn-novye-psevdoklassy-css-nesting-ubuntu-2104'
date: '2021-04-27T00:00:00.000Z'
episodeNumber: 166
tag: 'news'
author: 'Ислам Виндижев'
---

  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

Томаш Пустельник (Tomas Pustelnik) сравнил [производительность CSS-in-JS c рантаймом и без](https://pustelto.com/blog/css-vs-css-in-js-perf/). Если коротко: не стоит использовать CSS-in-JS в рантайме, это негативно сказывается на производительности. Автор для примера сравнивает Styled Components с Linaria, который позволяет использовать CSS-in-JS без рантайма. Linaria в этом сравнении побеждает. Подробности и цифры — в блоге Томаша.
</ParagraphWithImage>

Следующий материал от Николаса Закаса (Nicholas Zakas) — статья [о свойствах с ленивой загрузкой в JavaScript](https://humanwhocodes.com/blog/2021/04/lazy-loading-property-pattern-javascript/). Суть довольно проста: вычислять свойство объекта, когда к нему происходит обращение. Николас показывает паттерн, который позволяет отложить вычисление и закешировать его результат.

Стефани Эклз (Stephanie Eckles) на SmashingMagazine написала [обзор новых псевдоклассов](https://www.smashingmagazine.com/2021/04/guide-supported-modern-css-pseudo-class-selectors/), которые с большой вероятностью попадут в стандарт. Речь идёт о таких псевдоселекторах, как :any-link(), :focus-visible(), :focus-within(), :is(), :where() и улучшенный :not(). Также упоминаются селекторы, которые предложены, но их будущее пока не вполне понятно — :has() и :empty().

Роман Дворнов в своём Telegram-канале написал серию постов с разбором нестинга в CSS, а Вадим Макеев собрал их в [статью](https://web-standards.ru/articles/css-nesting/) и опубликовал на Веб-стандартах. Вокруг пропозала много непонятного: кто-то говорит, что это не нужно, кто-то считает, что это позволит избавиться от препроцессоров. Роман рассказал, что же на самом деле с этой спецификацией, какое влияние может оказать фича и когда, возможно, её стоит ждать в браузерах.

Завершат рубрику три полезные ссылки:

[Гайд по старту проекта с TypeScript в 2021](https://www.metachris.com/2021/04/starting-a-typescript-project-in-2021/), который покрывает базовую настройку, тесты, сборку с esbuild, публикацию в npm и CI.

[csshell.dev](https://csshell.dev/), который был вдохновлён htmlhell.dev и собирает распространенные ошибки в CSS.

[Gridjs.io](https://gridjs.io/) — библиотека для создания таблиц и работы с ними. Как раз вышла четвертая мажорная версия.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

Откроет рубрику релиз [Ember.js 3.26](https://blog.emberjs.com/ember-3-26-released/). Это релиз с багфиксами, улучшениями производительности и несколькими приготовлениями к релизу 4.0. Новых фич в этой версии не было.
</ParagraphWithImage>

ESLint обновился до версии [7.25](https://github.com/eslint/eslint/releases/tag/v7.25.0). В этом выпуске обновили зависимости, документацию и добавили небольшое улучшение для правила no-unused-vars.

Вышел дистрибутив [Ubuntu 21.04](https://lists.ubuntu.com/archives/ubuntu-announce/2021-April/000268.html). Напомню, что это не LTS-версия; по идее, LTS станет 22 версия ОС. В этом выпуске появилась темная тема, поддержка Microsoft SQL Server и Flutter SDK. Я уже рассказывал о том, что фокус в разработке приложений для Ubuntu сместился на Flutter — его SDK позволит быстро публиковать Flutter-приложения для Linux-пользователей.

Также отмечу релизы ядра [Linux 5.12](https://lkml.org/lkml/2021/4/25/225), [ChromeOS 90](https://chromereleases.googleblog.com/2021/04/stable-channel-update-for-chrome-os_21.html) и [GraalVM 21.1](https://medium.com/graalvm/graalvm-21-1-96e18f6806bf).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

Недавно я рассказывал о том, как при помощи GitHub Actions на сервера GitHub подсаживали майнеры крипты. В блоге GitHub появилась [статья](https://github.blog/changelog/2021-04-22-github-actions-maintainers-must-approve-first-time-contributer-workflow-runs/) о том, как с этим бороться. Если коротко, pull request с workflow от нового контрибьютора будет требовать подтверждения вручную от другого контрибьютора с правами на запись. А сам workflow до этого подтверждения не запустится. В блоге GitHub есть больше подробностей о причинах введения новой фичи и небольшая техническая инструкция.
</ParagraphWithImage>

Появилась страница о том, [как начать участвовать в проекте MDN](https://developer.mozilla.org/ru/docs/MDN/Contribute/Getting_started). По ссылке вы найдете короткую инструкцию, а также типы возможных задач: есть задачи, которые требуют навыков программирования или работы с текстом, а есть те, где пригодится и то, и другое. Выбрать можно на свой вкус, а бывалые участники помогут.

Закроет выпуск новость, посвященная любителям open-source. Существует сообщество PINE64, которое разработало open-source смартфон PinePhone. Они представили первый релиз [InfiniTime](https://www.pine64.org/2021/04/22/its-time-infinitime-1-0/) — прошивки для умных часов PineTime. Это также open-source продукт, с первым мажорным релизом InfiniTime эти часы были обозначены как готовый для пользователей продукт. На часы установлена цена в 25$, но купить раньше августа их вряд ли получится — из-за нехватки компонентов их пока нет на складе. Тем не менее, может быть, вам захочется эти часы в будущем.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
