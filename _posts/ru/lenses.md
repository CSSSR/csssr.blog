---
title: 'Использование линз на реальных примерах'
date: '2016-07-08T00:00:00.000Z'
coverImageAlt: 'Учимся преодолевать сложности в работе с иммутабельными данными при помощи концепции линз'
author: 'Андрей Мельников'
tag: 'web-development'
---

**В**сем привет! Меня зовут Андрей, и я Javascript-разработчик команды «Восход». В своей работе мне часто приходится иметь дело с иммутабельными данными, имеющими сложную иерархическую структуру, и использование стандартных средств для этого мне показалось довольно неудобным. В итоге в поисках лучшего решения я пришел к такой интересной концепции как линзы.

### Про иммутабельные данные

Иммутабельные данные последнее время переживают всплеск популярности во фронтенде; отправной точкой можно считать <a href="http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs" target="_blank">эту статью</a>. Основной причиной всплеска является проблема «определения изменений» (change detection), которую так или иначе пытается решать любой Javascript-фреймворк или инфраструктура. Тотальное использование иммутабельных данных — это один из способов её решения; в частности оно является основным в <a href="https://github.com/facebook/immutable-js/#the-case-for-immutability" target="_blank">ReactJS сообществе</a>.

Однако, при попытке использовать иммутабельные данные появляется проблема с «глубокими» изменениями во вложенных структурах. Предлагаю разобраться на реальных примерах, в чем же проблема и можем ли мы как-то её решить.

## Пример попроще

### Иммутабельная vs мутабельная структура

Вот пример очень простой функции для иммутабельного изменения несложной структуры:

```js
const setProps = (state, action) => ({
    ...state,
    rangeSlider: {
        ...state.rangeSlider,
        ...pick(['from', 'to', 'left', 'right'], action.payload)
    }
})
```

Довольно многословно, не правда ли? К тому же, в определении два раза повторяется `state` и `rangeSlider`, что противоречит хорошей практике.

Даже на этом простом примере видно, в чем проблема иммутабельных изменений. Чтобы установить значение вглубь структуры, нам надо сначала полностью её разобрать, а потом собрать по новой с новыми значениеми. Поэтому и получается очень-очень многословно.

Сравните запись выше и обычное мутабельное присваивание:

```js
Object.assign(
    state.rangeSlider,
    pick(['from', 'to', 'left', 'right'], action.payload)
)
```

То есть, переходя от мутабельных структур к иммутабельным, мы теряем в лаконичности и читабельности кода. Естественно, функциональное сообщество не могло этого допустить, и в нем родилась такая концепция, как линзы.

### Что такое линза

Чтобы иммутабельно установить значение, необходимо знать, как его прочитать (как до него добратся). Следовательно, разумным решением будет хранить функции для чтения и установки значения вместе, в одной сущности, которую и назвали линзой.

Таким образом линза состоит из:

- `getter` — функции для получения значения;
- `setter` — функции для установки значения, которая обязательно должна быть чистой и выполнять установку иммутабельно.

### Создание линзы

Для создания линз мы будем использовать функцию `lens` из библиотеки <a href="http://ramdajs.com/0.21.0/docs/#lens" target="_blank">ramda</a>. Первый её аргумент — `getter`, второй — `setter`. Простой пример — определение линзы `lensProp` для аттрибута обьекта:

```js
const lensProp = prop => lens(
    // getter - получаем свойство
    obj => obj[prop],
    // setter - ставим свойство иммутабельно
    (newVal, obj) => ({...obj, [prop]: newVal})
)
```
### Использование линзы

Есть две главные и одна интересная операции:

- `view` — получить данные по линзе, где первый аргумент линза, а второй — структура, из которой надо получить данные:

```js
const a = {key: 2},
    val = view(lensProp('key'), a) // val - 2
```

- `set` — установить данные по линзе, где первый аргумент линза, второй — значение, которое надо установить, а третий — данные, куда установить значение:

```js
const a = {key: 2},
    newA = set(lensProp('key'), 4, a) // newA - {key: 4}
```

- `over` — операция, которая вытаскивает через `view` по линзе значение, применяет к нему некотoрую функцию и устанавливает его обратно:

```js
const over = (someLens, func, data) => {
    const val = view(someLens, data)
    const newVal = func(val)
    return set(someLens, newVal)
}
```

### Тренировка

```js
const a = {key: 2},
    changedA = over(lensProp('key'), val => val + 1, a) // changedA - {key: 3}
```

Вроде всё есть, теперь вернемся к примеру. Напишем наше преобразование, используя `lensProp`:

```js
const setProps = (state, action) => over(
    lensProp('rangeSlider'),
    slider => ({...slider, ...pick(['from', 'to', 'left', 'right'], action.payload)}),
    state
)
```

