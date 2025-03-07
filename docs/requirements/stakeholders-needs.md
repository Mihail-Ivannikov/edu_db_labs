# Система організації та управління опитуваннями експертів

## Вступ

*Цей документ містить ключову інформацію про проєкт
"Система організації та управління опитуваннями експертів",
яка включає опис сценаріїв використання продукту для адміністратора та користувача,
докладний опис продукту та вимоги до його функціональності, зручності у роботі,
надійності, продуктивності та підтримки.*

### Мета

*Мета цього документу - сформулювати основні потреби системи,
згідно яких буде розроблятися система організації та управління опитуваннями експертів. 
Ці вимоги будуть використовуватися для розробки специфікацій та тестування системи.*

### Контекст

*У цьому документі сформовано технічне завдання та вимоги для розробки нашого проекту.*


### Основні визначення та скорочення

***"Управління опитуваннями експертів"*** -відноситься до процесу планування, проведення, аналізу та інтерпретації опитувань,
які проводяться серед осіб, визнаних експертами в певній галузі або області знань. Управління опитуваннями експертів забезпечує систематичний підхід до збору,
аналізу та використання експертних знань, що може бути важливим для прийняття рішень, стратегічного планування або наукових досліджень.
Додаткові визначення можна знайти [тут](state-of-the-art.md).

***FURPS*** - це акронім в інженерії програмного забезпечення, який систематизує вимоги до продуктів чи систем. Він включає функціональність: Основні можливості системи.

***Зручність використання*** - Інтуїтивність та користувацький досвід. Надійність: Стійкість системи до збоїв та помилок. Продуктивність: Ефективність, включаючи час реакції та пропускну спроможність.

***Підтримуваність*** - Легкість обслуговування та модифікації. FURPS допомагає розробникам краще відповідати потребам користувачів та очікуванням стейкхолдерів. 

***Стейкхолдери (stakeholders)*** - це зацікавлені в проєкті особи чи сторони, що мають якийсь до нього стосунок. 

***Запит*** — це офіційний запит або вимога від зацікавленої особи, який містить конкретні деталі або інформацію щодо певного аспекту проєкту або процесу.

***SDLC (Software Development Life Cycle)*** - це систематичний процес, який визначає етапи, кроки та дії, які використовуються для розробки, впровадження та підтримки програмного забезпечення. SDLC містити планування, аналіз, проєктування, розробку, тестування, впровадження і підтримку програмного продукту.

***Технічне завдання (ТЗ)*** - це офіційний документ, який містить докладний опис вимог до проєкту, продукту або послуги. Цей документ використовується для передачі інформації від замовника до виконавця (розробника, команди проєкту тощо) з метою визначення обсягу та характеру робіт, які необхідно виконати.

***Документація(documentation)*** - це набір інформаційних матеріалів, текстових і графічних документів, які призначені для опису, пояснення та фіксації технічних аспектів або дій, пов'язаних з розробкою, впровадженням, експлуатацією та підтримкою програмного забезпечення.

***API (Application Programming Interface)*** - це набір правил і протоколів, які дозволяють різним програмам та сервісам взаємодіяти один з одним. API визначає, які запити можуть бути виконані, які дані можуть бути обмінені і як це може бути зроблено.

***REST API (Representational State Transfer Application Programming Interface)*** - це архітектурний стиль для розробки програмного забезпечення, який використовується для створення вебслужб та обміну даними між різними компонентами програмного забезпечення через інтернет. REST API базується на декількох ключових принципах:

- **Resources** - дані та функціональність викладаються у вигляді ресурсів, які ідентифікуються унікальними URI (Uniform Resource Identifier). Наприклад, вебсторінка, користувач, зображення, продукт тощо можуть бути представлені як ресурси.

- **Представлення стану (State Representation)** - клієнти можуть взаємодіяти з ресурсами, запитуючи їх стан за допомогою HTTP методів, таких як GET (отримати), POST (створити), PUT (оновити) та DELETE (видалити). Результатом запиту є представлення стану ресурсу, часто у форматі JSON або XML.

