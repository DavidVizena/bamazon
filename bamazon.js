var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_DB"
})


module.exports = {
items: connection.connect(function(err){
    if (err) throw err;
    connection.query("SELECT * FROM products", function(err, result, fields){
        if (err) throw err;
        console.log(result);
    })
})
};