---
title: 'Какие ваши <i>доказательства</i>?'
coverImageAlt: 'Пробуем искать и проверять свойства программ при помощи генеративного тестирования'
author: 'Андрей Мельников'
date: '2017-04-25T00:00:00.000Z'
tag: 'web-development'
---

**В**сем привет. Меня зовут Андрей, и сегодня я хотел бы обсудить тему оценки и доказательства свойств программных решений. В чем состоит задача программиста? Один из самых популярных ответов – предоставлять некоторое решение существующей проблемы. Неотъемлемой частью этого процесса является стадия анализа разработанного решения, в которой мы пытаемся понять, что за решение мы получили, какие у него ограничения, область применения, и на какие компромиссы оно идет, то есть насколько хорошо оно решает изначальную проблему и сколько других проблем добавляет.

На сегодняшний день большая часть анализа протекает в неформальных терминах: «это ненадежное решение», «это плохо читаемый код», «плохо тестируется» и так далее. Для&nbsp;формального анализа в большинстве случаев мы используем различные виды тестов, основанные на <span class="no-wrap">тест-кейсах.</span> Неформальный анализ нас сейчас не интересует, так как он имеет большее отношение к философии и софистике, нежели к точным наукам. Поэтому давайте сконцентрируемся на тестировании, взглянув на него именно с точки зрения точной науки, то есть математики.

Математики, как и программисты, создают решения и анализируют их. Возьмем для примера анализ функций (они ближе всего к программам). Что такое <span class="no-wrap">тест-кейс</span> с точки зрения анализа функции? Это некоторая точка (входное значение) функции. Сам же тест, соответственно, представляет собой анализ поведения функции в этой точке (причем, точки обычно выбираются не случайно, а на разных участках с разным поведением функции – для этого, как правило, используется информация по покрытию кода).

Исследование поведения функции в некоторых важных точках – неотъемлемая часть математического анализа. Однако математики также уделяют много времени анализу свойств, справедливых на всей области определения, например, <a target="_blank" href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_(%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0)">функция сложения ассоциативна, коммутативна и так далее</a>.

<Img imageName='func_analyze' alt='Анализ функции'>

Программы, как и математические функции, в большинстве случаев определены на очень большом числе значений (близком к бесконечному). Но программисты по какой-то причине не интересуются свойствами своих программ за пределами конкретных точек (<span class="no-wrap">тест-кейсов</span>). Получается, что о поведении программы в остальных точках мы не можем сказать ничего определенного. Как это исправить?

### Простой пример

Давайте рассмотрим для начала пример, взятый из базовой арифметики, а потом перейдем к более практической ситуации. Возьмем обыкновенное сложение. Как я уже упоминал, сложение обладает многими свойствами. К примеру, сумма двух неотрицательных чисел всегда больше каждого из слагаемых.

То есть, для любых `a` и `b` больших или равных нулю справедливо `a + b >= a && a + b >= b`. На Javascript данное свойство можно записать в&nbsp;качестве функции:

```js
function(a, b) {
  return a + b >= a && a + b >= b;
}
```

Осталось только доказать это свойство. Какие у нас есть варианты:

 - Пойти математическим путем – обложиться Coq/Agda/TLA+/Lean Prover и другими штуками для доказательства теорем, и через пару лет мы, возможно, сможем проверить это свойство.

 - Как и всегда в программировании, мы можем, в отличии от математиков, чуть срезать углы и просто проверить это свойство очень много раз на разных значениях.

Сделать это довольно просто. Для начала напишем генератор необходимых значений:

```js
function genPosNumber() {
  return Math.random() * 10000000000;
}
```

Затем напишем функцию, которая принимает генератор и свойство и конструирует проверку свойства:

```js
function property(argGenerators, propertyFn) {
  return function() {
    var generatedArgs = argGenerators.map(gen => gen());

    return {
      success: propertyFn(...generatedArgs),
      args: generatedArgs
    };
  }
}
```

Ну и саму функцию, которая будет проверять свойство заданное количество раз (по умолчанию&nbsp;100):

```js
function check(property, tries = 100) {
  for (var i = 0; i < tries; i++) {
    var res = property();
    if (!res.success) {
      throw new Error(
        'Property hasnt held on arguments: '
        + JSON.stringify(res.args, null, 2)
      );
    }
  }
}
```

