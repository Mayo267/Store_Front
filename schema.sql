DROP DATABASE IF EXISTS storefront_db;
CREATE DATABASE storefront_db;

USE storefront_db;

CREATE TABLE items (
	id INTEGER,
	title VARCHAR(250),
    price INTEGER(250),
    descript VARCHAR(250),
    inventory INTEGER(250),
    image LONGBLOB
);
