const express = require("express");
const router = require("../config/routes");

const app = express();

app.use(express.json());

app.use(router);

module.exports = app;