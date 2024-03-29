---
title: 'В этом выпуске: результаты State of CSS 2023, релиз Bun 1.0, TypeScript 5.2, выпуски браузеров Chrome 117, Firefox 117 и фреймворка Astro 3.0, отказ Turbo от TypeScript и, кажется, завершение истории тулчейна Rome.'
soundcloudLink: 'https://soundcloud.com/csssr/bun-10-typescript-52-chrome-117-firefox-117-state-of-css-2023-otkaz-ot-ts-rome-vsyo'
date: '2023-09-19T00:00:00.000Z'
episodeNumber: 240
tag: 'news'
author: 'Ислам Виндижев'
---

Всем привет, это «Новости 512» от CSSSR. В этом выпуске мы поговорим о релизах Bun 1.0, TypeScript 5.2, выпусках браузеров Chrome и Firefox 117 и фреймворка Astro 3.0. Мы коснёмся паттернов реактивного программирования в современном JS, чистой истории Git, универсальных пакетов и новых методов для группировки объектов в массивах. Я немного расскажу о результатах State of CSS 2023, отказе Turbo от TypeScript и, кажется, завершении истории тулчейна Rome.

Про опрос я не забыл, просто не успел как следует обработать результаты, чтобы рассказать вам о них. Какие-то изменения не произойдут сразу, но будут запланированы. Было полезно, всем большое спасибо.

<ParagraphWithImage imageName="laptopNews" >
  ### Интересные публикации

