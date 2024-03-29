---
title: '<i>10 подсказок</br></i> начинающим QA инженерам'
coverImageAlt: 'Собрали небольшой список полезных инструментов и практик, которые помогут подготовиться и выполнить тестовое задание на отлично!'
author: 'Айжана Нургалиева'
date: '2021-12-06T00:00:00.000Z'
tag: 'web-development'
description: 'При отборе самых внимательных и дотошных тестировщиков мы уже не первый год используем тестовое задание. Это помогает, с одной стороны, нам всесторонне оценить кандидата, с другой — кандидатам протестировать (простите за каламбур) свои знания. Удобно.'
---

---

**П**ривет! При отборе самых внимательных и дотошных тестировщиков мы уже не первый год используем тестовое задание. Это помогает, с одной стороны, нам всесторонне оценить кандидата, с другой — кандидатам протестировать (простите за каламбур) свои знания. Удобно.

Чтобы сэкономить обеим сторонам время и силы, мы собрали небольшой список полезных инструментов и практик, которые помогут вам подготовиться и выполнить задание на отлично!

## DevTools Console

При загрузке страницы первым делом стоит обращать внимание на консоль. Туда выводятся ошибки, касающиеся шрифтов, картинок и стилей. Не нужно быть разработчиком, чтобы понять текст ошибок — они описаны простым языком. А в 91 версии Chrome даже появилась <a href="https://developer.chrome.com/blog/new-in-devtools-91/#issue-category" target="_blank">категоризация ошибок</a> на вкладке Issues.

<Img imageName="qa-1" alt="Как выглядят ошибки в консоли">

## DevTools Elements

На вкладке Elements представлена структура документа. Здесь можно узнать особенности и параметры каждого элемента страницы: размеры, отступы и границы, типы шрифтов и многое другое. Для тестировщика это просто кладезь информации, которую можно сравнить с макетом или технической документацией. <a href="https://www.youtube.com/watch?v=JX85r-a-TxQ&t=200s" target="_blank">Это</a> обучающее видео поможет освоиться.

Также для упрощения работы с версткой можем порекомендовать плагин <a href="https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm" target="_blank">WhatFont</a>. Он позволяет быстро получить информацию по выбранному тексту, не обращаясь к DevTools. Например, на скриншоте ниже мы сразу видим шрифт, его размер, начертание и цвет.

<Img imageName="qa-2" alt="Как выглядит WhatFont">

## DevTools Sources

Эту вкладку разработчики используют для отладки кода, однако и для тестировщика тут найдется кое-что интересное. Например, можно поиграться со стилями, изменяя их. Помните, что все изменения сохраняются ровно до момента перезагрузки страницы.

На этой вкладке также можно поинтересоваться js файлами. Если, например, в Elements вы встретили непонятный элемент, который не видели на странице, можно глянуть в js файле, при каких условиях этот элемент должен появляться и какую роль играет.

Подробнее в <a href="https://developer.chrome.com/docs/devtools/javascript/sources/" target="_blank">официальной документации</a>. 

## DevTools Network 

Одна из главных вкладок тестировщика. Тут можно посмотреть все «взаимоотношения» клиента и сервера, и есть фильтрация, которая позволяет легче ориентироваться в потоке запросов. Каждый запрос можно открыть и посмотреть, проанализировать, с какими параметрами он ушел на сервер, что ответил сервер, как быстро это произошло. Если запрос был с ошибкой, то тестировщик, скопировав хедер запроса и ответ от сервера и приложив к баг-репорту, упростит задачу разработчика. Возможно, только по коду и тексту ответа разработчик сможет предположить, где именно возникла ошибка.

На этой вкладке также можно имитировать медленный интернет, блокировать запросы или реплеить конкретные при необходимости. Подробнее можно прочесть в <a href="https://developer.chrome.com/docs/devtools/network/#overview" target="_blank">официальной документации</a>.

Но кое-что DevTools пока не умеет делать — подменять данные, уходящие к серверу или присланные сервером. Для этого можно воспользоваться <a href="https://docs.telerik.com/fiddler-everywhere/introduction" target="_blank">Fiddler</a>.

