const Product = require('../models/Product');
const Category = require('../models/Category');

const productController = {
    index: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const pageSize = parseInt(req.query.pageSize) || 10;
            
            const result = await Product.findAll(page, pageSize);
            
            res.render('products/index', {
                products: result.products,
                pagination: result.pagination,
                message: req.query.message
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },

    create: async (req, res) => {
        try {
            const categories = await Category.findAll();
            res.render('products/create', { categories });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },

    store: async (req, res) => {
        try {
            await Product.create(req.body);
            res.redirect('/products?message=Product created successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },

    edit: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            const categories = await Category.findAll();
            res.render('products/edit', { product, categories });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },

    update: async (req, res) => {
        try {
            await Product.update(req.params.id, req.body);
            res.redirect('/products?message=Product updated successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    },

    destroy: async (req, res) => {
        try {
            await Product.delete(req.params.id);
            res.redirect('/products?message=Product deleted successfully');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
};

module.exports = productController;
