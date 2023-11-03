---
title: 'В этом выпуске: релизы Next.js 14, Chrome 119 и Firefox 119, Yarn 4 и Node.js 21. Также в выпуске будет о воркерах, работе с монорепами, об управлении несколькими git-идентичностями и очередном сравнении фреймворков, а также старте опроса State of React.'
soundcloudLink: 'https://soundcloud.com/csssr/nextjs-14-chrome-119-firefox-119-workers-formatirovanie-bez-eslint-start-state-of-react'
date: '2023-11-03T00:00:00.000Z'
episodeNumber: 243
tag: 'news'
author: 'Ислам Виндижев'
---

Всем привет, это «Новости 512» от CSSSR. К сожалению, в этом выпуске не так много полезных статей для вас, как мне хотелось бы, но произошло достаточно много событий и много релизов, так что дальше откладывать выпуск было некуда. Поэтому в этом выпуске мы поговорим о релизах Chrome 119 и Firefox 119, про воркеры, работу с монорепами и без, об управлении несколькими git-идентичностями и в очередной раз сравним фреймворки. Что произошло ещё: Next.js 14 сломал Твиттер и породил кучу мемов, релиз Yarn 4 прошёл незамеченным, словно его и не было, а у Node.js теперь новая LTS-версия. Преемник Rome Biome продолжает выпускать новые релизы, Remix и Astro — тоже. Результатов опроса State of HTML ещё нет, но стартанул опрос State of React.

Теперь подробнее обо всём.

<ParagraphWithImage imageName="laptopNews" >
  ### Интересные публикации

