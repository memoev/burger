const conn = require("./connection");

const orm = {
    selectAll: (tableInput, cb) => {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: (tableName, burgerName, cb) => {
        const queryString = "INSERT INTO " + tableName;
        queryString += " (burger_name) ";
        queryString += "VALUES ('" + burgerName + "');"

        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: (tableName, condition, cb) => {
        const queryString = "UPDATE " + tableName;
        queryString += " SET devoured = true";
        queryString += " WHERE " + condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

        cb(result);
        });
    }
};

module.exports = orm;