Теперь мы можем написать тест на наше свойство:

```js
it('forall a, b - a + b >= a && a + b >= b', () => {
  check(property(
    [genPosNumber, genPosNumber],
    function (a, b) {
      return a + b >= a && a + b >= b;
    }
  ))
})
```

Возникает вопрос: а надо ли было что-то писать, или все уже написано до нас? Ответ – да, все уже написано.

Данный подход называется property-based testing (а.к.a QuickCheck тесты, property тесты, генеративное тестирование), появился он в&nbsp;<a target="_blank" href="http://www.eecs.northwestern.edu/~robby/courses/395-495-2009-fall/quick.pdf">haskell сообществе</a>. На сегодняшний день его реализации есть практически для всех языков и,&nbsp;конечно же, для Javascript. В примерах я буду использовать встроенный в&nbsp;<a target="_blank" href="https://facebook.github.io/jest/">Jest</a> <a target="_blank" href="https://github.com/leebyron/testcheck-js">testcheck-js</a>, который на самом деле является биндингом к&nbsp;<a target="_blank" href="https://github.com/clojure/test.check">test.check написанному на ClojureScript</a>. Наш пример с его использованием запишется так:

```js
var testcheck = require('testcheck');
var gen = testcheck.gen;

it('forall a, b - a + b >= a && a + b >= b', () => {
  testcheck.check(testcheck.property(
    [gen.posInt, gen.posInt],
    function (a, b) {
      return a + b >= a && a + b >= b;
    }
  ))
})
```

В целом, практически ничего не изменилось, кроме использования уже готовых функций и генераторов вместо самописных. Перейдем к примеру посложнее.

### Пример посложнее

Фронтенд почти всегда оперирует сущностями, которые были переданы нам с бэкенда, и зачастую для более удобного применения на фронтенде нам надо изменить их структуру. Тут все просто – у нас появляется некоторая функция _convertFrom_, которая конвертирует структуру (допустим, данные о семье) в удобную для отображения.

```js
function convertFrom(structFromBackend) {
  ...
  return structForFrontend;
}
```

Однако некоторые сущности не только отображаются, но и редактируются – тогда нам надо добавить также функцию _convertTo_. Она переведет структуру из представления фронтенда в исходную, которую мы сможем сохранить на бэкенде.

```js
function convertTo(structForFrontend) {
  ...
  return structFromBackend;
}
```

Наверное, вы уже заметили некоторое свойство этих двух функций: `convertTo`  –обратная функция для `convertFrom`. То есть для любых `a`&nbsp;справедливо, что `convertFrom(convertTo(a))` эквивалентно `a`.

Давайте запишем это свойство на Javascript:

```js
function isRevertable(structFromBackend) {
  var structForFrontend = convertFrom(structFromBackend);
  var structForBackend = convertTo(structForFrontend);

  expect(structFromBackend).toEqual(structForBackend);
}
```

Теперь необходимо написать генератор для `structFromBackend`. `Testcheck` уже имеет большой набор встроенных генераторов, комбинируя которые, мы можем получать новые генераторы. Пример:

```js
gen.int // генератор целых чисел
gen.array // генератор массивов
gen.array(gen.int) // генератор массивов целых чисел
```

Из чего состоит наша структура (данные о семье):

 - `type` – может быть `espoused`, `single`, `common_law_marriage`, `undefined`;
 - `members` – массив объектов с такой структурой:
   + `role` – может быть `sibling`, `child`, `parent`, `spouse`;
   + `fio` – объект с ключами `firstname`, `lastname`, `middlename`;
   + `dependant` – `boolean` или `undefined`.

Начнем с `type`, воспользуемся <a target="_blank" href="https://github.com/leebyron/testcheck-js/blob/master/type-definitions/testcheck.d.ts#L113">документацией по&nbsp;генераторам</a>.
Для перечислений используется генератор <a target="_blank" href="https://github.com/leebyron/testcheck-js/blob/master/type-definitions/testcheck.d.ts#L234">returnOneOf</a>:


```js
gen.returnOneOf(['espoused', 'single', 'common_law_marriage', undefined])
```

