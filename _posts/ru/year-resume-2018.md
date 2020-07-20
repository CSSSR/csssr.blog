---
title: 'Итоги 2018 от CSSSR'
coverImageAlt: 'О чём молчал фронтенд в 2018'
author: 'vislogurov'
date: '2018-12-16'
tag: 'post'
---

**З**дравствуйте! В 2016 я уже подводил [итоги](https://blog.csssr.ru/2016/12/26/year-resume), но тогда у нас в CSSSR не было своего радио и широко охватить события минувшего года не представлялось возможным. В этом году у нас вышли «Новости 512», и вы наверняка уже слушали предновогодний спецвыпуск (если нет, то [вот он](https://soundcloud.com/csssr/512_newyear)), в котором Ислам рассказал о самых знаковых событиях года. Сегодня я расскажу о том, что не вошло в итоговый хит-парад «Новостей» в силу самых разных обстоятельств, но о чём всё же стоит упомянуть.

В целом статья будет выдержана в несколько постироничном, декадентском характере. Многие события года были не совсем позитивными. Скорее противоречивыми. Но, как говорит Никита Прокопов: «Иногда на пасмурном небосводе просвечивают лучики надежды».
Да, кстати, со статьи Никиты я и начну.

Осторожно! Присутствует ненормативная лексика. 18+

### «Нынешняя ситуация — полное дерьмо»

В очередной раз GitKraken чуть не спалил мне ноут. В очередной раз прогон jest чуть не спалил мне ноут. Мой ноут легонько потрескивает на Ведьмаке 3, но намертво зависает, если открыть WebStorm, Atom или большую репу в кракене. Это вообще законно?

```
cd csssr.blog
mkdir article
cd article
touch why-is-modern-software-such-a-shit.md
```

Почему современный софт такое дерьмо? Это не только фронтенда касается, а софта вообще. Интерфейс PS4 — это череда загрузочных экранов и тупящих анимаций.
На сайте PS Store форма оплаты работает через раз. Форма оплаты, Карл! Тачбар на макбуке зависает, пока меняешь ползунок громкости.
В общем, я хотел излить своё негодование на головы читателей, но Никита меня [опередил](https://habr.com/post/423889/). Оригинал [тут](http://tonsky.me/blog/disenchantment/). Тысячи комментов и ретвитов — значит, не только у меня «пригорело», значит, сообществу не всё равно.

### Бета luna-lang
![image](/images/year-resume2018/tony.jpg)

<Note>
	<p>
		— А если бы кто-нибудь умер? Если бы взорвался макбук прямо в Старбаксе?
	</p>
	<p>
		— Я просто хотел быть как вы.
	</p>
	<p>
		— Ты должен быть лучше. Верни мне костюм.
	</p>
	<p>
		— Но я никто без костюма!
	</p>
	<p>
		— Если без него ты никто — ты его не достоин!
	</p>
</Note>

Luna — это функциональный язык програмирования, главной «фишкой» которого является возможность рисовать или чертить программы. Этакая школьная доска «на стероидах». Без шуток, вы можете моделировать компоненты и буквально рисовать связи и способы передачи данных между ними. Почти как Тони Старк в своей лаборатории. Компоненты в Luna представляют собой вложенные графы потоков данных. Благодаря этому можно перемещаться между различными уровнями абстракций: от визуальной части к побитовым операциям внутри компонента.

Выглядит это всё, конечно, сногсшибательно, но есть одна проблема. Это «костюм» Luna, его визуальная часть, невероятно разогревающая компьютерное железо. Отдельного упоминания заслуживает лендинг Lunа, отправляющий макбуки в глубокий термотроттлинг. Печально, но без «костюма» перспективы у языка весьма и весьма призрачные.

*UPD:* На момент написания статьи (середина декабря) лендинг всё же отрефакторили, уже без термотроттлинга.


### Перспективный стейт-менеджмент

<Note>
<p>
XXX:
я вот чо узнал в этом году

и мне прям понравилось

https://github.com/zerobias/effector
</p>
<p>
YYY:
И чому оно замена редаксу?
</p>
<p>
XXX:
это не замена редаксу, это лучше
</p>
<p>
YYY:
Документация конечно огонь тут, всё понятно [САРКАЗМ]

Надо понять, чому оно лучше
</p>
<p>
XXX:
потому что это продвинутый инструментарий для работы с шиной событий

типа вот редакс зачастую прост не нужен, т.к. query там реализован на одном сторе, который отслеживается целиком

а тут query это просто чтение из конкретного места
change-detection и не нужен

command тут вообще огонь, это просто функция которая файрит событие

по сути как в редаксе

но есть эффекты и домены

прям простор для фантазии то какой
</p>
<p>
YYY:
Ну вроде годится, я как раз такие непопулярные экземпляры собираю
</p>
<p>
XXX:
ну и так как там ваще говоря по большому счёту шина событий, то прикрутить продвинутые сторы ваще как делать нечего

типа mobx
</p>
<p>
YYY:
А раньше подобной либы не было?

Это революционная идея что ли?

Чому в редаксе так не сделают?
</p>
<p>
XXX:
так было во флаксе по сути

mobx можно так организовать
</p>
<p>
YYY:
Так это изобретение флакса?
</p>
<p>
XXX:
не, ну домены, эффекты и тд чувак сам придумал

но общая концепция могла увидеть свет и во флаксе

просто сделано заебись, хочется пользоваться
</p>
<p>
YYY:
Да бля, как ты понял?((( ни доки, ничего нет
</p>
<p>
XXX:
ну посмотрел)))
</p>
вообще штука сырая и не прод реди
</Note>


Примерно такой диалог состоялся у меня в этом году (авторская орфография и пунктуация сохранены).
TLDR: вот [ссылка](https://github.com/zerobias/effector) на либу, которая, предположительно, воплощает в себе концепцию реактивного флакса и продвинутого стейт-менеджмента. Уйдут ли эти идеи в массовый прод — подскажет статистика: 123 звезды на гитхибе и 0 PR'ов.

### SSR не нужен!

И CRITICAL_CSS тоже. И rel="preload". И чанки. И бандлы. В список можно докинуть ещё техник, «прокачивающих» загрузку первого экрана.
В твите факты, указывающие на такие перемены.

<blockquote class="twitter-tweet" data-lang="ru"><p lang="en" dir="ltr">Every website in 2018 <a href="https://t.co/Gm7jhfuuUO">pic.twitter.com/Gm7jhfuuUO</a></p>&mdash; Daryl Ginn (@darylginn) <a href="https://twitter.com/darylginn/status/1053646859686809600?ref_src=twsrc%5Etfw">20 октября 2018 г.</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


Больше не нужно беспокоиться о first-time user experience. Пользователь всё равно этого не заметит, ведь первые 20-30 секунд он будет прокликивать и пиксельхантить все попапы, алерты, GPS-метрики и push уведомления. Пусть ваш сайт, SPA или даже PWA отрендерится сразу на клиенте без каких-либо оптимизаций вообще. Времени хватит на всё.
В попытке не упустить пользователя, старгетировать его интересы, а с мая этого года и соблюсти GDPR визуальным мусором стал наглухо забиваться UX.

Да, кстати, что там с GDPR? Так ли он нужен? Ведь неспроста...

### ...p2p наносит ответный удар!

Почему это произошло?

Вообще, тут, конечно, нужно вспомнить, в контексте каких событий прошел год. Шпионские скандалы вокруг Google, сливы инфы от Facebook, блокировки телеги, архивы с личными данными от ВК. На этом фоне набиравшие доселе популярность решения с end-to-end шифрованием и единым центром оказались скомпроментированы.

Проекты вроде [Beaker Browser](https://beakerbrowser.com/) или [getaether](https://getaether.net/) очень быстро завоевали внимание пользователей, нуждающихся в настоящей приватности в сети.

Одним этим дело не ограничивается, прозвенели ещё «звоночки», говорящие о децентрализации веба, об интернете на блокчейнах:
* Андре «Cycle.js» Штальц разрабатывает p2p социальную сеть [manyverse](https://www.manyver.se/). Open Source, без рекламы, аналитики и слежки.
* PoW релиз либы [OrbitDB](https://github.com/orbitdb/orbit-db) — библиотеки, реализующей базу данных на основе p2p сети.

В условиях, когда до приватной инфы, что называется, «рукой подать», принцип «мой комп - моя крепость» придётся как нельзя кстати.

### Странный эксперимент с нодой

Всё произошло с релизом 10.5, добавляющим поддержку [working_threads](https://nodejs.org/dist/latest-v10.x/docs/api/worker_threads.html). Что странного?

* Первое — потоки (не путать со стримами) эти не могут нормально между собой данными обмениваться, для передачи объекта из треда в тред объект копируется. [Workers can share and transfer memory, but not JS objects](https://github.com/nodejs/node/pull/20876)
Соответственно, конкурентные коллекции на этом не построишь.

* Второе — сама суть изменений. Асинхронность, однопоточность всегда была визитной карточкой Ноды. Фактически, Нода создавалась как альтернатива многопоточным бэкендам (Джаве, например)...

![obivan](/images/year-resume2018/obivan.jpg)

Ну ладно, насчёт «становления» Джавой, я, пожалуй, слукавил. Воркер-треды, скорее, должны дополнить асинхронность Ноды, стать фичей, типа child process. При этом явно об этом в официальной доке ни слова. Так сказать, «имеющий глаза да увидит». Согласитесь, выглядит странно, учитывая невозможность конкурентных коллекций. Радует, что функционал ещё экспериментальный, наверняка ещё будут поясняющие PR'ы.

### Посыл года

«Сегодня многие разработчики используют Redux, но при этом не знают, на каких идеях он стоит». Я сказал это два года назад, касаясь темы [обмена сообщениями](https://www.youtube.com/watch?v=Tkjg179M-Nc). Это всё навеяно волной «нахватывания верхов» и последующим «выгоранием» годовалых, вновь обращенных во фронтендеры.

В ноябре этого года к тому посылу добавился вот этот, от анонимного Дона:

<Note>
Функциональные маньки, поймите, что расцвет ФП связан не с его охуенностью, и не с хуевостью ООП, а с тем, что процессорные мощности уперлись в потолок и теперь в процессорах втупую наращивают количество ядер. Функциональщина же из коробки лучше работает с многопоточностью, т.к. там иммутабельность - это основа парадигмы и сразу отпадают многие заебы. Это единственная причина, и если вы писали хуевый код в ООП, то вы точно так же будете писать хуевый код в ФП, смена парадигмы вам не поможет, это я гарантирую.

Твои проблемы решаются тем, что ты думаешь над структурой/иерархией своих наследований и используешь композицию и наследование в тех местах, где они удобны и имеют смысл, а не где попало. Понимаю, сложно думать, лучше сказать «все беды не от моего долбоебизма и нежелания ознакомиться с базовыми паттернами и идеями ООП, а от наследования, нужно его выкинуть».
</Note>

Камрады, зрите в корень, проникайтесь основами и концепциями разработки. Тогда и ваша экспертиза станет более эффективной, и у занятия программированием появится смысл. А если ещё и хотите работать у нас, то вот [палочка-выручалочка](https://blog.csssr.ru/2018/08/16/candidates-mistakes).

### P.S

Ладно, что-то я нагнал на всех тут. Я сам-то только недавно перешел из реакт-верстальщиков в реакт-программисты.

Скажу так: хороший фронтенд — это праздник. Поэтому в новом году пришло время исправляться. Надо дерзать, а то мы так рискуем потерять этот праздник. А если в жизни нет праздника, то, по Летову, она вообще не нужна.

С вами был по-прежнему чернобородый фронтенд-пират, бороздящий на подлодке украинские степи Максон Вислогуров. Оставайтесь на связи.

![image](/images/recursion/outro.jpg)