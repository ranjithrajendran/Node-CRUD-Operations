"use strict"
const connection = require('../services/dbConnect');

console.log("service createUser");
function create(input) {
    return new Promise(function (resolve, reject) {
        connection.query('INSERT INTO testing SET ?', input, function (err, results) {
            if (err) {
                return;
            }
            const data = results;
            if (data) {
                resolve(data);
            } else {
                reject()
            }
        });
    });
}
module.exports = {
    create: create
}
