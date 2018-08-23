"use strict"
const detailsService = require('../services/createUser');

console.log("controller create User");
module.exports = (req, res) => {
    // const input = req.body;
    const input = req.query;
    console.log(req.query);
    detailsService.create(input).then(function (data) {
        res.send(data);
    }).catch();
};
