const orm = require ("../config/orm")

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, cb) {
    orm.create("burgers", "burger_name", cols, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.update("burgers", id, function(res) {
      cb(res);
    });
  },
};

module.exports = burger;
