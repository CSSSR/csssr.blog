---
title: 'В этом выпуске: путь обучения фронтенду от Mozilla, комбинация флексов и гридов, тестовые задания компаний, материалы по Vue 3, протокол QUIC, релизы PHP-фреймворков, судебные тяжбы из-за nginx <span style="white-space:nowrap">дубль 2.</span>'
soundcloudLink: 'https://soundcloud.com/csssr/css-3d-gayd-po-webpack-5-nodejs-15-react-17-i-cra-4-playwright-python-composer-2-observer-apis?in=csssr/sets/512-news'
date: '2020-07-14T00:00:00.000Z'
episodeNumber: 12
tag: 'news'
author: 'Ислам Виндижев'
---

<ParagraphWithImage imageName="manWithLaptop" imageSide="right">
  ### Интересные публикации

  Как перестать потреблять контент и начать его создавать? Эта проблема актуальна и для <span style="white-space:nowrap">веб-разработки</span> также. Видео уроки навязывают <span style="white-space:nowrap">анти-паттерны</span>, cтатьи имеют множество концептуальных ошибок, Решения тех.лидов могут быть далеки от совершенства. О сути проблемы рассказывает Александра Сикора в своём блоге, там же предложены первые шаги для перехода от потребления к созиданию.
</ParagraphWithImage>

"12 советов по внедрению TypeScript в React-приложениях" от Андрея Алексеева из Tinkoff. Первая половина советов общая, касающаяся подходов и инфраструктуры. Вторая — несколько особенно полезных фишек языка.

"Гриды для основного лейаута, флексы для компонентов", — Ахмад Шадид продолжает разбор CSS спецификации. на очереди две, на первый взгляд, конкурирующие механики создания раскладок.

На Mozilla Hacks доступно описание новой инициативы Front-end developer learning pathway. Это новый подраздел MDN, работающий не как справочник, а как учебник: от html, до javascript-фреймворков. Создатели инициативы объясняют, что такое веб-стандарты и как веб-технологии работают вместе, а также как эффективно учиться и получать помощь.

В гитхабе Хекслета появился репозиторий, где собраны тестовый задания почти тридцати IT компаний. Кстати, недавно, совместно с Хекcлетом мы провели публичное собеседование на должность фронтенд-разработчика: деревья не "крутили", зато самостоятельно реализовывали поведение хуков из реакта, заодно проверив теорию JavaScript. Ссылка на репозиторий и собеседование вы найдёте в описании.

npkill это Node-модуль....для удобного удаления других Node-модулей. Всё действие происходит внутри CLI. Пакет находит и удаляет старые и ненужные папки node_modules.

Акесель Раушмаер был весьма щедр на этой неделе. Вышло три статьи про TypeScript: валидирование "внешних" данных, например подключаемых JSON'ов, сужение типов с помощью тайпгардов и разбор понятия "type assertions". Завершает подборку статья, посвященная пропозалу добавить операторы логического присваивания в JavaScript.

С низкой задержкой, двунаправленный, для реализации клиент-серверного обмена сообщениями: в блоге web.dev разбирают и ставят эксперименты с протоколом QUIC при помощи QuicTransport API.

Тему QUIC-протокола продолжает NGINX. Опубликованы экспериментальный репозиторий и стенд, посвящённые внедрению Quic и HTTP3.

Габор Суус опубликовал в своём github подборкe материалов по Vue 3: от мажорных изменений и новых фич до гайдов по миграции и доработки вебпак-конфигов.


<ParagraphWithImage imageName="laptopNews" imageSide="right">
  ### Новости релизов

  На этой неделе мы подробнее остановились на релизах PHP-фреймворков, заглянули на огонёк к фреймворку Ionic и посмотрели на Atom с VSCode.

  С пачкой багфиксов и новым методом withToken() неделю релизов начал Laravel Семь точка Пятнадцать.
</ParagraphWithImage>

Atom поднялся до версии Один Сорок Восемь. Были обновлены зависимости, включена обратно поддержка webview, также была улучшена подсветка для языка Java.

Майское обновление VSCode за номером Один Сорок Шесть радует нас новыми возможностями. Например, теперь можно пинить табы, можно гибче настраивать лэйаут редактора, также было решено несколько проблем доступности.

Доступен Сто Восьмой релиз Safari Tech Preview. Были доработаны модули Web Incpector и Web API.

Эдди Османи добавил в Chrome Web Store расширение для проверки метрик Web Vitals.

В октябре 19го года Команда Ionic анонсировала поддержку не только angular, но и react.Недавно вышла версия 5.2 и следом за ней фикс 5.2.1. Кажется, писать мобильные приложения на React с Ionic уже можно пробовать.

Также на этой недели зарелизили бета-версию для Django Три точка Один, фикс релиз CakePHP Два Двадцать ДвадцатьДва и Symfony Пять Один Один.

