require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
//const mysql = require('mysql2');
const db = require('./models');
//const { User } = require('./models');
const jwt = require('jsonwebtoken');
//const { AuthenticateToken } = require('./helpers/AuthenticateToken');

const insertDummyCategoryRouts = require('./helpers/dummyData/dummy');
const categoryRouts = require('./routes/category');
const vendorRouts = require('./routes/vendor');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/images', express.static('images'));

db.sequelize.sync().then((req) => {
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Srver is listening on port ${process.env.SERVER_PORT}`);
    });
});

app.use(categoryRouts);
app.use(vendorRouts);

// add insert dummy data routs for dev ENV only
if (process.env.NODE_ENV === 'development') {
    app.use(insertDummyCategoryRouts);
}

app.post('/login', (req, res) => {
    // Authentication
    const username = req.body.username;
    const user = { name: username };

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

    res.json({
        accessToken: accessToken
    });
});


/*

app.get("/insert", (req, res) => {

    User.create({
        firstName: "Roni",
        age: 14
    }).catch((err) => {
        if (err) {
            res.send({ message: "error" });
        }
    });

    res.send({ message: "User Added" });
});

app.get("/select", AuthenticateToken, (req, res) => {
    User.findAll({
        where: {}
    }).then((users) => {
        res.send({ data: users });
    }).catch((err) => {
        res.send({ error: err });
    });
});

app.get("/clients", (req, res) => {
    res.send({
        id: 1,
        name: 'Avi'
    });
});

app.get("/delete", (req, res) => {

    User.destroy({
        where: {
            id: 2
        }
    }).catch((err) => {
        if (err) {
            res.send({
                message: "error"
            });
        }
    });

    res.send({
        message: "User Deleted",
        data: process.env.DB_USERNAME
    });
});

app.get('/getData', async (req, res) => {
    // Connect to MySQL database
    const connection = await mysql.createConnection({
        host: 'db',
        user: 'myuser',
        password: 'mypassword',
        database: 'mydb'
    });

    // Execute MySQL query
    const [rows, fields] = await connection.execute('SELECT * FROM Persons');

    // Send JSON response with query results
    res.json(rows);
});
*/
