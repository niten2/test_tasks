# Test Task Work

Example: https://github.com/niten2/test_task_work

## The task includes:

  - Generate a new project with a fresh version of Rails and a Postgres database. It is advisable to use slim.
  - Connect the default authorization through Devise.
  - Create a Company model (with a minimum set of fields - country code, name).
  - Create a model Person (name, surname). Everyone can be attached to one of the companies
  - Write a seed file that will generate 50 companies and 2-10 employee employees. You can, for example, use the gem faker.
  - Implement the following functional:
  - After authorization, the user sees a list of available companies. To display the name of the country by code, you can use gem countries. on the company page its name and list of employees are displayed in the list of companies and in the lists of employees next to each item there should be an icon with an empty / filled star (you can take it from Bootstrap). By clicking on the icon, the company or employee is added to the current user's favorites, and the icon changes its state without reloading the page. At localhost: 3000 / favorites, display one list of the company and the people that the user has added to your favorites. Sort the list by the date of addition from new to old. Write an integration test in which the user is authorized, add a few companies and people to your favorites and check that they appear in the favorites list.

In the project used: Devise, Faker, Rspec, Capybara, Ajax

[Back](https://github.com/niten2/test_tasks)
