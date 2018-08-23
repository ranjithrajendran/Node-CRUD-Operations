"use strict"
const detailsService = require('../services/getDetails')

console.log("controller get details");
module.exports = function (req, res) {
    console.log("inside controller get details");
    detailsService.display().then((data) => {
        res.send(data);
    }).catch();
}