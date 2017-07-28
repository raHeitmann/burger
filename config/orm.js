var connection = require("./connection.js")

var orm = {
    selectAll: function(tableName){
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, tableName, function(err, result){
            console.log(result);
        });
    },

    insertOne: function(tableName, burgerName){
        var queryString = "INSERT INTO ?? (burger_name) VALUES (?)";
        connection.query(queryString, [tableName, burgerName], function(err, result){
            console.log(result);
        });
    },

    updateOne: function(tableName, burgerName, devoured){
        var queryString = "UPDATE ?? SET devoured = ? WHERE burger_name = ?";
        connection.query(queryString, [tableName, devoured, burgerName], function(err, result){
            console.log(result);
        });
    }
};

module.exports = orm;