В JavaScript сейчас применяется большое количество паттернов реактивного программирования. Вы их применяете часто, даже не зная этого, поскольку они могут быть под капотом ваших любимых инструментов и фреймворков. На [подборку этих самых паттернов](https://habr.com/ru/articles/757770/) я и предлагаю вам посмотреть. Марк Грабански в своей статье прошёлся по самим паттернам постепенно в сторону усложнения и их практического применения. Он рассматривает такие паттерны, как подписка, наблюдатель, прокси и другие. Постепенно он переходит к асинхронности реактивных данных, рассказывает о реактивных системах в Rx.js и Solid.js, применении паттернов в обычном JS, например в `IntersectionObserver` и `MutationObserver`, и даже немного в CSS. Подборка хорошая, но вряд ли исчерпывающая. Она доступна на Хабре на русском языке в переводе Игоря Агапова.
</ParagraphWithImage>

Поскольку у нас всё ещё есть разные способы использования пакетов и разные рантаймы, то и разработка максимально универсальных библиотек как никогда актуальна. В [этом материале](https://hexagon.56k.guru/posts/dual-mode-cross-runtime-packages/) как раз достаточно коротко описывается алгоритм принятия решений при создании нового пакета с уклоном в универсальность. Для начала нужно определиться с тем, что вы хотите поддерживать в первую очередь — Deno или Node.js. Для каждой среды описаны шаги подготовки и оформления пакетов. К сожалению, по Node.js гайд более полный, а для Deno придётся пройти по дополнительным ссылкам, которые вы легко найдёте в статье. Там же и ссылки на некоторые дополнительные материалы.

В JavaScript, скорее всего, появится [нативная группировка объектов в массивах](https://philna.sh/blog/2023/09/14/javascript-array-grouping-methods/). Пропозал уже на стадии 3; согласно ему, к объектам `Object` и `Map` будут добавлены статические методы `groupBy()`. В популярных библиотеках с утилитами такие есть, а теперь появятся нативные. Работают они так, как вы ожидаете: возвращают массив с объектами, у которых есть определённое поле с одинаковым значением. Между этими методами есть разница. `Object.groupBy()` возвращает объект с null-прототипом, который ничего не наследует от `Object`. Так вы случайно не запишите лишнего в сам прототип. Это также может пригодиться, когда преобразовывать данные дальше не нужно. `Map.groupBy()` вернёт объект с прототипом `Map`. Подробнее в статье Фила Нэша (Phil Nash).

Замыкания и некоторые проблемы с ними встречаются не только на собеседованиях в вакуумных примерах, но и в реальном коде на React. Об этом [в своей статье](https://www.developerway.com/posts/fantastic-closures) говорит Надия Макаревич (Nadia Makarevich). Если конкретно, она говорит о проблеме устаревшего замыкания — случае, когда в замыкании остаётся переменная с неактуальным значением. Такие ситуации вполне могут возникать при работе с хуками, что и демонстрируется в статье. В ней же показывается, как можно избежать таких проблем при помощи `useRef()`.

Брамус Ван Дамме (Bramus Van Damme) в своём блоге написал о [новой фиче CSS](https://www.bram.us/2023/08/22/a-quick-introduction-to-css-scope/), которая будет доступна уже в следующем релизе Chrome 118. Это `@scope`, как вы могли догадаться. Она позволяет задать область действия селекторов. В итоге между специфичностью и порядком отображения появляется шаг определения скоупа. В заметке есть примеры её применения. Фича выглядит очень здорово, потому по идее позволяет забыть о методологиях вроде БЭМ и других плясок с каскадом.

Продолжая тему CSS: Игорь Мельников на Хабре собрал в своей статье [5 новинок адаптивного CSS](https://habr.com/ru/articles/754566/), которые уже можно использовать. Практически обо всех вы, скорее всего, уже слышали, но могли пока просто не использовать. Речь идёт о Container Queries, новых относительных единицах измерения, медиазапросах Media Queries Range и функциях CSS `clamp`, `min` и `max`. Также Игорь упоминает `text-wrap: balance`, хоть он и не везде поддерживается. Стоит взглянуть, потому что, возможно, какая-то из фич уже сегодня может помочь вам в решении рабочих задач.

Достаточно часто для развёртывания Node.js-приложений или сред используются Docker-образы. В зависимости от контекста Docker-образ можно оптимизировать. Сэмуэль Бодин (Samuel Bodin) поделился [своим опытом оптимизации](https://www.specfy.io/blog/1-efficient-dockerfile-nodejs-in-7-steps). Он использует Slim-версию образа, делает билд в несколько шагов, чтобы не раздувать node-модули, а также чистит dev-зависимости. В итоге всё быстрее собирается, а размер уменьшается на 80%.

Мария Петрова на Хабре опубликовала [статью о чистой истории Git](https://habr.com/ru/companies/ozontech/articles/754526/). И в самом деле, чистая история — это прекрасно. В команде все должны по коммитам понимать, что происходило в проектах, иметь возможность ориентироваться в истории изменений и чётко понимать, за что отвечал конкретный коммит. Сразу скажу, что статья — разъяснение концепта чистой истории, а не строгая инструкция. Маша рассуждает о самом концепте, приводит пример и рассказывает о полезных командах Git, которые могут помочь поддерживать порядок в коммитах и ветках. Например, она касается работы таких команд, как `reset`, `amend`, `stash`, `squash` и других с небольшими примерами. По ходу статьи и в конце масса полезных ссылок по теме. Помните, что никакой подход не панацея и нужно исходить из потребностей команды и вашего проекта.

Следующий материал, возможно, больше ориентирован на QA-инженеров, но всем нам на этапе разработки нужно как-то первично тестировать то, что мы делаем. Речь идёт о тестировании бэкенда, у которого не-REST API. Это небольшой цикл из трёх частей. В [первой части](https://habr.com/ru/companies/qiwi/articles/743518/) описывается тестирование GraphQL-бэкенда, во [второй](https://habr.com/ru/companies/qiwi/articles/747604/) — WebSocket, в [третьей](https://habr.com/ru/companies/qiwi/articles/753778/) — gRPC. В каждой базовое описание концепции и примеры.

Следующие два материала о безопасности. [Первый](https://habr.com/ru/companies/bastion/articles/757590/) — подборка распространённых уязвимостей на фронтенде; пару месяцев назад я уже рассказывал про другой подобный материал. В этом же материале описаны разные типы XSS-атак, инъекции кода и шаблонов, CORS и атаки, использующие общие ресурсы и контент, а также перехват WebSocket-соединения.

[Второй материал](https://habr.com/ru/articles/757332/) посвящён уже конкретно настройке Content Security Policy или CSP и её корректной настройке. Разработчик Вячеслав Носов в своей статье поделился своим опытом локального развёртывания nginx и настройки CSP. Всё в целях проверки того, корректно ли работает политика безопасности. Посмотрите — возможно, и вам пригодится.

Завершит рубрику [заметка об абстрактных типах данных](https://habr.com/ru/articles/758286/) от Софии Сазоновой. Она посвящена тому, для чего мы вообще их создаём, как абстракции упрощают нам жизнь и зачем нужны. Внутри определения типов данных и абстрактных типов данных, немного примеров и бонусом раздел про структуры данных. Всё это дело буквально на 7-10 минут чтения.

<ParagraphWithImage imageName="manWithLaptop">
  ### Новости релизов

Вышел Chrome 117. Методы группировки, о которых я сегодня говорил, в этой версии уже можно попробовать. Были добавлены новые фичи для входных и выходных анимаций — это свойство `transition-behavior` и правило `@starting-style`, которое отвечает за переход от `display: none` до полного отображения. В DevTools теперь можно подменять контент, теперь эта фича доступна всем — достаточно выбрать в Network нужный запрос и заменить данные на нужные вам. Суперудобно, когда нужно что-то быстро проверить, не меняя ничего на бэке. Появилась приятная галочка для скрытия запросов от расширений — меньше шума. Ещё одна маленькая, но приятная фича — читабельные коды: теперь кроме цифры будет и текстовое наименование, можно больше не вспоминать или не гуглить точное наименование кода — приятно. Во вкладке Response теперь можно красиво выводить не только JSON, но и его подтипы. Больше подробностей в официальных обзорах [Chrome](https://developer.chrome.com/blog/new-in-chrome-117/) и [DevTools](https://developer.chrome.com/blog/new-in-devtools-117/) от Google.

Незадолго до релиза 117 версии вышел [патч 116-й версии Chrome](https://chromereleases.googleblog.com/2023/09/stable-channel-update-for-desktop_11.html) с устранением 0-day уязвимости. Подробности пока не раскрываются, но она связана с переполнением WebP-буфера и позволяла выполнять произвольный код с обходом всех уровней защиты браузера. По данным исследователей, уязвимость довольно активно эксплуатировалась.
</ParagraphWithImage>

[Firefox 117](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Releases/117) теперь поддерживает вложенный CSS. Кроме того, добавили поддержку свойств `math-style` и `math-depth` для математических формул и синтаксис `contain-intrinsic-size: auto none`.

Через некоторое время вышел [патч Firefox 117.0.1](https://www.mozilla.org/en-US/firefox/117.0.1/releasenotes/), в котором также было исправление уязвимости, устранённой в Chrome, о которой я говорил чуть раньше.

[TypeScript 5.2](https://devblogs.microsoft.com/typescript/announcing-typescript-5-2/) ожидаемо вышел. В нём появилось новое ключевое слово `using`, которое позволит явно управлять ресурсами. Напомню, что ресурс — это что-то, что нужно ограниченное количество времени, например соединение, какие-то данные или память. Новый синтаксис позволит соединить получение ресурса и его инициализацию, а освобождение — с уничтожением объекта. Подобный механизм есть в C# — если вы на нём писали, то наверняка с этим сталкивались. Механизм может работать как синхронно, так и асинхронно. Также в этой версии добавили возможность добавлять метаданные классов к декораторам, использовать одновременно именованные и анонимные кортежи в типах, упростили работу с объединениями массивов и добавили поддержку новых методов копирования массивов.

Булочка наконец-то допеклась. Вышла [версия 1.0 рантайма Bun](https://bun.sh/blog/bun-v1.0). Напомню, что Bun обещал быть быстрым, универсальным, уметь всё, что нужно современному вебу и разработчикам. В целом, в посте о релизе так и пишут. Помимо этого, слово «быстрее» встретилось там очень много раз — мне стало почти плохо. Стоит ли попробовать? Да, я думаю, что стоит посмотреть на фичи по ссылке в описании и попробовать. Завозить ли на прод? Думаю, что рано, как и с любой новинкой. Ребята делают очень большой акцент на скорости, а это может означать, что слегка хромает всё остальное. И ещё один момент: пользователи винды пока мимо, так как для неё есть только билд рантайма и очень-очень экспериментальный.

Node.js отметился [версией 20.6.0](https://nodejs.org/en/blog/release/v20.6.0), в которой появилась поддержка родных `.env` файлов.

Доступна [третья мажорная версия фреймворка Astro](https://astro.build/blog/astro-3/). Новая версия поддерживает `View Transition API`. Оптимизация изображений была помечена как стабильная. Рендер компонентов Astro стал в среднем на 50% быстрее, а HMR для React и Preact теперь поддерживает быстрое обновление. Подробнее в блоге Astro.

Вышла [16-я мажорная версия СУБД PostgreSQL](https://www.postgresql.org/about/news/postgresql-16-released-2715/). В основном релиз был посвящён прокачке механизма логической репликации. Теперь можно реплицировать изменения с резервного сервера, и была добавлена двунаправленная репликация таблиц. Была увеличена производительность логической репликации и расширены средства управления доступом к ней. Также были представлены оптимизации и улучшения планировщика запросов. Больше возможностей на странице релиза.

Также в этом выпуске отмечу релиз [Cypress 13](https://www.cypress.io/blog/2023/08/29/announcing-cypress-13-test-replay/), августовский релиз [VS Code 1.82](https://code.visualstudio.com/updates/v1_82), выпуски библиотеки компонентов [Ant Design 5.9.2](https://github.com/ant-design/ant-design/releases/tag/5.9.2) и фреймворка [Electron 26.2](https://github.com/electron/electron/releases/tag/v26.2.0).

<ParagraphWithImage imageName="laptopNews" >
    ### Другие новости

Завершился опрос [State of CSS 2023](https://2023.stateofcss.com/en-US/), и готовы его результаты. Самой внедряемой фичей стал псевдоселектор `:has()`. Вырос процент использования сабгридов среди опрошенных. CSS-переменными пользуются почти все опрошенные, также вырос процент использующих логические свойства CSS. Среди CSS-фреймворков ожидаемо продолжают лидировать Bootstrap и TailwindCSS. Тем не менее здесь кроется сюрприз — некие Open Props и Blaze UI, о которых до результатов опроса я никогда не слышал. Опрос показывает большой интерес к ним и высокую удовлетворённость разработчиков. В сегменте CSS-in-JS наблюдается некоторая стагнация: в лидерах по-прежнему Styled Components и CSS Modules — ими пользуется примерно 50% опрошенных, при этом какого-то восходящего тренда особо не видно. Среди процессоров продолжают доминировать PostCSS и Saas/SCSS. Из других инструментов Prettier, Autoprefixer и Stylelint уверенно держатся в топах регулярного использования. В результатах, конечно, гораздо больше статистики, я очень советую посмотреть итоги целиком.
</ParagraphWithImage>

Пока мы с вами бодро обсуждаем релизы TS, cоздатель Ruby on Rails Давид Хейнемейер Ханссон объявил о том, что [в следующей версии движка Turbo 8 откажутся от TypeScript](https://devclass.com/2023/09/07/ruby-on-rails-creator-removes-typescript-from-turbo-framework-upsets-community/). Напомню, что Turbo — это движок с передачей HTML, на котором работает новый фреймворк от 37signals Hotwire. Отказ от TS был, по сути, волевым решением, потому что подавляющее большинство было против. Причиной стала неоправданная, по мнению Ханссона, сложность. Мне кажется, у всех было немало случаев, когда писать типы приходилось дольше, чем сам код, хотелось бахнуть `any`, да или просто совсем выкинуть типы. Приведёт ли этот случай к тому, что люди и компании начнут массово бросать TypeScript? Вряд ли. Но случай интересный. Он показывает, что стоит думать о том, что нужно вам самим и проекту, и принимать соответствующие решения. К выпуску я приложу [перевод поста с мотивацией на Хабре](https://habr.com/ru/articles/759826/).

Если вы пристально следили за Rome и надеялись получить настоящий тулчейн всё-в-одном, то у меня для вас есть не очень хорошая новость, а потом потенциально хорошая. Rome, похоже, всё. Эмануэль Стоппа (Emanuele Stoppa), бывший разработчик core-team Rome, [анонсировал разработку нового тулчейна Biome](https://biomejs.dev/blog/annoucing-biome). Если по порядку и коротко, Rome, несмотря на инвестиции, самоподдерживающимся бизнесом не стал. Команда не хотела бросать проект и делать форк, но создатель Rome Себастиан МакКензи (Sebastian McKenzie) не шёл на контакт, а у него были ключи от репозиториев и всего-всего. В итоге, чтобы не конфликтовать по поводу торговых знаков Rome, доменов и прочих атрибутов, был создан форк, который назвали Biome. Почти вся core-team Rome ушла работать над ним. Их цель — продолжение разработки тулчейна с миссией и в духе Rome. Посмотрим, что из этого получится. Больше подробностей в анонсе.

5 и 6 октября будет проходить [ViteConf 2023](https://viteconf.org/23/). Она бесплатная, а формат — полностью онлайн. Достаточно пройти по ссылке и зарегистрироваться. Спикеров почти 50, представлены все мажорные фреймворки, новые ребята (вроде Bun и Astro) и многие другие. Возможно, на ней вы найдёте для себя что-то интересное.

Google продолжает [ускорять](https://developer.chrome.com/blog/faster-chrome-releases-round2/) релизы Chrome. Начиная с версии 119 stable-релизы будут выходить на неделю быстрее. По старому графику она должна была выйти 7 ноября, а по новому выйдет 31-го октября.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