Получается чуть-чуть лаконичнее и, что очень важно, без каких-либо повторений: нет дублирования имени аттрибута обьекта(`rangeSlider`). Это просто следствие главного свойства линз — композируемости. Линзы — это пример отлично композируемой абстракции.

Давайте теперь сделаем линзу для работы с аттрибутом `from` у `rangeSlider`. Вынесем линзу для работы с `rangeSlider` в переменную:

```js
const lensRangeSlider = lensProp('rangeSlider')
```
Можно определить линзу для работы с аттрибутом `from` у любого обьекта, используя все тот же `lensProp`:

```js
const lensFrom = lensProp('from')
```
А теперь чудеса композиции! Чтобы получить линзу для `from` у `rangeSlider`, нужно просто скомпозировать две уже опеределенныe нами линзы:

```js
const lensRangeSliderFrom = compose(
    lensRangeSlider,
    lensFrom
)
```
Пробуем:

```js
const state = {
    rangeSlider: {
        from: 3,
        to: 4
    }
}

view(lensRangeSliderFrom, state) // 3
set(lensRangeSliderFrom, 5, state)
/* {
    rangeSlider: {
        from: 5,
        to:4
    }
} */

over(lensRangeSliderFrom, val => val * 100, state)
/* {
    rangeSlider: {
        from: 300,
        to:4
    }
} */
```
<p><a href="http://goo.gl/qsW5Ln" target="_blank">Последний пример в Ramda REPL</a></p>.

Получилось довольно немногословно, да? На самом деле, такую линзу можно было бы определить, используя встроенную в `ramda` функцию <a href="http://ramdajs.com/0.21.0/docs/#lensPath" target="_blank">lensPath</a>. Получилось бы просто:

```js
const lensRangeSliderFrom = lensPath(['rangeSlider', 'from'])
```
Результат <a href="http://goo.gl/acC417" target="_blank">тот же самый</a>.

## Пример посложнее

Представим, что есть вот такая структура:

```js
const struct = {
    id: 2,
    description: 'Some cool thing',
    users: [
        {
            id: 1,
            fio: {
                name: 'Ivan'
            },
            familyMembers: [
                {
                    id: 5,
                    role: 'sister',
                    fio: {
                        name: 'Olga'
                    }
                }
            ]
        }
    ]
}
```

Существует некотoрый обьект, в котором есть юзеры с данными, а у юзеров — члены семьи, у которых есть свои данные. Задача — написать функцию, которая будет обновлять имя юзера по `id`. Давайте решим эту задачу с помощью линз.

### Начало решения

Сначала нам нужно научиться работать с ключем `users` в объекте. Воспользуемся функцией `lensProp`, с которой мы познакомились ранее:

```js
const lensUsers = lensProp('users')
```
Дальше нам надо как-то научиться работать с конкретным юзером, зная его `id`. Необходимо написать функцию, которая будет получать `id` юзера и возвращать линзу для этого юзера.

### Определение функций `getter` и `setter`

Как говорилось ранее, линза состоит из двух функций — `getter` и `setter`. Давайте определим обе:

- `getter` должен получать на вход массив и возврашать юзера с определенным `id`. Напишем функцию, которая создает такую функцию для определенного `id`:

```js
const makeGetterById = id => array => array.find(item => item.id === id)
```

- `setter` должен получать на вход нового юзера и массив и устанавливать нового юзера на место старого с определенным `id`:

```js
const makeSetterById = id =>
                (newItem, array) =>
                    array.map(item => item.id === id ? newItem : item)
```

Теперь определим саму функцию, создающую линзу:

```js
const lensById = id => lens(
    makeGetterById(id),
    makeSetterById(id)
)
```
Проверим работоспособность функции в <a href="http://goo.gl/fZr446" target="_blank">Ramda REPL</a>:

```js
const users = [{id:1, name: 'Ivan'}, {id:2, name: 'Oleg'}]

view(lensById(1), users)
// {"id": 1, "name": "Ivan"}
set(lensById(2), {id:2, name: 'Olga'}, users)
// [{"id": 1, "name": "Ivan"}, {"id": 2, "name": "Olga"}]
over(lensById(2), user => assoc('name', 'Fillip', user), users)
// [{"id": 1, "name": "Ivan"}, {"id": 2, "name": "Fillip"}]
```

### Продолжение решения

Работает! Продолжаем. :) Осталось определить линзы для работы с ключами `fio` и `name`. Снова воспользуемся `lensProp`:

```js
const lensFio = lensProp('fio')
const lensName = lensProp('name')
```

Сведём всё это вместе. Определим саму функцию, которая по `id` юзера будет создавать линзу для работы с его именем:

```js
const lensUserNameById = id => compose(
    lensUsers,
    lensById(id),
    lensFio,
    lensName
)
```
Выглядит довольно декларативно. Давайте попробуем функцию в деле:

```js
view(lensUserNameById(1), struct)
// -> "Ivan"
set(lensUserNameById(1), 'Petr', struct)
/* ->
{
    "description": "Some cool thing",
    "id": 2,
    "users": [
        {
            "familyMembers": [
                {
                    "fio": {
                        "name": "Olga"
                    },
                    "id": 5,
                    "role": "sister"
                }
            ],
            "fio": {
                "name": "Petr"
            },
            "id": 1
        }
    ]
}
*/

over(lensUserNameById(1), name => name + '!!!', struct)
/* ->
{
    "description": "Some cool thing",
    "id": 2,
    "users": [
        {
            "familyMembers": [
                {
                    "fio": {
                        "name": "Olga"
                    },
                    "id": 5,
                    "role": "sister"
                }
            ],
            "fio": {
                "name": "Ivan!!!"
            },
            "id": 1
        }
    ]
}
*/
```

<p><a href="http://goo.gl/kxSPgy" target="_blank">Пример в Ramda REPL.</a></p>

### Конец решения и новая задача

Ура! Мы справились, мы молодцы! Казалось бы, можно пойти отдыхать с чистой совестью и смотреть свежую серию любимого сериала. Но вот незадача: нам _внезапно_ понадобилось уметь работать с именами членов семьи юзера.Давайте попробуем решить новую задачу быстрее, максимально переиспользуя уже написанное. Какие линзы нам нужны для этого?

Для начала нам потребуется линза для работы с ключом `users`, но она уже у нас определена — `lensUsers`; потом — уже определенная линза для работы с юзером по `id` — `lensById`. Поэтому давайте создадим линзу для работы с `familyMembers`:

```js
const lensFamilyMembers = lensProp('familyMembers')
```

Далее нам необходима линза для работы с членом семьи по `id`. Звучит знакомо, не правда ли? А не подойдет ли для этого ранее определенная `lensById`? Конечно же, подойдёт. Суть работы с членами семьи та же, что и с юзерами: ищем по `id` и заменяем по `id`.

Далее нам нужны линзы для работы с `fio` и `name`. Они уже были определены нами — `lensFio` и `lensName` соответственно.

Итак, у нас есть все необходимые составляющие. Давайте определим функцию, создающую нужную нам линзу:

```js
const lensUserMemberFioNameById = (userId, memberId) => compose(
    lensUsers,
    lensById(userId),
    lensFamilyMembers,
    lensById(memberId),
    lensFio,
    lensName
)
```
Протестируем:

```js
view(lensUserMemberFioNameById(1, 5), struct)
// -> "Olga"
set(lensUserMemberFioNameById(1, 5), 'Tanya', struct)
/* ->
{
    "description": "Some cool thing",
    "id": 2,
    "users": [
        {
            "familyMembers": [
                {
                    "fio": {
                        "name": "Tanya"
                    },
                    "id": 5,
                    "role": "sister"
                }
            ],
            "fio": {
                "name": "Ivan"
            },
            "id": 1
        }
    ]
}
*/
over(lensUserMemberFioNameById(1, 5), name => name + '!!!', struct)
/* ->
{
    "description": "Some cool thing",
    "id": 2,
    "users": [
        {
            "familyMembers": [
                {
                    "fio": {
                        "name": "Olga!!!"
                    },
                    "id": 5,
                    "role": "sister"
                }
            ],
            "fio": {
                "name": "Ivan"
            },
            "id": 1
        }
    ]
}
*/
```
Все работает, как и ожидалось, см. пример в <a href="http://goo.gl/DBtcZa" target="_blank">Ramda REPL</a>.

### Усложнение и новая задача

И все хорошо, но _внезапно_ нам захотелось работать с членами семьи не по `id`, а по роли `role`. Допустим, роль уникальна. Мы можем легко написать линзу для работы со значением по `role`.

Определяем функцию для создания геттера:

```js
const makeGetterByRole = role => array => array.find(item => item.role === role)
```

Определяем функцию для создания сеттера:

```js
const makeSetterByRole = role =>
                     (newItem, array) =>
                         array.map(item => item.role === role ? newItem : item)
```

Теперь определим саму функцию, создающую линзу:

```js
const lensByRole = role => lens(
    makeGetterByRole(role),
    makeSetterByRole(role)
)
```

### Избавление от копипасты

Если перечитать статью заново, то можно заметить, что эта запись является почти полной копипастой определения `lensById`. Мы можем легко избавиться от копипасты. Давайте просто вынесем название аттрибута, по которому определяется, какой итем надо взять, в аргументы функции:

Определяем функцию для создания геттера:

```js
const makeGetterBy = (attr, val) =>
                                array =>
                                    array.find(item => item[attr] === val)
```

Определяем функцию для создания сеттера:

