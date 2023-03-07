const express = require('express');
const router = express.Router();
const { Category } = require('../models');

router.get('/categories', (req, res) => {
    Category.findAll({
        where: {}
    }).then((categories) => {
        res.send({ data: categories });
    }).catch((err) => {
        res.send({ error: err });
    });
});

router.get('/category/:id', (req, res) => {
    const categoryID = req.params.id;

    Category.findAll({
        where: {
            id: categoryID
        }
    }).then((categories) => {
        res.send({ data: categories });
    }).catch((err) => {
        res.send({ error: err });
    });
});

/*
router.post('/categories', (req, res) => {
    const categoryID = req.params.id;

    Category.create({
        name: 'מבצעים',
        image: '/images/cat_1.png'
    }).then((categories) => {
        res.send({ data: categories });
    }).catch((err) => {
        res.send({ error: err });
    });
});
*/

/*
User.create({
    firstName: "Roni",
    age: 14
}).catch((err) => {
    if (err) {
        res.send({ message: "error" });
    }
});

res.send({ message: "User Added" });
*/

module.exports = router;