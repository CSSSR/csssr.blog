---
title: 'Рекурсия для неискушённых'
coverImageAlt: 'Учим ФП, не отходя от столярного станка.'
author: 'vislogurov'
date: '2018-09-06T00:00:00.000Z'
tag: 'web-development'
---
<Subtitle>
 Вместо предисловия
</Subtitle>

**В**незапно, как подводная лодка в степях Украины, спустя два года молчания, с новым перлом на связь выходит главный фронтенд-пират CSSSR Максон «Черная борода»!

![image](/images/recursion/intro.jpg)

Сейчас настало такое время, что в программирование, и в разработку интерфейсов в частности, стали приходить люди, не имеющие академического образования в области разработки ПО. Для малого и среднего бизнеса это, наверное, хорошо. Не нужно раскошеливаться на программистов, уже имеющих минимум 4 года работы за плечами. Но вот суровый энтерпрайз в этом отношении менее лоялен.
Компиляция, интерпретация, AST, полиморфизм, SOLID, фасад, рекурсия — близкие выпускнику-программисту понятия, и в суровом энтерпрайзе он чувствует себя как минимум не одиноким.

Иная же ситуация с нами, реакт-программистами (да-да, и я тоже). Наступает момент, когда разработка интерфейсов требует не только вёрстки и создания «тупых» компонентов, но и знания фундаментальных инструментов программирования. И, к сожалению, такие метаморфозы часто не под силу стремящемуся из реакт-программистов в классические программисты. Литература, которая есть по фундаментальным основам программирования, безэмоциональна и беспощадна к новичкам. Для студентов-программистов ситуация иная, т.к. они варятся в этом «соку» несколько лет, и очередной бестселлер от дяди Боба или SICP не покажется им чем-то инопланетным.

Я попытаюсь без лишнего официоза, и при этом уделяя время деталям, познакомить всех причастных к проблеме «реакт-программистов» с одной из самых фундаментальных концепций программирования — рекурсией.

### О значимости
Если суровый энтерпрайз — значит работа с данными. Если данные — то, скорее всего, в виде деревьев. Для работы с деревьями компьютерный бог не придумал ещё ничего лучше рекурсии. Но для начала нам нужно узнать врага в лицо, понять, как он работает изнутри. Ниже об этом.

### Иди, вон, на <span style="text-decoration:line-through;">кошках</span> матрёшках тренируйся

Не переживайте — числа Фибоначчи, факториалы и прочие бояны — все будут рассмотрены. Матрёшка, а точнее процесс её изготовления идеально подходит для визуализации концепции рекурсии и процессов, происходящих внури неё. Напоминаю, что главной характеристикой матрёшки является количество матрёшек внутри — то есть вложенность, глубина матрёшки. Обозначим эту величину как n.

Представим себе двухэтажное здание со столярной мастерской на втором этаже. В мастерскую прилетает заказ на изготовление матрёшки c `n = 5`. Что происходит далее: мастер берёт и делает первую, самую большую матрёшку. Но работа ещё не окончена, так как матрёшка внутри пустая. Далее мастер вызывает своего подмастерье и ставит ему задачу сделать матрёшку, но уже со вложенностью 4, т.е `n — 1`. Какие аналогии мы уже можем привести из реального программирования? `вызывает своего подмастерье и ставит ему задачу сделать матрёшку` — по сути это вызов подфункции, или по-другому: рекурсивный вызов функции. Подмастерье делает матрёшку со вложенностью 4 и также делегирует остальную работу по созданию матрёшки меньшей вложенности другому подмастерью. И так далее происходит передача работы, пока не будет озадачен последний подмастерье, который сделает последнюю, шестую матрёшку. Достигнута ситуация, когда не трубуется создавать новых, ещё меньших матрёшек, поэтому последняя матрёшка делается неделимой.

Как только работа закончена, матрёшку возвращают к предыдущему подмастерью, затем к предыдущему предыдущего и так до тех пор, пока не будут собраны все матрёшки.

![image](/images/recursion/matr.png)

