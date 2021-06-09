---
title: '<i>CSS Grid.</i> Практические примеры'
coverImageAlt: 'Иллюстрация, на которой человек собирает стену из разноцветных кирпичиков'
author: 'Никита Голубов'
date: '2021-03-25T00:00:00.000Z'
tag: 'web-development'
---

---

**Б**удущее наступило: CSS Grid поддерживается [всеми современными браузерами](https://caniuse.com/css-grid), девтулзы для работы с ним доступны и [в Firefox](https://mozilladevelopers.github.io/playground/css-grid/03-firefox-devtools/), и [в Хроме](https://developers.google.com/web/tools/chrome-devtools/css/grid), а с автопрефиксером и осторожностью можно использовать гриды даже в IE 10/11.

Но, знакомясь с туториалами, я заметил, что большинство из них фокусируются либо на том, как работают конкретные свойства, либо на том, как сверстать постер или журнальный разворот. Да, это интересно, помогает погрузиться в тему и показывает всю мощь нового инструмента, но как использовать полученные знания в работе?

В этой статье я хочу поделиться накопленным за последний год опытом использования CSS Grid в коммерческих проектах. Ниже я разберу примеры, как применять гриды для вёрстки всей страницы, групп элементов и отдельных компонентов.

Для демонстрации я буду пользоваться девтулзами Хрома:

<Img imageName='devtools' alt='Настройки девтулзов для CSS Grid в Хроме' align='left' />

Если вы пока мало знакомы с гридами, статья всё равно может оказаться полезной, но за подробным описанием свойств и их возможных значений советую обращаться [к гайду от CSS-Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/).

## Колоночная сетка

Начнём с того, как использовать гриды для вёрстки всей страницы. Если вы привыкли верстать стандартной колоночной сеткой (например, [из бутстрапа](https://getbootstrap.com/docs/4.0/layout/grid/)), то гриды с лёгкостью позволяют придерживаться такого подхода.

Для этого достаточно создать грид-контейнер с 12 равными по ширине колонками, а дальше у детей указывать, какие колонки им занять:

```css
.main {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
}

.hero {
  grid-column: 1 / span 12;
}

.title {
  grid-column: 3 / span 4;
}
```

Чтобы адаптировать такую вёрстку под маленькие разрешения, можно заменить сетку на 6-колоночную и обновить позиции элементов:

```css
@media (max-width: 720px) {
  .main {
    grid-template-columns: repeat(6, 1fr);
  }

  .hero {
    grid-column: 1 / span 6;
  }

  .title {
    grid-column: 2 / span 3;
  }
}
```

Пример использования такого подхода можно увидеть [на нашем лендинге](https://csssr.com/ru):

<Img imageName='landing-desktop' alt='Скриншот сайта csssr.com на десктопном разрешении' align='left' />
<Caption size='s'>
    12-колоночная сетка на десктопном разрешении
</Caption>

<Img imageName='landing-mobile' alt='Скриншот сайта csssr.com на мобильном разрешении' align='left' />
<Caption size='s'>
    6-колоночная сетка на мобильном разрешении
</Caption>

С CSS Grid можно не ограничиваться колонками и задать количество строк (`grid-template-rows`) тоже, чтобы иметь возможность точно позиционировать каждый элемент (`grid-row`).

## Разметка страницы на области

Возможности CSS Grid не заканчиваются на колоночной сетке и включают новый способ размечать страницу. С помощью `grid-template-areas` можно разделить страницу на области, а части страницы раскидать по этим областям:

```css
body {
  display: grid;
  grid-template-areas:
    'header header'
    'menu   content'
    'footer footer';
  grid-template-columns: 12rem 1fr;
  grid-template-rows: 5rem 1fr 3rem;
}

header {
  grid-area: header;
}

article {
  grid-area: content;
}

aside {
  grid-area: menu;
}

footer {
  grid-area: footer;
}
```

<Img imageName='page-areas-desktop' alt='Разметка страницы по областям на десктопном разрешении' align='left' />

На флексах для такого простого лейаута пришлось бы делать несколько вложенных обёрток, а информация о размерах блоков размазалась бы по обёрткам и их детям. C CSS Grid всё это лежит в одном месте — в контейнере. При этом описание областей в CSS даёт представление о том, как результат будет выглядеть в браузере.

Более того, в такую разметку легко добавить адаптив, ничего не меняя в детях:

```css
@media (max-width: 600px) {
  body {
    grid-template-areas:
      'header'
      'menu'
      'content'
      'footer';
    grid-template-columns: 1fr;
    grid-template-rows: 5rem auto 1fr 3rem;
  }
}
```

<Img imageName='page-areas-mobile' alt='Разметка страницы по областям на мобильном разрешении' align='left' />

Вот полный код примера:

<p>
<iframe height="420" style="width: 100%;" scrolling="no" title="1. Simple Page Layout" src="https://codepen.io/nekitk/embed/zYrmeNW?height=420&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/nekitk/pen/zYrmeNW'>1. Simple Page Layout</a> by nekitk
  (<a href='https://codepen.io/nekitk'>@nekitk</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</p>

## Витрина карточек

От лейаута страницы переходим к её содержимому.

Витрина — пожалуй, самый часто встречаемый контейнер для однородных элементов. С помощью неё могут отображаться товары интернет-магазина, новости, фотографии в альбоме, в общем, что угодно прямоугольной формы.

Верстая такую витрину на флексах, я каждый раз сталкивался с одними и теми же проблемами:

- Как задать отступы между карточками? Есть свойство gap, но оно пока ещё [плохо поддерживается](https://caniuse.com/flexbox-gap). Поэтому приходится давать всем элементам отступы друг от друга, а у их контейнера отрицательным отступом компенсируем лишние отступы крайних элементов.
- Как сделать так, чтобы карточки в последнем ряду не растягивались на полную ширину? Флекс будет тянуть элемент на всё доступное место, так что придётся либо хардкодить ширину элементов, либо заполнять последнюю строку невидимыми элементами.
- Как сделать адаптив? Нужно опытным путём вычислить ширину, на которой наши карточки перестают нормально вмещаться, и на ней поправить значения ширины для карточек, чтобы было меньше столбцов.

Гриды решают все эти проблемы буквально в 3 строки:

```css
main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
}
```

<Img src='/images/dont-resize/ru/css-grid-by-example/minmax-adaptive/all.gif' alt='Гифка, где при сужении экрана в сетке становится всё меньше колонок' withOutProcessing align='left' />

- Отступы между элементами явно указаны в `grid-gap`.
- Карточки в последнем ряду будут занимать свои колонки и не будут растягиваться.
- Адаптив без медиа-запросов: у карточки указана минимально допустимая ширина 250px, а дальше сетка уже сама считает, сколько таких карточек поместится в строку.

Вот полный код примера:

<p>
<iframe height="370" style="width: 100%;" scrolling="no" title="6. Responsive items list" src="https://codepen.io/nekitk/embed/NWxLKYw?height=370&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/nekitk/pen/NWxLKYw'>6. Responsive items list</a> by nekitk
  (<a href='https://codepen.io/nekitk'>@nekitk</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</p>

Другие варианты витрин на гридах:

- [CodePen витрины с горизонтальным скроллом при сужении экрана](https://codepen.io/nekitk/pen/wvMYWyX?editors=1100);
- [CodePen витрины с карточками разных размеров](https://codepen.io/nekitk/pen/gOPdzdV?editors=1100);
- [CodePen с masonry grid](https://codepen.io/nekitk/pen/LYGgqNg?editors=1100);
- [статья в CSS-Tricks](https://css-tricks.com/responsive-grid-magazine-layout-in-just-20-lines-of-css/), где подробно разбирается пример адаптивной сетки с карточками разных размеров.

## Форма

Типичная форма состоит из 2 столбцов: в левом идут названия полей, в правом — инпуты. Проблема с таким расположением иногда заключается в том, что мы не знаем, какой длины будут названия полей, но хотим, чтобы все строки формы были выровнены.

Сделать такое на флексах можно, только захардкодив ширину левой колонки, чтобы в каждой строке она была одинаковой. Можно сделать на table, но это будет использованием не по назначению. И тут на помощь приходит CSS Grid:

```css
form {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
  align-items: baseline;
}
```

<Img imageName='form-horizontal' alt='Форма с горизонтальным расположением лейблов и инпутов' align='left' />

Левой колонке мы задаём ширину `auto`, чтобы она подстраивалась под длину лейблов, а правой колонке выделяем `1fr`, то есть всё оставшееся от левой колонки место.

Чтобы сделать форму вертикальной на мобильных, мы можем заменить сетку на 1-колоночную и уменьшить отступ между лейблом и инпутом, образовавшийся из-за `grid-gap`:

```css
@media (max-width: 500px) {
  form {
    grid-template-columns: 1fr;
  }
  label {
    margin-bottom: -0.75rem;
  }
}
```

<Img imageName='form-vertical' alt='Форма с вертикальным расположением лейблов и инпутов' align='left' />

И на десктопном, и на мобильном разрешениях кнопка сабмита занимает полную ширину контейнера. Это происходит благодаря следующей строчке:

```css
button {
  grid-column: 1 / -1;
}
```

Эта запись означает, что кнопка будет расположена между самой первой вертикальной линией сетки (1) и самой последней (-1). То есть она будет занимать целую строку, независимо от того, сколько в сетке столбцов.

Вот полный код примера:

<p>
<iframe height="360" style="width: 100%;" scrolling="no" title="10. Form" src="https://codepen.io/nekitk/embed/LYGMpNo?height=360&theme-id=light&default-tab=result,css" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/nekitk/pen/LYGMpNo'>10. Form</a> by nekitk
  (<a href='https://codepen.io/nekitk'>@nekitk</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</p>

## Группировка ячеек

В форме может понадобиться объединить инпуты в `<fieldset>`, но с гридами не так очевидно, как это сделать. Грид (как и флекс) описывает только расположение своих детей. Если в детей вложены другие элементы, то на них грид уже не влияет. В будущем мы сможем решать такие задачи с помощью [subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid), но как быть сейчас?

Я пользуюсь для таких целей [`display: contents`](https://developer.mozilla.org/en-US/docs/Web/CSS/display#box), но стоит учитывать, что у него:

- [слабее поддержка](https://caniuse.com/css-display-contents), чем у гридов (в основном из-за IE);
- [есть проблемы с доступностью](https://developer.mozilla.org/en-US/docs/Web/CSS/display#display_contents).

Элемент с `display: contents` при рендеринге заменяется своими детьми, поэтому если такой элемент лежит внутри грид-контейнера, то его дети будут располагаться на сетке так, будто они сами лежат внутри грид-контейнера.

Так как сам элемент с `display: contents` не рендерится, то и визуальных свойств у него быть не может. Но зато он может реагировать на события мыши и определять css-переменные. Вот пример, как с помощью такого элемента реализовать ховер на группу ячеек грида:

<p>
<iframe height="540" style="width: 100%;" scrolling="no" title="15. Cells group hover" src="https://codepen.io/nekitk/embed/RwrEYJx?height=540&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/nekitk/pen/RwrEYJx'>15. Cells group hover</a> by nekitk
  (<a href='https://codepen.io/nekitk'>@nekitk</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</p>

## Карточка с вариациями отображения

Теперь переходим к конечным компонентам, при вёрстке которых нас тоже может выручить грид.

Один из таких компонентов — информационная карточка (например, товара или объявления). Часто у таких карточек есть не один вариант отображения, а сразу несколько. Например, нам нужно реализовать адаптив, красиво утрамбовывая элементы карточки в меньший объём. Или предоставить несколько вариантов отображения для разных мест размещения: на витрине, в рекламе или в попапе предпросмотра.

Гриды позволяют красиво решать такие задачи, даже не меняя HTML-разметку. Для примера разберём вот такую карточку объявления о сдаче в аренду квартиры:

<Img imageName='card-size-l' alt='Карточка аренды квартиры, размер L' align='left' />
<Caption size='s'>
    Карточка размера L
</Caption>

```css
.card.size_l {
  grid-template-areas:
    'photo info    price'
    'photo desc    desc'
    'photo actions date';
  grid-template-columns: 20rem 1fr max-content;
}
```

<Img imageName='card-size-m' alt='Карточка аренды квартиры, размер M' align='left' />
<Caption size='s'>
    Карточка размера M
</Caption>

```css
.card.size_m {
  grid-template-areas:
    'photo  photo'
    'info   price'
    'info   actions'
    'desc   desc';
  grid-template-columns: 1fr max-content;
}
```

<Img imageName='card-size-s' alt='Карточка аренды квартиры, размер S' align='left' />
<Caption size='s'>
    Карточка размера S
</Caption>

```css
.card.size_s {
  grid-template-areas:
    'photo'
    'info';
}
```

[CodePen с полным кодом примера](https://codepen.io/nekitk/pen/OJMGaNq?editors=1100)

Все 3 состояния используют одну HTML-разметку, но в CSS у них разная конфигурация областей и положения элементов. Обратите внимание, что на размерах M и S некоторые блоки располагаются друг поверх друга. Это тоже сделано на гридах, но уже с помощью наложения.

### Наложение элементов в одной области

Приём в том, что мы разных детей складываем в одну и ту же `grid-area`. При этом они не располагаются, как обычные блоки, друг под другом, а накладываются поверх. Дальше с помощью `align-self`/`justify-self` можно поставить каждого ребёнка в свой угол:

<Img imageName='card-photo' alt='Пример расположения нескольких элементов в одной области' align='left' />

```css
.photo {
  grid-area: photo;
}

.size_s .price {
  grid-area: photo;
  align-self: start;
  justify-self: stretch;
}

.size_s .date {
  grid-area: photo;
  align-self: end;
  justify-self: start;
}

.size_s .actions {
  grid-area: photo;
  justify-self: end;
  align-self: end;
}
```

### Частичное наложение элементов

Если располагать элементы не по областям, а назначать им положение в сетке с помощью `grid-row`/`grid-column`, то наложение элементов на сетке можно сделать частичным:

<p>
<iframe height="480" style="width: 100%;" scrolling="no" title="13. Overlap example" src="https://codepen.io/nekitk/embed/bGpGqgO?height=480&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/nekitk/pen/bGpGqgO'>13. Overlap example</a> by nekitk
  (<a href='https://codepen.io/nekitk'>@nekitk</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</p>

В данном примере кнопка частично накладывается на фото, но избегает наложения на текст справа от неё. С абсолютным позиционированием достигнуть такого эффекта было бы сложнее, так как кнопка была бы вырвана из потока и наезжала на текст.

## Столбчатая диаграмма

Ещё один пример из практики — график столбиками (bar chart). Тут использование грида позволяет каждому сегменту графика пропорционально растягивать всю колонку:

<Img imageName='barchart' alt='Столбчатая диаграмма на гридах' align='left' />

- Если в какой-то группе станет больше столбиков, то место под подпись тоже увеличится.
- И наоборот — если где-то будет длинная подпись, то увеличится место под столбики.

В реальной жизни количество сегментов было динамическое, так что значение для свойства `grid-template-columns` формировалось в JS. Тут для упрощения возьмём график из 3 сегментов с разным количеством столбиков в каждом. Для каждой вертикальной и горизонтальной линии указываем название, чтобы проще было располагать на этих линиях элементы:

```css
.bar-chart {
  display: grid;
  grid-template-columns:
    [left] auto
    [bar1] auto
    [bar2] auto
    [bar3] auto
    [right] auto;
  grid-template-rows:
    [top] auto
    [center] 10rem
    [bottom] auto;
}

.axis {
  grid-row: center;
  grid-column: left;
}

.unit {
  grid-row: top;
  grid-column: left;
}
```

Теперь можно довольно легко добавить вариации положений основных элементов графика: лейблов, оси, единиц измерения. Благодаря именованным линиям, можно явно описывать, на какую линию мы хотим переместить элемент:

```css
.axisOnRight .axis {
  grid-column: right;
}

.unitOnBottom .unit {
  grid-row: bottom;
}
```

Попробовать переключение в деле можно, покликав на кнопки под графиком:

<p>
<iframe height="465" style="width: 100%;" scrolling="no" title="11. BarChart" src="https://codepen.io/nekitk/embed/gOPqgNg?height=465&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/nekitk/pen/gOPqgNg'>11. BarChart</a> by nekitk
  (<a href='https://codepen.io/nekitk'>@nekitk</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
</p>

## Ложки дёгтя

Используя CSS Grid, стоит учитывать и некоторые ограничения:

- Анимации размера столбцов/строк предусмотрены в спеке, но [поддерживаются только в Firefox](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns#browser_compatibility). Впрочем, можно дать столбцу размер `auto`, а анимировать размер его содержимого.
- [Subgrid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid) тоже пока поддерживается [только в Firefox](https://caniuse.com/css-subgrid). Его появление в остальных браузерах откроет возможности для новых подходов и упростит группировку элементов в HTML. Также с помощью subgrid можно будет вообще всю страницу уложить в одну сетку. Так что ждём.
- С осторожностью используйте гриды в случаях, когда в них вложены флексы и размер контента может динамически меняться. Это может вызвать [проблемы с производительностью из-за большого количества пересчётов](https://twitter.com/tenphi/status/1365273251937714177). Держите руку на пульсе счётчика FPS и вместо `Nfr` используйте `minmax(Xpx, Nfr)`, чтобы [упростить пересчёт](https://twitter.com/tenphi/status/1365273621279686663).

## Заключение

По итогам года с гридами могу сказать, что использование CSS Grid не только упростило мою работу, но и сделало её интереснее. Гриды не пытаются заменить флексбокс или таблицы, а дают верстальщикам современный и мощный инструмент. Когда удаётся использовать гриды для подходящей задачи, решение обычно получается простым и наглядным.

Надеюсь, на этих примерах мне удалось показать пользу гридов, а кого-то даже вдохновить их попробовать.
