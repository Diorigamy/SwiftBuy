// searchService.js

const Product = require('../models/Product');

const searchProducts = async (query) => {
    try {
        const products = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { category: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } }
            ]
        });
        return products;
    } catch (error) {
        console.error(error.message);
        throw new Error('Error searching products');
    }
};

module.exports = { searchProducts };

