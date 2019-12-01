# Example code:

  - frontend: https://github.com/niten2/todo_credit_site_frontend
  - backend: https://github.com/niten2/todo_credit_site_backend
  - demo frontend: https://niten2.github.io/todo_credit_site_frontend
  - demo backend: https://todo-credit-site-backend.herokuapp.com/

# Description

#### 1. The application must support authentication by a pair of username and password.

#### 2. To have a differentiation of access rights (Administrator, Manager)

##### administrator can:

  - create new users,
  - edit only Managers,
  - Change passwords for all Managers,
  - block the account of the Manager (the user can not enter the account),
  - edit all Clients
  - to change the territorial coefficient of the Client (3 territories, each has a percent surcharge factor of 0.5%, 1%, 1.5%),
  - can remove Clients
  - can edit loans
  - can change the period for issuing a loan

##### manager can:

  - create a client
  - modify customer data
  - mark the client for deletion
  - create a loan

##### administrator can't:

  - create new customers

##### manager can't:

  - edit loan
  - can not change the territorial coefficient of the Client
  - receive information about other users

##### user can:

  - edit your attributes

#### 4. Client attributes:

  - name (required field)
  - passport data (required field)
  - phone (required field)
  - email (required)
  - territory (is installed automatically from the client)

#### 5. Manager, attributes (all fields are required):

  - full name
  - territory
  - phone
  - login
  - password
  - email

#### 7. In case of an unsuccessful login of the manager in more than 4 times, the record is blocked

#### 8. Each customer creates his own page (client card), it contains the following data:
  - full name
  - territory
  - phone
  - email
  - passport data
  - surcharge factor
  - amount of money given out

  And as there are 2 buttons; "Back" and "Issue a loan."

#### 9. By clicking the button "Issue a loan" opens a new page with customer data

#### top of page
  - name of the client
  - loans already issued
  - the maturity date of each loan issued

#### below is a page on the loan issue form consisting of 5 fields:

  - loan amount
  - loan issuance ratio 
  (equal to the territorial coefficient, the manager can not change it when creating a manager's ratio is taken)
  - Date of issue of loan
  - Maturity date of the loan repayment
  (the manager can change it, but by default it is calculated for a period of 30 calendar days)
  - Total loan repayment amount.

  Total is calculated according to the following principle:

  Loan amount * coefficient + 1 calendar day of loan (equal to 1% of the premium to the total loan amount)

  Example: 10 000 (loan) * 0.5% (amount) + 105 (days loan) = total

#### 10. In case of delay of one day of the loan, and the delay is considered from the moment when the principal maturity of 30 calendar days has expired

  Total will be:

  Loan amount * coefficient + 1 calendar day of delay (equal to 15% of the total loan amount)

  Example: 10 000 (loan) * 0.5% (amount) + 1507.5 (calendar day of delay) = total

[Back](https://github.com/niten2/test_tasks)
