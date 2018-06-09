# Todo App

  - The application contains two pages: / and / admin

  - The page / shows the current dollar-to-ruble exchange rate, known to the application.

  - The application by the background script periodically updates the course from any available source you choose (CBR site, main page http://www.rbc.ru, etc.).

  - When updating the course in the application, it is updated on all currently open pages.

  - On the / admin page there is a form containing a field for entering a number, a field for entering date-time and submitting.

  - When submitting the entered number is done by the forced course before the entered time, i.e. before this time, the real course is ignored, instead of it, pages / show the forced rate.

  - Page/admin "remembers" the values ​​entered the previous time, they are displayed already entered when the page is loaded.

  - When submitting an accelerated course, it, of course, is immediately updated on all open pages. When the expiration time of the forced rate on all pages, the real rate begins to be displayed.

  - The form contains reasonable validations.

  - The appearance of the application should be neat within the reasonable (for example, use Twitter Bootstrap).

  - The advantage is the use of any JS-framework on the client side.

  - The Web application should work correctly in the Firefox and Chrome browsers of the latest versions.

  - The code must be covered with tests.

  - Everything you need to run the application locally must be in the form of Procfile for Foreman.

[Back](https://github.com/niten2/test_tasks)
