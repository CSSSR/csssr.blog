---
title: 'В этом выпуске мы начнём говорить о новостях за время перерыва.'
soundcloudLink: 'https://soundcloud.com/csssr/angular-14-react-18-nodejs-18-brauzery-100-razvitie-deno-sanktsii'
date: '2022-07-08T00:00:00.000Z'
episodeNumber: 209
tag: 'news'
author: 'Ислам Виндижев'
---

Всем привет! Это «Новости 512» от CSSSR. На связи Ислам. После продолжительного перерыва подкаст возобновляется. Было очень трудно начать выпускать новости по целому ряду причин, но вот мы здесь. В этом и следующем выпусках я расскажу о том, что произошло в сфере веба и фронтенда с момента нашего последнего выпуска. В последующих выпусках будут уже актуальные новости, о которых мы поговорим более подробно, как это было и раньше.

Этот выпуск начнется не вполне стандартно: не с интересных материалов, а с релизов.

<ParagraphWithImage imageName="laptopNews" >
  ### Новости релизов

Из последних новостей: вышел [Angular 14](https://blog.angular.io/angular-v14-is-now-available-391a6db736af). Наверное, самая крутая фича нового релиза — типизированные формы. Это топовое issue на GitHub, которое касается форм в Angular. Как вы можете догадаться, поля и управляющие элементы можно будет типизировать, что по идее должно сделать вводимые данные безопасными для вашего приложения и ничего не сломать. Также теперь доступна страничка с обновленным гайдом по оптимизации регистрации изменений или detection strategy. В этой версии продолжена работа над расширенной диагностикой шаблонов для разработчиков, добавлены экспериментальные автономные модули, которые должны помочь меньше использовать директиву NgModule. Были и другие изменения – ссылку на пост в блоге Angular я приложу к описанию выпуска.
</ParagraphWithImage>

В конце марта вышел [React 18](https://reactjs.org/blog/2022/03/29/react-v18.html). Вы могли видеть ранние выступления команды разработки фреймворка о серверных компонентах, потоковом серверном рендеринге и других фичах. Релиз случился, в блоге фреймворка доступен [гайд по миграции](https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html) на новую версию и отдельно описание релиза. В этой версии мы получили конкурентный рендеринг, обновленные API серверного и клиентского рендеринга, новые возможности для Suspense и другие изменения. Ах да, прекращена поддержка Internet Explorer – если она вам нужна, оставайтесь на React 17. Серверные компоненты все еще находятся в разработке – будем следить за обновлениями.

[Node.js 18](https://nodejs.org/en/blog/announcements/v18-release-announce/) уже доступна. Она сменит 17 версию как current-версия, а в октябре она станет новой LTS-версией. В этом релизе движок V8 был обновлен до версии 10.1. Были добавлены новые экспериментальные API, например, новый fetch, Web Streams API и экспериментальный тест-раннер. Минимальные требования к окружению также были повышены, например, новая версия требует MacOS 10.15 и старше, Ubuntu 20.04 или Debian 10.

Также отмечу [security-релизы Node.js от 5 июля](https://nodejs.org/en/blog/vulnerability/july-2022-security-releases/). Обновление затронет 14, 16 и 18 версии рантайма. В обновлении закрыты 3 уязвимости со средним уровнем опасности и 2 с высоким.

Завершит рубрику утверждение стандарта ES2022. Коротенько — стандарт утвержден. А с компактного обзора фич, которые в него вошли, начнется наша следующая рубрика.

<ParagraphWithImage imageName="manWithLaptop">
  ### Интересные публикации

  В этом выпуске публикации будут скорее небольшим дополнением к релизам, чем самостоятельной рубрикой. Но не переживайте, это только на один-два выпуска.

  Шон Амарасингх (Sean Amarasinghe) на Medium написал небольшой [обзор фич ES2022](https://levelup.gitconnected.com/whats-new-in-javascript-after-the-es2022-release-de13dd091a61). В прошлом году мы уже успели поговорить о многих новых фичах, поэтому в целом сюрпризов не было: await верхнего уровня, приватные поля и методы классов, статические поля и приватные статические методы, метод Object.hasOwn(), метод .at() для индексов и другие. Отдельно отмечу то, о чем раньше не слышал, — временные функции, или Temporal. Это объект, который призван заменить Date и библиотеки вроде moment.js. Пока фича находится на stage-3 и не была выпущена с обновлением до ES2022. В статье – примеры по каждой фиче и краткие объяснения, для чего нововведение может быть особенно полезно.
</ParagraphWithImage>

Помимо описания релиза Angular 14 от команды Angular я хочу обратить ваше внимание на другую [статью](https://nevzatopcu.medium.com/what-is-new-in-angular-14-d31edf91fd3e), в которой Невзат Тапку (Nevzat Topçu) показал более подробные примеры применения новых фич Angular 14. Она подлиннее официального поста, но примеры достаточно объемные, чтобы дать полное понимание того, как пользоваться фичей.

Что касается React, тут материалов целых три. Материалы еще с ReactConf 2021, где и представляли новую версию, но на эти видео ссылается команда React в своем блоге. Это общий [обзор React 18](https://www.youtube.com/watch?v=FZ0cG47msEk&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa), [демонстрация использования новых фич](https://www.youtube.com/watch?v=ytudH8je5ko&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=3) и отдельно [демонстрация потокового серверного рендеринга с Suspense](https://www.youtube.com/watch?v=pj5N-Khihgc&list=PLNG_1j3cPCaZZ7etkzWA7JfdmKWT0pMsa&index=4). Ссылки будут в описании выпуска и текстовой версии.

<ParagraphWithImage imageName="laptopNews" >
  ### Другие новости

  Другие новости начнутся, как вы можете догадаться, с санкционных. В следующих выпусках я, скорее всего, продолжу за этим следить, потому что так или иначе многим из нас приходится сталкиваться с последствиями санкций и учитывать это в своей работе. Что мы имеем на сегодняшний день: Slack не работает в РФ, и многие компании были вынуждены перейти на готовые или самописные решения; Microsoft, Adobe, Cisco и ряд других компаний ограничивают доступ к своему софту и аппаратному обеспечению; в частности GitHub прекратил продажу Enterprise-решений и также ввел ограничения на использование своего сервиса в некоторых регионах.
  Подобных новостей много, и они продолжают появляться – посмотрим, что будет дальше.
</ParagraphWithImage>

Давайте к более легким новостям. Браузеры [Chrome](https://chromereleases.googleblog.com/2022/03/stable-channel-update-for-desktop_29.html) и [Firefox](https://blog.mozilla.org/mozilla/celebrating-firefox-100/) преодолели отметку 100 в номерах своих версий. К релизам самых новых версий браузеров я вернусь в следующих выпусках, а пока самое важное: версии из трех цифр не сломали интернет (если помните, было много опасений на этот счет). Хорошо, что не сломалось и, будем надеяться, не сломается.

Недавно появились новости и от Deno. Буквально пару недель назад было объявлено о том, что Deno поднял [новый раунд инвестиций](https://deno.com/blog/series-a) в размере 21 миллиона долларов, версии рантайма продолжают выходить, также развивается проект Deno Deploy, который отметился четвертой бетой. Возможно, венчурный опенсорс оказался не такой уж сказкой. В следующем выпуске я также расскажу о фуллстек-фреймворке для Deno, который называется Fresh.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