- **HTTP методи** - REST використовує HTTP методи для виконання дій над ресурсами. Найбільш використовуваними методами є GET (отримання інформації), POST (створення нового ресурсу), PUT (оновлення теперішнього ресурсу) та DELETE (видалення ресурсу).

- **Stateless** - Кожен запит до сервера має містити всю необхідну інформацію для обробки запиту. Сервер не зберігає інформацію про попередні запити від клієнта. Це спрощує масштабованість та забезпечує незалежність між запитами.

- **Уніфікований інтерфейс (Uniform Interface)** - REST використовує уніфікований набір обміну повідомленнями, який включає HTTP методи та структуризований шлях до ресурсу. Це робить ресурси більш доступними та легкими для розуміння.

- **Система кешування (Caching)** - REST підтримує можливість кешування відповідей сервера, що сприяє покращенню продуктивності та зниженню навантаження на сервер.

***VCS (Version Control System)*** - це програмне забезпечення, призначене для відстеження змін у файлів і коді проєкту, зберігаючи попередні версії цих файлів та надаючи можливість керувати роботою кількох розробників над спільними проєктами. 

***Масштабованість*** — це здатність системи або додатку працювати ефективно та безперебійно при збільшенні навантаження та передбачає, що система може бути легко розширена, щоб впоратися зі збільшенням обсягу роботи, без серйозних збоїв у продуктивності або доступності.


### Посилання