Что тут важно подчеркнуть? На матрёшках мы изобразили два главных требования к рекурсии. А именно: рекуррентный и базовый случай. Рекуррентный случай — это то, что вообще должна делать рекурсивная функция, это её описание. Конкретно в нашем примере: создание матрёшки со вложенностью `n - 1`. Если рекуррентный случай не описан, то возникнет ситуация, при которой обращение идёт не к подмастерью, а к мастеру. Мастер вызывает мастера, мастер вызывает мастера, мастер вызывает мастера — ничего не происходит, наш алгоритм не работает, проект «матрёшка» стоит на месте.

Базовый случай - это то, к чему должна стремиться рекурсия. По его достижению прекращается выполнение работы или вычисления, и полученный результат возвращается обратно. Если мы не укажем базовый случай, то возникнет такая ситуация, когда подмастерья будут приходить и приходить, и в конце концов мастерская рухнет со второго этажа прямо на кошачий питомник. В реальной жизни мы получим «падение программы» и `Uncaught RangeError: Maximum call stack size exceeded`, об этой ошибке мы ещё поговорим позже.

Вот как может выглядеть этот процесс уже на JS:
```js
const martyoshkaCreate = n => {
  if (n === 1) {
    return console.log('Неделимая матрёшка')
  }

  else {
    console.log('Верхняя половина матрёшки', n);
    martyoshkaCreate( n -1 );
    console.log('Нижняя половина матрёшки', n);
  }
}

martyoshkaCreate(6);
```

*Важно* первым же делом проверить, _а не базовый ли это случай? Не последняя ли матрёшка?_ Иначе рискуем рухнуть на питомник. *Базовый случай всегда проверяется первым*. Если нет, то строгаем матрёшки дальше.

Да, как можно заметить, подвызов всегда проще вызова. Т.е наш алгоритм идёт к уменьшению сложности до тех пор, пока вычисление уже не потребуется, т.к. уже нечего вычислять.

#### Декларативность

Нужно сказать пару слов о том, какая польза от рекурсии, если уже есть циклы. Уильям из Оккама недоволен.

В математике есть специальное обозначение для суммы нескольких чисел — `Σ` (сигма).

`Σ9` гораздо проще для восприятия, компактнее и читабельнее, чем `1+2+3+4+5+6+7+8+9`. Так вот, рекурсия — это сигма в мире программирования. Нам важен результат действия, но нам необязательно смотреть под капот и видеть потроха действия. Нам не нужно проходить руками по массиву, объявлять переменную, что-то делать и потом сохранять этот результат. Говоря на языке JS, мы можем сказать, например:

