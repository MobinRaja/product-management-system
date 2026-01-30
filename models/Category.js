const db = require('../config/database');

class Category {
    static async findAll() {
        const [rows] = await db.query('SELECT * FROM categories ORDER BY id DESC');
        return rows;
    }

    static async findById(id) {
        const [rows] = await db.query('SELECT * FROM categories WHERE id = ?', [id]);
        return rows[0];
    }

    static async create(categoryData) {
        const { name, description } = categoryData;
        const [result] = await db.query(
            'INSERT INTO categories (name, description) VALUES (?, ?)',
            [name, description]
        );
        return result.insertId;
    }

    static async update(id, categoryData) {
        const { name, description } = categoryData;
        const [result] = await db.query(
            'UPDATE categories SET name = ?, description = ? WHERE id = ?',
            [name, description, id]
        );
        return result.affectedRows;
    }

    static async delete(id) {
        const [result] = await db.query('DELETE FROM categories WHERE id = ?', [id]);
        return result.affectedRows;
    }
}

module.exports = Category;