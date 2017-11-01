const Sequelize = require('sequelize');

let options = {
 "host": "localhost",
 "dialect": "mysql",
 "pool": {
   "min": 3,
   "max": 10,
   "idle": 10000
 }
};

let db = new Sequelize("example", "example", "example", options);

module.exports = db;

