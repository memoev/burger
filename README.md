# burger
🍔Burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Uses Node and MySQL to query and route data, and Handlebars to generate your HTML.

## Value Proposition :dart:
  
Track your burgers, notes, meetings, reminders and cross them out (Devour them!).
  
## Instructions  
  
- From the landing page you add a new burger on the input field and click `Submit`.
- You are now able to keep track of burgers you want to try and devour them.
  
## Code Overview :deciduous_tree:

The most import piece of code on this repository resides on the models folder:
  
```javascript
const orm = require('../config/orm');

const burger = {
    all: (cb) => {
        orm.selectAll('burgers', (res) => cb(res));
    },
    create: (burgerName, cb) => {
        orm.insertOne('burgers', burgerName, (res) => cb(res));
    },
    update: (condition, cb) => {
        orm.updateOne('burgers', condition, (res) => cb(res));
    }
};

module.exports = burger;
});
```

This application uses the `orm` package to manage CRUD operations to the MySQL database.

## Prerequisites :computer:

* Desktop:
  * Chrome: (Current - 1) and Current
  * Edge: (Current - 1) and Current
  * Firefox: (Current - 1) and Current, ESR
  * Internet Explorer: 9+
  * Safari: (Current - 1) and Current
  * Opera: Current

* Mobile
  * Stock browser on Android 4.0+
  * Safari on iOS 7+

## Deployment :space_invader:

This application has been deployed using [Heroku](https://heroku.com).