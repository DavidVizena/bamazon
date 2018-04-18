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

            connection.query(`SELECT * FROM products WHERE item_id = ${id}`, function (err, result) {
                // console.log(result);
                // console.log(result[0].item_id);
                // console.log(result[0].product_name);
                // console.log(result[0].department_name);
                // console.log(result[0].price);
                // console.log(result[0].stock_quantity);
                if (result[0].stock_quantity >= howMany) {
                    result[0].stock_quantity -= howMany;
                    console.log(`The new avaliable stock is ${result[0].stock_quantity}`);
                }
                else console.log(`I'm sorry, there are only ${id} units avaliable`);
            });
        })
};
