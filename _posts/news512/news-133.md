---
title: 'WebStorm 2020.3, доклады с fwdays 2020, Xdebug 3, Advent of Code, статистика от GitHub и State of CSS.'
soundcloudLink: 'https://soundcloud.com/csssr/webstorm-20203-minmax-mathrandom-v-js-fwdays-2020-advent-of-code-octoverse-i-state-of-css'
date: '2020-12-04T00:00:00.000Z'
episodeNumber: 133
tag: 'news'
author: 'Ислам Виндижев'
---

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

  Ахмад Шадид (Ahmad Shadeed) выложил в своём блоге [статью о свойстве CSS Grid minmax()](https://ishadeed.com/article/css-grid-minmax/) и его работе. Ахмад начинает с простейшего примера и постепенно перемещается к сложным сеткам. Также он рассказывает о вьюпорте и работе свойства с разными единицами измерения.
</ParagraphWithImage>

  Следующий материал посвящен [использованию метода random() в JavaScript](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/). Рассматривается много примеров, включая анимацию текста и графики, генеративное искусство и генеративную музыку. Из более привычных применений — генерация ключей, выбор случайного изображения или цвета и игра камень-ножницы-бумага.

  [Коллекция плохих практик в React-компонентах.](https://antongunnarsson.com/react-component-code-smells/) Антон Гуннарссон (Anton Gunnarsson) в одном из постов своего блога собирает коллекцию признаков, которые считает индикаторами проблем в компонентах. Среди них много пропсов, несовместимые пропсы, жирные useEffect() и слишком много useState() внутри компонента. Это не вся коллекция, статья будет дополняться.

  [О природе труда разработчика](https://daniel.fone.net.nz/blog/2020/10/21/talking-typing-thinking-software-is-not-a-desk-job/) рассуждает Дэниел Фоун (Daniel Fone). В своей заметке автор отмечает, что просто сидеть за столом и печатать — недостаточно, прежде всего  необходимо думать и общаться. Речь идёт как о синхронной коммуникации — разговорах в реальном времени — так и об асинхронной — письменной. В итоге он выделяет три важнейших «Т» работы программиста: Talking — Typing — Thinking.

  Команда JetBrains отмечает 25-летие JavaScript. Ребята собрали на лендинге [таймлайн ключевых вех развития JS](https://www.jetbrains.com/lp/javascript-25/). Вы увидите релизы фреймворков и платформ, популярных библиотек, развитие технологии и релизы важных браузерных фич. Конечно же, на таймлайне вы найдете и релиз первой версии WebStorm в 2010-ом году.

  В заключение рубрики — [плейлист записей с конференции fwdays 2020](https://www.youtube.com/playlist?list=PLPcgQFk9n9y8WQ3dEeBByarIVaoaZm03W). В секции JavaScript было несколько интересных докладов. Вот некоторые из них: [«Фронтенд, бэкенд и фулстек» с Андреем Мелиховым и Вадимом Макеевым](https://www.youtube.com/watch?v=hExS0b_4XfM) — об универсальности фронтендеров, и нужна ли она; [«Why slow?» с Иваном Акуловым и Андреем Листочкиным](https://www.youtube.com/watch?v=NzYSPNnEmXY) — о производительности, инструментах и эволюции фронтенда; [«Node.js Middleware – никогда больше!» от Тимура Шемсединова](https://www.youtube.com/watch?v=RS8x73z4csI) — о том, как не использовать миддлвары, и какие есть альтернативы.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

  JetBrains порадовали нас релизом [WebStorm 2020.3](https://habr.com/ru/company/JetBrains/blog/529708/). Теперь IDE поддерживает TailwindCSS и может создать шаблонный React-компонент. В этой версии в раннем доступе можно попробовать новый инструмент для парного кодинга и удалённой разработки Code With Me, его можно установить как плагин. Окно с багами TypeScript совместили со вкладкой Problems. Дебажить стало удобнее — переменные теперь интерактивные, всю информацию о них можно быстро просмотреть и установить значение. Ещё среда теперь поддерживает git staging, и стало удобнее работать со вкладками в IDE.
</ParagraphWithImage>

  Laravel отметился релизами версий [8.16](https://laravel-news.com/laravel-8-16-0) и [8.17](https://laravel-news.com/laravel-8-17-0). Массивы теперь можно сортировать по нескольким критериям. Был добавлен класс, который записывает транзакции и коммиты. В него входит хэндлер, который позволяет выполнять код строго после выполнения транзакции.

  [Symphony 5.2.0](https://symfony.com/blog/symfony-5-2-0-released) увидела свет. В этой версии: асинхронное повторное вычисление кеша, поддержка аннотации свойств PHP 8 и профилирование сессий.

  Ещё одна хорошая новость для PHP-сообщества. Вышел [Xdebug 3.0](https://xdebug.org/announcements/2020-11-25). Главное в этом релизе — поддержка PHP 8 и значительный рост производительности. Также теперь Xdebug можно запускать при помощи опции xdebug.mode, а дефолтный порт изменён на 9003, чтобы не было конфликтов с PHP-FPM.

  Завершают рубрику релизов [ChromeOS 87](https://chromereleases.googleblog.com/2020/11/stable-channel-update-for-chrome-os_30.html), [Scala 2.13.4](https://github.com/scala/scala/releases/tag/v2.13.4) и [njs 0.5.0](http://nginx.org/en/docs/njs/changes.html#njs0.5.0).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

  Компании начинают подводить итоги года. GitHub подвёл их в [State of the Octoverse 2020](https://octoverse.github.com/). По версии GitHub самый популярный язык в 2020-м году — JavaScript. Вторую и третью строчки занимают Python и Java соответственно. TypeScript поднялся с 7-го на 4-е место. Кроме общих результатов вас ждёт три инфографики: work-life balance, развитие сообщества разработчиков и безопасность ПО. На лендинге есть только часть сведений, полные репорты стоит скачать и посмотреть подробно.
</ParagraphWithImage>

Результаты [State of CSS 2020](https://2020.stateofcss.com/) наконец-то обработали. Ожидаемо CSS Grid начинает использовать всё больше людей, и многие ждут принятия Subgrid в стандарт. CSS-переменные и логические свойства также были в фаворе у сообщества в этом году. PostCSS уверенно удерживает первое место среди процессоров и получил за это награду. CSS-фреймворк №1 в этом году — TailwindCSS, а методология BEM уступила первое место Atomic CSS. Также в отчёте другие популярные инструменты, образовательные ресурсы, подкасты и мнения членов сообщества.

В заключение выпуска — ресурс для тех, кто ищет настоящего челленджа. Пришествие кода, или [Advent of Code](https://adventofcode.com/) в оригинале, — это ресурс от Эрика Уосла (Eric Wastl) с ежегодным челленджем по программированию. 25 задачек появляются по одной в сутки. От других похожих ресурсов он отличается наличием задач для самых разных уровней и из самых разных областей знаний. Здорово помогает расширить кругозор. AoC проводится уже в шестой раз, можно посмотреть лидерборды и старые задачки за предыдущие 5 лет и порешать их.

<Note>
  ### Слушайте нас на любимой платформе
  [RSS подкаста](https://radio.csssr.com/rss/news512.rss)

  [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815)

  [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14)

  [SoundCloud](https://soundcloud.com/csssr/sets/512-news)

  [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)
</Note>

<Note>
  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
</Note>
