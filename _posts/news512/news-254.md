---
title: 'В этом выпуске: бета React 19, релиз Node.js 22, бета TypeScript 5.5 и другие релизы. Мы посмотрим на Front-end Handbook 2024, немного поговорим о новом регистре пакетов JSR, паре кейсов смены технологий на проектах, альтернативе StoryBook, а в конце я напомню вам про новый выпуск TechRadar.'
soundcloudLink: 'https://soundcloud.com/csssr/react-19-beta-nodejs-22-typescript-55-beta-front-end-handbook-2024-jsr-techradar-april-2024'
date: '2024-05-06T00:00:00.000Z'
episodeNumber: 254
tag: 'news'
author: 'Ислам Виндижев'
---

Всем привет, это «Новости 512» от CSSSR. На самом деле я долго думал, делать этот выпуск или перенести на следующую неделю после вторых майских. На мой взгляд, интересных материалов маловато, я сомневался, но нам всё равно есть о чём поговорить. В этом выпуске мы поговорим про бету React 19, релиз Node.js 22, бету TypeScript 5.5 и другие релизы. Мы посмотрим на Front-end Handbook 2024, немного поговорим о новом регистре пакетов JSR, паре кейсов смены технологий на проектах, альтернативе StoryBook, а в конце я напомню вам про новый выпуск TechRadar.

В начале выпуска важное объявление для всех, кто слушает подкаст в приложении Google Podcasts. 23 июня приложение закрывают, до этого времени слушать ещё будет можно. С помощью специального инструмента можно будет перенести подписки в YouTube Music и слушать подкасты там, в том числе в фоновом режиме — для этого платная подписка не нужна. После 29 июля перенос сделать будет уже нельзя. Так что советую заранее перенести подписки или перейти на другой сервис.

<ParagraphWithImage imageName="laptopNews" >
  ### Интересные публикации

