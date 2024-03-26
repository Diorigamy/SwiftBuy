// src/routes/reviewRoutes.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Review = require('../models/Review');

// Add a review for a product
router.post('/add-review/:productId', auth, async (req, res) => {
    const { rating, comment } = req.body;
    const { productId } = req.params;

    try {
        const review = new Review({
            user: req.user.id,
            product: productId,
            rating,
            comment
        });

        await review.save();
        res.json(review);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// Get reviews for a product
router.get('/product/:productId', async (req, res) => {
    const { productId } = req.params;

    try {
        const reviews = await Review.find({ product: productId });
        res.json(reviews);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;

