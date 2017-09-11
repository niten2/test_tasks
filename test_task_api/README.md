# TEST REST API

Пример кода: https://github.com/niten2/test_task_api

## Требования:

Нужны модели:

Post -- записи в блоге,
поля:
  title -- строковое
  body -- строковое
  author -- ссылка на автора
  published_at: дата-время размещения записи

  Поля title и body -- обязательные для заполнения

Comment -- комментарии
поля:
  body -- строковое
  author -- ссылка на автора
  published_at: дата-время размещения коментария

  Поле body -- обязательное для заполнения

Поскольку у нас есть авторы, нужна модель в которой мы будем их хранить

User -- пользователи
поля:
  nickname:
  email:
  password:

Реализовать эндпойнт по авторизации. Как его сделать up to you.

Реализовать эндпойнты:
POST /api/v1/posts.json
  отправляем:
    title
    body
    published_at

  в ответ получаем json с полями
    id
    title
    body
    published_at
    author_nickname

  если в запросе не передали published_at, то нужно подставлять текущий момент времени.

  если передали не все поля, то ответ должен содержать одно поле
    errors -- массив ошибок

GET /api/v1/posts/:post_id.json
  получить post по его id

  поля в ответе как в эндпойнте POST /api/v1/posts.json

GET /api/v1/posts.json
  отправляем:
    page
    per_page

  получаем список записей отсортированных полю published_at по убыванию
  поля каждой записи как в эндпойнте POST /api/v1/posts.json

  В заголовках ответа нужно передать общее количество страниц и записей

Эндпойнты для комментариев можно не делать

Прочие требования:
  код приложения ruby on rails 4.2.6
  СУБД -- Postgresql 9.4
  Для генерации json использовать jbuilder
  В таблицах нужно указывать все необходимые индексы
  Код моделей и контроллеров нужно покрыть тестами.
  Для тестирования использовать rspec 3.4
  Так же нужно упаковать приложение в docker образ,  так что приложение должно получать данные для соединения с базой данных через переменные окружения

Часть 2.  Сделать аналитический отчёт.

POST /api/v1/reports/by_author.json
  start_date -- начало интервала
  end_date -- конец интервала
  email -- куда отправить отчёт

ответ:
  поля: message: “Report generation started”

Эндпойнт добавляет задачу на генерацию отчёта в очередь, очередь обрабатывается отдельным процесом. Готовый отчёт отправляется на email указанный в задаче.

Отчёт должен представлять собой таблицу со столбцами:
  nickname,
  email,
  количество записей за период,
  количество комментариев за период.

Строки в отчёте отсортированы по значению вычисляемому так (количество постов + количество комментариев/10).
Таблицу можно оформить как в виде html таблицы так и при помощи ASCII символов.
Для этого задания нужно заполнить базу тестовыми данными использовать gem faker.
Результат нужно разместить на github.

[Back](https://github.com/niten2/test_tasks)