---
title: 'В этом выпуске: сезон advent-календарей, React 19, Vite 6, TypeScript 5.7, Firefox 133, React Router 7, Astro 5 и Deno 2.1. Да, в этом выпуске много мажорных релизов. Кроме них мы, конечно, затронем интересные материалы: посмотрим на классный пример небольшого опенсорса, новые фичи CSS 2024 года, просветимся в теме создания современных пакетов, посмотрим на создание эффекта матового стекла и приобщимся к созданию плагинов для Obsidian.'
soundcloudLink: 'https://soundcloud.com/csssr/react-19-typescript-57-firefox-133-vite-6-astro-5-deno-21-advent-kalendari'
date: '2024-12-15T00:00:00.000Z'
episodeNumber: 266
tag: 'news'
author: 'Ислам Виндижев'
---

Всем привет, это «Новости 512» от CSSSR. В этом выпуске: сезон advent-календарей, React 19, Vite 6, TypeScript 5.7, Firefox 133, React Router 7, Astro 5 и Deno 2.1. Да, в этом выпуске много мажорных релизов. Кроме них мы, конечно, затронем интересные материалы: посмотрим на классный пример небольшого опенсорса, новые фичи CSS 2024 года, просветимся в теме создания современных пакетов, посмотрим на создание эффекта матового стекла и приобщимся к созданию плагинов для Obsidian. Помимо этого, мы поговорим о том, как продвигается освобождение JS из цепких корпоративных лап Oracle и посмотрим на редизайн Mozilla.

К концу этого года я уже начал несколько заканчиваться, поэтому немного расскажу вам об окончании года. До конца года точно будет ещё один выпуск — возможно, это будут итоги года, возможно нет. Потом, после новогодней паузы, мы встретимся с вами уже 10 января. Спасибо, что слушаете, всем мягкого завершения года!

<ParagraphWithImage imageName="laptopNews" >
  ### Интересные публикации

