"use strict"
const mysql = require("mysql")

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'qburst',
	database: 'test'
});
module.exports = connection;