Команда FrontendMasters, которая занимается в основном развитием курсов и своей школы, выпустила свою [настольную книгу 2024](https://frontendmasters.com/guides/front-end-handbook/2024/). Они делают это каждый год и собирают в ней все аспекты, которые нужны фронтендеру, для того чтобы быть фронтендером. Начинается всё с базы, освещаются ключевые компетенции и навыки, в каждом разделе есть ссылки, по которым можно перейти для дополнительного чтения. Особенно круто то, что там есть большой раздел, который покрывает смежные навыки, компетенции и концепции, которые помогут в работе. В общем, каждый год стоит взглянуть и посмотреть, чего может не хватать или что хотелось бы изучить. Горячо рекомендую.
</ParagraphWithImage>

Райан Дал (Ryan Dahl) в блоге Deno решил объяснить, [почему JSR не просто очередной менеджер пакетов](https://deno.com/blog/jsr-is-not-another-package-manager). Он рассказывает о ключевых концепциях JSR, механизме оценки пакетов и других фичах, которые позволяют на другом уровне влиять на качество кода и распространение библиотек. Заметка короткая, но заставляет немного задуматься и приглядеться к JSR получше.

Далее два кейса. [Первый кейс](https://astro.build/blog/node-test-migration/) от команды фрейворка Astro. Это кейс миграции с Mochs на тест-раннер Node.js. Ребята хотели упростить и ускорить свой CI/CD-пайплайн — для этого всё и затеяли, с перспективой на будущее. Они начали с небольшого кусочка, постепенно переводя всё больше пакетов на новый раннер. В итоге они вполне довольны результатами.

[Второй кейс](https://render.com/blog/hello-bun-deploy-2x-faster-on-github-render) — это переезд на Bun. Есть такая библиотечка — sveld, которая генерирует TypeScript-определения для Svelte-компонентов. В целях повсеместного ускорения и уменьшения количества разных инструментов решили попробовать Bun. Сначала Yarn заменили на Bun как на менеджер пакетов, потом Vitest заменили на Bun как на тест-раннер, после этого мигрировали CI/CD публикации в npm и деплоя на демонстрационный сайт. В итоге получилось ускорение деплоя в два раза. Больше подробностей — по ссылке в описании.

На Хабре вышли вторая и третья части гайда по работе с Next.js от Игоря Агапова. Руководства актуальны для 14 версии Next.js и опираются на официальную документацию. [Вторая часть](https://habr.com/ru/companies/timeweb/articles/808259/) посвящена получению данных, рендерингу, кешированию и стилизации. В [третьей части](https://habr.com/ru/companies/timeweb/articles/810055/) речь идёт об оптимизации, настройке и реализации аутентификации, там же есть и небольшой чек-лист для Next.js-проектов.

Следующий материал об оптимизации JavaScript. Он посвящён механизму кеширования, который называется [Inline Caches](https://habr.com/ru/articles/810543/), а помочь разобраться в нём нам пытается Роман Максимов. Как пример он рассматривает простую функцию и изучает, как она будет выглядет в райнтайме и что с ней будет делать движок внутри. Рекомендую всем, кому интересно погрузиться во внутренние детали работы движков и кода.

Как преобразовывать данные с React Query? Об этом написал Доминик Дорфмейстер (Dominik Dorfmeister), а я принёс вам [перевод его заметки с Хабра](https://habr.com/ru/articles/810211/). Он указывает на три возможных варианта преобразований: внутри queryFn, в функции рендера и при помощи опции select. Для каждого случая он приводит пример, а так же плюсы и минусы каждого из подходов.

В конце рубрики обращу ваше внимание на альтернативу Storybook, которая называется [Ladle](https://ladle.dev/). Назначение, собственно, такое же, как у Storybook, просто его сделали на Vite с esbuild — он обещает быть меньше, быстрее, проще настраиваться. Если интересно — пробуйте.

<ParagraphWithImage imageName="manWithLaptop">
  ### Новости релизов

[Node.js 22](https://nodejs.org/en/blog/release/v22.0.0) станет новой LTS-версией в октябре этого года. Пока она имеет статус Current. В этой версии появилась экспериментальная поддержка require() для ESM, встроенный, браузер-совместимый WebSocket-клиент теперь помечен как стабильный и работает. Помимо этого, подвезли встроенный таск-раннер, который может сам запускать скрипты из package.json. Здесь же обновление V8 до версии 12.4.
</ParagraphWithImage>

В [Deno 1.43](https://deno.com/blog/v1.43) почти в два раза ускорили Language Server, что, несомненно, приятно. Ускорили загрузку ES- и CommonJS-модулей. Также неустанно продолжаются работы по расширению совместимости с Node.js.

[Bun 1.1.6](https://bun.sh/blog/bun-v1.1.6) отличился добавлением поддержки UDP-сокетов и команды node:dgram. Теперь с рантаймом стабильно работают DataDog и ClickHouseDB. Была исправлена регрессия node:http из прошлой версии и исправлено порядка 10 самых назойливых для пользователей багов.

Теперь давайте о фреймворках. Мы долго ждали, и осталось чуть-чуть до React 19. Вышла [beta-версия 19 мажорной версии фреймворка](https://react.dev/blog/2024/04/25/react-19). В этой версии полностью поддерживаются кастомные элементы, React Server Components и другие связанные с ними улучшения будут целиком доступны, подъедет API для использования ресурсов use и, конечно же, Actions. Если про серверные компоненты все слушать устали, то вот немного про экшены: это API, который позволяет при помощи асинхронных функций автоматически обрабатывать длящиеся состояния, ошибки, работать с формами и делать оптимистичные обновления. Должно быть удобно, почитайте обязательно. Были и другие крутые штуки, например отображение диффа для ошибок гидратации. Помимо ссылки на релиз, я приложу ссылки на [гайд для обновления](https://react.dev/blog/2024/04/25/react-19-upgrade-guide) и [React Conf](https://conf.react.dev/), которую будут стримить 15 и 16 мая и на которой, конечно, будут говорить про React 19. Дополнительно отмечу, что вышла версия [React 18.3](https://github.com/facebook/react/releases/tag/v18.3.0), которая облегчит переход на React 19.

Если у React только бета, то Svelte обзавёлся [релиз-кандидатом пятой версии](https://svelte.dev/blog/svelte-5-release-candidate). Будут руны, про которые я уже как-то рассказывал. Это работа с реактивностью через синтаксис с функциями. Говорят, что будет проще писать, понимать и поддерживать реактивный код. Для дедупликации кода добавили фичу создания сниппетов, поработали над API обработчиков событий и ряд новых API. Если вы всё ещё на третьей версии, то пора переходить на четвертую, чтобы обновиться на пятую без особых проблем. Больше подробностей — в анонсе релиз-кандидата.

В [версии 4.7](https://astro.build/blog/astro-470/) фреймворка Astro тоже добавилась парочка фич. Появился детектор обновлений фреймворка, который при запуске сервера скажет, что есть новая версия. Добавилась возможность при помощи флага использовать нестрогий TypeScript-пресет. Помимо этого, был значительно улучшен Dev Toolbar API.

Доступна бета [TypeScript 5.5](https://devblogs.microsoft.com/typescript/announcing-typescript-5-5-beta/). Это ещё не RC, но уже видно несколько интересных фич. Предикаты для выведенных типов позволят проще работать с данными, типы можно будет импортировать в JSDoc через комменты, добавили изолированные декларации для библиотек отдельными файлами и несколько других фич. Кстати, ещё TypeScript с этой версии научится базово проверять синтаксис регулярных выражений (раньше не умел совсем). На релизе мы к этому ещё вернёмся.

Что ещё хочется отметить в этом выпуске.

Релизы LST-версий [Ubuntu 24.04](https://lists.ubuntu.com/archives/ubuntu-announce/2024-April/000301.html) и [MySQL 8.4.0](https://dev.mysql.com/doc/relnotes/mysql/8.4/en/news-8-4-0.html).

Релиз [pnpm 9.0.0](https://github.com/pnpm/pnpm/releases/tag/v9.0.0), [git 2.45.0](https://lkml.org/lkml/2024/4/29/1045), выход [nginx 1.26.0 c поддержкой HTTP/3](https://mailman.nginx.org/pipermail/nginx-announce/2024/EJFW6YFMCUODWQN7DZKIEKUTHKYXVZT2.html), а также релизы фреймворков [Ember 5.8](https://blog.emberjs.com/ember-released-5-8/) и [Electron 30](https://www.electronjs.org/blog/electron-30-0).

<ParagraphWithImage imageName="laptopNews" >
    ### Другие новости

Не успели и глазом моргнуть, а прошло уже полгода с момента выхода прошлого TechRadar. Напомню: это подборка разных техник, платформ, инструментов, языков или фреймворков, которые эксперты ранжируют по готовности к применению. [Этот выпуск](https://www.thoughtworks.com/radar) примечателен тем, что фреймворк Astro поднялся на уровень выше и рекомендуется для рассмотрения и тестирования. Следующий этап — рекомендация к внедрению. В целом радар — прекрасная штука, в которой много технологий и концепций. Очень полезно посмотреть, пощупать технологический рельеф и узнать что-то новое.
</ParagraphWithImage>

Как-то мы говорили про браузер Arc, который был недоступен пользователям Windows. Так вот, он уже [доступен для Windows 11](https://arc.net/download) и готовится версия для Windows 10. Специально для тех Windows-юзеров, кто ждал, хочу сказать, что процесс идёт и кто-то уже, а кто-то скоро сможет попробовать Arc.

На сегодня это всё. Всем пока и до встречи в следующем выпуске.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
