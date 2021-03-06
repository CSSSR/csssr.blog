---
title: '<i>Итоги 2020 от CSSSR.</i> Фронтенд, нарушивший изоляцию'
coverImageAlt: 'Фронтенд, нарушивший изоляцию'
author: 'Максим Вислогуров'
date: '2020-12-30T00:00:00.000Z'
tag: 'web-development'
---

---

**С**обытия этого года сильно напоминают сюжеты из Fallout. Там тоже много про убежища и изоляцию. Представим себе, что некий Курьер-фронтендер ушел в самоизоляцию 1 января 2020 года. И вот сейчас, наконец, вышел наружу. Какими новостями и событиями встретит его Пустошь Фронтенда?

<Img imageName='vb' alt='vb'/>

## Стрельба в призрачном городе

Под шумок пандемии Мозилла <a href="https://habr.com/ru/news/t/514886/" target="_blank">разогнала</a> некоторых core-девелоперов, участвовавших в ключевых направлениях по развитию Раста, а с ними за компанию и людей, развивающих MDN.

В целом это только усугубило волну бестолкового хайпа вокруг данной темы. Грустно наблюдать все эти разборки фанатов <a href="https://www.linux.org.ru/forum/talks/15339579" target="_blank">async-std и tokio</a>, шумиху вокруг <a href="https://www.opennet.ru/opennews/art.shtml?num=52208" target="_blank">unsafe в actix-web</a> и прочую странную активность: вместо того, чтобы помогать пилить крейты, сообщество только нагнетает градус драмы из года в год.

Сейчас на crates.io есть всего один неасинхронный production-ready веб фреймворк, но и тот в следующей версии тоже станет асинхронным.

Доходит до странного: любой веб-сервер на Rust вынужден либо тащить один из рантаймов с десятками лишних зависимостей, возиться с async/await и ограничивать себя в выборе крейтов, либо сидеть на древних, не обновляемых библиотеках.

А теперь язык лишился еще и именитого патрона в лице Mozilla. Плохо дело.

<Img imageName='strelba' alt='strelba'/>

<Img imageName='vb2' alt='vb2'/>

## Вновь в седле

Microsoft <a href="https://3dnews.ru/1001829/obzor-microsoft-edge-na-chromium" target="_blank">зарелизили</a> новый Edge, работающий на Chromium. С точки зрения разработки — хорошо. Меньше движков — разработчикам меньше головной боли с поддержкой.

Можно возразить, что пользователей, дескать, искусственно лишают возможности выбрать движок. Но много ли фанатов было у того же Trident?

Еще один репутационный «плюс» у майков появился после вынесения приговора IE 11 — его поддержку <a href="https://www.microsoft.com/ru-ru/microsoft-365/windows/end-of-ie-support" target="_blank">прекратят</a> в августе 2021 года.

<Img imageName='sedlo' alt='sedlo'/>

<Img imageName='vb3' alt='vb3'/>

## Атомное танго

Angular 9 и его новый движок показали, что Virtual DOM — это вовсе не «конец истории», и альтернативные подходы к change-detection набирают силу.

Основные фреймворки, завязанные на Virtual DOM, так или иначе будут вынуждены реализовывать оптимизации для тех же проблем, которые уже решают альтернативные Virtual DOM-статические системы компиляции шаблонов.

Возможно, следующий год будет годом гибридных решений. Они будут сочетать производительность и оптимизацию статических систем шаблонизации (DOM Template Engine) с гибкостью и простотой динамических (VDOM-like).
Кстати, посмотрите наш <a href="https://www.youtube.com/watch?v=Io6Aa7L4GsE" target="_blank">«Аргументариум»</a> на эту тему.

<Img imageName='tango' alt='tango'/>

<Img imageName='vb4' alt='vb4'/>

## Два сапога пара

Как известно, бэкенд-практики и фронтенд действуют как сообщающиеся сосуды — методы из одной сферы легко перетекают в другую.

В этом году микросервисный подход при разработке фронта из глубокого андеграунда вышел на <a href="https://frontendconf.ru/moscow/2020/abstracts/5993" target="_blank">cцены больших конференций</a> и начал использоваться в крупных проектах.
Более того, на идеях изолированного фронтенда зиждется один из самых ярких релизов года — <a href="https://holyjs-moscow.ru/2020/msk/talks/5xx2i0vcleyeatztadt6ap/" target="_blank">Webpack 5 с его Module Federation.</a>

Пусть сама тема довольно дискуссионная и явно не подойдет любому проекту, это все равно хорошо: возрождаются старые идеи о построении приложения из небольших частей, которые общаются при помощи обмена сообщениями.

