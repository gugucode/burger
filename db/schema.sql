DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT,
	burger_name VARCHAR(64) NOT NULL,
	devoured BOOLEAN DEFAULT FALSE,
	PRIMARY KEY (id)
)

