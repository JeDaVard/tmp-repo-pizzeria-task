Backend
=======

Prerequisites
-------------

* [Git](http://git-scm.com/)
* [MySQL](https://www.mysql.com/)

Option one
* [nodejs](https://nodejs.org/en/)
* nodejs framework of your choice

* You can use any additional libraries you want.

Project description
-------------------

**Pizzeria**

This application serves the purpose of exposing a JSON API to be consumed by a frontend client for ordering pizza.

The following entities should be created (including proper relations):

* *pizza* - has a name and price (e.g. Margherita $5, Pepperoni $6, ...)
* *order* - has items
* *order item* - has a pizza and quantity

The following endpoints should return a JSON response:
* `/api/orders` (list of orders)
* `/api/orders/:id` (details of an individual order)
* `/api/pizzas` (list of pizzas; see './backend/example-pizzas.json')
* Write test cases

## Installation

```bash
$ npm install
```

## Running the app

```bash
# local MySQL
$ docker run --name pizzeria-mysql -e MYSQL_ROOT_PASSWORD=mysql_password -e MYSQL_DATABASE=pizzeria -e MYSQL_USER=pizzeria -e MYSQL_PASSWORD=mysql_password -p 3306:3306 mysql:latest
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
