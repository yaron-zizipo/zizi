require('dotenv').config();

module.exports = {
    development: {
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_DATABAS,
        host: process.env.DEV_DB_HOST,
        dialect: "mysql"
    },
    production: {
        username: process.env.DEV_DB_USERNAME,
        password: process.env.DEV_DB_PASSWORD,
        database: process.env.DEV_DB_DATABAS,
        host: process.env.DEV_DB_HOST,
        dialect: "mysql"
    }
};