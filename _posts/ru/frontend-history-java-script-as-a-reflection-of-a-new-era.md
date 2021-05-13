---
title: '<i>История фронтенда</i>. JavaScript как отражение новой эпохи'
coverImageAlt: 'Супергерой в красном плаще'
author: 'CSSSR team'
date: '2021-04-30T00:00:00.000Z'
tag: 'culture'
---

<Promo>
  <Subtitle>Во втором выпуске видеосерии «История фронтенда» мы проследили за историей языка JavaScript, его стандарта ECMAScript и выросшей вокруг него экосистемы, чтобы как в зеркале увидеть главные тенденции развития Веба в 2000-х годах.</Subtitle>

  <Video width="560" height="315">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/sgyoKkAfGpU"
      frameborder="0"
      allow="accelerometer clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </Video>

  <Caption size='l'>
      Этот пост — статья-компаньон к видеоролику об истории фронтенд-разработки. Если вы его ещё не смотрели, сделайте это <a href="https://www.youtube.com/watch?v=sgyoKkAfGpU" target="_blank">сейчас</a>.
  </Caption>
</Promo>

**В** 1995 г., в дикой спешке и по брифу с взаимоисключающими параграфами, был создан язык JavaScript. В следующие четверть века он отразил в своей истории весь путь развития фронтенда в целом. Сначала этот язык стал оружием в «войне браузеров» (и её заложником). Потом привёл к масштабному расколу в среде стандартизаторов — людей, которые предполагали, что все правила и механизмы Веба будут формироваться за закрытыми дверями. Одновременно он стал питательной средой для комьюнити разработчиков, которое само создавало себе инструменты и меняло их под свои нужды, не дожидаясь указаний сверху. В итоге JavaScript превратился в «живой стандарт», который формирует, расширяет и надстраивает сообщество вместе с организациями — обозначив этим разворот корпораций навстречу разработчикам, в сторону открытости и кооперации.

**Мы поподробнее расскажем о некоторых моментах, которые не уложились в ролик, а также приведём цитаты из источников и ссылки на интересные материалы.**

## Война браузеров

Историю о войне браузеров пересказывали множество раз, иногда <a href="https://thehistoryoftheweb.com/browser-wars/" target="_blank">получше</a>, иногда — <a href="https://youtu.be/Gh6N1uPjGno" target="_blank">в стиле канала НТВ</a>. Поэтому мы отметим лишь несколько отдельных деталей, связанных с нашим разговором про стандарты (и их отсутствие); плюс, как обычно, немного бесполезных фактов.

### Степень суровости

На своём пике война браузеров бушевала ожесточённо — разве что никого не убивали. К примеру, на сайте браузера Netscape Navigator была <a href="https://youtu.be/MzVFKzLD0LE?t=243" target="_blank">страница с «опровержением лжи»</a> Microsoft про их браузер — а у Microsoft своя, про враки Netscape. Андриссен в интервью оскорблял продукты Microsoft, а продакт-менеджер команды IE развешивал в коридорах его портреты, чтобы заряжать разработчиков яростью для сверхурочных.

**В общем, всё цивилизованно, культурно.**

<Video width="560" height="315">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/Mni7B4H33OE?t=118"
    frameborder="0"
    allow="accelerometer clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</Video>

Было у этой войны и официальное объявление. 7 декабря 1995 г., через полгода после рассылки своего циркуляра <a href="https://lettersofnote.com/2011/07/22/the-internet-tidal-wave/" target="_blank">«Цунами Интернета»</a>, Гейтс <a href="https://archive.seattletimes.com/archive/?date=19971207&slug=2576751" target="_blank">устроил пресс-конференцию</a> в годовщину нападения на Пёрл-Харбор. А чтобы журналисты точно всё поняли, он даже ввернул в свою речь слова «спящий великан проснулся» (в фильме Tora! Tora! Tora! японский адмирал так <a href="https://en.wikipedia.org/wiki/Isoroku_Yamamoto%27s_sleeping_giant_quote" target="_blank">описывает грядущую</a> месть США).

<Img
  src='/images/dont-resize/ru/frontend-history-java-script-as-a-reflection-of-a-new-era/mozilla-uber-alles/all.jpg'
  alt='Ящер Мозилла попирает ногами букву «е»'
  withOutProcessing
  align='left'
>

Наконец, в 1997 г. Microsoft нарочно устроила пышную премьеру Internet Explorer 4 не дома в Сиэтле, а на территории конкурента, в Кремниевой долине. Ночью разгорячённые разработчики IE утащили с корпоратива огромный логотип своего браузера, <a href="https://medium.com/@ddprrt/tales-from-the-browser-wars-mozilla-stomps-internet-explorer-799035887cb1" target="_blank">арендовали грузовик</a>, привезли букву «е» к офису Netscape и засунули в фонтан (тот самый, которым Андриссен <a href="https://youtu.be/sw5xp27Ohgg?t=40" target="_blank">хвастался</a> по телевизору). Но инженеры Netscape работали в офисе круглые сутки, поэтому вовремя заметили саботаж. Когда утром к офису подтянулись телевизионные съёмочные группы, букву уже <a href="http://home.snafu.de/tilman/mozilla/stomps.html" target="_blank">попирал ногами</a> ящер Мозилла, с плакатиком: «Netscape 72%, Microsoft 18%». К несчастью для Мозиллы, именно IE4 было суждено через пару лет <a href="https://web.archive.org/web/20081014143713/http://www.thecounter.com/stats/1999/March/browser.php" target="_blank">изменить</a> это соотношение на обратное: 20% — 60%.

