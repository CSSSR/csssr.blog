---
title: 'В этом выпуске мы посмотрим на пару фронтенд-кейсов и другие материалы за последние две недели. Также поговорим про релиз Chrome 113, Angular 16 и свежий релиз Deno. Мы немного обсудим новый браузер от Opera — Opera One — и новую фичу от GitHub для подтверждения происхождения npm-пакетов.'
soundcloudLink: 'https://soundcloud.com/csssr/chrome-113-angular-16-opera-one-ethersjs-abortcontroller'
date: '2023-05-05T00:00:00.000Z'
episodeNumber: 233
tag: 'news'
author: 'Ислам Виндижев'
---

Всем привет, это «Новости 512» от CSSSR. Выпуск перед майскими получился компактным, с парой фронтенд-кейсов и интересными материалами для расширения кругозора. В этом же выпуске мы поговорим про релиз Chrome 113, Angular 16 и свежий релиз Deno. Мы немного обсудим новый браузер от Opera — Opera One — и новую фичу от GitHub для подтверждения происхождения npm-пакетов.

<ParagraphWithImage imageName="laptopNews" >
  ### Интересные публикации

В начале вас ждёт два кейса. [Первый](https://ishadeed.com/article/rebuild-featured-news-modern-css/) — кейс потенциальной модернизации раздела страницы новостного ресурса Vox News. Ахмад Шадид (Ahmad Shadeed) разбирает текущее устройство страницы и применяемые технологии. Он последовательно анализирует общее устройство страницы и главные компоненты. По обоим пунктам он предлагает реализацию с использованием современных возможностей CSS.
</ParagraphWithImage>

[Второй](https://habr.com/ru/articles/732406/) — ускорение SPA на Vue.js от Ильи Туева. На Хабре он поделился своим опытом оценки состояния приложения и его оптимизации. В принципе, никакой загадки: оптимизация загрузки ресурсов, устранение тяжёлых зависимостей, работа над метриками Web Vitals. Но помимо этого свою роль в оптимизации сыграли и редизайн, и переход на Vue 3. В итоге оценка Lighthouse Performance стала примерно в два раза больше.

Асинхронные операции всегда были тонким делом, а чтобы их отменить, зачастую нужно было использовать хаки и нестандартные подходы. Потом нам на помощь пришёл [AbortController](https://habr.com/ru/articles/731644/), ставший тем самым API, которым можно было пользоваться для отмены асинхронных операций. В материале — примеры применения и ряд советов о том, когда стоит или не стоит пользоваться AbortController.

Рич Харрис, создатель фреймворка Svelte, выступил с небольшим [докладом](https://www.youtube.com/watch?v=uXCipjbcQfM) о вебе в целом. Он поделился своей точкой зрения по ряду горячих тем, вокруг которых много споров: фреймворки, производительность, текущее состояние веба, JS и другие. Почему это здесь? Потому что мысли интересные. Центральная мысль заключается в том, что нужно правильно заботиться о пользователе и не строить карго культов на ровном месте. Советую посмотреть целиком, получилось интересно.

Следующие материалы не про фронтенд и помогут расширить кругозор.

Любите крутые паззлы? Вот история одного из них. Речь идёт [о поиске бага](https://habr.com/ru/companies/yandex/articles/729764/), который мешал работе DNS-сервера Unbound. Сергей Качеев в блоге Яндекса на Хабре подробно рассказывает о том, как баг в принципе отлавливался и как в итоге был исправлен. Эта статья — хороший пример углублённой диагностики; если вы интересуетесь SRE и серверными системами — обязательно загляните. Только осторожно: полчасика придётся потратить.

В блоге Альфа-банка было опубликовано продолжение статьи про XSS-атаки (про [первую часть с введением в XSS](https://habr.com/ru/companies/alfa/articles/717896/) я уже рассказывал в одном из предыдущих выпусков). Во [второй части](https://habr.com/ru/companies/alfa/articles/731394/) уже более подробный разбор с практикой выявления уязвимостей. Здесь разбираются потенциальные источники уязвимостей, в следующей статье обещают методы защиты от атак.

ChatGPT продолжает взрывать интернет. В этом материале Дмитрий Лукьянов делится своим небольшим проектом, который [использует ChatGPT-4 для корректуры текста](https://habr.com/ru/articles/732394/). Здесь не только про само использование API, но и про сопутствующие задачи, например токенизацию текста.

Всегда хотели потрогать блокчейн? Вот вам материал об этом. Алан Набиев в пока двух частях на Хабре на примере Ethers.js показывает, как работать с Etherium-совместимыми блокчейнами. В [первой части](https://habr.com/ru/articles/722816/) он разбирает основные понятия, а [во второй](https://habr.com/ru/articles/731786/) уже касается транзакций, покупки и обмена токенов.

В конце рубрики небольшая [подборка материалов для изучения веб-разработки](https://habr.com/ru/companies/yandex_praktikum/articles/730344/) или дополнения существующих знаний. Здесь есть книги, каналы, тематические ресурсы. Если не читали легендарную серию Кайла Симпсона «You Don’t Know JS» — врывайтесь. Кстати, сейчас идёт работа над переизданием серии — первые две книги уже готовы.

<ParagraphWithImage imageName="manWithLaptop">
  ### Новости релизов

Доступен Chrome 113. Наверное, самая значительная фича этого релиза — [поддержка WebGPU](https://developer.chrome.com/blog/webgpu-release/). Напомню, это возможность браузера использовать видеокарту для вычислений. Пока только Babylon.js полностью поддерживает технологию, но остальные известные WebGL-библиотеки уже работают над реализацией. Возможно грядут времена, когда для каких-то сайтов понадобится видеокарта 4090. Шутка, конечно. Но кто знает. Также продолжилась работа над оптимизацией производительности, в этом релизе прирост составил около 5%. DevTools теперь умеет редактировать хэдеры, добавлять их или менять правила, что поможет с экспериментами и отладкой ряда проблем с CORS и не только. Больше подробностей — в официальных обзорах новых [Chrome](https://developer.chrome.com/blog/new-in-chrome-113/) и [DevTools](https://developer.chrome.com/blog/new-in-devtools-113/) от Google.
</ParagraphWithImage>

Вышло обновление [Firefox 112.0.2](https://www.mozilla.org/en-US/firefox/112.0.2/releasenotes/). В нём была устранена проблема с утечкой памяти.

Увидела свет [16-ая мажорная версия фреймворка Angular](https://blog.angular.io/angular-v16-is-here-4d7a28ec680d). Это, по словам команды разработки, самый крупный релиз Angular за всё время. В этом релизе появилась новая фича — Signals. По сути, это реализация реактивного примитива и реактивности в Angular «из коробки», я рассказывал об этом в прошлом выпуске. Это ещё не всё — был представлен ряд улучшений тулинга, SSR и большое количество мелких улучшений, которые сделают жизнь разработчиков лучше. Больше подробностей — в блоге Angular.

Команда Deno выпустила [обновление 1.33](https://deno.com/blog/v1.33). В этом релизе было представлено встроенное key-value хранилище, улучшения LSP, расширение поддержки npm и Node.js. Помимо этого в релиз вошло обновление для CLI, конфиг с более плоской структурой и обновление V8 до версии 11.4.

Спустя совсем немного времени после релиза 20-ой версии вышло минорное обновление [Node.js 20.1.0](https://nodejs.org/en/blog/release/v20.1.0).

Также отмечу [релизы всех поддерживаемых веток git с устранением уязвимостей](https://lkml.org/lkml/2023/4/25/705), [Rust 1.69.0](https://blog.rust-lang.org/2023/04/20/Rust-1.69.0.html) и релиз ядра [Linux 6.3](https://lkml.org/lkml/2023/4/23/284).

<ParagraphWithImage imageName="laptopNews" >
    ### Другие новости

Opera представила браузер, который после стабилизации придёт на смену текущей Opera. Он называется [Opera One](https://blogs.opera.com/desktop/2023/04/opera-unveils-opera-one-an-entirely-redesigned-browser/), использует Chromium, имеет модульную архитектуру, умеет в многопоточную отрисовку и обещает прекрасный пользовательский опыт. Хороший вопрос: будет ли это так. Пока он доступен, кажется, как Developer Preview — я поставил его посмотреть, но пока не успел сделать это как следует. На первый взгляд не выглядит невероятно полезно, но посмотрим. В любом случае я думаю, что для фанатов браузера Opera это хорошая новость.
</ParagraphWithImage>

GitHub [представила новую фичу](https://github.blog/2023-04-19-introducing-npm-package-provenance/), которая предназначена для подтверждения происхождения npm-пакетов. Она называется Provenance. Если упрощать, это галочка, которая подтверждает, что пакет или его определённая версия предоставляется из надежного источника. Звучит хорошо — для разработчиков библиотек это способ лишний раз подтвердить надежность пакета, а для пользователей — способ быть уверенным в безопасности пакетов. Фича пока в бете, больше подробностей о работе Provenance —  в анонсе от GitHub.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
