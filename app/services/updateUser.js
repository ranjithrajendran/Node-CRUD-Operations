"use strict"
const connection = require('../services/dbConnect');

console.log("service updateUser");

function update(input) {
    return new Promise(function (resolve, reject) {
        connection.query('UPDATE testing SET name=? where slno=?', [input.name, input.slno], function (err, results) {
            if (err) {
                return;
            }
            const data = results;
            if(data){
            resolve(data);
            }
            else{
                reject()
            }
        });
    });
}
module.exports = {
    update: update
}
