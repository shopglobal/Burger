DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE sweets
(
	id int NOT NULL AUTO_INCREMENT,
	sweets_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

SELECT * from sweets;

INSERT INTO sweets (sweets_name) VALUES ('Baked Apple Pie');
INSERT INTO sweets (sweets_name) VALUES ('Hot Fudge Brownie');
INSERT INTO sweets (sweets_name, devoured) VALUES ('Ice Cream Sundae', true);