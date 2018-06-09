# RoR test task
# A task

Develop a prototype warehouse accounting system,
in which the
- accounting,
- arrival,
- the departure of goods in the warehouse.

Development platform: Ruby on Rails.

Cargo characteristics

## Each type of cargo stored in a warehouse has the following characteristics:

- Title
- The weight of one box (in kilograms)
- No Angara where storage will be carried out

## User roles and functionality

The system should have 3 user roles:

### Supplier of the goods.
- Introduces information about new shipments of goods (without the possibility of further editing/removal),
- The Type A of the shipment and the number of boxes (in units) is mandatory.

### Wholesaler.
- See information about the current balance (number of boxes) for each type of cargo.
- To take the necessary number of drawers of any type of cargo from the warehouse, thereby reducing its available balance.

### The system administrator. Has the opportunity to use the following functional:
- See the complete history of all delivery and pick-up operations with an exact date and time.
- See information about current balances.
- Create new types of cargo, which can then be used by other users of the system.
- See the total weight of all cargo stored in each hangar

## Example

There is a category of goods:

Vertu phone
- Weight 10 kg
- Hangar # 5.

The supplier "Skorokvoz" brings the following goods to the warehouse:

- Cargo category "Vertu phone"
- Quantity: 17 boxes

Wholesaler "Seller" takes from the warehouse:
- Category "Vertu phone"
- Quantity: 10 boxes

After that, the Administrator is authorized in the system and sees the following information:

![image](https://github.com/niten2/test_tasks/blob/master/stock/image.png)

[Back](https://github.com/niten2/test_tasks)
