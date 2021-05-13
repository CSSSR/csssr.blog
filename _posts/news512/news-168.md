---
title: 'В этом выпуске: второй эпизод «Истории фронтенда», Safari 14.1, CORS, Cookie Store API, базовый туториал по настройке webpack, Next.js 10.2, RxJS 7, Babel 7.14, а также Google I/O 2021.'
soundcloudLink: 'https://soundcloud.com/csssr/istoriya-frontenda-ch2-safari-141-cors-cookie-store-api-nextjs-102-rxjs-7-google-io-2021'
date: '2021-05-05T00:00:00.000Z'
episodeNumber: 168
tag: 'news'
author: 'Ислам Виндижев'
---

  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

Мы выпустили [второй эпизод](https://youtu.be/sgyoKkAfGpU) нашего сериала «История фронтенда». Он посвящен JavaScript, истории развития его стандарта ECMAScript и экосистемы. Еще подробнее об этой части истории можно почитать в нашем блоге — как и в первом выпуске, мы сопроводили видео [статьей](https://blog.csssr.com/ru/article/frontend-history-java-script-as-a-reflection-of-a-new-era/) с дополнительными материалами.
</ParagraphWithImage>

Если вы интересуетесь историей веба, можно также почитать цикл статей от Джея Хоффмана (Jay Hoffmann) на CSS-Tricks. Пока что вышло 8 частей, последняя была опубликована буквально вчера, она посвящена [CSS](https://css-tricks.com/chapter-8-css/).

Продолжается серия о производительности. Джейк Арчибальд (Jake Archibald) взялся за [сайт Google I/O](https://jakearchibald.com/2021/io-site-perf/) и вписывает его в таблицу с сайтами Формулы-1. На малопроизводительном устройстве он загружается за 26 секунд. Главная проблема: этот сайт — SPA, поэтому нужно загрузить большой объем данных для отображения контента. Кроме того, не используется код-сплиттинг и в бандл попадает много некритичного кода. А еще загружается достаточно тяжелый шрифт всего лишь для одной иконки. В итоге cайт Google I/O оказался быстрее только сайта Феррари.

Помните те самые ошибки в консоли с непонятной и страшной аббревиатурой? Илья Ефтимов в своем блоге опубликовал [статью о CORS](https://ieftimov.com/post/deep-dive-cors-history-how-it-works-best-practices/). Он рассказывает об истории развития CORS и механизме его работы. Также он делится лучшими практиками работы с ресурсами из разных источников.

Луи Лазарис (Louis Lazaris) написал гайд для новичков по [настройке webpack](https://www.codeinwp.com/blog/webpack-tutorial-for-beginners/). Как и принято в гайдах для начинающих, он рассказывает об инструменте, о создании бандла и базовой конфигурации. Также он касается запуска webpack через npm-скрипт и настройки hot-reload. Получился довольно неплохой и доступный пошаговый гайд.

Никита Дубко написал заметку [о новом Cookie Store API](https://mefody.dev/chunks/cookie-store-api/). Работа с куками не самая очевидная вещь во Вселенной — у нее много подводных камней, а спецификация устарела. Никита показывает «старый» способ работы с куками и сравнивает его с новым API на примере одинаковых операций. Имейте в виду, что Cookie Store API доступен начиная с Chrome 87, его можно заполифилить, но с некоторыми ограничениями. Поэтому стоит использовать осторожно.

Павел Лаптев в своем блоге на Medium выложил статью о том, как при помощи Houdini API создавать [более сложные формы](https://pavellaptev.medium.com/squircles-on-the-web-houdini-to-the-rescue-5ef11f646b72), чем позволяет CSS. Его не устраивала форма, которую может предложить стандартный border-radius, он поискал реализации более сложных форм. В итоге Павел показывает, как при помощи Houdini Paint API и кривых безье создать квадрат с кастомной кривизной углов.

Завершает рубрику ресурс [dotfiles.github.io](https://dotfiles.github.io/). Задумайтесь, дотфайлы есть в каждом проекте, и от них зависит многое. На этом сайте можно найти туториалы и инструменты для работы с дотфайлами, а также много примеров дотфайлов других разработчиков и подсказок.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

Вышел [Safari 14.1](https://webkit.org/blog/11648/new-webkit-features-in-safari-14-1/). В CSS добавили поддержку gap для flexbox. Добавлены индивидуальные свойства трансформации элементов: scale, rotate, translate. В JavaScript появилась поддержка приватных полей и публичных статических полей класса. В API интернационализации были добавлены новые методы, и был реализован пропозал WeakRef. Не обошлось и без небольшого обновления DevTools. Раскладку инспектора элементов изменили, добавили панель с информацией о шрифтах на странице, а отладчик теперь поддерживает logpoints.
</ParagraphWithImage>

Следующий релиз — [Next.js 10.2](https://nextjs.org/blog/next-10-2). Production-сборка была ускорена на 60%, а запуск next dev — на 24%. Были представлены улучшения доступности, расширенная функциональность redirects/rewrites и автоматическая оптимизация шрифтов.

Доступна [седьмая версия RxJS](https://rxjs.dev/). Она на 50% меньше в бандле, обзавелась более консистентным API и улучшенными тайпингами. Есть и ломающие изменения: RxJS требует TypeScript 4.2, изменились типы ошибок, поменялось создание Subscriber. Подробнее — в [документации к новой версии](https://rxjs.dev/deprecations/breaking-changes).

Уже далеко не всеми любимый стейт-менеджер [Redux](https://github.com/reduxjs/redux/releases/tag/v4.1.0) отметился обновлением. Оно не то чтобы невероятное: размер версии 4.1 уменьшился на 40%, также были улучшены сообщения об ошибках.

Вышел [Babel 7.14](https://babeljs.io/blog/2021/04/29/7.14.0). В этой версии свойства классов и приватные методы включены по умолчанию, также была добавлена поддержка выражения async do.

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

[Google I/O 2021](https://events.google.com/io/?lng=en) пройдет с 18 по 21 мая. В программе как всегда все достижения Google за год: новинки Android, веб-платформы, машинного обучения, Flutter и другие направления. Мероприятие пройдет онлайн, в программе можно удобно отфильтровать доклады не только по теме, но и по уровню докладов.
</ParagraphWithImage>

Вслед за Vue [Angular прекращает поддержку IE11](https://github.com/angular/angular/issues/41840). В 12 версии поддержка IE11 получит статус deprecated, а в 13 версии будет удалена совсем.

И последняя короткая новость: [Facebook присоединился к Rust Foundation](https://developers.facebook.com/blog/post/2021/04/29/facebook-joins-rust-foundation/).

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)