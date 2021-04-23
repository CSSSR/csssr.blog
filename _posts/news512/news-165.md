---
title: 'В этом выпуске: релиз Node.js 16 и Firefox 88, проектирование приложения с TypeScript и ООП, взгляд на Container Query, доклады с Я.Субботника.'
soundcloudLink: 'https://soundcloud.com/csssr/'
date: '2021-04-23T00:00:00.000Z'
episodeNumber: 165
tag: 'news'
author: 'Ислам Виндижев'
---

  [RSS подкаста](https://radio.csssr.com/rss/news512.rss), [Apple Podcasts](https://podcasts.apple.com/us/podcast/id1370045815), [Google Podcasts](https://podcasts.google.com/?feed=aHR0cHM6Ly9yYWRpby5jc3Nzci5jb20vcnNzL25ld3M1MTIucnNz&ep=14), [SoundCloud](https://soundcloud.com/csssr/sets/512-news), [Я.Музыка](https://music.yandex.ru/album/7040324/track/54795992)

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

Саша Беспоясов написал серию статей ([1](https://bespoyasov.ru/blog/generating-trees-on-canvas-using-typescript-and-oop/), [2](https://bespoyasov.ru/blog/generating-trees-on-canvas-using-typescript-and-oop-2/), [3](https://bespoyasov.ru/blog/generating-trees-on-canvas-using-typescript-and-oop-3/)) о генерации деревьев. Не пугайтесь: генерация деревьев — это просто пример программы, главная фишка статей в том, что Саша на примере этого приложения делится приёмами проектирования приложений с использованием принципов ООП и TypeScript. Доходчиво и познавательно.
</ParagraphWithImage>

Сурма (Surma) в своём блоге выложил статью [о WebAssembly](https://surma.dev/things/js-to-asc/). Он пытается ответить на вопрос, правда ли, что WebAssembly всегда означает пользу и производительность. Автор рассказывает, что происходит в движке при подключении WebAssembly-кода, и проводит замеры перформанса для разных вариантов языков, движков и опций.

Ахмад Шадид (Ahmad Shadeed) написал статью [о Container Query](https://ishadeed.com/article/say-hello-to-css-container-queries/). Напомню, это фича, которая позволяет стилизовать элементы на основе их размеров, а не вьюпорта. Сейчас она доступна в экспериментальном режиме в Chrome Canary. Ахмад рассказывает, почему фича понадобилась и что было не так с медиа-запросами. Также он объясняет, как с ней можно поэкспериментировать и в каких случаях фича будет особенно полезна.

Ли Робинсон (Lee Robinson) на SmashingMagazine опубликовал статью [об инкрементальной статической регенерации в Next.js](https://www.smashingmagazine.com/2021/04/incremental-static-regeneration-nextjs/). Это подход, при котором статический контент можно обновлять без полной пересборки сайта. По сути постраничная генерация по требованию. В статье Ли рассказывает, как реализовать это на Next.js и какие трейдоффы ждут при использовании такого подхода.

Алексей Трехлеб (Oleksii Trekhleb) написал статью [об алгоритме Seam Carving](https://vas3k.club/post/9637/), или так называемом вырезании швов. Алгоритм используется при ресайзе изображений для сохранения контента. Автора рассказывает о принципе работы алгоритма и о том, как реализовать его при помощи динамического программирования на TypeScript. Получилось очень интересно.

А сейчас будет неожиданно. Следующий материал — о том, [как подружить GraphQL с, внимание, Wordpress](https://www.smashingmagazine.com/2021/04/making-graphql-work-in-wordpress/). Леонардо Лозович (Leonardo Losoviz) на SmashingMagazine написал статью о том, для чего это нужно и как это осуществить. Речь идёт о плагине WPGraphQL — собственно, GraphQL-сервере для Wordpress. Кроме того, автор рассказывает, как использовать его, например, с Gatsby, headless-фреймворками, и разбирает другие случаи применения.

Рубрику закрывают [видео с Я.Субботника](https://www.youtube.com/playlist?list=PLKaafC45L_SSQzEjU7ZFVn22OyQC5fJHv). В плейлисте — доклады о развитии во фронтенде, продвинутых дженериках в TypeScript, микрофронтенды и виджеты и оптимизация кода по скорости.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

Первый релиз — [Node.js 16](https://nodejs.org/en/blog/release/v16.0.0/). Пока это current-ветка, в октябре этого года она станет LTS-версией. V8 обновили до 9.0 версии, в которой поддерживается RegExp Match Indices и оптимизирован доступ к полям родительского объекта с помощью super. Добавили Timers Promises API — это альтернативный способ работы с таймерами. Также была добавлена экспериментальная поддержка Web Crypto API и стабилизирован AbortController. Новая версия Node.js поставляется с npm 7.10.0.
</ParagraphWithImage>

Вышел [Firefox 88](https://hacks.mozilla.org/2021/04/never-too-late-for-firefox-88/). Для форм добавили поддержку псевдоклассов :user-valid и :user-invalid. Также теперь поддерживается CSS-функция image-set() для выбора подходящего изображения. Её можно использовать в свойствах content и cursor. Здесь тоже добавили поддержку RegExp Match Indices. Появился метод AbortSignal.abort(), возвращающий отменённый сигнал. Была отключена поддержка FTP, которую полностью выпилят в Firefox 90.

Очередным релизом отметился браузер Tor. Версия [10.0.16](https://blog.torproject.org/new-release-tor-browser-10016) — это поддерживающий релиз. Обновили версию Firefox и NoScript, а также добавили бирманскую локализацию. А на следующей неделе выйдет обновление для Android.

Вышел [critical patch update для всех продуктов Oracle](https://blogs.oracle.com/security/post/april-2021-critical-patch-update-released). Среди продуктов, которые были затронуты патчем, — MySQL и Java SE. С полным списком можно ознакомиться по ссылке. Не забывайте обновляться.

Также отмечу релизы [VirtualBox 6.1.20](https://www.virtualbox.org/wiki/Changelog-6.1#v20) и [nginx 1.20](http://nginx.org/en/CHANGES-1.20).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

Грег Кроа-Хартман (Greg Kroah-Hartman), который отвечает за поддержку стабильной ветки ядра Linux, решил [запретить](https://twitter.com/gregkh/status/1384785747874656257) приём в ядро Linux любых изменений от Университета Миннесоты и откатить всю их работу. Ученые мужи отправляли в ядро патчи с ошибками и смотрели, заметит ли это сообщество, а также искали способы обхода процесса рецензирования изменений. Грег назвал такое поведение неэтичным и недопустимым.
</ParagraphWithImage>

И ещё одна экспресс-новость: [Microsoft не купит Discord](https://quote.rbc.ru/news/article/607fbbca9a79477866017e29).

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
