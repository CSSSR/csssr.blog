---
title: '<i>Итоги 2021 от CSSSR.</i> Год длиной в железнодорожный состав'
coverImageAlt: 'Год длиной в железнодорожный состав'
author: 'Максим Вислогуров'
date: '2021-12-30T00:00:00.000Z'
tag: 'web-development'
---

---
<Img imageName='prologue' alt='prologue'/>

*Однажды, ты открываешь глаза стоя на почерневшем от дождя перроне. Местность, окружающая тебя, кажется настолько тусклой и блеклой, что когда ты окидываешь ее взглядом, тебе не удается выделить из серого фона ни одной яркой детали. Эта туманная картина вызывает в душе лишь холод и чувство безысходности. Твое тело охватывает поток свежего ветра. После чего, ты слышишь звуки издаваемые останавливающимся перед тобой, поездом.* 

*Он выглядит как обычный старый поезд советского производства с локомотивом ВЛ-80. На первый взгляд, он ничем не отличается от любого другого, но что-то в нем привлекает твое внимание — на носу поезда красуется __символ атомного ядра__. Тепло, которое исходит от него, согревает тебя. Тайны, сокрытые в нем, манят тебя к себе, а опасности, таящиеся внутри, пугают тебя. Ты больше не в силах находиться на этом безликом вокзале, поэтому уверенно ступаешь в открывшуюся дверь и попадаешь в вагон мистического __фронтенд-поезда__*.

*Какие станции он проехал? Каких пассажиров встретил? Случались ли курьёзы?*

*Итак, поезд отправляется 1го января 2021года с 1970-го пути. В наших изысканиях нам будет помогать доблестный экипаж:*

- **Александр “Сан Дмич” Покахонтов**, машинист поезда. Трудовые династии для него слово, скажем так, не пустое.
- **Юрка “Шалопай”**, помощник его. Шел из Твери пешком встать на шлаковник, а стал разработчиком.

<Img imageName='start' alt='start'/>

## CSS in JS без рантайма

<Img imageName='noruntime' alt='noruntime'/>

Сан Дмич нажал на кнопку пуск и через секунду интерфейс выдал приветливое: “Поезд к старту готов”.

— Ого, быстро загрузилось, — с почтением заметил Юрка.

— Ну дык, никакого рантайма для css. Додумались же: запихнуть стили в JS, чтобы JS его в рантайме на каждый чих собирал в тег style, а потом ещё и инжектил в head. Ну Кулибины! 

