const express = require('express');
const dotenv = require('dotenv');
const { getWordsCount } = require('./controllers/wordCount.controller.js');
dotenv.config({ path: '../config/.env' });

const router = express.Router();

// Short URL Generator
router.post('/word-count', getWordsCount);

module.exports = router;
