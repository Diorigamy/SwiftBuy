// FlashSale.js

const mongoose = require('mongoose');

const FlashSaleSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('FlashSale', FlashSaleSchema);

