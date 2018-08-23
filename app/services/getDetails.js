"use strict"
"use strict"
const connection = require('../services/dbConnect');

console.log("service display details");

function display() {
    return new Promise(function (resolve, reject) {
        connection.query('SELECT * FROM testing', function (err, results) {
            if (err) {
                return
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
    display: display
}