```js
const makeSetterBy = (attr, val) =>
                        (newItem, array) =>
                            array.map(item => item[attr] === val ? newItem : item)
```

Теперь определим саму функцию создающую линзу:

```js
const lensBy = attr => val => lens(
    makeGetterBy(attr, val),
    makeSetterBy(attr, val)
)
```
При помощи нее переопределим `lensById` и `lensByRole`:

```js
const lensById = lensBy('id')
const lensByRole = lensBy('role')
```

И теперь по аналогии с `lensUserMemberFioNameById` определим `lensUserMemberFioNameByRole`:

```js
const lensUserMemberFioNameByRole = (userId, memberRole) => compose(
    lensUsers,
    lensById(userId),
    lensFamilyMembers,
    lensByRole(memberRole),
    lensFio,
    lensName
)
```
Протестируем:

```js
view(lensUserMemberFioNameByRole(1, 'sister'), struct)
set(lensUserMemberFioNameByRole(1, 'sister'), 'Tanya', struct)
over(lensUserMemberFioNameByRole(1, 'sister'), name => name + '!!!', struct)
```
Результат будет точно такой же, как в предыдущем примере, можете <a href="http://goo.gl/WtBfvj" target="_blank">убедиться сами</a>.
Видно, что линзы позволяют писать легко переиспользуемый и композируемый код для работы с данными с возможностью простого рефакторинга.

Полный код примера в <a href="http://goo.gl/KloZWe" target="_blank">Ramda REPL</a>.

### Перепроверка

Вспомним, что у нас получилось в первом примере:

```js
const setProps = (state, action) =>  over(
    lensProp('rangeSlider'),
    slider => ({...slider, ...pick(['from', 'to', 'left', 'right'], action.payload)}),
    state
)
```
Мы немного схитрили и использовали `over`, чтобы смержить значение из `state.rangeSlider` со значениями из `action.payload`. Эту операцию также можно вынести в отдельную линзу, так как любую операцию с данными можно вынести в линзу.

## Домашнее задание или DIY

Попробуйте сделать это самостоятельно. Необходимо написать определение функции `lensByPick`, которая будет работать так:

```js
const data = {
    key: 'value',
    key1: 'value1',
    key2: 'value2',
}
view(lensByPick(['key1', 'key2']), data)
// -> {key1: 'value1', key2: 'value2'}
set(
    lensByPick(['key1', 'key2']),
    {key1: 'newValue1', key2: 'newValue2', key3: 'newValue3'},
    data
)
/* ->
{
    key: 'value',
    key1: 'newValue1',
    key2: 'newValue2',
}
*/
over(
    lensByPick(['key1', 'key2']),
    obj => mapObjIndexed(val => val + '!!!', obj),
    data
)
/* ->
{
    key: 'value',
    key1: 'value1!!!',
    key2: 'value2!!!',
}
*/
```
Начать можно отсюда — <a href="http://goo.gl/Isyijp" target="_blank">заготовка для Ramda REPL</a>.

При помощи созданой вами линзы можно будет переписать наш пример вот так:

```js
const lensRangeSliderByPick = keys => compose(
    lensProp('rangeSlider'),
    lensByPick(keys)
)

const setProps = (state, action) => set(
    lensRangeSliderByPick(['from', 'to', 'left', 'right']),
    action.payload,
    state
)
```

## Полезные ссылки про работу с данными

- <a href="http://ramdajs.com/0.21.0/index.html" target="_blank">Ramda</a> — функциональный набор утилит для Javascript (аналог Lodash);
- <a href="https://github.com/calmm-js/partial.lenses" target="_blank">partial.lenses</a> — альтернативная реализация линз для Javascript с более удобным и <a href="https://github.com/calmm-js/partial.lenses#motivation" target="_blank">согласованным</a> API;
- <a href="https://github.com/facebook/immutable-js" target="_blank">Immutable-js</a> и <a href="https://github.com/swannodette/mori" target="_blank">Mori</a> — хорошие реализации "чисто функциональных" структур данных, использующие "структурное переиспользование" для сокращения оверхеда по памяти при написании кода в иммутабельном стиле;
- <a href="https://github.com/tonsky/datascript" target="_blank">Datascript</a> — структура данных напоминающая in-memory базу данных(с индексами, связями, и богатым языком запросов). Может подойти вам если ваши даные очень-очень сложные(со множеством связей) и стандартные структуры данных неудобны для вас даже при использовании линз;
- <a href="https://codewords.recurse.com/issues/six/immutability-is-not-enough" target="_blank">Immutability is not enough</a> — хорошая статья о том, что многие ошибки управления данными, которые присутсвуют в мутабельном коде, перешли и в иммутабельный.

Спасибо за внимание!

Возникшие вопросы можно задавать в комментариях или мне в твиттере - <a href="https://twitter.com/bracketsarrows" target="_blank">@bracketsarrows</a>