На всех парах к нам несётся семнадцатая версия Angular. [Одной из его фич будет](https://www.angularaddicts.com/p/angular-17-feature-deferred-loading-with-signals) `deffered loading` или приоритезированная загрузка. Спрос на разного рода механизмы сегментации контента и задания приоритетов растёт, для этого новая фича и задумана. Например, если на странице размещены видео и комментарии, можно отдать приоритет загрузке видео и загрузить в первую очередь его, а потом всё остальное. Пока это RFC, но мы увидим его в Angular 17. Идея довольно простая, но мощная. Фичу демонстрирует (Gergely Szerovay) на разных примерах в своей статье.
</ParagraphWithImage>

Дальше мы поговорим про разные воркеры. [Следующая статья](https://habr.com/ru/articles/767494/) о том, что такое `Web Worker`, какие они бывают, зачем нужны и какие проблемы помогут решить. Вообще, это механизм запуска скриптов в фоне, которые помогает справиться с проблемой однопоточности JS в некоторых случаях. Воркеры бывают выделенные и общие: в первом случае это изолированный контекст, во втором, как вы могли догадаться, общий. В воркерах можно выполнять любые фоновые задачи, которым необязательно или, наоборот, необходимо не находиться в основном потоке. В статье есть схемы, примеры применения и краткие объяснения по тому, как работать с технологией.

Теперь о `Service Workers`. [Технология](https://habr.com/ru/articles/769170/) с не такими очевидными областями применения, но она помогает перехватывать сетевые запросы и кэшировать ресурсы, помогая поддерживать работу приложения в оффлайне. Через Service Worker также можно организовать отправку push-уведомлений. Всё это на примерах рассматривает автор материала. Обе статьи, кстати, одного автора — его зовут Никита, и он ведёт свой телеграм-канал «Фронтенд для души». Так что, если вы любите получать информацию через телегу или авторские каналы, забегайте к Никите на огонёк.

Можно ли эффективно выстроить [процессы работы с монорепозиторием](https://habr.com/ru/companies/oleg-bunin/articles/735022/)? Как раз об этом рассказывал на конференции Андрей Кочеров. Андрей рассказывает о том, как была выстроена работа при помощи методологии [Trunk Based Development](https://trunkbaseddevelopment.com/5-min-overview/). Это подход, при котором все ветки выходят из одной (этого самого транка) и вливаются туда же, а сам транк — источник истины и точка синхронизации для всех разработчиков. Автор рассказывает о том, какие ещё технологии применяются на проекте и как всё это работает в рамках выбранной методологии. Что-то подсказывает мне, что сейчас больше людей, которые морщатся при слове «монорепа» и от идеи единой ветки для синхронизации, но такой подход имеет право на жизнь. Загляните — возможно, как раз для вашего будущего проекта такой подход подойдёт лучше.

Ещё одна команда доросла до того, чтобы распилить на микрофронтенды монолит. На этот раз это команда Самоката. Данил Чушко поделился опытом [разделения монолита на Angular на Vue-микрофронтенды](https://habr.com/ru/companies/samokat_tech/articles/766978/). Команда быстро росла, стартанул редизайн и ребрендинг, а также было много легаси — это были основные причины перехода. Данил немного рассказывает о теории микрофронтендов и пошагово описывает процесс перехода. В конце он приводит таблицу с плюсами и минусами, а также репозитории с примерами кода.

Валентин Ким в своей статье на Хабре поделился идеей создания [общего файла конфигурации ESLint](https://habr.com/ru/articles/767496/). Идея простая: делаем свой конфиг в виде npm-пакета, потом на на своих проектах обновляем версию — и правила обновляются на всех. Понятно, что это определённый случай применения, но идея ничего так.

Касаемо ESLint. Команда ESLint выпустила статью в своём блоге о том, что [правила для форматирования пометят как устаревшие](https://eslint.org/blog/2023/10/deprecating-formatting-rules/). В посте поясняется, почему было принято такое решение и сама команда предлагает для форматирования пользоваться узкоспециализированным инструментом, например Prettier. Правила форматирования будут помечены как `deprecated` с новым релизом уже 3-го ноября, список устаревших правил вы найдёте в самом посте. Больше подробностей в блоге ESLint.

Как много можно узнать о JS, удалив одно свойство JS-объекта? Оказывается, довольно много. Хуан Диего Родригез (Juan Diego Rodríguez) в своей статье [рассматривает задачку удаления свойства объекта](https://www.smashingmagazine.com/2023/10/removing-object-properties-javascript/), так чтобы один объект стал похож на второй. Он собрал список из шести решений и рассматривает каждое из них подробно, рассматривая нюансы.

Далее сравнение фреймворков, о котором я говорил в начале. Речь идёт о React, Angular и Vue. Сравнение довольно большое и разделено на три части. [Первая часть](https://habr.com/ru/companies/auriga/articles/703836/) больше об основах (архитектуре, экосистеме, производительности и пороге входа), [вторая](https://habr.com/ru/companies/auriga/articles/753270/) — про описание логики и роутинге, а [третья](https://habr.com/ru/companies/auriga/articles/768050/) — про управление состоянием и итоги. В конце есть таблица, в которой приведены примеры известных проектов, которые были построены на этих фреймворках. Сравнений было много, и это одно из неплохих.

Гаррит Франк (Garrit Franke) написал заметку о том, [как управлять несколькими git-идентичностями](https://garrit.xyz/posts/2023-10-13-organizing-multiple-git-identities). Например, если вы хотите разделять рабочие и личные проекты, это может быть полезно. Он описывает интересную фичу `.gitconfig`, которая позволяет по условию включать дополнительные файлы конфигурации. Я про эту фичу узнал в сейчас лет, потому что не читал документацию git от корки до корки, но век живи — век учись.

В конце рубрики [8 вопросов для Senior-разработчиков](https://habr.com/ru/companies/timeweb/articles/769844/), которые могут прозвучать на JS-собеседовании. Это небольшая заметка с обзором вопросов и подробными ответами на них. Загляните — возможно, там будет что-то полезное для вас. Кстати, Недавно Кайл Симпсон (тот самый, который написал You Don’t Know JS), поделился тем, что валит собеседования с JS одно за другим и не может найти работу. Как писал он сам, «Видимо, я и правда не знаю JS».

<ParagraphWithImage imageName="manWithLaptop">
  ### Новости релизов

Давайте в этом выпуске сначала про фреймворки. Вышел [Next.js 14](https://nextjs.org/blog/next-14). В этом релизе ребята представили экспериментальную версию `Partial Prerendering` — оптимизацию компилятора для динамического контента с быстрым статическим первым ответом. Команда продолжает работать над Turbopack, который должен убить Webpack и, наверное, любые другие продукты со словом «pack» в названии. Он стал ещё быстрее в разных сценариях. Помимо этого, был представлен бесплатный курс `Next.js Learn`, который поможет перейти с React на Next.js. Я специально не говорил о `Server Actions` сразу. Так вот, на презентации фича и пример кода с SQL-запросом в компоненте вызвали большой резонанс и волну мемов. Интернет всё не так понял: на клиенте никакие SQL не выполняются. Определяется специальная функция, которая безопасно выполняется на сервере, но вызывается из компонента. В двух словах не объяснить, более подробное описание есть в документации новой версии.
</ParagraphWithImage>

За прошедшее время релизов Astro было целых два. В [версии 3.3](https://astro.build/blog/astro-330/) добавили новый компонент `<Picture />`, улучшения подсветки синтаксиса и другие небольшие улучшения. Также все пакеты `@astro` теперь обладают `provenance` в npm (напомню, это дополнительное подтверждение того, что пакет из достоверного источника и не скомпрометирован). В [версии 3.4](https://astro.build/blog/astro-340/) появилась возможность рендерить компоненты как фрагменты, была улучшена производительность компонента `<Image />` и представлен ряд багфиксов. Кроме того, появился экспериментальный оверлей для разработчиков, который позволяет просматривать компоненты в реальном времени, получать подсказки для разработки и другую информацию.

Фреймворк [Remix 2.2](https://remix.run/blog/remix-heart-vite) теперь полностью поддерживает Vite. Хорошая новость для всех энтузиастов Remix и любителей Vite.

Теперь браузеры и рантаймы. Доступен Chrome 119. Релиз небольшой и в основном посвящен CSS. Наверное, самая мощная фича — ситаксис относительного цвета. Новый синтаксис позволяет более интуитивно задавать манипуляции с цветом, работать в разных цветовых пространствах и полезен для большого количества случаев. Я приложу [ссылку на отдельную статью](https://developer.chrome.com/blog/css-relative-color-syntax/) Адама Аргайла (Adam Argyle) на эту тему. `clip-path()` теперь поддерживает больше значений и позволяет более гибко задавать область обрезки. Также появились новые псевдоклассы `:user-invalid` и `:user-valid`. В DevTools подвезли пару обновлений для работы с `@property`, прекратили поддержку WebSQL и обновили список устройств для эмуляции. Больше подробностей в официальных обзорах [Chrome](https://developer.chrome.com/blog/new-in-chrome-119/) и [DevTools](https://developer.chrome.com/blog/new-in-devtools-119/) от Google.

[FIrefox 119](https://www.mozilla.org/en-US/firefox/119.0/releasenotes/) теперь поддерживает JS-методы `groupBy` и `orderBy`, CSS-функция `attr()` поддерживает фолбек в виде второго аргумента, а SVG-элементам теперь можно задавать размер в ряде новых единиц, например в единицах измерения шрифтов, вьюпорта или абсолютных единицах. Также появилась поддержка credentialless-режима для обеспечения безопасностей персональных данных пользователей. Отмечу новое более удобное представление истории браузера.

Вышел [Node.js 21](https://nodejs.org/en/blog/announcements/v21-release-announce). Это новая current-версия, в которой модули `fetch` и `WebStreams` были помечены как стабильные. Вместе с тем 20 версия Node.js с версии 20.9 была зафиксирована как [новая LTS-версия](https://nodejs.org/en/blog/release/v20.9.0).

Райнтайм Bun получил аж 3 патча [1.0.6](https://bun.sh/blog/bun-v1.0.6), [1.0.7](https://bun.sh/blog/bun-v1.0.7) и [1.0.8](https://bun.sh/blog/bun-v1.0.8). Все они посвящены в основном багфиксам, которых за три патча было почти три сотни. Перечислять я их, конечно же, не буду. Основная мысль в том, что использовать Bun на проектах всё-таки пока может быть рановато. Ссылки на патчи вы найдёте в описании выпуска.

Далее немного об инструментах. [Релиз Yarn 4](https://yarnpkg.com/blog/release/4.0) словно прошёл как-то мимо интернета. Тем не менее он случился. В новой версии появился новый движок ограничений — это механизм, который позволяет валидировать, что в разных воркспейсах нет конфликтов между версиями пакетов. Старый движок был написан на Prolog, на нём же описывались ограничения; даже не понимаю, почему от него отказались. Новый написан на JS и опционально поддерживает TypeScript. Также в релизе отмечается, что производительность Yarn 4 в большинстве основных сценариев теперь сопоставима со скоростью работы pnpm. Больше подробностей в release notes.

[Storybook 7.5](https://storybook.js.org/blog/storybook-7-5/) теперь поддерживает Vite 5 и Lit 3, в два раза быстрее стартует на React-проектах с TypeScript, а также получил ряд улучшений для работы с Angular.

Вышла версия [Biome 1.3.1](https://biomejs.dev/internals/changelog/#131-2023-10-20). Напомню, это своего рода преемник тулчейна Rome. Пока он не показывает невероятных прорывов, но проект продолжает развиваться.

Вот ещё несколько релизов, на которые стоит обратить внимание. Oracle выпустила [октябрьское security-обновление](https://blogs.oracle.com/security/post/october-2023-cpu-released) для своих продуктов, вышел [октябрьский релиз VSCode 1.84](https://code.visualstudio.com/updates/v1_84) c интересными фичами, а команда опенсорс-решения для создания сайтов с документацией Docusaurus выпустила [версию 3.0](https://docusaurus.io/blog/releases/3.0) своего продукта.

Также я отмечу релизы [Cypress 13.4.0](https://docs.cypress.io/guides/references/changelog#13-4-0), бандлера [Rollup 4.2.0](https://github.com/rollup/rollup/releases/tag/v4.2.0), [VIrtualBox 7.0.12](https://www.mail-archive.com/vbox-announce@virtualbox.org/msg00227.html) и ядра [Linux 6.6](https://lkml.org/lkml/2023/10/30/11).

<ParagraphWithImage imageName="laptopNews" >
    ### Другие новости

Про сам релиз Next.js 14 мы уже поговорили, но вот про то, как из-за этого сломался Твиттер — простите, X — мы ещё не говорили. Презентация `Server Actions` не только породила огромное количество мемов в интернете из-за SQL-запроса в компоненте, но и подняла волну недовольства качеством релизов Next.js и поддержкой продуктов Vercel. В основном много недовольства фичами, которые помечены как стабильные, но работают как беты. Много недовольства игнорированием issues и поддержкой, а также перекосом в сторону прекрасного маркетинга и плохой разработки. Мы уже несколько раз говорили о том, что маркетинга стало много и стало сложно ориентироваться в технологиях и находить действительно надежные. Сделать с этим особо нечего — остаётся хорошо взвешивать технические решения и не вестись на уловки опенсорс-маркетологов. Я приведу одну [ссылку на обсуждение проблем Next.js](https://news.ycombinator.com/item?id=38028480), если интересно — загляните.
</ParagraphWithImage>

В заголовке вы уже видели опрос [State of React](https://survey.devographics.com/en-US/survey/state-of-react/2023). Он построен точно так же, как аналогичные `State of …`, а я приглашаю вас в нём поучаствовать. Опрос должен занять 10-15 минут, а на результаты мы потом посмотрим вместе.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)