---
title: 'В этом выпуске: Chrome 128, создание  npm-пакетов в 2024 году, пропозал Temporal, история регулярных выражений, Telegram Mini App и другие интересные материалы. Мы поговорим о старте опроса State of CSS 2024, немного о новых санкциях и об уходе Notion.'
soundcloudLink: 'https://soundcloud.com/csssr/chrome-128-npm-pakety-2024-temporal-telegram-mini-app-state-of-css-2024-ukhod-notion'
date: '2024-08-31T00:00:00.000Z'
episodeNumber: 261
tag: 'news'
author: 'Ислам Виндижев'
---

Всем привет, это «Новости 512» от CSSSR. В этом выпуске: Chrome 128, создание  npm-пакетов в 2024 году, пропозал Temporal, история регулярных выражений, Telegram Mini App и другие интересные материалы. Мы поговорим о старте опроса State of CSS 2024, немного о новых санкциях и об уходе Notion.

<ParagraphWithImage imageName="laptopNews" >
  ### Интересные публикации

[Как создать npm-пакет в 2024 году](https://www.totaltypescript.com/how-to-create-an-npm-package)? Гайдов на эту тему довольно много, но этот, наверное, можно назвать исчерпывающим. Мэт Покок (Matt Pocock) постарался расписать создание полностью готового к продакшену пакета. Внутри — контроль версий с Git, применение в пакете TypeScript и Prettier, проверка экспортов, компиляция в CJS и ESM. Помимо этого, есть тесты для пакета с Vitest, CI, а также версионирование и публикация пакета. Присутствует и небольшой скринкаст для тех, кто больше любит видеогайды.
</ParagraphWithImage>

Мы все знаем, какой болью иногда может быть работа с датой и временем в JS. Сейчас на третьей стадии находится пропозал `Temporal` — по названию вы можете догадаться, что это объект для работы с датой и временем и соответствующим API. Как раз о том, почему для работы с датой и временем понадобился новый объект, а также о его API и [рассказывает](https://docs.timetime.in/blog/js-dates-finally-fixed/) Иаго Ластра (Iago Lastra). Он приводит примеры и считает, что это существенное и качественное изменение в работе с датой и временем. Есть и [перевод](https://habr.com/ru/articles/838378/) — обе ссылки в описании выпуска.

Регулярные выражения — очень крутая и полезная фича. Но какими они были раньше и как менялись до сегодняшнего дня? Об этом в [своей статье](https://www.smashingmagazine.com/2024/08/history-future-regular-expressions-javascript/) рассказывает Стивен Левитан (Steven Levithan). В спецификации они появились аж в 1999 году, и у них была репутация очень сложной фичи, которую нужно изучать как отдельный язык. В принципе, так и было. Сейчас он проще и у него намного больше возможностей. Стивен показывает появление самых важных фич с течением времени, даёт список ресурсов для изучения регулярок и рассказывает о тонких нюансах работы регулярных выражений.

Есть такой фреймворк, который называется Wasp. Пока он в бете, а его авторы считают, что придумали прекрасное [Rails-подобное решение для разработки full-stack приложений](https://wasp-lang.dev/blog/2024/08/20/django-vs-wasp). Он работает с React, Node.js, Docker и предлагает делать всё быстро и просто. В статье автор сравнивает его с Django и старается показать, насколько проще жить с Wasp по сравнению с Django. Это материал на посмотреть — возможно, Wasp покажется интересным и вам.

Иен Хестерс (Jan Hesters) в своём блоге рассказывает [о генераторах в JS](https://www.reactsquad.io/blog/understanding-generators-in-javascript). Поскольку тема довольно сложная и многим непонятная, он постарался её упростить. Сначала он раскрывает необходимую базу для понимания генераторов, а потом рассказывает о трёх основных кейсах их применения: ленивая обработка данных, асинхронное программирование и итераторы. Всё с примерами. Так что если вас эта тема отталкивала, то самое время разобраться.

Как Google [обрабатывает JavaScript в процессе индексации веб-страниц](https://vercel.com/blog/how-google-handles-javascript-throughout-the-indexing-process)? На этот вопрос в блоге Vercel отвечает коллектив авторов. Они развеяли несколько мифов. Например, Google вполне себе может рендерить JS-контент, не обрабатывает страницы с тяжелым JS как-то иначе, а JS не так негативно влияет на SEO, как все думают. В конце статьи подводятся итоги и приводятся рекомендации. Также есть [перевод на Хабре](https://habr.com/ru/companies/timeweb/articles/836866/). Ссылки на оригинал и перевод прикладываю к описанию выпуска.

Чуть позже я ещё скажу о последнем релизе перед выходом Deno 2.0, а сейчас представляю вашему вниманию ссылку на [эпизод подкаста StackOverflow](https://stackoverflow.blog/2024/08/20/ryan-dahl-deno-20-scale-improve-npm-nodejs/), в котором создатель Node.js, а потом и Deno Райан Дал рассказали о том, как будет дальше развиваться Deno и почему версия 2.0 станет следующим этапом эволюции продукта. Тут в двух словах не расскажешь, так что если вас интересует судьба Deno, то определённо стоит послушать.

Робин Урих (Robin Wieruch) в своём блоге поделился мыслями о том, что [React превращается в full-stack фреймворк](https://www.robinwieruch.de/react-full-stack-framework/). На эти мысли его наводит широкое применение TypeScript, появление серверных компонентов и серверных действий. Хороший вопрос: так это или не так? Наверняка найдутся люди, которые скажут, что React — это библиотека, но точка зрения имеет место быть.

Следующий материал посвящён [Telegram Mini App](https://habr.com/ru/companies/amvera/articles/838180/). Это относительно новый способ создания приложений прямо в интерфейсе Telegram на веб-технологиях. Они могут работать с авторизацией, платежами и данными пользователя, который открыл приложение. В этом гайде вы найдёте пример создания приложения с нуля, стилизации, деплоя. Всё без использования фреймворков, хотя это, в принципе, тоже возможно. Вдогонку к этой статье приложу [заметку](https://habr.com/ru/articles/839432/) о разных способах запуска таких приложений, например, для тестирования.

В конце рубрики ещё несколько полезных материалов, только коротко. Это ещё один краткий [обзор новых фич ES2024](https://pawelgrzybek.com/whats-new-in-ecmascript-2024/), [гайд](https://habr.com/ru/articles/837692/) по работе с WASM для начинающих, условно-бесплатная книга «[50 ошибок в TypeScript](https://leanpub.com/50-ts)», инструмент для анализа утечек [fuite](https://github.com/nolanlawson/fuite) и [создание игры 2048 на JavaScript](https://www.youtube.com/watch?v=RC_SglXG4Y8).

<ParagraphWithImage imageName="manWithLaptop">
  ### Новости релизов

Вышел Chrome 128. В этом релизе добавили метод `Promise.try()`, который оборачивает любой результат функции в промис, что поможет проще чейнить промисы и обрабатывать ошибки. Тег `<ruby>`, который используется для отображения азиатских иероглифов с аннотациями, теперь лучше работает с длинными строками и их переносами. Был также представлен ряд улучшений для DevTools. Больше подробностей — в обзорах релизов [Chrome](https://developer.chrome.com/blog/new-in-chrome-128) и [DevTools](https://developer.chrome.com/blog/new-in-devtools-128) от Google.
</ParagraphWithImage>

Мы всё ближе подходим к релизу Deno 2.0. Вышла [версия 1.46](https://deno.com/blog/v1.46), которая должна стать последней «первой» мажорной версией перед 2.0. Этот релиз как бы финализирующий перед переходом к новой мажорной версии. Подвезли упрощения для CLI, lock-файла, управления зависимостями. Родной форматтер теперь поддерживает HTML, CSS, фреймворки и кучу всего. Поработали над совместимостью с популярными и наиболее востребованными npm-пакетами. В общем, 2.0 осталось ждать совсем недолго, скоро будет первый релиз-кандидат. Больше подробностей — в блоге Deno.

В [Node.js 22.7.0](https://nodejs.org/en/blog/release/v22.7.0) детектор синтаксиса теперь работает по умолчанию, а методы объекта Buffer.copy и `Buffer.write` получили серьёзный буст производительности за счёт новых оптимизаций.

В LTS-версии [Node.js 20.17.0](https://nodejs.org/en/blog/release/v20.17.0) появилась экспериментальная поддержка `require()` для синхронных графов ES-модулей. Помимо этого, стал доступен Duplex Pair API. Функция `duplexPair()` этого API будет возвращать массив из двух дуплексных потоков, которыми можно пользоваться по своему усмотрению.

Доступен [Astro 4.14](https://astro.build/blog/astro-4140/). Наверное, главной фишкой релиза стал экспериментальный `Content Layer API`. Эта фича расширяет возможности коллекций контента и позволяет загружать контент в том числе и из сторонних источников. Вместе с тем старые коллекции продолжат работать как и раньше. Помимо этого, добавили умные подсказки для контентных файлов и новый `injectType` API. Больше подробностей — в блоге Astro.

Вышла [версия 1.0 бандлера Rspack](https://rspack.dev/). Это бандлер, который написан на Rust и предлагает существенный прирост в скорости работы. Но главное не в гипотетической скорости, а в том, что он полностью совместим с API Webpack и его экосистемой. По идее можно внедрить его в проекты с Webpack и бесшовно заменить. Звучит хорошо для проектов, которые хочется оптимизировать, а менять Webpack на другой бандлер долго и дорого. Заслуживает внимания.

Также в этом выпуске отмечу выход релиз-кандидата [TypeScript 5.6](https://devblogs.microsoft.com/typescript/announcing-typescript-5-6-rc/) и фреймворка [Ember 5.11](https://blog.emberjs.com/ember-released-5-11/).

<ParagraphWithImage imageName="laptopNews" >
    ### Другие новости

Открыт опрос [State of CSS 2024](https://stateofcss.com/en-US). Казалось бы, мы только обсуждали результаты опросов за прошлый год, но они потихоньку начинаются опять. Опрос будет открыт, насколько я помню, до 7 сентября, так что у вас есть довольно много времени, чтобы его пройти. Опросы — это, на самом деле, важно, потому что они помогают понимать, какие технологии актуальны, чего не хватает сообществу, и показывают, куда вообще двигается индустрия. Помимо этого, это хороший способ посмотреть, чего вы не знаете, и найти для себя что-то полезное. Когда будут результаты, мы их тоже обязательно обсудим.
</ParagraphWithImage>

12 сентября вступает в силу новый пакет санкций, который касается в том числе разного софта. Вы могли слышать, что Miro ушёл из РФ, но потом решил оставить бесплатные аккаунты. Есть информация, что сервисы Google продолжат работать, кроме сервиса BigQuery. Внимательно следите за уведомлениями от сервисов, чтобы не оказаться в ситуации, когда вы внезапно не сможете полноценно работать.

Из недавнего: о прекращении деятельности в РФ заявил Notion. На этом я немного остановлюсь, потому что им пользуются многие. 9 сентября сервис прекратит свою работу, и — внимание! — даже если вы находитесь за рубежом и у вас в биллинге уже не российская карта, но когда-то была, ваш аккаунт может быть заблокирован. Не вполне понятно, как это сработает, поэтому рекомендую сделать резервные копии. Заодно подкину вам альтернативу — сервис [AFFiNE](https://affine.pro/). Из всех сервисов, которые попадались мне на этой и прошлой неделях, выглядит самым интересным.

На сегодня это всё. Всем пока и до встречи в следующем выпуске.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)