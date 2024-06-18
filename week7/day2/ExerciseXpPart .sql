SELECT * FROM items;

-- All items, ordered by price (lowest to highest).
SELECT * FROM items ORDER BY item_price;
-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT * FROM items WHERE item_price >= 80 ORDER BY item_price DESC;
-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT customer_name, customer_surname FROM customers ORDER BY customer_name ASC LIMIT 3;
-- All last names (no other columns!), in reverse alphabetical order (Z-A)

SELECT customer_surname FROM customers ORDER BY customer_surname DESC;