### Гонка нововведений

Вообще-то поначалу это было даже классно. Пока Netscape одиноко сидел на Олимпе, Марк Андриссен просто ставил людей перед фактом: «Мы придумали классную штуку, теперь это стандарт». Так Netscape в одностороннем порядке ввёл в обиход Веба теги `<table>` и `<frame>`, куки, сертификаты SSL, запросы URL Query... и, конечно, JavaScript. Но когда игроков стало двое, эта самодеятельность вышла из-под контроля.

Доходило до смешного: например, вот это — <a href="http://mm.iit.uni-miskolc.hu/Data/texts/BOOKS/Using_HTML/ch16.htm#MicrosoftInternetExplorer" target="_blank">шестнадцать «словесных» цветов</a>, которые впервые предложил Internet Explorer 2. В ответ Netscape Navigator тут же выкатил свои (несовместимые, конечно) — <a href="http://mm.iit.uni-miskolc.hu/Data/texts/BOOKS/Using_HTML/ch15.htm#BackgroundGraphicsandColor" target="_blank">уже 140 штук</a>. Случайно написал название цвета из «чужой» палитры? Получай рандомный цвет, взятый из первых букв слова, переведённых в шестнадцатеричное число. Учебник едко отмечает, что это такая интероперабельность: просто <a href="http://mm.iit.uni-miskolc.hu/Data/texts/BOOKS/Using_HTML/ch16.htm#MicrosoftInternetExplorer" target="_blank">запомни</a>, что «гробница [президента] Гранта» = тёмно-красный, а «туба» = бледно-зелёный.

Или вот замечательная технология ActiveX, в рамках которой вызов в теге `<object>` автоматически скачивал и запускал код на машине пользователя со всеми правами. Поначалу единственной защитой от вредоносных скриптов было просто честное слово: каждый подписчик с ключом авторизации ActiveX (стоимость: $20 в год) обещал не писать вредоносные программы.

>Любопытно, что AJAX вырос из типичной фичи эпохи войны браузеров: функции XMLHttpRequest. Microsoft в одностороннем порядке засунула её в IE5 ещё в 1999 г., в рамках печально известной технологии ActiveX. ActiveX с тех пор умер, а вот эта функция стала очень популярной и вошла во все браузеры — сейчас у неё есть даже отдельный <a href="https://xhr.spec.whatwg.org/" target="_blank">стандарт</a>!

Самые популярные нововведения конкурента (такие, как JavaScript) приходилось копировать — но копии были неточными. Так появился **JScript**, аналог JavaScript — с маленькими, но очень коварными <a href="http://regmedia.co.uk/2007/10/31/jscriptdeviationsfromes3.pdf" target="_blank">отличиями</a> от движка SpiderMonkey в браузере Netscape (расхождения в работе с DOM, conditional compiling и др.).

<Img
  src='/images/dont-resize/ru/frontend-history-java-script-as-a-reflection-of-a-new-era/ie4/all.gif'
  alt='This site best viewed in ie4'
  withOutProcessing
  align='center'
>

А страдали от всего этого разработчики сайтов. Им приходилось постоянно подстраивать сайты под два разных, постоянно обновляемых браузера, с различиями в тегах, рендеринге, движках JavaScript и в какой-то момент даже с двумя разными реализациями DOM.

**Сплошь и рядом веб-дизайнеры сдавались и делали сайт только под один, лидирующий браузер:** _«Лучше смотреть в Netscape Navigator / Internet Explorer»_. Это стало настолько привычной практикой, что в популярном тогда <a href="https://www.uv.es/jordi/v3/html/html/" target="_blank">справочнике</a> по HTML от Netscape эта плашка — <a href="https://www.uv.es/jordi/v3/html/html/tags1.htm" target="_blank">пример того, как использовать тег &lt;a&gt; </a>.

<Img
  src='/images/dont-resize/ru/frontend-history-java-script-as-a-reflection-of-a-new-era/coca-cola/all.webp'
  alt='Top 10 worst 90s website designs coca-cola'
  withOutProcessing
  align='left'
>
<Caption size='s'>
    Или вот такая надпись на промосайте Coca-Cola: «Этот сайт лучше смотреть, разув глаза и через `SHOCKWAVE 6.0.` А, да, и `NETSCAPE 4.04` не помешает». Будь крутым, читай «Молоток».
</Caption>

### `<blink>` против `<marquee>`

Противники не всегда ломали стандарты, они также работали над их формированием. Первая рабочая группа по развитию HTML (тогда ещё в составе <a href="https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D0%B6%D0%B5%D0%BD%D0%B5%D1%80%D0%BD%D1%8B%D0%B9_%D1%81%D0%BE%D0%B2%D0%B5%D1%82_%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82%D0%B0" target="_blank">IETF</a>) представляла собой открытую email-конференцию для всех желающих — инженеров, учёных и IT-вендоров. Когда количество мнений, предложений и возражений в рассылке стало исчисляться тысячами в день, работа этой «рабочей группы» окончательно встала.

