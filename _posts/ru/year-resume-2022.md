---
title: '<i>Итоги 2022 от CSSSR.</i> Год жизни уездного фронтира'
coverImageAlt: 'Год жизни уездного фронтира'
author: 'Максим Вислогуров'
date: '2022-12-29T00:00:00.000Z'
tag: 'web-development'
---

---

**Я** такой сериал посмотрел в этом году, вы щас попадаете все. Про ковбоев-разработчиков!  Пока 4 сезона вышло.

Постараюсь в двух словах рассказать, что там по сюжету.

<Img imageName='prologue' alt='prologue'/>

## Не лучший, но достойный

<Img imageName='sheriff' alt='sheriff'/>

«Меня не было в городе восемь лет. С тех пор, как я не могу держать мышку в правой руке, я всё время думал о тебе. И вот я снова тут, и город как раз в том положении, которое мне очень подходит. У меня было много времени научиться работать в [tmux](https://github.com/tmux/tmux/wiki) только левой.

Господа! С сегодняшнего дня я ваш новый шериф! Процветание, но не милосердие — у меня только одно правило. Поэтому мне плевать, что вы будете выбирать завтра: [Vite](https://vitejs.dev/) или [Remix](https://remix.run/). Завтра мы будем прощаться с [CRA](https://create-react-app.dev/)».

*Шериф говорит так уверенно не из-за кольта за поясом. Ещё с начала года количество загрузок [Next.js](https://nextjs.org/) «дышало в спину» загрузкам CRA, а начиная с октября с большим отрывом [вышло вперёд](https://twitter.com/leeerob/status/1589838795280879616).*

*Когда-то в начале CRA был стандартом для обучения разработчиков, но совершенно не готовым для игры в продакшене. Next, может быть, не лучшее, но достойное решение.*

## Быстрый или мёртвый

<Img imageName='quick' alt='quick'/>

«— Есть два типа дедлайнов: или быстрые или сгоревшие…В этот раз сторипоинты оказались быстрее коммитов. И на чём они сгорели-то?

99% времени тратили на собирание по коду размазанных абстракций в одно место. Вот тут — работа с сетью, вот тут — с рендером, а тут транспортный слой напишем. А что, если бы, библиотеки сами закрывали доменные интеграции? Серверную и клиентскую части сразу, например».

*Из таких открытий этого года называют [React Admin](https://marmelab.com/react-admin/). Один JSX, которым описывают и запросы к данным, и их изменение. Меньше кода, меньше интеграционных тестов и больше времени на бизнес-логику. Выглядит, как эталон компонентной архитектуры. Артём [считает](https://t.me/artalog/136), что за такими low-code-решениями будущее. [Write less, do more](https://jquery.com/), как говорится.*

## Вопросы и ответы

<Img imageName='hang' alt='hang'/>

« — …Теперь закрепи верёвку. Она должна выдержать вес свиньи. Надень петлю на шею. Очень хорошо. Великовата, да?  Сейчас подгоним. А теперь на ноги. А поболтайся? Хмм… А какая же там система была у Туко? Что-то про стрельбу по ножкам табуретки вместо верёвки…»

*А как бы систему проектировали вы?* *Раньше на Ютубе проходили Ведьмака 3, а теперь проходят System Design. Как минимум два канала в этом году — [между скобок](https://www.youtube.com/channel/UCFPfUAT-o8BZ5vsqAcy7gcw) и [Code of Architecture by Tinkoff](https://www.youtube.com/watch?v=ltencqkEGxQ&list=PLLrf_044z4JpIlGkIDn6sdBstsTkKMXU6&index=1) — стали проводить открытие интервью-секции по System Design, где с нуля проектируют мессенджеры, базы данных, твиттеры и фейсбуки.* 

*Более того, на базе этих же каналов существуют книжные клубы, где регулярно устраивают IT-линч по фундаментальным для system design книгам. С [кабаном](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/) и ту, [фиолетовую](https://www.oreilly.com/library/view/technology-strategy-patterns/9781492040866/).*

## Ковбойская арифметика

<Img imageName='offer' alt='offer'/>

« — Говоришь, ты любишь музыку и умеешь считать, по крайней мере, до двух.

— До шести, если речь идёт о рендерах в реакте. 

— Принимай оффер».

*В [Preact](https://preactjs.com/guide/v10/signals/) добавили сигналы.* *Очередной виток оптимизаций ререндеров, минуя разные трюки вокруг memo. На этот раз через добавление реактивного примитива. Учитывая, как активно путешествуют идеи между react’ом и preact’ом, то как скоро “сигналы” окажутся в тру-реакте? Слышал такую идею, что если реакт скрестить с mobx, то получится… Так, это что же получается, мы опять Vue изобрели? Пауза. Занавес.*

## То, что в репозитории указана зависимость, не означает, что там есть её исходники

<Img imageName='deps' alt='deps'/>

« — Что в доме?

— Заглянем. Если начнут стрелять, значит, там что-то ценное.

— Например?

— 200 тысяч долларов, день с упавшими релизами. У меня есть имя автора и список зависимостей: [faker.js и color.js](https://habr.com/ru/post/599767/). Не найдём к утру — на завтрак можно не торопиться. Джентельмены, уверяю, всех накормят свинцом.»

*Уж сколько раз твердили миру не ставить @latest версии зависимостей. Автор может отозвать их одним днём, и к утру ваши деплои превратятся в тыквы. Так и в этот раз автор одним коммитом снёс все исходники библиотеки. «Облегчённая» версия заехала в npm, а потом и в пайплайны. Тут речь не столько о трении капиталов об опенсорсы (скачиваний со стороны энтерпрайзов милиионы, а автору — «хорошего настроения») или борьбе за открытость и доступность любой информации.* 

*Речь о том, насколько устойчив энтерпрайз-колосc на опенсорс-ногах.*

*Тонкой красной нитью упавших пайплайнов начинает приходить мысль об отказоустойчивом, часто [децентрализованном вебе](https://vas3k.ru/blog/unstoppable_web/)*

## Человек веры

<Img imageName='faith' alt='faith'/>

« — Я доверяю трём вещам на этом свете: своему кольту, анисовой водке и сигарам от Дона Хуана, которые всегда были чертовски ароматными. Интересно, Дон Хуан продал свою душу дьяволу, чтобы делать такие классные папиросы? Даже Дева Мария не побрезговала бы. Если бы курила, понятное дело.

— А я доверяю только одной вещи: тому, что ссылка на объект во время рендера будет всегда одна и та же.

— Господи, Бил, ты носишь ремень и подтяжки одновременно — ты же не доверяешь даже собственным штанам! Откуда такая уверенность в ссылках?»

*Скоро можно будет забыть про подтяжки.* *Местные сообщили, что на stage2-границе фронтира встретили караван с пропозалом для иммутабельных версий объектов и массивов, [Record и Tuple](https://github.com/tc39/proposal-record-tuple) Никаких мутаций — внутри только примитивы. А это значит...*

```jsx
const record1 = #{ a: 1, b: 2 } 
const record2 = #{ a: 1, b: 2 }

record1 === record2 // true
// А это значит, что поля сравниваются по значению, а не по ссылке
```

*И, кроме этого, Stage 2 значит, что частью стандарта Record и Tuple станут в течение какого-то конечного времени.*

## Человек науки

<Img imageName='sci' alt='sci'/>

« — Что, старина, всё сидишь, мечтаешь об электроовцах? Идём ко мне на аутсорс. Нужно рожи бандитов рисовать для розыска. Ну или в салуне поможешь меню написать, всё равно там никто читать не умеет».

*В открытую бету в этом году вышел [Github Copilot](https://github.com/features/copilot), в августе активно стали тестировать, что умеет [GPT](https://chat.openai.com/chat). Да что там… постеры к прологу были нарисованы [Midjourney](https://midjourney.com/home/). При этом GPT выдаёт часто убедительные, но неправильные ответы. Если в выборке были только кривые ответы со stackoverflow, то и решение нейронки будет такое же.* 

*К слову, бездушное холодное железо может «обыграть» наше горячее сознание. Дальше цитата из [поста](https://t.me/nikitonsky_pub/431):* 

*«Воображение тут же придумало сценарий апокалипсиса, в котором компьютеры порабощают человечество, просто слегка изменяя выдачу гугла. Несколько «сумасшедших», конечно, помнят, как мир был устроен на самом деле, но им никто не верит, потому что гугл выдаёт другие цифры для, скажем, гравитационной постоянной, температуры кипения воды или расположения Пакистана на карте мира.»*

## Двое против всех

<Img imageName='duel' alt='duel'/>

« — Не надо пистолет, амиго! Это тебе не поможет. Нас здесь двое.

— Эй, амиго! Ты знаешь, что твои красивые `type` и `interface` стоят две тысячи долларов?

— Ага, только вы не похожи на тех, кому они достанутся».

*Пока я писал эту часть, то обнаружил, что [пропозал с аннотациями для типов](https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/) в Javascript уже поднялся в Stage 1. Неужели когда-то мы сможем избавиться хотя бы от части тулинга, связанной со сборкой в конечный билд! Хотя бы для компиляции… Тут лоадер такой, тут сякой, тут с пресетом, тут tsx, а тут на бабеле, а этот — вообще SWC и на Rust’е написан.*

*Если присмотреться к иллюстрации, то можно увидеть, как они прячутся за домами и роятся в тумане.*

## Эпилог

<Img imageName='epilogue' alt='epilogue'/>

Калёное солнце выжигало, плавило песок — кажется, еще чуть-чуть, и он загорится и превратится в стекло — в то самое стекло, которое чудаки в красных робах плавят в своих небольших лавках недалеко от Сан-Антонио. Впрочем, караванщику явно было не до стеклодувов: сударь, обладающий потёртой шляпой и грязным пончо, сонливо покачивался на лошади. Её мерная ходьба сопровождалась тихим полязгиванием латунных шпор и колёс.

Наcтупал 2023 год.