var mysql = require('mysql');
var inquirer = require('inquirer');
var bamazon = require('./bamazon');


// LOGS CONNECTION ID PORTED FROM BAMZON
// console.log(bamazon.id);
// 


// ASKS THE USER WHAT THEY WANT AND HOW MUCH OF IT VIA INQUIRER

function selectItem(){bamazon.items, function(err,results){
    if (err) throw err;
    inquirer
        .prompt([
            {
                name: "choice",
                type: "input",
                choices: function(){
                    var choiceArray = [];
                    for (let i = 0; i < results.length; i++) {
                        choiceArray.push(results[i].product_name);  
                    }
                    return choiceArray;
                },
                message: "Please enter the ID of the product you would you like to buy?"
            },
            {
                name: "bid",
                type: "input",
                message: "How many units of the product would you like to buy?"
            }
        ])
        .then(function(answer){
            var chosenItem;
            for (var i = 0; i < results.length; i++) {
                if (results[i].product_name === answer.choice){
                    chosenItem = results[i];
                }
            }
        })
    }
};
// 