// recommendationRoutes.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { generateRecommendations } = require('../services/recommendationService');

// Get personalized product recommendations for a user
router.get('/user/:userId', auth, async (req, res) => {
    try {
        const recommendations = await generateRecommendations(req.params.userId);
        res.json(recommendations);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;

