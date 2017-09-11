# Tutu Clone

Пример кода: https://github.com/niten2/tutu_clone
Демо версия: tutu-clone-thinknetica.herokuapp.com

В проекте использовал: Devise, паттерн проектирования STI, отправку сообщений пользователю.

В процессе были выполнены следующие действия:

Создал ресурс Маршруты (Routes), для которого возможны все CRUD-операции.

Маршрут имеет название, есть валидация на наличие этого атрибута.

Модель Маршрут имеет множество станций. Станция может принадлежать множеству маршрутов.

Поезд может иметь один маршрут, на одном маршруте может быть несколько поездов

Билет содержит информацию о (связан с) поезде, начальной и конечной станциями. Билет принадлежит пользователю.

Пользователь может иметь произвольное кол-во билетов.

Поезд содержит информацию о билетах на него.

Реализован пользовательских интерфейс для создания маршрутов и добавления станций в него.

Сделан вывод списка станций, используя анонимные partials. Сделано то же самое для списка поездов.

Через layout добавлены на все страницы футер, содержащий информацию об авторе.

Создан интерфейс для создания/удаления/изменения маршрутов.

Из интерфейса есть возможность назначать маршрут поезду из списка доступных маршрутов.

При просмотре поезда, видно его маршрут или значение “Маршрут не назначен”

При просмотре маршрута выводится список поездов на этом маршруте.

Реализована возможность управления вагонами: При добавлении вагона указывается поезд, к которому он добавляется Тип вагона (купейный/плацкартный) Кол-во мест: Нижних / Верхних

При просмотре поезда, отображается информация о кол-ве вагонов: Плацкартных / Купейных и кол-ве мест: Плацкартных верхних/нижних, Купейных верхних/нижних.

Реализован интерфейс просмотра списка проданных билетов. Можно выполнять все стандартные CRUD операции с билетами.

При создании (или редактировании) билета нужно указать начальную и конечную станции, а также ФИО пассажира (без ассоциации с моделью User)

Добавил возможность указать порядковый номер станции в маршруте (поле для сортировки). Учел, что одна и та же станция может входить в разные маршруты и иметь разный порядковый номер в разных маршрутах.

Вывести список станций в маршруте по порядковому номеру (использовал скоуп)

Реализовал через STI следующие типы вагонов: Купейный (имеет верхние и нижние места), Плацкартный (имеет верхние/нижние места + боковые верхние и нижние), СВ (имеет только нижние места), Сидячий (имеет только сидячие места)

При добавлении вагона к поезду, автоматически назначается вагону порядковый номер (использовал коллбеки). Проверяется уникальность номера вагона у поезда. Не может быть ситуации, когда у поезда 2 вагона с номером 11.

На странице просмотра поезда вывел список номеров вагонов (как ссылки). При переходе по ссылке на конкретный вагон показывать тип вагона и актуальную информацию по нем (кол-во верхних/нижних мест, если есть - боковые и т.п. в зависимости от типа вагона)

У поезда сделал флаг - сортировка вагона. Значения: с головы/c хвоста поезда. Если выбран вариант “с головы поезда”, то вагоны на странице поезда выводятся в прямом порядке, если “с хвоста поезда” - в обратном.

Используя AR Query Interface, реализовал метод в модели Train, который принимает в качестве аргумента тип вагона и тип мест (верхние/нижние/cидячие) и вовзращает их общее кол-во для поезда (т.е. считает по всем вагонам указанного типа).

Реализована сортировка станций в маршруте.

Изменил добавление вагонов на вложенные ресурсы.

Добавил время прибытия и отправления для каждой станции в маршруте

Сделал страницу поиска билетов на поезд:

Пользователь выбирает из списка начальную и конечную станцию. Выбирает можно из всех станций, которые есть в системе. Система произвоидт поиск маршрутов по выбранному направлению и предоставляет пользователю список поездов, которые следуют по данному маршруту. Пользователь видит время отправления от начальной станции и время прибытия на конечную. У пользователя есть возможность “купить” билет на поезд. Это кнопка “Купить” рядом с соответсвующим поездом. При нажатии на нее, запрашивается ФИО пассажира для билета, данные паспорта и создается билет, связанный с пользователем и содержащий нужную информацию, после чего билет показывается пользователю. Реализована “покупка” билета через вложенные ресурсы (ресурс билет вложен в ресурс пользователь).

Подключил аутентификацию через Devise

Разделил приложение на пользовательскую и административную части. В административную часть имеет доступ только пользователи с правами администратора.

При покупке билета, билет привязыватется к купившему его пользователю (залогиненному), при этом, id пользователя не передается в параметрах запроса или полях формы, в т.ч. скрытых

Залогиненный пользователь может посмотреть список всех своих купленных билетов, каждый билет в отдельности, а также удалить билет

Администратор может просматривать список всех билетов в системе, каждый в отдельности, редактировать билеты и удалять их.

При регистрации пользователя запрашивается его имя и фамилию и после входа, выводится “Привет, <имя пользователя>!”

После успешного входа, перенаправляются обычные пользователи на страницу поиска билетов, а админов - на страницу, где перечислены ссылки на управление ресурсами приложения

Добавил локализацию devise в проект, локализовал сообщения об ошибках, локализовал все формы в приложении.

Добавил Twitter Bootstrap, стилизовал внешний вид приложения.

Добавил индексы на все внешние ключи и другие поля, по которым происходит поиск в БД

Реализовал отправку письма пользователю при покупке билета

Реализовал просмотр списка билетов, купленных пользователем

Реализовал возможность отмены покупки билета. Если пользователь купил билет, то он может удалить его на странице просмотра списка билетов.

При отмене покупки билета, пользователю высылается уведомление об этом на email.

Развернул приложение на heroku.

[Back](https://github.com/niten2/test_tasks)