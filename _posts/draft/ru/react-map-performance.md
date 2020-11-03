---
title: 'Повышаем производительность рендера списков в React-компонентах'
date: '2016-07-28T20:00:00.000Z'
author: 'Felix Exter'
coverImageAlt: 'Описание изображения'
tag: 'web-development'
---

**Ч**асто при написании компонентов приходится использовать мапы для рендера списков.

![image](/images/react.png)

```js
items.map(({ value }, i) =>
	<div key={i} styleName='value'>{value}</div>
)
```

Элемент списка может содержать много разметки.

```js
items.map(({ name, value }, i) =>
	<div key={i} styleName='item'>
		<div styleName='name'>{name}</div>
		<div styleName='value'>{value}</div>
	</div>
)
```

Обычно всё это нужно **выносить в отдельный компонент и переиспользовать**.

```js
items.map(({ name, value }, i) =>
	<Item
		key={i}
		name={name}
		value={value}
	/>
)
```

**Использование индекса в ключе - антипаттерн.**
Я показывал поэтапно, но лучше сразу выбросить текущий индекс из `key` и заменить его на уникальный `id`.
React не будет перерендеривать уже имеющийся компонент с этим же ключом, хотя в мапе пропсы поменялись.
Побочным эффектом, например, может быть дублирование или изменение порядка в списке и т.п.

```js
items.map(({ id, name, value }) =>
	<Item
		key={id}
		name={name}
		value={value}
	/>
)
```

Но иногда в вёрстке элементов списка нужно добавлять внешние отступы.
Т.к. компоненты переиспользуются, задавать им их нелогично.
Для этого добавляется обёртка над компонетом.

```js
items.map(({ id, name, value }) =>
	<div key={id} styleName='item'>
		<Item name={name} value={value} />
	</div>
)
```

Вроде бы всё норм, но не так давно [@laiff](https://github.com/laiff) поделился опытом по этому поводу.

Чтобы при генерации разметки получить этот `div`,
React сначала рендерит компонент в разметку, потом производится дифф определённым алгоритмом.

Если в мапе находится сразу компонент, то это процесс отсекается до этого алгоритма, т.к. есть `ReactInstance` с `shouldComponentUpdate` и другими проверками типа `key`.
То есть **снова нужно выноcить в компонент**.
Получается то же самое, что было и раньше, только в это раз в вёрстке есть отступы.

```js
items.map(({ id, name, value }) =>
	<Item
		key={id}
		name={name}
		value={value}
	/>
)
```

Использование компонентов в мапах также производительней при добавлении различных обработчиков,
например, на событие `onClick`.
Если с обёрткой, это делалось путём вызова функции
и передачи ей необходимых данных, создавая каждый раз новую функцию:

```js
items.map(({ id, name, value }) =>
	<div key={id} styleName='item'>
		<Item
			name={name}
			value={value}
			onClick={onClick(id)}
		/>
	</div>
)
```

То напрямую с компонентом передаются все необходимые данные и сама функция, которая внутри создастся один раз:

```js
items.map(({ id, name, value }) =>
	<Item
		key={id}
		id={id}
		name={name}
		value={value}
		onClick={onClick}
	/>
)
```

Отдельно стоит упомянуть о либах [`pure-render-decorator`](https://github.com/felixgirault/pure-render-decorator)
и [`recompose`](https://github.com/acdlite/recompose),
которые добавляют компоненту проверку пропсов в `shouldComponentUpdate`
и решают, когда нужен перерендер, тем самым увеличивая скорость работы приложения.
В будущем они не понадобятся, т.к. в React это будет работать по умолчанию из коробки.

Всё вместе в итоге.

```js
// list/index.jsx
import { Component } from 'react'
import pure from 'pure-render-decorator'
import css from 'react-css-modules'
import styles from './styles.sss'
import ListItem from './item'

@css(styles)
@pure
export default class List extends Component {
	// ...

	renderItem = ({ id, name, value }) =>
		<ListItem
			key={id}
			id={id}
			name={name}
			value={value}
			onClick={this.props.onClick}
		/>

	render() {
		return <div styleName='list'>
			{this.props.items.map(this.renderItem)}
		</div>
	}
}
```

```js
// list/item.jsx
import { Component } from 'react'
import pure from 'pure-render-decorator'
import css from 'react-css-modules'
import styles from './styles.sss'
import Item from '../item'

@css(styles)
@pure
export default class ListItem extends Component {
	// ...

	onClick = () => this.props.onClick(this.props.id)

	render() {
		const { id, name, value } = this.props

		return <div styleName='item'>
			<Item
				name={name}
				value={value}
				onClick={this.onClick}
			/>
		</div>
	}
}
```

```js
// item/index.jsx
import pure from 'pure-render-decorator'
import css from 'react-css-modules'
import styles from './styles.sss'

function Item({ name, value }) {
	return <div styleName='item'>
		<div styleName='name'>{name}</div>
		<div styleName='value'>{value}</div>
	</div>
}

export default pure(css(Item, styles))
```

Вот так готовятся компоненты в нашей кухне.
А как вы это делаете?


Человек из космоса,
[@felixexter](https://twitter.com/felix_exter)
