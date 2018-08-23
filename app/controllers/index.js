"use strict"
const getDetails = require('./getDetails');
const createUser = require('./createUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');
const Router = require('express').Router();

console.log("controller");
Router.get('/users', getDetails);
Router.post('/users', createUser);
Router.put('/users', updateUser);
Router.delete('/users', deleteUser);
module.exports = Router;
