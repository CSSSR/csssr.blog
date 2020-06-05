# Привет летописец ✍

## Что нужно для работы над блогом
Если ты опытный верстала, то ты и так всё сам знаешь. Если же ты неофит блогописания, то
для начало нужно [скачать код проекта из репозитория](http://s.csssr.ru/U31J879TR/20200526180041.jpg), 
далее я настоятельно тебе рекомендую поставить [VSCode](https://code.visualstudio.com/), 
в нём есть всё что тебе нужно: редактор кода, терминал, графический интерфейс для работы с git.
 Далее я буду описывать работу с проект на примере VSCode.

## Как запустить проект
Открываем папку с проектом в VSCode. 
Для запуска проекта [нужно открыть терминал](https://code.visualstudio.com/docs/editor/integrated-terminal) 
и выполнить в нём следующие команды
```cmd
yarn
```
Эта команда установит все зависимости, нужные проекту.

```cmd
yarn dev
```
Эта команда запустит проект. 
Команду `yarn` достаточно выполнить всего один раз, команду `yarn dev` нужно будет выполнять каждый раз, 
когда вы захотите запустить проект и увидеть результаты своей работы в режиме реального времени на локальном хосте.

> *Локальный хост* - это адрес сервера, который вы запускаете у себя на компьютере, 
по дефолту это http://localhost:3000/. Доступ до этого адреса будет только у вас.

После того, как вы увидите [сообщение об удачной сборке проекта](http://s.csssr.ru/U31J879TR/20200526185410.jpg)
вы можете перейти перейти на адрес локального хоста и перед вами предстанет сайт блога.

## Ну запустили проект, а дальше то что?
Нужно ввести ещё несколько команд 😁
```cmd
git checkout review
```
Эта команда переведёт вас в ветку, где пишутся новые статьи.

```cmd
git pull origin review
```
Эта команда обновит ветку `review` до актуальной версии. 
После того, как убедимся что ветка `review` обновилась до актуального состояния,
можно приступать к написания новых статей.

## Как создать страницу статьи

[Инструкция по созданию нового поста](scripts/postTemplate/README.md)








В папке [`_posts`](https://github.com/CSSSR/csssr.blog/tree/master/_posts) создаёте файл с `md` расширением. Название файла будет использовано в `url` поста, т.e. если создать файл с именем `new-awesome-post.md`, то будьте уверены что сможете найти его по адресу `http://localhost:3000/posts/new-awesome-post`.
Содержит в себе пути до изображений которые используются в [карточке поста](http://s.csssr.ru/U31J879TR/20200527101534.jpg) на главной странице - `mainPage`, и в [заголовке поста](http://s.csssr.ru/U31J879TR/20200527101626.jpg) - `postPage`. 
Обычно у нас используются разные изображения для разных размеров экранов, поэтому `desktop.all` и `mobile.all` указывают на пути до изображений для десктопа и мобильной версии сайта.

#### `ogImage`
Указывает на путь до изображения, которое будет использоваться для шеринга в социальных сетях. Обычно для этого используется первая картинка в статье.


## Как писать статью
Любая статья содержит в себе мета-информацию и контент.

### Мета-информация
Мета находится в самом вверху статьи между двумя тройными тире `---`
```md
---
title: 'Это <i>пример</i> использования компонентов'
coverImageAlt: 'Описание изображения'
date: '2019-03-16T05:35:07.322Z'
tag: 'Web-development'
---
```
, где

#### `title`
Заголовок статьи. Символы заключенные в тег `<i>` на страничке статьи будут отображены в шрифте Amita. 
Также, этот title используется для SEO.

#### `coverImageAlt`
Alt-текст для основного изображения статьи. Alt-текст должен описывать словами то, что изображено на картинке. 
Это очень полезно для скрин ридеров.

#### `date`
Дата создания статьи в формате [ISO-8601](https://ru.wikipedia.org/wiki/ISO_8601)

#### `tag`
Раздел в блоге, к которому относится статья

### Контент
Контент статьи это [маркдаун](https://www.markdownguide.org/getting-started/#whats-markdown), но с апгрейдами. 
Помимо [стандартного синтаксиса маркдауна](https://www.markdownguide.org/basic-syntax/) 
в нём можно использовать специально подготовленные кастомные компоненты, которые мы разработали для нашего блога.

---
#### [`<Img />`](http://s.csssr.ru/U31J879TR/20200527121033.jpg)
Компонент, который нужен для того что бы вставлять изображения в статью. В отличии от стандартного способа вставлять изображения в маркдаун, этот компонент находит все изображения с определённым именем в папке со статикой для определённого поста, оптимизирует их и подставляет несколько его версий под определённые разрешения экранов. Папку вы создаёте сами в `public/posts/`, название папки должно быть таким же как и название файла поста. Компонент принимает следующие пропсы

##### `name`
Тип данных: `string`\
Дефолтное значение: `undefined`

Название изображения в папке, где лежит статика для поста.

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
## Если написали статью и хотите её поделится
Если вы находитесь в ветке `review`, то сделайте коммит (сохраните в ветке текущее состояние статьи) командой
```cmd
git commit -m 'Создал статью: **Название вашей статьи**'
```
и опубликуйте статью на стенд http://review.csssr-new-blog.csssr.cloud/ командой
```
git push origin review
```
после этого через несколько минут на стенде появится ваша статья.

## Но я не вижу свою статью на главной странице стенда
Для того что бы статья отобразилась на главной странице, вам нужно открыть в файл `Posts.jsx`, он находится в папке `components/main/Posts`. В этом файле найдите массив `postsOrder`
```javascript
const postsOrder = [
  ['offshore-web-development', 'augmented-and-virtual-reality'],
  ['html-or-cms-or-custom-development', 'eight-ways-to-Improve-staff-motivation'],
  ['creative-and-web-development', 'tips-for-task-estimating'],
  ['the-baltic-e-success', 'split-stack-web-development'],
]
```
это схематическое изображение статей на главной странице. Наличие и порядоr статей в этом массиве определяет порядок и наличие статей на главной странице. Добавьте куда вам нужно название файла с вашей статьей и она отобразится на главной странице.
```javascript
const postsOrder = [
  ['offshore-web-development', 'augmented-and-virtual-reality'],
  ['html-or-cms-or-custom-development', 'eight-ways-to-Improve-staff-motivation'],
  ['creative-and-web-development', 'tips-for-task-estimating'],
  ['the-baltic-e-success', 'split-stack-web-development'],
  ['new-awesome-post']
]
```
проверьте на локальном хосте что ваша статья появилась на главной странице, после cделайте новый коммит командой
```cmd
git commit -m 'Правки к статье: **Название вашей статьи**'
```
и опубликуйте статью на стенд командой
```
git push origin review
```
после этого на главной странице стенда появится ваша статья 🎉
