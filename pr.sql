DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    USERNAME TEXT NOT NULL, 
    name TEXT,
    surname TEXT,
    email TEXT UNIQUE NOT NULL,
    activites TEXT,
    birth DATE,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (USERNAME, name, surname, email, activites, birth) VALUES
('jdoe', 'John', 'Doe', 'jdoe@example.com', '1.json', '1990-01-01'), 
('asmith', 'Alice', 'Smith', 'asmith@example.com', '2.json', '1985-05-15'), 
('bwhite', 'Bob', 'White', 'bwhite@example.com', '3.json', '1988-12-10'),
('cgreen', 'Charlie', 'Green', 'cgreen@example.com', '4.json', '1992-08-20');