[Експертні методи оцінювання](https://uk.wikipedia.org/wiki/%D0%95%D0%BA%D1%81%D0%BF%D0%B5%D1%80%D1%82%D0%BD%D1%96_%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B8_%D0%BE%D1%86%D1%96%D0%BD%D1%8E%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F)

[FURPS](https://ru.wikipedia.org/wiki/FURPS)


## Короткий зміст

* 
  + Register_User - Зареєструвати користувача
  + Login_User - Увійти як користувач
  + Logout_User - Вийти з облікового запису
  + Delete_User - Видалити обліковий запис
  + Create_Quiz - Створити опитування
  + Edit_Quiz - Редагувати опитування
  + Delete_Quiz - Видалити опитування
  + Share_Quiz - Поділитися опитуванням
  + Take_Quiz - Пройти опитування
  + Get_Results - Переглянути результат опитування
  + Make_Editor - Надати права редактора
  + Remove_Editor - Забрати права редактора
  + [Характеристика ділових процесів](#характеристика-ділових-процесів)
  + [Короткий огляд продукту](#короткий-огляд-продукту)
  + [Функціональність](#функціональність)
  + [Практичність](#практичність)
  + [Надійність](#надійність)
  + [Продуктивність](#продуктивність)
  + [Експлуатаційна придатність](#експлуатаційна-придатність)
* 

## Характеристика ділових процесів

### Зареєструвати користувача

| ID: | **Register_User**                                                                                                                                                                                                                                                                             |
|:----|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Назва | Зареєструвати користувача                                                                                                                                                                                                                                                                     |
| Учасники | Система, користувач                                                                                                                                                                                                                                                                           |
| Передумови | Користувач незареєстрований                                                                                                                                                                                                                                                                   |
| Результат | Створено новий обліковий запис                                                                                                                                                                                                                                                                |
| Виключні ситуації | EX01.01 Обліковий запис вже існує<br> EX.01.02 Користував ввів хибні дані                                                                                                                                                                                                                     |
| Основний сценарій | 1. Користувач натискає на кнопку реєстрації <br> 2. Система відкриває форму для реєстрації <br> 3.Користувач вводить дані <br> 4. Користувач підтверджує дані (можлива EX.01.01, EX01.02)<br> 5. Система заносить дані користувача в базу даних <br> 6. Система створює новий обліковий запис |

### Авторизувати користувача

| ID: | **Login_User**                                                                                                                                                                                                                                     |
|:----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Назва | Авторизувати користувача                                                                                                                                                                                                                           |
| Учасники | Система, користувач                                                                                                                                                                                                                                |
| Передумови | Користувач зареєстрований, користувач не увійшов в обліковий запис                                                                                                                                                                                 |
| Результат | Користувач увійшов в обліковий запис                                                                                                                                                                                                               |
| Виключні ситуації | EX02.01 Облікового доступу користувача не існує<br> EX02.02 Користувач ввів хибні дані                                                                                                                                                             |
| Основний сценарій | 1. Користувач натискає на кнопку авторизації <br> 2. Користувач вводить дані <br> 3. Користувач підтверджує дані (можлива EX.02.01, EX02.02) <br> 4. Система дає запит до бази даних <br> 5. Система дає користувачу доступ до особистого кабінету |

### Вийти з облікового запису

| ID: | **Logout_User**                                                                                                            |
|:----|:---------------------------------------------------------------------------------------------------------------------------|
| Назва | Вийти з облікового запису                                                                                                  |
| Учасники | Система, користувач                                                                                                        |
| Передумови | Користувач зареєстрований, користувач увійшов в обліковий запис                                                            |
| Результат | Користувач вийшов з облікового запису                                                                                      |
| Виключні ситуації | Відсутні                                                                                                                   |
| Основний сценарій |  1. Користувач переходить на особисту сторінку <br> 2. Користувач натискає кнопку "Вихід з облікового запису" <br> 3. Система блокує користувачу доступ до особистого кабінету <br> 4. Користувач закінчує взаємодію |

### Видалити обліковий запис

| ID: | **Delete_User**                                                                                                                                                            |
|:----|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Назва | Видалити обліковий запис користувача                                                                                                                                       |
| Учасники | Система, користувач                                                                                                                                                        |
| Передумови | Користувач зареєстрований                                                                                                                                                  |
| Результат | Обліковий запис користувача видалено                                                                                                                                       |
| Виключні ситуації | EX.04.01 Облікового запису користувача не існує                                                                                                                            |
| Основний сценарій | 1. Користувач переходить на особисту сторінку <br> 2. Користувач натискає кнопку "Видалити обліковий запис" <br> 3. Система дає запит видалення даних з бази даних (можлива EX.04.01) <br> 3. Користувач підтверджує запит <br> 4. Система видаляє обліковий запис |

### Створити опитування

| ID: | **Create_Quiz** |
|:----|:------------|
| **Назва** | Створити нове опитування |
| **Учасники** | Система, користувач |
| **Передумови** | Користувач зареєстрований і перебуває на особистій сторінці |
| **Результат** | Нове опитування |
| **Виключні ситуації** | EX05.01 Опитування порожнє |
| **Основний сценарій** | 1. Користувач переходить на особисту сторінку <br> 2. Користувач створює опитування <br> 3. Користувач зберігає опитування (можлива EX05.01) <br> 4. Система додає опитування до бази даних <br> 5. Користувач закінчує взаємодію |

### Редагувати опитування

| ID: | **Edit_Quiz** |
|:----|:------------|
| **Назва** | Редагувати опитування |
| **Учасники** | Система, користувач |
| **Передумови** | Користувач має створене опитування |
| **Результат** | Внесені зміни до опитування |
| **Виключні ситуації** | EX06.01 Опитування порожнє <br> EX06.02 Користувач не вніс змін |
| **Основний сценарій** | 1. Користувач переходить на особисту сторінку <br> 2. Користувач редагує опитування <br> 3. Користувач зберігає опитування (можлива EX06.01, EX06.02) <br> 4. Система додає зміни до бази даних <br> 5. Користувач закінчує взаємодію |

### Видалити опитування

| ID: | **Delete_Quiz** |
|:----|:------------|
| **Назва** | Видалити опитування |
| **Учасники** | Система, користувач |
| **Передумови** | Користувач має створене опитування |
| **Результат** | Опитування видалене |
| **Виключні ситуації** | Відсутні |
| **Основний сценарій** | 1. Користувач переходить на особисту сторінку <br> 2. Користувач видаляє опитування <br> 3. Система видаляє опитування з бази даних <br> 4. Користувач закінчує взаємодію |

### Поділитися опитуванням

| ID: | **Share_Quiz** |
|:----|:------------|
| **Назва** | Поділитися опитуванням |
| **Учасники** | Система, користувач |
| **Передумови** | Користувач має створене опитування |
| **Результат** | Опитування надіслано респондентам |
| **Виключні ситуації** | Відсутні |
| **Основний сценарій** | 1. Користувач переходить на особисту сторінку <br> 2. Користувач обирає потрібне опитування <br> 3. Користувач натискає кнопку "Поділитися опитуванням" <br> 4. Система генерує посилання <br> 5. Користувач копіює посилання на опитування <br> 6. Користувач надсилає опитування респондентам <br> 7. Користувач закінчує взаємодію |

### Пройти опитування

| ID: | **Take_Quiz** |
|:----|:------------|
| **Назва** | Пройти опитування |
| **Учасники** | Система, користувач |
| **Передумови** | Користувач має посилання на опитування |
| **Результат** | Опитування пройдене|
| **Виключні ситуації** | ЕХ09.01 Посилання на опитування не є валідним |
| **Основний сценарій** | 1. Користувач переходить за посиланям (можлива ЕХ09.01) <br> 2. Користувач дає відповіді на поставлені питання <br> 3. Користувач надсилає відповіді натиснувши кнопку "Надіслати"<br> 4. Система записує відповіді до бази даних та надсилає результат<br> 5. Користувач закінчує взаємодію з системою |

### Переглянути результати опитування

| ID: | **Get_Results** |
|:----|:------------|
| **Назва** | Переглянути результати опитування |
| **Учасники** | Система, користувач |
| **Передумови** | Користувач зареєстрований і пройшов опитування |
| **Результат** | Переглянуто результат опитування |
| **Виключні ситуації** | ЕХ10.01 Посилання на опитування не є валідним |
| **Основний сценарій** | 1. Користувач переходить за посиланям на пройдене опитування (можлива ЕХ10.01)<br> 2. Користувач натискає кнопку "Переглянути результат" <br> 3. Система показує результат опитування<br> 4. Користувач закінчує взаємодію з системою |

### Надати права редактора

| ID: | **Make_Editor** |
|:----|:------------|
| **Назва** | Надати права редактора |
| **Учасники** | Система, користувач |
| **Передумови** | Користувач зареєстрований і перебуває на особистій сторінці, користувач створив опитування |
| **Результат** | Надано права редагування іншому користувачу |
| **Виключні ситуації** | ЕХ11.01 Користувача не знайдено |
| **Основний сценарій** | 1. Власник опитування надсилає запит на користувача (можлива ЕХ11.01)<br> 2. Система показує користувача на якого був створений запит<br> 3. Власник опитування обирає користувача<br> 4. Власник опитування натискає кнопку "Надати права редагування"<br> 5. Користувач отримує права редагування<br>6. Власник опитування закінчує взаємодію з системою |

### Забрати права редактора

| ID: | **Remove_Editor** |
|:----|:------------|
| **Назва** | Забрати права редактора |
| **Учасники** | Система, користувач |
| **Передумови** | Користувач зареєстрований і перебуває на особистій сторінці, користувач створив опитування |
| **Результат** | Відкликано права редагування іншого користувача |
| **Виключні ситуації** | ЕХ12.01 Користувача не знайдено |
| **Основний сценарій** | 1. Власник опитування надсилає запит на користувача з правами редагування (можлива ЕХ12.01)<br> 2. Система показує користувача на якого був створений запит<br> 3. Власник опитування обирає користувача<br> 4. Власник опитування натискає кнопку "Забрати права редагування"<br> 5. Користувач втрачає права редагування <br>6. Власник опитування закінчує взаємодію з системою |

## Короткий огляд продукту

Система управління опитуваннями експертів — це інструмент, призначений для збору та аналізу експертних думок в різних галузях. 

**Границя системи**:

- Обмежена діяльність системи лише збором, обробкою та аналізом думок експертів.
- Встановлення правил і обмежень для захисту конфіденційності та безпеки даних.

**Категорії користувачів системи**:

- Користувачі — надають свої думки та знання в певних галузях.
- Адміністратори — відповідальні за керування та налаштування системи, включаючи створення та видалення облікових записів, керування доступом користувачів тощо.
- Редактори — створюють та видаляють опитування, визначають запитання

Система управління опитуваннями експертів дозволяє користувачам створювати опитування, запитувати думки експертів і аналізувати отримані відповіді. Вона забезпечує структурований спосіб отримання експертних думок та може бути корисною в багатьох галузях, включаючи наукові дослідження, бізнес-аналіз, прийняття рішень та багато інших сфер.

    
## Функціональність

**Функціональність**

Система організації та управління опитуваннями експертів може мати різні ролі та функціональність для респондента, редактора та адміністратора. Нижче наведено загальну оглядову функціональність для кожної з цих ролей:

1. **Інтерфейс респондента** (інтерфейс користувача, який бере участь у опитуванні):

   - **Реєстрація та авторизація**:
    Можливість створити обліковий запис та увійти в систему.
   
   - **Заповнення опитувань**:
    Можливість відповідати на запитання опитування, надавати свої відгуки та оцінки.

   - **Перегляд результатів**:
    Доступ до результатів опитування після його завершення, можливість переглядати агреговану інформацію та аналізи.

   - **Зміна профілю**:
    Можливість оновлення власного профілю та інформації.

2. **Інтерфейс редактора** (інтерфейс користувача, якому надані права на редагування опитування):

   - **Редагування опитувань**:
    Можливість вносити зміни до опитувань, якщо це необхідно.

   - **Запуск опитувань**:
    Можливість запускати опитування та відслідковувати їхній стан (активні, завершені).

   - **Запрошення експертів**:
    Можливість надсилати запрошення експертам для участі у опитуваннях.

   - **Аналіз результатів**:
    Доступ до аналізу результатів опитувань та створення звітів.

3. **Інтерфейс адміністратора** (інтерфейс користувача, який створює опитування в особистому кабінеті):

    - **Створення опитувань**:
    Можливість створювати нові опитування, визначати запитання, формати відповідей та критерії оцінки.

    - **Редагування опитувань**:
    Можливість вносити зміни до опитувань, якщо це необхідно.

    - **Видалення опитувань**:
    Можливість видаляти опитування

    - **Запуск опитувань**:
    Можливість запускати опитування та відслідковувати їхній стан (активні, завершені).

   - **Керування користувачами**:
    Можливість надавати та забирати доступ до редагування опитування користувачу

   - **Аналіз результатів**:
    Доступ до аналізу результатів опитувань та створення звітів.

    - **Запрошення експертів**:
    Можливість надсилати запрошення експертам для участі у опитуваннях.

Це загальна функціональність, яку може мати система організації та управління опитуваннями експертів. Розширена функціональність може включати в себе інші можливості, такі як автоматичний аналіз відповідей, побудова графіків і звітів, інтеграція з іншими системами тощо, в залежності від потреб користувачів та бізнес-вимог.

## Практичність
**Практичність**

1. **Визначення мети опитування:**
Спочатку потрібно чітко сформулювати мету опитування та визначити, які конкретні питання чи завдання мають бути вирішені за допомогою думок експертів.

2. **Вибір методики:**
Визначте методику опитування, яка найкраще відповідає вашим цілям. Однією з популярних методик є метод суцільних оцінок (аналогічний методу Дельфі). Інші методи включають парні порівняння та ранжування.

3. **Вибір і формулювання питань:** 
Ретельно розробіть питання для експертів, які чітко відображають предмет дослідження і не залишають місця для двозначних інтерпретацій. Питання можуть бути відкритими або закритими, залежно від методики.

4. **Вибір експертів:**
Оберіть кваліфікованих експертів, які мають досвід та знання в галузі, яка досліджується. Важливо також враховувати, що експерти мають бути незалежними один від одного.

5. **Організація опитування:**
Розпочніть опитування, надсилайте питання експертам та отримуйте їх відповіді. Можна використовувати спеціальні програми для збору даних, які спрощують процес.

6. **Аналіз результатів:** 
Після збору відповідей експертів проведіть аналіз, щоб отримати узагальнені результати. Зазвичай це включає в себе обчислення середніх значень, розмаху, стандартного відхилення та інших статистичних параметрів.

7. **Висновки та прийняття рішень:** 
Використовуйте отримані результати для прийняття рішень або розробки рекомендацій. Важливо враховувати думки і оцінки експертів при розробці стратегій чи планів дій.

8. **Зворотний зв'язок:**
Зверніть увагу на можливість надати експертам зворотний зв'язок стосовно результатів опитування. Це може бути корисним для подальшого вдосконалення методології чи виправлення неточностей.

## Надійність

1.Стабільність: Здатність працювати безперебійно та надійно в будь-яких умовах, навіть при можливих технічних проблемах або великому навантаженні.

2.Масштабованість: Можливість обробки запитів великої кількості користувачів одночасно, забезпечуючи ефективну роботу системи навіть під великим завантаженням.

3.Резервне копіювання даних: Забезпечення регулярного та надійного резервного копіювання баз даних для запобігання втрати інформації в разі аварій, помилок або кібератак.

4.Захист від кібератак: Забезпечення високого рівня захисту системи від кіберзагроз, таких як DDoS-атаки, вразливості в безпеці, злому та несанкціонованого доступу.

5.Відновлення після збоїв: Можливість швидкого відновлення роботи системи в разі виникнення збоїв або аварій, забезпечуючи найменший час відсутності доступу користувачів.

6.Безпечне зберігання даних: Захист даних користувачів від втрати або пошкодження, включаючи ефективне резервне копіювання і шифрування даних.

7.Аудит та логування подій: Ведення детальних журналів подій і аудиту, щоб слідкувати за діяльністю користувачів та виявляти можливі проблеми чи злами.

## Продуктивність

1.Швидкість завантаження сторінок: Мінімізація часу завантаження сторінок та опитувань, забезпечуючи швидкий доступ користувачів до вмісту.

2.Ефективне кешування та оптимізація ресурсів: Використання кешування для збереження ресурсів та прискорення завантаження сторінок, а також оптимізація відображення ресурсоємних елементів.

3.Складні опитування та ресурси: Здатність обробляти складні опитування з великою кількістю питань та ресурсоємними відповідями, такими як багатомовні тексти чи відображення графіків та таблиць.

4.Оптимізований інтерфейс користувача: Розробка інтерфейсу, який забезпечує зручність користувачів у створенні, заповненні та аналізі опитувань, з мінімізацією зайвих кроків.

5.Інтеграція з іншими системами: Можливість інтеграції з іншими програмними продуктами та сервісами, що полегшує обмін даними та спрощує роботу користувачів.

6.Аналітика продуктивності: Наявність інструментів для моніторингу та аналізу продуктивності системи з метою вдосконалення та оптимізації.

## Експлуатаційна придатність

1.Мультиплатформенність: Підтримка різних операційних систем, включаючи Windows, Linux, Android та IOS, щоб користувачі могли отримувати доступ до системи на своїх улюблених платформах.

2.Інтерфейс користувача: Зручний та інтуїтивно зручний інтерфейс користувача, який дозволяє легко створювати, налаштовувати та використовувати опитування для експертів. Мінімізація бар'єрів для користувачів у навчанні та роботі з системою.

3.Підтримка користувачів: Надання ефективної технічної підтримки та документації для користувачів, щоб вони могли швидко вирішувати будь-які технічні або функціональні питання.

