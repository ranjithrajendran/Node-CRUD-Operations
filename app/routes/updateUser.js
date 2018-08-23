"use strict"
const controllers = require("../controllers")
const Router = require('express').Router();

console.log("router update user");
Router.put('/users', controllers);
module.exports = Router;
