/// <reference path="../types/globalTypes.d.ts" />
"use strict";
module.exports = function (sails) {

  if (process.env.DEV === "TRUE") {
    module = require("./src/initialize");
  } else {
    module = require("./dist/module");
  }

  return {
    defaults: require("./defaults"),
    initialize: function initialize(cb) {
      module.default(sails, cb);
    },
    /**
     * Module manager has support method for start and stop module
     */
    // start: function(){
    //   // TODO: Implement start 
    // }
    // stop: function(){
    //   // TODO: Implement stop 
    // }
  };
};
