"use strict";

var Percolator = require("percolator").Percolator;
var dbSession = require("../../src/backend/dbSession.js");
var Server = require("../backend/server").Server;
var server = Server("8080");

var port = 8080;

server.route("/api/keywords", {
  GET: function (req, res) {
    dbSession.fetchAll(
      "SELECT id, value, categoryID FROM keyword ORDER BY id",
      function (err, rows) {
        if (err) {
          console.log(err);
          res.status.internalServerError(err);
        } else {
          res.collection(rows).send();
        }
      }
    );
  },
});

server.listen(function () {
  console.log("Server started and listening on port", server.options.port);
});
