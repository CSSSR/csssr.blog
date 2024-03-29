---
title: 'В этом выпуске: Chrome 97 и Firefox 96, пора ли переходить на Vite и pnpm, чего ждать от CSS в 2022, немного обучающих материалов, итоги года по версии Rising Stars и немного о colors.js и теории заговора.'
soundcloudLink: 'https://soundcloud.com/csssr/chrome-97-firefox-96-pora-li-perekhodit-na-vite-i-pnpm-css-v-2022-rising-stars-2021'
date: '2022-01-17T00:00:00.000Z'
episodeNumber: 205
tag: 'news'
author: 'Ислам Виндижев'
---

<ParagraphWithImage imageName="manWithLaptop">
  ### Интересные публикации

Саша Беспоясов в своем блоге поделился новым [конспектом](https://bespoyasov.ru/blog/domain-modelling-made-functional/) прочитанной книги. Как и всегда, читает он что-то интересное и полезное. На этот раз это книга Скотта Влашина «Доменное моделирование в функциональном стиле». В общем и целом книга о том, как моделировать домены систем с использованием типов и функций. Книга разделена на три части: о самих доменах, моделировании и реализации. Саша отмечает, что книга написана с упором на практику, и советует прочесть ее самостоятельно, потому что примеры в книге написаны на F#, и некоторые из них он перевел на TypeScript для своих читателей, но не все. В общем, приобщайтесь и просвещайтесь, а Саше спасибо за конспект.
</ParagraphWithImage>

Брамус Ван Даме (Bramus Van Damme) в своем блоге поделился персональным взглядом на то, [чего стоит ждать от CSS в 2022 году](https://www.bram.us/2021/12/27/css-in-2022/). Он предполагает, что в 2022 все браузеры в тот или иной момент начнут поддерживать Container Queries, каскадные слои, цветовые функции, единицы измерения от вьюпорта, псевдоселектор :has() и еще некоторые фичи. Также он упоминает фичи, которые тоже важны, но пока что не являются кандидатами на скорую поддержку. Статья представляет из себя неплохой обзор передней кромки современного CSS, есть и небольшие примеры, так что стоит ознакомиться.

Валентин Семирульник выступил на Подлодке с докладом [о пакетных менеджерах](https://www.youtube.com/watch?v=RAFFHpjrwAs). Здесь, как и во всем фронтенде, своеобразный зоопарк, но что-то меняется. Есть ряд причин, по которым Yarn и npm уже не так хороши, и кое-что они не умеют, а именно — эффективно использовать память. У них появляется серьезный конкурент в лице pnpm, на который Валентин и предлагает взглянуть в своем докладе. И не зря, обязательно присмотритесь.

Еще один набирающий популярность инструмент — Vite. Это фронтенд-тул, который бандлит при помощи Rollup, работает быстро, чисто и шелковисто. Во всяком случае, так говорят. Он поддерживает из коробки TS, JSX и другие технологии, да и вообще позиционирует себя как фронтенд-тул следующего поколения. Если вы задумались о том, чтобы попробовать его хотя бы на пет-проекте, то статья Адама Ракиса (Adam Rackis) как раз для вас. В ней он описывает [основы работы с Vite и его основные фичи](https://css-tricks.com/adding-vite-to-your-existing-web-app/). Хорошо подходит для первого знакомства, если немного лениво читать документацию.

Сейчас очень много говорят о Rust и том, что это будущее JS-тулинга и смысл Вселенной. Но так ли это на самом деле? Вячеслав Егоров в своем блоге разобрал этот вопрос и посмотрел, действительно ли нужны [Rust и WASM для невероятного ускорения JavaScript-проектов](https://mrale.ph/blog/2018/02/03/maybe-you-dont-need-rust-to-speed-up-your-js.html) [[RU](https://habr.com/ru/post/350018/)]. Он скачал библиотеку source-map и попробовал оптимизировать ее JS-версию для достижения производительности, сопоставимой с Rust-версией. В статье он задокументировал и продемонстрировал ряд оптимизаций, которые в конечном итоге помогают добиться значительного ускорения. Статья для вдумчивого чтения и для тех, кого интересуют профилирование, оптимизации и языки программирования. Очень рекомендую.

Каждый год какие-то технологии приходят, какие-то уходят. Сейчас мы поговорим о тех, которые уже ушли или совсем скоро могут уйти насовсем.

Одна из когда-то самых популярных библиотек для тестирования компонентов Enzyme, кажется, покидает пантеон надежных инструментов. Библиотека плохо поддерживается и морально устарела, пора переходить на React Testing Library. Именно об этом пишет мейнтейнер enzyme-adapter-react-17 Войчех Май (Wojciech Maj). Он делится историей того, как родился адаптер (спойлер: потому что Enzyme не поддерживал API React 17), и рассказывает, почему, по его мнению, [Enzyme пора бросать](https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl).

AngularJS, или Angular 1 — помните такой? Так вот, 31 декабря официально была полностью [прекращена его поддержка](https://blog.angular.io/discontinued-long-term-support-for-angularjs-cc066b82e65a). Статья об этом появилась в блоге Angular, команда фреймворка настоятельно рекомендует обновиться до нового Angular. CDN с AngularJS останется онлайн, и, напомню, поддержка старого фреймворка [была передана в руки частного подрядчика](https://blog.angular.io/finding-a-path-forward-with-angularjs-7e186fdd4429) и доработки, в принципе, возможны за деньги. Но зачем?

Следующие три материала — обучающие.

Доктор Аксель Раушмайер обновил свою книгу [«JavaScript для нетерпеливых программистов»](https://exploringjs.com/impatient-js/). В ней он затрагивает все основные аспекты языка и его применения, приводит примеры и рассказывает о его истории. В HTML-формате книга доступна бесплатно, а новая редакция включает в себя фичи ES2022.

Preact — это библиотека, которая позиционируется как легковесная альтернатива React со знакомым API и всеми современными плюшками. Команда проекта составила интерактивный туториал по библиотеке, который называется [«Изучи Preact за 10 минут»](https://preactjs.com/tutorial/). Конечно, как и во всём, за 10 минут вы ничему не научитесь, но получить представление об API и библиотеке сможете.

Наконец-то завершен [курс по адаптивному дизайну](https://web.dev/learn/design/) на web.dev. Он покрывает довольно много тем: от медиавыражений и типографики до шаблонов пользовательских интерфейсов и доступности.

Завершат рубрику две статьи со SmashingMagazine. Первая мне особенно понравилась, потому что я люблю отвлеченные от веба статьи, которые немного о будущем. Это материал [об интерфейсах автомобилей](https://www.smashingmagazine.com/2021/12/designing-human-machine-interfaces-future-vehicles/): как они работают, зачем и почему они есть — отличные вопросы. Во времена, когда JS уже летает в космос, неплохо присмотреться и к более «физическим» областям реального мира. Вторая статья немного связана с первой и посвящена UX — это сборник самых разнообразных ресурсов [о дизайне пользовательского опыта](https://www.smashingmagazine.com/2021/12/tools-tips-resources-to-build-better-user-experiences/) для нетерпеливых.

<ParagraphWithImage imageName="laptopNews" >
  ### Новости релизов

Пока мы отдыхали, вышел [Chrome 97](https://chromereleases.googleblog.com/2022/01/stable-channel-update-for-desktop.html). По умолчанию в новой версии работает WebTransport API, который обеспечивает обмен данными в сетях с высокими задержками. Теперь поддерживается передача данных без гарантии доставки пакетов с Datagram API и с гарантиями со Streams API. Дополнительно стоит отметить, что WebTransport API работает только с HTTP/3. JavaScript поддерживает новые методы для массивов findLast(), findLastIndex(), а также экспериментальный метод HTMLScriptElement.supports() для определения типов скриптов, поддерживаемых браузером. Chrome DevTools без обновления тоже не обошелся. Появилась новая вкладка «Recorder»: она записывает и воспроизводит действия пользователя на странице. Был расширен список эмулируемых устройств, а на вкладке «Elements» появилось автодополнение при редактировании HTML. Еще один приятный бонус: настройки DevTools теперь можно синхронизировать между разными устройствами. Больше подробностей — в обзорах [Пита Лепейджа](https://developer.chrome.com/blog/new-in-chrome-97/) и [Джеселин Ин](https://developer.chrome.com/ru/blog/new-in-devtools-97/).
</ParagraphWithImage>

Не отстает и огненная лиса — вышел [Firefox 96](https://www.mozilla.org/en-US/firefox/96.0/releasenotes/). В новой версии продолжили работать над безопасностью и обновили поведение cookies для защиты от CSRF-атак. Добавили поддержку CSS-свойства color-scheme: как вы можете догадаться по названию, оно помогает быстро переключать цветовую схему в CSS. Появился новый экспериментальный API Web Locks API для управления доступом к общим ресурсам между разными сервис-воркерами или вкладками приложения.

Вышли [security-релизы Node.js за январь](https://nodejs.org/en/blog/vulnerability/jan-2022-security-releases/). Обновление коснулось версий 12, 14, 16 и 17. Были исправлены две уязвимости средней степени опасности и одна — низкой.

Также в этом выпуске отмечу релизы [ChromeOS 97](https://chromereleases.googleblog.com/2022/01/stable-channel-update-for-chrome-os.html), [Debian 11.2](https://www.debian.org/News/2021/20211218), ядра [Linux 5.16](https://lkml.org/lkml/2022/1/9/294) и веб-сервера [nginx 1.21.5](http://nginx.org/en/CHANGES).

<ParagraphWithImage imageName="laptopNews" >
  ### Другие новости

На ресурсе Rising Stars, посвященном JS-проектам и продуктам, появился краткий обзор итогов года по [росту популярности разных библиотек и фреймворков](https://risingstars.js.org/2021/en). Эти итоги ориентируются в первую очередь на тренды GitHub, имейте это в виду, просматривая статистику. Тремя самыми популярными проектами в 2021 году по версии Rising Star были Vite, Next.js и React. Отмечу фреймворк для десктопной разработки Tauri с четвертого места, который вполне может потеснить Electron. Продолжают набирать популярность такие инструменты, как Playwright и Cypress, и фреймворк Remix пытается выйти на сцену. Интересно, что Deno упоминается только в заключении и достаточно вскользь. В остальном сюрпризов в рейтинге вы не найдете, но полюбопытствуйте — всегда полезно посмотреть на новые технологии, пусть пока и не особо популярные.
</ParagraphWithImage>

Еще немного об итогах 2021 года. Опрос The State of CSS уже завершился, и мы обсуждали его результаты, а сейчас открыт опрос [The State of JS](https://stateofjs.com/), посвященный (внезапно) состоянию экосистемы JavaScript. Приглашаю принять в нём участие, а краткую выжимку о результатах вы сможете найти в следующих выпусках новостей.

Мы уже сталкивались с недовольством в open source среде из-за того, что крупные компании бесплатно используют результаты труда авторов. Естественно, и в своих коммерческих продуктах. Марак Сквайрс (Marak Squires) — автор библиотек color.js и faker.js — ни много ни мало [саботировал](https://www.reddit.com/r/programming/comments/rz5rul/marak_creator_of_fakerjs_who_recently_deleted_the/) работу огромного количества проектов. Для справки, colors.js есть в зависимостях у 19 тысяч проектов, а faker.js — у 2,5 тысяч. В color.js был добавлен бесконечный цикл, а код faker.js был просто-напросто удален из репозитория. В итоге npm откатила проблемные версии библиотек, а GitHub заблокировала доступ Марака к его же собственным репозиториям. Между прочим, действия GitHub довольно спорные, потому что заблокировать доступ пользователя к собственным репозиториям — история скверная, по сути он не нарушил каких-то правил. Акцию связывают не только с желанием обратить внимание больших компаний на проблему ценности труда авторов open source проектов, но и с теорией заговора о смерти интернет-активиста Аарона Шварца. Посмотрим, чем закончится эта история.

В конце выпуска новость для ностальгирующих. Вы наверняка вспомните Far Manager. Так вот, оказалось, что существует [его порт на Linux](https://github.com/elfmz/far2l), который развивается аж с 2016 года. 12 января он перешел в стадию бета-тестирования, а работать будет на Linux, BSD и macOS. Так что ждите, возможно, ваш любимый файловый менеджер скоро появится на новых рабочих системах.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