Google выпустил [CSS Wrapped 2024](https://chrome.dev/css-wrapped-2024/). Это ежегодный сборник новых фич CSS с классными примерами и компактными описаниями. В этом году новых фич выделили аж 17, к каждой, как я уже говорил, прилагается пример, описание и индикатор поддержки браузерами. Фичи так же скомпонованы в разделы, больше половины фич пришлось на улучшение developer experience. В общем, стоит посмотреть — может быть, вы что-то пропустили в этом году.
</ParagraphWithImage>

Юрий Уваров поделился на Хабре своим опытом создания библиотеки-календаря на JS и TS. Календарь называется [Vanilla Calendar Pro](https://habr.com/ru/articles/862216/). Vanilla, потому что без использования сторонних библиотек. Там нет особенной истории и деталей реализации. Это пример вклада в опенсорс, а сам код проекта вы можете увидеть в репозитории, ссылка на который есть в статье. Юрий, вы молодец!

Я уже несколько раз приносил вам материалы о том, как создавать и распространять современные JS-библиотеки. Этот материал тоже на эту тему. Никита Ульянов в блоге Ozon Tech [рассказал](https://habr.com/ru/companies/ozontech/articles/857954/) о форматах библиотек и в каких случаях и для каких сред применения лучше использовать разные форматы. Кроме того, автор рассказывает о создании типизированного API для библиотек. Например, браузер, серверная среда, другой скрипт — во всех этих средах можно использовать библиотеки, Никита приводит рекомендуемые сетапы для разных случаев. Бонусом стали ссылки на другие материалы по теме.

Следующий материал практический. В блоге Deno была опубликована [статья](https://deno.com/blog/build-solidjs-with-deno) о создании приложения на связке Solid.js и Deno. Приложение посвящено динозаврикам. Вы создадите приложение на Solid.js с использованием Vite и сделаете простенький бэкенд. В общем, если хотелось попробовать — самое то.

Джулия Эванс (Julia Evans) написала статью о том, [как импортировать библиотеки без использования систем сборки](https://jvns.ca/blog/2024/11/18/how-to-import-a-javascript-library/). Вы можете сказать: «Но мы же придумали это всё, чтобы было удобно». Тем не менее вы вполне можете столкнуться с такой ситуацией. Джулия делает обзор способов, перечисляет все полезные инструменты и подходы, а также приводит примеры с тремя разными библиотеками.

Тревор Ласн (Trevor I. Lasn) написал небольшую заметку об одном из новых API. Речь идёт о [Scheduler API](https://www.trevorlasn.com/blog/javascript-scheduler-api), который позволяет планировать JS-таски в целях улучшения пользовательского опыта или оптимизации производительности. Внутри примеры и кейсы. Пока он поддерживается только в Chromium-браузерах, но в целом штука интересная.

В вебе мы всё чаще сталкиваемся с созданием сложных и красивых эффектов. Один из таких — эффект матового стекла. Тайлер Леонхардт (Tyler Wolf Leonhardt) [рассказал о создании такого эффекта](https://www.tyleo.com/html-glass.html), подробно и пошагово описав его создание. Получилось очень интересно, я вообще люблю такие разборы, потому что они показывают логику того, как решалась задача. Приложу для вас [ссылку на оригинал](https://www.tyleo.com/html-glass.html) и [перевод на Хабре](https://habr.com/ru/articles/861290/).

INP или Interaction to Next Paint — одна из метрик Core Web Vitals, которая означает отзывчивость страницы на действия пользователя после рендера. Как улучшить этот показатель, в серии из двух статей рассказывает Якоб Грёб (Jacob 'Kurt' Groß). [Первая часть](https://kurtextrem.de/posts/improve-inp) посвящена теоретическим основам показателя и его работе в целом, раскрывает основные понятия. [Вторая часть](https://kurtextrem.de/posts/improve-inp-react) посвящена улучшению показателя в проектах с React, но в принципе работает и для других фреймворков.

Notion ушёл, и все стали искать альтернативы. Obsidian привлёк многих, и даже те, кто раньше не были энтузиастами подобных систем, стали им пользоваться. Одно из преимуществ Obsidian — огромное количество плагинов, которые можно разрабатывать самостоятельно. Поэтому вот вам статья в двух частях о разработке плагинов. В [первой части](https://habr.com/ru/articles/861230/) пишутся три небольших плагина и делается введение в разработку плагинов, а [во второй](https://habr.com/ru/articles/862166/) пишется финальный босс-плагин, как выразился сам автор. Если вы пользуетесь Obsidian и хотите максимально кастомизировать его под себя, этот мини-цикл как раз для вас.

Ближе к завершению рубрики обращу ваше внимание на два инструмента. Первый — [ESLint Plugin Perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist), который отсортирует ваш код либо в алфавитном порядке, либо по длине строки, вариант для настоящих перфекционистов. А второй — [React Scan](https://react-scan.com/), решение для автоматического поиска проблем производительности в React-приложениях.

А завершит рубрику [статья-размышление](https://habr.com/ru/articles/860656/) о том, какие ошибки можно совершить, пытаясь быть слишком хорошим и правильным программистом во время написания кода. Автор Дмитрий на Хабре делится своими собственными ошибками и рассказывает о том, что не всегда всё работает, как ожидается, и что не стоит усложнять, использовать библиотеки на каждом шагу и гнаться за универсальными решениями.

<ParagraphWithImage imageName="manWithLaptop">
  ### Новости релизов

Доступен браузер [Firefox 133](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/133). В этом релизе была включена защита от трекинга с использованием редиректов в `strict`-режиме. Тег вьюпорта <meta> теперь поддерживает атрибут interactive-widgets. Объект `Uint8array` теперь поддерживает ряд методов для упрощения конвертации между строками и массивами байт. Помимо этого, был представлен ряд доработок по поддержке браузерных API, исправления багов и устранения уязвимостей.
</ParagraphWithImage>

[React 19](https://react.dev/blog/2024/12/05/react-19) наконец-то стабилен. Практически весь год мы говорили о его новых фичах, таких как серверные компоненты, экшены и новые хуки, новые API и другие. Сегодня я не буду на них подробно останавливаться. В описании выпуска вы найдёте ссылки на релиз на английском и [перевод на Хабре](https://habr.com/ru/articles/865416/).

[TypeScript 5.7](https://devblogs.microsoft.com/typescript/announcing-typescript-5-7/) ([перевод на Хабре](https://habr.com/ru/articles/861126/)) уже доступен. В этом релизе появились проверки на никогда не инициализированные переменные, фича переписывания относительных путей импортов, а также новая опция `es2024` для флагов `--target` и `--lib`. Больше подробностей — в блоге TypeScript.

Vite отметился [релизом шестой мажорной версии](https://vite.dev/blog/announcing-vite6). Сама команда называет этот релиз самым значительным со времён второй версии. Появилось дефолтное значение для `resolve.conditions`, опция `json.stringify` получила новое дефолтное значение `auto`, был обновлён `post-css-config`.

Команда фреймворка Astro объявила о выходе [пятой мажорной версии](https://astro.build/blog/astro-5/). Content Layers и серверные острова теперь считаются стабильными, упростили пререндеринг и добавили модуль `astro:env` для управления конфигурацией и разными переменными окружения. Также уже поддерживается Vite 6.

Вышел [Deno 2.1](https://deno.com/blog/v2.1). В этом релизе представили график поддержки LTS-версий, что очень важно для команд. Так, версия 2.1 станет первой LTS-версией и будет поддерживаться 6 месяцев, а следующей станет версия 2.6. Была представлена поддержка WASM-модулей первого класса: теперь WASM-модули можно подключить как обычный пакет. Сильно прокачали `deno task` и показали ряд других улучшений. Подробнее — в блоге Deno.

В [Node.js 22.12.0](https://nodejs.org/en/blog/release/v22.12.0) поддержка импорта ES-модулей через require больше не экспериментальная. Также была добавлена поддержка ArrayBuffer с изменяемым размером.

Помимо этого, отмечу в этом выпуске релизы Node.js [20.18.1](https://nodejs.org/en/blog/release/v20.18.1), [23.3.0](https://nodejs.org/en/blog/release/v23.3.0) и [React Router 7.0](https://remix.run/blog/react-router-v7).

<ParagraphWithImage imageName="laptopNews" >
    ### Другие новости

Декабрь, очевидно, сезон подарков, новогоднего настроения и, как следствие, адвент-календарей. Вы сами прекрасно знаете, что в вебе их тоже предостаточно. Я собрал для вас несколько адвент-календарей, посвящённых [программированию в целом](https://adventofcode.com/), [HTML](https://www.htmhell.dev/adventcalendar/), [CSS](https://www.adventofcss.com/), [JS](https://www.adventofjs.com/) и [TypeScript](https://www.adventofts.com/). Челленджи уже начались, в некоторых уже открыта половина заданий, но присоединиться никогда не поздно. Все ссылки есть в описании выпуска, дерзайте!
</ParagraphWithImage>

Как-то раз я упоминал инициативу по «освобождению» торговой марки JavaScript от Oracle. Инициатива двигается, и [была подана официальная петиция](https://deno.com/blog/deno-v-oracle) регулятору торговых марок США. Пока не совсем понятно, чем это закончится, потому что Oracle, по всей видимости, [собирается её оспаривать](https://deno.com/blog/deno-v-oracle/20241204-notice-of-appearance.pdf). Логика может быть сугубо корпоративной: раз кто-то пытается высвободить торговую марку, значит, кому-то это надо, а значит, не отдадим. Будем надеяться, что это будет не так.

Кажется, уходит эпоха огненной лисы и приходит эра зелёного динозавра. Mozilla представила [обновлённый корпоративный дизайн](https://blog.mozilla.org/en/mozilla/mozilla-brand-next-era-of-tech/). В нём доминируют чёрный, белый и зелёный цвета. Новый логотип похож на зелёный флажок, который должен напоминать динозавра. На фоне массовых сокращений, оптимизаций, закрытия подразделений и направлений это, конечно, самое нужное — сделать редизайн. Вот такие дела.

На сегодня это всё. Всем пока и до встречи в следующем выпуске.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)