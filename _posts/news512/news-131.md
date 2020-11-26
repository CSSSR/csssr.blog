---
title: 'В этом выпуске: нестареющий лонгрид о работе современных браузеров, Vue Testing Library, визуализация работы git на D3, интересы Google и Web Vitals, а также минорные релизы мажорных фреймворков. '
soundcloudLink: 'https://soundcloud.com/csssr/chrome-87-firefox-83-typescript-41-aria-label-html-formy-css-gradienty-cssbattle-2020'
date: '2020-11-27T00:00:00.000Z'
episodeNumber: 131
tag: 'news'
author: 'Ислам Виндижев'
---

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

  Нестареющий [лонгрид Марико Косака о работе современных браузеров](https://developers.google.com/web/updates/2018/09/inside-browser-part1). Статья, что называется, от и до. Начинается с работы CPU, GPU, потоков, процессов и архитектуры браузера. Также рассматриваются запросы, загрузка ресурсов, вычисление стилей и отрисовка. Если не читали — рекомендую, если читали — не стесняйтесь освежить в памяти. К оригиналу прилагаем [перевод на Хабре](https://habr.com/ru/post/526696/).
</ParagraphWithImage>

Филипп Уолтон написал статью о том, [как оптимизировать свои страницы для bfcache](https://web.dev/bfcache/). Это кеш, из которого извлекаются страницы при нажатии «Вперёд» и «Назад», что позволяет сделать переход почти мгновенным. В Chrome 87 он будет включен для всех пользователей Android.

Команда Next.js в своём блоге опубликовала статью о том, [как инкрементально перевести свой проект на Next.js](https://nextjs.org/blog/incremental-adoption). Предлагается несколько стратегий. Можно написать новое Next-приложение, которое будет указывать на некоторые пути старого. И наоборот — настроить подпути так, чтобы они вели на новые части приложения, написанные на Next.js. Также рассматривается вариант с микрофронтендами и Vercel.

Если ещё не пользовались Effector.js — это ваш шанс. Библиотека позиционируется как высокопроизводительный реактивный state-manager. На dev.to был опубликован [базовый гайд по Effector.js](https://dev.to/yanlobat/effector-s-beginner-guide-3jl4), в котором рассматриваются сущности и API библиотеки. Также автор старается развеять несколько недопониманий об Effector.

Инструменты для тестирования, которые поставляются вместе с фреймворками, постепенно укрепляют свои позиции. На Smashing Magazine вышла [статья о Vue Testing Library](https://www.smashingmagazine.com/2020/11/vue-applications-vue-testing-library/). В гайде рассказывается, почему стоит использовать библиотеку и как она работает. Рассматривается демо-приложение и принципы написания тестов. В конце статьи можно найти ссылки на дополнительные материалы.

[Визуализация работы git-команд на D3](https://onlywei.github.io/explain-git-with-d3). На странице есть небольшая sandbox-консоль, при выполнении визуальная схема меняется и наглядно поясняет, что произошло под капотом у git. Также можно манипулировать репозиторием в свободном режиме и протестировать любой сценарий для углубления понимания работы git.

Напоследок небольшая [страничка с разными шрифтами для редакторов кода](https://devfonts.gafi.dev/). На ней можно выбрать и сравнить разные шрифты, посмотреть, как они выглядят в разных цветовых темах, и найти ссылки для скачивания. Это open-source, в [репозиторий](https://github.com/Gaafar/dev-fonts) можно добавлять шрифты в коллекцию.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

  Двумя релизами на этой неделе отметился Node.js. LTS-ветка обновилась до [версии 12.20.0](https://nodejs.org/en/blog/release/v12.20.0/). Пропатчили модули crypto, fs, http и n-api. В current-ветке вышла [версия 15.3.0](https://nodejs.org/en/blog/release/v15.3.0/). В ней были доработаны модули dns, events, http и http2.
</ParagraphWithImage>

В релизе [Vue 3.0.3](https://github.com/vuejs/vue-next/releases/tag/v3.0.3) было исправлено несколько багов. В HMR исправлено обновление компонентов, в модуле runtime-core было исправлено принудительное обновление компонентов со статическими пропсами.

Минорный релиз [Angular 11.0.2](https://github.com/angular/angular/releases/tag/11.0.2) принёс новую большую пачку мелких фиксов после мажорного релиза.

Мини-релиз [React 17.0.1](https://github.com/facebook/react/blob/master/CHANGELOG.md#1701-october-22-2020). В этой версии был исправлен крэш фреймворка в IE 11. Надеюсь, вы уже не поддерживаете этот замечательный браузер.

17 ноября команда фреймворка Electron выпустила [11-й мажорный релиз](https://www.electronjs.org/releases/stable#11.0.0). Версия Chromium была обновлена до 87, V8 до 8.7, а NodeJS до 12.18.3. Были удалены несколько экспериментальных методов Browser View API и добавлена экспериментальная поддержка Apple Silicon.

Также на этой неделе состоялся [релиз nginx 1.19.5](http://nginx.org/en/CHANGES).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

  Мы несколько раз упоминали Web Vitals в наших выпусках. Сегодня рубрика начнётся со [статьи Кэти Миллер](https://sylormiller.com/posts/2020/core-web-vitals/), которая выражает свой скепсис по поводу новых метрик от Google. Если коротко, по её мнению Google выбрал как Web Vitals выгодные для себя и своего рекламного бизнеса метрики. Также они поддерживаются в полной мере только Chrome и браузерами на Chromium. Эти факторы создают давление на создателей сайтов и на пользователей.
</ParagraphWithImage>

В конце выпуска пара слов об [TIOBE](https://www.tiobe.com/tiobe-index/) — индексе популярности языков программирования. Python впервые вырвался на второе место. JavaScript и PHP без изменений, на 7-м и 8-м месте соответственно. R вышел на 9-е место, а язык Go с 20-го поднялся на 13-е. Ruby, напротив, слегка уступил позиции и упал с 11-го на 15-е.


Все ссылки на инфоповоды и сопутствующие публикации ищите в описании. С вами был Ислам Виндижев, до встречи в следующем выпуске.

<Note>
  ### Слушайте нас на любимой платформе
  [RSS подкаста](https://csssr.radio/rss/news512.rss)

  [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815)

  [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14)

  [SoundCloud](https://soundcloud.com/csssr/sets/512-news)

  [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)
</Note>

<Note>
  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
</Note>
