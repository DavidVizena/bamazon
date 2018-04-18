var mysql = require('mysql');
var inquirer = require('inquirer');


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
        findItem(result);
    })
 });


function findItem(results) {
    console.log(results);
    inquirer.prompt([
        {
            name: "product",
            type: "input",
            choices: function () {
                var choiceArray = [];
                for (let i = 0; i < results.length; i++) {
                    choiceArray.push(results[i].product_name);
                }
                return choiceArray;
            },
            message: "what is the id of the item you would like to buy?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many units would you like to buy?"
        }
    ])
        .then(function (answer) {
            var chosenItem;
            for (var i = 0; i < results.length; i++) {
                if (results[i].product_name === answer.product_name) {
                    chosenItem = results[i];
                    console.log(chosenItem);
                }
            }
        })
};
