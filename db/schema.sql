DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INTEGER AUTO_INCREMENT,
  burger_name VARCHAR(45),
  devoured BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);
