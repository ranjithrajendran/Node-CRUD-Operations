"use strict"
const controllers = require("../controllers")
const Router = require('express').Router();

console.log("router create user");
Router.post('/users', controllers);
module.exports = Router;