<Img
  src='/images/dont-resize/ru/frontend-history-java-script-as-a-reflection-of-a-new-era/team/all.jpeg'
  alt='Участники консорциума W3C в 2000 г.'
  withOutProcessing
  align='left'
>
<Caption size='s'>
    Это участники консорциума W3C в 2000 г. Рэггет третий слева во втором ряду.
</Caption>

Тогда Дэйв Рэггет (один из основателей молодого консорциума W3C и автор инициативы HTML+) <a href="https://www.w3.org/People/Raggett/book4/ch02.html" target="_blank">позвал на помощь</a> крупных игроков. В ноябре 1995 г. в Чикаго за один стол сели представители Netscape, Microsoft, Sun, Spyglass (b2b разработчик ПО), Pathfinder (один из первых больших веб-порталов, принадлежал медиахолдингу Time) и W3C. Был сформирован «редакционный экспертный совет HTML» (HTML Editorial Review Board), который мог быстро принимать решения и сразу их воплощать.

**Забавно, впрочем, что даже договориться сторонам помогла взаимная ненависть.** Первым, на чём сошёлся совет, была сделка: если Netscape уберёт поддержку ненавистного тега «мигание» (`<blink>`), то Microsoft в обмен на это навсегда забудет о столь же раздражающем теге «бегущая строка» (`<marquee>`).

<Video width="560" height="315">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/w-6sC0cddwo?t=391"
    frameborder="0"
    allow="accelerometer clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</Video>
<Caption size='s'>
    А ещё у Google есть про это пасхалки: по запросу `<marquee>` tag он показывает количество результатов <a href="https://yadi.sk/i/8JhLk8HC0hYvkQ" target="_blank">в виде бегущей строки</a>, а в выдаче по `<blink>` tag мигают все слова типа blink, flash и т. п.
</Caption>

Растопив таким образом лёд, конкуренты принялись за работу (например, быстро <a href="https://www.w3.org/People/Raggett/book4/ch02.html" target="_blank">договорились</a> о вышеупомянутом теге `<object>`) и достаточно оперативно зафиксировали <a href="https://en.wikipedia.org/wiki/HTML#HTML_3">несколько версий</a> HTML, вплоть до 4.01. После этого начался застой, описанный в видео. А вытащила стандарт из него только группа WHATWG (о которой ниже).

### Бесполезный факт

**Украла ли Microsoft браузер?** Согласно популярной версии, Microsoft просто купила устаревший браузер-конкурент Mosaic, вместо того чтобы разработать свой. Так сказать, подобрала объедки со стола гениального автора Андриссена.

<Img
  src='/images/dont-resize/ru/frontend-history-java-script-as-a-reflection-of-a-new-era/IE1-about/all.png'
  alt='Cамый первый релиз IE'
  withOutProcessing
  align='left'
>
<Caption size='s'>
    Видите? Это самый первый релиз IE, а версия какая-то странная.
</Caption>

На самом деле в 1995-м Microsoft приобрела уже совсем другой браузер — _Spyglass Mosaic_. Права на Mosaic принадлежали университету, куда входил <a href="https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%86%D0%B5%D0%BD%D1%82%D1%80_%D1%81%D1%83%D0%BF%D0%B5%D1%80%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D1%8B%D1%85_%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9">центр NCSA</a>, а компания Spyglass была одним из лицензиатов на его коммерческое использование. Вместе с правами она получила от центра NCSA и исходный код — но глава разработки Spyglass Эрик Синк <a href="https://ericsink.com/Browser_Wars.html">утверждает</a>, что они сразу переписали браузер с нуля. В свою очередь, в Microsoft уже к третьей версии заменили почти весь код Spyglass (что неудивительно — там-то было кому).

**Тем не менее, из-за юридических требований Microsoft ещё одиннадцать лет в окошке About <a href="https://www.techrepublic.com/a/hub/i/2007/04/25/d1d5d81c-c3bd-11e2-bc00-02911874f8c8/iex6-1.PNG">писала</a> «основано на NCSA Mosaic». Чтобы наконец избавиться от этой надписи в IE7, им пришлось делать сторонний аудит кода!**

## Народный стандарт

Итак, разработчикам в войну приходилось непросто: _«паны дерутся, а у холопов чубы трещат»_. Даже в начале 2000-х люди всё ещё верстали дизайнерские страницы максимально тупыми, но безотказными способами, <a href="https://thehistoryoftheweb.com/tables-layout-absurd/">на таблицах и невидимых гифках-распорках</a>, почти полностью игнорируя CSS; а чтобы реализовать «типа динамический HTML», использовали фреймы (<a href="https://i.pinimg.com/originals/bc/55/af/bc55af9eb77dec83598d3ef1449b306a.jpg">два</a>, а то и <a href="https://storage.googleapis.com/blog-images-backup/1*tY3o3UFtBaMQ103en48qxA.png">больше</a>). Это было грубо, коряво, это ломало поисковики и читалки для слепых — но это был надёжный способ одинаково отображаться во всех браузерах.

