/* globals requirejs, require, mocha */

(function () {
  "use strict";

  requirejs.config({
    paths: {
        "backbone": "../bower_components/backbone-amd/backbone"
      , "underscore": "../bower_components/lodash/lodash"
      , "jquery": "../bower_components/jquery/jquery"
    }
  });

  mocha.setup("bdd");

  require(["backbone.getters.settersSpec"], function () {
    mocha.run();
  });
})();