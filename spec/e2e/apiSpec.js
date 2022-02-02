"use strict";
var request = require("request");

describe("The API", function () {
  it("should respond to a GET request at /api/keywords/", function (done) {
    var expected = {
      _items: [
        { id: 1, value: "Aubergine", catergoryID: 1 },
        { id: 2, value: "Onion", catergoryID: 1 },
        { id: 3, value: "Knife", catergoryID: 2 },
      ],
    };

    request.get(
      {
        url: "http://localhost:8080/api/keywords/",
        json: true,
      },
      function (err, res, body) {
        expect(res.statusCode).toBe(200);
        expect(body.foo).toEqual(expected);
        done();
      }
    );
  });
});
