---
title: 'Основы <i>производительности</i> React-приложений'
coverImageAlt: 'Основы производительности React-приложений'
author: 'Александр Петров'
date: '2016-12-07T00:00:00.000Z'
tag: 'web-development'
---

---

**В**сем привет! Меня зовут Александр, и я ведущий Javascript-разработчик CSSSR. В данный момент я веду достаточно сложный и крупный проект на Реакте. На проекте есть разработчики разных уровней, некоторым из них было сложно привыкнуть к тому, как ведет себя Реакт и как на нем разрабатывать крупные приложения. Бóльшая часть недопониманий была с производительностью, о ней и пойдёт речь в статье.

## Как работает React

React считается быстрым из-за VirtualDOM. В компоненте есть метод render, который вызывается при каждом обновлении компонента. Затем результат рендера (здесь и далее под рендером будет иметься в виду именно вызов функции render компонента, а не рендер в реальный DOM) обрабатывается Реактом, сравнивается результат текущего рендера с результатом предыдущего и в реальный DOM вносятся только необходимые изменения, а не целиком. Учитывая, что операции с реальным DOM медленные, это должно быть быстрее.

Проблема в том, что операции с VirtualDOM тоже могут быть медленными. Результат рендера Реакта — это многоуровневый объект. Сравнение результатов рендера — это не сравнение двух объектов по ссылке, а их полное, глубокое сравнение. Казалось бы, стоит держать компоненты небольшими, и тогда их перерендер будет происходить быстро.

Но Реакт запускает рендер компонента в двух случаях:

- Вызов setState;
- Рендер родителя.

Обратите внимание на формулировку, она точно отражает суть. Не при изменении стейта компонента или при изменении его пропсов, а именно после вызова setState и после рендера родителя.

Пример для того, чтобы понять в чем разница:

```js
class Parent extends React.Component {
  state = {
    index: 0,
  }

  render() {
    console.log('Render Parent')

    return (
      <div>
        Parent: {this.state.index}
        <button onClick={() => this.setState({ index: this.state.index + 1 })}>Rerender</button>
        <Child />
      </div>
    )
  }
}

const Child = () => {
  console.log('Render Child')
  return <div> Child </div>
}
```

