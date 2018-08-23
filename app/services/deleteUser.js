"use strict"
const connection = require('../services/dbConnect');

console.log("service removeUser");

function remove(input) {
    return new Promise(function (resolve, reject) {
        connection.query('DELETE FROM testing WHERE slno=?', input.slno, function (err, results) {
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
    remove: remove
}
