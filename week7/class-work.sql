CREATE TABLE products (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 )  NOT NULL,
	price integer NOT NULL
);

DROP TABLE products;


CREATE TABLE products (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 )  NOT NULL,
	price integer NOT NULL
);

INSERT INTO 
    products (price, name)
VALUES
    (700, 'iPad'),
    (800,'iPhone'),
    (600,'iWatch'),
    (900,'iCar');

SELECT * FROM products;

delete from products WHERE id = 4;

-- delete from products
-- truncate table products

-- What is the difference ? if we use delete the table space in a disc will remain the same so its bad for the optimization;
-- if we use truncate it delets data from the disc; 

-- foriegn key

CREATE TABLE products_desc (
	id serial PRIMARY KEY,
	description VARCHAR (500),
	product_id integer,
	CONSTRAINT fk_products
		FOREIGN KEY (product_id)
			REFERENCES products(id)
				ON DELETE SET NULL
);

SELECT * FROM products;

SELECT * FROM products_desc;

INSERT INTO 
    products_desc (description, product_id)
VALUES
	('Amazing iPad' ,13),	
	('Great iPhone' ,14),
	('Best iWatch' ,15),
	('Fastest car ever iCar' ,16);

ALTER TABLE products_desc 
DROP CONSTRAINT fk_products

ALTER TABLE products_desc ADD CONSTRAINT fk_products
	FOREIGN KEY (product_id)
		REFERENCES products(ID)
		ON DELETE CASCADE;

DELETE FROM products WHERE id = 15;

-- table relations
-- ONE to ONE
-- ONE to MANY
-- MANY to MANY

create table users (
	user_id SERIAL PRIMARY KEY,
	email VARCHAR(100) UNIQUE NOT NULL,
	password VARCHAR(100) NOT NULL
)

SELECT * FROM users;

create table users_info (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	address VARCHAR(255),
	user_email VARCHAR(100) UNIQUE NOT NULL REFERENCES users(email)
);

INSERT INTO users (email, password)
VALUES 
('aaa@ddd.dd', '12345678'),
('dasda@ddd.aa', '351762'),
('fsdfsda@ddd.cc', '312456')

SELECT * FROM users_info;


INSERT INTO users_info (first_name, last_name, address, user_email)
VALUES 
('Jhon', 'Smith', 'Israel', 'aaa@ddd.dd')

SELECT users.email, users_info.first_name, users_info.last_name, users_info.address
FROM users
INNER JOIN users_info
on users.email = users_info.user_email

-- ONE TO MANY 

CREATE TABLE author (
	author_id SERIAL PRIMARY KEY,
	author_name VARCHAR(50) NOT NULL,
	author_email VARCHAR(50) UNIQUE NOT NULL
)

CREATE TABLE article (
	article_id SERIAL PRIMARY KEY,
	title VARCHAR(50) NOT NULL,
	body VARCHAR(500) NOT NULL,
	author_email VARCHAR(50) NOT NULL
)

INSERT INTO author (author_name, author_email)
VALUES 
('AAA', 'aa@gmail.com'),
('BBB', 'bb@gmail.com'),
('CCC', 'cc@gmail.com'),
('DDD', 'dd@gmail.com')

INSERT INTO article (title, body, author_email)
VALUES 
('aaaaa', 'asdasdasdasdasdasd','cc@gmail.co'),
('asdasd', 'gadfgvsgdfa','cc@gmail.co'),
('dasdasd', 'asdgf','cc@gmail.co'),
('fsdfsd', 'asgasdgfaasdf','cc@gmail.co')


SELECT * FROM author;
SELECT * FROM article;

-- MANY TO MANY 
CREATE TABLE students (
	student_id SERIAL PRIMARY KEY,
	student_name VARCHAR(100) NOT NULL
)

INSERT INTO students (student_name)
VALUES
('Jhon'),
('Ann'),
('Dan'),
('Carl')

CREATE TABLE courses (
	course_id SERIAL PRIMARY KEY,
	course_name VARCHAR(100) NOT NULL
)

INSERT INTO courses (course_name)
VALUES 
('JAVA'),
('C++'),
('React'),
('Node.js'),
('JavaScript'),
('SQL')

SELECT * FROM students;
SELECT * from courses;

CREATE TABLE student_to_course (
	student_id INT NOT NULL REFERENCES students(student_id), 
	course_id INT NOT NULL REFERENCES courses(course_id) 
)

INSERT INTO student_to_course (student_id, course_id)
VALUES 
	(1, 4),(1,2),(1,6),
	(2, 1),(2,4),(2,5),
	(3, 1),(3,4),(3,6),
	(4, 2),(4,1),(4,3),(4,6)

SELECT * FROM student_to_course;

SELECT students.student_name, courses.course_name
	FROM students
	INNER JOIN student_to_course
	ON students.student_id = student_to_course.student_id
	INNER JOIN courses
	ON courses.course_id = student_to_course.course_id