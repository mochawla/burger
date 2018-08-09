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
    //var queryString = "UPDATE ?? SET ?? WHERE ?";
    const queryString = `UPDATE ${tableName} SET devoured = ${objColVals.devoured} WHERE ${condition}`
    console.log(queryString)
    console.log(tableName);
    console.log(objColVals);
    console.log(condition);
    //connection.query(queryString, [tableName, objColVals, condition],
    connection.query(queryString,
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