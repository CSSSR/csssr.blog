---
title: 'В этом выпуске: security-обновления Node.js, prototype pollution, Tailwind CSS 2.1, Ruby 3.0.1, Cypress 7.0 и победа Google над Oracle.'
soundcloudLink: 'https://soundcloud.com/csssr/prototype-pollution-tailwind-css-21-ruby-301-cypress-70-security-obnovleniya-nodejs'
date: '2021-04-10T00:00:00.000Z'
episodeNumber: 162
tag: 'news'
author: 'Ислам Виндижев'
---

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

Никита Ступин на Хабре написал статью [про вид уязвимости prototype pollution](https://habr.com/ru/company/huawei/blog/547178/). При эксплуатации prototype pollution злоумышленники изменяют прототип базовых объектов, чтобы вызвать исполнение внедряемого таким образом кода. Никита подробно описывает механизм атаки на клиенте и сервере, а также показывает примеры поиска и эксплуатации prototype pollution и дает советы по защите. Получилось очень информативно.
</ParagraphWithImage>

Джейк Арчибальд (Jake Archibald) продолжает разбираться с производительностью сайтов Формулы-1. Это шестая и седьмая статьи серии, в них он обратил внимание на сайты [Ferrari](https://jakearchibald.com/2021/f1-perf-part-6/) и [Haas](https://jakearchibald.com/2021/f1-perf-part-7/). Основная проблема Ferrari — большое количество JS-файлов, блокирующих загрузку, а сайт Haas в целом дублирует проблемы сайтов из предыдущих частей. Если вы еще не знакомы с этой серией статей, у вас есть задачи на производительность, и вы хотите в них разобраться, то очень стоит посмотреть.

Стефани Эклз (Stephanie Eckles) опубликовала статью о том, [как писать CSS с заделом на будущее](https://moderncss.dev/developing-for-imperfect-future-proofing-css-styles/). На примере компонента с тредом комментариев она рассматривает вопросы, связанные с длиной контента, переполнением, доступностью, мультиязычностью и непредсказуемыми медиа-параметрами.

Ещё одна статья Стефани — [о генераторе статических сайтов Eleventy](https://www.smashingmagazine.com/2021/03/eleventy-static-site-generator/). Она отмечает исключительную скорость генератора, а самой крутой фишкой считает то, что он поддерживает 10 разных языков шаблонов, которые еще и можно использовать одновременно. Также она рассказывает о концепциях и приемах, которые используются в Eleventy, и показывает, как стартовать на нём проект.

Дэвид Эглин (David Eglin) на SmashingMagazine написал [обзор headless CMS](https://www.smashingmagazine.com/2021/04/evaluating-headless/). При таком подходе CMS, в отличие от обычных, напрямую не отвечают за фронтенд и отделены от него. В статье есть небольшой экскурс в историю возникновения подхода, советы, как принять решение, нужна вам headless CMS или нет, а также обзор существующих решений.

Эмбер Уилсон (Amber Wilson) на css-tricks написала статью о том, [почему важно правильно подружить инпуты и их лейблы](https://css-tricks.com/html-inputs-and-labels-a-love-story/). В целом — по многим причинам: от банальной понятности интерфейса до доступности. Эмбер показывает, как правильно создать пару лейбл и инпут, делится лучшими практиками и подводными камнями, а также приводит пример из реальной жизни.

Тим Кадлец (Tim Kadlec) выпустил статью [о генерации страниц с оценкой производительности на каждый деплой](https://blog.webpagetest.org/posts/automatic-webpagetest-results-for-every-docs-deploy/). Используются GitHub, Eleventy и Netlify. Суть в том, что при каждом успешном деплое прогоняется WebPageTest и сохраняется ссылка на результат. Как это реализовать Тим рассказывает в своей статье.

Завершает рубрику [коллекция сниппетов кода на чистом JS](https://www.smashingmagazine.com/2021/04/vanilla-javascript-code-snippets/) на SmashingMagazine. Это коллекция разнообразных ресурсов, на которых можно найти готовые решения типовых задач, полифилы, микробиблиотеки, хелперы и много чего другого. Посмотрите, возможно, что-нибудь пригодится.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

Как и было анонсировано, 6 апреля вышли [апрельские security-релизы Node.js](https://nodejs.org/en/blog/vulnerability/april-2021-security-releases/). Обновления получили все поддерживаемые версии, а именно: десятая, двенадцатая, четырнадцатая и пятнадцатая. Стало известно больше подробностей об устраненных уязвимостях: две из них связаны с уязвимостями OpenSSL, третья — с модулем, который может быть атакован с использованием prototype pollution. Версия этого модуля была обновлена, всем трем уязвимостям был присвоен высокий уровень опасности.
</ParagraphWithImage>

Вышла версия [Ruby 3.0.1](https://www.ruby-lang.org/en/news/2021/04/05/ruby-3-0-1-released/). Это пока не багфиксы или новые фичи, а security-релиз, в котором были устранены две уязвимости.

Tailwind CSS, который в последнее время мелькает везде и всюду, отметился обновлением [2.1](https://github.com/tailwindlabs/tailwindcss/releases/tag/v2.1.0). Наверное, самое большое нововведение — это JIT-компилятор CSS. Кроме того, добавили ряд новых утилит.

Вышел [Cypress 7.0](https://www.cypress.io/blog/2021/04/06/introducing-the-cypress-component-test-runner/). Появилась первая реализация нового тест-раннера для компонентов, это отдельный от e2e-раннера движок. Их можно использовать вместе или по отдельности. Фишка в том, что тесты компонентов прогоняются примерно с той же скоростью, что у Jest или Mocha, и требуют меньшей инфраструктуры. Пока это альфа-версия, но звучит неплохо.

Также отмечу релизы фреймворка [Laravel 8.36](https://laravel-news.com/laravel-8-36-0) и [NativeScript 8](https://blog.nativescript.org/nativescript-8-announcement/).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

Верховный суд США в итоге [встал на сторону Google](https://news.ycombinator.com/item?id=26699106) в споре с Oracle. Напомню, Oracle подавала в суд на Google за неправомерное использование Java API в платформе Android. В итоге тяжба длилась 11 лет и состояла из нескольких апелляций с разных сторон. Суд признал использование Java API честным, потому что позаимствовано было 11 тысяч строк кода из почти 3 миллионов, а сделано это было для расширения возможностей других разработчиков на смартфонах.
</ParagraphWithImage>

Продолжилось [расследование атаки на git-сервер PHP](https://externals.io/message/113981). В итоге стало известно, что злоумышленник смог закоммитить изменения с использованием HTTPS и доступа с использованием логина/пароля. Также подозревается, что утекла база сайта PHP. По сути достоверно установить что-либо не удалось и было решено усилить меры безопасности. PHP полностью переедет на GitHub, свой git-сервер поддерживаться больше не будет, также будет усилена безопасность самого сайта PHP.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
