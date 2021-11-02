---
title: 'В этом выпуске: Dart 2.14 и Flutter 2.5, Rust 1.55, новые фичи Node.js, редактор текста с Draft.js, как написать свое правило ESLint, хоткеи в каждый дом и получится ли оштрафовать Google в России.'
soundcloudLink: 'https://soundcloud.com/csssr/dart-214-flutter-25-novoe-v-nodejs-redaktor-teksta-s-draftjs-svoi-pravila-eslint-rust-155'
date: '2021-09-14T00:00:00.000Z'
episodeNumber: 189
tag: 'news'
author: 'Ислам Виндижев'
---

<ParagraphWithImage imageName="manWithLaptop">
  ### Интересные публикации

Саймон Плендерлит (Simon Plenderleith) в своем блоге рассказал [о недавно появившихся фичах Node.js](https://simonplend.com/whats-new-in-node-js-core/). Среди них — генерация уникальных идентификаторов без сторонних библиотек, Abort Controller, продвинутые импорты модулей и API, основанные на промисах. По каждой есть и более подробная заметка с примером применения. Если вы не особо разбираетесь в релизных заметках разных технологий, или вообще не хотите этого делать, то обзор как раз для вас.
</ParagraphWithImage>

Некоторые фичи могут работать не так, как следовало ожидать. Про некоторые из таких в своей статье написал Фараи Гандия (Farai Gandiya). [Что может пойти не так](https://css-tricks.com/web-features-that-may-not-work-as-youd-expect/) с посещенными ссылками, как теперь работает кеширование, почему performance.now() может выдавать погрешность? Это не полный перечень вопросов, на которые он отвечает. Фараи рассказал и о том, почему ленивая загрузка с атрибутам loading не работает с выключенным JavaScript и почему браузер может блокировать некоторые фичи сам. Получилось интересно. Также доступен [перевод на Хабре](https://habr.com/ru/company/ruvds/blog/575350/).

Следующая статья — [о Draft.js](https://habr.com/ru/company/kts/blog/576682/). Это своего рода фреймворк для построения текстовых редакторов веб-приложений от команды React, который впервые был представлен в 2016 году. Данила Реутов опубликовал на Хабре статью о своем опыте создания кастомного редактора текста для одного из рабочих проектов. В материале есть описание самой задачи, архитектуры решения и реализации. Draft.js — достаточно старый, и поддерживают его не очень активно. Но дело скорее не в том, что его забросили, просто, как мне кажется, он уже умеет достаточно, поэтому вполне заслуживает внимания.

Бенедикт Куин (Benedict Quinn) выложил статью о том, [как написать своё ESLint-правило](https://blog.scottlogic.com/2021/09/06/how-to-write-an-es-lint-rule-for-beginners.html) для начинающих. На примере своего собственного правила из реального проекта он подробно разбирает тему. При этом он не только показывает техническую сторону, но и объясняет, о чём стоит подумать при проектировании правила и почему. Хорошая статья и абсолютно необходимый навык, если в будущем вы рассчитываете стать тимлидом или техлидом и выстраивать технические процессы в команде.

Поговорим о Notion. Есть два лагеря: кто-то считает Notion перегруженным и ужасным сервисом, а кто-то боготворит и утверждает, что это лучшее, что вообще могло случиться. Но мы тут не про холивар, а про то, как инженеры Notion [мигрировали на Next.js](https://www.notion.so/blog/migrating-notion-marketing-to-next-js) маркетинговую страничку продукта. Причины довольно простые: сайт нужно было сделать легче, лаконичнее и быстрее. В статье — подробный рассказ о том, какие альтернативы рассматривали и какой логикой руководствовались.

Джош Комо (Josh Comeau) написал о [кейфрейм-анимациях](https://www.joshwcomeau.com/animation/keyframe-animations/). Начиная с базового синтаксиса, Джош приводит примеры применения временных функций к таким анимациям, а также рассказывает о многоступенчатых и динамических анимациях. Помимо этого он затрагивает сокращения синтаксиса и приводит много примеров.

Вы когда-нибудь мечтали знать горячие клавиши своего софта настолько хорошо, чтобы работа, казалось, выполняется со скоростью мысли? Отлично, это ваш шанс. Хочу обратить ваше внимание на ресурс keycombiner.com — собрание хоткеев для разного популярного софта: от браузеров и IDE до просто популярных системных приложений. Кроме того, там есть и курсы для изучения хоткеев, например, для [VSCode](https://keycombiner.com/courses/master-vscode/) и [IntelliJ IDEA](https://keycombiner.com/courses/master-intellij-idea/).

Завершит рубрику инструмент [bundle.js](https://bundle.js.org/) — пакет, который позволяет анализировать зависимости, обнаруживать лишние и неявные и не только. Можно сказать, что это продвинутый аналог пакета bundlephobia, если помните такой.

<ParagraphWithImage imageName="laptopNews" >
  ### Новости релизов

Увидели свет [Dart 2.14](https://medium.com/dartlang/announcing-dart-2-14-b48b9bb2fb67) и [Flutter 2.5](https://medium.com/flutter/whats-new-in-flutter-2-5-6f080c3f3dc). В Dart появился оператор логического сдвига, самые популярные пакеты теперь работают в режиме null safety, были предложены унифицированные правила для линтинга кода на Dart и проектов на Flutter. Сам Flutter тоже неплохо прибавил: прокачали производительность, починили работу приложений на Android в полноэкранном режиме, гораздо больше возможностей теперь у плагина для работы с камерой, также были улучшены плагины для работы над проектами в VSCode и IntelliJ/Android Studio.
</ParagraphWithImage>

Вышел [Rust 1.55](https://blog.rust-lang.org/2021/09/09/Rust-1.55.0.html). В этом выпуске cargo научился не дублировать ошибки компиляции, числа с плавающей точкой парсятся быстрее, также был расширен перечень ошибок ввода-вывода.

Доступна версия [V8 9.4](https://v8.dev/blog/v8-release-94). В этом релизе добавили статические блоки инициализации классов, которые должны исполняться один раз при создании экземпляра. Эта же версия войдет в состав Chrome 94 через несколько недель.

Вышел [prettier 2.4.0](https://prettier.io/blog/2021/09/09/2.4.0.html). Добавили поддержку TypeScript 4.4, также опция jsxBracketSameLine была помечена как устаревшая и переименована в bracketSameLine.

Также отмечу релизы [Ember 3.28](https://blog.emberjs.com/ember-3-28-released/), беты Ember 4 (об Ember 4 мы поговорим подробнее после релиза) и [nginx 1.21.3](https://mailman.nginx.org/pipermail/nginx-announce/2021/000308.html) с небольшим багфиксом и изменением оптимизации чтения тела запросов при использовании HTTP/2.

<ParagraphWithImage imageName="laptopNews" >
  ### Другие новости

Не прошло и года, как служба судебных приставов пришла [оштрафовать Google](https://tjournal.ru/news/438192-sudebnye-pristavy-prishli-v-moskovskiy-ofis-google-no-nashli-odnu-sotrudnicu-kotoraya-otpravila-ih-v-ssha-mash). Задолжала корпорация добра ни много ни мало 32,5 миллиона рублей. На ресепшене сотрудников службы встретила приветливая девушка и отправила штрафователей в солнечную Калифорнию, поскольку московский офис — это ООО «Гугл», а все штрафы в суде выписаны на американское юридическое лицо компании. Чем это закончится, пока непонятно. Будут ли пытаться блокировать Google и все их сервисы в России или просто спустят на тормозах? Продолжим следить за развитием событий.
</ParagraphWithImage>

Как много вы знаете о мутных историях? Определенно меньше, чем сообщество PostgreSQL. Некая организация, не имеющая никакого отношения к PostgreSQL, попыталась зарегистрировать в нескольких странах [торговые марки](https://www.postgresql.org/about/news/trademark-actions-against-the-postgresql-community-2302/) «PostgreSQL» и «PostgreSQL Community». Основатель этой организации утверждает, что торговыми марками необходимо управлять по-другому, и несколько раз пытался начать переговоры с PostgreSQL Core Team. Самодеятельность всё равно непонятная и потенциально опасная для проекта, потому что торговые марки могут быть использованы для захвата контроля над доменами проекта. Такие дела, посмотрим чем закончится этот своеобразный рейдерский захват.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)