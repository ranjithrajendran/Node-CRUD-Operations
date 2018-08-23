"use strict"
const controllers = require("../controllers")
const Router = require('express').Router();

console.log("router delete user");
Router.delete('/users', controllers);
module.exports = Router;
