CREATE DATABASE IF NOT EXISTS burger_db;

USE burger_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT, 
    burger_name VARCHAR NOT NULL,
    devoured BOOL FALSE
)