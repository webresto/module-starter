"use strict";
module.exports = function (sails) {

  if (process.env.DEV === "T1RUE") {
    module = require("./src/initialize");
  } else {
    module = require("./dist/module");
  }

  return {
    defaults: require("./defaults"),
    initialize: function initialize(cb) {
      module.default(sails, cb);
    },
  };
};
