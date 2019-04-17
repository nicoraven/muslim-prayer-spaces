DROP TABLE users;
DROP TABLE dogs;
DROP TABLE users_dogs;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT
);
CREATE TABLE dogs(
    id SERIAL PRIMARY KEY,
    name TEXT
);
CREATE TABLE users_dogs(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    dog_id INTEGER
);

INSERT INTO users (username, password) VALUES ('testuser', 'testpassword');
INSERT INTO users (username, password) VALUES ('testuser2', 'testpassword2');
INSERT INTO dogs (name) VALUES ('fido');
INSERT INTO dogs (name) VALUES ('max');
INSERT INTO users_dogs (user_id, dog_id) VALUES (1,1);
INSERT INTO users_dogs (user_id, dog_id) VALUES (2,2);