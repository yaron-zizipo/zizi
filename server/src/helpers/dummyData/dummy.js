const express = require('express');
const router = express.Router();
const md5 = require('md5');

const { Category } = require('../../models');
const { Vendor } = require('../../models');
const { faker } = require('@faker-js/faker');

router.get('/dummy/vendor', (req, res) => {
    const vendors = [
        {
            name: 'Banana Beach',
            email: 'demo@demo.com',
            password: md5('demo'),
            phone: '+972501234567',
            address: 'Tel aviv',
            latitude: '32.0703409',
            longitude: '34.7634925',
            status: '1',
        }
    ];

    Vendor.bulkCreate(vendors).then(() => console.log("Vendors data have been saved"));
    res.send({ message: "Categories Added", data: vendors });
});


router.get('/dummy/category', (req, res) => {

    /*
    const cats = [...Array(5)].map(() => (
        {
            name: faker.internet.userName(),
            image: faker.image.cats(),
        }
    ));
    */

    const cats = [
        {
            name: 'מבצעים',
            image: '/images/cat_1.png'
        },
        {
            name: 'גלידות',
            image: '/images/cat_2.png'
        },
        {
            name: 'משקאות',
            image: '/images/cat_3.png'
        },
        {
            name: 'ילדודס',
            image: '/images/cat_4.png'
        },
        {
            name: 'אהבתי',
            image: '/images/cat_5.png'
        },
        {
            name: 'פארם',
            image: '/images/cat_6.png'
        }
    ];

    Category.bulkCreate(cats).then(() => console.log("Users data have been saved"));
    res.send({ message: "Categories Added", data: cats });
});

module.exports = router;