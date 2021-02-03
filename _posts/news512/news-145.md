---
title: 'В этом выпуске: Firefox 85, GitLab 13.8, Node.js 15.7.0, разница между null и undefined, управление приватностью GitHub Pages и Open Web Docs.'
soundcloudLink: 'https://soundcloud.com/csssr/firefox-85-gitlab-138-nodejs-1570-null-i-undefined-privatnost-github-pages-i-open-web-docs'
date: '2021-01-29T00:00:00.000Z'
episodeNumber: 145
tag: 'news'
author: 'Ислам Виндижев'
---

<Note>
  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)
</Note>

В этом выпуске: Firefox 85, GitLab 13.8, Node.js 15.7.0, разница между null и undefined, управление приватностью GitHub Pages и Open Web Docs.

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

Мэтт Хоббс (Matt Hobbs) написал статью [о важности порядка загрузки шрифтов при использовании preload](https://nooshu.github.io/blog/2021/01/23/the-importance-of-font-face-source-order-when-used-with-preload/). Исследует Мэтт ни много ни мало сайт Белого дома США. Он обнаружил 14 загружаемых файлов шрифтов и пошагово разбирает порядок запросов и проблемы в них. В итоге он предлагает решение проблем, ссылаясь на спецификации и рассказывая об особенностях работы со шрифтами и их форматами.
</ParagraphWithImage>

Глеб Михеев на Хабре опубликовал расшифровку доклада Алексея Охрименко [о восприятии производительности веб-сайтов](https://habr.com/ru/company/oleg-bunin/blog/538466/). Материал посвящен приемам, с помощью которых можно улучшить видимую производительность. Это радует пользователей и важно для владельцев интернет-ресурсов. Речь идет о том, как важно не блокировать пользователя, грамотно использовать оптические иллюзии и применять Optimistic Updates. Также есть немного о предугадывании действий пользователя и об использовании машинного обучения. Могу предупредить, что этими приемами нужно пользоваться осознанно и понимать, насколько тот или иной прием уместен на конкретном проекте.

В выпусках новостей давненько не было доктора Акселя. В этом будет. Аксель Раушмайер (Axel Rauschmayer) в своем блоге опубликовал статью [о разнице между null и undefined](https://2ality.com/2021/01/undefined-null-revisited.html). В ней рассказывается о том, как эти значения появились в JS, понятно, о разнице между ними и в каких случая какое значение лучше использовать. Всё это в лучших традициях Акселя: с кратким и четким погружением в спецификацию ECMAScript и небольшими примерами кода.

Штефан Баумгартнер (Stefan Baumgartner) продолжает писать о TypeScript. Его новая статья — [как писать на TypeScript с минимальной поддержкой типов](https://fettblog.eu/low-maintenance-types-typescript/). О чём речь: Штефан не любит писать много типов и аннотаций и иногда предпочитает писать на JS, добавляя TS там, где это необходимо. Конечно, он делает так не всегда. Эта статья как раз о тех случаях, когда такой подход вполне приемлем.

Мод Нальпаc (Maud Nalpas) на web.dev написала две статьи, посвященные протоколу HTTPS при локальной разработке. В некоторых случаях использовать HTTPS на локале всё-таки нужно, например, при работе по протоколу HTTP/2 и выше, работе с пакетами или API, которые требуют защищенного соединения. Первая статья посвящена как раз разбору кейсов, [когда HTTPS нужен при локальной разработке](https://web.dev/when-to-use-local-https/), а вторая статья — о том, [как именно это можно реализовать](https://web.dev/how-to-use-local-https/).

Следующий материал — о фреймворке Deno. Максим Жуков на Хабре опубликовал небольшой [туториал по написанию простого REST API с MongoDB](https://habr.com/ru/post/539212/). В качестве примера он использовал GitHub Gists API и несколько методов. Если вам интересен Deno, и вы не знали с чего начать — можно попробовать этот туториал.

Мэс Стоуман (Mads Stoumann) написал статью о том, [как управлять воспроизведением CSS-анимаций](https://css-tricks.com/how-to-play-and-pause-css-animations-with-css-custom-properties/). Он заинтересовался этим вопросом по двум причинам: потребление ресурсов и доступность. В статье он обосновывает причины и показывает, как управлять воспроизведением при помощи CSS и JavaScript, в том числе с использованием API IntersectionObserver.

Заключительная новость рубрики — от команды Laravel. Начиная с версии 8.25 фреймворк будет [поддерживать параллельное тестирование](https://laravel-news.com/parallel-testing). Используя встроенную команду artisan test с флагом --parallel, можно запустить прогоны тестов в нескольких процессах, что, естественно, увеличит скорость выполнения тестовых наборов.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

[Mozilla Firefox 85](https://hacks.mozilla.org/2021/01/january-brings-us-firefox-85/) увидел свет. В новой версии поддерживается <link rel="preload">, добавлено CSS свойство :focus-visible, вслед за остальными браузерами окончательно отключен Flash. Была добавлена защита от supercookies. Несколько изменений было внесено в API расширений для Firefox.
</ParagraphWithImage>

Доступно [Safari Technology Preview 119](https://webkit.org/blog/11525/release-notes-for-safari-technology-preview-119/). Была добавлена поддержка aspect-ratio и ряд других доработок CSS. Подправили скроллинг, продолжили работу над улучшением производительности JavaScript и приведению к стандарту. Несколько доработок также добавили в Web API и Web Inspector. По умолчанию включена функция распознавания речи.

Двумя релизами отметилась команда Node.js. В LTS-версии [10.23.2](https://nodejs.org/en/blog/release/v10.23.2/) обновили версию npm до 6.14.11. В версии [15.7.0](https://nodejs.org/en/blog/release/v15.7.0/) в модуле fs параметр position теперь может быть BigInt, в модуле buffer появился объект Blob, это первый шаг к консолидации с Blob Web API. Также доработке подвергся модуль http, и в документацию добавили новых коллабораторов.

Команда Nest.js продолжает работу над фреймворком. Вышли версии [7.6.6](https://github.com/nestjs/nest/releases/tag/v7.6.6) и [7.6.7](https://github.com/nestjs/nest/releases/tag/v7.6.7) — небольшие релизы с обновлением зависимостей. Напомню, что Nest.js — это фреймворк для разработки эффективных и масштабируемых серверных приложений на Node.js. Есть полная поддержка TypeScript, но можно писать и на JS. Мы и раньше иногда рассказывали о нём, но теперь будем следить за этим фреймворком внимательнее.

Webpack получил три небольших обновления: версии [5.16.0](https://github.com/webpack/webpack/releases/tag/v5.16.0), [5.17.0](https://github.com/webpack/webpack/releases/tag/v5.17.0) и [5.18.0](https://github.com/webpack/webpack/releases/tag/v5.18.0). Релизы были посвящены не только багфиксам и небольшим доработкам. В версии 5.17.0 добавили экспериментальную поддержку ленивой компиляции, а в версии 5.18.0 порефакторили хеширование модулей.

Новые версии Rollup — [2.37.0](https://github.com/rollup/rollup/releases/tag/v2.37.0) и [2.38.0](https://github.com/rollup/rollup/releases/tag/v2.38.0). В 2.37 — небольшие багфиксы, проверка модулей на сайд-эффекты и предупреждение о циклических зависимостях, которые могут вызвать неверный порядок исполнения. В патче 2.38 добавлен частичный tree-shaking объявленных переменных.

Следующий релиз — [GitLab 13.8](https://about.gitlab.com/releases/2021/01/22/gitlab-13-8-released/). Основное нововведение — редактор пайплайнов. Он позволяет выстраивать CI/CD пайплайны, обладает встроенным линтером и валидатором конфигураций. Также есть инструмент для визуализации пайплайнов. Разработчики отмечают, что это первая версия и они продолжат улучшать редактор. Ещё одно нововведение — внедрение метрик DORA для измерения DevOps-активностей. В частности, измеряются частота деплоев, время применения изменений, время восстановления работы и частота неудачных production-деплоев.

Завершает рубрику релизов небольшая новость от команды фреймворка Laravel. Разработчики рассказали, что переводят фреймворк на [годичный релизный цикл мажорных версий](https://laravel-news.com/yearly-release-cycle). Это значит, что Laravel 9 выйдет не в марте, а в сентябре, а Laravel 10 мы увидим уже в 2022 году.

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

Была основана организация [Open Web Docs](https://opencollective.com/open-web-docs/updates/introducing-open-web-docs). Цель организации — качественная документация для веб-технологий. Сейчас усилия будут сфокусированы на MDN Web Docs, в будущем планируется работать и над другой документацией. Организация спонсируется Google, Microsoft, Coil и частично Igalia вместе с Open Source Collective. Дополнительную поддержку окажут Samsung, Mozilla и W3C, или Консорциум Всемирной паутины. Это хорошие новости для сообщества и для MDN Web Docs в частности. С такой поддержкой сообществу технических авторов, вероятно, станет гораздо проще работать, а пользователям — изучать веб-технологии.
</ParagraphWithImage>

WebRTC получил [статус рекомендации от W3C](https://www.w3.org/2021/01/pressrelease-webrtc-rec.html.en). Напомню, WebRTC — это веб-фреймворк для организации взаимодействия в реальном времени с видео и аудио. Технология уже поддерживается всеми мажорными браузерами и платформами. Поддерживают и развивают ее крупнейшие игроки — Google, Microsoft, Apple и Mozilla. В браузерах WebRTC доступен как JavaScript API.

Новость от GitHub. Компания анонсировала [управление приватностью страниц GitHub Pages](https://github.blog/changelog/2021-01-21-access-control-for-github-pages/). Теперь страницы можно сделать закрытыми для всех, кроме пользователей репозитория. Администраторы могут управлять этой опцией. Есть дополнительная плюшка для администраторов организаций: они могут решать, смогут ли управлять видимостью страниц участники организации.

Google в последнее время сталкивается с мини-разоблачениями их «империи зла». Говорили уже и про рекламу, и про Web Vitals, и про персональные данные. На этот раз речь пойдет о [Google Safe Browsing](https://gomox.medium.com/google-safe-browsing-can-kill-your-startup-7d73c474b98d). Гонсало Саинц Трапага (Gonzalo Sainz Trápaga) в своей статье на Medium обвиняет Google в том, что компания может просто перекрыть кислород приложению или стартапу, добавив их в черный список и закрыв к ним доступ. И всё под видом заботы о безопасности пользователя.

Исследователи безопасности из компании Qualys нашли [критическую уязвимость в утилите sudo](https://blog.qualys.com/vulnerabilities-research/2021/01/26/cve-2021-3156-heap-based-buffer-overflow-in-sudo-baron-samedit). Она позволяет получить root-права без аутентификации. Исследователи заранее предупредили всех разработчиков дистрибутивов, и патчи уже должны быть выпущены. Уязвимость закрыта в версии sudo 1.9.5p2, так что не забудьте проверить свою версию sudo и обновиться при необходимости.

В конце выпуска — ещё одна небольшая новость от команды Node.js. Был запущен опрос [Node.js User Survey 2021](https://www.surveymonkey.com/r/nodesurvey21). Он посвящён в основном коммьюнити, обучающим ресурсам и смежным технологиям, если интересно — можно принять участие.

<Note>
  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
</Note>