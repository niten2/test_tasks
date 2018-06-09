# Application for the issuance of loans.

  - Sample code: https://github.com/niten2/test_task_loans
  - Demo version here: http://test-task-loans.herokuapp.com

## Technical task:

  - The application must support authentication by a pair of username and password.
  - To have a differentiation of access rights (Administrator, Manager)
  - The administrator has the right to: create new users, change passwords for all users, block the user account, expose the territorial coefficient (suppose 3 territories, (you can choose to your taste) and each has a percentage markup factor of 0.5%, 1% 1.5%), change the period for issuing a loan.
  - The manager has the right: to create a client, change data on the client, mark the client for deletion.
  - The application must store all data in the Mysql database.
  - Client creation: name, territory, telephone, Email, passport data. (required fields: passport data, telephone, name)
  - Creation of a manager (user of the program): name, territory, telephone, login, password (all fields are required).
  - The interface should not be cluttered up, simple, but the most understandable interface, the design of the pages does not crush, all buttons and blocks are located portionwise and do not run across the page.
  - In case of unsuccessful login to the program more than 4 times, the entry is blocked and the program administrator sends a letter about the possible hacking of the program.
  - Each customer creates his own page (customer card), it contains the following information: name, territory, phone, email, passport data, surcharge rate, amount of money given out. And as there are 2 buttons; "Back" and "Issue a loan."
  - By clicking the "Issue a loan" button; a new page with customer data is opened, at the top of the page the customer's name and already issued loans and the maturity date of each loan issued (for each loan, a maximum period of 30 calendar days is set for each loan). Below the page (it will be necessary to separate the top of the page and the bottom of the page to make it clear that the top information information, and below is the introduction of new data on the loan), a simple form of loan issuance consisting of 5 fields: Loan amount, Loan issue date, Loan issuance ratio (equal to the territorial coefficient, the manager can not change it), The loan completion date (the manager can change it, but by default it is calculated for a period of 30 calendar days)
  - The formula for calculating the total amount: Up to 30 days inclusive: (Loan amount * Coefficient) + (1% * number of days) After 30 days: (Loan amount * Coefficient) + (15% * number of days)
  - If there are outstanding loans: (Loan amount * Coefficient) + (15% * number of days)

In the project use: Rspec, Capybara, Devise, MaterializeCss, Jquery, Mysql, Cancan.

[Back](https://github.com/niten2/test_tasks)
