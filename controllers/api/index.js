const express     = require("express");
const v1Router    = require("./v1");

const api         = express.Router();

api.use("/v1", v1Router);

module.exports = api;
