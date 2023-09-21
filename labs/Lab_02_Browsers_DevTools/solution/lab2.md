# Лабораторная работа №2. Инструменты разработчика в браузере

## Задание №1. Исследование заголовков и тела обычных запросов и их ответов.

### https://ya.ru/
```shell
Request URL: https://ya.ru/search/?text=123&lr=36&msid=1694690235757840-16952981266760601792-balancer-l7leveler-kubr-yp-sas-98-BAL-7293&search_source=yaru_desktop_common&search_domain=yaru&suggest_reqid=386194561167319971502423469671354
- Единообразный Идентификатор Ресурса, который идентифицирует ресурс запроса.

Request Method: GET - Указывает, что конкретно нужно сделать с запрашиваемым ресурсом

Status Code: 200 - Ответ сервера на запрос по протоколу HTTP

Remote Address: 77.88.55.242:443 - IP-адрес

77.88.55.242 - Номер сети
443 - Номер порта
Порт - Число, которое идентифицирует назначение сетевых потоков данных в пределах одного компьютера

Referrer Policy: origin - Определяет содержание информации о реферере, указываемой в заголовке Referer

Content-Type: text/html; charset=utf-8 - Используется для того, чтобы определить MIME тип ресурса

Cache-Control: private, max-age=300, no-transform - Это HTTP-заголовок, который определяет поведение браузера при кэшировании

Cookie: - Небольшой фрагмент данных, отправленный веб-сервером и хранимый на компьютере пользователя
yandex_login=uid-sj3jwz3l;
yandexuid=3861945611673199715;
L=AiNeU1ZSdmJMQ1RuQwUICwRdC0piTlJjIicXVxYcQ1kwAgY6.1677883851.15270.377697.9881ce18d0a8c6b6d0c166f8ddfab39c;
Session_id=3:1677883853.5.0.1677883851846:GqyivA:1e.1.2:1|1424947760.-1.0.1:291817678.3:1677883851|6:10180250.387430.CfJ-UMURvkG7VRjvoeys3TacFz8;
mda2_beacon=1677883853492;
is_gdpr=0; is_gdpr_b=COj6IhCuzgEoAg==;
i=dLnUOKN/elQuIpOkyL992Y6azAKoVCGN0KGjou31Z+95XFEeFJVoMmAPlz4UX820PsyUIWcztWVAtJ3Tfuarux/TyCY=;
yandex_csyr=1694690234;
bh=EkEiQ2hyb21pdW0iO3Y9IjExNiIsICJOb3QpQTtCcmFuZCI7dj0iMjQiLCAiR29vZ2xlIENocm9tZSI7dj0iMTE2IhoFIng4NiIiECIxMTYuMC41ODQ1LjE4OSIqAj8wMgIiIjoJIldpbmRvd3MiQggiMTAuMC4wIkoEIjY0IlJdIkNocm9taXVtIjt2PSIxMTYuMC41ODQ1LjE4OSIsICJOb3QpQTtCcmFuZCI7dj0iMjQuMC4wLjAiLCAiR29vZ2xlIENocm9tZSI7dj0iMTE2LjAuNTg0NS4xODkiWgI/MA==;
yandex_gid=36;
KIykI=1;
my=YwA=;
gdpr=0;
_ym_uid=1694690245873346544;
_ym_isad=1;
_yasc=Vg+OiNEnPtVRlapRmQ9ZczHLV1SOqEptV75s0GUau9ojZ1XEm9z7Iw5dBcwBvLUknDrYYHEwpA==;
yp=4294967295.skin.s#1993243853.udn.czoyOTE4MTc2Nzg6dms60JTQsNC90LjQuNC7INCf0L7QtNCx0LXRgNC10LfQutC+#1697282235.ygu.1#1710458244.szm.1_25:1536x864:806x747#1697368652.csc.1

User-Agent: - Идентификационная строка клиентского приложения
Mozilla/5.0 (Windows NT 10.0; Win64; x64)
AppleWebKit/537.36 (KHTML, like Gecko)
Chrome/116.0.0.0 Safari/537.36

Referer: https://ya.ru/ - Содержит URL источника запроса
```

- Секция General - содержит общую информацию о запросе или ответе.

- Секция Response Headers - Здесь перечислены заголовки ответа, которые содержат информацию о самом ответе, его безопасности и настройках кэширования.

- Секция  Request Headers - Здесь перечислены заголовки запроса, которые содержат информацию о предпочтениях клиента и другие параметры, связанные с запросом.

### 5. Какие заголовки повторяются в нескольких секциях? Какой в этом смысл?
- Cache-Control - Этот заголовок появляется как в секции "Запрос" (Request) и в секции "Ответ" (Response). Повторение заголовков в разных секциях обеспечивает полное и точное описание запроса и ответа. Это позволяет обеспечивать более эффективное и гибкое взаимодействие в веб-приложениях.

### 6. Что из себя представляет тело ответа?
- Тело ответа представляет собой HTML-код.