## Pixel Perfect

На самом деле pixel perfect недостижим, потому что веб-страница не является статичным макетом. Но приблизить к макету положение элементов страницы возможно. Задача тестировщика — измерить элементы и сравнить с макетом. Это трудозатратно, нудно и долго, но расширение <a href="https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi" target="_blank">PerfectPixel</a> может существенно помочь. Плагин позволяет загрузить макет и наложить его на текущий экран. Для большей точности вы можете подвигать макет или изменить его прозрачность.

<Img imageName="qa-3" alt="Как выглядит работа плагина PerfectPixel">

## Кроссбраузерность

Кроссбраузерное тестирование можно обеспечить несколькими способами. Можно скачать все требуемые браузеры на свой компьютер, но это не покроет браузеры другой оси. Можно развернуть виртуальную машину с нужной осью. Но что делать, когда необходима определенная старая версия браузера? Все перечисленные задачи решаются онлайн-эмуляторами.

Мы работаем с платной версией BrowserStack. В бесплатной, к сожалению, представлен скудный набор браузеров, а также есть ограничение сессии тестирования (10 секунд). С недавних пор Browserstack предлагает уже не эмуляторы браузеров, а настоящие девайсы с онлайн-доступом.

При выполнении тестового мы предлагаем воспользоваться бесплатной версией <a href="http://lambdatest.com" target="_blank">LambdaTest</a>. В нашем задании мы специально указываем доступные в ней браузеры.

## Figma

Figma — один из самых удобных инструментов для командной работы над макетами. Дизайнер творит, разработчик сверяется, а тестировщик контролирует, чтобы реализация совпадала с идеей. 

Несколько лайфхаков, которые помогут с тестовым:

- Работать с десктопной версией удобнее и быстрее.
- Неавторизованный пользователь не может просматривать параметры макета. Авторизовавшись, вы сможете увидеть параметры выбранного элемента на вкладке Inspect.

<Img imageName="qa-4" alt="Просмотреть параметры элемента в Figma">

- Используя вкладку Export, можно скачать любой элемент или целую страницу.

<Img imageName="qa-5" alt="Экспорт выбранного элемента из Figma">

- Для любого элемента можно получить ссылку. 

<Img imageName="qa-6" alt="Как получить ссылку на выбранный элемент в Figma">

## Оформление багов

Мы придерживаемся «классического» стиля оформления тестовых артефактов: хороший баг-репорт должен содержать номер, название, шаги воспроизведения, фактический и ожидаемый результаты. Остальные параметры указываются по обстоятельствам. К примеру, если баг воспроизводится только в конкретном браузере, нужно добавить предусловия к баг-репорту.

Список возможных параметров в баг-репорте можно посмотреть <a href="http://www.protesting.ru/testing/bugstructure.html" target="_blank">здесь</a>.

## Автотесты

Автотест в нашем задании не обязателен, но за него ставим дополнительный плюсик. Если вы никогда не сталкивались с написанием автотестов, советуем обратить внимание на браузерные рекордеры. С помощью них можно записать небольшой скрипт, выгрузить его и переиспользовать или поделиться с коллегами. В последнее время рекордеры сделали большой шаг вперед — они позволяют параметризировать тесты, снимать скриншоты, запускать js код на странице и использовать результат. Записанный тест можно выгрузить в формате языка программирования, чтобы затем превратить в полноценный автотест.

Если вы хотите записать простой скрипт и быстро начать работать с готовыми автотестами, для легкого старта посмотрите небольшое <a href="https://www.youtube.com/watch?v=aVlfeCm6xqk&list=PLmOSnc7vgiDt4xp8t_JaScD7nFS50U_lo" target="_blank">видео</a>.

## Критерии оценки работ

В первую очередь мы смотрим на количество и качество найденных багов. Также важно, чтобы кандидат выполнил задание с учетом всех входных требований. Ну и если вы написали автотест или нашли пасхалку — дополнительный плюс и наше восхищение :)

Ну как, готовы попробовать свои силы? Откликайтесь на <a href="https://csssr.com/ru-ru/jobs" target="_blank">наши вакансии</a>.