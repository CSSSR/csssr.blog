---
title: 'Записки начинающего Angular-онавта:ng-options'
coverImageAlt: 'alt me'
date: '2015-11-24 15:07:00'
tag: 'Web-development'
author: 'Islam Vindizhev'
---

**М**еня зовут Ислам, и недавно я присоединился к CSSSR. Так получилось, что теперь я изучаю и одновременно применяю AngularJS. Эта статья об одной из задач, вариантах её решения и граблях, на которые я наступил.

>***Warning: статья для начинающих и сочувствующих!***
_Если код режет глаза, постарайтесь отнестись к нему с юмором. Все имена переменных и область применения вымышлены, любое совпадение с реальными случайно._

## Задача

Для системы подачи заявок на выдачу корма зоопарка города N понадобилось реализовать новую фичу — выбор вольера и определенной клетки с помощью выпадающих списков.
Исходные данные и требования:

* Бэкенд возвращает список всех вольеров;
* Каждый вольер содержит массив объектов-клеток;
* Для формирования заявки отправляется объект-заявка с необходимыми сведениями;
* Из первого списка выбирается вольер, в объект-заявку включается ID вольера;
* При выборе вольера во втором списке появляются опции, соответствующие выбранному вольеру;
* Из второго списка выбирается определенная клетка, в объект-заявку включается ID клетки;
* Существует вольер по умолчанию, у каждого вольера есть клетка по умолчанию.

## Первое решение

Идея была проста: в первом списке показать все вольеры при помощи ng-repeat, в контроллере слить в один массив все клетки и (спасибо Stackoverflow) использовать фильтр для отображения нужных клеток во втором списке. Если нет ранее выбранных значений, то они выбираются по умолчанию.

```html
<div class="form-group">
	<select ng-model="request.volary_id" name="volary" class="form-control">
		<option ng-repeat="volary in volaries" ng-selected="volary.volary_id == initVolary()" value="{{ volary.volary_id }}">{{ volary.text }}</option>
	</select>
</div>
<div class="form-group">
	<select ng-model="request.cage_id" name="cage" class="form-control">
		<option ng-repeat="cage in cages | filter:{ volary_id : request.volary_id }" ng-selected="cage.cage_id == initCage()" value="{{ cage.cage_id }}">{{ cage.text }}</option>
	</select>
</div>
```

```js
	$scope.cages = [];

	angular.forEach($scope.volaries, function(volary) {
		angular.forEach(volary.cages, function(cage) {
			if (cage.volary_id = volary.volary_id) {
				$scope.cages.push(cage);                    //Собираем массив всех клеток
			}
		});
	});

	$scope.initVolary = function() {                    //Если ранее вольер был выбран модель инициализируется этим значением, иначе - значением по умолчанию
		var init;										                      //Для того, чтобы был выбран соответствующий option, возвращается значение init

		if ($scope.request.volary_id) {
			init = $scope.request.volary_id;
		} else {
			angular.forEach($scope.volaries, function(volary) {
				if (volary.is_default === 1) {
					init = volary.volary_id;
					$scope.request.volary_id = volary.volary_id;
				}
			});
		}

		console.log($scope.request.volary_id);

		return init;
	};

	$scope.initCage = function() {                       //Если ранее была выбрана клетка модель инициализируется этим значением, иначе - значением по умолчанию
		var init;										                       //Для того, чтобы был выбран соответствующий option, возвращается значение init

		if ($scope.request.cage_id) {
			init = $scope.request.cage_id;
		} else {
			angular.forEach($scope.cages, function(cage) {
				if (cage.is_default === 1 && cage.volary_id === $scope.request.volary_id) {
					init = cage.cage_id;
					$scope.request.cage_id = cage.cage_id;
				}
			});
		}

		return init;
	};
```

## Второе решение

Первое решение работало не совсем корректно, и душа просила упростить реализацию. Один из старших товарищей предложил более простой вариант с `ng-options` и применением логического приема, который помог отказаться от фильтра для клеток и кода из контроллера. Кроме того, было решено добавлять в `request` объекты `volary` и `cage` **целиком**, а не только ID.

>***Подсказка***
_Часто мы забываем о том, какую большую роль может сыграть хороший логический прием._

```html
<div class="form-group">
	<select ng-model="request.volary" ng-options="volary as volary.text for volary in volaries" class="form-control"></select>
</div>

<div ng-if="request.volary" class="form-group"> <!-- Отображать, если вольер уже выбран -->
	<select ng-model="request.cage" ng-repeat="volary in volaries" ng-show="request.volary == volary" ng-options="cage as cage.text for cage in volary.cages" class="form-control"></select> <!--Здесь мы проходим по всем вольерам и отображаем клетки из того вольера, который был выбран ранее-->
</div>
```

