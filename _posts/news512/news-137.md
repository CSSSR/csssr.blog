---
title: 'В этом выпуске: Firefox 84 и Safari Technology Preview 117, январские security-релизы Node.js, тренды фронтенда от Тинькофф, ленивая загрузка JS при взаимодействии и результаты MDN Web DNA 2020.'
soundcloudLink: 'https://soundcloud.com/csssr/firefox-84-frontend-2021-ot-tinkoff-security-relizy-nodejs-deno-16-mdn-web-dna-2020'
date: '2020-12-19T00:00:00.000Z'
episodeNumber: 137
tag: 'news'
author: 'Ислам Виндижев'
---

<Note>
  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)
</Note>

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

  Филипп Нехаев на Хабре рассказывает [о планах компании Тинькофф относительно фронтенд-технологий](https://habr.com/ru/company/tinkoff/blog/533462/) на 2021 год. Технологии разделены на несколько категорий: адаптированные, проверяемые и те, от которых стоит отказаться. Например, от JS отказались в пользу TypeScript, а с Vue не работают потому, что React и Angular покрывают все потребности разработчиков. Также в статье рассматривают другие технологии и методики — всего 15 пунктов. В конце есть ссылка на более [подробный технологический радар Тинькофф](https://radar.tinkoff.ru/frontend).
</ParagraphWithImage>

Эдди Османи (Addy Osmani) в своём блоге рассказывает [о ленивой загрузке JavaScript при взаимодействии](https://addyosmani.com/blog/import-on-interaction/). Идея простая — отображать неинтерактивный фасад-заглушку, пока пользователь не начнёт взаимодействовать с элементом. Например, если у вас на сайте есть кнопка, открывающая чат, можно показывать заглушку и загружать JS чата только после нажатия. Как именно реализовать подход, Эдди показывает на ванильном JS, React и Vue.

Ахмад Шадид (Ahmad Shadeed) написал статью о том, [как работает scroll snap и группа свойств для управления поведением прокрутки](https://ishadeed.com/article/css-scroll-snap/). Основное применение — улучшение пользовательского опыта при свайпе. Ахмад показывает примеры и реальные кейсы, для которых это может пригодиться.

Картер Ли (Carter Li) на css-tricks создаёт [легковесный event bus, или шину событий, на JavaScript](https://css-tricks.com/lets-create-a-lightweight-native-event-bus-in-javascript/). Это паттерн, который нужен для упрощения взаимодействия компонентов c помощью механизма publish/subscribe. Картер предлагает реализовать его самостоятельно, используя HTML-комментарий как шину.

На wev.dev Адам Аргайл (Adam Argyle) рассказывает [о центрировании в CSS](https://web.dev/centering-in-css/). Всего он рассматривает 5 способов центрирования и разбирает, какой из них лучший. Для определения победителя каждый способ оценивается по 5 критериям. Небольшой спойлер — лучшим он признал центрирование на флексах с justify-content и align-items.

Теперь [тестировать WebAssembly будет ещё проще](https://developers.google.com/web/updates/2020/12/webassembly). Возможности отладки и профилирования кода на языках C и C++ были значительно улучшены. Имена переменных при отладке будет соответствовать именам в коде, и их можно будет инспектировать. Появилась возможность отлаживать чистый WebAssembly и даже заглянуть внутрь памяти.

Завершает рубрику [чек-лист SEO оптимизации на Smashing Magazine](https://www.smashingmagazine.com/search-engine-optimization-checklist/). Фредерик О’Браен (Frederick O’Brien) собрал практики и вопросы, на которые стоит ответить при оптимизации. Он разделил их на несколько категорий: постановка целей, определение окружения, что можно сделать на самой странице и вне её, а также как это тестировать и мониторить.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

  Вышел [Firefox 84](https://hacks.mozilla.org/2020/12/and-now-for-firefox-84/). Слегка опережая Chrome, добавили поддержку сложных селекторов в псевдоэлементе :not(). Появились инспектор порядка фокуса на странице и новый интерфейс PerformancePaintTiming — для измерения времени рендеринга. Адреса localhost теперь считаются безопасными для упрощения тестирования, а AppCache был удалён.
</ParagraphWithImage>

Доступно [Safari Technology Preview 117](https://webkit.org/blog/11364/release-notes-for-safari-technology-preview-117/). В этом выпуске: включены статические публичные и приватные поля классов, расширен API интернационализации, для многих CSS-свойств добавлена поддержка дискретной анимации, и началось внедрение aspect-ratio.

Команда [Node.js анонсировала январские security-релизы](https://nodejs.org/en/blog/vulnerability/january-2021-security-releases/). Обновления выйдут для всех поддерживаемых версий платформы, а именно 10, 12, 14 и 15. Релиз запланирован на понедельник, 4 января. Будут исправлены две критические уязвимости и одна минорная.

Кроме того, вышла версия [Node.js 14.15.3](https://nodejs.org/en/blog/release/v14.15.3/). Исправили небольшую регрессию в модуле stream, а версия npm была обновлена до 6.14.9.

Перейдём к другой среде исполнения. Вышел [Deno 1.6](https://deno.land/posts/v1.6). В этой версии добавили поддержку TypeScript 4.1, Language Server Protocol и экспериментальную поддержку Apple Silicon. Также с этой версии приложения на Deno можно распространять в виде бинарного файла.

[Laravel обновился до версии 8.19](https://laravel-news.com/laravel-8-19-0). В этой версии задачи в очередях приостанавливаются на время транзакций в базе данных. У компонентов появился метод has(). Была добавлена команда schedule:list, которая отображает все запланированные таски.

Помимо этого стала доступна версия [nginx 1.19.6](http://nginx.org/en/CHANGES).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

  Наверняка вы уже немного устали от подведения итогов года. Я даже подумал о том, что тоже могу учредить какой-нибудь ежегодный опрос. Но сегодня речь пойдет об опросе [MDN Web DNA 2020](https://hacks.mozilla.org/2020/12/2020-mdn-web-developer-needs-assessment-now-available/). Итоги были подведены и [опубликованы в виде отчёта](https://insights.developer.mozilla.org/). В 2020 в опросе поучаствовало в два раза меньше респондентов. Больше всего разработчики были недовольны инструментами для доступности, а также приватностью и безопасностью в сети. Самой большой головной болью по-прежнему остаётся поддержка конкретных версий браузеров и кроссбраузерная поддержка.
</ParagraphWithImage>

<Note>
  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
</Note>