Получался замкнутый круг: стандартизаторы и вендоры создавали всё новые инструменты, а разработчики продолжали упорно их игнорировать, полагаясь на старые «костыли». Сломанная страница и раздражённый клиент — куда страшнее, чем немного старомодный дизайн или отсутствие спецэффектов.

**Переломить эту ситуацию решила волонтёрская организация WaSP.**

### Чума на оба ваших DOMа

Одна из самых неприятных ситуаций эпохи войны браузеров возникла, когда раскололась надвое модель репрезентации документа <a href="https://ru.wikipedia.org/wiki/Document_Object_Model">DOM</a>. Сама по себе эта модель выросла из самой первой встроенной библиотеки JavaScript (гл. 3.5 книги <a href="https://dl.acm.org/doi/pdf/10.1145/3386327">JavaScript: The First 20 Years</a>), но теперь стала очередной дубинкой в драке.

В 1997 г. и Microsoft, и Netscape попытались одновременно реализовать Dynamic HTML через расширение модели DOM (т. н. «промежуточные DOM»: с `document.layers` у Netscape и `document.all` у Microsoft). Тогда только и разговоров было, что о Dynamic HTML, а Microsoft уже явно наступала Netscape на пятки. Видимо, это была отчаянная попытка застолбить перспективную технологию и вырвать победу у врага.

<Quote
    type='black'
>
  «Когда вышли оба браузера 4.0, с их всячески распиаренными (и проприетарными, и полностью несовместимыми) реализациями DHTML — вот это по-настоящему разъярило веб-разработчиков».<br/>
— <a href="https://www.xml.com/pub/a/2000/04/10/standards/wasp.html">Джеффри Зельдман, сооснователь WaSP</a>
</Quote>

**Терпение сообщества лопнуло. В 1998 г. группа дизайнеров и разработчиков <a href="https://css-tricks.com/chapter-7-standards/">основала организацию «Оса», WaSP</a> — Web Standards Project.**

>На своём сайте QuirksMode.org историк и активист стандартизации браузеров Петер-Пауль Кох <a href="https://web.archive.org/web/20031205223929/http://www.quirksmode.org:80/js/dom0.html">более подробно рассказывает</a> об истории версий DOM. А в интервью, процитированном выше, Джеффри Зельдман пламенно <a href="https://www.xml.com/pub/a/2000/04/10/standards/wasp.html">объясняет</a>, как работала WaSP и почему стандарты важны для обычных пользователей.

### Проект «Разгром»

Члены WaSP (а их вскоре стало десятки тысяч) не писали технических спецификаций и не заседали комитетами — вместо этого они заваливали корпорации письмами с требованием лучше поддерживать стандарты и исправлять ошибки, а также жалили их грандиозными публичными разносами новых версий «эксплорера» и «навигатора».

<Img
  src='/images/dont-resize/ru/frontend-history-java-script-as-a-reflection-of-a-new-era/wasp-1/all.png'
  alt='The Web Standards Project'
  withOutProcessing
  align='left'
>

<Quote type='black'>
  «Если не доведёте работу до конца — единственный наш ответ будет из огнемёта. Потому что это наша работа. За нами тысячи веб-разработчиков, а за ними — миллионы пользователей Веба.»
</Quote>

Позже они провели кампанию **Browser Upgrade Campaign**, вставляя в сайты редиректы и объяснения для новичков, почему важно обновить старый браузер. А крыло WaSP «Самураи CSS» разработало суперстрогий тест на корректность реализации CSS — <a href="https://en.wikipedia.org/wiki/Acid1">Box Acid Test</a>. Все браузеры смогли идеально его пройти только в 2008 г.!

<Quote type='black'>
  Консорциум W3C рекомендует стандарты. Он не может их насаждать. И уж точно он не будет устраивать публичные истерики из-за того, что их не соблюдают. Значит, будем мы.<br/>
  — <a href="https://www.xml.com/pub/a/2000/04/10/standards/wasp.html">Джеффри Зельдман, один из основателей WaSP</a>
</Quote>

В 2002 г. под впечатлением от работы WaSP инициативные группы разработчиков создали знаменитые **редизайны сайтов журнала Wired и телеканала ESPN**: с мощной опорой на стандарты и с семантически корректными, сложными HTML и CSS. Эти сайты надолго стали образцами нового подхода к веб-дизайну. А вскоре был основан сайт <a href="https://www.webdesignmuseum.org/web-design-history/css-zen-garden-2003">CSS Zen Garden</a> — демонстрационная страница, которая помогала популяризовать красоту и мощь CSS среди разработчиков и их клиентов по всему миру.

<Img
  src='/images/dont-resize/ru/frontend-history-java-script-as-a-reflection-of-a-new-era/espn/all.png'
  alt='Скриншот сайта телеканала ESPN'
  withOutProcessing
  align='left'
>

Сама WaSP планомерно, через атаки в прессе, форумы и письма, уломала Netscape включить «правильный» по стандартам движок Gecko (разработанный отдельной командой внутреннего подразделения Mozilla) в Navigator 5.0. Также WaSP сыграла важную роль в том, чтобы заставить Microsoft и Netscape вернуться от несовместимых «промежуточных DOM» к новому, единому стандарту DOM Level 1.

