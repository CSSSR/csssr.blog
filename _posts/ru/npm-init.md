---
title: 'Ускорьте свою разработку с помощью команды `npm init`'
coverImageAlt: 'Парень и девушка на скейтборде с ноутбуком'
author: 'Владимир Старков'
date: '2015-03-14T10:30:00.000Z'
tag: 'web-development'
---

**У** npm есть превосходная команда `npm init`, которая поможет вам создавать
`package.json` за секунды!

## npm init

Прочитайте документацию для [`npm init`][init] и [`package.json fields`][pkg].
С крутыми инструментами приходит и большая ответственность. [Изучите их!][docs]

[docs]: https://docs.npmjs.com/
[init]: https://docs.npmjs.com/cli/init
[pkg]: https://docs.npmjs.com/files/package.json

## Переменные для `npm init`

Настройте их! Эти переменные будут использоваться при каждом запуске `npm init`,
а значит будут экономить вам время. После установки они сохраняются
в [`.npmrc` файлах][npmrc].

`npm set` алиас к консольной команде [`npm config set`][config].
К примеру, настройка для меня выглядит так:

```js
npm set init-author-email iamstarkov@gmail.com
npm set init-author-name 'Vladimir Starkov'
npm set init-author-url http://iamstarkov.com/
npm set init-license MIT
npm set init-version 0.0.0
```

Я предпочитаю использовать версию `0.0.0` для старта; это позволяет мне протестировать код
на CI ферме перед тем, как бампнуть первую мажорную версию.


[npmrc]: https://docs.npmjs.com/files/npmrc
[config]: https://docs.npmjs.com/cli/config


## Раскрытие сокращённой GitHub-нотации (user/repo)

Когда `npm init` спросит про гит-репозиторий, пишите кратко `user/repo` —
npm достаточно умён, чтобы раскрыть строчку в `https://github.com/user/repo`.
npm также сгенерирует поля `repository`, `bugs` и `homepage`
в нужном формате:

```js
"repository": {
  "type": "git",
  "url": "https://github.com/user/repo"
},
"bugs": {
  "url": "https://github.com/user/repo/issues"
},
"homepage": "https://github.com/user/repo#readme"
```

_Используй npm мудро, разрабатывай быстрее,_
_ваш [Владимир Старков](http://iamstarkov.com/)_
