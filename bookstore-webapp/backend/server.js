// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();  // Loading environment variables

const app = express();  // Initialize express app

const port = process.env.PORT || 5000;  // Default port 5000 if not set in .env

// Middleware
app.use(cors());  // Enabling Cross-Origin Resource Sharing
app.use(express.json());  // For parsing JSON request bodies

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(express.static('frontend'));

// Routes
const bookRoutes = require('./routes/bookRouters');
app.use('/api/books', bookRoutes);  // Registering API route

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