Теперь самое сложное – генератор объекта `member`. Генератор для `role` сконструируем с помощью уже использованного `returnOneOf`:

```js
gen.returnOneOf(['sibling', 'child', 'parent', 'spouse'])
```

Для `dependant` используем генераторы <a target="_blank" href="https://github.com/leebyron/testcheck-js/blob/master/type-definitions/testcheck.d.ts#L331">gen.boolean</a>, <a target="_blank" href="https://github.com/leebyron/testcheck-js/blob/master/type-definitions/testcheck.d.ts#L329">gen.undefined</a>, скомбинировав их при помощи <a target="_blank" href="https://github.com/leebyron/testcheck-js/blob/master/type-definitions/testcheck.d.ts#L208">gen.oneOf</a>:

```js
// oneOf принимает несколько генераторов и возврашается генератор который
// случайным образом использует то один то другой генератор
gen.oneOf([gen.boolean, gen.undefined])
```

Для `fio` используем <a target="_blank" href="https://github.com/leebyron/testcheck-js/blob/master/type-definitions/testcheck.d.ts#L297">gen.object</a> в&nbsp;комбинации с&nbsp;<a target="_blank" href="https://github.com/leebyron/testcheck-js/blob/master/type-definitions/testcheck.d.ts#L383">gen.string</a>, <a target="_blank" href="https://github.com/leebyron/testcheck-js/blob/master/type-definitions/testcheck.d.ts#L329">gen.undefined</a>:

```js
gen.object({
    firstname: gen.oneOf([gen.string, gen.undefined]),
    lastname: gen.oneOf([gen.string, gen.undefined]),
    middlename: gen.oneOf([gen.string, gen.undefined])
})
```

Сведем все вместе:

```js
var familyInfoGen = gen.object({
  type: gen.returnOneOf(['espoused', 'single', 'common_law_marriage', undefined]),
  members: gen.array(
    gen.object({
      role: gen.returnOneOf(['sibling', 'child', 'parent', 'spouse']),
      fio: gen.object({
        firstname: gen.oneOf([gen.string, gen.undefined]),
        lastname: gen.oneOf([gen.string, gen.undefined]),
        middlename: gen.oneOf([gen.string, gen.undefined])
      }),
      dependant: gen.oneOf([gen.boolean, gen.undefined])
    })
  )
});
```

Проверяем:

```js
var sample = require('testcheck').sample;

console.log(JSON.stringify(sample(familyInfoGen, {times: 2}), null, 2))
/*
[
  {
    "type": "espoused",
    "members": []
  },
  {
    "members": []
  }
]
*/
```
А вот и первая проблема. Иногда у нас генерятся структуры без супруги, но при этом с&nbsp;`type === 'espoused'`. Так быть не может – нам не могут прийти такие данные с бэкенда. Как можно ограничить или преобразовать нашу генерируемую последовательность по какому-то правилу? Варианта два:

 - <a target="_blank" href="https://github.com/leebyron/testcheck-js/blob/master/type-definitions/testcheck.d.ts#L125">suchThat</a> — фильтрует генерируемую последовательность по предикату. Не&nbsp;очень подходит, так как увеличивает число попыток генерации, что замедляет тесты;
 - <a target="_blank" href="https://github.com/leebyron/testcheck-js/blob/master/type-definitions/testcheck.d.ts#L146">map</a> — отображает элементы генерируемой последовательности согласно некоторой функции.

Давайте посмотрим, как мы можем применить `map` для наших целей. Для начала определимся с правилами:

 - Супруга может быть только одна;
 - Если она есть, то `type === 'espoused'`;
 - Если `type !== 'espoused'`, то ее быть не&nbsp;должно.

Так и запишем:

```js
function mapFamily(familyObject) {
  // находим всех супруг
  var spouse = familyObject.members.filter(member => member.role === 'spouse');
  // если женат, а супруги нет
  if (familyObject.type === 'espoused' && spouse.length === 0) {
    return {
      type: familyObject.type,
      members: [
        // то добавляем ее
        { role: 'spouse', fio: {} },
        ...familyObject.members
      ]
    }
  // если не женат, а супруга есть
  } else if (familyObject.type !== 'espoused' && spouse.length !== 0) {
    return {
      type: familyObject.type,
      // убираем ее
      members: familyObject.members.filter(member => member.role !== 'spouse')
    }
  // если супруг больше одной, то оставляем только первую
  } else if (spouse.length > 1) {
    return {
      type: familyObject.type,
      members: familyObject.members.reduce((acc, member) => {
        if (member.role !== 'spouse' && acc.hasSpouse) {
          acc.members.push(member);
        } else if (member.role === 'spouse' && !acc.hasSpouse) {
          acc.members.push(member);
          acc.hasSpouse = true;
        }
        return acc;
      }, { members: [], hasSpouse: false }).members
    }
  }
  // если структура верна, то возвращаем, ничего не меняя
  return familyObject;
}
```

Применим эту операцию к нашему генератору:

```js
var familyInfoGenFixed = gen.map(mapFamily, familyInfoGen);
```

Проверяем:

```js
console.log(JSON.stringify(sample(familyInfoGenFixed, {times: 2}), null, 2))
/*
[
  {
    "type": "espoused",
    "members": [
      {
        "role": "spouse",
        "fio": {}
      }
    ]
  },
  {
    "type": "common_law_marriage",
    "members": [
      {
        "role": "child",
        "fio": {
          "firstname": "&",
          "lastname": "",
        }
      }
    ]
  }
]
*/
```

Теперь генерируемые объекты точно соответствуют нашим требованиям  –можно переходить непосредственно к проверке нашего свойства. Воспользуемся хелпером из пакета `jasmine-check` `check.it`  –он принимает описания свойства, массив генераторов и свойство в виде функции.

```js
require('jasmine-check').install();

check.it(
  'convertTo is revert function for convertFrom',
  [familyInfoGenFixed],
  isRevertable
);
```

Однако проверка нашего свойства заканчивается безуспешно:

```diff
● convertFrom and convertTo properties
  › convertFrom -> convertTo save original shape (
    {"type":"single","members":[{"role": "sibling", "fio": {}}]}
  )

expect(received).toEqual(expected)

Expected value to equal:
  {"type":"single","members": Array [
    {"role": "sibling", "fio": Object {}}
  ]}
Received:
  {"type":"single","members": Array [
    {"role": "sibling", "fio": Object {}, "dependant": false}
  ]}

Difference:

- Expected
+ Received

  Object {
    "type":"single"
    "members": Array [
      Object {
        "role": "sibling",
        "fio": Object {},
+       "dependant": false
      }
    ]
  }
```

Все дело в том, что функция `convertFrom`, помимо преобразований из одной структуры в другую, также проставляет некоторые значения по умолчанию (для&nbsp;`dependant` это `false`), то есть она не оставляет исходные значения. Что же делать?

### Решение №1 — сложное

<Note>
  Дальше будет много кода, написаного на коленке в течение короткого промежутка времени в качестве Proof of concept. Данный код представлен только для того, чтобы показать некоторую идею, а не быть готовым для реального применения.
</Note>

Первое, что приходит в голову – да, сами значения меняются, но структура-то остается прежней.
Следовательно, мы можем ослабить свойство и проверять не на точное равенство, а на то, что структура не изменяется:

```js
function isSameShape(structFromBackend) {
  var structForFrontend = convertFrom(structFromBackend);
  var structForBackend = convertTo(structForFrontend);

  expect(checkFamilyStruct(structForBackend)).toBe(true);
}
```

Осталось только написать функцию `checkFamilyStruct`.

Хм, а если подумать? Вспомните, ведь мы уже описывали структуру наших данных. В генераторе мы описали и типы, и различные ограничения для нашей структуры (в `mapFamily`). Можем ли мы как-то переиспользовать создание нашего генератора для проверки структуры результата? Скорее всего, нет. Для этого понадобится анализировать внутреннюю структуру генератора, а она довольно непростая (так как он сам написан на ClojureScript).

Однако мы можем сделать то, что так любят делать программисты – придумать новое API определения структуры данных, при помощи которого мы сможем получать и функцию-генератор, и функцию-валидатор. И давайте сделаем его похожим на <a target="_blank" href="https://facebook.github.io/react/docs/typechecking-with-proptypes.html">React.PropTypes</a>, ведь все мы так любим React.