**Именно благодаря тому давлению, которое WaSP оказывала на корпорации, на веб-дизайнеров и даже на пользователей, им во многом удалось «затащить» Веб в будущее и смягчить урон от браузерной войны.**

### Свой Челик

Кроме агитации, WaSP поддерживала связь с неравнодушными разработчиками внутри браузерных команд. Одним из таких инсайдеров был молодой инженер <a href="https://en.wikipedia.org/wiki/Tantek_%C3%87elik">Тантек Челик</a> — сотрудник Microsoft.

Однажды Челика сделали лидом команды на разработке Internet Explorer для «Мака». Сделали... и забыли. Его команда просто затерялась в гигантском организме Microsoft и была предоставлена самой себе. <a href="https://hacks.mozilla.org/2012/02/tantek-celik-about-the-importance-of-web-standards/">Пообщавшись</a> с передовым веб-сообществом, в том числе с членами WaSP, Челик решил сделать что-нибудь хорошее. К удивлению Microsoft, в 2000 г. команда Челика сдала готовый браузер, IE5 для Mac OS: <a href="https://css-tricks.com/chapter-7-standards/">первый в мире с 99% поддержкой CSS1</a>. Прецедент был создан: уже через год высокий уровень поддержки CSS показал магистральный релиз IE6 для Windows. WaSP одержала очередную победу.

<Img
  src='/images/dont-resize/ru/frontend-history-java-script-as-a-reflection-of-a-new-era/about-tasman-ie5-mac-os-x/all.png'
  alt='O Tasman в IE5 Mac OS X'
  withOutProcessing
  align='center'
>
<Caption size='s'>
    У этого браузера даже пасхалка была в виде теста на корректность CSS, только в именами разработчиков вместо <a href="https://upload.wikimedia.org/wikipedia/commons/4/49/Acid1_reference.png">«рыбы»</a>.
</Caption>

**Но это ещё не всё: в процессе разработки тот же Челик придумал два важнейших CSS-хака эпохи: Doctype Switching и Box Model Hack.**

<Img
  src='/images/dont-resize/ru/frontend-history-java-script-as-a-reflection-of-a-new-era/box-model/all.png'
  alt='Наглядное представление Box Model Hack'
  withOutProcessing
  align='center'
>

Первый позволял <a href="https://css-tricks.com/look-back-history-css/#doctype-switching">надёжно переключать</a> новый браузер в режим совместимости со старой, кривой реализацией CSS под Internet Explorer. Второй <a href="https://css-tricks.com/look-back-history-css/#the-box-model-hack">всего в паре строчек</a> позволил обойти <a href="https://en.wikipedia.org/wiki/CSS_box_model#History">многолетний баг с шириной полей</a> у блока, которую неправильно рассчитывали старые «эксплореры», — чтобы корректно показывать в старом браузере новые страницы.

**Как <a href="https://css-tricks.com/look-back-history-css/#doctype-switching">сказал</a> Эрик Мейер, один из крёстных отцов веб-дизайна и разработчик CSS1: «Хак doctype switching спас CSS от смерти»**

## ECMAScript, Айк и Крокфорд

### Крок и я

<Img
  src='/images/dont-resize/ru/frontend-history-java-script-as-a-reflection-of-a-new-era/crok&me/all.png'
  alt='Слайд из презентации Б. Айка об истории JavaScript'
  withOutProcessing
  align='center'
>
<Caption size='s'>
    Слайд из <a href="https://brendaneich.com/wp-content/uploads/2017/12/dotJS-2017.pdf">презентации</a> Б. Айка об истории JavaScript.
</Caption>

**Так получилось, что в видео мы как бы противопоставляем Брендана Айка и Дугласа Крокфорда. Но, конечно, они не противники, а соратники — с очень разными типажами, но комплементарными, дополняющими друг друга.**

**Дуглас Крокфорд** — междисциплинарный человек, умеющий примирить разные миры, теорию и практику. Поступил в университет учиться телевещанию, программированием увлёкся случайно — и при этом всё равно больше всего любил беседовать с учёными-гуманитариями, узнавать, как они видят компьютеры и какие задачи хотят на них решить. Позже Крокфорд много работал в медиа: разрабатывал простенькие игры для Atari, развивал компьютерный монтаж в LucasFilms, работал с легендарными квестоделами в LucasArts и с разработчиками первой графической MMO-игры <a href="https://www.youtube.com/watch?v=VVpulhO3jyc">Habitat</a>.

<Video width="560" height="315">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/6gIycu1gleQ?t=103 "
    frameborder="0"
    allow="accelerometer clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</Video>

Он мастер компромисса и коммуникации («<a href="https://www.oreilly.com/library/view/javascript-the-good/9780596517748/">берите всё хорошее</a>, обходите плохое»), интеллигентный рыцарь user experience, который всегда на первое место ставит человека (будь это позитивный пользовательский опыт или удобство разработки) и старается убрать всё лишнее, упростить, оставив лишь ту технологию, которая решает проблему.

