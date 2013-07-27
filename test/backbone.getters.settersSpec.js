/* globals define, describe, it, expect */

define(function (require) {
  "use strict";
  var GSModel = require("../backbone.getters.setters");
  describe("backbone.getters.setters", function () {
    describe("getters", function () {
      var FIRSTNAME = "Mike"
        , FIRSTNAME_ALT = "Alex"
        , LASTNAME = "Johnson"
        , FULLNAME = FIRSTNAME + " " + LASTNAME
        , FULLNAME_ALT = FIRSTNAME_ALT + " " + LASTNAME
        , MyModel = GSModel.extend({
          getters: {
            fullname: function () {
              return this.get("firstname") + " " + this.get("lastname");
            }
          }
        });

      it("should have the custom getters working.", function () {
        var model = new MyModel({ firstname: "Mike", lastname: "Johnson" });
        expect(model.get("fullname")).to.be(FULLNAME);
        model.set("firstname", FIRSTNAME_ALT);
        expect(model.get("fullname")).to.be(FULLNAME_ALT);
      });
    });
  });
});