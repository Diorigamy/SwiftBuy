// src/routes/searchRoutes.js

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Search products by name
router.get('/products', async (req, res) => {
    const { query } = req.query;

    try {
        const products = await Product.find({ $text: { $search: query } });
        res.json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;

