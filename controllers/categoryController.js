const Category = require('../models/Category');

const categoryController = {
    index: async (req, res) => {
        try {
            const categories = await Category.findAll();
            res.render('categories/index', { categories, message: req.query.message });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },

    create: (req, res) => {
        res.render('categories/create');
    },

    store: async (req, res) => {
        try {
            await Category.create(req.body);
            res.redirect('/categories?message=Category created successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },

    edit: async (req, res) => {
        try {
            const category = await Category.findById(req.params.id);
            res.render('categories/edit', { category });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },

    update: async (req, res) => {
        try {
            await Category.update(req.params.id, req.body);
            res.redirect('/categories?message=Category updated successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },

    destroy: async (req, res) => {
        try {
            await Category.delete(req.params.id);
            res.redirect('/categories?message=Category deleted successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
};

module.exports = categoryController;