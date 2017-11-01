var orm = require("../config/orm.js");

var sweets = {
  all: function(cb) {
    orm.all("sweets", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("sweets", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("sweets", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

module.exports = sweets;
