const mysql = require('mysql2');

var db = mysql.createPool({
    "user": "root",
    "password": "Vinicius001",
    "database": "bd_tasks",
    "host": "localhost",
    "port": 3306
});


exports.pool = db;