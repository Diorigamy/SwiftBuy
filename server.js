// server.js

const express = require('express');
const connectDB = require('./src/config/db');

// Initialize Express App
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Define Routes
app.use('/api/auth', require('./src/routes/authRoutes'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

