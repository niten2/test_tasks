# TEST REST API

Sample code: https://github.com/niten2/test_task_api

## Requirements:

We need models:

Post - blog entries,
fields:
  title - string
  body - string
  author - link to the author
  published_at: date-time of posting

  Title and body fields are required

Comment - Comments
fields:
  body - string
  author - link to the author
  published_at: date-time of posting a comment

  Body is the required field

Since we have authors, we need a model in which we will store them

User - Users
fields:
  nickname:
  email:
  password:

Implement an endpoint for authorization. How to make it up to you.

Implement endpoints:
POST /api/v1/posts.json
  we send:
    title
    body
    published_at

  in the answer, we receive json with fields
    id
    title
    body
    published_at
    author_nickname

  If you did not pass the published_at in the request, you need to substitute the current time.

  If not all fields have been transmitted, then the response must contain one field
    errors - an array of errors

GET /api/v1/posts/:post_id.json
  get a post on his id

  fields in the response as in the endpoint POST /api/v1/posts.json

GET /api/v1/posts.json
  we send:
    page
    per_page

  get the list of records sorted by the field published_at descending
  fields of each entry as in the endpoint POST /api/v1/posts.json

  In the response headers, you need to transfer the total number of pages and records

Endpoints for comments cannot be made

Other requirements:
  application code ruby ​​on rails 4.2.6
  DBMS - Postgresql 9.4
  To generate json, use JBuilder
  In tables, you need to specify all the required indexes
  The code for models and controllers needs to be covered with tests.
  For testing use RSpec 3.4
  You also need to package the application in the docker image, so the application must receive the data to connect to the database through the environment variables

Part 2. Make an analytical report.

POST /api/v1/reports/by_author.json
  start_date - the start of the interval
  end_date - end of the interval
  email - where to send the report

answer:
  fields: message: "Report generation started"

Endpoint adds the task to generate the report in the queue, the queue is processed by a separate process. The finished report is sent to the email specified in the task.

The report should be a table with columns:
  nickname,
  email,
  the number of entries for the period,
  the number of comments for the period.

The lines in the report are sorted by the value calculated so (number of posts + number of comments / 10).
The table can be designed as an HTML table or using ASCII characters.
For this task, you need to fill the database with test data using gem faker.
The result should be placed on GitHub.

[Back](https://github.com/niten2/test_tasks)