[CodePen](https://codepen.io/dzhiriki/pen/LRBQXE?editors=0010)

В примере выше мы по нажатию на кнопку вызываем setState у компонента Parent, но если посмотреть в консоль, то можно увидеть, что Child тоже перерендеривается. Более того, если мы заменим обработчик на `() => this.setState({ index: this.state.index })` или даже `() => this.setState({})`, то у нас всё равно будут перерендериваться оба компонента. Причина в том, что Реакт из коробки никак не проверяет изменение стейта или пропсов компонента. Все проверки, что делает React — это сравнение результата рендера. Таким образом, если у вас большое приложение, и вы вызываете setState у корневого компонента, у вас всё приложение целиком будет перерендерено. Реакт построит VDOM для всего приложения, сравнит его с предыдущим результатов и в DOM поместит те самые незначительные правки (если они даже были). Всё это приведет к значительным потерям в производительности приложения.

## shouldComponentUpdate

Для решения этой проблемы в компонентах есть метод `shouldComponentUpdate`. Он вызывается перед каждым потенциальным рендером, и в него аргументами приходят nextProps и nextState. Если этот метод возвращает false, то у компонента (а значит, и у всех дочерних) не вызывается рендер, Реакт не строит дерево и не делает глубокое сравнение по всему этому дереву. Гораздо меньше работы.

Правда, нужно учитывать, что `shouldComponentUpdate` должен отрабатывать быстро. Если трудозатраты будут сравнимы с трудозатратами по сравнению VDOM, то от `shouldComponentUpdate` будет лишь вред, а не польза. Самое быстрое сравнение — это сравнение через `===`, с которым можно пройти по всем ключам стейта \ пропсов и проверить каждое значение. Вопрос в том, будет ли оно давать верный результат? С типами данных, которые сравниваются по значению (числа, строки, булевые значения) проблемы нет, проверка всегда будет корректная. Проблема возникает, когда в стейте есть ссылочные типы. Если мутировать объект, то нет никакой возможности проверить, изменилось ли значение, так как объект в текущем и новом стейте будет ссылаться на один и тот же объект. Пример:

```js
var a = { prop1: 1 }
var b = a
b.prop2 = 2
console.log(a === b) // true
console.log(a.prop2) // 2
```

В контексте Реакта это изменения стейта таким образом:

```js
// Объект
const newValue = this.state.object
newValue.prop = 7
this.setState({
  object: newValue,
})

// Массив
const newValue = this.state.array
newValue[1] = 7
this.setState({
  array: newValue,
})
```

Таким образом, сравнение через `===` будет давать ложноотрицательный результат: компонент не будет перерендериваться, хотя данные в действительности поменялись.

Бывает и обратная ситуация. Когда мы каждый раз создаем ссылочный тип данных, даже если данные в нем не поменялись.

```js
const currentRange = this.state.range // Допустим, [5, 10]
const max = currentRange[1]

this.setState({
  range: [5, max],
})
```

Получается, что у нас каждый раз создается новый массив, новая ссылка. И сравнение через `===` будет всегда возвращать false и компонент будет перерендериваться, хотя не должен.

В итоге мы получаем два принципа:

- Каждый раз, когда меняются данные, должна создаваться новая ссылка.
- Новая ссылка должна создаваться только тогда, когда меняются данные.

Первый принцип достигается достаточно просто: либо заменяем все мутабельные операции на аналогичные иммутабельные операции, либо создаем новую ссылку и затем уже её мутируем. Пример:

```js
// Создаем новый объект, сразу задавая свойство
const newValue = {
  ...this.state.object,
  prop: 7,
}

// Аналогично примеру выше, но без использования spread-оператора
// Обратите внимание, что первым аргументом передается пустой объект
const newValue = Object.assign({}, this.state.object, {
  prop: 7,
})

// Или просто создаем новый объект, который потом мутируем
const newValue = { ...this.state.object }
newValue.prop = 7
```

Аналогично и для массива:

```js
// Создаем новый массив через map
const newValue = this.state.array.map((item, index) => (index === 1 ? 7 : item))
// Создаем массив, который мутируем
const newValue = [...this.state.array]
newValue[1] = 7
```

Также хорошим вариантом является [использование линз](https://blog.csssr.com/ru/article/react-perfomance/lenses/).

Со вторым принципом всё несколько сложнее. Обратите внимание, что в примерах выше, если текущее значение _уже_ равняется 7, то всё равно будет создана новая ссылка. Поэтому необходимо проверять, точно ли меняются данные и нужна ли нам новая ссылка:

```js
if (this.state.object.prop !== 7) {
  const newValue = {
    ...this.state.object,
    prop: 7,
  }
  this.setState({
    array: newValue,
  })
}
```

При этом бывают и более сложные ситуации. Представьте, что вам в компонент приходит массив чисел, а в компоненте рендерится другой компонент, куда нужно передать удвоенные числа. Тут уже проверка на правда ли изменились данные не поможет. Плохая реализация компонента будет выглядеть примерно так:

```js
class Square extends PureComponent {
  render() {
    const array = this.props.array.map((item) => item * 2)

    return <Child array={array} />
  }
}
```

Проблема заключается в том, что map каждый раз возвращает новый массив, хотя значение в пропсах не изменилось (та же самая ссылка).

Более правильный вариант:

```js
class Square extends PureComponent {
  componentWillMount() {
    this.setArray(this.props.array)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.array !== this.props.array) {
      this.setArray(nextProps.array)
    }
  }

  setArray(array) {
    this.setState({
      array: array.map((item) => item * 2),
    })
  }

  render() {
    return <Child array={this.state.array} />
  }
}
```

В данном случае мы храним вычисленный массив в стейте и меняем его только тогда, когда в пропсах изменилось значение, но в таком варианте мы получаем гораздо больше кода, вынуждены хранить в стейте вычисляемое значение (что является антипаттерном), и нам необходимо вручную отлавливать, когда данные изменились. Если множитель будет также приходит из пропсов, то проверять нужно будет уже 2 пропса.

Наилучшим решением будет использование мемоизации. Функция на одни и те же аргументы будет возвращать тот же самый результат (из кеша), а не вычислять его заново. Основное предназначение мемоизации — для функций, внутри которых происходят сложные вычисления. В нашем же случае важен тот момент, что так как значение берется из кеша, то возвращается _та же самая ссылка_. И так как у нас все данные иммутабельны, то нужна мемоизация, которая будет проверять значения по ссылке, а не глубоким сравнением (как, например, поступает [R.memoize](http://ramdajs.com/docs/#memoize), поэтому я не рекомендую её использовать, лично я сейчас пользуюсь [memoizee](https://www.npmjs.com/package/memoizee).

С мемоизацией мы получим следующее:

```js
const getArray = memoizee((array) => array.map((item) => item * 2))

class Square extends PureComponent {
  render() {
    const array = getArray(this.props.array)

    return <Child array={array} />
  }
}
```

При каждом рендере мы как бы вычисляем новое значение. Но если пропс не изменился, мы получим ту же самую ссылку. Как только пропс изменится, кеша не будет, и мы при первом рендере нового массива получим новый массив, а затем снова будем брать значение из кеша.

Также многие забывают, что использование стрелочных функций, bind и литералов массивом \ объектов в рендере создает новую ссылку при каждом рендере:

```js
<Child
  onMouseDown={(e) => this.handleMouseDown(e)}
  onClick={this.handleClick.bind(this)}
  items={[1, 2]}
/>
```

Первые два пункта решаются использованием bind один раз в конструкторе или использованием [свойств класса](https://babeljs.io/docs/plugins/transform-class-properties/). Третий — выносом литералов за пределы рендера.

Таким образом, мы получили, что при правильной работе с данными мы можем сравнивать стейт и пропсы через `===` и получать корректный результат.

Сама проверка реализуется следующим образом:

- В версии 15.3.0 появился PureComponent, который содержит такую проверку;
- Для ES6-классов есть [pure-render-decorator](https://www.npmjs.com/package/pure-render-decorator) или [react-pure-render](https://github.com/gaearon/react-pure-render);
- Для ES5-классов — [PureRenderMixin](https://facebook.github.io/react/docs/pure-render-mixin.html);
- Для функциональных компонентов такой проверки нет, но в [recompose](https://github.com/acdlite/recompose) есть метод pure, который оборачивает функциональный компонент в класс и добавляет такую проверку.

## ImmutableJS

Я специально не касался в этой статье ImmutableJS, чтобы было понятно, что иммутабельность — это принцип, а не библиотека.

ImmutableJS не позволит мутировать значения переменных и позволит избежать проверок на то, изменилось ли значение и нужно ли создавать новую ссылку:

```js
const list1 = Immutable.List([1, 2, 3])
const list2 = list1.set(0, 1)
console.log(list1 === list2) // true, задали такое же значение
const map1 = Immutable.Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 2)
console.log(map1 === map2) // true, задали такое же значение
```

ImmutableJS не поможет в тех местах, где нужна мемоизация данных, за этим по&nbsp;прежнему придется следить самому. К тому же ImmutableJS вводит еще один слой абстракции над данными. Стоит ли его использовать, решать вам.

## Заключение

Средние и крупные проекты без использования shouldComponentUpdate будут очень медленными, поэтому использование этого метода обязательно для практически любого проекта. Наибыстрейшая проверка — это сравнение по ссылке, которое будет давать корректный результат только при соблюдении определенных правил. Иммутабельное изменение данных хоть и медленнее, чем мутации, но благодаря быстрой проверке и избавлению от лишних перерендеров, использовать однозначно стоит.
