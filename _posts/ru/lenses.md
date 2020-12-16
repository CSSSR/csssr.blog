---
title: 'Использование<br/> <i>линз</i> на реальных примерах'
coverImageAlt: 'Иллюстрация мужчины, молотком и зубилом вырубающего камни из скалы'
author: 'Андрей Мельников'
date: '2016-07-08T00:00:00.000Z'
tag: 'web-development'
---

**В**сем привет! Меня зовут Андрей, и я Javascript-разработчик команды «Восход». В своей работе мне часто приходится иметь дело с иммутабельными данными, имеющими сложную иерархическую структуру, и использование стандартных средств для этого мне показалось довольно неудобным. В итоге в поисках лучшего решения я пришел к такой интересной концепции как линзы.

### Про иммутабельные данные

Иммутабельные данные последнее время переживают всплеск популярности во фронтенде; отправной точкой можно считать [эту статью](http://swannodette.github.io/2013/12/17/the-future-of-javascript-mvcs). Основной причиной всплеска является проблема «определения изменений» (change detection), которую так или иначе пытается решать любой Javascript-фреймворк или инфраструктура. Тотальное использование иммутабельных данных — это один из способов её решения; в частности оно является основным в&nbsp;[ReactJS&nbsp;сообществе](https://github.com/facebook/immutable-js/#the-case-for-immutability).

Однако, при попытке использовать иммутабельные данные появляется проблема с «глубокими» изменениями во вложенных структурах. Предлагаю разобраться на реальных примерах, в чем же проблема и можем ли мы <span style="white-space:nowrap">как-то</span> её решить.

## Пример попроще

### Иммутабельная vs мутабельная структура

Вот пример очень простой функции для иммутабельного изменения несложной&nbsp;структуры:

```js
const setProps = (state, action) => ({
  ...state,
  rangeSlider: {
      ...state.rangeSlider,
      ...pick(['from', 'to', 'left', 'right'], action.payload)
  }
})
```

Довольно многословно, не правда ли? К тому же, в определении два раза повторяется `state` и `rangeSlider`, что противоречит хорошей практике.

Даже на этом простом примере видно, в чем проблема иммутабельных изменений. Чтобы установить значение вглубь структуры, нам надо сначала полностью её разобрать, а потом собрать по новой с новыми значениями. Поэтому и получается очень-очень многословно.

Сравните запись выше и обычное мутабельное присваивание:

```js
Object.assign(
  state.rangeSlider,
  pick(['from', 'to', 'left', 'right'], action.payload)
)
```

То есть, переходя от мутабельных структур к иммутабельным, мы теряем в лаконичности и читабельности кода. Естественно, функциональное сообщество не могло этого допустить, и в нем родилась такая концепция, как линзы.

### Что такое линза

Чтобы иммутабельно установить значение, необходимо знать, как его прочитать (как до него добраться). Следовательно, разумным решением будет хранить функции для чтения и установки значения вместе, в одной сущности, которую и назвали линзой.

Таким образом линза состоит из:

- `getter` — функции для получения значения;
- `setter` — функции для установки значения, которая обязательно должна быть чистой и выполнять установку иммутабельно.

### Создание линзы

Для создания линз мы будем использовать функцию `lens` из библиотеки [ramda](http://ramdajs.com/0.21.0/docs/#lens"). Первый её аргумент — `getter`, второй — `setter`. Простой пример — определение линзы `lensProp` для атрибута объекта:

```js
const lensProp = prop => lens(
  // getter - получаем свойство
  obj => obj[prop],
  // setter - ставим свойство иммутабельно
  (newVal, obj) => ({...obj, [prop]: newVal})
)
```

### Использование линзы

Есть две главные и одна интересная операции:

- `view` — получить данные по линзе, где первый аргумент линза, а второй — структура, из которой надо получить данные:

```js
const a = {key: 2},
      val = view(lensProp('key'), a) // val - 2
```

- `set` — установить данные по линзе, где первый аргумент линза, второй — значение, которое надо установить, а третий — данные, куда установить&nbsp;значение:

```js
const a = {key: 2},
      newA = set(lensProp('key'), 4, a) // newA - {key: 4}
```

- `over` — операция, которая вытаскивает через `view` по линзе значение, применяет к нему некотoрую функцию и устанавливает его обратно:

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
      changedA = over(lensProp('key'),
      val => val + 1, a) // changedA - {key: 3}
```

Вроде всё есть, теперь вернемся к примеру. Напишем наше преобразование, используя `lensProp`:

```js
const setProps = (state, action) => over(
  lensProp('rangeSlider'),
  slider => ({...slider, ...pick(['from', 'to', 'left', 'right'], action.payload)}),
  state
)
```

Получается чуть-чуть лаконичнее и, что очень важно, без каких-либо повторений: нет дублирования имени атрибута объекта(`rangeSlider`). Это просто следствие главного свойства линз — композируемости. Линзы — это пример отлично композируемой абстракции.

Давайте теперь сделаем линзу для работы с атрибутом `from` у `rangeSlider`. Вынесем линзу для работы с `rangeSlider` в переменную:

```js
const lensRangeSlider = lensProp('rangeSlider')
```
Можно определить линзу для работы с аттрибутом `from` у любого объекта, используя все тот же `lensProp`:

```js
const lensFrom = lensProp('from')
```

А теперь чудеса композиции! Чтобы получить линзу для `from` у `rangeSlider`, нужно просто скомпозировать две уже определенныe нами линзы:

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

[Последний пример в Ramda REPL](http://goo.gl/qsW5Ln).

Получилось довольно немногословно, да? На самом деле, такую линзу можно было бы определить, используя встроенную в `ramda` функцию [lensPath](http://ramdajs.com/0.21.0/docs/#lensPath). Получилось бы просто:

```js
const lensRangeSliderFrom = lensPath(['rangeSlider', 'from'])
```

Результат [тот же самый](http://goo.gl/acC417).

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

Существует некотoрый объект, в котором есть юзеры с данными, а у юзеров — члены семьи, у которых есть свои данные. Задача — написать функцию, которая будет обновлять имя юзера по&nbsp;`id`. Давайте решим эту задачу с помощью&nbsp;линз.

### Начало решения

Сначала нам нужно научиться работать с ключем `users` в объекте. Воспользуемся функцией `lensProp`, с которой мы познакомились ранее:

```js
const lensUsers = lensProp('users')
```

Дальше нам надо как-то научиться работать с конкретным юзером, зная его `id`. Необходимо написать функцию, которая будет получать `id` юзера и возвращать линзу для этого юзера.

### Определение функций `getter` и `setter`

Как говорилось ранее, линза состоит из двух функций — `getter` и `setter`. Давайте определим обе:

- `getter` должен получать на вход массив и возвращать юзера с определенным `id`. Напишем функцию, которая создает такую функцию для определенного `id`:

```js
const makeGetterById = id => array =>
  array.find(item => item.id === id)
```

- `setter` должен получать на вход нового юзера и массив и устанавливать нового юзера на место старого с определенным `id`:

```js
const makeSetterById = id => (newItem, array) =>
  array.map(item => item.id === id ? newItem : item)
```

Теперь определим саму функцию, создающую линзу:

```js
const lensById = id => lens(
  makeGetterById(id),
  makeSetterById(id)
)
```

Проверим работоспособность функции в [Ramda&nbsp;REPL](http://goo.gl/fZr446):

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

Работает! Продолжаем. :) Осталось определить линзы для работы с ключами `fio` и `name`. Снова воспользуемся `lensProp`:

```js
const lensFio = lensProp('fio')
const lensName = lensProp('name')
```

Сведём всё это вместе. Определим саму функцию, которая по `id` юзера будет создавать линзу для работы с его именем:

```js
const lensUserNameById = id => compose(
  lensUsers,
  lensById(id),
  lensFio,
  lensName
)
```

Выглядит довольно декларативно. Давайте попробуем функцию в деле:

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

[Пример в Ramda REPL.](http://goo.gl/kxSPgy)

### Конец решения и новая задача

Ура! Мы справились, мы молодцы! Казалось бы, можно пойти отдыхать с чистой совестью и смотреть свежую серию любимого сериала. Но вот незадача: нам _внезапно_ понадобилось уметь работать с именами членов семьи юзера.Давайте попробуем решить новую задачу быстрее, максимально переиспользуя уже написанное. Какие линзы нам нужны для этого?

Для начала нам потребуется линза для работы с ключом `users`, но она уже у нас определена — `lensUsers`; потом — уже определенная линза для работы с юзером по `id` — `lensById`. Поэтому давайте создадим линзу для работы с&nbsp;`familyMembers`:

```js
const lensFamilyMembers = lensProp('familyMembers')
```

Далее нам необходима линза для работы с членом семьи по `id`. Звучит знакомо, не правда ли? А не подойдет ли для этого ранее определенная `lensById`? Конечно же, подойдёт. Суть работы с членами семьи та же, что и с юзерами: ищем по `id` и заменяем по `id`.

Далее нам нужны линзы для работы с `fio` и `name`. Они уже были определены нами — `lensFio` и `lensName` соответственно.

Итак, у нас есть все необходимые составляющие. Давайте определим функцию, создающую нужную нам линзу:

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

Все работает, как и ожидалось, см. пример в [Ramda REPL](http://goo.gl/DBtcZa).

### Усложнение и новая задача

И все хорошо, но _внезапно_ нам захотелось работать с членами семьи не по `id`, а по роли `role`. Допустим, роль уникальна. Мы можем легко написать линзу для работы со значением по `role`.

Определяем функцию для создания геттера:

```js
const makeGetterByRole = role => array =>
  array.find(item => item.role === role)
```

Определяем функцию для создания сеттера:

```js
const makeSetterByRole = role => (newItem, array) =>
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

Если перечитать статью заново, то можно заметить, что эта запись является почти полной копипастой определения `lensById`. Мы можем легко избавиться от копипасты. Давайте просто вынесем название атрибута, по которому определяется, какой итем надо взять, в аргументы функции:

Определяем функцию для создания геттера:

```js
const makeGetterBy = (attr, val) => array =>
  array.find(item => item[attr] === val)
```

Определяем функцию для создания сеттера:

```js
const makeSetterBy = (attr, val) => (newItem, array) =>
  array.map(item => item[attr] === val ? newItem : item)
```

Теперь определим саму функцию создающую линзу:

```js
const lensBy = attr => val => lens(
  makeGetterBy(attr, val),
  makeSetterBy(attr, val)
)
```

При помощи нее переопределим `lensById` и&nbsp;`lensByRole`:

```js
const lensById = lensBy('id')
const lensByRole = lensBy('role')
```

И теперь по аналогии с `lensUserMemberFioNameById` определим `lensUserMemberFioNameByRole`:

```js
const lensUserMemberFioNameByRole = (userId, memberRole) =>
  compose(
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

Результат будет точно такой же, как в предыдущем примере, можете [убедиться&nbsp;сами](http://goo.gl/WtBfvj").
Видно, что линзы позволяют писать легко переиспользуемый и композируемый код для работы с данными с возможностью простого&nbsp;рефакторинга.

Полный код примера в [Ramda REPL](http://goo.gl/KloZWe).

### Перепроверка

Вспомним, что у нас получилось в первом примере:

```js
const setProps = (state, action) =>  over(
  lensProp('rangeSlider'), slider => (
    {...slider, ...pick(['from', 'to', 'left', 'right'], action.payload)}
  ), state
)
```

Мы немного схитрили и использовали `over`, чтобы смержить значение из `state.rangeSlider` со значениями из `action.payload`. Эту операцию также можно вынести в отдельную линзу, так как любую операцию с данными можно вынести в линзу.

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

Начать можно отсюда — [заготовка&nbsp;для&nbsp;Ramda&nbsp;REPL](http://goo.gl/Isyijp)

При помощи созданной вами линзы можно будет переписать наш пример вот так:

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

- [Ramda](http://ramdajs.com/0.21.0/index.html) — функциональный набор утилит для Javascript (аналог Lodash);
- [Partial.lenses](https://github.com/calmm-js/partial.lenses) — альтернативная реализация линз для Javascript с более удобным и [согласованным](https://github.com/calmm-js/partial.lenses#motivation) API;
- [Immutable-js](https://github.com/facebook/immutable-js) и [Mori](https://github.com/swannodette/mori) — хорошие реализации «чисто функциональных» структур данных, использующие «структурное переиспользование» для сокращения оверхеда по памяти при написании кода в иммутабельном стиле;
- [Datascript](https://github.com/tonsky/datascript) — структура данных напоминающая in-memory базу данных (с&nbsp;индексами, связями, и богатым языком запросов). Может подойти вам если ваши данные очень-очень сложные (со множеством связей) и стандартные структуры данных неудобны для вас даже при использовании линз;
- [Immutability is not enough](https://codewords.recurse.com/issues/six/immutability-is-not-enough) — хорошая статья о том, что многие ошибки управления данными, которые присутсвуют в мутабельном коде, перешли и в иммутабельный.

Спасибо за внимание!

Возникшие вопросы можно задавать в комментариях или мне в твиттере — [@bracketsarrows](https://twitter.com/bracketsarrows)
