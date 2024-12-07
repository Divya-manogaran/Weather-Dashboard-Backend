const express = require('express');
const { saveWeather, getWeather } = require('../controllers/weatherController');
const router = express.Router();

router.post('/', saveWeather);
router.get('/', getWeather);

module.exports = router;
