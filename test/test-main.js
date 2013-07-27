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

  require(["backbone.getters.settersSpec"], function () {
    if (window.mochaPhantomJS) { mochaPhantomJS.run(); }
    else { mocha.run(); }
  });
})();