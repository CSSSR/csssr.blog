---
title: 'В этом выпуске: как исполняется JS-код, Deno 1.14, туториалы по Fastly, как избавиться от старых подходов при помощи современного CSS, Virtual Keyboard API, лазерный интернет в Африке от Google.'
soundcloudLink: 'https://soundcloud.com/csssr/ispolnenie-js-deno-114-tutorialy-po-fastify-virtual-keyboard-api-lazernyy-internet-v-afrike'
date: '2021-09-17T00:00:00.000Z'
episodeNumber: 190
tag: 'news'
author: 'Ислам Виндижев'
---

<ParagraphWithImage imageName="manWithLaptop">
  ### Интересные публикации

Валерий Удодов в своем блоге написал статью о том, [как исполняется JavaScript-код](https://valerii-udodov.com/posts/run-javascript-run/). Он разбирает вопрос, начиная с движка, потом касается потока выполнения, потока событий (или Event Loop), тасков, микро- и макротасков. В итоге он приходит к браузеру. В начале статьи Валерий приводит пример с промисом, setTimeout и обычной командой, его же в конце он и разбирает ещё раз с учетом того, что уже рассказал. Внутри много схем, подробное объяснение важных нюансов работы JavaScript и много примеров. Статья получилась просто отличная, на быстрое чтение уйдёт минут 10-15, но будьте готовы заварить чашечку чая и разбираться часочек, чтобы всё хорошо понять.
</ParagraphWithImage>

В прошлом выпуске я говорил о выходе V8 9.4, в котором стали доступны [блоки инициализации статических классов](https://2ality.com/2021/09/class-static-block.html). Разбор в своем блоге опубликовал Аксель Раушмаер (Axel Rauschmayer). Если упростить, то фича служит для экземпляров статических классов своеобразным конструктором. Почему этот пропозал вообще появился и какую проблему решает, читайте подробнее в статье Акселя.

Шахар Талми (Shahar Talmi) написал статью [о микрофронтендах](https://indepth.dev/posts/1477/taking-micro-frontends-to-the-next-level) на React. Он работает в Wix и рассказывает о микрофронтендах в контексте административной панели Wix. Шахар рассматривает много тем: интеграцию микрофронтендов, производительность и developer experience, тестирование и даже мониторинг. Достаточно интересный и комплексный кейс.

В блоге web.dev Филип Уолтон (Philip Walton) и Йоав Вайс (Yoav Weiss) ответили на частые вопросы о том, [как на Web Vitals влияет подход SPA](https://web.dev/vitals-spa-faq/) при разработке приложений. Вопросов оказалось достаточно много. Оказалось, что для многостраничных сайтов часто показатели выше, чем для SPA. Авторы отмечают, что это не обязательно означает, что нужно отказаться от SPA, и что Web Vitals продолжат развивать в сторону более справедливой оценки SPA по сравнению с многостраничниками.

Марсель Моро (Marcel Moreau) опубликовал на SmashingMagazine статью о том, как можно [отказаться от некоторых псевдоклассов](https://www.smashingmagazine.com/2021/09/reducing-need-pseudo-elements/) при помощи возможностей современного CSS. В качестве примеров он приводит кнопки с углами, заливку кнопок по ховеру или фона. Для каждого случая он показывает версию реализации с псевдоэлементами и без них. Обратите внимание, автор ни в коем случае не говорит, что нужно перестать использовать псевдоэлементы, но стоит обращать внимание на сценарии, когда возможна замена.

Следующая статья тоже о том, как использовать меньше старых подходов. На этот раз речь идет [об абсолютном позиционировании](https://ishadeed.com/article/less-absolute-positioning-modern-css/). Ахмад Шадид (Ahmad Shadeed) рассматривает примеры разметки, когда элементы накладываются друг на друга, и центрирование. Кейсов достаточно много, и, как и в прошлой статье, на каждый есть реализация с абсолютным позиционированием и без. Ахмад отмечает, что иногда использовать абсолютное позиционирование — рациональнее, и приводит примеры таких случаев.

Возможно, вы уже интересовались Fastify — фреймворком для разработки на Node.js, который набирает популярность. Этот материал — видео на YouTube, в котором за 4 минуты реализуется [аутентификация на Fastify](https://www.youtube.com/watch?v=YxiWBFQUwCQ) с применением библиотеки Passport. Если вы ещё не смотрели в сторону Fastify, определённо стоит это сделать.

Продолжая тему Fastify. Саймон Плендерлит (Simon Plenderleith) в своём блоге опубликовал часовой [воркшоп по фреймворку](https://simonplend.com/workshop-recording-get-started-with-fastify/), в котором он создает базовый сервер и простой API. Отличное видео для старта работы с технологией.

Ещё немного практики. Адам Аргайл (Adam Argyle) в очередной статье своей серии про реализацию разных компонентов создает [компонент-кнопку с выпадающим меню](https://web.dev/building-a-split-button-component/). Как всегда, он учитывает доступность и призывает создать свою версию компонента.

Ингвар Степанян (Ingvar Stepanyan) рассказал о том, [как паковать ресурсы](https://web.dev/bundling-non-js-resources/), которые не касаются JavaScript. Речь идет о шрифтах, CSS, изображениях, JSON и WebAssembly. Ингвар рассматривает разные виды импортов и механизмы их работы, после чего делает небольшой обзор сборщиков и их возможностей.

Томас Штайнер (Thomas Steiner) и Стивен Щур (Stephen Stchur) рассказали о том, [как управлять событиями в JavaScript](https://web.dev/eventing-deepdive/). В частности, они рассматривают работу методов Event.stopPropagation() и Event.preventDefault(). Чтобы разобраться, они начинают с самого механизма событий и приводят примеры, а после этого объясняют, как работают методы и в каком случае какой стоит использовать.

Существует такая проблема: клавиатура телефона иногда перекрывает нужную часть контента на экране, а иногда и вовсе вызывает изменение вьюпорта. Часто это случается и из-за неосторожного нажатия. Решить эту проблему призван Virtual Keyboard API, который позволяет взаимодействовать с клавиатурой из JavaScript-кода. Об этом целых две статьи в этом выпуске: Томаса Штайнера (Thomas Steiner) на [web.dev](https://web.dev/virtualkeyboard/) и Брамуса Ван Дамме (Bramus Van Damme) [в его блоге](https://www.bram.us/2021/09/13/prevent-items-from-being-hidden-underneath-the-virtual-keyboard-by-means-of-the-virtualkeyboard-api/). Пока этот API поддерживает только Chrome 94, другие браузеры пока не интересовались этой фичей.

Эли Слоим (Elie Sloïm) написал статью [о контроле качества в вебе](https://www.smashingmagazine.com/2021/09/journey-into-web-quality-assurance/), и это не про технические аспекты тестирования. Дело в том, что когда мы говорим «контроль качества», мы часто вспоминаем только про тестирование верстки и функциональности, иногда вспоминаем про контент. Эли же в своей статье дает широкий обзор аспектов, которые требуют контроля качества. Всего он выделяет 5 аспектов: видимость, восприятие, технический аспект, контент и сервис. Он делит их на UI и UX категории, а также дает расшифровку для каждой группы. Получилось подробно и достаточно интересно, помогает задуматься, что могло быть упущено в контроле качества того или иного продукта.

<ParagraphWithImage imageName="laptopNews" >
  ### Новости релизов

[Deno 1.14](https://deno.com/blog/v1.14) доступен для использования. В этой версии была расширена поддержка Web Crypto API, deno lint и deno fmt теперь можно конфигурировать, был стабилизирован API веб-сокетов, объекты ArrayBuffer теперь можно передавать между потоками без копирования, что сильно ускорит их передачу. Версия V8 была обновлена до 9.4, также была добавлена поддержка TypeScript 4.4. Были и другие нововведения, больше о них — в официальном блоге Deno.
</ParagraphWithImage>

Node.js тоже порадовала нас парочкой релизов. В версии [16.9.0](https://nodejs.org/en/blog/release/v16.9.0/) подвезли Corepack — скрипт, который должен позволить использовать pnpm и Yarn без их установки, как это сейчас умеет делать npm. Больше подробностей — на странице релиза. Следом выкатили версию [16.9.1](https://nodejs.org/en/blog/release/v16.9.1/), которая исправила небольшую регрессию, вызванную переходом на V8 9.3.

Немного об устранении уязвимостей. Вышла версия [Chrome 93](https://chromereleases.googleblog.com/2021/09/stable-channel-update-for-desktop.html) с устранением двух уязвимостей нулевого дня и ещё 9 менее опасных проблем. Также доступен релиз веб-сервера [Apache 2.4.49](https://www.mail-archive.com/announce@httpd.apache.org/msg00161.html), в котором были устранены 5 уязвимостей.

Также отмечу релиз фреймворка [Laravel 8.61](https://laravel-news.com/laravel-8-61-0).

<ParagraphWithImage imageName="laptopNews" >
  ### Другие новости

Проект Google X связал [лазерным интернетом](https://x.company/blog/posts/taara-beaming-broadband-across-congo/) два африканских города — Киншасу и Браззавиль. Скорость достигала 20 Гбит/с на расстоянии 10 километров. Интересная история: между городами протекает река Конго, самая глубокая река в мире, и это не позволяло провести кабель. В блоге самого проекта подробно описывается кейс и устройства, при помощи которых был проведен воздушный канал. Надежность связи составила 99,99%. Кроме того была составлена карта мира, на которой отмечены места, где такая технология может особенно пригодиться и есть подходящие для ее применения погодные условия.
</ParagraphWithImage>

Ещё одна новость [о судебных приставах](https://vc.ru/legal/294404-sudebnye-pristavy-prinuditelno-vzyshchut-s-twitter-8-9-mln-rubley-socset-ne-vyplatila-ni-odnogo-shtrafa-v-rossii-za-god), теперь она касается Twitter. Российский суд постановил в принудительном порядке взыскать почти 9 млн рублей с компании. Посмотрим, что из этого получится.

И, конечно, новость, связанная с презентацией Apple, но не так, как вы подумали. Автор клавиатуры для Apple Watch FlickType Коста Элефтериу (Kosta Eleftheriou) планирует подать [в суд на яблочную компанию](https://vc.ru/tech/294021-apple-pered-anonsom-polnoformatnoy-klaviatury-dlya-watch-series-7-zablokirovala-storonniy-analog), обвиняя ее в плагиате своего приложения. Если коротко, ранее компания предлагала его выкупить, но разработчик отказался. В итоге последнее обновление приложения в AppStore отклонили, зато создали свое, которое теперь есть в седьмых Apple Watch. Это не первый случай, когда Apple проворачивает подобную историю с хорошим сторонним приложением, но в текущих условиях это выглядело как-то совсем плохо. Сомневаюсь, что у разработчика получится отсудить что-то у Apple, но кто знает.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
