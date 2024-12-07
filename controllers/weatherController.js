const Weather = require('../models/weather');

// Save weather data
const saveWeather = async (req, res) => {
    const { city, temperature, condition } = req.body;

    try {
        if (!city || !temperature || !condition) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newWeather = new Weather({ city, temperature, condition });
        await newWeather.save();
        res.status(201).json({ message: 'Weather data saved successfully', data: newWeather });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Get weather data
const getWeather = async (req, res) => {
    try {
        const weatherData = await Weather.find();
        res.json(weatherData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { saveWeather, getWeather };
