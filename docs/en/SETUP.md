# Project startup

## Dependencies
1. Install [Node.js LTS](https://nodejs.org/en/download/). At the time of writing the documentation this is version 12.18.0
2. Install [Yarn](https://yarnpkg.com/lang/en/docs/install/)
3. Install [Git](https://git-scm.com/download)
4. Do following [instructions](./GIT.md#dependency-packages)

## What you need to work on your blog
First you need to [download the project code from the repository](http://s.csssr.ru/U31J879TR/20200526180041.jpg), 
then we recommend you install [VSCode](https://code.visualstudio.com/). 
It has everything you need: a code editor, a terminal and a GUI for working with git.
We recommend enabling [auto-save on file changes](https://stackoverflow.com/a/59500985). 
In the following sections we will describe how to start a project using VSCode as an example.

## How to start a project
Open the project folder in VSCode. 
To start the project [open a terminal](https://code.visualstudio.com/docs/editor/integrated-terminal) 
and execute there the following commands
``cmd
yarn
```
This command will install all the dependencies the project needs.

> Possible problem: Dependencies installation crashes with an error
> ```
> error An unexpected error occurred: "https://npm.pkg.github.com/download/@csssr/[...]: Request failed
> "401 Unauthorized"
> ```
> Solution: Make sure you've done step 4 of [dependencies](#dependencies) correctly

Next, add a file `.env.development.local` to the root of the project with the following contents:
```
BENCHMARK_EMAIL_TOKEN=TOKEN
```

After that you can start the project:
``cmd
yarn dev
```

> Possible problem: The project crashes with an error
> ```
> {
> code: 'EACCES',
> errno: -4092,
> syscall: 'listen',
> address: '0.0.0.0',
> port: 3000
> }
> ```
> Solution 1: If port 3000 is busy with another project you don't need right now, stop it and run `yarn dev' again
> 
> Solution 2: if there's no way to free port 3000, start the blog on a different port with the command `yarn dev -p 8080`, where you specify the desired port instead of 8080

The `yarn` command only needs to be executed once, the `yarn dev` command needs to be executed every time you start the blog.

> *Local host* is the address of the server you run on your computer, 
By default it's http://localhost:3000/. Only you will have access to this address.

After you see [message about successful build of the project](http://s.csssr.ru/U02D248T6/2020-06-29-16-50-52-ks3q4_.jpg)
you can go to the local host address and you will see the blog site.

After saving the article file, just refresh the page in your browser and you will see the changes.

## Well, you have started the project, but what's next?
Read about [work with git](./GIT.md)
