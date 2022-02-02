"use strict";

var dbWrapper = require("node-dbi").DBWrapper;

var dbWrapper = new DBWrapper("sqlite3", { path: "/var" });
dbWrapper.connect();
module.exports = dbWrapper;