С другой стороны, привычный способ манипуляции состоянием как одной большой глобальной «базой данных» станет неактуален. Придется переучиваться.
В свое время тропой похожих метаморфоз уже шли бэкендеры, переходя от концепции «stateless-приложение/stateful БД» к концепции «stateful-приложений», реализованной в Erlang, Akka и Orleans.

<Img imageName='sapogi' alt='sapogi'/>

<Img imageName='vb5' alt='vb5'/>

## Кесарю кесарево

Убив дракона, сам становишься драконом. TypeScript, который начинался как более простая альтернатива сложному и близкому к ML-языкам flow, окончательно победил своего конкурента в прошлом году, а в этом году радикально изменился сам.

Утопически далекие в 2015 году variadic type стали <a href="https://devblogs.microsoft.com/typescript/announcing-typescript-4-0/#variadic-tuple-types" target="_blank">реальностью</a> в версии 4.0
В последней же версии появились <a href="https://devblogs.microsoft.com/typescript/announcing-typescript-4-1-beta/#template-literal-types" target="_blank">Template Literal Types</a>, а отсюда уже и рукой подать до typelevel-программирования.

Система типизации в TS все больше из банального способа запретить явно некорректное поведение превращается пусть и в простое, но средство моделирования приложения. Отсюда недалеко до Type Driven Development. Активное развитие проектов вроде dependant haskell и liquid haskell в самом ML-сообществе тоже укладывается в этот тренд.

## Пища для гурманов

В этом году активным развитием отметился и проект fast-check, предлагающий свой вариант property testing для JS — он работает как инструмент для моделирования приложений и их дизайна, а не только проверки. С помощью fast-check нашли проблему в самой главной JS-библиотеке, базисе всех наших программ — <a href="https://github.com/dubzzz/fast-check/blob/master/documentation/IssuesDiscovered.md#stevemaoleft-pad" target="_blank"><nobr>left-pad</nobr></a>.

Когда-то о подобном в блогах на два человека писали радикальные ML-максималисты, желающие «избегать популярности любой ценой» и стремящиеся подорвать основы итеративного и интуитивного подхода к разработке программ. В наши дни все это стало частью мейнстрима в коммьюнити языка, который всегда отождествлялся с идеями пренебрежения любой типизацией и попытками спланировать или смоделировать будущую программу. Что тут скажешь — “o tempora, o mores”.

Сама идея propperty-тестирования может показаться непрозрачной и вообще контринтуитивной для неофитов. О проблеме написано понятным языком <a href="https://blog.csssr.com/ru/article/property-testing/" target="_blank">тут</a>. А посмотреть разъясняющее проблему видео можно <a href="https://www.youtube.com/watch?v=yckjMWTuLSg" target="_blank">здесь</a>.

<Img imageName='gurman' alt='gurman'/>

<Img imageName='vb7' alt='vb7'/>

## Солдатский блюз

Один из королей фронтенд-сцены Роман Дворнов пишет поточный парсер JSON и описывает прогресс в своем <a href="https://t.me/gorshochekvarit" target="_blank">телеграм-канале</a>.
. Это едва ли не самый хардкорный проект года, который к тому же делает всего один человек практически в прямом эфире!

Помимо проблем с JSON, речь идет и о других интересных вещах. Например,

- onprogress в XMLHttpRequest корректно работает только в Firefox;
- функционал onprogress в fetch повторить можно, но не всегда;
- стримы есть не только в ноде, но и в браузере — и между ними нет ничего общего;
- у V8 ограничение на длину строки составляет 512 Мб, у firefox 1 Гб, а у safari 2 Гб.

<Img imageName='blues' alt='blues'/>

<Img imageName='vb8' alt='vb8'/>

## Ни богов, ни господ

2020 изолировал не только людей, но и их код. 8 июля в вечную мерзлоту ледяного Шпицбергена <a href="https://arcticworldarchive.org/" target="_blank">был помещен архив</a> на 21 ТБ данных. Данные — это копия всего открытого кода, хранящегося на гитхабе, что соответствует 37 миллионам пользователей и почти сотне миллионов открытых репозиториев. Вся информация была зафиксирована на фотоснимках. Всего получилось 186 пленочных катушек с заявленным сроком хранения до 1000 лет.

<Img imageName='vb9' alt='vb9'/>

## Напоследок

Неторопливая поступь научного прогресса уверенно ведет в будущее. То, что кажется внезапным, зачастую созревало годами, а то и веками, почти незаметно для глаз… В общем, в этом году Javascript исполнилось 25 лет.

Закончился 2020 год и закончился путь Курьера… по крайней мере, пока. В новом мире Пустоши Фронтенда шли холивары, лилась кровь, многие жили и умирали — точно так же, как в старом мире.

<Img imageName='outro' alt='outro'/>
