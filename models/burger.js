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