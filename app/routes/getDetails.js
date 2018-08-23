"use strict"
const controllers = require("../controllers")
const Router = require('express').Router();

console.log("router get details");
Router.get('/users', controllers);
module.exports = Router;
