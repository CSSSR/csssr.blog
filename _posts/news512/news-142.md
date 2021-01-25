---
title: 'В этом выпуске: компиляция Svelte в голове, сравнение двадцати JS-фреймворков, создание хороших форм, подсказки по написанию TypeScript-кода и оптимизация загрузки изображений. Также мы поговорим про важное security-обновление Laravel и релизы сборщиков Webpack и Snowpack.'
soundcloudLink: 'https://soundcloud.com/csssr/snowpack-3-security-obnovleniya-laravel-nodejs-1560-20-js-freymvorkov-chistyy-kod-na-ts-ssr'
date: '2021-01-19T00:00:00.000Z'
episodeNumber: 142
tag: 'news'
author: 'Ислам Виндижев'
---

<Note>
  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)
</Note>

В этом выпуске: компиляция Svelte в голове, сравнение двадцати JS-фреймворков, создание хороших форм, подсказки по написанию TypeScript-кода и оптимизация загрузки изображений. Также мы поговорим про важное security-обновление Laravel и релизы сборщиков Webpack и Snowpack.

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

Первый материал этого выпуска — статья [о компиляции Svelte в голове](https://lihautan.com/compile-svelte-in-your-head-part-1/). Разработчик Тан Ли Хау (Tan Li Hau) написал статью из трех частей, в которых разбирает принципы работы Svelte. Он начинает с самого простого примера с одним компонентом и постепенно усложняет разбор. Затрагиваются реактивность, работа Svelte до версии 3.16 и после, а также компиляция в JavaScript. Статья дает хорошее представление об устройстве Svelte и о том, чем он отличается от других фреймворков.
</ParagraphWithImage>

Следующая статья — [туториал по](https://habr.com/ru/post/527310/) SSR Сергея Александрова. Автор разбирает SSR и его влияние на SEO, переносит React-приложение на SSR и рассказывает, как подружить SSR с Redux Saga. Также в статье присутствует раздел с настройкой Webpack 5 для работы с SSR и разбираются тонкости работы с этим подходом.

Мальте Убл (Malte Ubl) написал статью [про оптимизацию загрузки изображений](https://www.industrialempathy.com/posts/image-optimizations/). Автор разбирает, как избежать сдвига контента, реализовать ленивую загрузку изображений, работать с кешированием, использовать новый формат AVIF и применять размытые заглушки. Также Мальте рассказывает, как оптимизировать потребление ресурсов процессора. Получилось достаточно коротко, но полезно и по делу.

Следующий материал — [сравнение производительности фреймворков](https://medium.com/javascript-in-plain-english/javascript-frameworks-performance-comparison-2020-cd881ac21fce) от Райана Карниато (Ryan Carniato). Он сравнивает целых 20 фреймворков по нескольким показателям: производительности, потреблению памяти и времени старта приложения. Первая тройка — фреймворки Solid, HyperApp и Inferno, Svelte на четвертом месте.

Энтони Рикод (Anthony Ricaud) на perfplanet опубликовал статью [о техниках HTML и CSS, которые помогут уменьшить использование JS](https://calendar.perfplanet.com/2020/html-and-css-techniques-to-reduce-your-javascript/). Автор рассматривает несколько проблем, которые часто решают при помощи JS, и приводит нативное решение. Например, затрагиваются ленивая загрузка изображений, плавный скролл и другие.

Стефан Баумгартнер (Stefan Baumgartner) написал серию из четырех статей о том, [как сделать свой код на TypeScript лаконичным и понятным](https://fettblog.eu/tidy-typescript-avoid-traditional-oop/). Стефан рассказывает, почему стоит избегать стандартных паттернов ООП, говорит о работе с дженериками и делится своим мнением о том, почему стоит предпочитать union types и алиасы типов.

[О семи способах тестирования доступности](https://christianheilmann.com/2021/01/11/seven-ways-to-test-for-accessibility-of-your-web-site-with-browser-developer-tools/) в своем блоге пишет Кристиан Хеилман (Christian Heilmann). Речь идет о Google Chrome и браузерах на Chromium. Затрагиваются симуляция дефектов зрения, проверка контрастности, дерево доступности и еще несколько аспектов отладки доступности.

Рубрику завершает Остин Гил (Austin Gil) и его серия статей о том, [как правильно создавать формы](https://austingil.com/how-to-build-html-forms-right-semantics/). Остин начинает с семантики и доступности, рассказывает о стилизации форм и хорошем UX для форм. Также он поднимает вопрос безопасности.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

Вышла версия [Node.js 15.6.0](https://nodejs.org/en/blog/release/v15.6.0/). В этой версии продолжается развитие AbortSignal, также были обновлены модули crypto, doc, http и process. Кроме этого выкатилась небольшая пачка мелких фиксов.
</ParagraphWithImage>

Ember отличился [релизом версии 3.24](https://blog.emberjs.com/ember-3-24-released/). Рендер-движок был обновлен до версии 0.65, а в интерфейс DeprecationOptions добавились новые ключи for и since. Также были добавлены багфиксы, а некоторые фичи помечены как устаревшие.

Вышла [версия 3.0 сборщика Snowpack](https://www.snowpack.dev/posts/2021-01-13-snowpack-3-0). Snowpack умеет транспилировать файлы точечно, и это ускоряет модификацию проекта целиком. В третью версию были добавлены Streaming Imports. Эта фича позволяет загружать и кешировать npm-модули без явной команды npm install. Также с этой версии Snowpack может собирать оптимизированные production-билды с помощью esbuild. Сборщик выглядит довольно неплохо, однозначно стоит хотя бы поинтересоваться его возможностями.

Webpack обновился до версии [5.15](https://github.com/webpack/webpack/releases/tag/v5.15.0). В этом релизе ускорили разрешение зависимостей билда, также функция externals теперь может возвращать промис. Помимо этого было представлено несколько небольших багфиксов.

Вышли версии [Laravel 6.20.11, 7.30.2, 8.22.1](https://blog.laravel.com/security-laravel-62011-7302-8221-released). Это важное security-обновление, которое затронуло все поддерживаемые версии. Создатель Laravel Тейлор Отвелл (Taylor Otwell) настоятельно порекомендовал обновить версию фреймворка.

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

Google сообщила в блоге разработчиков, что с 15 марта 2021 года компания [ограничит использование Google API](https://habr.com/ru/news/t/537828/) в сторонних браузерах на основе движка Chromium. Среди заблокированных функций внутреннего API Google будут: привязка к учетной записи в Google, механизм Click to Call и сервис синхронизации настроек и данных пользователя. Google не пояснила, какие именно браузеры лишатся доступа к приватным API, думаю, что ближе к дате это прояснится.
</ParagraphWithImage>

Elasticsearch планирует [поменять лицензию с Apache 2.0 на SSPL и коммерческую Elastic License](https://www.elastic.co/blog/licensing-change). Основная причина — ограничить возможности облачных провайдеров продавать Elasticsearch как услугу. Проблема в том, что облачные провайдеры перепродают готовое открытое решение, не участвуя в разработке продукта и жизни сообщества. В итоге разработчики ничего не получают. Что выйдет из этого — пока непонятно. Будем надеяться, что получится добиться более справедливого использования Elasticsearch и Kibana.

<Note>
  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
</Note>