**Брендан Айк** — классический инженер с прецизионным лазерным умом, начинавший с самого низкоуровневого программирования на ассемблере (как он выражается в <a href="https://www.amazon.com/Coders-Work-Reflections-Craft-Programming/dp/1430219483">Coders at Work</a>, теперь он может отличить тех, кто в своё время не боялся поковыряться в битах). Он поступил на физика, но увлёкся программированием — а также конструированием языков и прочей теорией. Трудоголик со сверхъестественной концентрацией (как <a href="https://web.archive.org/web/20080208124612/http://wp.netscape.com/comprod/columns/techvision/innovators_be.html">описывал</a> его Андриссен), играющий на досуге на рояле, он в то же время умел подниматься над проблемой и работать на высоком философско-идеологическом уровне.

Он мечтал и мечтает по-максимуму поставить достижения computer science на службу пользователю, добиться максимальной элегантности решения, продумать нечто новое и более совершенное. **Как он любит выражаться, «сдвинуть стрелку» индустрии:** не просто дождаться, пока показатель вырастет естественным путём, а упереться и поднажать.

**И именно на этой тонкой грани между теорией и практикой они схлестнулись.**

Что важно, именно Айк стал автором <a href="https://mail.mozilla.org/pipermail/es-discuss/2008-August/003400.html">концепции «Гармония»</a>, которой он объединил две противоборствующие группы (ES3.1 и ES4) и решительно отсёк всё лишнее в собственном предложении, чтобы после <a href="https://brendaneich.com/2011/01/harmony-of-my-dreams/">6 лет размышлений</a> вернуться уже с проверенным, элегантным стандартом ES6, принятым сообществом на ура. Оба оказались прагматичными и умными людьми — но оба по-разному.

**Вот как один говорил о другом по свежим следам, в интервью 2009 г.:**

<Quote type='black'>
  **«Они решают не ту проблему.** Решается проблема «люди ненавидят JavaScript». Конечно, Брендану Айку не позавидуешь, он проделал великолепную работу, но делал её спешно, его запутало руководство, и получилось много плохого. И вот его уже больше десяти лет проклинают и демонизируют, какой он тупой, какой идиотский у него язык, — и всё это неправда. Там есть великолепные вещи, и он талантливейший человек.

  Так вот, теперь он пытается защитить свою репутацию и доказать, мол, я на самом деле умный парень, и я это докажу своим языком, в котором будут все удачные особенности, которые я в жизни видел: соберём их все вместе, и всё получится.

  Я думаю, не эту проблему нам нужно сейчас решать. А решать нам надо вот какую проблему: Веб сломан, и его надо чинить. Значит, нужно нащупывать дорожку вперёд. И моя главная претензия к предложениям Брендана — это то, что они нас отвлекают».<br/>
  — <a href="https://www.amazon.com/Coders-Work-Reflections-Craft-Programming/dp/1430219483">Douglas Crockford, Coders at Work</a>
</Quote>

## Бокс по переписке

В видео мы упоминаем язвительные статьи Крокфорда и ответ на них Айка.

Вот <a href="http://crockford.com/javascript/popular.html">статья</a>, грубоватая даже для Крокфорда, где он для красного словца даже перевирает историю создания языка (именно на это среагировал Айк, написав свой обиженный <a href="https://brendaneich.com/2008/04/popularity/">пост</a> с краткой историей появления JavaScript). «Это поразительный язык... в плохом смысле», «кошмарный DOM», «весь в уродливых язвах», «сляпан» «<a href="https://youtu.be/r5wD8KuTHnw?t=54">слишком много нот</a>, как сказал бы император Иосиф» — Крокфорд амуниции не жалеет, и всё это лишь для того, чтобы тут же сказать:

<Quote type='black'>
  «Но, несмотря на своё просто поразительное несовершенство, где-то внутри, в самой сути, JavaScript поймал нечто очень правильное. Если счистить с него всю труху*, обнаружишь выразительный, мощный язык программирования. Этот язык достойно используется во многих библиотеках Ajax с тем, чтобы надстроить и упорядочить DOM, давая нам платформу разработки для интерактивных приложений, выгружаемых как веб-страницы. Ajax стал популярным потому, что JavaScript работает. И работает на удивление хорошо. <...> Ajax дал ему второй шанс».<br/>
  <sub>`*` cruft: выдуманное слово для обозначения мусорного, лишнего, мешающего кода</sub>
</Quote>

А заканчивает статью так:

<Quote type='black'>
  «Лучше быть везучим, чем умным».<br/>

  — <a href="http://crockford.com/javascript/popular.html">Douglas Crockford, The World’s Most Misunderstood Programming Language Has Become the World’s Most Popular Programming Language</a>
</Quote>

Теперь вы, наверное, согласитесь, что реакция на такие комплименты может быть неоднозначной! Впрочем, контекст решает: эта статья от марта 2008 г. написана на самом пике внутреннего раскола в рабочей группе TC39 — <a href="https://images.ctfassets.net/23aumh6u8s0i/5XCGnIDuKgRGtOOOTksnHt/db28f09ac2c7fcae5a9569127a1f98c1/timeline2">после деления на группы ES3.1 и ES4</a>, но до «Гармонии» и примирения. В других своих текстах и тем более видео Крокфорд — сама интеллигентность.

<Video width="560" height="315">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/Rj49rmc01Hs?t=303"
    frameborder="0"
    allow="accelerometer clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</Video>
