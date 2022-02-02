"use strict";
var request = require("request");
const resetDatabase = require("../resetDatabase");

describe("The API", function () {
  it("should respond to a GET request at /api/keywords/", function (done) {
    var expected = {
      _items: [
        { id: 1, value: "Aubergine", catergoryID: 1 },
        { id: 2, value: "Onion", catergoryID: 1 },
        { id: 3, value: "Knife", catergoryID: 2 },
      ],
    };

    async.series(
      [
        function (callback) {
          resetDatabase(dbSession, callback);
        },

        function (callback) {
          dbSession.insert(
            "keyword",
            { value: "Aubergine", categoryID: 1 },
            function (err) {
              callback(err);
            }
          );
        },

        function (callback) {
          dbSession.insert("keyword", { value: "Onion", categoryID: 1 }),
            function (err) {
              callback(err);
            };
        },

        function (callback) {
          dbSession.insert(
            "keyword",
            { value: "Knife", categoryID: 2 },
            function (err) {
              callback(err);
            }
          );
        },
      ],
      // callback
      function (err, results) {
        request.get(
          {
            url: "http://localhost:8080/api/keywords/",
            json: true,
          },
          function (err, ress, body) {
            expect(res.statusCode).toBe(200);
            expect(body.foo).toEqual(expected);
            done();
          }
        );
      }
    );
  });
});
