const db = require('../config/database');

class Product {
    static async findAll(page = 1, pageSize = 10) {
        const offset = (page - 1) * pageSize;
        
        const [rows] = await db.query(
            `SELECT p.id as ProductId, p.name as ProductName, p.description, p.price,
                    c.id as CategoryId, c.name as CategoryName
             FROM products p
             INNER JOIN categories c ON p.category_id = c.id
             ORDER BY p.id DESC
             LIMIT ? OFFSET ?`,
            [pageSize, offset]
        );
        
        const [countResult] = await db.query('SELECT COUNT(*) as total FROM products');
        const total = countResult[0].total;
        
        return {
            products: rows,
            pagination: {
                currentPage: page,
                pageSize: pageSize,
                totalRecords: total,
                totalPages: Math.ceil(total / pageSize)
            }
        };
    }

    static async findById(id) {
        const [rows] = await db.query(
            `SELECT p.*, c.name as category_name
             FROM products p
             INNER JOIN categories c ON p.category_id = c.id
             WHERE p.id = ?`,
            [id]
        );
        return rows[0];
    }

    static async create(productData) {
        const { name, description, price, category_id } = productData;
        const [result] = await db.query(
            'INSERT INTO products (name, description, price, category_id) VALUES (?, ?, ?, ?)',
            [name, description, price, category_id]
        );
        return result.insertId;
    }

    static async update(id, productData) {
        const { name, description, price, category_id } = productData;
        const [result] = await db.query(
            'UPDATE products SET name = ?, description = ?, price = ?, category_id = ? WHERE id = ?',
            [name, description, price, category_id, id]
        );
        return result.affectedRows;
    }

    static async delete(id) {
        const [result] = await db.query('DELETE FROM products WHERE id = ?', [id]);
        return result.affectedRows;
    }
}

module.exports = Product;