---
title: 'В этом выпуске: релиз SolidStart 1.0 и Astro 4.10, паттерны работы с получением данных в SPA-приложениях, переезд расширения 1Password на esbuild, инструмент для миграции конфига ESLint и другие материалы.'
soundcloudLink: 'https://soundcloud.com/csssr/patterny-spa-solidstart-10-astro-410-optimizatsiya-rasshireniya-1password-dekompozitsiya'
date: '2024-06-07T00:00:00.000Z'
episodeNumber: 256
tag: 'news'
author: 'Ислам Виндижев'
---

Всем привет, это «Новости 512» от CSSSR. Этот выпуск немного необычный, потому что в нём нет «Других новостей», а каких-то достаточно крупных релизов практически не случилось. Тем не менее сегодня мы поговорим о релизе SolidStart и Astro 4.10, обсудим паттерны работы с получением данных в SPA-приложениях, узнаем, как 1Password прокачивал своё браузерное расширение, а также посмотрим на инструмент для миграции конфига ESLint. Конечно, будут и другие интересные материалы.

<ParagraphWithImage imageName="laptopNews" >
  ### Интересные публикации

Когда SPA должно получить данные сервера, оно должно оставаться отзывчивым и реагировать на действия пользователя даже во время медленного запроса. Как этого добиться при помощи пяти паттернов, [рассказал в своей статье](https://martinfowler.com/articles/data-fetch-spa.html) Джунтао Ки (Juntao Qui). Он рассказывает о пяти полезных паттернах, которые в комплексе решают эту проблему. Асинхронный обработчик состояния оборачивает эти запросы в мета-запросы для состояния запроса. Параллельное получение данных минимизирует время ожидания. Fallback-разметка поможет на время прикрыть интерфейс. Code splitting загружает только тот код, который нужен, а префетчинг загрузит данные до того, как они смогут понадобиться, чтобы уменьшить задержку. Соответственно, он показывает примеры применения всех паттернов и рассказывает о них подробнее. Получился лонгрид, но очень подробный и интересный.
</ParagraphWithImage>

Команда 1Password поделилась [кейсом модернизации системы сборки своего браузерного расширения](https://blog.1password.com/new-extension-build-system/). Существующая система устарела и стала медленной, расширение разрослось, и пора было что-то менять. Эти проблемы замедляли разработку и поддержку. В итоге на хакатоне был разработан прототип со сборкой при помощи esbuild. В итоге production-версию мигрировали на esbuild. Как результат, production-бандл уменьшился на 90%, а время «тёплого» билда составило 5 секунд вместо 30. Подробнее о кейсе — в блоге 1Password.

Про промисы мы говорили достаточно много раз. [Ещё один их разбор](https://www.joshwcomeau.com/javascript/promises/) сделал Джок Комо (Josh Comeau) — в своей манере: доступно, подробно, с примерами. Он начинает с того, для чего вообще нужны промисы и какую проблему решают, как с ними работать, как чейнить, реджектить. В конце он касается конструкции `async/await`. Для корифеев материал, конечно, не подойдёт. Но заглянуть стоит.

Александр Инкин из «Тинькофф» (уже «Т-Банка») в блоге компании поделился [статьёй о декомпозиции сложных задач](https://habr.com/ru/companies/tbank/articles/817755/). Он считает, что этот навык можно совершенствовать бесконечно, а хорошему сеньору или архитектору без него не обойтись. И я с ним очень согласен. В статье Александр выбрал задачу для примера и демонстрирует декомпозицию сначала на уровне логики, а потом и в коде. Вполне себе стоит познакомиться и сложить в свою копилочку подходов к решению задач.

Следующий материал — это микрозаметка [об опыте перехода на Biome с Prettier и ESLint](https://kittygiraudel.com/2024/06/01/from-eslint-and-prettier-to-biome/). В итоге среднего размера проект получилось мигрировать за день-два. Автор отмечает ряд преимуществ: одна зависимость с одним файлом конфигурации, очень информативные сообщения об ошибках, скорость и легковесность. Были и проблемы: пока присутствуют некоторые баги, некоторых вещей в конфигурации по сравнению ESLint просто нет и не нравится JSON как конфиг. Но в итоге плюсы перевесили минусы и общий опыт очень понравился. 

Продолжая тему миграций. Оказалось, что многие пользователи не перешли на новую, девятую версию ESLint, потому что процесс переноса конфига казался трудоёмким и сложным. Николас Закас (Nicholas C. Zakas) в блоге ESLint представил [ESLint Configuration Migrator](https://eslint.org/blog/2024/05/eslint-configuration-migrator/). Как вы догадались, это тулза, которая помогает быстро мигрировать конфиг в новый формат. В статье, соответственно, рассказывается, как инструмент работает, как миграцию провести и какие у него есть ограничения. Так что если вы откладывали обновление ESLint, то вот вам прекрасный повод к этому вернуться.

Разработчик Андрико Карулла (Andrico Karoulla) собрал в репозитории на GitHub [список дилемм, с которыми можно столкнуться при разработке библиотеки компонентов](https://github.com/andrico1234/the-dilemmas-youll-face). Он задаётся большим количеством вопросов: использовать ли библиотеки для написания компонентов, как поставлять пакеты, как писать документацию, как тестировать свою библиотеку и другими. Если у вас есть похожие задачи, очень рекомендую посмотреть — возможно, вы найдёте там готовый ответ на свой вопрос. 

По какой причине можно отказаться от одного облачного провайдера в пользу другого? Да по разным, а в данном случае — из-за цен. Харрисон Броадбент (Harrison Broadbent) рассказал о том, [как отказался от Netlify в пользу Cloudflare](https://harrisonbroadbent.com/blog/goodbye-netlify-hello-cloudflare/). Если коротко, он превысил лимит трафика и получил жирненький счёт. После этого он проверил тарифы и перешёл на другой сервис. Мораль: хорошо изучайте тарифы своих сервисов и инструментов, чтобы случайно не попасть в неприятную ситуацию.

Как измерить производительность какого-то Node.js-приложения? В ноде существует специальный модуль `performance hooks` для точного измерения с высокой надёжностью без использования таймстемпов и других ухищрений. Павел Романов [в своей статье](https://pavel-romanov.com/nodejs-performance-hooks-mastering-the-mental-model) разбирается в том, как работает модуль и как правильно при помощи него производить измерения для получения достоверных результатов.

Продолжая тему ноды. Довольно часто после его выхода я упоминал Node.js Test Runner. Напомню: это встроенный тест-раннер Node.js, который относительно недавно стал стабильным. Это [базовый гайд по работе с ним](https://betterstack.com/community/guides/testing/nodejs-test-runner/), если вы его ещё совсем не пробовали — загляните. Внутри вы найдёте базовую настройку раннера, постепенное усложнение фич, которые рассматриваются, создание моков, прогон тестов, демонстрацию подсчёта покрытия и другие фичи. Хороший стартовый гайд.

Дальше немного практики и справочных материалов. В следующем материале автор предлагает [реализовать touch-жесты на чистом JS](https://habr.com/ru/articles/816857/). Это вторая часть, в ней реализуются drag и resize. Конечно, на проде вы вряд ли будете писать это руками, но как способ посмотреть, как работают такие штуки внутри библиотек, — очень даже.

Если в прошлом выпуске я предлагал написать React за 400 строк кода, то в этом эпизоде Марсело Лазарони (Marcelo Lazaroni) предлагает реализовать [Virtual DOM за 200 строк кода](https://lazamar.github.io/virtual-dom/). Мотивация та же — разобраться, как это работает.

Как опубликовать свой пакет в NPM с использованием бандлера Vite? На этот вопрос отвечает [в своей статье](https://habr.com/ru/companies/croc/articles/816803/) разработчик Дмитрий из Крока. Туториал начинается с азов, буквально с регистрации на NPM, затем Дмитрий рассказывает о настройке Vite, детально разбирает конфиг, готовит `package.json` и рассказывает о самом процессе публикации.

Лиззи Пэриш (Lizzie Paris) в своей заметке предлагает читателям [окунуться в мир разработки Chrome-расширений](https://spin.atomicobject.com/write-your-first-chrome-extension/). Гайд супер-базовый и для тех, кто вообще никогда этого не делал. Там есть ссылка на официальный гайд от Google и базовый пример простенького расширения.

Косьма Милке (Cosima Mielke) в SmashingMagazine поделилась [подборкой лучших практик по именованию](https://www.smashingmagazine.com/2024/05/naming-best-practices/) дизайн-токенов, компонентов и переменных. Если вам иногда приходится поломать голову — добро пожаловать по ссылочке.

И в конце рубрики справочный материал от Джофа Грэхема (Geoff Graham) о [единицах измерения в CSS](https://css-tricks.com/css-length-units/). Он покрывает и относительные, и абсолютные единицы, кастомные виды единиц измерения и ряд других. В конце есть и примеры.

<ParagraphWithImage imageName="manWithLaptop">
  ### Новости релизов

Вышел [SolidStart 1.0](https://start.solidjs.com/). Вы можете догадываться, что он имеет отношение к библиотеке SolidJS, всё именно так. SolidStart — это уже полноценный, комплексный JS-фреймворк для разработки приложений на SolidJS. В нём есть все необходимые для разработки современного приложения инструменты: от бандлера до роутера, сериалайзера и Nitro для деплоя на кучу платформ. Если вы попробовали SolidJS и он вам нравился, то на SolidStart определённо нужно обратить внимание.
</ParagraphWithImage>

В [Astro 4.10](https://astro.build/blog/astro-4100/) добавили хэлперы для Container API в Vite-окружениях, экспериментальный модуль `astro:env` для переменных окружения, а также возможность использования Astro-компонентов за пределами контекста самого Astro. Кстати, я не обращал внимания, но, кажется, недавно у Astro запустился раздел с темами, так что проекты можно стартовать, выбрав какую-нибудь из каталога в разделе Resources.

Biome, о котором я уже сегодня немного говорил, обзавёлся [новой версией 1.8](https://github.com/biomejs/biome/releases/tag/cli%2Fv1.8.0). Была добавлена новая команда `biome clean`, которая очищает папку с логами. Для линтера добавили новые флаги `--only` и `--skip`; соответственно, первый флаг позволяет прогнать определённую группу правил, а второй — пропустить. Помимо этого, были добавлены улучшения для миграции с ESLint и багфиксы.

В [Prettier 3.3.0](https://prettier.io/blog/2024/06/01/3.3.0.html) добавили поддержку кучи новых фич Flow, таких как компоненты и объявление хуков. Был также добавлен ряд небольших улучшений и фиксов багов для других языков.

Также я отмечу минорный релиз [ESLint 9.4.0](https://eslint.org/blog/2024/05/eslint-v9.4.0-released/).

esbuild отметился [релизом 0.21](https://github.com/evanw/esbuild/releases/tag/v0.21.0). В нём реализовали пропозал с JS-декораторами. Здесь отдельно нужно добавить, что они несовместимы с экспериментальными TS-декораторами. Также были добавлены оптимизации и фиксы багов.

Пока я не смотрел в ту сторону, у Docusaurus случилось аж два релиза: [3.3](https://docusaurus.io/blog/releases/3.3) и [3.4](https://docusaurus.io/blog/releases/3.4). Напомню: это инструмент для создания простых, удобных и быстрых сайтов с документацией, построенный на React. В версии 3.3 ребята готовились к релизу React 19, а в 3.4 добавили фичу с тегами и ещё несколько экспериментальных фич. Если у вас есть свой пакет и ему нужна дока, попробуйте Docusaurus — возможно, он вам понравится.

Также в этом выпуске я отмечу релизы [pnpm 9.2.0](https://github.com/pnpm/pnpm/releases/tag/v9.2.0) и фреймворка [Ember 5.9.0](https://github.com/emberjs/ember.js/releases/tag/v5.9.0).

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