---
## Задание №2. Исследование указывающих ответов сервера.
### 1. Из-за чего произошло изменение адреса в адресной строке? Какие заголовки в этом поучаствовали и как?

- Изменение адреса в адресной строке с "http" на "https" происходит из-за перенаправления c HTTP на HTTPS. Это позволяет обеспечить безопасность соединения между клиентом и сервером.
- В этом процессе участвуют заголовки Location в ответе сервера и код состояния (301 или 302), который указывает на перенаправление.

### 2. Адрес был изменён в исходном запросе или потребовались дополнительные запросы, если были дополнительные запросы, то сколько?

- Был выполнен один дополнительный запрос после исходного запроса, чтобы перейти с "http" на "https".

### 3. Какой статус ответа имеет первоначальный запрос?

- Статус первоначального запроса имеет код 200, который указывает на успешное выполнение запроса и успешный ответ от сервера.
---

## Задание №3. Исследование получения и передачи cookie.

### 1. Перечислите название этих параметров и формат данных в них.

- Set-Cookie - имя_куки = значение; expires = дата; path = путь; domain = домен; secure; HttpOnly; SameSite = стратегия
- Cookie - имя_куки1 = значение1; имя_куки2 = значение2

### 2. Как можно удобно просмотреть все cookie, используемые на странице? Что означают их параметры Name, Value, Domain, Path и Expires?

- В разделе Application секции "Cookies" или "Куки", где будут отображены все cookie, связанные с текущей страницей.

- ***Name -  Это имя cookie, которое используется для его идентификации.***
- ***Value - Это значение, связанное с cookie.***
- ***Domain - Это доменное имя, для которого действует cookie.***
- ***Path - Это путь на сервере, для которого действует cookie.***
- ***Expires - Это дата и время, когда cookie истекает и больше не будет отправляться браузером на сервер.***

### 3. Как просмотреть все cookie связанные с текущим (просматриваемым) сайтом?

- Перейти в панель инструментов разработчика, перейти во вкладку "Application" и в левой панели выбрать "Cookies" для просмотра списка всех куки, связанных с текущим сайтом.

### 4. Опишите своими словами как вы понимаете суть и назначение cookie?

- Куки - это небольшие текстовые файлы, которые веб-сайты отправляют и хранят на нашем компьютере или устройстве, когда мы посещаем эти сайты.
---

## Задание №4. Исследование построения документов и сопутствующих запросов.

### 1. Что такое DOM? — Опишите своими словами

- Когда мы открываем веб-страницу в своем веб-браузере, браузер загружает HTML-код этой страницы. Затем браузер анализирует этот HTML-код и создает структуру, представляющую каждый элемент на странице, такие как заголовки, параграфы, изображения, ссылки и др. Эти элементы становятся объектами внутри DOM.

### 2. Может ли итоговый документ отличаться от тела ответа, полученного от сервера? Если да, то по каким причинам это может происходить?

- Да, итоговый документ, который отображается в браузере, может отличаться от тела ответа, полученного от сервера. И это может происходить по разным причинам:

- ***Исполнение JavaScript:*** Многие веб-сайты используют JavaScript для изменения содержимого страницы после загрузки. JavaScript может добавлять, изменять или удалять элементы на странице, загружать дополнительные данные с сервера (AJAX-запросы) и др.
- ***Кеширование:*** Браузеры могут кешировать ресурсы, чтобы ускорить загрузку страниц. Если ресурсы кешированы, браузер может использовать сохраненные копии, даже если сервер отправляет обновленную версию.
- ***Отображение ошибок:*** Если сервер вернул код состояния, указывающий на ошибку (например, 404 для "страница не найдена"), браузер может отобразить страницу с сообщением об ошибке, которая может отличаться от ожидаемого содержания.

### 3. Почему если вы сделали всего один запрос, в списке огромное количество запросов и ответов? Что они из себя представляют и на каком основании браузер их делает?

- Это вызвано тем, что веб-страница, которую мы загружаем, содержит множество внутренних запросов к различным ресурсам и сервисам. Каждый запрос и ответ содержит информацию о ресурсе, коде состояния, времени выполнения и других параметрах, которые могут быть полезными браузеру для анализа поведения страницы и выявления возможных проблем.
---

## Задание №5. Определение параметров запроса.

### 1. Запрос к какому эндпоинту необходимо выполнить для получения вашего расписания?

- ajax/schedule.php

### 2. Что содержится в теле ответа?

- В ответе мы получаем часть HTML-кода, тип которого указан во вкладке Header Content-Type: text/html; charset=UTF-8

### 3. Какого типа запрос вы выполнили?

- Выполнил POST-запрос

### 4. Какие данные вы использовали для получения расписания?

- Данные которые использовал для получения расписания:
- ****action: timetable****
- ****fac-id: 1****
- ****course-id: 3****
- ****group-id: 26463****
- ****edu-type: internal****