# Test Task Ruby (Bulletin Board)

## User system:

  - New User Registration.

  - The composition of the profile: login, full name, birthday, email, address, city, state, country, zip, password and confirm password (all fields are required).

  - Automatic location of the user, after changing the fields

  form (address, city, state, zip, country) and display it on a map, on pages
  profile editing and registration. Use Google Map ver 3.

  - Edit the user profile.

  - Password recovery.

  - View the profile of other users and display the map of it
  location.

  - Implement authorization with Twitter, Facebook or Google App
  (any of them).

## Ad System:

  - Compose / edit / delete ads by users;

  - add/edit comments to the announcement by users;

  - the message includes fields: author, text, image;

  - the text of the message has a Textile markup, all other HTML tags are blocked (if an HTML tag was entered, it simply displays: example, the user entered "Hello * world *", then when viewing the message, he sees "Hello and boldface word" world " );

  - comment on ads using AJAX effects (do not overload the page when adding/removing comments);

  - only the Administrator or the Moderator, and the author himself can delete the comment;
  An unauthorized user can only view ads and profiles
  users;

  - the list of ads should display a thumbnail, the author and the first words of the text (up to 160 characters, the words should not be cropped);
  - the ability to search for ads by author, content, address, tags, text ads.

## Role system:

  - Enter 3 roles: administrator, user and moderator

  - Administrator: can manage (add, edit, delete, install roles) by the user. A user with administrative rights is created manually from the console or during migration. It is necessary to specify how.

  - Moderator: manages all messages and user comments

  - User: can add and edit his messages (ads and
  Comments)

## Pages:

  - On all pages, you can go to the user list, list of ads, edit your profile, log off.

  - The home contains a list of ads.
    View the ad.
    Authorization.
    Check-in.
    Profile.

When performing a test task, it is MANDATORY:

  - Install the application on Heroku
  - Put the code on GitHub.
  - Apply https://github.com/styleguide/ruby
  - Apply https://github.com/polarmobile/coffeescriptstyleguide
  - Use the latest version of Rails (> 4.0.0)
  - Use Haml
  - Write unit tests.
  - Write Integration Tests
  - It is desirable to cover at least 90% of the application with tests
  - Capybara helps you test your web applications by simulating how a real user will interact with the application.
  - Also include the application to Travis CI

[Back](https://github.com/niten2/test_tasks)