Экспресс-апдейт по Angular и Vue. Anular 10 всё ещё идёт к релиз кандидату, а Vue 3 всё ещё в бете.

<ParagraphWithImage imageName="laptopDialog" imageSide="right">
  ### Другие новости

  Из языка Go убирают все упоминания терминов whitelist/blacklist, а также master/slave. Два года назад аналогичную инициативу уже приняли в Python. О "преемниках" устоявшихся названий будет сообщено позже. На фоне этой же волны и GitHub собирается переименовывать "master"-ветку во что-то другое. Возможно пора начинать переживать за шахматы, потому что в наше время фраза «Белые ходят первыми» кажется приобретает совсем другой смысл.
</ParagraphWithImage>

В Германии договорились о переводе госучреждений с продуктов Microsoft на открытое ПО. В Майкрософт это прокомментировали нейтрально и сказали что не считают это агрессивным выпадом в свою сторону и только за свободное ПО.

Права на NGINX снова под вопросом. Газета "Коммерсант" сообщает, что в США компания Lynwood Investments, подала иск против нового владельца Nginx, компании F5 Networks. Свой ущерб Lynwood оценивает в $750 млн. Lynwood Investments и Rambler Group уже пытались отсудить права на NGINX в России в прошлом году. Спустя месяцы прокуратура прекратила расследование, не найдя никаких доказательств вины сооснователей Nginx.

Яндекс запустил аналог Zoom под названием "Телемост". К звонку могут одновременно присоединиться до 35 человек, а время не ограничено. Подключение к Телемосту не требует регистрации и может быть доступно сразу по ссылке.

Все ссылки на инфоповоды и сопутствующие публикации ищите в описании. С вами был Ислам Виндижев, будьте здоровы, до встречи через неделю.


<Note>
  ### Полезные ссылки

  Хороший и плохой технический контент — https://www.aleksandra.codes/tech-content-consumer

  12 советов по внедрения TypeScript в React- приложение — https://habr.com/ru/company/tinkoff/blog/505488/

  Кобминация CSS Grid и Flexbox — https://ishadeed.com/article/grid-layout-flexbox-components/

  Front-end developer learning pathway от Mozilla — https://hacks.mozilla.org/2020/06/introducing-the-mdn-web-docs-front-end-developer-learning-pathway/

  Тестовые задания IT-компаний и собеседование на должность фронтенд-разработчика — https://github.com/Hexlet/ru-test-assignments | https://www.youtube.com/watch?v=P12lWcOIIDE

  npkill.js — https://npkill.js.org/

  QuicTransport API — https://web.dev/quictransport/

  Экспериментальный nginx поддержкой QUIC и HTTP3 — https://www.nginx.com/blog/introducing-technology-preview-nginx-support-for-quic-http-3/

  Материалы по Vue 3 — https://github.com/blacksonic/awesome-vue-3

  Статьи по TS от Акселя Раушмаера — https://2ality.com/2020/06/logical-assignment-operators.html |
  https://2ality.com/2020/06/validating-data-typescript.html |
  https://2ality.com/2020/06/type-guards-assertion-functions-typescript.html |
  https://2ality.com/2020/06/type-assertions-typescript.html

  Safari Technology Preview 108 — https://webkit.org/blog/10840/release-notes-for-safari-technology-preview-108/

  Chrome-плагин для проверки Web Vitals — https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma

  Django 3.1 Beta 1 — https://www.djangoproject.com/weblog/2020/jun/15/django-31-beta-1-released/

  Laravel 7.15.0 — https://laravel-news.com/laravel-7-15-0

  CakePHP 2.10.22 — https://github.com/cakephp/cakephp/releases/tag/2.10.22

  Symphony 5.1.1 — https://github.com/symfony/symfony/releases/tag/v5.1.1

  Ionic 5.2 — https://github.com/ionic-team/ionic/releases/tag/v5.2.0 | https://github.com/ionic-team/ionic/releases/tag/v5.2.1

  VS Code 1.46 — https://code.visualstudio.com/updates/v1_46

  Atom 1.48.0 — https://github.com/atom/atom/releases/tag/v1.48.0

  Замена устовяшихся технических терминов из-за дескриминации — https://www.zdnet.com/google-amp/article/
  github-to-replace-master-with-alternative-term-to-avoid-slavery-references/ | https://go-review.googlesource.com/c/go/+/236857/

  В Германии в госучреждениях меняют Microsoft на свободное ПО — https://www.opennet.ru/opennews/art.shtml?num=53110

  Иск из-за nginx, снова — https://www.kommersant.ru/doc/4377231

  Яндекс запустил аналог Zoom — https://vc.ru/services/134017-yandeks-zapustil-telemost-pohozhiy-na-zoom-servis-videozvonkov-k-kotorym-mozhno-prisoedinitsya-po-ssylke

</Note>