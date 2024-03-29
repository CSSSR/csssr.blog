---
title: 'В этом выпуске: TSConf 2021, property-based тестирование, .NET 6 и Visual Studio 2022, продолжение гайда по Next.js, где следить за новыми фичами ECMAScript, как подступиться к контейнеризации, security-обновление PHP и основание PHP Foundation.'
soundcloudLink: 'https://soundcloud.com/csssr/tsconf-2021-property-based-testing-net-6-visual-studio-2022-konteynerizatsiya-php-foundationp'
date: '2021-11-26T00:00:00.000Z'
episodeNumber: 200
tag: 'news'
author: 'Ислам Виндижев'
---

Ноябрь подходит к концу, а значит пришло время напомнить вам о наших горячих вакансиях. Мы продолжаем искать [middle front-end разработчиков](https://csssr.com/ru-ru/jobs/middle-js-developer) и мобильных разработчиков под [Android](https://csssr.com/ru-ru/jobs/android-developer) и [iOS](https://csssr.com/ru-ru/jobs/ios-developer). Приходите!

<ParagraphWithImage imageName="manWithLaptop">
  ### Интересные публикации

Выпуск начнется с записей прошедшей онлайн [TSConf 2021](https://www.youtube.com/playlist?list=PL2z7rCjEG2kubUfEAHu-08-aK3Tyn9Zxe). На конференции было более 20 докладов по самым разным аспектам работы TypeScript как отдельно, так и в связке с другими технологиями. Обсудили и тонкости настройки tsconfig, и приватные методы, и усиление безопасности при помощи TypeScript, а также работу со связкой GraphQL + TS. В общем, докладов много, на плейлист стоит взглянуть, возможно, какая-то из рассматриваемых тем окажется полезной.
</ParagraphWithImage>

Дополнит предыдущий материал пост Дмитрия Павлютина [о перегрузке функций в TypeScript](https://dmitripavlutin.com/typescript-function-overloading/). Напомню, перегрузка функции — это когда можно объявить несколько функций с одним названием, но разными входными параметрами. В ряде случаев это очень полезная возможность, которой в JavaScript из коробки нет. Но иногда перегрузка вредна. Именно об этом и рассказывает Дмитрий. В заметке вы не найдете тонкостей компиляции этих функций, а только примеры применения и те самые кейсы, когда перегрузка может быть вредной или полезной.

Следующий материал — о тестировании, но с другим подходом, который может показаться задачей со звездочкой. Это статья Джеймса Синклера (James Sinclair) [о property-based testing](https://jrsinclair.com/articles/2021/how-to-get-started-with-property-based-testing-in-javascript-with-fast-check/). Попробую коротко объяснить: когда мы тестируем приложения автотестами, мы подаем на вход значение и проверяем соответствие конкретного выходного значения эталонному результату. В property-based подходе выходное значение сверяется не с каким-то значением, а с рядом свойств, которыми это значение должно обладать. Джеймс в своей статье рассказывает о подходе, случаях, когда он может быть особенно полезен, а также показывает примеры с использованием библиотеки fast-check.

В прошлом выпуске я рассказывал о статье Игоря Агапова, посвященной Next.js. Вышла вторая часть, в которой внимание уделяется [продвинутым возможностям](https://habr.com/ru/company/timeweb/blog/590157/) фреймворка. Игорь говорит о динамической маршрутизации, автоматической статической оптимизации, безопасности, кастомизации конфигурационного файла и разных элементов приложений. Также статья покрывает самые важные модули Next.js, такие как router, link, server и другие.

Промисы. Для многих начинающих это сложная в освоении тема, а для продолжающих — часто непростое место, в котором можно ошибиться. Равиду Перера (Ravidu Perera) в своей заметке собрал 5, по его мнению, наиболее распространенных [ошибок при работе с промисами](https://blog.bitsrc.io/5-common-mistakes-in-using-promises-bfcc4d62657f). Равиду рекомендует не использовать конструкции await и try/catch внутри промиса, не злоупотреблять коллбэками внутри цепочек промисов, а также не забывать использовать Promise.all(). Примеры и объяснение по каждому пункту читайте в оригинальной статье на Medium.

Уйдем немного в сторону от JavaScript и вспомним, что приложения где-то хостятся и часто неплохо уметь [готовить контейнеры](https://iximiuz.com/en/posts/container-learning-path/). Иван Величко в своем блоге рассказывает, в каком порядке подступиться к теме, чтобы нигде не запутаться и получить прочные, структурированные знания. По его опыту стоит начать с общих знаний о Linux-контейнерах, потом переходить к образам контейнеров, менеджерам и оркестраторам, а затем поинтересоваться контейнерами не на Linux. В статье огромное количество дополнительных материалов и базовые сведения по каждому пункту.

Я помню время, когда при слове «параллакс» некоторые люди вспоминали злодея из вселенной Marvel, а верстальщики в ужасе содрогались. Но время идет, технологии стремительно развиваются, и параллаксом на сайтах сегодня никого не удивишь. Появилось множество способов реализовать фичу просто и без боли, один из них — воспользоваться кастомными CSS-свойствами, также известными как CSS-переменные. Именно об этом статья Джея Томпкинса (Jhey Tompkins) на css-tricks. В ней он раскрывает суть подхода и поэтапно реализует [параллакс](https://css-tricks.com/parallax-powered-by-css-custom-properties/).

Ещё одна статья по CSS и тоже на css-tricks. Темани Афиф (Temani Afif) написал о том, как при помощи флексов и гридов [минимизировать количество медиа-запросов](https://css-tricks.com/responsive-layouts-fewer-media-queries/). В статье много примеров, Темани пошагово покрывает функциональность медиа-запросов, а потом и вовсе как бы эмулирует Container Queries. И это не всё, там же — ещё больше небольших трюков и полезных приемов.

Специально для любителей отслеживать новые веяния и фичи JavaScript был создан сервис [proposals.es](https://www.proposals.es/) — сборник фич-кандадитов на попадание в новый стандарт языка. Они разделены на стадии, за ними удобно следить, и они все со ссылками, по которым можно подробнее почитать о фиче в репозитории. Также на сайте есть и другие разделы: справка по стадиям, раздел с чемпионами фичи и со всеми стандартами, которые были приняты ранее. Очень удобная справочная штука.

Завершат рубрику 2 подборки. Первая — это различные [терминалы и консольные инструменты](https://www.smashingmagazine.com/2021/11/powerful-terminal-commandline-tools-modern-web-development/). Меня, честно говоря, подборка не впечатлила, но глянуть стоит, возможно, там будет что-то полезное для вас. Вторая подборка — [коллекция](https://reconshell.com/awesome-javascript/) из большого количества библиотек, инструментов, фреймворков и других проектов для работы с JavaScript-проектами. Здесь и бандлеры, и фреймворки для тестирования, и шаблонизаторы, и просто JS-фреймворки, в общем, куча всего. Стоит посмотреть.

<ParagraphWithImage imageName="laptopNews" >
  ### Новости релизов

Сегодня рубрика начинается довольно неожиданно. Потому что откроет её релиз [.NET 6](https://devblogs.microsoft.com/dotnet/announcing-net-6/). Новый мажорный релиз платформы разработки назвали самым быстрым за всю историю. Оптимизации и ускорение коснулись практически всех компонентов и языков, входящих в состав .NET, особенно поработали над самым «дорогим» — операциями ввода-вывода. Вышли C#10 и F#6, ASP.NET теперь может работать с HTTP/3. Продолжилось расширение набора составляющих платформы, последними стали WebAssembly и сервисы с искусственным интеллектом. В общем, релиз огромный и крутой, дополнительно отмечу, что это LTS-релиз, .NET 6 будет поддерживаться три года.
</ParagraphWithImage>

Следующая новость тоже о Microsoft, и на этот раз в центре внимания — Visual Studio. Только не путайте с VS Code. Релиз [Visual Studio 2022](https://visualstudio.microsoft.com/launch/) состоялся 9 ноября. IDE обзавелась 64-битной версией. Что же в этом такого? Теперь она сможет использовать больше оперативной памяти. Для кого-то это будет означать избавление от назойливых ошибок о том, что памяти не хватает, а для кого-то, возможно, еще большие тормоза. Шучу. Новая версия поддерживает все нововведения шестой версии .NET и также подверглась ряду оптимизаций. В общем, обновляться однозначно стоит. Напомню, что вместе с обычной версией одновременно обновилась и бесплатная Visual Studio Community.

Вышел [Electron 16.0.0](https://www.electronjs.org/blog/electron-16-0). Chromium был обновлен до версии 96, V8 — до 9.6, а Node.js — до 16.9.1. Был добавлен WebHID API. Есть и одно небольшое ломающее изменение, также отмечу, что была прекращена поддержка 12 версии фреймворка.

Команда PHP представила security-обновление. Новая версия за номером [8.0.13](https://www.php.net/ChangeLog-8.php#8.0.13) исправляет одну уязвимость и несколько багов. Разработчики языка настоятельно рекомендуют побыстрее обновиться.

Также на этой неделе отмечу релизы [nginx unit 1.26.0](https://mailman.nginx.org/pipermail/unit/2021-November/000288.html), браузера [Tor 11.0.1](https://blog.torproject.org/new-release-tor-browser-1101/) и корректирующий релиз [VirtualBox 6.1.30](https://www.mail-archive.com/vbox-announce@virtualbox.org/msg00215.html).

<ParagraphWithImage imageName="laptopNews" >
  ### Другие новости

Первая новость — из мира PHP: будет создан [фонд PHP Foundation](https://www.php.net/archive/2021.php#2021-11-22-1). Как вы можете догадываться, он будет направлен на финансирование развития языка и его экосистемы. Это произошло из-за того, что один из ключевых разработчиков — Никита Попов — переходит из JetBrains в другую компанию и будет уделять PHP гораздо меньше времени. На сайте JetBrains есть [подробный пост](https://blog.jetbrains.com/phpstorm/2021/11/the-php-foundation/) на эту тему. Для языка это отличные новости, потому что ряд компаний уже заявили о своем участии в финансировании. Те же JetBrains готовы финансировать его в размере 100 тысяч долларов в год. Также фонд будут спонсировать известные PHP-фреймворки и другие компании. Возможно, совсем скоро про PHP перестанут шутить всякие разные шуточки.
</ParagraphWithImage>

Были опубликованы результаты отчета GitHub за 2021 «[The 2021 State of the Octoverse](https://github.blog/2021-11-16-the-2021-state-of-the-octoverse/)». За год был создан 61 миллион репозиториев, а количество пользователей увеличилось на 15 миллионов. Самым популярным языком на платформе по-прежнему остается JavaScript, на втором месте — Python, на третьем — Java. Больше подробностей — в самом отчете.

Давайте на минутку отвлечемся от веба и поговорим о суперкомпьютерах! Был опубликован [ежегодный рейтинг суперкомпьютеров мира](https://www.top500.org/news/still-waiting-exascale-japans-fugaku-outperforms-all-competition-once-again/). На первом месте, как и в прошлом году, японская система Fugaku. Ее производительность составляет 442 петафлопса, а это, на минуточку, 442 квадриллиона операций в секунду. В системе более семи с половиной миллионов ядер, и она в 3 раза производительнее кластера на втором месте. Сыграли бы на ней в новый Far Cry? Второе и третье места занимают кластер IBM Summit и Sierra Ливерморской национальной лаборатории им. Э. Лоуренса. В общем, интересная и крутая тема, поинтересуйтесь просто для расширения кругозора.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
