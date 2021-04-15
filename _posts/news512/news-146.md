---
title: 'В этом выпуске: черновик WCAG 3.0, Chrome 89 Beta и ChromeOS 88, новое CSS-свойство aspect-ratio, а также начало года в JetBrains.'
soundcloudLink: 'https://soundcloud.com/csssr/chernovik-wcag-30-chrome-89-beta-i-chromeos-88-vivaldi-36-aspect-ratio-plokhoy-redux'
date: '2021-02-03T00:00:00.000Z'
episodeNumber: 146
tag: 'news'
author: 'Ислам Виндижев'
---

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

В декабре я рассказывал про статью Джованни Раго (Giovanni Rago) о сравнении скорости работы headless-браузеров при автоматизации тестирования. В [той статье](https://blog.checklyhq.com/puppeteer-vs-selenium-vs-playwright-speed-comparison/) Джованни сравнивал скорость Playwright, Puppeteer и Selenium, а в новой, по просьбе читателей, [добавил к сравнению Cypress](https://blog.checklyhq.com/cypress-vs-selenium-vs-playwright-vs-puppeteer-speed-comparison/). Автор отмечает, что важно посмотреть и первую статью, потому что часть информации о Playwright, Puppeteer и Selenium в новой дублировать он не стал. Как и в прошлый раз, в статье приведены исходные данные и условия измерения. Могу сразу сказать, что в двух из трёх сценариев Playwright показал себя самым быстрым, а в третьем победил Puppeteer.
</ParagraphWithImage>

Юна Кравец (Una Kravets) на web.dev рассказала [о новом CSS-свойстве aspect-ratio](https://web.dev/aspect-ratio/). Свойство позволяет задать соотношение сторон элемента, например 2 к 3, 1 к 1 и так далее. Оно поддерживается в Chrome, Firefox и подъехало в Safari Technology Preview. Юна рассказывает о работе самого свойства и кейсах использования, а также о том, как раньше управляли соотношением сторон и почему такой подход — не самый удачный.

Продолжаем тему CSS. Энди Бэлл (Andy Bell) на SmashingMagazine опубликовал статью [о современных возможностях CSS](https://www.smashingmagazine.com/2021/02/things-you-can-do-with-css-today/). В ней он рассказывает о псевдоклассе :is, свойстве clamp(), новых единицах измерения для стилизации типографики и нативном masonry layout. Каждый пункт сопровождается примером и несколькими полезными ссылками.

Антон Косых в своём блоге на Medium написал статью о том, [почему ненавидит Redux](https://kelin2025.medium.com/why-ive-never-used-redux-chapter-1-the-reasons-e4ff22e3cee0). Он выделяет такие минусы как монолитный глобальный стейт, большое количество бойлерплейт-кода, псевдопростоту и большое количество дополнительных библиотек для работы с Redux. И конечно же, ему не нравится API. Если вы считаете Redux панацеей, возможно, эта статья заставит вас тоже ненавидеть Redux, а может быть, и нет.

Как архитектор может [лишиться работы за выбор React](https://medium.com/better-programming/i-almost-got-fired-for-choosing-react-in-our-enterprise-app-846ea840841c) для нового проекта? Разван Драгомир (Razvan Dragomir) в блоге Better Programming рассказал, как это почти что произошло с ним. Не пугайтесь, статья не про менеджерский беспредел и токсичного работодателя. Эта история о том, как .NET-разработчики адаптировались к React-стеку. Разван рассказывает, насколько необычным был React для его новых коллег, почему это стало неудачным выбором, и приходит к выводу, что для такой команды было бы гораздо проще адаптировать Angular.

Кристиан Хейлман (Christian Heilmann) опубликовал расшифровку своего доклада [об интеграции Microsoft Edge DevTools и VS Code, с которым он выступал на онлайн-ивенте VS Code Day 2021](https://christianheilmann.com/2021/01/27/bringing-edges-developer-tools-to-vs-code-for-debugging-web-apps-a-talk-at-vs-code-day/). В докладе описывается не только сама интеграция, но и возможности DevTools Edge.

А вы умеете хранить секреты? Если не умеете, то загляните в статью от ребят из LogRocket, которая посвящена [хранению секретов при фронтенд-разработке](https://blog.logrocket.com/best-practices-for-managing-and-storing-secrets-in-frontend-development/). В статье описаны хорошие практики, например, ограничение на применение ключей с определённого URL, скрытие ключей в .env-файле и сканирование репозиториев проекта на случай случайного коммита с секретом.

В заключение рубрики — небольшой [курс по Figma](https://www.figmacrashcourse.com/), его автор — разработчик Пабло Стенли (Pablo Stanley). Пока курс состоит из 7 видеоуроков по 10-15 минут каждый, которые связаны с основами работы в Figma и работой AutoLayout. На странице курса есть и небольшой роадмап с анонсом продолжения курса. Кстати, бесплатно.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

Пока мы ждём новые релизы браузеров, вышла [бета Chrome 89](https://blog.chromium.org/2021/01/chrome-89-beta-advanced-hardware.html). В бете: аппаратные Web NFC и Web Serial, нативный Web Share API на десктопе, await верхнего уровня в JS. В этой версии нет фич, которые тестируются по программе Origin Trials, но есть и другие небольшие фичи, например, псевдоэлемент ::target:text, псевдонимы для border-radius и нативное декодирование AVIF-изображений.
</ParagraphWithImage>

Вышел браузер [Vivaldi 3.6](https://habr.com/ru/company/vivaldi/blog/539592/). Vivaldi позиционируется как безопасный и высоко кастомизируемый браузер с встроенными блокировщиками рекламы и отслеживания. Основное нововведение этой версии — новая группировка вкладок, теперь их можно группировать двухуровнево. Также для вкладок можно использовать левую боковую панель. Помимо этого продолжается текущее исправление багов и разбор баг-репортов от пользователей.

Вслед за релизом Chrome 88 вышла и [ChromeOS 88](https://chromereleases.googleblog.com/2021/01/stable-channel-update-for-chrome-os_28.html). В этой версии можно заходить на сайты с использованием биометрии или PIN-кода для разблокировки устройства, фича работает через WebAuthn. Теперь можно кастомизировать скринсейвер, и были улучшены возможности автокоррекции.

JetBrains начинает выпускать новые версии своих продуктов. Пока речь идёт о старте раннего доступа к [GoLand 2021.1](https://blog.jetbrains.com/go/2021/01/29/goland-2021-1-eap-begins/) и большом обновлении GoLand 2020.3, в котором было представлено более 30 нововведений. 8 февраля состоится [онлайн-презентация этой версии IDE](https://info.jetbrains.com/goland-webinar-february-2021.html). В целом, в скором времени стоит ожидать и нашего любимого WebStorm. Обновился образовательный [EduTools Plugin](https://blog.jetbrains.com/education/2021/01/28/edutools-plugin-2021-1-is-now-out/), который может быть знаком вам по PyCharm и IntelliJ IDEA Edu. Теперь нумерация плагина совпадает с нумерацией IDE и новая версия вышла с номером 2021.1. Ещё одна вещь, связанная с JetBrains, о которой я хочу сегодня сказать, это [JetBrains Academy](https://www.jetbrains.com/academy/). Напомню, что на образовательном портале джетов можно изучать Python, Java, Kotlin или пойти по пути фронтенд-разработки. С нового года бесплатный триал для всех закончился и подписка теперь стоит 25 долларов в месяц или 125 долларов в год. Насколько я понимаю, это временные скидки, цены без скидок — 50 долларов и 250 соответственно.

Также на этой неделе отмечу релиз первой версии [Angular 11.2.0](https://github.com/angular/angular/releases/tag/11.2.0-next.0), помеченный как next-0, и релиз десятой beta-версии [RxJS 7.0.0](https://github.com/ReactiveX/rxjs/releases/tag/7.0.0-beta.10).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

Вышел [черновик WCAG 3.0](https://www.w3.org/TR/wcag-3.0/) — Web Content Accessibility Guidelines. Этот документ продолжает и дополняет первую и вторую версию гайдлайнов от W3C. Почему обновление гайдлайнов важно? Потому что вместе с технологическим прогрессом эволюционируют и потребности людей с особыми потребностями. С новой структурой документа и изменениями в оценке доступности можно ознакомиться в самом черновике или, на русском, [в разборе](https://web-standards.ru/articles/wcag3-changes/) Татьяны Фокиной. Напомню, что это рабочий черновик, W3С советует по-прежнему пользоваться версией 2.1, и часть руководств из второй версии мигрирует в третью. Если вам интересно, как будет проходить миграция, с планом можно ознакомиться [в документе](https://docs.google.com/document/d/1aCRXrtmnSSTso-6S_IO9GQ3AKTB4FYt9k92eT_1PWX4/view).
</ParagraphWithImage>

<Note>
  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
</Note>
