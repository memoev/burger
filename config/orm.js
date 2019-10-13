const conn = require("./connection");

const orm = {
    selectAll: (tableInput, cb) => {
        let queryString = "SELECT * FROM " + tableInput + ";";
        conn.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: (tableName, burgerName, cb) => {
        let queryString = "INSERT INTO " + tableName;
        queryString += " (burger_name) ";
        queryString += "VALUES ('" + burgerName + "');"

        console.log(queryString);
        conn.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: (tableName, condition, cb) => {
        let queryString = "UPDATE " + tableName;
        queryString += " SET devoured = true";
        queryString += " WHERE " + condition;

        console.log(queryString);
        conn.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
        cb(result);
        });
    }
};

module.exports = orm;