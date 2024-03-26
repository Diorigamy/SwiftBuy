// src/routes/wishlistRoutes.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Wishlist = require('../models/Wishlist');

// Get user's wishlist
router.get('/', auth, async (req, res) => {
    try {
        const wishlist = await Wishlist.findOne({ user: req.user.id }).populate('products');
        if (!wishlist) {
            return res.status(404).json({ msg: 'Wishlist not found' });
        }
        res.json(wishlist);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// Add product to wishlist
router.post('/add/:productId', auth, async (req, res) => {
    const { productId } = req.params;

    try {
        let wishlist = await Wishlist.findOne({ user: req.user.id });

        if (!wishlist) {
            wishlist = new Wishlist({ user: req.user.id, products: [] });
        }

        if (wishlist.products.includes(productId)) {
            return res.status(400).json({ msg: 'Product already in wishlist' });
        }

        wishlist.products.push(productId);
        await wishlist.save();
        res.json(wishlist);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;

