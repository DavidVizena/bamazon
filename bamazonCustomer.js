var mysql = require('mysql');
var inquirer = require('inquirer');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    connection.query("SELECT * FROM products", function (err, result) {
        if (err) throw err;
        selectItem(result);
    })
});


function selectItem(result) {
    console.log(result);
    inquirer.prompt([
        {
            name: "product",
            type: "input",
            message: "What is the id of the item you would like to buy?"
            },
        {
            name: "quantity",
            type: "input",
            message: "How many units would you like to buy?"
        }
    ])
        .then(function (answer) {
            var id = answer.product;
            var howMany = answer.quantity;
            var chosenItem;
            console.log(id);
            console.log(howMany);

            connection.query(`SELECT * FROM products WHERE item_id = ${id}`, function (err, result) {
                console.log(result);
                console.log(result.item_id);
                console.log(result.product_name);
                console.log(result.department_name);
                console.log(result.price);
                console.log(result.stock_quantity);
            });
        })
    
};
