// flashSaleRoutes.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const FlashSale = require('../models/FlashSale');

// Get active flash sales
router.get('/active', async (req, res) => {
    try {
        const currentTime = new Date();
        const activeFlashSales = await FlashSale.find({ startTime: { $lt: currentTime }, endTime: { $gt: currentTime } }).populate('product');
        res.json(activeFlashSales);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;

