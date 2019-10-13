var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger");


router.get("/", (req, res) => {
    burger.all(data => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/add", (req, res) => {
    burger.create(req.body.burger_name, () => {
        res.sendStatus(200);
    });
});

router.post("/consume/:id", (req, res) => {
    const condition = "id = " + req.params.id;

    console.log(condition);

    burger.update(condition, () => {
        if (res.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
    
});

module.exports = router;