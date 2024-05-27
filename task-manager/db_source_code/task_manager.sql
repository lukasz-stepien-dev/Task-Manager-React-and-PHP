CREATE DATABASE task_manager;

CREATE TABLE users (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       first_name VARCHAR(50) NOT NULL,
                       last_name VARCHAR(50) NOT NULL,
                       email VARCHAR(100) NOT NULL UNIQUE,
                       password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
                       id INT AUTO_INCREMENT PRIMARY KEY,
                       title VARCHAR(100) NOT NULL,
                       description TEXT,
                       creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       due_date DATE,
                       status ENUM('pending', 'completed') DEFAULT 'pending',
                       user_id INT,
                       FOREIGN KEY (user_id) REFERENCES users(id)
);
