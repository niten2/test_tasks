# Test task "Site for recruitment agency"

The vacancy must have Name, Date of addition, Expiration date, Salary, Contact information, Several required skills.

An employee must have:

1) Name, it must contain 3 words and only Cyrillic letters and spaces
2) Contact information and it must contain a phone number or e-mail address
3) Job search status
4) Desired salary
5) Multiple Skills

Ability: * Must have a unique name

## Interfaces

Make interfaces for adding job lists and job openings.
The list of skills is filled in on the editing page of the employee/vacancy by ajax. With the ability to select an existing one or add a new one.

### Search for vacancies

For each employee, you can get a list of all suitable vacancies.
The validity of the vacancies should not expire.

(+) Display jobs in two groups that are completely suitable for the set of skills and partly.
All vacancies should be sorted by descending salary.

### Search for employees

For each vacancy, you can get a list of all suitable employees.
The employee must look for work.
(+) Withdraw employees into two groups that are fully suited to the skill set and partially.
Additionally, all employees should be sorted by the increase in the desired salary.

The task with (+) increased complexity, perform at will. Requirements: PostgreSQL, RSpec, Git

[Back](https://github.com/niten2/test_tasks)