«Верни новый массив» — [map()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

«Отфильтруй массив» — [filter()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

«Преврати массив в Мегазорда» — [reduce()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

Напомню, что каждый из этих методов корнями уходит в ФП, где в основе всего лежит рекурсия. Всё иммутабельно, читабельно. Да и вообще стоит сказать, что есть языки программирования ([Haskell вот](https://ru.wikipedia.org/wiki/Haskell)), где вообще нет не только переменных, но и циклов. Только рекурсия, только хардкор!

![image](/images/recursion/zoar.png)

<Note>
<p>
	— А что писать-то?
</p>
<p>
	— А что хочешь, то и пиши.
</p>
</Note>

Как удачно выхваченная из контекста «Дневного дозора» фраза описывает рекурсию! «Что хочешь [получить], то и пиши». Рекурсия гораздо более юзерфрендли. Нам проще думать и рассуждать концепциями рекурсии. Декларативность рекурсии — важный, если не важнейший её плюс. Когда-нибудь нейросети смогут не только подражать [Летову](https://music.yandex.ru/artist/4445922), но и писать код в суровом энтерпрайзе. Но пока с кодом работают люди, приоритетнее будет его читабельность и поддержка, а не скорость исполнения.

Ещё пара примеров, и двинемся дальше. Например, мы хотим найти сумму чисел в массиве:

Через циклы:

```js
const sumArrayItems = list => {
    let result = 0;
    for (var i = 0; i++; i <= list.length) {
        result += list[i];
    }
    return result;
}
```

Рекурсивно:

```js
const sumArrayItems = list => {
    switch(list.length) {
        case 0:
            return 0; // массив пустой
        case 1:
            return list[0]; // в массиве один элемент
        default:
            return list[0] + sumArrayItems(list.slice(1)); // в противном случае результат - это первый элемент массива плюс оставшиеся элементы
    }
}
```

Классика декларативного жанра: мы не пишем подробно, что именно нужно сделать с каждым элементом. Мы хотим результат в зависимости от условий. Что хочу получить, то и пишу.

Ну и высший уровень — это использовние более сильных абстракций над рекурсией:

```js
function reduce(arr, fn, initial) {
  if (!arr.length)
    return initial;

  if (arr.length == 1)
    return fn(initial, arr[0]);

  return reduce(arr.slice(1), fn, fn(initial, arr[0]));
}
```

*Примечание*: самостоятельно писать ни [map](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map), ни [filter](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), ни [reduce](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) не нужно. В JavaScript всё уже идёт из коробки. И как можно заметить на примере `reduce`, эти абстракции построены на рекурсии. Так они работают в функциональных языках, где рекурсия — основной инструмент вычислений.

```js
const sumArrayItems = list => list.reduce((sum, item) => sum + item, 0);
```

Одна строка, ничего лишнего.

И ещё раз о деревьях, но уже подробнее. Собственно говоря, для деревьев пока не придумали ничего лучше рекурсии. Из полезного инструмента рекурсия превращается в жемчужину, когда мы имеем дело с деревьями.

Стандартный боян: нужно реализовать функцию, принимающую дерево и возвращающую массив листьев.

Мы хотим получить что-то такое:
```js
getLeaves(tree);
/*[
    { name: 'child1' },
    { name: 'child2' },
    { name: 'child3' },
    { name: 'child4' },
    { name: 'child5' },
    { name: 'child6' },
]*/
```

Через циклы:

```js
// Случай, когда нет поддеревьев, дерево не ветвится:
const getChildren = tree => tree.children;

// У дерева один уровень вложенности:
const getChildren = tree => {
    const { children } = tree;
    let result = [];

    for (var i = 0; i++; i < children.length - 1) {
        const child = children[i];
        if (child.children) {
            for (var j = 0; j++; j < child.children.length - 1) {
                const grandChild = child.children[j];
                result.push(grandChild);
            }
        } else {
            result.push(child);
        }
    }

    return result;
}

// У дерева два уровня:
const getChildren = tree => {
    const { children } = tree;
    let result = [];

    for (var i = 0; i++; i < children.length - 1) {
        const child = children[i];
        if (child.children) {
            for (var j = 0; j++; j < child.children.length - 1) {
                const grandChild = child.children[j];
                if (grandChild.children) {
                    for (var k = 0; k++; j < grandChild.children.length - 1) {
                        const grandGrandChild = grandChild.children[j];
                        result.push(grandGrandChild);
                    }
                } else {
                    result.push(grandChild);
                }
            }
        } else {
            result.push(child);
        }
    }

    return result;
}
```

И это ещё детский сад. На уровнях три и более начинается самый настоящий шабаш макарон и черных техник. И это мы только пытаемся получить массив листьев, ни о каких манипуляциях с полученным массивом не идёт и речи.

То же самое, но уже рекурсивно:

```js
const getLeaves = tree => {
    if (!tree.children) { // дерево без вложенностей
        return tree;
    }

    return tree.children // в ином случае это листья его потомков
        .map(getLeaves) // получим их в виде массивов
        .reduce((acc, item) => acc.concat(item), []); // и сведём их к одномерному массиву с помощью concat [1,2,3].concat(4) => [1,2,3,4] and [1,2,3].concat([4]) => [1,2,3,4]
}
```

Вот и всё, и это решение работает для любых уровней вложенности.

Ещё раз обращу внимание: рекурсия — это не панацея и не серебрянная пуля от всех проблем. Существуют проблемы, которые гораздо проще решаются циклами. Более того, чаще всего рекурсивное решение менее производительно (об этом далее).

### Стек

Без лишних слов, самый большой недостаток рекурсии: `Uncaught RangeError: Maximum call stack size exceeded`

Вот сейчас самое время заглянуть под капот и понять, почему же это происходит. Тут нам вновь стоит обратиться в столярную мастерскую.

Случаются заказы, когда, например, не было указано базовое условие или нам нужна матрёшка [планковской длины](https://ru.wikipedia.org/wiki/%D0%9F%D0%BB%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%B4%D0%BB%D0%B8%D0%BD%D0%B0), и тогда подмастерий набивается в мастерскую так много, что стены и перекрытия не выдерживают и мастерская падает на кошачий питомник.

![image](/images/recursion/pechal.png)

К сожалению, в реальном мире ещё не придумали способ предотвратить такую кОтастрофу, кроме как уволить всех подмастерий и не делать матрёшек вообще.
Во фронтенде немного иначе: `RangeError` — это защита JS-движка от падения нашей программы. Как только движок видит, что стек начинает странно расти, выполнение программы прерывается. Движок выбрасывает эту ошибку, предотвращая переполнение памяти.

Разбираться в этом нужно с понимания того, что такое стек вызова. Это среда, в которой выполняются функции. Каждый вызов функции влечёт за собой выделение фрагмента (фрейма) памяти. Фрейм содержит определённую информацию о текущем состоянии выполнения функции, включая значения любых переменных. Причина, по которой эта информация должна храниться во фрейме, состоит в том, что функция может вызывать другую функцию, которая приостанавливает текущую функцию. Когда другая функция заканчивается, движку необходимо восстановить точное состояние с момента его приостановки.

Давайте визуализируем этот процесс в общем (без циклов/рекурсий) случае.

Есть функция:

```js
const a = 4;

function foo(x) {
  const b = a * 4;

  function bar(y) {
    const c = y * b;

    return c;
  }

  return bar(b);
}

console.log(foo(a));
```

_Диаграммы такого вида украдены мною [отсюда](https://www.datchley.name/recursion-tail-calls-and-trampolines/)._

![image](/images/recursion/frames1.png)

Тут GC — это глобальный контекст выполнения, тот, в котором работает интерпретатор JS. Стрелкой указан фрейм памяти, который выделяется под нужды программы. Наш код имеет две функции — `foo` и `bar`, существование которых повлекло создание двух таких фреймов памяти. Если бы `bar()` вызывал внутри себя ещё одну функцию, то сверху оказался бы ещё один фрейм. И так далее.

Когда функция закачивает свою работу, её фрейм удаляется, выпадает из стека.

Вот, кажется, вся теория по стеку, которая нам нужна. Теперь посмотрим, как ведет себя стек при работе с циклами и рекурсиями.

#### Цикл

Есть функция, возвращающая нам массив чисел, находящийся между заданными точками:

```js
function range(s, e) {
    var res = [];

    while (s != e) {
        res.push(s);
        s < e ? s++ : s--;
    }
    res.push(s);
    return res;
}
```

Вызвав `range(1,3);`, мы получим такую диаграмму:

![image](/images/recursion/frames2.png)

Ничего удивительного, алгоритм работает просто и эффективно расходует память (создался только один фрейм).

Иная ситуация будет, если мы перепишем функцию в рекурсивный вид:

```js
function range(s, e) {
  var res = [];

  res.push(s);
  return s == e ? res : res.concat(range(s<e ? ++s : --s, e));
}

```

![image](/images/recursion/frame3.png)

Стек начинает расти. Ну и что? Чтобы это стало проблемой, мы должны получить тысячи вызовов в контексте. В современных реалиях такая ситуация практически невозможна. Но только не в случае с рекурсией.

```js
range(1, 34556); // Maximum call stack size exceeded
```

В общем-то ещё не произошло ничего страшного, но движок, анализируя лавинообразный рост стека понимает, что что-то пошло не так, и останавливает выполнение программы.

Вспоминаете? `...подмастерий набивается в мастерскую так много, что стены и перекрытия не выдерживают и мастерская падает на кошачий питомник...`

![image](/images/recursion/flash.png)

Пора озвучить главный недостаток рекурсии: расход памяти. Далее будут описаны способы избежать роста стека и гибели кошек заодно.

#### Хвостовые вызовы

Надо сказать, что сама идея хвостовых вызовов не нова и напрямую не связана ни с рекурсией, ни с JS. Еще в 1960-х годах, когда компьютеры были великанами, было сделано важное наблюдение — если любой вызов является последней операцией перед возвратом из функции, то стек нам не нужен.
Если рекурсивный вызов является последней операцией перед выходом из вызывающей функции, и результатом вызывающей функции должен стать результат, который вернёт рекурсивный вызов, то сохранение контекста уже не имеет значения — ни параметры, ни локальные переменные использоваться уже не будут, а [адрес возврата](https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B5%D0%BA_%D0%B2%D1%8B%D0%B7%D0%BE%D0%B2%D0%BE%D0%B2) уже находится в стеке.
Ещё раз: если вызов `bar` из `baz` происходит в самом конце выполнения `baz` (иначе говоря «в хвосте»), то стек вызовов для `baz` не нужен вовсе.

Хвостовой вызов выглядит так, и никак иначе (чистый хвостовой вызов aka Proper Tail Call aka PTC):

```js
return foo( .. );
```

Поэтому вот это ...

```js
foo();
return;

// или

var x = foo( .. );
return x;

// или

return 1 + foo( .. ) // для таких трюков нам необходимо поддерживать стек;
```
... не хвостовые вызовы.

Приведение кода к хвостовому вызову называется оптимизацией хвостового вызова (далее по тексту TCO - Tail Call Optimization). TCO по умолчанию есть во многих языках, активно использующих рекурсию - например в Haskell. Там компилятор, видя вызов в «хвосте» (tail call position), применяет оптимизацию, приводя рекурсию к циклу.

Выглядит это так:

```js
function range(s, e, res) {
  res = res || [];
  res.push(s);
  return s == e ? res : range(s<e ? ++s : --s, e, res); // хвостовой рекурсивный вызов...
}

// ...и применение TCO
function range(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var s = _x,
        e = _x2,
        res = _x3;
    _again = false;

    res = res || [];
    res.push(s);
    if (s == e) {
      return res;
    } else {
      _x = s < e ? ++s : --s;
      _x2 = e;
      _x3 = res;
      _again = true;
      continue _function;
    }
  }
}
```
Непременно нужно отметить, что TCO-версия получена с помощью Babel и лишь отчасти отражает действительный результат оптимизации компилятором. Но суть передана на 100% верно: рекурсия будет превращена в цикл. Реальный результат в виде ассемблерного кода слишком низкоуровневый, чтобы человек смог его осилить.

Получается, что ТCO в случае рекурсии решает главную проблему — потребление памяти. Это не значит, что программа будет работать быстрее, зачастую хвостовые вызовы работают медленее обычных. И в этом плане TCO не является оптимизацией в её привычном понимании — оптимизацией скорости работы. Но TCO позволяет нам использовать рекурсию там, где это необходимо, не беспокоясь о переполнении стека. А это важнее скорости, ибо, как уже писалось, рекурсия гораздо более декларативна: `Что хочу получить, то и пишу.`

Ну и конечно же, в мире фронтенда TCO не было до ES6) Вспоминается старик Крокфорд:

Any sufficiently interesting JavaScript library contains an ad hoc, informally-specified, bug-ridden, slow implementation of half of Haskell.
-- <cite>Douglas Crockford</cite>

«Любая достаточно интересная библиотека JavaScript содержит забагованную, плохо документированную, медленную реализацию половины Haskell».

Тут, в общем-то, впору заканчивать статью: используйте [Elm](http://elm-lang.org/) во фронтенде и не парьтесь насчет TCO, иммутабельности и типизации - всё идёт из коробки.

С вами был фронтенд-пират из CSSSR! Читайте наш блог и берегите себя!

<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

![image](/images/recursion/troll.png)

#### ... продолжение для тех, кому Elm почему-то не подошёл

С приходом ES6 появилась возможность TCO и для JavaScript:

```js
function range(s, e, res) {
  res = res || [];
  res.push(s);
  return s == e ? res : range(s<e ? ++s : --s, e, res);
}
```

И посмотрим, как же теперь будет выглядеть использование стека:

![image](/images/recursion/frames4.png)

Пунктир — это TCO. Как видно из диаграммы, нам теперь не нужны _все_ фреймы вызовов, важен только последний, хвостовой. Происходит переиспользование текущего контекста для доступа к переменным прошлых вызовов. Стек больше не растёт.

Однако что-то пошло не так, и поддержка TCO [была выпилена из 8-ой ноды](https://stackoverflow.com/questions/42788139/es6-tail-recursion-optimisation-stack-overflow/42788286#42788286). Спорное решение, и судьба TCO в дальнейшем неизвестна(

Если хотите эффективно использовать рекурсию у себя в проектах — либо оставайтесь на шестой ноде, либо используйте ...

#### ...трамплины

Суть метода заключается в создании утилиты (трамплина), представляющей собой [функцию высшего порядка](https://ru.wikipedia.org/wiki/%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D1%8F_%D0%B2%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE_%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0). Основа работы этой функции — [ленивые вычисления](https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%BD%D0%B8%D0%B2%D1%8B%D0%B5_%D0%B2%D1%8B%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F): вычисления откладываются до того момента, пока не понадобится их результат.

```js
function trampoline(fn){
    return function(){
        var res = fn.apply(this, arguments);
        while(res instanceof Function){
            res = res();
        }
        return res;
    }
}
```
Идет проверка того, что нам возвращается — функция (рекурсивные вызовы) или результат (последняя матрёшка)? Как только нам возвращается не функция, цикл прекращает работу, трамплин срабатывает и возвращает искомое значение.

У этого подхода есть ряд преимуществ...
- глубина стека не выходит за пределы единицы, потому что вместо вызова функции мы возвращаем её саму;
- мы не зависим от окружения, в котором исполняется наш код (ES5 или старшие версии ноды).

...и недостатков
- трамплины работают медленее чисто итеративного варианта или TCO варианта: в угоду безопасности стека будет тратиться память на работу замыканий;
- исходя из сути трамплина, мы получаем правило, по которому должна возвращаться функция, возвращающая функцию (или thunk), вместо вызова функции.

Т.е. необходимо переписать функцию в такой вид:

```js
function range(s, e, res) {
  res = res || [];
  res.push(s);

  return s == e ? res : function() { return range(s<e ? ++s : --s, e, res); };
}

trampoline(range)(1,4); // [1,2,3,4]
```

И посмотрим на диаграмму его выполнения:

![image](/images/recursion/frames5.png)

К слову, вот ещё более каноничный, в реалиях ES6, вариант трамплина:

```js
const sum = (array) => {
    const loop = (array, result = 0) =>
        () => { // вместо выполнения этого кода мы возвращаем функцию, которая выполнит его позже
            if (!array.length) {
                return result;
            }
            const [first, ...rest] = array;
            return loop(rest, first + result);
        };

    let recursion = loop(array);

    // каждый рекурсивный вызов увеличивает число шагов
    while (typeof recursion === 'function') {
        recursion = recursion(); // выполняем текущий шаг и получаем следующий
    }

    // по завершении последнего шага возвращаем результат
    return recursion;
}
```
### Заключение
Выводов сделано достаточно по ходу статьи, но один из них стоит подчеркнуть ещё раз.

Рекурсия — это не серебряная пуля и не панацея. На всякий случай напоминаю, что читаемость кода является нашей главной целью. Если рекурсия, наряду с описанными здесь стратегиями, приводит к тому, что код становится сложнее для понимания, то *не используйте рекурсию*; найдите другое решение.

Следите за нашим блогом и скоро сможете читать SICP на перекурах между «помидорами». С вами был фронтенд-пират Максон «Черная Борода». Оставайтесь на связи!

![image](/images/recursion/outro.jpg)