Единственным новым методом будет `.invariant`, который будет отвечать за преобразование генерируемой последовательности (вспоминаем метод `.map`).

Использование нашего API должно выглядеть так:

```js
const makeFamilySpec = spec => spec.shape({
  type: spec.oneOf(['espoused', 'single', 'common_law_marriage']),
  members: spec.arrayOf(
    spec.shape({
      role: spec.oneOf(['sibling', 'child', 'parent', 'spouse']).isRequired,
      fio: spec.shape({
        firstname: spec.string,
        lastname: spec.string,
        middlename: spec.string
      }),
      dependant: spec.bool
    }).isRequired
  )
}).invariant(mapFamily);
```
Соответственно, теперь нам надо определить объект `spec` для валидатора и для генератора. Для валидации я буду использовать <a target="_blank" href="https://facebook.github.io/jest/docs/api.html#expectvalue)">expect</a> из Jest просто потому, что это единственное, что было под рукой. Очевидно, что для валидации можно использовать любую библиотеку для проверки данных, да и сам формат описания структуры может быть любым.

Для начала определим общую структуру API для валидатора:

```js
const jestSpec = {
  // specJest просто некоторая обертка, которая добавит все необходимые методы
  string: specJest(
    actual => expect(isString(actual)).toBe(true)
  ), // для примитивов проверяем просто типы
  bool: specJest(
    actual => expect(isBoolean(actual)).toBe(true)
  ),
  oneOf: list => specJest(
    actual => expect(list).toContainEqual(actual)
  ),
  shape: shape => specJest(actual => {
    expect(isPlainObject(actual)).toBe(true);
    keys(shape).forEach(key => {
      // для объекта проверяем, что все ключи соответствуют описаниям
      shape[key](actual[key]);
    });
  }),
  arrayOf: itemSpec => specJest(actual => {
    expect(isArray(actual)).toBe(true);
    // для массива проверяем элементы, которые содержатся в нем
    actual.forEach(item => itemSpec(item));
  })
};
```

Теперь давайте сделаем то же самое для генератора:

```js
export const genSpec = {
  // specGen просто некоторая обертка, которая добавит все необходимые методы
  string: specGen(gen.asciiString),
  bool: specGen(gen.boolean),
  oneOf: list => specGen(gen.returnOneOf(list)),
  shape: shape => specGen(gen.object(shape)),
  arrayOf: itemSpec => specGen(gen.array(itemSpec))
};
```

Далее необходимо реализовать сами обертки, которые будут добавлять необходимые методы. Так как большая часть кода и для валидатора, и для генератора будет общей – вынесем ее в&nbsp;функцию `makeSpecable`. Она будет принимать 2 функции, которые уже будут содержать логику, специфичную для генератора или валидатора:

 - `makeNotRequired` — определит, как сделать из того, что нам передали, необязательный генератор/валидатор.

Здесь все довольно просто. Для валидатора:

```js
check => actual => isUndefined(actual) || check(actual)
```
Для генератора:

```js
generator => gen.oneOf([gen.undefined, generator])
```
 - `makeInvariant` — определит как добавить ограничение по некоторой кастомной функции для генератора/валидатора

Для генератора мы такое уже делали – используем знакомый `.map`:

```js
(generator, func) => gen.map(func, generator)
```

А вот с валидатором все сложнее. Давайте вспомним, что, по сути, делает `mapFamily`? Приводит структуру к верному виду. А что она делает для структуры, которая не содержит нарушений? Правильно, ничего, она никак ее не меняет. Следовательно, мы можем сделать проверку  – если `mapFamily` ничего не изменила, значит, структура была верной:

```js
expect(mapFamily(familyStruct)).toEqual(familyStruct);
```

Вооружившись этой идеей, напишем `makeInvariant` для валидатора:

```js
(check, func) => actual => {
    expect(func(actual)).toEqual(actual);
    check(actual);
}
```

Ну и теперь осталось написать только `makeSpecable`, которая будет добавлять необходимые методы:

```js
const makeSpecable = (makeNotRequired, makeInvariant) => specable => {
    const notRequired = makeNotRequired(specable);
    notRequired.isRequired = specable;
    notRequired.invariant = func => makeInvariant(specable, func);
    return notRequired;
};
```
Проверяем:

```js
const checkFamilyStruct = makeFamilySpec(jestSpec);
const generatorFamilyStruct = makeFamilySpec(genSpec);

describe('convertFrom and convertTo properties', () => {
  check.it('convertFrom -> convertTo save original shape', [generatorFamilyStruct], structFromBackend => {
    const structForFrontend = convertFrom(structFromBackend);
    const structForBackend = convertTo(structForFrontend);
    checkFamilyStruct(structForBackend);
  });
});
```
Ура, заработало! <a target="_blank" href="https://gist.github.com/typeetfunc/ac4ed98d5014870c797ce138796f5cc4">Гист с полным кодом</a>

Вообще, идея иметь одно описание данных и по нему получать и валидаторы, и генераторы придумана, конечно же, не мной.
Именно на этом базируется довольно новая технология  – <a target="_blank" href="http://clojure.org/about/spec">clojure.spec</a>, которая, в свою очередь, черпала вдохновение из <a target="_blank" href="http://docs.racket-lang.org/guide/contracts.html">системы контрактов Racket</a>.

Еще дальше идет проект <a target="_blank" href="http://frenchy64.github.io/2016/08/07/automatic-annotations.html">Automatic annotations</a> для все той же Clojure. Ребята предлагают динамически анализировать юнит-тесты, вычислять по ним возможные ограничения на данные и далее использовать их как для compile-time проверок при помощи <a target="_blank" href="https://github.com/clojure/core.typed">core.typed</a> (система опциональной типизации для Clojure), так и для run-time проверок при помощи `clojure.spec`.

С другой стороны, в Haskell сообществе существуют подходы, при которых тесты, проверяющие свойства, генерируются по типам в программе. <a target="_blank" href="https://www.youtube.com/watch?v=y_auT62ycVc">Вот интересный доклад на эту тему</a>.

>Как типы могут помогать писать тесты, так и тесты могут помочь писать типы  –между ними явно есть какая-то связь.

Такие решения позволяют проверять простые ограничения (например, что мы не передаем строки в функцию сложения чисел) статически  – и получать мгновенный отклик, а сложные свойства(вроде того, что при любых операциях баланс пользователя не должен быть отрицательным, или то, что сериализация и десериализация любого типа возвращает исходный объект) – проверять динамически при помощи генеративных тестов (что, конечно, более медленно, но зато без необходимости использовать сложные системы типов, включающие <a target="_blank" href="https://www.quora.com/Can-Haskell-theoretically-support-property-checking-as-in-Agda">dependant и refinement типы</a>).

#### Какие, какие типы?

Люди, знакомые с языками со статической системой типов, возможно, уже могли заметить схожесть спецификаций, которые мы использовали для описания структуры семьи пользователя, с описанием типов в статических языках.

Сравните:

```js
const makeFamilySpec = spec => spec.shape({
  type: spec.oneOf(['espoused', 'single', 'common_law_marriage']),
  members: spec.arrayOf(
    spec.shape({
      role: spec.oneOf(['sibling', 'child', 'parent', 'spouse']).isRequired,
      fio: spec.shape({
        firstname: spec.string,
        lastname: spec.string,
        middlename: spec.string
      }),
      dependant: spec.bool
    }).isRequired
  )
}).invariant(mapFamily);
```

С кодом на TypeScript:

```js
interface familySpec {
  type?: 'espoused' | 'single' | 'common_law_marriage',
  members: Array<{
    role: 'sibling' | 'child' | 'parent' | 'spouse',
    fio?: {
      firstname?: string,
      lastname?: string,
      middlename?: string
    },
    dependant?: boolean
  }>
}
```

Согласитесь, эти две декларации крайне схожи по смыслу, хотя синтаксис и разный. Да и наше свойство мы можем легко записать на TypeScript в таком виде:

```js
function convertFrom(family: familySpec): familyConverted
function convertTo(familyConverted: familyConverted): familySpec
```

Однако в системе типов TypeScript мы никак не можем указать инвариант `mapFamily`, который проверяет структуру, что очень сильно снижает полезность нашей спецификации. Но это только частные проблемы TypeScript и других подобных систем типов. Существуют refinement и dependant типы, которые позволяют _статически_ доказывать соответствие значения некоторому предикату. Простой пример — это тип «натуральные числа»:

```js
type nat = {v : number | 0 ≤ v }
```

Похожим образом можно выразить и проверку структуры семьи пользователя. И это будет полностью статическая проверка, которая будет гарантированно соблюдаться во всех точках программы. Но при этом нам придется доказать компилятору, что данное свойство соблюдается везде. В случае сложных свойств это может потребовать кода больше, чем необходимо для описания логики приложения.

В итоге вся разница статических и динамических спецификаций сводится к следующему:

 - Статические: проверяются при помощи инструментов статической верификации, дают 100% гарантии соотвествия спецификации. Но по умолчанию считают, что ваш код не соответствует спецификации и заставляют писать много дополнительного кода для того, чтобы доказать, что&nbsp;код все-таки ей соответствует.

 - Динамические: проверяются при помощи генеративного тестирования (и других его видов), дают только вероятностную гарантию. То есть по умолчанию считается, что наш код работает согласно спецификации, и только если тестирование покажет обратное — спецификация считается нарушенной. Также нет необходимости в написании какого-либо специального кода для доказательства корректности нашего кода.

>Нет никакого фундаментального противоречия между динамическими и статическими языками и системами типов.

Возможно, языки будущего вообще не будут разделяться на статические и динамические, а будут просто позволять управлять степенью строгости проверок и их количеством в процессе разработки программы.

На этапах разработки, когда корректность не очень важна (например, на этапе прототипа), мы будем довольствоваться небольшим набором свойств (частично выведенными в run-time из тестов, частично написанными нами), проверять которые будем при помощи property тестов в run-time. Постепенно переходя к этапам, когда корректность выходит на первый план (когда у нас уже много пользователей, много кода, много разработчиков), будем увеличивать количество свойств и начнем проверять их при помощи средств статической верификации (refinement и dependant типы).

В итоге одни и те же свойства мы сможем проверять как статически, так и динамически, в зависимости от того, что важнее для нас на данном этапе разработки — корректность или скорость и удобство разработки.

### Решение №2 — простое

Однако мы немного отвлеклись от темы. Нашей целью было доказать, что `convertTo` — функция обратная `convertFrom`, но нам помешала простановка дефолтных значений. Можно ли было как-то решить эту проблему, не ослабляя требования к свойствам и без изобретения нового API?

Да, конечно, мы можем просто вынести простановку дефолтных значений в отдельную функцию `setDefault` (которая будет выполняться перед или после `convertFrom`) из&nbsp;`convertFrom`, и тогда `convertFrom` станет удовлетворять исходному свойству.

Иногда начинающие разработчики (такие, как я,&nbsp;например) при возникновении проблемы сразу бросаются писать код, который ее решает. Зачастую стоит сначала подумать: «может, проблему можно решить совсем на другом уровне?». Например, лучше разбить API модуля согласно тому, какие гарантии нам предоставляют те или иные вызовы — как&nbsp;в&nbsp;нашем случае.

По традиции, для тех, кто недостаточно устал от чтения моей статьи, дам небольшое «домашнее задание»: какому свойству может удовлетворять функция `setDefault`? Напомню, что эта функция проставляет значения по умолчанию в структуре данных, если значения отсутствуют.

### В чем сложности?

<Img imageName='matroskin' alt='Матроскин'>

Несмотря на очевидную пользу, property-based тесты (а.к.a QuickCheck тесты) не имеют большой популярности среди разработчиков, даже учитывая то, что уже существует множество реализаций <a target="_blank" href="https://en.wikipedia.org/wiki/QuickCheck">почти для любого языка программирования</a>.

Причина в том, что свойства, пригодные для проверки, таким способом очень трудно выделить в типичном продакшен коде. Но почему?

Во-первых, разработчики не привыкли думать о свойствах, которые предоставляет их решение — соответственно, мы проектируем и разрабатываем систему без&nbsp;опоры на какие-либо свойства. TDD и BDD во многом приучили нас думать и _разрабатывать_ отдельными сценариями — «если ввести A, то вернется B» — то есть, по сути, отдельными «точками». Очень сложно перейти от такого дискретного мышления к более непрерывному — «свойство выполняется для любого A из некоторого множества». Помочь здесь может только практика (как своя, так и чужая): пробуйте искать свойства в своем коде, смотрите как это делают другие (ниже я оставил ссылки на отличные статьи с примерами).

