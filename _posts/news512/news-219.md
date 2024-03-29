---
title: 'В этом выпуске мы поговорим про новую мажорную версию Next.js и бандлере Turbopack, завершение цикла статей о многопоточности, почему может быть пора отказываться от CSS-in-JS, коснёмся релизов браузеров и публичного превью редактора кода Fleet от JetBrains.'
soundcloudLink: 'https://soundcloud.com/csssr/chrome-107-firefox-106-nextjs-13-i-turbopack-publichnoe-prevyu-fleet'
date: '2022-10-28T00:00:00.000Z'
episodeNumber: 219
tag: 'news'
author: 'Ислам Виндижев'
---

Всем привет! Это «Новости 512» от CSSSR. В этом выпуске мы поговорим про завершение цикла статей о многопоточности, почему может быть пора отказываться от CSS-in-JS, коснёмся релизов браузеров, новой мажорной версии Next.js и бандлера Turbopack, а также публичного превью редактора кода Fleet от JetBrains. Также в выпуске будут другие материалы и релизы с момента выхода предыдущего выпуска.

<ParagraphWithImage imageName="laptopNews" >
  ### Интересные публикации

В позапрошлом выпуске мы обсуждали серию статей о многопоточности в Node.js. Кирилл Боровиков завершил серию статей. Напомню, в первых четырёх он по отдельности рассматривал разные аспекты многопоточности: FIFO, кольцевой буфер, Worker Threads, нагрузку на потоки, разделяемую память и операции над ней и другие. Понятно, что это всё несколько сферическо-вакуумные примеры. В [завершении цикла](https://habr.com/ru/company/tensor/blog/693738/) Кирилл демонстрирует применение всех этих техник на примере эффективного микросервиса, который автоматически подстраивается под изменения входящей нагрузки. Имейте в виду, что это пример. Также автор отмечает, что это пример сбалансированного использования аппаратных ресурсов. Получилось здорово, если пропустили цикл — обязательно посмотрите.
</ParagraphWithImage>

Следующие два материала с CSS Tricks. Первый о псевдоклассе :has(). :has() поддерживается в Chrome и Safari уже какое-то время, и начали появляться первые более прикладные статьи о нём. В этой Брех Де Рьют (Brecht De Ruyte) [рассказывает](https://css-tricks.com/creating-animated-clickable-cards-with-the-has-relational-pseudo-class/) о том, как при помощи :has() и :after реализовать анимированную кликабельную карточку. Он рассказывает о подходах с применением ссылки, JS и :after. Потом показывает комбинацию :after и :has(), которая дружит с доступностью, анимируется, не требует JS и тоже довольно просто реализуется. Ко всем подходам бонусом описываются их преимущества и недостатки.

Вторую написал уже известный вам Темани Афиф (Temani Afif). Здесь речь пойдёт об оформлении изображений. Это [вторая статья](https://css-tricks.com/fancy-image-decorations-masks-and-advanced-hover-effects/) в его цикле на эту тему, будет ещё третья. В статье вы увидите примеры работы с масками и продвинутые эффекты по ховеру, например, классные появляющиеся рамки. Интересно, что используется только один элемент `img`.

Сэм Магура (Sam Magura) — разработчик из компании Spot и мейнтейнер одной из CSS-in-JS библиотек Emotion — в своей [статье](https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b) рассказал о том, почему решил отказаться от CSS-in-JS. Он разбирает саму технологию, отмечает её плюсы и минусы (такие минусы, как увеличение размера бандла и нагрузка на рантайм и браузер). Здесь же бенчмарки и классная отсылка к фильму «Хороший, плохой, злой».

Йоханес Кетманн (Johannes Kettmann) написал маленький [стартовый гайд](https://profy.dev/article/cypress-react) по тестированию UI React-приложений с Cypress. Автор использует готовое приложение  и демонстрирует написание простых тестов, также он поближе знакомит читателя с самим Cypress. Получился очень доступный базовый гайд.

Патрик Бросет (Patrick Brosset) в SmashingMagazine написал [обзор фич DevTools](https://www.smashingmagazine.com/2022/10/devtools-updates-halloween-edition/) в, скажу так, мажорных браузерах. Статья покрывает самые значимые фичи и разбита на разделы: здесь дебаг CSS, JS, исследование производительности, сетевого взаимодействия и другие фичи. Если у вас нет времени следить за новыми фичами в DevTools, то эта статья для вас. Отличный способ наверстать упущенное. А для тех, кто хочет начать следить, Патрик приложил ссылки на регулярно обновляемые источники.

<ParagraphWithImage imageName="manWithLaptop">
  ### Новости релизов
  Сначала релизы браузеров.

  Вышел [Chrome 107](https://chromereleases.googleblog.com/2022/10/stable-channel-update-for-desktop_25.html). В этом релизе Performance API обзавёлся новым свойством renderBlockingStatus, по которому можно точно определить, что блокирует рендер. Новые свойства появились и в Screen Capture API. Также в экспериментальном режиме работает PendingBeacon API, позволяющий отправлять данные на бэкенд без ожидания какого-либо ответа. Как обычно, в новой версии был устранён ряд уязвимостей.
  В DevTools появилась возможность кастомизировать шорткаты на клавиатуре и переключать шорткатом тему. В инспекторе памяти теперь подсвечиваются все байты объектов C/C++. В инспекторе DOM теперь можно выключить поиск по мере печати и переключиться на поиск после нажатия Enter. Были и другие небольшие изменения.
  Больше в официальных обзорах: [Chrome](https://developer.chrome.com/blog/new-in-chrome-107/), [Chrome DevTools](https://developer.chrome.com/blog/new-in-devtools-107/).
</ParagraphWithImage>

[Firefox 106](https://blog.mozilla.org/en/mozilla/privacy-online-just-got-easier-with-todays-firefox-release/) доступен широкой аудитории. Самая интересная новая фича разработана именно для пользователей, а не разработчиков. Это Firefox View — своего рода новая стартовая страница с вашими недавно закрытыми ссылками и тремя последними ссылками с других устройств, если вы их синхронизировали. Также была добавлена косметическая «цветная» добавка для персонализации. Ещё одна фича тоже предназначена для пользователей: теперь можно запинить иконку с приватным режимом браузинга, а тема затемнена, чтобы приватный режим был более очевидным.

Рантайм Node.js отметился релизом [19-ой мажорной версии](https://nodejs.org/en/blog/announcements/v19-release-announce/). Версия 19 теперь станет current-версией, а 18-ая перейдет в статус LTS. Вышла также версия [18.11.0](https://nodejs.org/en/blog/release/v18.11.0/). В обоих релизах была добавлена экспериментальная поддержка watchmode. Вы наверняка знакомы с этим режимом по работе с другими инструментами, в этом режиме процесс будет перезапускаться при изменении импортированного файла.

На NEXT Conference 2022 была представлена [13-ая мажорная версия Next.js](https://nextjs.org/blog/next-13). Наверное, самым сильным впечатлением стал request for comments про новую абстракцию Layout, которая может значительно изменить структуру фреймворка и приложений. С Layout связан также ряд потенциальных изменений, которые призваны ускорить Next.js и улучшить DX. Был стабилизирован API инкрементальной статической регенерации требованию. Как всегда, присутствуют наработки по ускорению, улучшению поддержки React и другие стабильно-регулярные улучшения. На случай, если вам не очень интересно читать release notes, я приложу обзор релиза от разработчика Александра Савельева на Хабре. Он написал общий [обзор релиза Next.js 13](https://habr.com/ru/post/695080/) и отдельный по [Layout RFC](https://habr.com/ru/post/695076/).

Ещё одной интересной новинкой стал новый анонсированный бандлер от Vercel компании-владельца Next.js. Он называется [Turbopack](https://vercel.com/blog/turbopack). Пишут, что он быстрее Vite в 20 раз, а Webpack — в целых 700. Кстати, о Webpack: отдельный сильный ход Vercel кроется в том, что разработку Turbopack возглавляет создатель Webpack Тобиас Копперс (Tobias Koppers). Под капотом бандлера — фреймворк Turbo и язык Rust. Vercel называют Turbopack бандлером будущего, и он уже доступен как альфа с 13-ым релизом Next.js. Звучит интересно.

Ещё один мажорный релиз — это релиз [PostgreSQL 15](https://www.postgresql.org/about/news/postgresql-15-released-2526/). В новой версии был представлен ряд оптимизаций алгоритмов сортировки, новая команда MERGE для написания продвинутых запросов с условиями, новые функции для работы с регулярными выражениями и новый формат логов jsonlog. Полный список изменений в release notes. Кстати, документация по новой версии доступна [на русском языке](https://postgrespro.ru/blog/news/5969814), к выпуску приложу ссылку.

Python получил новое [обновление](https://blog.python.org/2022/10/python-3110-is-now-available.html). В релизе 3.11 появилась поддержка групп исключений, специального класса Self и специального типа LiteralString. Также был проведён ряд работ по улучшению производительности. Больше о релизе — по ссылке в описании выпуска.

Также отмечу релизы [Ubuntu 22.10 Kinetic Kudu](https://ubuntu.com/blog/canonical-releases-ubuntu-22-10-kinetic-kudu), [security-релизы](https://github.blog/2022-10-18-git-security-vulnerabilities-announced/) версий git 2.38 и старше и релиз [nginx 1.23.2](https://mailman.nginx.org/archives/list/nginx-announce@nginx.org/thread/VAQRBPXUPF43YLPXYJXTQ4JOVZZULOTN/).

<ParagraphWithImage imageName="laptopNews" >
  ### Другие новости

Редактор кода Fleet от JetBrains доступен для [публичного превью](https://blog.jetbrains.com/fleet/2022/10/introducing-the-fleet-public-preview/). Вы могли забыть, что это. Это новый легковесный редактор со всеми возможностями IDE. Архитектура распределённая: можно работать на других машинах, работать совместно, запускать в облаке и много чего ещё. Во время публичного превью редактор будет бесплатным, так что спешите попробовать. Что будет потом с прайсом, пока непонятно, но посмотрим.
</ParagraphWithImage>

Бета интереснейшей фичи появилась на GitHub. Это новый уровень контроля и управления [персональными токенами доступа](https://github.blog/2022-10-18-introducing-fine-grained-personal-access-tokens-for-github/). Их назвали гранулярными, т.е. разных разрешений теперь 50, и их можно гибко менеджить, назначать, забирать и так далее. Они истекают со временем так же, как обычные токены. Попробовать фичу можно уже сейчас, она живёт рядышком с управлением обычными токенами.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
