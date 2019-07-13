// require('dotenv').config({path: __dirname + '/.env'}); // this is important!

module.exports = {
"development": {
    "username": process.env.DB_USERNAME || "root",
    "password": process.env.DB_PASSWORD || "Amelia309",
    "database": process.env.DB_DATABASE || "storefront_db",
    "host": process.env.DB_HOST || "localhost",
    "dialect": "mysql"
},
"test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
"production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
}
};