Всё! Стоп-машина, наигрались уже со styled. Я тут в восторге диком от [Linaria](https://github.com/callstack/linaria) до сих пор: неплохой pre-eval — имеется, безболезненная миграция со стайледом — за милую душу. Со Stiches или Astroturf так не получилось бы.

В общем мигрировали, так сразу фриз на 800мс при загрузке пропал. А подробности тут, у [Андрея](https://twitter.com/andrey_sitnik/status/1385217089825394690)


## Dual Модули

<Img imageName='dual' alt='dual'/>

Сан Дмич сидел, опёршись на край стола. В его голове крутился архиважный вопрос, которым задавался любой, кто хоть раз ездил на поезде: 

— Что съесть раньше: курицу или яйцо? Наверное, всё-таки яйцо. 

А что выбрать ES-модули или CommonJS? Наверное ESM. Хотя вроде зависит от контекста и среды. Кажись, в браузере всё равно — там бандлеры уже давно переваривают и те и други модули. Да и механика работы с динамической загрузкой. Бандлеры упростили многие паттерны, чего нет в Node.js. Роман Дворнов, [кстати тоже мои мысли повторяет](https://t.me/gorshochekvarit/175) — мол, в Ноде чаще всего CommonJS уместнее. А если и ESM нужны, то извольте Dual-пакеты испробовать. 

Сан Дмич откинулся на спинку и задумался: Зачем решать задачу, которая не имеет смысла? Это я не про модули. Ну например:

«Навстречу поезду выехала дрезина со скоростью…» Ну вычислю я момент, когда они встретятся, и что далее? Что мне будет? Там на железной дороге понятно – поцелуи, слезы встречающих, цветы и угощения, может, даже концерт. А мне что?

С модулями тут ситуация другая — есть задача не ограничивать пользователей в использовании библиотек. Тут то нам и пригодились [Dual-пакеты](https://t.me/gorshochekvarit/176). Там в телеге целый клодайк постов, как правильно собрать Dual-пакет, и как, [сконверитить ESM в Common](https://t.me/gorshochekvarit/176). 

*Одно из самых хардкодных исследований года, не уступающее разработке парсера JSON.*

## Wrike уходит от использования языка Dart

<Img imageName='dart' alt='dart'/>

Сан Дмич, смотрел на прощающуюся пару.

— Красивые, очки модные зелёные. Знаете их? — говорит Юрка.

— А то ... это ж Wrike прощается с Dart’ом. «Так мол и так, любовь три года живёт, мы с тобой [четыре прожили](https://habr.com/ru/company/wrike/blog/551962/). Дальше мы сами, мы на поезд с React’ом и Typescript’ом опаздываем.»

*Dart не смог угнаться за js-инфраструктурой, где есть пища для самых искушенных гурманов. Хотите будем вам VirtualDOM, а хотите файберы или инкрементальный рендеринг. Нужен стейт менеджер? Возьмите redux, а если не хотите так глобально менеджить стейт — то mobx или Effector. Более продвинутая система типов не смогла тут зарешать.*

*Последний оплот Dart’а на Земле пал. Наглядная иллюстрация того, что Google — это не Царь Мидас, не всё к чему он прикасается становится золотом.*

## Перегонные кубы фронтенда

<Img imageName='cube' alt='cube'/>

Поздней ночью на перегоне между 666м и 667м километром в унитаз поезда на полном ходу был опущен лом.

— Дорвались таки, хорошо хоть не урановый. — заметил Юрка.

— Это мне напомнило один случай в этом году, — сказал Покахонтов и глубоко затянулся “Беломором”. Как и в случае с брошенным ломом эксперимент очевидно, преследует не практический, а академический интерес. [React Native for Web](https://necolas.github.io/react-native-web/), только вдумайся! Зачем? Это вопрос уже десятый.

Я тебе говорю, алхимический камень изобретут фронтендеры — это ж надо так одну и ту же субстанцию по разным средам перегонять. 

*Кстати о реакте...*

## React Server Components и 7е рельсы

<Img imageName='mean' alt='mean'/>

*Сан Дмич вспомнил тёплый августовский вечер. Когда в вагоне появились двое. На пальцах и шевронах "mean".* 

— Всё понятно, фуллстэки. Праздуют победу. Уводят плацдарм разработки из SPA обратно на сервер. Оно и понятно — наконец-то добрались до реакта, прокачав SSR новой приблудой — [React Server Components](https://vercel.com/blog/everything-about-react-server-components). Если SSR просто рендерит компоненты на сервере, то RSC шибко умнее. Например, они могут “ходить в базу”, не раздувают бандл (на клиенте нечего грузить-то) да и с GraphQL дружат.

*Ну в общем-то и «рельсовики» не оставали. Буквально под новый год [вышли 7 рельсы](https://rubyonrails.org/2021/12/15/Rails-7-fulfilling-a-vision?utm_source=telegram.me&utm_medium=social&utm_campaign=mdtruevyshla-finalnaya-versiya-ruby-on), которые пытаются вернуть веб-разработку назад к истокам, когда все рендерилось на сервере, при этом они сохраняют идею SPA и динамизм обновления страницы. В прошлом году уже был [hey.com](http://hey.com/), ну собственно на волне его успеха рельсы и пошли в эту сторону. Возможно, это будет очередной шаг на пути к возврату бизнес-логики на бэкенд.*

## Спека дизайн-токенов

<Img imageName='tokens' alt='tokens'/>

*Поезд стоял седьмой час в Кучугурах. Сан Дмитрич читал. Минут сорок читал, иногда вскрикивая: «Эвон, как бывает» или «знамо дело, пробовали» или «ну заживём-то».*  

— Над чем радуетесь, Сан Дмич?

— Да над [спекой дизайн токенов](https://design-tokens.github.io/community-group/format/). Нет, не те, что NFT, а дизайн токены. Размеры шрифтов, цвета и т.п., которые предполагается шарить между тулзами (веб, мобилки, редакторы вроде Фигмы). Сейчас каждый для себя свой формат придумывает, так что самое время. Мысоль такая — дизайнеры смогут маркировать и ссылаться на общие значения для дизайна, таких как цвета и размеры. Скажем так, дизайнеры смогут на одном зыка общаться, оставаясь при этом platform-agnostic. Вот, где порядок будет!

*Может и не придётся больше в докере скриншоты рендерить, чтобы шрифты «попадали» друг в друга*

## Уязвимости в npm-пакетах

<Img imageName='npm' alt='npm'/>

— «Вот, говорю, обули, как щегла!», - Сан Дмич бегал по вагону и заглядывал под каждую кровать. «Благо, хоть исподнее оставили, ироды!»

— А что случилось-то?

— Установил давеча [ua-parcer](https://snyk.io/vuln/npm:ua-parser-js) из npm. Ну и поймал майнера. Кошелёк с криптой увели натурально! Вроде ж третьего дня делали npm audit...[хотя что толку-то?](https://overreacted.io/npm-audit-broken-by-design/)

*Год был богат на security-дыры. Помимо уже ставшего легендарной [Log4Shell](https://xakep.ru/2021/12/17/log4shell-story/), был ещё [pac-resolver](https://www.opennet.ru/opennews/art.shtml?num=55728), [node-netmask](https://www.opennet.ru/opennews/art.shtml?num=54857), [coa](https://github.com/veged/coa/issues/99) и [rc](https://therecord.media/malware-found-in-coa-and-rc-two-npm-packages-with-23m-weekly-downloads/?__cf_chl_jschl_tk__=SbeDnryeUdDyjho2PIFQOLWnv0v5wTxmR53uyyYVwbo-1640764798-0-gaNycGzNCL0). И все с сотнями, а то и миллионами загрузок. Читатель, вдумайся в эти слова и тебе станет не по себе.*

## Не вебпаком единым

<Img imageName='vite' alt='vite'/>

*Мимо фронтенд-поезда промчались два состава*

— Сан Дмич, смотрите, как летят! Километров 200, не меньше! Интересно куда?

— Знамо дело куда! Будут webpack обгонять! Идут-то к одной цели, но малость разными путями. Parcel, как на [swc-компилятор](https://parceljs.org/blog/beta3/) растовый пересел, так в 10 раз паковать быстрее стал.

— А какие ещё профиты от Раста?

— Очевидно, окромя скорости, экономия памяти. Это же считай современный C с человеческим лицом. На клиенте такие примочке не особо нужны, т.к. там сам браузер узкое место, а вот в тулинге скорость сборки/линтинга сильно роляет. С esbuild ситуация чуть другая. Тут, как говорится, без алхимии не обошлось. Автор esbuild пробовал и Rust и Go, и Go оказался быстрее. В общем, [просвещайся, Юра](https://news.ycombinator.com/item?id=22336284).

## Эпилог

<Img imageName='epilogue' alt='epilogue'/>

*На востоке вставало солнце. День обещал быть морозным. Сколько ещё таких дней во фронтенд-поезде — неведомо. Считал Сан Дмич сначала, да потом бросил. Оно и к лучшему. Наступал 2022-й.*