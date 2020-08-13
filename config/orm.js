var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];
  
  for (var key in ob) {
    var value = ob[key];
    
    if (Object.hasOwnProperty.call(ob, key)) {

      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
    
    
      arr.push(key + "=" + value);
    }
  }
  
  return arr.toString();
}

var burger = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    
    connection.query("insert into ??(??)values(?)", [table, cols, vals], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  update: function(table,id, cb) {
      
    connection.query("update ?? set ??=? where ??=?",[table,"devoured",true,"id",id], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = burger;