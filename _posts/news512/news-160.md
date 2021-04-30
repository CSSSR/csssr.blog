---
title: 'В этом выпуске: апрельские security-релизы Node.js, Next.js 10.1, Socket.io 4 и анонс Deno Company.'
soundcloudLink: 'https://soundcloud.com/csssr/nextjs-101-socketio-4-aprelskie-security-relizy-nodejs-anons-deno-company-sublime-text-4'
date: '2021-04-02T00:00:00.000Z'
episodeNumber: 160
tag: 'news'
author: 'Ислам Виндижев'
---

  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

Лукас Вайксельбаум (Lukas Weichselbaum) опубликовал [статью о Content Security Policy](https://web.dev/strict-csp/). Эта политика позволяет предотвратить XSS атаки на веб-сайты, но зачастую они остаются уязвимыми. Лукас в статье рассказывает, как реализовать политику с большей степенью безопасности, используя хеши или случайные числа.
</ParagraphWithImage>

Джейк Арчибальд (Jake Archibald) продолжает свою серию статей о веб-перформансе сайтов команд Формулы-1. В этот раз под лупой Джейка оказались сайты [Williams](https://jakearchibald.com/2021/f1-perf-part-4/) и [Aston Martin](https://jakearchibald.com/2021/f1-perf-part-5/). Относительно предыдущих они показали себя хорошо. Но всё равно без предложений по оптимизации не обошлось. Основными проблемами на обоих сайтах были лишние соединения и хостинг CSS.

Вышла новая статья от частого гостя наших выпусков Ахмада Шадида (Ahmad Shadeed). На этот раз он пишет [о наложении текста на изображения](https://ishadeed.com/article/handling-text-over-image-css/) при помощи CSS. Основная проблема — читабельность текста. Ахмад разбирает разные решения: с использованием градиентов, вариациями фона и теней для текста. Для каждого из них он приводит реализацию и разбор с мотивацией.

Лия Веру (Lea Verou) в своем блоге написала [статью о том, как за несколько минут сотворить тёмную тему](https://lea.verou.me/2021/03/inverted-lightness-variables/) при помощи инвертированных переменных, отвечающих за светлые цвета темы. Идея в том, чтобы использовать кастомное свойство для задания того, насколько тема должна быть светлой. Используется цветовая модель HSL, что делает решение не идеальным: цвет распределяется не вполне равномерно. Эту проблему может решить цветовая модель HCL, но она пока почти нигде не поддерживается. Если вы интересуетесь цветовыми моделями — добро пожаловать в блог Лии.

Айрис Лешнянин (Iris Lješnjanin) на SmashingMagazine опубликовала [обзор инструментов для аудита CSS](https://www.smashingmagazine.com/2021/03/css-auditing-tools/). Среди них: инструменты для выявления дублирующихся стилей и неиспользуемого кода, анализа сложности и специфичности.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

Были анонсированы [апрельские security-релизы Node.js](https://nodejs.org/en/blog/vulnerability/april-2021-security-releases/). Будут исправлены 3 уязвимости, дата релиза 6 апреля. Не забудьте обновиться.
</ParagraphWithImage>

Тем временем продолжается поддержка current-версии. В релизе версии [15.13.0](https://nodejs.org/en/blog/release/v15.13.0/) npm обновили до версии 7.7.6, в ней команды npm run и exec поддерживают воркспейсы.

Добротное обновление выпустила команда Next.js. [В релизе 10.1](https://nextjs.org/blog/next-10-1). React Refresh ускорили в 3 раза, а многие устаревшие модули заменили, что значительно ускорило установку. В Next.js Commerce появилась интеграция с Shopify, а в next/image появилась возможность указать свой CDN для изображений. В общем, надо брать.

[Socket.io 4](https://ably.com/blog/whats-new-in-socketio-4) уже доступна. Напомню, это библиотека для обмена данными в реальном времени, которая работает на веб-сокетах. Самые крутые нововведения — поддержка типизированных событий и иммутабельность. Кроме того, провели работы по рефакторингу API — теперь он более лаконичный и понятный. Есть и breaking changes, в основном, в серверной части. Гайд по миграции на четвертую версию также доступен.

Не только у Socket.io появилось что-то с цифрой 4. Многие, наверняка, про него и забыть-то забыли, а он ещё живой. Я говорю о редакторе кода Sublime Text. [Четвёртая версия](https://gist.github.com/jfcherng/7bf4103ea486d1f67b7970e846b3a619) сейчас находится в стадии закрытой альфы. Что обещают: улучшенный интерфейс и саджесты, автопереключение темной и светлой темы, встроенную поддержку TypeScript, TSX, JSX. Можно поинтересоваться [списком изменений](https://gist.github.com/jfcherng/7bf4103ea486d1f67b7970e846b3a619) или посмотреть [видеообзор](https://vimeo.com/529550701).

Также отмечу релизы [Laravel 8.34](https://laravel-news.com/laravel-8-34-0), [nginx 1.19.9](http://nginx.org/en/CHANGES) и [njs 0.5.3](http://nginx.org/en/docs/njs/changes.html#njs0.5.3).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

В блоге Deno появился [анонс образования Deno Company](https://deno.com/blog/the-deno-company). Теперь это не просто проект, а настоящая компания, с деньгами и со своим штатом сотрудников. В анонсе Райан Дал (Ryan Dahl) говорит о том, что Deno останется бесплатным, а код — под лицензией MIT. Бизнес будут строить на приватных решения на Deno. Новости безусловно хорошие, это подтолкнет развитие проекта, и у Deno появляется гораздо больше шансов стать убийцей Node.js. Между прочим, инвестировали в Deno около 5 миллионов долларов, что для такого проекта на фактическом старте — серьезная заявка на успех.
</ParagraphWithImage>

История со Столлманом уже набила оскомину, поэтому коротко о развитии событий. Сам Столлман пока на месте и молчит, но из совета директоров Фонда Свободного ПО [ушли](https://www.fsf.org/blogs/executive-director/management-team-members-resigning) исполнительный директор, технический директор и заместитель директора. Продолжаем наблюдать. И смех и грех.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
