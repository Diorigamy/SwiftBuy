// notificationRoutes.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { sendEmailNotification, sendSMSNotification } = require('../services/notificationService');

// Send email notification
router.post('/email', auth, async (req, res) => {
    const { email, subject, message } = req.body;

    try {
        sendEmailNotification(email, subject, message);
        res.json({ msg: 'Email notification sent successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// Send SMS notification
router.post('/sms', auth, async (req, res) => {
    const { phoneNumber, message } = req.body;

    try {
        sendSMSNotification(phoneNumber, message);
        res.json({ msg: 'SMS notification sent successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;

