const detailsService = require('../services/updateUser');

console.log("controller update User");
module.exports = (req, res) => {
    // const input = req.body;
    const input = req.query;
    console.log(req.query);
    detailsService.update(input).then((data) => {
        res.send(data);
    }).catch();
};