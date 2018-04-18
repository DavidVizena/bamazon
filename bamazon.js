var mysql = require('mysql');
var inquirer = require('inquirer');
var array = [];

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_DB"
});

 connection.connect(function(err){
    if (err) throw err;
    connection.query("SELECT * FROM products", function(err, result){
        if (err) throw err;
        array = result;
    })
 });
module.exports = {
    products: array
};