<Caption size='s'>
    Сам Айк тоже не прочь посмеяться над собой и своим языком. Вот он во время лекции целиком показывает ролик под названием «Фейлы JavaScript», отмечая, что «I LOL’d a lot». Правда, потом он не удерживается и тихонько поправляет автора: «Это вообще-то строка, но ладно».
</Caption>


### Репутация JavaScript: природа или воспитание?

По поводу изначальных задач JavaScript и о том, каким его видели начальники, партнёры (в лице Sun) и сам Брендан Айк (несколько ошибочно), мы уже сказали в видео. Здесь приведём просто более полную цитату из его <a href="https://a-z.readthedocs.io/en/latest/javascript.html">интервью</a>, где он рассказывает об изначальной задумке JavaScript:

> «Движущей силой тут была убеждённость (как минимум Марка Андриссена и меня, и ещё Билла Джоя из Sun), что HTML нуждается в т. н. «скриптовом языке» — языке программирования, которым легко пользоваться любителям и новичкам, код которого можно вписывать прямым текстом, прямо в разметку веб-страницы. Нашей целью было создать «язык-клей» для веб-дизайнеров и программистов-фрилансеров, которые строили бы веб-контент из компонентов (таких как изображения, плагины и Java-апплеты). Мы видели это так: Java — «язык компонентов», на котором пишут высокооплачиваемые программисты; а программисты-«склейщики», дизайнеры веб-страниц, собирают вместе компоненты и автоматизируют их взаимодействие с помощью JS.
>
>В этом смысле JS был аналогом Visual Basic, а Java — C++, если смотреть на семейство языков Microsoft, используемое на Windows и в приложениях под него. Это разделение труда внутри «пирамиды программистов» больше способствует инновациям, нежели ситуация, когда все программисты обязаны писать на «настоящих» языках (Java или C++), вместо «маленьких» скриптовых языков.
>
><...> Вообще, некоторые early adopters даже в конце 1995 г. (когда Netscape 2 был в бете) уже строили сложные веб-приложения с помощью JS и фреймов во фреймсетах, — предвосхищая таким образом Ajax, он же подход к разработке «Веб 2.0». Но компьютеры тогда были слабенькие, JS обладал весьма бедным набором браузерных API, а метод коммуникации с сервером обычно подразумевал перезагрузку всей страницы целиком."

<Img
  src='/images/dont-resize/ru/frontend-history-java-script-as-a-reflection-of-a-new-era/js-chronology-by-Ike/all.png'
  alt='История многочисленных наименований JavaScript: краткая версия от Айка'
  withOutProcessing
  align='center'
>
<Caption size='s'>
    История многочисленных наименований JavaScript: краткая версия от Айка.
</Caption>

Читая слова Айка, понимаешь, что некоторые проблемы JavaSсript исходили не только от вмешательства менеджеров или простого недопонимания: для языка задумывалась явно другая функция, нежели в реальности. В этом смысле интересно сравнить изначальный план Айка и Андриссена с перечнем основных проблем JavaScript, как их описал в 2001 г. Дуглас Крокфорд (в той самой <a href="http://crockford.com/javascript/javascript.html">статье про «Непонятый JavaScript»</a>):

* **Название**, которое вводит в заблуждение (Java, которая вовсе не Java) и создаёт ощущение «второсортности», ограниченности («-скрипт»).

* **Синтаксис**, похожий на неродственные языки — кажется процедурным, хотя ближе к функциональным языкам («Lisp в шкуре Си»).

* **Прилипшее амплуа** «языка для браузеров» (в то время как он может широко использоваться в других областях).

* **Улучшение вдогонку:** первые версии были объективно слабы и не имели важных элементов (обработка исключений, наследование и т. д.), что создало языку дурную славу.

* **Конструктивные промахи** при весьма удачном дизайне языка в целом («Как ни странно, ECMAScript как будто не желает исправлять перечисленные недостатки; видимо, предпочитают добавлять новые»).

* **Глючные имплементации** на раннем этапе (ранние JS-движки с обилием багов, встроенные в ещё более забагованные браузеры).

* **Очень плохие учебники** («Я отрецензировал этих книг десятки и пока могу посоветовать лишь одну»).

* **Очень плохой стандарт**: ECMAScript — трудночитаемый и тяжёлый для понимания (усугубляет проблему учебников).

* **Любители**: так как на JS [на тот момент] пишут почти всегда не-программисты, на JS почти нет хороших программ: «Лишь благодаря огромной выразительной силе JavaScript они добиваются чего-то полезного».

* **Неопределённость в том, является ли JS ООП**: Крокфорд говорит, что является — просто вы не умеете его готовить (и даёт пару подсказок).

### Домашняя страничка Б. Айка

<Img
  src='/images/dont-resize/ru/frontend-history-java-script-as-a-reflection-of-a-new-era/brendan-eich-homepage/all.png'
  alt='Изображение домашней страницы Brendan'
  withOutProcessing
  align='center'
>

**Издевательства над Айком продолжаются!** Чтобы подшутить над Бренданом и над тем, как используют JavaScript любители на своих домашних страничках, его коллеги по Netscape однажды сделали для него собственный <a href="http://web.archive.org/web/19981207072942/people.netscape.com/brendan/">вырвиглазный home page</a>. Тут есть и самодельные часы, и прыгающая гифка, ссылки на ASCII-анимашку (уже настоящую, созданную каким-то пользователем знаменитых Geocities) и на «учётную книгу» владельцев Porsche Boxster на Perl... и даже так называемый «блок с гик-кодом» (Geek Code).

