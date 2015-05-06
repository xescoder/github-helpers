Github code review helpers
=============

Сниппет для Chrome и Яндекс браузера, упрощающий просмотр изменений кода в больших pull request на github.
После запуска позволяет выполнять в консоли браузера следующие команды:

* **g.files(onlyVisible)** или **gf(onlyVisible)** - выводит список изменённых в pull request файлов. Если в качестве параметра передать true или 1 - выведет только отображённые файлы.
* **g.only(pattern)** или **go(pattern)** - отобразить только соответствующие шаблону файлы. В качестве параметра можно передать фрагмент названия файла, массив фрагментов или регулярное выражение.
* **g.comments()** или **gc()** - показать / скрыть комментарии.

Примеры
------

````console
> gf()
   bower.json (2)
   examples/js/all.js (37)
   examples/js/form_with_map.js (1)
   jquery.kladr.min.js (2)
   kladr/js/core.js (58)
   kladr/js/kladr.js (379)
   package.json (2)
<- ""

> gc()
<- "comments not visible"
````

Установка
---------

Процесс установки сниппетов подробно рассмотрен [здесь](https://github.com/bgrins/devtools-snippets).

