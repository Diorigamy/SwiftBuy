// src/routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Order = require('../models/Order');
const Cart = require('../models/Cart');

// Place a new order
router.post('/place-order', auth, async (req, res) => {
    const { shippingAddress, paymentMethod } = req.body;

    try {
        // Get user's cart
        const cart = await Cart.findOne({ user: req.user.id }).populate('items.product', ['name', 'price']);
        if (!cart) {
            return res.status(404).json({ msg: 'Cart not found' });
        }

        // Calculate total price
        let totalPrice = 0;
        cart.items.forEach(item => {
            totalPrice += item.product.price * item.quantity;
        });

        // Create new order
        const order = new Order({
            user: req.user.id,
            items: cart.items,
            shippingAddress,
            paymentMethod,
            totalPrice
        });

        await order.save();

        // Clear user's cart
        cart.items = [];
        await cart.save();

        res.json(order);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// Get user's orders
router.get('/', auth, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id }).sort({ date: -1 });
        res.json(orders);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;

