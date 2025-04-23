// routes/bookRouters.js

const express = require('express');
const router = express.Router();
const Book = require('../models/Book'); // Make sure this path is correct

// Add new book
router.post('/', async (req, res) => {
    try {
        const { title, author, price } = req.body;
        const book = new Book({ title, author, price });
        await book.save();
        res.status(201).json({ message: 'Book added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
