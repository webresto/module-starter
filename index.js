"use strict";
module.exports = function (sails) {
  let module = require("./dist/module");
  return {
    defaults: require("./defaults"),
    initialize: function initialize(cb) {
      module.default(sails, cb);
    },
  };
};
