# Working with git

## Dependency packages
We use github packages to manage internal public and private packages.
Generate a personal access token for github packages at "(personal access tokens)[https://github.com/settings/tokens]".
The following checkboxes should be checked:
![Screenshot showing the scopes settings for the personal access token](https://s.csssr.ru/U02D248T6/2020-02-19-17-40-48-2203v_.jpg)

Execute the command 
```cmd
npm login --registry=https://npm.pkg.github.com
```
Username - your login on github, Password - the token you got in the previous step, Email - your email.

## Branches
Create articles in new branches. Name branches as `feat/artice-my-new-article`, where `my-new-article` is the name of your article. Before you create a new branch, run the command
``cmd
git fetch
git pull origin master
```
This will update your master branch to its current state. After that, you can create your new branch
``cmd
git checkout feat/artice-my-new-article
```

## If you have written an article and want to share it
You need to push your changes to repo and create a PR directed to the `master` branch.
```
git push origin feat/artice-my-new-article
```
After that, the github action will create a staging in a few minutes and attach its link to the PR. In order to see your staging, you will need to click on the "Show enviroments" button
![Screenshot showing collapsed block "This branch was successfully deployed"](http://s.csssr.ru/U31J879TR/2021-04-09-08-11-44-le5re_.jpg)
and then click on "View deployment"
![Screenshot of the "This branch was successfully deployed" block with the "View deployment" button](http://s.csssr.ru/U31J879TR/2021-04-09-08-08-22-jungw_.jpg)
