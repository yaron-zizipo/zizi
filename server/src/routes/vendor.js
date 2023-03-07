const express = require('express');
const router = express.Router();
const { Vendor } = require('../models');

router.get('/vendors', (req, res) => {
    Vendor.findAll({
        where: {}
    }).then((vendors) => {
        res.send({ data: vendors });
    }).catch((err) => {
        res.send({ error: err });
    });
});

router.get('/vendor/:id', (req, res) => {
    const vendorsID = req.params.id;

    Vendor.findAll({
        where: {
            id: categoryID
        }
    }).then((vendors) => {
        res.send({ data: vendors });
    }).catch((err) => {
        res.send({ error: err });
    });
});

module.exports = router;