>У этого <a href="https://en.wikipedia.org/wiki/Geek_Code">Geek Code</a> тоже интересная история. Жил он недолго, примерно с 1993 по 1996 гг.; его использовали, чтобы рассказать другим гикам о себе: параметрах своей внешности, роде занятий, любимых сериалах, областях науки и т. д. Самое удивительное, что прототипом для него послужил кодовый язык для знакомств между членами гомосексуальной субкультуры «медведей» — а те, в свою очередь, вдохновлялись кодом для спектральной классификации звёзд.

Вообще, тогдашние <a href="https://thehistoryoftheweb.com/why-do-we-call-it-a-homepage/">домашние странички</a> — это особая культура. Некоторые люди считают, что в них была непосредственность участия и творчества (как у домашних зинов или спектаклей), которой лишен сегодняшний интернет, и поэтому пытаются сохранить эту часть сетевой истории (об этом есть хорошее <a href="https://www.youtube.com/watch?v=2LzyRcLJdlg">видео</a>).

## Победа новой модели

Со стандартом HTML в 21 веке произошла история, похожая на другие описанные нами «заторы стандартизаторов». Но на этот раз помощь пришла откуда не ждали.

После публикации стандарта HTML 4 консорциум W3C <a href="https://css-tricks.com/chapter-7-standards/">увяз на много лет</a>, пытаясь полностью перевести весь Веб на XML. Предлагаемый язык XHTML был куда более строгим (такой небрежности, какая дозволительна в HTML, он бы никогда не простил), но зато куда более семантически элегантным и «правильным». И если вначале речь шла об обратной совместимости с HTML, то опубликованный в 2002 г. эскиз XHTML почти полностью её лишился (и это в интернете, где уже были десятки миллионов сайтов!).

<Quote type='black'>
  «XHTML 2 — это была такая красивейшая спецификация невероятной философской стройности, которая при этом не имела абсолютно ничего общего с реальным миром»<br/>
  — <a href="https://www.cnet.com/news/an-epitaph-for-the-web-standard-xhtml-2/">Брюс Лоусон, Opera</a>
</Quote>

В итоге в 2004 г. инженеры из Apple, Mozilla и Opera (включая Айка, <a href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B8,_%D0%A5%D0%BE%D0%BA%D0%BE%D0%BD_%D0%92%D0%B8%D1%83%D0%BC">Хокона Ли</a>, <a href="https://ru.wikipedia.org/wiki/%D0%A5%D0%B8%D0%BA%D1%81%D0%BE%D0%BD,_%D0%AF%D0%BD">Яна Хиксона</a> и <a href="https://en.wikipedia.org/wiki/Dave_Hyatt">Дэйва Хайата</a>) не выдержали и создали собственную группу: **WHATWG**. Цель у них была чёткая: расширить и улучшить существующий HTML таким образом, чтобы <a href="https://whatwg.org/charter">поддержать разработку более сложных веб-приложений</a>.

Модель работы WHATWG была так же проста, как её <a href="https://en.wikipedia.org/wiki/WHATWG#/media/File:WHATWG_logo.svg">логотип</a>: любые предложенные функции и теги давались на обсуждение и обкатку разработчикам браузеров, которые на пробу внедряли их в экспериментальном режиме. А в стандарт добавлялись только те фичи, которые не просто не вызывали ни у кого возражений — а **уже** имели как минимум две интероперабельных реализации!

Спустя три года консорциум W3C был вынужден де-факто принять их эскиз нового стандарта HTML5 (в этому времени W3C не обновлял HTML уже 8 лет). В 2011 г. HTML5 стал «живущим», то есть непрерывно обновляемым стандартом; в 2014 г. W3C официально признала свою второстепенную роль в процессе (отныне консорциум просто фиксировал изменения, разработанные WHATWG).

**Наконец, в 2019 г. W3C полностью свернул работу над HTML и официально передал право публиковать этот стандарт группе WHATWG.**

Также WHATWG подхватили развитие других стандартов: под их присмотр ещё в 2004 г. ушёл DOM, они же с 2012 г. развивают в «живом» режиме API XMLHttpRequest. Словом, модель «отраслевые корпорации + комьюнити» снова доказала свою жизнеспособность.

`* * *`

В названии видео мы заявили о том, что история JavaScript стала как бы отражением эпохи в развитии фронтенда. И действительно, многие из приведённых примеров демонстрируют похожую траекторию: хаос «войны», муки стандартизации, застой, затем низовая инициатива по модернизации в среде разработчиков, и наконец победа интегрированного подхода — при котором корпорации сотрудничают со свободным комьюнити, большая часть проприетарных решений просто вымерла (уступив место бесконечной <a href="https://youtu.be/SpeDK1TPbew?t=311">рекомбинации открытых модулей</a>), а почти все главные стандарты стали «живущими».


И если мы не упомянем здесь слово «конвергенция», то только потому, что настоящая конвергенция — внедрение концепции SPA и множества новых фреймворков и библиотек для её реализации — в истории фронтенда ещё впереди.