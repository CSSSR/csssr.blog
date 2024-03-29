---
title: 'В этом выпуске: уязвимость Log4Shell, итоги The State of CSS 2021, релизы Ruby on Rails 7 и Create React App 5, путешествие к центру рендеринга и дженерики в Go.'
soundcloudLink: 'https://soundcloud.com/csssr/uyazvimost-log4shell-the-state-of-css-2021-ruby-on-rails-7-tonkosti-renderinga-dzheneriki-v-go'
date: '2021-12-24T00:00:00.000Z'
episodeNumber: 203
tag: 'news'
author: 'Ислам Виндижев'
---

<ParagraphWithImage imageName="manWithLaptop">
  ### Интересные публикации

В [путешествие к центру рендеринга](https://www.youtube.com/watch?v=tbDxm1hiEI4) нас приглашает Сергей Ufocoder Иванов. В своем докладе на CodeFest он рассматривает внутреннее устройство браузера и разбирает, как в инструментах разработчика можно анализировать процесс рендеринга, что такое пайплайн рендеринга и что оказывает на него негативный эффект. Естественно, конечная цель — научиться с этими проблемами бороться и делать рендеринг быстрым и шелковистым. Рекомендую смотреть.
</ParagraphWithImage>

Патрик Броссе (Patrick Brosset) в блоге Microsoft Edge рассказал [о дебаггинге утечек памяти](https://blogs.windows.com/msedgedev/2021/12/09/debug-memory-leaks-detached-elements-tool-devtools/), которые возникают из-за отчужденных элементов, при помощи специального инструмента в DevTools Microsoft Edge. Под отчужденными элементами понимаются DOM-элементы, которые хранятся в JS-объектах без их дальнейшего переиспользования или удаления. Именно такие утечки и помогает находить новый тул в Edge.

Сурма (Surma) рассказал про [новый API для глубокого клонирования JavaScript-объектов](https://web.dev/structured-clone/). Раньше эту задачу решали JSON-хаком. Забавно, но хак был настолько популярным, что браузерные вендоры добавили оптимизации специально для него. Этот способ подходил не для каждого случая, поэтому появился новый API и метод structuredClone, позволяющий клонировать более сложные объекты без хаков. Метод пока поддерживается в экспериментальных сборках браузеров, но будет включен в основные довольно скоро.

Нужно ли коммитить в репозитории папку node_modules и её содержимое? С большой вероятностью вы воскликнете: «Да кто так вообще делает?! Конечно нет!». Но Джек Франклин (Jack Franklin) делится альтернативным опытом. Он уже 2 года работает в команде Chrome DevTools, где [зависимости заливают в репозиторий](https://www.jackfranklin.co.uk/blog/check-in-your-node-dependencies/). Среди плюсов: идентичность версий зависимостей, ускорение хуков и интеграций пропуском шага установки модулей, а также большая осмотрительность при добавлении зависимостей. Довольно интересно и может очень даже пригодиться на некоторых проектах.

Один из важнейших видов тестирования — нагрузочное тестирование. Конечно же, для него есть и свои инструменты, например, [JMeter](https://blog.scottlogic.com/2021/12/09/Performance-Testing-with-JMeter.html). Именно о нем и идет речь в статье Бенедикта Куинна (Benedict Quinn). Статья базовая и отлично подойдет, чтобы начать знакомство с нагрузочным тестированием. Бенедикт показывает интерфейс инструмента и рассказывает, как построить базовый план тестирования и сгенерировать отчет.

Адам Аргайл (Adam Argyle) продолжает реализацию разных компонентов, которые мы можем увидеть в разнообразных веб-приложениях, а иногда реализуем сами. На очереди — [компонент коротких уведомлений для пользователей](https://web.dev/building-a-toast-component/), паттерн обратной связи интерфейса на ввод пользователя или другие действия. Как и в прошлых статьях серии, Адам пошагово реализует компонент, учитывает доступность и призывает других попробовать и поделиться своей версией компонента. В статье есть и видео-версия.

Ещё один материал с web.dev. Помните такую инициативу, как Compat 2021? Если нет, я напомню: крупнейшие компании и браузерные вендоры решили улучшить 5 фич, которые по результатам разных опросов оказались самыми важными. В их числе: Flexbox, Grid, position: sticky, aspect-ratio и CSS-трансформации. Результатами [года работы](https://web.dev/compat2021-holiday-update/) команда поделилась в блоге web.dev. Если коротко, поддержка фич во всех браузерах по результатам тестов превышает 90%, и это очень хороший результат. Больше подробностей — в оригинальной статье.

Владимир Гайдадей на Хабре написал статью [об обработке браузером прикосновений к экрану](https://habr.com/ru/post/592317/). После короткого ввода в терминологию он разбирается в работе событий прикосновения к дисплею и рассказывает о touchstart, touchend, touchmove, touchcancel. В статье вы также найдете ссылку на репозиторий с демоприложением.

Новый Год уже совсем близко, а значит, пора обзаводиться новогодними атрибутами! Предлагаю [вырезать снежинки](https://habr.com/ru/post/592659/), но только по-программистски, с Денисом Пешехоновым. В своей статье на Хабре он погружает читателей в теорию вырезания снежинок и делится своей реализацией на TypeScript и Vue. В итоге получается приложение, которое выдает PDF со схемой для вырезания готовой снежинки.

Завершат рубрику полезные сборники. Первый — [сборник-шпаргалка по TypeScript в React](https://blog.bitsrc.io/react-with-typescript-cheatsheet-9dd891dc5bfe) Нэйтана Себастьяна (Nathan Sebhastian), в котором вы найдете примеры типизации от пропсов до хуков. Второй сборник — коллекция от HTMLHell, которые раньше публиковали антипаттерны, а теперь стали публиковать хорошие практики в разделе [HTMLHeaven](https://www.htmhell.dev/tips/).

<ParagraphWithImage imageName="laptopNews" >
  ### Новости релизов

Релиз [Ruby on Rails 7](https://rubyonrails.org/2021/12/15/Rails-7-fulfilling-a-vision) состоялся. Обновление большое, многие скажут, что это революция, но кажется, спираль истории снова совершила оборот. О чем я? С фронтендом можно работать без сборщиков и Node.js, можно разрабатывать приложения без SPA-подхода с помощью Hotwire и современных технологий, например, ES-модулей и HTTP/2. Что еще: к базам данных можно направлять несколько параллельных запросов и инструменты для логирования этих запросов, шифрованные поля баз данных и управление кешированием. Дополнительно отмечу, что минимальная версия Ruby теперь 2.7. Кстати, ребята обновили и сайт фреймворка.
</ParagraphWithImage>

Вышло обновление [Safari 15.2](https://developer.apple.com/documentation/safari-release-notes/safari-15_2-release-notes). В новой версии добавлена поддержка File Access API, был увеличен объем памяти для WebAssembly — аж до 4Гб, и была оптимизирована обработка исключений. Кроме того, добавили поддержку заголовков Cross-Origin-Opener-Policy и Cross-Origin-Embedder-Policy и цветового пространства P3 для canvas.

Ещё немного о браузерах. [Chrome 96](https://chromereleases.googleblog.com/2021/12/stable-channel-update-for-desktop_13.html) отличился патчем с исправлением уязвимости нулевого дня, а [Firefox 95](https://www.mozilla.org/en-US/firefox/95.0.1/releasenotes/) — небольшим багфикс-релизом.

Вышла пятая версия, наверное, самого известного шаблона-стартера для React-приложений — [Create React App](https://github.com/facebook/create-react-app/releases/tag/v5.0.0). Теперь шаблон не поддерживает Node.js 10 и 12, лучше работает с менеджерами пакетов и получил обновленные версии популярных зависимостей. Он работает с Webpack 5, Jest 27, PostCSS 8 и ESLint 8.

Также в этом выпуске отмечу релизы LTS-ветки [Node.js 12.22.8](https://nodejs.org/en/blog/release/v12.22.8/) и фреймворка [Laravel 8.76](https://laravel-news.com/laravel-8-76-0).

<ParagraphWithImage imageName="laptopNews" >
  ### Другие новости

Были подведены результаты опроса [The State of CSS 2021](https://2021.stateofcss.com/ru-RU/). Гриды и CSS-переменные укрепили позиции, ими пользуется 80% опрошенных. Самой ожидаемой CSS-фичей года стала Container Queries. CSS-фреймворками становится недовольно всё большее количество людей, хотя количество пользователей продолжает расти. Больше всего довольны Tailwind CSS, который так часто хейтят. Кстати, о Tailwind CSS теперь знают 94% пользователей против 34% в 2019 году, известнее него только Bootstrap со 100% осведомленности. Судя по опросу, разработчики в первую очередь выбирают инструмент за хорошую документацию, DX и UX и в самую последнюю очередь — по хайповости, не может не радовать. Отдельно хочу отметить PostCSS, получивший награду за самый высокий рейтинг удовлетворенности, с этим можно поздравить Андрея Ситника и всех мейнтейнеров. Кстати, об итогах года: в подкасте [Callback Hell](https://www.youtube.com/watch?v=AK5rXJ9fMmo) мы как раз их пообсуждали.
</ParagraphWithImage>

Теперь об уязвимости, которая затронула половину интернета. Ну ладно, это слегка утрированно, но задело огромное количество серверов, библиотек и сервисов. Уязвимость получила название Log4Shell, это уязвимость в популярной Java-библиотеке для логирования Log4j, которая позволяет заинжектить и исполнить произвольный код. Она была обнаружена 9 декабря службой облачной безопасности компании Alibaba. Исследователи безопасности Lunasec в своем блоге опубликовали [пост об уязвимости](https://www.lunasec.io/docs/blog/log4j-zero-day) и [отдельный пост](https://www.lunasec.io/docs/blog/log4j-zero-day-mitigation-guide/) о том, как обезопасить себя. Большое количество сервисов и крупных компаний заявили о том, что их ПО было потенциально уязвимо. Financial Times со ссылкой на исследователей безопасности сообщает, что при помощи уязвимости хакеры выполнили более миллиона атак на разные сервисы. Будьте бдительны и не забывайте обновляться.

Сколько лет мы слышим про дженерики в Go? Похоже, это всё-таки произойдет. В [Go 1.18 beta появились дженерики](https://go.dev/doc/tutorial/generics), их можно попробовать и посмотреть, как они работают. Гоферы, возрадуйтесь, а все остальные — порадуйтесь за гоферов. Но не забывайте, что это бета-версия, и её рано радостно нести на прод.

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
