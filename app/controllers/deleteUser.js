"use strict"
const detailsService = require('../services/deleteUser');

console.log("controller delete User");
module.exports = (req, res) => {
    console.log(" inside controller delete User");
    // const input = req.body;
    const input = req.query;
    console.log(req.query);
    detailsService.remove(input).then((data) => {
        res.send(data);
    }).catch();
};