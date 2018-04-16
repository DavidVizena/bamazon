DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products
    (product_name, department_name, price, stock_quantity)
VALUES
    ("MagicEraser", "cleaning", 4.00, 7),
    ("Wheel", "automotive", 250.00, 4),
    ("Microphone", "entertainment", 150.50, 9),
    ("Headphones", "entertainment", 124.99, 6),
    ("Mouse", "entertainment", 115.00, 2),
    ("Headphones", "entertainment", 74.56, 11),
    ("Bike", "excersise", 82.00, 4),
    ("Running Shoes", "apparel", 14.37, 16),
    ("Shirt", "apparel", 11.24, 7);

    
