// src/routes/promotionRoutes.js

const express = require('express');
const router = express.Router();
const Promotion = require('../models/Promotion');

// Get all promotions
router.get('/', async (req, res) => {
    try {
        const promotions = await Promotion.find();
        res.json(promotions);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;

