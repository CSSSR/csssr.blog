---
title: '<i>Генерация</i> карты сайта'
date: '2016-06-24T00:00:00.000Z'
coverImageAlt: 'Иллюстрация человека, делающего записи в планшет'
author: 'Игорь Уваров'
tag: 'web-development'
---

**П**риём-приём! На связи Игорь — <span style="white-space:nowrap">JS-разработчик</span> команды «Восток». Представляю вам рассказ о том, как я, работая над задачей по [нашему&nbsp;сайту](https://csssr.ru), вынес решение в публичный NPM пакет.

## Проблема

Пару месяцев назад мы переписали фронтенд нашего сайта на React. Все страницы также рендерятся на сервере для индексации поисковиками. Для улучшения этого процесса роботам нужно давать подсказки. Одной из таких подсказок является карта сайта — sitemap.xml. Так как у нас периодически добавляются новые страницы, то встал вопрос — можно ли автоматизировать обновление карты сайта при деплое новой версии сайта? И я начал поиски.

## Поиски решений

Первым результатом поисков было [issue](https://github.com/reactjs/react-router/issues/1843) в репозитории [react-router](https://github.com/reactjs/react-router), где обсуждали эту же задачу. Но там дали только направление и код, который возвращает список путей из конфигурации React Router. Это позволило понять, что автоматизировать нашу задачу&nbsp;можно!

Самое интересное, что пользователь, который подсказал это решение, создал у себя репозиторий react-router-sitemap, но кроме файла лицензии и Readme там ничего не было. Видимо руки не дошли. :)

Далее необходимо было найти решение, которое трансформировало бы пути в XML формат карты сайта. Ну тут долго искать не пришлось, а вот выбирать предстояло. Решений [очень](https://www.npmjs.com/search?q=+sitemap) много.

Так как сайт мы собираем с помощью Webpack, то было решено использовать [плагин](https://www.npmjs.com/package/sitemap-webpack-plugin), который встраивался бы в нашу систему сборки. API у этого плагина простое. На вход он принимает hostname сайта, массив путей и путь, куда сохранить полученный результат.

Решение для трансформирования путей в XML формат карты сайта выбрано, одной проблемой меньше. Осталось написать парсер конфигурации React Router. Поехали!

## Реализация своего решения

У React Router в API есть функция, которая нам поможет — [createRoutes](https://github.com/reactjs/react-router/blob/master/docs/API.md#createroutesroutes). На вход подается конфигурация маршрутов, а на выходе получается массив объектов, которые описывают все возможные пути в вашем приложении. Пути находятся в ключах path.

В итоге, я написал модуль, который рекурсивно обходит массив объектов и сохраняет пути в одноуровневый массив. Ниже представлен код этого модуля:

`sitemap/react-router-parser.js`

```js
// Формирует строку с путём, включая родительский путь, если он есть.
const generatePath = (base, path = '') => {
  base = (base.length && base[base.length - 1] !== '/') ? base + '/' : base;

  return base + path;
};

// Парсит отдельный объект массива. Записывает путь в результирующий массив,
// если у этого пути есть вложенные пути, то для них вызывается функция parseRoutes.
// И так рекурсивно в глубину.
const processRoute = (store = [], baseRoute = '', route) => {
  const path = generatePath(baseRoute, route.path);
  const childRoutes = route.childRoutes;

  if (childRoutes && childRoutes.length) {
    parseRoutes(store, path, childRoutes);
  }

  store.push(path);
};

// Обходит массивы с объектами и возвращает массив с путями.
const parseRoutes = (store = [], baseRoute = '', routes) => {
  const isArray = Array.isArray(routes);

  if (!isArray) {
    store.push(generatePath(baseRoute, routes.path));
  } else {
    routes.forEach(processRoute.bind(null, store, baseRoute));
  }

  return store;
};

export default parseRoutes;
```

Результат, который возвращает этот модуль, можно подавать в Webpack плагин, но есть несколько нюансов.

Во-первых, не все пути должны попадать в карту сайта. Во-вторых, у нас в проекте есть динамические маршруты, следовательно, в результирующем массиве будут примерно такие пути — `/project/:projectName`.

Это никуда не годится. Необходимо написать фильтрацию и замену путей с параметрами на реальные значения.

Для фильтрации была написана функция, которая принимает массив путей и массив регулярных выражений. Если путь удовлетворяет хотя бы одному из этих правил, то он не попадет в результирующий массив. Ниже представлен код этой функции:

`sitemap/filter-paths.js`

```js
const filterPaths = (paths, rules) => {
  return paths.filter((path) => {

    if (!path.length) {
      return false;
    }

    return !rules.some((regex) => regex.test(path));
  });

};

export default filterPaths;
```

Пример работы этой функции:

```js
const paths = ['/', '/auth', '/offert'];
const config = [
  /^\/auth/,
  /^\/offert/,
];
const result = filterPaths(paths, config); // ['/']
```

С заменой параметров только один вопрос — как получить параметры для динамических путей? Так как сайт статичный и данные для таких путей у нас хранятся в&nbsp;JSON файлах, то проблем с этим не возникло. Была написана такая&nbsp;функция:

`sitemap/replace-params.js`

```js
const replaceParams = (paths, rules) => {
  const regexRules = (
    Object.keys(rules).map((key) => {
      return new RegExp(':' + rules[key].param);
    })
  );

  return paths.reduce((result, path, index) => {
    let current = [path];

    if (index === 1) {
      result = [result];
    }

    regexRules.forEach((regex) => {
      if (!regex.test(path)) {
        return;
      }

      const { values } = rules[path];

      current = (
        values.map((value) => {
          return path.replace(regex, value);
        })
      );
    });

    return result.concat(current);
  });
};
```

На вход она принимает массив путей и конфигурацию такого вида:

```js
{
  '/project/:projectName': { // путь, в котором нужно заменить параметры
    param: 'projectName', // имя параметра, которое нужно заменить на значение
    values: ['foo', 'bar'], // значения, которые нужно подставить на место параметра
  },
}
```

Пример работы этой функции:

```js
const paths = ['projects/:projectName'];
const config = {
  'projects/:projectName': {
    param: 'projectName',
    values: ['foo', 'bar'],
  },
};
const result = replaceParams(paths, config); // [’projects/foo’, ’projects/bar’]
```

Нужные функции написаны, осталось объединить их в один модуль и внедрить в сборку.

Пример этого модуля:

`sitemap/paths-builder.js`

```js
import { createRoutes } from 'react-router';
import routes from './routes';
import parser from './react-router-parser';
import filterPaths from './filter-paths';
import replaceParams from './replace-params';
import { vacancies } from './data-routes';

const filterConfig = [
  /\*/,
  /^\/order\/.+/,
  /^\/offert/,
  /^\/jobs\/.+\/.+/,
];

const paramsConfig = {
  '/jobs/:jobName': {
    param: 'jobName',
    values: vacancies,
  },
};

const rawRoutes = createRoutes(routes);
const paths = parser([], '', rawRoutes);
const filteredPaths = filterPaths(paths, filterConfig);
const result = replaceParams(filteredPaths, paramsConfig);

export default result;
```
Так как мы используем ES2015 синтаксис, то пришлось обернуть этот модуль ещё в один скрипт, чтобы траспайлить его:

`sitemap/index.js`

```js
// Из-за того, что у нас проекте используются cssModules, при импорте routes,
// по цепочке, начинают импортироваться стили, и node.js кидает ошибки.
// Было решено просто игнорировать эти импорты.
require.extensions['.css'] = function () {
  return null;
};

// Включаем транспайлинг и полифил для использования новых методов,
// которых нет в ES5.
require('babel-register');
require('babel-polyfill');

// Экспортируем результат выполнения нашего модуля.
module.exports = require('./paths-builder').default;
```

Приступаем к внедрению в сборку. Ниже представлена часть Webpack конфига, которая отвечает за создание карты сайта:

`webpack.config.js`

```js
import paths from './sitemap';
import SitemapPlugin from 'sitemap-webpack-plugin';

const sitemapDist =  '../../static/sitemap.xml';
const hostname = process.env.BASE_URL;

const config = {
  ...,
  plugins: [
    ...,
    new SitemapPlugin(hostname, paths, sitemapDist),
    ...,
  ]
  ...,
};
```

Проверив локально работу данного плагина и убедившись, что все работает корректно, я отправил Pull Request.

## Первый (и последний) фэйл

После проверки работы модуля в тестовом окружении обнаружилась критичная бага. По непонятным причинам Webpack плагин отказывался создавать файл по указанному ему пути. Ошибка возникала при попытке сохранить файл в директорию, отличную от нахождения Webpack конфига. С правами на запись было всё в порядке. Разобраться, почему так происходит, у нас не вышло, и я отказался от Webpack плагина в пользу NPM скрипта.

Для генерации карты сайта был выбран самый [популярный](https://www.npmjs.com/package/sitemap) NPM пакет. Для его использования пришлось немного дополнить наш модуль, примерно так:

`sitemap/index.js`

```js
require.extensions['.css'] = function () {
  return null;
};
require('babel-register');
require('babel-polyfill');

const fs = require('fs');
const sm = require('sitemap');
const paths = require('./paths-builder').default;

const sitemap = sm.createSitemap({
  hostname: process.env.BASE_URL,
  urls: paths.map((_path) => ({ url: _path })),
});

fs.writeFileSync('./static/sitemap.xml', sitemap.toString());
```

Для запуска модуля был объявлен скрипт в&nbsp;`package.json`:

```js
{
  ...,
  "sitemap": "node ./sitemap",
  ...,
}
```

После проверки в тестовом окружении ошибок и проблем не возникло, и модуль был включен в ближайший деплой.

## А может поделиться?

Модуль написан, внедрён и прекрасно работает. Казалось бы всё, можно отдыхать. Но я не остановился и решил, что надо его оформить в публичный NPM пакет. Всё-таки при поиске был [вопрос](https://github.com/reactjs/react-router/issues/1843) ещё у одного пользователя по схожей задаче, а решения публичного нет. Заодно код причешу и попрактикуюсь в разработке open source решений (до этого я ничего сам не выпускал).

За пару недель работы по вечерам я справился с поставленной задачей и опубликовал NPM пакет [react-router-sitemap](https://www.npmjs.com/package/react-router-sitemap).

## Итог

За это время я переписал необходимые функции и предоставил возможность использования только необходимых функций из пакета. Покрыл основную часть кода тестами, написал документацию, часть которой генерируется из jsDoc комментариев в коде. Ну и конечно же внедрил в наш сайт.

Призываю не бояться, делиться своими внутренними разработками (если они не засекречены, конечно) и выпускать их в качестве NPM пакетов или просто в публичных репозиториях. Если будет интерес, то я расскажу подробнее о своём пути публикации NPM пакета и вообще про разработку open source библиотеки.

Если есть вопросы, пишите их в комментариях в блоге или твиттере. Готов на всё ответить.

Всем спасибо за внимание и до связи!
