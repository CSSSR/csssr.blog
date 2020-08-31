---
title: 'Неудобства коллективной работы или почему начали взлетать самолеты.'
coverImageAlt: 'alt me'
author: 'Павел Азанов'
date: '2015-03-14T10:30:00.000Z'
tag: 'management'
---

<Subtitle>
  Всем привет! С вами один из ведущих разработчиков и пилот первого самолета CSSSR.
</Subtitle>

**В** предыдущих постах мы писали, что наши <s>ракеты</s> большие команды начали дробиться на <s>самолеты</s> под-команды. Я попробую рассказать вам, почему.

Перенесемся во времена без под-команд и посмотрим на всё происходящее изнутри.

## Итак, вы прониклись духом CSSSR. Понедельник. Утро.

Просыпаемся, завтракаем, пьем кофе и идем несколько метров до работы. Как только открываем Slack, менеджер тут же сообщает о старте нового проекта.

Первое, что необходимо сделать:

- Оценить проект и сроки;
- Разбить весь проект на задачи;
- Сообщить менеджеру количество и умения необходимых разработчиков;
- Развернуть наш [шаблон](http://bit.ly/1GDjsGb) в git и настроить под-домен на сервере;
- Написать HTML-скелет для будущих страниц.

Пока мы этим занимались, менеджер собрал подходящих разработчиков и укомплектовал команду нового проекта.

## Первые неудобства

Когда работаешь на проекте сам, ты всегда уверен в своих силах и знаешь, сколько времени тебе потребуется на ту или иную задачу. Всё совсем иначе, когда тебя просят управлять командой на проекте.

Допустим, на проект привели 4 <s>космонавта</s> разработчика, из которых мы работали только с половиной или хотя бы видели их за работой. Другая же половина для нас остается загадкой. Мы, конечно, можем поспрашивать и товарищей об их навыках, но будем рассматривать ситуацию, когда они только пришли в нашу дружную команду.

Незнание навыков или даже малая информация о разработчике очень настораживает. Поэтому мы ставим «проверенных» на сложные задачи, а остальных — на те, что попроще. Это проверенный метод, который работает безотказно. Раздали задачи, ответили на вопросы, и работа кипит.

<Note>
  <p>В моем самолете такого уже нет, я знаю о членах команды всё. У каждого из них есть сильные и слабые стороны. Теперь я могу даже прикинуть, сколько времени и кому нужно на решение задачи. А самое главное — я знаю, кого мне лучше поставить на задачу.</p>
</Note>

## Достаем котов из мешка

Slack радостно зазвонил: пришли первые коммиты от разработчиков, которые нужно проверить.

Хорошая командная работа определяется простым правилом — <s>все пишут так, как пишу я</s> единый код по [стандартам](http://bit.ly/1Ek791M). Но, как часто оказывается, ребята, которые только пришли в команду, ещё к ним не привыкли или чего-то не поняли. Обычно у «проверенных» разработчиков проблем нет или их мало. Но что делать с другой половиной? Чтобы проверить код, нужно как минимум отвлечься от текущей задачи, но куда деваться, разработчики жаждут работать дальше.

Идем смотреть выполненную работу. Сразу всплывают все недоработки. Кривой БЭМ, различного рода ошибки JavaScript (нет оптимизации, кэширования, селекторы по классам предназначенных для стилей) и прочие мелочи. Параллельно с этим неплохо бы объяснить, почему нужно делать именно так. На всё это, кстати, уходит немало времени.

Проходит некоторое время, и молодой разработчик уже должен был бы закончить работу. Но после элементарного вопроса: «Как идет работа?» — может оказаться, что задача выполнена наполовину, а то и меньше. После долгих разбирательств выясняется, что эту задачу он не осилил.

Тут, конечно, есть три пути:

1. Самый простой — сделать самому;
2. Отдать другому разработчику;
3. Самый сложный — научить поставленного на задачу разработчика;

Чтобы не тратить время, ставим его на другую задачу, а сами делаем или отдаем «проверенному» разработчику.

<Note>
  <p>Этот метод я использую только при сжатых сроках. Куда лучше обучить и повысить навыки команды, в обучении может участвовать хоть весь самолет. Желание обучать кого-либо, как оказалось, проявляется только в небольшом коллективе.</p>
</Note>

## Самолеты — наше будущее

Я могу с уверенностью сказать, что разделение на под-команды дает свои плоды. Самым огромным плюсом является постоянная связка разработчиков. Мы начали более тесно общаться между собой. А с хорошими людьми и работа идёт в удовольствие. Теперь я могу положиться на них и отсутствовать во время разработки, реагируя только на вопросы и проверяя качество кода. Также увеличилась скорость разработки, а срывы сроков почти исчезли и теперь измеряются не в днях, а в часах.

На этой ноте я пожалуй и закончу. Ждем ваши комментарии в [Твиттере](http://bit.ly/1EzPmoj)!