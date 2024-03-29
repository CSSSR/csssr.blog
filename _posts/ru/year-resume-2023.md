---
title: '<i>Итоги 2023 от CSSSR.</i> Хлеб. Соль. Интернет.'
coverImageAlt: 'Хлеб. Соль. Интернет.'
author: 'Максим Вислогуров'
date: '2023-12-29T00:00:00.000Z'
tag: 'web-development'
---

---


**И**сторию эту мне рассказал [Александр Покахонтов.](https://blog.csssr.com/ru/article/year-resume-2021/) В прошлом машинист поезда, нынче фронтенд разработчик. Составляет хайлайты с 2021 года. Далее записано с его слов.

**29 декабря 2023 года.**

Сколько можно мёржить, - говорит, упёрся в свой экран, говорит, сходи на улицу. Да, кстати, что там на улице, что может мне предложить улица, против вымышленного придуманного программистами мира?

Очнувшись от этого фантастического буйства релизов перед Новым годом, я обнаруживаю себя где-то в переулке на Пятницкой. Перед баром.
<Img imageName='hs' alt='hs'/>

*У каждого посетителя тут свои истории. Кто-то о своей жизни рассказывает. Есть и совсем маргинальные личности на которых не обращают внимания и после уютного вечера поколотят за углом. Звон пивных кружек, рюмок, сигаретный дым и добрый смех.*

## Тайпогейт

Я только открыл дверь, а под ноги мне уже выбросили какого-то бедолагу. 

<Img imageName='wrong' alt='wrong'/>

<Img imageName='chad' alt='chad'/>

Не таким пинком, но всё равно резко и внезапно в этом году сразу [три крупных вендора](https://t.me/melikhov_dev/245) отказались от TypeScript. Оговорюсь, что отказались в системном коде. 

Тренд прослеживается: не хотят люди писать системный код на ts, уж слишком накладно. Много кода пишется чисто ради удовлетворения Typescript-божества. Плюс дополнительный этап транспиляции, плюс опять как-то конфиги хитро описывать, если в одном проекте и ts и js-файлы. Не на bun’е пишем же…

## 10 лет реакту

Я прохожу дальше в зал и спотыкаюсь о лежащего “мордой в салат” человека. Рядом с ним пара костылей и велосипед.  Из его головы растёт дерево, а под столом лежит его копия. Но будто бы ненастоящая.

— Осторожней с юбиляром!

<Img imageName='r10' alt='r10'/>

[Поздравляли много](https://t.me/artalog/985), записал некоторые моменты:

- Маркетологи реакта — сила.
- Производительность — низкая.
- Будущее — за Vue.
- Жить нам с этим — всю жизнь. Легаси уже написано столько, и оно обросло таким количеством надстроек, что лучше уж шарить в реакте, чем не шарить. (этот тост мой **©** А. Покахонтов).

## Bun

Ближе к барной стойке у меня началось [дежавю](https://habr.com/ru/articles/476972/).

<Img imageName='nodebun' alt='nodebun'/>

Кроме жирной json-овой диеты новый рантайм для js успел [отметиться](https://www.youtube.com/watch?v=BsnCpESUEqM):

- одинаково хорошо понимает и `cjs`, и `mjs`;
- fs.read/write быстрее, чем у ноды;
- может держать в 4 раза больший RPS, чем нода;
- тесты на jest гоняются в десятки раз быстрееl
- нативная поддержка Rust-импортов.

Но в чём-то прав и человек, похожий на [Уилла Смита](https://dev.to/thejaredwilcurt/bun-hype-how-we-learned-nothing-from-yarn-2n3j):

- зависимость от сборки от bun-макросов;
- собственное Bun API. Оно отличается от нодового и придётся писать свои полифилы, дабы не сломать совместимость.

В Новый год с новым рантаймом! Но помним о [нюансах](https://t.me/melikhov_dev/253).

## [Утечка памяти года](https://t.me/melikhov_dev/172)

Ну `undefined` и `undefined`, сколько их там в девтулзах видно? Сотни. Чего бухтеть-то?

А бухтеть, может быть, и стоило.
Тут без ста грамм не разобраться — сейчас 150 из гранёного хлопнем и посчитаем.
Давайте, я прямо за стойкой тут на салфетке прикину.

<Img imageName='pdzh' alt='pdzh'/>

Каждые 8 запросов утекает 1 Кб, то есть 100 Мб утечёт примерно за ~820k запросов. Предположим, что у среднего сервиса хотя бы 10 rps. 

Отдаёт он порядка 300к ответов в сутки… **с вас 100 Мб оперативы в сутки.**

## .zip

<Img imageName='zip' alt='zip'/>

***Тем временем у чёрного хода в бар…***

Для тех, кто в теме: с этого входа можно зайти и бухать бесплатно. Или кошелёк умыкнуть. Хотя кошелёк вы отдадите сами, как и сами установите майнер вместе с keylogger’ом.
Всё потому, что гугл в этом году представил домен первого уровня `.zip`, чем усложнил жизнь всем безопасникам на свете.

*[`https://github.com∕kubernetes∕kubernetes∕archive∕refs∕tags∕@v1271.zip`](https://github.com%E2%88%95kubernetes%E2%88%95kubernetes%E2%88%95archive%E2%88%95refs%E2%88%95tags%E2%88%95@v1271.zip/)*

*[`https://github.com/kubernetes/kubernetes/archive/refs/tags/v1.27.1.zip`](https://github.com/kubernetes/kubernetes/archive/refs/tags/v1.27.1.zip)*

“— Видишь, где малварь?

— Нет, не вижу.

— А она есть.”

Вот это мы живём и не знаем, какие законы принимаются. 

## [Братство Rust’а](https://t.me/melikhov_dev/239)

…И тут в бар входит мексиканец… Или нуменорец? Ну неважно, огромного такого роста, ты не поверишь. Идёт себе эдаким хозяином. Никто не знал, откуда он и чего он хочет. А он словно никого не замечает, он тоже был тёмный. Не хочу сказать темнокожий. Нет. Дело было в другом. Словно он всегда был в тени. Он делал шаг к свету, и тут его лицо должно было появиться, но его не было видно, как будто свет тускнел перед ним.

<Img imageName='arag' alt='arag'/>

Казалось бы, уже 3 года Rust сидит в такой же тени, как и нуменорец. Языку уже зачитывали эпитафии после исхода разработчиков в 2020 году, а он живее всех живых! Каждый год кто-то планомерно, но переписывает свой тулинг на Rust.

Воистину “наследник Гондора”.

***Судя по звукам, на втором этаже бара шло какое-то побоище… Гуляют сразу два зала, каждый со своими “зависимостями”.***

## Гонконгская история*

*Гонконгская, потому что всё мельтешит и летает, как в гонконгском боевике.

### В ESM. Туда и обратно.

<Img imageName='boy' alt='boy'/>

Ну ничего не меняется вообще!

Марк Эрикосн, мейнтенйнер Redux, в конце прошлого года поставил задачу — [переехать с CommonJS на ESM](https://blog.isquaredsoftware.com/2023/08/esm-modernization-lessons/). Задача оказалась нетривиальной… А потому что до сих пор нет гайда, как перейти от одной модульной системы к другой. 

Хотя, казалось бы, что тут переходить-то? Пиши `type:module` — и всё тут. Так, да не так. По пути может отвалиться Jest, и придётся переходить на `vitest`, а `nodenext` не может вытащить типы. А ещё нода не может работать `.js`-расширениями, если пакет переключён на ESM и нужно выбирать между тремя расширениями `js/mjs/cjs` в зависимоcти от того, есть `type: module` или нет… А ещё пришлось перебрать аж 4 бандлера, чтобы собрать 20 строчный исходник. А ещё выясняется, что Webpack 4 до сих пор популярнее Webpack 5. Но Webpack 4 не понимает optonal chaining…

**Происходит настоящая бойня с зависимостями и системами модулей!**

В общем, к августу 2023 года работа по переезду так и не была закочена. Пока Марк не смог отбиться от фронтенд-зоопарка 2023. А ещё вышел `Next 13.4`, который сломал React Server Components. Значит, при переезде на ESM нужно поддержать совместимость. 

Конца и края этому нет! Ей-богу будто кто-то открыл портал во фронтенд-зоопарк 2014 года, когда все впервые переезжали с bower на npm.

**P.S** Говорили, будто бы Марка видели в чебуречной на Белорусском вокзале и слышали, как он клялся стать бэкендером.

*Но разве в бэке нет зоопарка? О-о-о, конечно же есть. Вот как раз в соседнем зале.*

### В облако. Туда и обратно.

<Img imageName='kube' alt='kube'/>

Эту гонконгскую разборку могу описать в двух словах.
Если коротко, то разработчики “рельс” ушли от облачных решений к себе в дата-центры.

Голые ванильные k8s или k3s хороши, но за пределами вашей домашней лаборатории они мало что дадут. Если вы хотите, чтобы k8s работал в облаке, нужно подумать о: 

- балансировке нагрузки и входном контроллере
- хранилище
- сети, ingress
- логировании и мониторинге
- реестре зависимостей
- ci/cd
- gitops’е

У каждого облачного провайдера этот список каждый раз новый и технологии подбираются заново. Откажет AWS/GKE — собирай весь сетап заново.

В итоге DHH и команда [придумали свои способы](https://dev.37signals.com/bringing-our-apps-back-home/).

У них огромный список опробованных инструментов и интеграций с сумасшедшими названиями: `Capistrano`, `Chef`, `mrsk`, `Filebeat`, `traefik`... По сложности это кажется вполне сравнимым с полным развёртыванием K8 со всеми наворотами (ведение журнала, мониторинг, сеть и т. д.).

*Примерно могу почувстововать, что где-то ещё должен задаваться тренд на “подальше от облака, ближе к себе, ближе к “металлу”.*

## Эпилог

Кажется, мы засиделись. Так же незаметно, как опустел бар, наступал 2024 год.
<Img imageName='end' alt='end'/>