const orm = require ("../config/orm")

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.create("burgers", ["burger_name", "devoured"], [name, false], function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {devoured: true}, condition, function(res) {
      cb(res);
    });
  },
};

module.exports = burger;