Направление было задано, и мне нужно было поправить несколько вещей:

1. Было непонятно, как установить значения по умолчанию;
2. В модель по-прежнему записывался ID объекта, а не объект целиком;
3. Если использовать `select cage` вместо `select cage.cage_id` записывался объект, но ломалось значение `value` в `<option>` (Это было не очень важно, но не давало мне покоя);
4. У `<select>` вольеров и клеток есть уродливый пустой `<option>`, от которого очень хотелось избавиться.

>***Подсказка***
_Не всегда есть возможность влиять на разные подсистемы проекта. Когда такая возможность есть, очень здорово посмотреть на решаемую задачу со всех сторон._

Первый пункт решили достаточно просто: на помощь пришел бэкенд. Если у `request` не было ранее выбранных вольера и клетки, значения по умолчанию устанавливались на бэкенде. Немного позже это позволило отказаться и от повторяющихся `select` для каждого вольера.

>***Подсказка***
_Читайте документацию и Stackoverflow внимательно. Невнимательность обязательно отнимет ваше время._

Чтение документации и советы со Stackoverflow помогли разобраться в тонкостях работы `ng-options`. Выяснилось, что `value` для `ng-options` устанавливается при помощи `track by`.

```html
<div class="form-group">
  <select ng-model="request.volary" ng-options="select volary.volary_id as volary.text for volary in volaries track by volary.volary_id" class="form-control"></select>
</div>

<div ng-if="request.volary" class="form-group">
  <select ng-model="request.cage" ng-options="select cage.cage_id as cage.text for cage in volary.cages.data track by cage.cage_id" class="form-control"></select><!--track by указывает на значение, которое должно быть в value-->
</div>
```

>***Внимание!***
_Be careful when using `select as` and `track by` in the same expression. © [angularjs.org](angularjs.org)
В предыдущем блоке `ng-options` будет работать некорректно, подробнее читайте в [документации по ng-options](https://docs.angularjs.org/api/ng/directive/ngOptions)._

Немного упорства в изучении тонкостей работы `select as` и `track by`, и пункты 2, 3 были решены.

```html
<div class="form-group">
  <select ng-model="request.volary" ng-options="volary.text for volary in volaries track by volary.volary_id" class="form-control"></select>
</div>

<div ng-if="request.volary" class="form-group">
  <select ng-model="request.cage" ng-repeat="volary in volaries" ng-show="request.volary_id == volaries.volary_id" ng-options="cage.text for cage in volary.cages.data track by cage.cage_id" class="form-control">
</div>
```

Оказалось, что пустой `<option>` возникает тогда, когда модель либо **пуста**, либо в ней находится значение, которого **нет в коллекции**. Этот интересный нюанс удалось освоить из-за того, что в `request` начали записывать объекты.

>***Внимание!***
_Нужно быть осторожным с коллекциями, которые состоят из объектов.
1 === 1 всегда, но далеко не факт, что 2 объекта, у которых идентичны поля и их значения, будут равны. Помните, что объект — **ссылочный тип данных**._

Четвертый и заключительный пункт был уже частично решен: значение по умолчанию устанавливает бэкенд, пустого `option` в `select` вольера уже нет, и в модели всегда был объект вольера, который есть в перебираемой `ng-options` коллекции. Лучшим решением показалось отображать во втором `select` объекты-клетки, которые были включены в ранее выбранный объект-вольер.

Оставалось только проследить за тем, чтобы модели `select` клетки всегда был объект из «правильной» коллекции. Для этого в контроллер была добавлена небольшая функция, которая вызывалась при выборе вольера.

```js
$scope.setDefaultCage = function() {
  angular.forEach($scope.request.volary.cages, function(cage) { // Сейчас в request находится вольер, клетки которого нужно отобразить
    if (cage.is_default) {
      $scope.request.cage = cage;                              // Перебираем все клетки этого вольера и записываем в модель клетку по умолчанию, это избавит от пустого option во втором select
    }
  });
};
```

Разметка после всех манипуляций и экспериментов:

```html
<div class="form-group">
	<select ng-model="request.volary" ng-change="setDefaultCage()" ng-options="volary.text for volary in volaries track by volary.volary_id" class="form-control"></select>
</div>
<div class="form-group">
	<select ng-model="request.cage" ng-options="cage.text for cage in request.volary.cages track by cage.cage_id" class="form-control">
</div>
```

## Конец

Надеюсь, что эта статья оказалась полезной и интересной. Смотрите работающие примеры кода из этой статьи [в репозитории GitHub](https://github.com/gitVn/ng-option_example) и ждите новых записок от начинающего Angular-онавта! :)

Ваш товарищ Ислам.
