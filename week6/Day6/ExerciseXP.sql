-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en_US.UTF-8'
--     LC_CTYPE = 'en_US.UTF-8'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE items (
--     item_id SERIAL PRIMARY KEY,
--     item_name VARCHAR(255),
--     item_price INT
-- );

-- CREATE TABLE customers (
--     customer_id SERIAL PRIMARY KEY,
--     customer_name VARCHAR(255),
--     customer_surname VARCHAR(255)
-- );

-- INSERT INTO items (item_name, item_price)
-- VALUES 
-- 	('Small Desk', 100),
-- 	('Large desk', 300),
-- 	('Fan', 80);

-- INSERT INTO customers (customer_name, customer_surname)
-- VALUES 
-- 	('Greg', 'Jones'),
-- 	('Sandra', 'Jones'),
-- 	('Scott', 'Scott'),
-- 	('Trevor', 'Green'),
-- 	('Melanie', 'Johnson');

-- SELECT * FROM customers;
-- SELECT * FROM items;

-- SELECT item_name FROM items WHERE item_price > 80;

-- SELECT item_name FROM items WHERE item_price <= 300;

-- SELECT customer_name FROM customers WHERE customer_surname = 'Smith';

-- SELECT customer_name FROM customers WHERE customer_surname = 'Jones';

-- SELECT customer_name FROM customers WHERE customer_name != 'Scott';