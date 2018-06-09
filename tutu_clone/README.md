# Tutu Clone

Example: https://github.com/niten2/tutu_clone

In the process, the following actions were performed:

  - Created a resource Routes (Routes), for which all CRUD-operations are possible.
  - The route has a name, there is a validation for the presence of this attribute.
  - Model The route has a lot of stations. A station can belong to multiple routes.
  - A train can have one route, on one route there can be several trains
  - The ticket contains information about (associated with) the train, the starting and ending stations. The ticket belongs to the user.
  - The user can have any number of tickets.
  - The train contains information about tickets to it.
  - Implemented a user interface for creating routes and adding stations to it.

  - A list of stations is derived using anonymous partials. The same is done for the list of trains.

  - Through layout, a footer containing information about the author has been added to all pages.

  - Created interface for creating / deleting / changing routes.

  - From the interface, you can assign a route to the train from the list of available routes.

  - When viewing a train, you can see its route or the value "Route not assigned"

  - When viewing the route, a list of trains on this route is displayed.

  - Implemented the ability to control cars: When adding a car indicated by the train to which it is added Car type (compartment / reserved seat) Seats: Lower / Upper

  - When viewing a train, information is displayed on the number of wagons: Placard / Coupe and number of seats: Placard top / bottom, Cup top / bottom.

  - The interface for viewing the list of sold tickets was implemented. You can perform all standard CRUD operations with tickets.

  - When creating (or editing) a ticket, you must specify the starting and ending stations, as well as the passenger's full name (without association with the User model)

  - Added the ability to specify the station serial number in the route (sorting field). It was considered that the same station can enter different routes and have a different sequence number in different routes.

  - Output a list of stations in the route by the order number (used scope)

  - Implemented through STI the following types of cars: Kupeyny (has top and bottom seats), reserved seat (has upper / lower seats + side upper and lower), CB (only bottom seats), Seated (has only seats)

  - When adding a car to the train, the car is automatically assigned a serial number (used by the callbacks). The uniqueness of the wagon's number at the train is checked. There can be no situation when the train has 2 cars with the number 11.

  - On the train viewing page, a list of the numbers of the cars (as links) was displayed. When you click on a link to a particular car, show the type of the car and the actual information on it (the number of top / bottom seats, if there is - side, etc. depending on the type of car)

  - The train made a flag - sorting the car. Values: from the head / c of the train's tail. If the option "from the head of the train" is chosen, the cars on the train page are displayed in direct order, if "from the tail of the train" - in the opposite.

  - Using the AR Query Interface, implemented the method in the Train model, which takes as the argument the type of the car and the type of seats (top / bottom / passages) and returns their total number for the train (ie counts for all cars of the specified type).

  - Sorting stations in the route is implemented.

  - Changed the addition of wagons to the attached resources.

  - Added arrival and departure times for each station in the route

  - I made a page for finding train tickets:

  - The user selects the start and end stations from the list. You can choose from all the stations that are in the system. The system produces routes in the chosen direction and provides the user with a list of trains that follow this route. The user sees the departure time from the initial station and the arrival time on the final station. The user has the opportunity to "buy" a train ticket. This is the "Buy" button next to the corresponding train. When you click on it, the passenger's name for the ticket is requested, the passport data and a ticket is created that is associated with the user and contains the required information, after which the ticket is shown to the user. Implemented a "purchase" ticket through the attached resources (resource ticket is embedded in the resource user).

  - Connect authentication through Device

  - I divided the application into a user and administrative part. Only users with administrative rights can access the administrative part.

  - When buying a ticket, the ticket is bound to the user who has bought it (logged in), while the user id is not transmitted in the query parameters or form fields, incl. hidden

  - A logged-in user can view a list of all his purchased tickets, each ticket separately, and also remove the ticket

  - The administrator can view the list of all tickets in the system, each individually, edit tickets and delete them.

  - When registering the user, his name and surname are requested and after login, "Hello, <username>!"
