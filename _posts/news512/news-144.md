---
title: 'В этом выпуске: React Context vs Redux, Microsoft Edge 88, оптимизация SmashingMagazine, сборник ресурсов для фронтенд-разработчиков и VS Code Day 2021.'
soundcloudLink: 'https://soundcloud.com/csssr/edge-88-react-context-vs-redux-frontend-resursy-zapis-skriptov-puppeteer-vs-code-day-2021'
date: '2021-01-26T00:00:00.000Z'
episodeNumber: 144
tag: 'news'
author: 'Ислам Виндижев'
---

<Note>
  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)
</Note>

В этом выпуске: React Context vs Redux, Microsoft Edge 88, оптимизация SmashingMagazine, сборник ресурсов для фронтенд-разработчиков и VS Code Day 2021.

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

Адам Аргайл (Adam Argyle) на web.dev продолжает радовать нас серией статей про пользовательские интерфейсы. На этот раз речь пойдет про [навигационный сайдбар](https://web.dev/building-a-sidenav-component/). Адам рассказывает, как создал респонсивный кроссбраузерный сайдбар, который может работать как с JS, так и без и поддерживает навигацию при помощи клавиатуры. Автор объясняет логику, которой руководствовался, и пошагово описывает процесс. Конечно же, есть и [демо](https://gui-challenges.web.app/sidenav/dist/).
</ParagraphWithImage>

Марк Эриксон (Mark Erikson) — мейнтейнер Redux — написал статью о [React Context и Redux](https://blog.isquaredsoftware.com/2021/01/context-redux-differences/). Цель статьи — показать их отличия и пояснить, в каком случае что использовать. React Context — это относительно простой транспортный механизм для данных. Марк считает, что Context может подойти для небольших приложений, но его сложно использовать в больших проектах с командой. В то же время Redux позволяет проще управлять данными, обрабатывать сайд-эффекты и сериализовать данные. Также с Redux гораздо проще поддерживать кодовую базу и работать с состоянием в приложениях, где состояние обновляется часто. Статья длинная и подробная, хотя в самом начале есть короткая выжимка от автора. Я рекомендую прочесть текст целиком, чтобы разобраться в вопросе и составить своё мнение.

Виталий Фридман на SmashingMagazine рассказывает о том, [как этот самый SmashingMagazine оптимизировали и ускоряли](https://www.smashingmagazine.com/2021/01/smashingmag-performance-case-study/). Вы скажете, что все истории улучшения перформанса сайтов и веб-приложений похожи. Но в чем-то каждый случай индивидуален, и посмотреть всегда полезно. Оптимизация включала в себя масштабный рефакторинг CSS, сегментацию JS-кода и уменьшение его размера, а также работу с загружаемыми ресурсами в целом.

Штефан Юдис (Stefan Judis) опубликовал заметку об одной из новых фич Chrome DevTools 89. Речь идет [о записи скриптов Puppeteer](https://www.stefanjudis.com/blog/how-to-record-screen-actions-as-a-puppeteer-script/). Если совсем коротко — включаете запись и производите действия на странице, а записывающая утилита сразу пишет код на JS для точного воспроизведения этого сценария в Puppeteer. Фича интересная и может быть весьма полезна при отладке. Пока что она доступна как экспериментальная, и её нужно включить, чтобы попробовать. Как это сделать и как она выглядит в действии — в заметке Штефана.

Никита Чураков опубликовал серию статей, в которых собрал полезные для фронтенд-разработчика ресурсы. [Первая часть](https://habr.com/ru/post/533558/) называется «Основы», во [второй части](https://habr.com/ru/post/535184/) — интернет-ресурсы и полезные телеграм-каналы, [третья](https://habr.com/ru/post/536544/) посвящена литературе для разработчиков уровня Middle и выше, а [четвертая](https://habr.com/ru/post/538932/) — про изучение алгоритмов и структур данных. Возможно, вы найдете для себя что-то новое в подборках или захотите освежить старые знания.

Microsoft объявила о [VS Code Day 2021](https://code.visualstudio.com/vscode-day) — первом официальном мероприятии редактора VS Code. Как вы понимаете, мероприятие будет проходить онлайн, можно будет посмотреть на разработчиков редактора, узнать про новые фичи и послушать интересные доклады про лучшие практики работы с VS Code. Разговаривать будут много о чём: о работе с Docker из редактора, об интеграции VS Code и DevTools из Edge, о полезных трюках при работе с редактором. Трансляция пройдет в среду, 27 января в 19:00 по московскому времени.

Рубрику закрывает хит-парад [100 самых популярных CodePens 2020](https://codepen.io/2020/popular/pens/10) от, собственно, CodePen. По ссылке — только первая десятка, но вы, конечно же, можете полистать все. В подборке есть самые разные работы: от целых лейаутов воображаемых социальных сетей или газеты до игр на чистом CSS. Также много CSS-арта и коротких сниппетов с полезными штучками вроде тогглеров.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

Вышел [Microsoft Edge 88](https://docs.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel#version-88070550-january-21). Напомню, теперь это браузер на Chromium и стоит ожидать обновлений следом за обновлениями движка самого Chrome. В целом Edge в некоторой степени следует по пути Chrome и добавляет похожие фичи. 88-ой Edge умеет погружать неактивные вкладки в спящий режим для экономии ресурсов. В этом же релизе прокачали встроенный менеджер паролей, добавили возможность детальнее управлять приватностью и синхронизацию истории посещений и закладок между разными устройствами.
</ParagraphWithImage>

[Ruby on Rails 6.1.1](https://github.com/rails/rails/releases/tag/v6.1.1). В целом это maintenance-релиз, в ряде гемов были исправлены баги и внесены небольшие дополнения. Больше всего изменений — в Active Record, Action View и Active Pack.

Фреймворк Django отличился двумя релизами. Версия [3.1.5](https://www.djangoproject.com/weblog/2021/jan/04/bugfix-releases/) это багфикс релиз, в нем исправили краш при асинхронной обработки миддлвар и ещё 2 небольшие регрессии. Ещё один релиз — [альфа-версия 3.2](https://www.djangoproject.com/weblog/2021/jan/19/django-32-alpha-1-released/), на всякий случай команда фреймворка напоминает, что в продакшене на него обновляться ни в коем случае нельзя. Ждём бету.

Также отмечу релиз [GraalVM 21.0](https://medium.com/graalvm/graalvm-21-0-introducing-a-new-way-to-run-java-df894256de28).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

Разработчики из Microsoft, Google и Salesforce внесли предложение по [созданию нового элемента <popup>](https://github.com/MicrosoftEdge/MSEdgeExplainers/blob/main/Popup/explainer.md) для контекстных меню, всплывающих подсказок и других похожих случаев. Первый прототип хотят реализовать в Chromium.
</ParagraphWithImage>

Развивается история о войне Elasticsearch с «недобросовестными» облачными провайдерами. Elasticsearch [официально заявила](https://www.elastic.co/blog/why-license-change-AWS), что речь идёт конкретно об Amazon Web Services (какой сюрприз). AWS не остались в долгу и [ответили](https://aws.amazon.com/blogs/opensource/stepping-up-for-a-truly-open-source-elasticsearch/), что запустят собственный форк Elasticsearch и Kibana под лицензией Apache 2.0. Как выразились в компании, они намерены защитить настоящий open-source. Напомню, что Elasticsearch последовала примеру MongoDB и хочет лицензировать свои продукты лицензиями Elasticsearch и SSPL, что делает эти продукты уже не вполне open-source. По моему мнению, команда Elasticsearch просто не продумала модель монетизации своевременно и теперь окажется под большим давлением. Причем давлением как со стороны сообщества, так и от AWS. Что касается AWS, если они запустят свой форк, думаю, ничто не помешает им просто переименовать сервис и использовать этот самый форк в коммерческих целях. Посмотрим, чем закончится история и дойдет ли дело до судебных тяжб.

В заключение выпуска — [история о титаническом терпении](https://twitter.com/gkoberger/status/1351271003989544965). Автор пул реквеста ждал 7 лет, прежде чем напомнить мейнтейнеру репозитория, что его нужно смержить. Скриншот этой невероятно вежливой и терпеливой переписки вы найдёте в твите Грегори Кобергера (Gregory Koberger), который как раз и является мейнтейнером того репозитория.

<Note>
  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
</Note>