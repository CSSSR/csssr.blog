---
title: 'В этом выпуске восполняем новогодний пробел.'
soundcloudLink: 'https://soundcloud.com/csssr/novogodnie-probely'
date: '2021-01-15T00:00:00.000Z'
episodeNumber: 141
tag: 'news'
author: 'Ислам Виндижев'
---

<Note>
  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)
</Note>

В этом выпуске: восполняем новогодний пробел.

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

2021 начинается с [Front-End Performance Checklist 2021](https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/) от компании LogRocket. Чек-лист обширный и включает в себя планирование метрик, постановку целей и выбор окружения. Также есть пункты по оптимизации ассетов, билдов и доставки по сети. Отдельно уделяется внимание сетевым протоколам и тестированию. Набор пунктов вполне стандартный, но каждый пункт обновлен под современные реалии.
</ParagraphWithImage>

Продолжается [серия от Тинькофф о распиле монолита](https://habr.com/ru/company/tinkoff/blog/534522/). В четвёртой части речь пойдёт о том, как решали проблему дублирования зависимостей в бандлах всех микроприложений. Рассматривалось несколько подходов: монорепозитории с упаковкой приложений как пакетов, Webpack Externals и Wepback Module Federation. Ничего не подошло, и исследования закончились написанием webpack-плагина shared-library-webpack-plugin. В статье — подробный разбор исследования и самописного решения, а также деморепозиторий.

Пока мы отдыхали, Ахмад Шадид (Ahmad Shadeed) написал статью [о создании компонентов в реальной жизни](https://ishadeed.com/article/building-real-life-components/). Ахмад реализует элемент списка диалогов из Facebook Messenger. Делает он это для того, чтобы показать, как всё непросто и как много факторов нужно учесть при проектировании и разработке даже такого, казалось бы, маленького компонента. В статье вас ждут разные состояния аватаров и статусов сообщений, размещение контента в компоненте, лучший способ стилизации и даже кейс с RTL-текстом. Осторожно, статья довольно длинная, но интересная.

Нолан Лоусон (Nolan Lawson) в своем блоге написал заметку [о стилизации веб-компонентов](https://nolanlawson.com/2021/01/03/options-for-styling-web-components/). Автор рассматривает 4 подхода: CSS-переменные, классы и shadow parts. Я сказал 4? Четвертым автор называет escape hatch, и это точно не тот, который вы захотите использовать. Он заключается в том, что к shadowRoot просто присоединяется тег <style></style> с любыми стилями внутри. Нолан не выбирает лучший из них, а просто приводит плюсы и минусы.

На Mozilla Hacks вышла статья, посвященная кросс-браузерному тестированию веб-приложений. Если конкретно, она посвящена обзору текущей ситуации и рассказу о том, что Mozilla делает, чтобы тестирование стало лучше и удобнее в Firefox. [В первой части](https://hacks.mozilla.org/2020/12/cross-browser-testing-part-1-web-app-testing-today/) — обзор стандарта WebDriver, DevTools Protocols. [Во второй](https://hacks.mozilla.org/2021/01/improving-cross-browser-testing-part-2-new-automation-features-in-firefox-nightly/) рассказывается о новых фичах в Firefox Nightly для тестирования. Появилась частичная поддержка Chrome DevTools Protocol, благодаря этому можно будет использовать Puppeteer и Selenium 4, а также удаленную отладку.

На CSS-Tricks Адам Ракис (Adam Rackis) опубликовал небольшую заметку о том, [как подружить Svelte и TypeScript](https://css-tricks.com/integrating-typescript-with-svelte/). Гайд базовый и пригодится, если вы никогда этого не делали. Адам проводит читателя от базовой установки до нескольких распространённых кейсов использования TypeScript.

Ноам Розенталь (Noam Rosenthal) на Smashing Magazine рассуждает о том, [должны ли веб-приложения использовать аппаратные возможности систем](https://www.smashingmagazine.com/2021/01/web-expose-hardware-capabilities/). Напомню, существует небольшой «баттл»: Chrome топит за открытые API, которые дают приложениям пользоваться железом, а Apple (и немного Mozilla) — против, из соображений безопасности. Статья интересная, в ней автор взвешивает аргументы участников спора, анализирует противоречия между безопасностью и развитием веба как платформы и предлагает свое решение.

Катя Павленко написала заметку [о тестах и pre-commit хуках](https://cakeinpanic.medium.com/stop-running-tests-on-precommit-hook-665be07b220d) в своем блоге на Medium. Сразу скажу — она против такого подхода. Огромные скрипты на pre-commit хуках снижают скорость разработки, иногда просто бесполезны и, самое неприятное, вынуждают разработчиков делать --no-verify, стреляя себе в ногу. Конечно же, она делится возможным решением — перепоручить прогон скриптов CI/CD-машине — и отвечает на возможные вопросы по этому поводу.

В заключение рубрики — статья от разработчика GitHub Деррика Столи (Derrick Stolee) [о коммитах](https://github.blog/2020-12-17-commits-are-snapshots-not-diffs/). В статье Деррик рассказывает о том, что коммиты — это не диффы, а снапшоты. Автор говорит, что очень важно понимать разницу, и если её понять, то станут кристально понятны такие запутанные вещи, как git rebase и git cherry-pick. В статье всё подробно объясняется на конкретном примере, которому можно пошагово следовать.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

Как и было анонсировано до Нового года, [команда Node.js выпустила серию security фиксов](https://nodejs.org/en/blog/vulnerability/january-2021-security-releases/). В этот раз были исправлены уязвимость к HTTP Request Smuggling и потенциальные эксплуатации уязвимостей TLS и OpenSSL. Обновленные версии: 10.23.1, 12.20.1, 14.15.4 и 15.5.1. Не забудьте обновиться.
</ParagraphWithImage>

Самые популярные браузеры Chrome и Firefox не порадовали нас огромными релизами. Вышло обновление текущей версии [Chrome 87](https://chromereleases.googleblog.com/2021/01/stable-channel-update-for-desktop.html) с устранением 16 уязвимостей, критических среди них не было. Firefox отличился корректирующим выпуском [84.0.2](https://www.mozilla.org/en-US/firefox/84.0.2/releasenotes/) с исправлением одной критической уязвимости.

Доступно [Safari Technology Preview 118](https://webkit.org/blog/11439/release-notes-for-safari-technology-preview-118/). В этой версии: улучшения веб-инспектора, баг-фиксы CSS, поддержка at в JavaScript.

Сразу после новогодних праздников команда TypeScript объявила о выходе [бета-версии 4.2](https://devblogs.microsoft.com/typescript/announcing-typescript-4-2-beta/). Что нового: шаблонные выражения теперь имеют шаблонные литеральные типы, более строгая проверка для in и новые флаги компилятора. Модификатор abstract теперь можно применять для объявлений конструкторов, также представлены breaking changes. Это не полный список изменений. Как всегда, ждём RC и полноценный релиз. Подробнее о них мы расскажем в следующих выпусках.

Был представлен релиз [Wasmer 1.0](https://medium.com/wasmer/wasmer-1-0-3f86ca18c043). Это безопасный и встраиваемый рантайм для WebAssembly. Авторы говорят, что в этом релизе значительно ускорили компиляцию и выполнение кода, проработали обработку ошибок и дебаггинг, а также добавили мощный API. Я про этот проект раньше не слышал и не уверен, что успею изучить. Но если вы интересуетесь WebAssembly и уже встраиваете в приложения, то вполне можно и попробовать.

Также в этом выпуске отмечу релизы [Laravel 8.22](https://laravel-news.com/laravel-8-22-0), [CakePHP 4.2.2](https://github.com/cakephp/cakephp/releases/tag/4.2.2) и [ESLint 7.17.0](https://eslint.org/blog/2021/01/eslint-v7.17.0-released).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

Помните небольшую заварушку с санкциями в адрес разработчиков из Ирана, Сирии и Крыма со стороны GitHub? Так вот, с легкой руки Нэта Фридмана — CEO GitHub — [аккаунты иранских разработчиков были разблокированы](https://github.blog/2021-01-05-advancing-developer-freedom-github-is-fully-available-in-iran/). Всё началось с того, что один из разработчиков немецкой компании воспользовался своим GitHub из Ирана. Из-за этого заблокировали аккаунт всей компании, и разработка была парализована на 5 дней. Нэт подключился к вопросу, произошли молниеносные переговоры с правительством США, и была получена лицензия на работу сервиса в Иране. Такие дела. Возможно, это простимулирует снятие ограничений и в других регионах мира.
</ParagraphWithImage>

Подведены итоги [The State of JS 2020](https://2020.stateofjs.com/ru-RU/). На самом деле, без особых сюрпризов. React, Vue и Angular — всё ещё топ-3. Svelte набирает популярность. GraphQL — самый популярный для данных. Next.js и Express — самые крутые бэкенд-фреймворки. Redux продолжает сдавать позиции. Король среди всех конкурентов уже 4-ый год подряд — TypeScript.

Компания Adobe объявила о [полном прекращении поддержки Flash Player](https://www.adobe.com/products/flashplayer/end-of-life.html). Прощай олимпийский мишка. Если серьёзно, с 31 декабря была официально прекращена поддержка, а с 12 января Flash Player перестал исполнять Flash. Компания также рекомендует пользователям браузеров удалить Flash Player из соображений безопасности.

Мы уже говорили в этом выпуске о небольшом релизе ESLint. Это ещё не всё, их можно и поздравить. Google Chrome по рекомендации Эдди Османи стал [золотым спонсором ESLint](https://eslint.org/blog/2021/01/chrome-gold-sponsor-eslint). Это делает Chrome одним из самых крупных доноров ESLint с ежемесячным взносом 1000$. Напомню, что суммарно ESLint спонсируется ежемесячными пожертвованиями порядка 11000$.

Так называемый [«русский след» в продуктах JetBrains](https://www.nytimes.com/2021/01/06/us/politics/russia-cyber-hack.html) ищет ФБР. Вы могли уже слышать об этом, речь идет конкретно о CI/CD-решении TeamCity. Один из клиентов Джетов — компания SolarWinds. Через сетевой софт этой компании был получен незаконный доступ к правительственным и частным сетям. Утверждается, что TeamCity мог быть скомпрометирован, и могли быть имплантированы бэкдоры в системы ряда клиентов JetBrains, в том числе и SolarWinds. В JetBrains заявили, что об этом ничего не знают, а правительство США выпустило заявление, в котором утверждает, что, скорее всего, во взломе виноваты российские хакеры. В этом же заявлении нет упоминания JetBrains, и никаких заявлений в адрес компании не было. Надеюсь, и не будет, и это не положит начало охоте на ведьм.

Сколько анекдотов вы слышали про пару логин/пароль «admin/admin»? Теперь это быль. В [открытый доступ](https://www.zdnet.com/article/nissan-source-code-leaked-online-after-git-repo-misconfiguration/) попали исходники мобильного приложения Nissan North America и большое количество других данных. Это произошло потому, что на git-сервер подразделения компании Nissan можно было попасть по логину и паролю admin. Брешь, естественно, молниеносно закрыли. Конечно же, началось разбирательство и поиск виновных.

<Note>
  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
</Note>