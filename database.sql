CREATE DATABASE IF NOT EXISTS machine_test_db;
USE machine_test_db;

CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    category_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

INSERT INTO categories (name, description) VALUES
('Electronics', 'Electronic devices and gadgets'),
('Clothing', 'Apparel and fashion items'),
('Books', 'Books and publications'),
('Home & Kitchen', 'Home appliances and kitchen items'),
('Sports', 'Sports equipment and accessories');

INSERT INTO products (name, description, price, category_id) VALUES
('Laptop', 'High-performance laptop', 999.99, 1),
('Smartphone', 'Latest smartphone model', 699.99, 1),
('T-Shirt', 'Cotton t-shirt', 19.99, 2),
('Jeans', 'Denim jeans', 49.99, 2),
('Novel', 'Bestselling fiction novel', 14.99, 3),
('Cookbook', 'Delicious recipes', 24.99, 3),
('Blender', 'Kitchen blender', 79.99, 4),
('Coffee Maker', 'Automatic coffee maker', 129.99, 4),
('Tennis Racket', 'Professional tennis racket', 149.99, 5),
('Football', 'Official size football', 29.99, 5),
('Headphones', 'Wireless headphones', 199.99, 1),
('Smartwatch', 'Fitness smartwatch', 299.99, 1),
('Jacket', 'Winter jacket', 89.99, 2),
('Sneakers', 'Running sneakers', 79.99, 2),
('Textbook', 'Educational textbook', 59.99, 3);