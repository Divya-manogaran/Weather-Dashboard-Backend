const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

app.use('/api/auth', authRoutes); // Authentication routes
app.use('/api/weather', weatherRoutes); // Weather routes

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully!'))
    .catch((err) => console.error('Database connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
