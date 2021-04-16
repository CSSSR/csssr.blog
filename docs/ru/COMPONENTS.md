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

##### `imageName`
Тип данных: `string`\
Дефолтное значение: `undefined`

Название изображения в папке, где лежит статика для статьи.

##### `alt`
Тип данных: `string`\
Дефолтное значение: `undefined`

Должен содержать в себе текстовое описание изображения. Оно не обязательно, но невероятно полезно для доступности — программы чтения с экрана читают это описание своим пользователям. Лучше везде его указывать. Пишите такой текст, что бы слепой услышав его понял что изображено на изображении.

##### `withBigMargin`
Тип данных: `boolean`\
Дефолтное значение: `false`

Указывает должны ли у изображения быть увеличенные отступы. Это нужно для изображений, которые отбивают текст.

##### `align`
Тип данных: `center` | `right` | `left`\
Дефолтное значение: `center`

Отвечает за положение изображения на странице.

##### Пример кода
```jsx
<Img imageName='digital-flowers' alt='Digital flowers in a physical real-world view' withBigMargin />
```

---
#### [`<Separator />`](http://s.csssr.ru/U31J879TR/20200527121838.jpg)
Используется для того, что бы разделять текст на логические составляющие. Может иметь разные изображения и разные цвета бекграунда. Изображения для этого компонента лежат в папке `public/components/separator`. Принимает следующие пропсы

##### `imageName`
Тип данных: `string`\
Дефолтное значение: `undefined`

Название изображения в папке, где лежит статика для этого компонента.

##### `type`
Тип данных: `color-line` | `bg-repeat`\
Дефолтное значение: `undefined`

Указывает в каком виде вы хотите отобразить изображение. `bg-repeat` если вы хотите изображение на репите, `color-line` если хотите одно изображение с цветной линией на фоне.


##### `lineColor`
Тип данных: `string`\
Дефолтное значение: `undefined`

Если в `type` вы выбрали `color-line`, то с помощью этого пропса вы можете указать цвет линии на фоне. Цвет можно указывать [любым способом доступным в HTML](https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML).

##### Пример кода
```jsx
<Separator imageName="peopleWithBasket" type="color-line" lineColor="#d3d3ff" />
```

---
#### [`<ParagraphWithImage />`](http://s.csssr.ru/U31J879TR/20200527123603.jpg)
Компонент параграфа c изображением в левом углу. Изображения для параграфа должны находится в той же папке, что и для компонента [`<Img />`](#img-). Принимает следующие пропсы

##### `imageName`
Тип данных: `string`\
Дефолтное значение: `undefined`

Название изображения в папке, где лежит статика для этого компонента.

##### Пример кода
```jsx
<ParagraphWithImage imageName="india">
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

##### `imageName`
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

##### `type`
Тип данных: `blue` | `black`\
Дефолтное значение: `black`

Отвечает за внешний вид компонента цитаты без изображения. При `blue` цвет текста в цитате синий, а кавычки черные, при `black` наоборот.

##### `linkText`
Тип данных: `string`\
Дефолтное значение: `undefined`

Текст ссылки под цитатой. 

##### `linkHref`
Тип данных: `string`\
Дефолтное значение: `undefined`

URL ссылки под цитатой. 

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
#### [`<Table />`](http://s.csssr.ru/U31J879TR/20200626122639.jpg)
Компонент таблицы. Имеет три вида: с фиолетовыми, зелёными и бесцветными заголовками. `<Table />` является оберткой на html-тегом `<table />`, посему принимает все те же атрибуты и потомков, что и html-тег. Для строк заголовков с атрибутом `colspan="4"` нужно указывать атрибут `data-text` и дублировать в него текст из строки. Это нужно для того, что бы правильно работал скрол этого поля на мобилке. Компонент принимает следующие пропсы

##### `color`
Тип данных: `green | purple`\
Дефолтное значение: `undefined`

Цвет заголовков. Если нужны бесцветные заголовки, то этот пропс не нужно указывать.

##### `withBorders`
Тип данных: `boolean`\
Дефолтное значение: `false`

Если `withBorders` имеет значение `true`, то в таблице появятся дополнительные бордеры.

##### Пример кода
```jsx
<Table color='purple' withBorders>
  <thead>
    <tr>
      <th />
      <th>Команда в вашем офисе</th>
      <th>Команда в своем офисе</th>
      <th>Распределенная команда</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4">Цель</th>
    </tr>
    <tr>
      <th>«Скорая помощь» проекту</th>
      <td>++</td>
      <td>+</td>
      <td>-</td>
    </tr>
    <tr>
      <th>Поддержка разработки или новый функционал</th>
      <td>+</td>
      <td>+</td>
      <td>+</td>
    </tr>
    <tr>
      <th>Старт разработки</th>
      <td>+</td>
      <td>+</td>
      <td>+</td>
    </tr>
  </tbody>
</Table>
```
---

#### [`<Caption />`](http://s.csssr.ru/U31J879TR/2021-04-08-14-35-57-558l7_.jpg)
Компонент подписи для изображений и видеоматериалов.

##### `size`
Тип данных: `s` | `l`\
Дефолтное значение: `undefined`

Размер текста подписи.

##### Пример кода
```jsx
<Caption size='l'>Lorem Ipsum</Caption>
```

---
#### [`<Video />`](http://s.csssr.ru/U31J879TR/2021-04-08-18-03-49-2dkpy_.jpg)
Компонент для вставки видео на страницу. Видео можно вставить с помощью `src` пропса или же как `embed` код внутрь данного компонента. Для компонента следует указывать `width` и `height`, с их помощью видео будет всегда приобретать правильные пропорции на различных разрешениях экрана.

##### `src`
Тип данных: `string`\
Дефолтное значение: `undefined`

URL для видео.

##### Пример кода
```jsx
<Video width="560" height="315">
    <iframe 
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/7nrDctGYOIk" 
        frameborder="0" 
        allow="accelerometer clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
    />
</Video>

<Video width="560" height="315" src='/video/camp-video.mp4' />
```