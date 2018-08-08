// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
selectAll: function(tableName, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName],
    function(err, result){
        if(err){
            throw err;
        } 
        cb(result)           
    });
},

insertOne: function(tableName, columnNames, values, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableName, columnNames, values],
    function(err, result){
        if(err){
            throw err;
        } 
        cb(result)    
    });
},

updateOne: function(tableName, objColVals, condition, cb) {
    var queryString = "UPDATE ?? SET ? WHERE ?";
    console.log(queryString)
    connection.query(queryString, [tableName, objColVals, condition],
    function(err, result){
        if(err){
            throw err;
        } 
        cb(result)    
    });
}

}

//`selectAll()`
// `insertOne()`
//`updateOne()

module.exports = orm;