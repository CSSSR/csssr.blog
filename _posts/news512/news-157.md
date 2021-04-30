---
title: 'В этом выпуске: история развития React API, записи докладов и воркшопов с конференции «Я люблю фронтенд», работа this, релизы браузеров и V8, семантическое версионирование и переименование дефолтной ветки в GitLab.'
soundcloudLink: 'https://soundcloud.com/csssr/istoriya-react-api-doklady-i-vorkshopy-s-ya-3-frontend-nyuansy-this-relizy-brauzerov-i-v8-semver'
date: '2021-03-19T00:00:00.000Z'
episodeNumber: 157
tag: 'news'
author: 'Ислам Виндижев'
---

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

Алекс Котлярский из Facebook рассказал [про историю развития API React](https://frantic.im/react-api-evolution). За время его существования подход к написанию компонентов несколько раз менялся. Алекс вспомнил о React.createClass и биндинге методов. Затем компоненты стали создавать через ECMAScript классы и функциональные компоненты. Позже мы пришли к компонентам высшего порядка, или HOC, но они не были идеальным решением для работы с поведением, поэтому в 2019 году ребята из команды React представили хуки.
</ParagraphWithImage>

[Записи докладов конференции «Я люблю фронтенд»](https://www.youtube.com/playlist?list=PLKaafC45L_SQvmgHWgtUeX_Y59NiZhmEF) доступны в виде плейлиста. И доклады были огонь: Артём Арутюнян рассказывал об архитектуре стейт-менеджеров, Василика Климова — о виртуальной реальности, а Валерия Курмак — о UX незрячих людей. Были и классные воркшопы: Андрей Мелихов знакомил зрителей с теорией и практикой dependency injection, а Юля Миоцен анимировала викинга на CSS. В общем, стоит приобщиться.

Джейк Арчибальд на web.dev подробно рассказал о том, [как работает this](https://web.dev/javascript-this/). Он разбирает разные случаи создания контекста и его поведение в каждом из них: от стрелочных функций до особенностей поведения в strict mode. Интересно, подробно и с примерами, рекомендую.

В блоге Яндекс.Практикума была опубликована статья [о написании кроссбраузерных браузерных расширений](https://habr.com/ru/company/yandex_praktikum/blog/545664/). Саша Коновалов на примере своего пет-проекта рассказал об архитектуре расширений и о том, как достигается кроссбраузерность. Также в конце статьи есть много ссылок на полезные материалы по теме. Если вы всегда мечтали создать собственное расширение — это отличная возможность попробовать.

Ахмад Шадид написал новую статью, в которой углубляется в [логические CSS-свойства](https://ishadeed.com/article/css-logical-properties/). Он разбирается в базовых понятиях и новых вариантах знакомых CSS-свойств, которые опираются на направление письма и помогают локализовать интерфейсы.

В заключение три блиц-материала:
заметка о том, почему стоит [отказаться от ховеров](https://wecreate.digital/blog/menu-clicks-vs-hover/) на сайте;
ресурс, посвящённый [семантическому версионированию](https://semver.npmjs.com/), который поможет разобраться новичкам и пригодится старичкам;
статья о том, как эффективно читать [спецификации веб-стандартов](https://emilymstark.com/2021/03/14/tips-for-reading-web-standards.html).

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

Вышло обновление [Chrome 89](https://chromereleases.googleblog.com/2021/03/stable-channel-update-for-desktop_12.html), в котором исправлены пять уязвимостей, в том числе одна нулевого дня. Подробностей пока нет, известно, что уязвимость вызвана обращением к уже освобожденной области памяти в браузерном движке Blink и активно использовалась злоумышленниками.
</ParagraphWithImage>

Вышло обновление [Mozilla Firefox 86.0.1](https://www.mozilla.org/en-US/firefox/86.0.1/releasenotes/). В нём исправили несколько проблем: зависание на macOS, крэши на разных дистрибутивах Linux, а также ошибку, приводившую к потере фокуса в активном окне.

Доступно [Safari Technology Preview 122](https://webkit.org/blog/11577/release-notes-for-safari-technology-preview-122/). Немало интересных изменений: приватные методы JS, top-level await, улучшения aspect-ratio, псевдокласс :focus-visible и разные другие улучшения CSS, а также доработки веб-инспектора.

Движок V8 отметился релизом версии [9.0](https://v8.dev/blog/v8-release-90). В ней появится поддержка RegExp match indices и быстрый доступ к полям родителя объекта. Также была добавлена экспериментальная фича: ускоренные вызовы WebAssembly функций из JS.

Current-версия Node.js получила обновление [15.2.0](https://nodejs.org/en/blog/release/v15.12.0/). В этом обновлении был реализован метод abort() объекта AbortSignal, была улучшена производительность методов writeFile и readFile модуля fs, также были доработаны модули crypto, node-api и worker.

Storybook также получил небольшое обновление: вышла версия [6.2](https://storybook.js.org/blog/storybook-for-webpack-5/). Это минорный релиз, в котором появилась экспериментальная поддержка webpack 5. Разработчики отмечают, что пока сборщиком по умолчанию останется четвертая версия webpack.

Также в этом выпуске отмечу релизы [Java SE 16](https://mail.openjdk.java.net/pipermail/announce/2021-March/000295.html), [СУБД SQlite 3.35.2](https://www.sqlite.org/changes.html) и дистрибутива [Solaris 11.4 SRU31](https://blogs.oracle.com/solaris/announcing-oracle-solaris-114-sru31).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

Градус терпимости, толерантности, равенства и братства в интернете продолжает расти. На этот раз GitLab присоединился к борьбе за справедливость — теперь дефолтная ветка репозиториев будет называться [main, а не master](https://about.gitlab.com/blog/2021/03/10/new-git-default-branch-name/). Соответствующее изменение коснулось, естественно, и репозитория самого GitLab.
</ParagraphWithImage>

<Note>
  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
</Note>