Во-вторых, можно было заметить, что в нашем примере исследуемые функции были чистыми (то есть без сайд-эффектов), но, к сожалению, большая часть фронтенд кода — это функции с сайд-эффектами (от походов в сеть до работы с глобальным состоянием). Общеизвестно, что функции с сайд-эффектами тестировать сложнее, чем чистые функции, определить же их свойства практически невозможно. Сайд-эффект имеет дело с чем-то, что находится за границами тестируемой сущности и обладает заведомо неопределенными свойствами, то есть его поведение непредсказуемо. Есть различные подходы, позволяющие отделять сайд-эффекты от основного кода (бизнес-логики), оставляя его чистым, однако, это тема для отдельной большой статьи.

### Полезные ссылки

<ul>
  <li><a target="_blank" href="http://fsharpforfunandprofit.com/posts/property-based-testing-2/">Choosing properties for property-based testing</a> <span> — подробно разбираются множество практических кейсов для property-based тестирования (с примерами и даже картинками). Обязательна к прочтению для тех, кто хочет использовать данный подход на практике.</span></li>

  <li><a target="_blank" href="http://jsverify.github.io/">JSVerify</a> <span> — еще одна реализация данного подхода на чистом Javascript. По возможности рекомендую использовать именно ее, так как ее намного проще отлаживать, в отличии от&nbsp;`testcheck-js` (стектрейсы не уводят в бесконечность ClojureScript рантайма). Имеет большой набор встроенных генераторов и поддержку асинхронных свойств.</span></li>

  <li><a target="_blank" href="https://github.com/prayerslayer/js.spec">JS.spec</a> <span> — биндинги к `clojure.spec` для JS. Пока очень сырые и не поддерживают из коробки генерацию по спецификациям, только валидацию.</span></li>

  <li><a target="_blank" href="https://github.com/omcljs/om/wiki/Applying-Property-Based-Testing-to-User-Interfaces">Applying Property Based Testing to User Interfaces</a> <span> — хорошая статья о реальном применении property-based тестов для&nbsp;тестирования UI (на примере работы со стейтом пользователя). Пример описан для&nbsp;библиотеки Om, но в целом те же практики можно использовать и для тестирования Redux приложений.</span></li>

  <li><a target="_blank" href="https://www.youtube.com/watch?v=E_at53wDH1w">Unikernel Full-Stack на Erlang</a> <span> — веселый доклад про верификацию программ. Отвечает на вопрос: «А зачем это нужно на практике?».</span></li>

  <li><a target="_blank" href="https://arxiv.org/pdf/1604.02480v1.pdf">Refinement Types for TypeScript</a> <span> — интересный пейпер, в рамках которого создан <a target="_blank" href="https://github.com/UCSD-PL/refscript">верификатор программ на TypeScript</a> на основе refinement типов.</span></li>

  <li><a target="_blank" href="https://www.youtube.com/watch?v=5lWIG3XQ2-A">LiquidHaskell: изящные типы.</a><span> — доклад, просто и понятно объясняющий refinement типы.</span></li>
</ul>

Напоследок хотелось бы сказать, что <span class="no-wrap">property-based</span> тестирование, как и любые другие методы контроля поведения программ (статические типы, любое другое тестирование, верификация), приносят пользу даже в сам момент начала их применения, так как разработчик начинает задумываться о том, как работает его код, какие свойства и гарантии он предоставляет, и уже это позволяет выявить многие проблемы или просто прийти к лучшему решению c точки зрения архитектуры и API. Не бойтесь пытаться использовать новые практики для анализа своих программ — даже если вам не удастся их внедрить по каким-то причинам, возможно, вы начнете лучше понимать свой код.

Спасибо за внимание!

Возникшие вопросы или мысли по поводу данного подхода можно оставлять в комментариях или в твиттере — <a target="_blank" href="https://twitter.com/bracketsarrows">@bracketsarrows</a>.
