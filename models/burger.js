// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(columnNames, values, cb) {
      orm.insertOne("burgers", columnNames, values, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        console.log(objColVals);
        cb(res);
      });
    }
  };



// Export the database functions for the controller.
module.exports = burger;
