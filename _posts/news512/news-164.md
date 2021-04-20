---
title: 'В этом выпуске: микрофронтенды в Delivery Club, JS-классы, смарт-контракты с Ethereum, отчеты о состоянии JS-фреймворков и стейт-менеджеров на первый квартал 2021, Django 3.2 и опрос о скролле от команды Google Chrome.'
soundcloudLink: 'https://soundcloud.com/csssr/mikrofrontendy-v-delivery-club-js-klassy-sostoyanie-js-freymvorkov-i-steyt-menedzherov-minuss-dart'
date: '2021-04-20T00:00:00.000Z'
episodeNumber: 164
tag: 'news'
author: 'Ислам Виндижев'
---

  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

Сегодняшний выпуск начнется со статьи [о микрофронтендах](https://habr.com/ru/company/mailru/blog/552240/) и их внедрении в Delivery Club. Delivery было сложно жить с монолитом, страдало тестирование и были проблемы с развертыванием. В статье описывается старое устройство проекта и, собственно, переход на микрофронтенды. Спойлер: оно того стоило.
</ParagraphWithImage>

Следующий материал — [о переходе с Parcel на Snowpack](https://benfrain.com/migrating-from-parcel-to-snowpack-build-tool-comparison/). Бен Фрейн (Ben Frain) поделился своим опытом миграции. Он сравнивает оба бандлера, рассказывает о принципах их работы и возможностях. В итоге Бен заключает, что Snowpack — достаточно сформировавшийся инструмент, и им можно пользоваться, несмотря на то, что он пока не очень распространен.

Джейк Арчибальд (Jake Archibald) продолжает свою серию о производительности. В этот раз исследуется [сайт McLaren](https://jakearchibald.com/2021/f1-perf-part-8/). Главная проблема — загрузка большого CSS-файла со стороннего домена. Кроме того, содержимое страницы отображается после события DOMContentLoaded. Загрузка сторонних скриптов, блокирующих парсинг страницы, напрямую влияет на это событие, и появление контента задерживается. Есть и проблемы с изображениями. После всех предложенных оптимизаций время загрузки упало с 25 до 3 секунд.

Андреа Джиаммарки (Andrea Giammarchi) написал статью [о JavaScript-классах](https://webreflection.medium.com/js-classes-are-not-just-syntactic-sugar-28690fedf078). Суть в том, что автор считает некорректным называть классы синтаксическим сахаром для прототипов. Многие фичи JavaScript-классов можно выразить на ES5, но они будут проигрывать в скорости и безопасности. В итоге, принципы прототипного наследования на функциях и классах похожи, но это не одно и то же.

Закончился первый квартал 2021 и Алексей Антипов подвел его итоги в области [JS-фреймворков](https://moiva.io/blog/2021-q1-state-of-js-frameworks) и [стейт-менеджеров](https://moiva.io/blog/2021-q1-report-state-management). Получилось 2 отчета со сравнением разных инструментов по многих показателям: от количества звезд до возраста и лицензии. В каждом из отчетов рассматривается около 20 инструментов, это неплохой способ посмотреть на тренд и познакомиться с другими инструментами.

В прошлом выпуске я говорил об измерении Web Vitals в «боевых» условиях. Эту же тему на SmashingMagazine поднял Барри Поллард (Barry Pollard). Его [гайд](https://www.smashingmagazine.com/2021/04/complete-guide-measure-core-web-vitals/) несколько более объёмный и подробный, но в нём речь также идет про сбор данных реальных пользователей для исправления проблем, влияющих на метрики.

В завершение рубрики — немного практики и экспериментов: [скрейпинг с Node.js и Playwright](https://www.scrapingbee.com/blog/playwright-web-scraping/), полный [гайд](https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13) по разработке full-stack приложения, которое работает с блокчейном Ethereum, и [туториал для начинающих по разработке игр на Unity](https://www.freecodecamp.org/news/game-development-for-beginners-unity-course/).

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

  Крупных релизов к этому выпуску не случилось, поэтому пробежимся коротко.
</ParagraphWithImage>

Angular отметился релизами [11.2.10](https://github.com/angular/angular/releases/tag/11.2.10) и [12.0.0 next-9](https://github.com/angular/angular/releases/tag/12.0.0-next.9). Релиз-кандидатов 12 версии пока не было.

Вышел [Django 3.2](https://www.djangoproject.com/weblog/2021/apr/06/django-32-released/). Это релиз с длительным сроком поддержки, на ближайшие 3 года. Кроме фреймворка вышло обновление [Django Debug Toolbar](https://www.djangoproject.com/weblog/2021/apr/14/debug-toolbar-security-releases/). Это был security-релиз.

Также отмечу релизы [Cypress 7.1](https://github.com/cypress-io/cypress/releases/tag/v7.1.0) и [eslint-plugin-vue 7.9.0](https://github.com/vuejs/eslint-plugin-vue/releases/tag/v7.9.0).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

Core team браузера Google Chrome [объявила о начале опроса о скролле](https://web.dev/2021-scroll-survey/). У вас есть возможность поучаствовать и дать обратную связь, поделиться мнением, что не так со скроллом и что можно было бы сделать лучше. [Опрос](https://google.qualtrics.com/jfe/form/SV_bjbaTccU1lpPlVX) рассчитан на 5-10 минут.
</ParagraphWithImage>

Wrike отказывается от языка Dart. Если коротко, язык перестал удовлетворять все потребности разработки. Отмечается, что Dart по-прежнему останется большой частью разработки, ведь на нём написано около 2 500 000 строк кода, а для новых проектов будут использовать другой стек. [В первой статье](https://habr.com/ru/company/wrike/blog/551962/) на Хабре есть подробности и история выбора текущего технического стека, во [второй](https://habr.com/ru/company/wrike/blog/551964/) критерии выбора нового стека и ответы на часто задаваемые вопросы, связанные с переходом. В качестве нового стека выбрали TypeScript в связке с React.

И небольшая экспресс-новость. В Firefox Nightly [появилась поддержка QUIC и протокола HTTP/3(https://hacks.mozilla.org/2021/04/quic-and-http-3-support-now-in-firefox-nightly-and-beta/)].

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
