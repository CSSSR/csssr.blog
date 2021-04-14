# Работа с git

## Пакеты зависимостей
Мы используем github packages для управления внутренними публичными и приватными пакетами.
Сгенерируйте персональный token для доступа к github packages на странице «(personal access tokens)[https://github.com/settings/tokens]»
Надо отметить следующие чекбоксы:
![Скриншот, на котором изображены настройки скоупов для персонального токена](https://s.csssr.ru/U02D248T6/2020-02-19-17-40-48-2203v_.jpg)

Выполните команду 
```cmd
npm login --registry=https://npm.pkg.github.com
```
Username — ваш логин на github, Password — полученный на предыдущем шаге токен, Email — ваш email.

## Ветки
Создавайте статьи в новых ветках. Ветки называйте следующим образом `feat/artice-my-new-article`, где `my-new-article` название вашей статьи. Перед созданием новой ветки выполните команды
```cmd
git fetch
git pull origin master
```
Это обновит вашу master ветку до актуального состояния. После этого можно создавать вашу новую ветку
```cmd
git checkout feat/artice-my-new-article
```

## Если написали статью и хотите её поделиться
Вам нужно запушить ваши изменения и создать PR направленный в ветку `master`.
```
git push origin feat/artice-my-new-article
```
После этого github action через несколько минут создаст стенд и прикрепит его ссылку к PR. Что бы увидеть ваше стенд, вам нужно 
будет нажать на кнопку «Show enviroments»
![Скриншот, на котором изображен свёрнутый блок «This branch was successfully deployed»](http://s.csssr.ru/U31J879TR/2021-04-09-08-11-44-le5re_.jpg)
и далее на «View deployment»
![Скриншот, на котором изображен развёрнутый блок «This branch was successfully deployed» с кнопкой «View deployment»](http://s.csssr.ru/U31J879TR/2021-04-09-08-08-22-jungw_.jpg)
