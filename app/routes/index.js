"use strict"
const getDetails = require('./getDetails');
const createUser = require('./createUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');


module.exports = (app) => {
    console.log("router index");
    app.get('/', function (req, res) {
        const data = {
            message: "Database Connected Successfully"
        }
        res.send(data);
    });
    app.get('/users', getDetails);
    app.post('/users', createUser);
    app.put('/users', updateUser);
    app.delete('/users', deleteUser);

};
