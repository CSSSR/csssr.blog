---
title: 'В этом выпуске: TypeScript 4.3 beta, воркшоп по TDD c React, Husky 6, фреймворк Hyperapp и инциденты с майнингом крипты на серверах GitHub.'
soundcloudLink: 'https://soundcloud.com/csssr/typescript-43-beta-vorkshop-po-tdd-c-react-husky-6-sravnenie-hyperapp-s-react-rgb-i-hsl'
date: '2021-04-06T00:00:00.000Z'
episodeNumber: 161
tag: 'news'
author: 'Ислам Виндижев'
---

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

Александр Беспоясов провел [воркшоп по TDD](https://bespoyasov.ru/blog/tdd-workshop/), или Test-Driven Development. Напомню, что при разработке через тестирование пишется тест, а потом код, который этим самым тестом и будет проверяться. На примере конвертера валют Александр продемонстрировал, как этим подходом пользоваться. Охвачено порядочное количество тем, в том числе тестирование бизнес-логики, компонентов, запросов к API. Доступна и [запись лайвкодинга](https://www.youtube.com/watch?v=oaktsy6YKMk).
</ParagraphWithImage>

Мехди Аусиад (Mehdi Aoussiad) написал статью [о семи малоизвестных HTML-атрибутах](https://javascript.plainenglish.io/7-useful-html-attributes-that-you-probably-dont-know-661784fe21e): accept, multiple, contenteditable, download, translate, poster и pattern. Автор объясняет, для чего они нужны, и приводит примеры синтаксиса.

Алекс Рассел (Alex Russell) в своем блоге выложил статью [о влиянии фронтенда на мобильный веб](https://infrequently.org/2021/03/the-performance-inequality-gap/). На его взгляд существует проблема медленного веба, которая возникает из-за того, что бандлы растут, интернет ускоряется, а мобильные устройства чаще всего не топовые. Алекс призывает при разработке в первую очередь думать о пользователях, которые владеют обычными дешевыми смартфонами, а не флагманами, потому что таких пользователей гораздо больше. Он предлагает ограничить размер бандла 350 килобайтами и 100 килобайт выделить для HTML/CSS/шрифтов.

Арек Наво (Arek Nawo) написал статью [о Hyperapp](https://blog.asayer.io/hyperapp-is-it-the-lightweight-react-killer). Этот фреймворк существует с 2016 года, но более-менее популярным стал в 2020 году после выхода второй мажорной версии. Сравнивает его Арек, естественно, с React по таким параметрами, как размер бандла, скорость, developer experience и другим. Автор считает Hyperapp хорошей альтернативой. Поинтересуйтесь, возможно для вас он станет тем самым Граалем и убийцей React.

Пол Хеберт (Paul Hebert) сравнил форматы представления цветов [RGB и HSL](https://cloudfour.com/thinks/hsl-a-color-format-for-humans/). Он рассказывает о каждом формате и приводит доводы, почему HSL удобнее для работы и восприятия.

Этот материал — для тех, кто устал кодить фронт или бэк и хочет попробовать интересное хобби. В блоге ВК на Хабре была опубликована статья [о создании умной квартиры](https://habr.com/ru/company/vk/blog/549596/). В главных ролях: Arduino, JavaScript и Raspberry Pi. Автор рассказывает о проблемах и их решениях, а фич было достаточно много: от управления светом до прокачки домофона.

Всем любителям Visual Studio Code посвящается. [vscode.one](https://vscode.one/) — сайт, посвященный вашему любимому редактору кода. Там можно найти кучу приемов и небольших лайфхаков, которые могут пригодиться в повседневной работе. Также есть студия тем, в которой можно создать свое оформление или использовать уже созданное кем-то.

<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

Команда TypeScript анонсировала бету [версии 4.3](https://devblogs.microsoft.com/typescript/announcing-typescript-4-3-beta/). В обновлении появятся различные типы для геттеров и сеттеров, ключевое слово override и новый флаг компилятора. Также поработали над улучшением типизации шаблонных строк и промисов, поддержкой приватных полей классов и улучшением типизации статических полей классов.
</ParagraphWithImage>

Широко известная в узких кругах библиотека для простого создания git хуков Husky обновилась. Вышла [шестая мажорная версия](https://github.com/typicode/husky/releases/tag/v6.0.0), теперь библиотеку можно использовать программно, husky-init перенесли в отдельный пакет, и, что не может не радовать, Husky снова распространяется под лицензией MIT, и его можно использовать в коммерческих проектах бесплатно. Подробности и гайд по миграции с четвертой версии на шестую — в release notes.

Также отмечу релизы [Safari Technology Preview 123](https://webkit.org/blog/11585/release-notes-for-safari-technology-preview-123/) и бета-версии [Ubuntu 21.04](https://lists.ubuntu.com/archives/ubuntu-announce/2021-April/000267.html).

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

GitHub проводит [расследование](https://therecord.media/github-investigating-crypto-mining-campaign-abusing-its-server-infrastructure/), связанное с майнингом криптовалюты. Выяснилось, что с сентября прошлого года сервера компании подвергаются атакам, которые в итоге позволили ни много ни мало майнить крипту на серверах, принадлежащих GitHub. Сообщается, что провернуть это смогли при помощи GitHub Actions и пул реквестов. Атакам подвергаются репозитории с автоматизированными флоу, и для запуска майнера достаточно создания пул реквеста.
</ParagraphWithImage>

  ### Пишите нам и читайте
  [Telegram—канал CSSSR](https://t.me/csssr)

  [Twitter CSSSR](https://twitter.com/csssr_dev)

  [Twitter новостей](https://twitter.com/csssr_news)

  [Telegram ведущего](https://t.me/Vindizh)

  [Twitter ведущего](https://twitter.com/Vindizh)
