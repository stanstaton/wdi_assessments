## NAME: ____________________ &nbsp; &nbsp; &nbsp; &nbsp; _______ of 10

### SQL Relationships

You're building an online store and need to track customer orders. You know orders and customers are related, and you will need to be able to track which customer an order belongs to. You can assume your table schemas look like this:

#### Customers

| Column Name | Data Type |
| ----------- | --------- |
| id | integer |
| createdAt | date |
| updatedAt | date |
| name | string |
| address | string |
| city | string |
| state | string |
| zip | string |

#### Orders

| Column Name | Data Type |
| ----------- | --------- |
| id | integer |
| createdAt | date |
| updatedAt | date |
| total | numeric |
| customerId | integer |

<br><br>

1. What kind of relationship do Customers and Orders have? (1 point)

* a) One-to-one (1:1)
* b) One-to-Many (1:M)
* c) Many-to-Many (N:M)
* d) They are related only by a union
* e) None; they are separate tables

<br><br>

2. What is true about the `customerId` field in the `Orders` table? (1 point)

* a) It is a primary key
* b) It is a foreign key
* c) It is an floating point value
* d) It is always null
* e) It must be the last column in the table

<br><br>

3. What is true about the `id` field in the `Customers` table? (1 point)

* a) It is a primary key
* b) It is a foreign key
* c) It is an floating point value
* d) It is always null
* e) It must be the first column in the table

<br><br>

4. Foreign keys.... (1 point)

* a) Can't be accessed directly
* b) Are always strings
* c) Correspond to a primary key of another table
* d) Are assigned the value '1' by default
* e) Can only be used in Canada

<br><br>

5. Consider the following SQL statement:
`SELECT 
    c.name,
    c.address,
    CONCAT(c.city, ', ', c.state, ' ', c.zip)
FROM Customers c
JOIN Orders o
    ON c.id = o.customerId`
