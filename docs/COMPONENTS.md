# Компоненты

Все компоненты можно посмотреть на [тестовом стенде](http://master.csssr-new-blog.csssr.cloud/en/article/example)

---
#### [`<Img />`](http://s.csssr.ru/U31J879TR/20200527121033.jpg)
Компонент, который нужен для того что бы вставлять изображения в статью.
В отличии от стандартного способа вставлять изображения в маркдаун,
этот компонент находит все изображения с определённым именем в папке со статикой для определённой статьи,
оптимизирует их и подставляет несколько его версий под определённые разрешения экранов.
Папку вы создаёте сами в `public/posts/`, название папки должно быть таким же как и название файла статьи.
Компонент принимает следующие пропсы

##### `name`
Тип данных: `string`\
Дефолтное значение: `undefined`

Название изображения в папке, где лежит статика для статьи.

##### `alt`
Тип данных: `string`\
Дефолтное значение: `undefined`

Должен содержать в себе текстовое описание изображения. Оно не обязательно, но невероятно полезно для доступности — программы чтения с экрана читают это описание своим пользователям. Лучше везде его указывать. Пишите такой текст, что бы слепой прочитав его понял что изображено на изображении.

##### `withBigMargin`
Тип данных: `boolean`\
Дефолтное значение: `false`

Указывает должны ли у изображения быть увеличенные отступы. Это нужно для изображений, которые отбивают текст.

##### Пример кода
```jsx
<Img name='digital-flowers' alt='Digital flowers in a physical real-world view' withBigMargin />
```

---
#### [`<Separator />`](http://s.csssr.ru/U31J879TR/20200527121838.jpg)
Используется для того, что бы разделять текст на логические составляющие. Может иметь разные изображения и разные цвета бекграунда. Изображения для этого компонента лежат в папке `public/components/separator`. Принимает следующие пропсы

##### `imgName`
Тип данных: `string`\
Дефолтное значение: `undefined`

Название изображения в папке, где лежит статика для этого компонента.

##### `type`
Тип данных: `color-line | bg-repeat`\
Дефолтное значение: `undefined`

Указывает в каком виде вы хотите отобразить изображение. `bg-repeat` если вы хотите изображение на репите, `color-line` если хотите одно изображение с цветной линией на фоне.


##### `lineColor`
Тип данных: `string`\
Дефолтное значение: `undefined`

Если в `type` вы выбрали `color-line`, то с помощью этого пропса вы можете указать цвет линии на фоне. Цвет можно указывать [любым способом доступным в HTML](https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML).

##### Пример кода
```jsx
<Separator imgName="peopleWithBasket" type="color-line" lineColor="#d3d3ff" />
```

---
#### [`<ParagraphWithImage />`](http://s.csssr.ru/U31J879TR/20200527123603.jpg)
Компонент параграфа c изображением в левом углу. Изображения для параграфа должны находится в той же папке, что и для компонента [`<Img />`](#img-). Принимает следующие пропсы

##### `imgName`
Тип данных: `string`\
Дефолтное значение: `undefined`

Название изображения в папке, где лежит статика для этого компонента.

##### Пример кода
```jsx
<ParagraphWithImage imgName="india">
  ## Lorem Ipsum

  Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor.
</ParagraphWithImage>
```

---
#### [`<Note />`](http://s.csssr.ru/U31J879TR/20200527124836.jpg)
Оборачивает текст в блок с серым бекграундом

##### Пример кода
```jsx
<Note>
  Venenatis cras sed felis eget velit. Consectetur libero id faucibus nisl tincidunt. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Volutpat consequat mauris nunc congue nisi vitae. Id aliquet risus feugiat in ante metus dictum at tempor.
</Note>
```

---
#### [`<Quote />`](http://s.csssr.ru/U31J879TR/20200527125130.jpg)
Компонент цитаты. Имеет два вида, с изображением слева и с кавычками вместо изображения. Изображения для этого компонента лежат в папке `public/components/quote`. Принимает следующие пропсы

##### `imgName`
Тип данных: `string`\
Дефолтное значение: `undefined`

Название изображения в папке, где лежит статика для этого компонента.

##### `author`
Тип данных: `string`\
Дефолтное значение: `undefined`

Имя автора цитаты.

##### `position`
Тип данных: `string`\
Дефолтное значение: `undefined`

Должность автора цитаты.

##### `withImage`
Тип данных: `boolean`\
Дефолтное значение: `false`

Если `withImage` имеет значение `true`, то будет использован вид цитаты с изображением, если нет, то с кавычками.

##### Пример кода
```jsx
<Quote author="Artyom Skatov" position="Project Manager, Gazprom Neft" withImage>
  There’s one more thing you should consider if/when facing the problem. The demotivated employees are often distracted, and they start distracting and frustrating those around them affecting negatively the general working atmosphere inside the team. If they have a client-facing position, then the problem may have a killing impact on your relationship with both the existing and potential customers.
</Quote>
```

---
#### [`<Subtitle />`](http://s.csssr.ru/U31J879TR/20200527125943.jpg)
Компонент подзаголовка, обычно он находится в самом начале статьи, между хедером статьи и первым параграфом.

##### Пример кода
```jsx
<Subtitle>
  Cost-effectiveness, high-quality services and other reasons why so many Singapore entrepreneurs are looking into offshoring web development services
</Subtitle>
```

---
