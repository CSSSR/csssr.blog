---
title: 'Ускорьте свою разработку с помощью команды `npm init`'
coverImageAlt: 'Пробуем искать и проверять свойства программ при помощи генеративного тестирования'
author: 'iamstarkov'
date: '2015-04-27T00:00:00.000Z'
tag: 'web-development'
---

У npm есть превосходная команда `npm init`, которая поможет вам создавать `package.json` за секунды!

## npm init

Прочитайте документацию для `npm init` и `package.json fields`. С крутыми инструментами приходит и большая ответственность. <a href="https://docs.npmjs.com" rel="nofollow noopener" target="_blank">Изучите их!</a>

## Переменные для `npm init`

Настройте их! Эти переменные будут использоваться при каждом запуске `npm init`, а значит будут экономить вам время. После установки они сохраняются в `.npmrc`&nbsp;<a href="https://docs.npmjs.com/cli/v6/configuring-npm/npmrc" rel="nofollow noopener" target="_blank">файлах</a>.

`npm set` алиас к консольной команде `npm config set`. К примеру, настройка для меня выглядит так:

```js
  npm set init-author-email iamstarkov@gmail.com
  npm set init-author-name 'Vladimir Starkov'
  npm set init-author-url http://iamstarkov.com/
  npm set init-license MIT
  npm set init-version 0.0.0
```

Я предпочитаю использовать версию `0.0.0` для старта; это позволяет мне протестировать код на CI ферме перед тем, как бампнуть первую мажорную версию.

## Раскрытие сокращённой GitHub-нотации (user/repo)

Когда `npm init` спросит про гит-репозиторий, пишите кратко `user/repo` — npm достаточно умён, чтобы раскрыть строчку в `https://github.com/user/repo`. npm также сгенерирует поля `repository`, `bugs` и `homepage` в нужном формате:

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

*Используй npm мудро, разрабатывай быстрее, ваш <a href="https://iamstarkov.com/" rel="nofollow noopener" target="_blank">Владимир Старков</a>*

