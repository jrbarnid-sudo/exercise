"use strict";

var express = require("express");

var app = express();
app.get("/hey", function (req, res) {
  return res.send("ho!");
});
app.listen(8080);