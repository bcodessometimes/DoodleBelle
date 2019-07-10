-- Drops the "doodlebell_db" if it exists currently --
DROP DATABASE IF EXISTS doodlebell_db;
-- Creates the "doodlebell_db" database --
CREATE DATABASE doodlebell_db;

-- Makes it so all of the following code will affect doodlebell_db --
USE doodlebell_db;

-- Creates the table "products" within doodlebell_db --
CREATE TABLE products
(
    -- Makes a string column called "item_id" which cannot contain null and is a unique id for each product --
    item_id INTEGER PRIMARY KEY ID
(50) AUTO_INCREMENT NOT NULL,
    -- Makes a string column called "product_name" with the name of each product --
    product_name VARCHAR
(30) NULL,
    -- Makes a sting column called "department_name" --
    dogbreed_name VARCHAR
(30) NULL,
    -- Makes an numeric column called "price" which is the cost of each product to the customer --
    price INTEGER
(10) NULL,
    -- Makes a numeric column called "stock_quantity" which is how much of the product is available to stores --
    stock_quantity INTEGER
(10) NULL,
    PRIMARY KEY
(item_id)
);
