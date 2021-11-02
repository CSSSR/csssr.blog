---
title: 'В этом выпуске: Chrome 94, Safari 15, тестирование Effector-модулей, единицы измерения Container Units, так ли плох any, как все говорят, CSS-директива @layout, а также обвинения в open-source плагиате.'
soundcloudLink: 'https://soundcloud.com/csssr/chrome-94-safari-15-testirovanie-effector-container-units-any-layout-open-source-plagiat'
date: '2021-09-28T00:00:00.000Z'
episodeNumber: 192
tag: 'news'
author: 'Ислам Виндижев'
---

Прежде чем перейти к выпуску, небольшое объявление. Теперь раз в месяц мы будем рассказывать в новостях о вакансиях CSSSR. Надеюсь, так мы скорее найдем друг-друга.

Итак, ищем опытных фронтенд-разработчиков на стеки [React + TypeScript](https://csssr.com/ru-ru/jobs/high-middle-js-developer) или [Angular 11](https://csssr.com/ru-ru/jobs/js-developer).

Также мы в поисках [QA-инженера](https://csssr.com/ru-ru/jobs/backend-qa-engineer) с навыками автоматизации или желанием в ней развиваться. Используем JavaScript и Java, но если у вас есть опыт автоматизации на других языках — мы открыты к диалогу.

Теперь к новостям.

<ParagraphWithImage imageName="manWithLaptop">
  ### Интересные публикации

Тобиас Улиг (Tobias Uhlig) написал статью [о лучшей стратегии разработки фронтенда](https://itnext.io/the-best-frontend-development-strategies-in-2022-cb02dd7aa48b) в, на минуточку, 2022 году. Статья немного провокационная: по сути, он рассказывает об идеях, на которых построена библиотека neo.mjs, а он её соавтор. Тобиас пишет о том, как утилизировать все ядра процессора устройств и причём здесь веб-воркеры, как должны происходить манипуляции с DOM, какое будущее у TypeScript и что не так с React. Прав автор или нет — решать вам, но на статью и библиотеку, как минимум, можно взглянуть.
</ParagraphWithImage>

Часто при виде any в TypeScript-коде разработчики достают чеснок и осиновый кол. Но так ли плох any, как его малюют? Штефан Баумгартнер (Stefan Baumgartner) в своем блоге написал статью о том, в каких случаях [any может быть полезен](https://fettblog.eu/typescript-any-is-ok/), а использовать его будет вовсе не страшно. Мораль простая: будьте осторожны и применяйте any с умом. Также в статье можно найти массу ссылок для дополнительного изучения темы.

Недавно Aviasales перешли на стейт-менеджер Effector. Статью [о тестировании с Effector](https://blog.kamyshev.me/effestor-tests/) в своем блоге написал Игорь Камышев. Сначала Игорь говорит об общих хороших практиках написания модульных тестов, таких как изоляция и ограничение сайд-эффектов, после чего показывает, как это работает, непосредственно на примере Effector. В заключение автор отмечает, что в Effector все нужные для тестирования фичи есть из коробки, а писать и поддерживать тесты Effector-модулей приятно и относительно просто.

Денис Стасьев на Хабре опубликовал статью [об опыте оптимизации Core Web Vitals](https://habr.com/ru/company/mailru/blog/577792/) на главной странице Mail.ru. Он рассказал об особенностях главной страницы, рекомендациях от Google и о том, как метрики удалось улучшить. Статья получилась обширная, затрагивался и мониторинг, и значение Web Vitals для продукта, и то, как командам стоит подходить к метрикам на начальных этапах работы над проектом. В дополнение к теме обращу ваше внимание на статью на web.dev, посвященную [паттернам Web Vitals](https://web.dev/patterns/web-vitals-patterns/). В ней описывается работа с изображениями и шрифтами и некоторые типовые случаи, такие как бесконечный скролл или карусели.

Вы уже наверняка слышали о выражениях от контейнера, или Container Query, которые достаточно скоро будут поддерживаться браузерами. Предложения по фиче не заканчиваются. На этот раз речь пойдёт о единицах измерения Container Units. Суть достаточно простая: это относительные единицы измерения, которые зависят не от вьюпорта, а от размера самого контейнера. Ахмад Шадид (Ahmad Shadeed) в своем блоге описал эти [единицы измерения](https://ishadeed.com/article/container-query-units/) и в каких ситуациях они могут особенно пригодиться — например, при работе со шрифтами и отступами внутри контейнера. Конечно же, он приводит и практический пример. Также своими мыслями по теме на css-tricks [поделился](https://css-tricks.com/container-units-should-be-pretty-handy/) Крис Койер (Chris Coyier).

Джейк Арчибальд (Jake Archibald) и Сурма (Surma) в новом эпизоде своего совместного YouTube-подкаста обсуждали [цветовые пространства](https://www.youtube.com/watch?v=cGyLHxn16pE), такие как sRGB, P3 и другие. Что это вообще такое? Это способ организации или, если хотите, отображения цвета физическим устройством. Почему это неплохо знать? Потому что если мы выводим что-то на экран, стоит понимать, как работают разные цветовые пространства на разных устройствах. Например, теперь в Chrome для canvas можно выбрать цветовое пространство P3 (но об этом чуть позже). Джейк и Сурма обсудили само понятие цветовых пространств, разницу между ними и то, какие из них наиболее распространены. Получилось интересно.

Брамус Ван Дамме (Bramus Van Damme) в своём блоге рассказал об одной из грядущих фич CSS — [директиве @layout](https://www.bram.us/2021/09/15/the-future-of-css-cascade-layers-css-at-layer/). Эта директива — часть спецификации каскадирования и наследования пятого уровня. Если коротко, фича позволяет разбить стили на слои, явно управлять их порядком и не утонуть в нюансах вычислений. Брамус подробно описывает саму проблему и объясняет, почему фича понадобилась, а также показывает практические примеры. Он отмечает, что над поддержкой фичи работают все браузеры.

На css-tricks Хабдул Хазиз (Habdul Hazeez) выложил статью [о семи способах применения псевдоэлементов ::before и ::after](https://css-tricks.com/7-practical-uses-for-the-before-and-after-pseudo-elements-in-css/). Он рассматривает такие кейсы, как реализация заглушки для неподгруженных изображений, кастомные маркеры в списках, градиентные границы и подложки, а также кастомные переключатели и значки цитат.

Закроют рубрику две статьи для ваших рабочих окружений. Мэтью Снёд (Matthieu Cneude) на SmashingMagazine написал о том, как организовать рабочее окружение, в котором [не нужно пользоваться мышью](https://www.smashingmagazine.com/2021/09/mouseless-development-environment/). Совсем. Он утверждает, что это сотворило чудеса с его продуктивностью и скоростью работы. Вторая статья — [подборка разных инструментов для фронтенд-разработки](https://habr.com/ru/company/htmlacademy/blog/579514/) от HTMLAcademy на Хабре.

<ParagraphWithImage imageName="laptopNews" >
  ### Новости релизов

Вышел [Chrome 94](https://chromereleases.googleblog.com/2021/09/stable-channel-update-for-desktop_21.html). Для canvas теперь можно выбирать цветовое пространство. По умолчанию используется sRGB, как и раньше, можно также выбрать цветовое пространство P3. Это, скорее всего, вызвано тем, что появляется всё больше устройств, которые это цветовое пространство поддерживают. Добавили WebCodecs API, который позволяет использовать кодеки для кодирования аудио и видео, что помогает экономить вычислительные ресурсы и хорошо подходит для стриминговых приложений. Из других возможностей стали доступны postTask() для управления задачами и поддержка VirtualKeyboard API, который упоминал в недавнем выпуске. В инструментах разработчика появилась поддержка 80 языков интерфейса, в том числе и русского. Теперь начинающим и не только станет ещё проще ориентироваться. В экспериментальном режиме можно включить аппаратное ускорение с WebGPU, напомню, технология позволяет использовать ресурсы графического процессора в браузере. Больше подробностей — традиционно в постах [Пита Ле Пейджа](https://developer.chrome.com/blog/new-in-chrome-94/) и [Джеселин Ин](https://developer.chrome.com/ru/blog/new-in-devtools-94/). Отдельно хочу отметить, что «Новинки DevTools» теперь переводятся Алёной Батицкой под редактурой Артёма Сальникова, спасибо вам за работу, надеюсь, что со временем будет появляться всё больше переводов ресурсов и материалов на русский язык.
</ParagraphWithImage>

Вышло [обновление браузера Safari](https://developer.apple.com/documentation/safari-release-notes/safari-15-release-notes). Отмечу, что 15 версия вышла не с обновлением OS — насколько я помню, это первый случай, и, возможно, релизный цикл Safari в будущем изменится. Теперь о новинках. Начнём с JS: была добавлена поддержка top level await и Error.cause, а сервис воркеры теперь поддерживают ES-модули. В CSS подвезли поддержку свойства aspect-ratio() и разные цветовые пространства. Кроме того, как и обещали на одной из презентаций Apple, iOS и iPadOS теперь поддерживают Safari Web Extensions. Дополнительно можно отметить, что продолжается расширение поддержки WebAssembly и была стабилизирована поддержка WebGL 2.

Создана [ветка для V8 версии 9.5](https://v8.dev/blog/v8-release-95). В этом выпуске движка была улучшена обработка исключений WebAssembly, а также части API интернационализации DisplayNames и опция timeZoneName, которая поддерживает 4 новых значения. Релиз Chrome 95 с этой версией V8 запланирован на 19 октября.

Доступна новая версия [Node.js 16.10.0](https://nodejs.org/en/blog/release/v16.10.0/). Для модуля crypto были добавлены новые параметры генерации ключей. Также эта версия ноды работает с npm 7.24.0.

Mozilla Firefox отметился небольшим [патчем 92.0.1](https://www.mozilla.org/en-US/firefox/92.0.1/releasenotes/), в котором исправили неполадки воспроизведения звука на Linux и баг, из-за которого пропадала кнопка закрытия панели поиска.

<ParagraphWithImage imageName="laptopNews" >
  ### Другие новости

На днях разыгралась настоящая open-source драма. Хорхе Букаран (Jorge Bucaran), автор библиотеки colorette, [обвинил в плагиате](https://twitter.com/jorgebucaran/status/1441713235980275718) Андрея Ситника, который форкнул его репозиторий, доработал и выпустил как open-source библиотеку nanocolors. Эти библиотеки используются для того, чтобы стилизовать вывод в терминале и, соответственно, сделать его более информативным для пользователя. Причиной для форка были breaking changes в API, которые Хорхе не хотел исправлять. Так и появилась nanocolors. Отмечу, что в своем форке Андрей упомянул библиотеку colorette как референс и что это форк colorette. Потом началось не совсем понятное: автор colorette применил в своей библиотеке оптимизации производительности из nanocolors и [отказался](https://twitter.com/sitnikcode/status/1442158521802498055) упомянуть, что оптимизация оттуда. Ситуация развивается, Хорхе продолжает нападать на Андрея и отговаривать в разных issues использовать его библиотеку, например, [в issue Babel](https://github.com/babel/babel/pull/13783). Сообщество разделилось на два лагеря: кто-то говорит, что это плагиат, а кто-то — что автор colorette в этой ситуации не прав. Лично я считаю, что сделать форк, внести изменения и опубликовать — абсолютно нормальная история, особенно если исходный проект упоминается. А нападать на автора и его версию библиотеки таким образом — выглядит уже не очень. Вот так, open-source — это вам не курорт, а к лицензиям на свои разработки стоит начать относиться повнимательнее.
</ParagraphWithImage>

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)