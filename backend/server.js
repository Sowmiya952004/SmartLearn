// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Initialize dotenv to use environment variables
dotenv.config();

// Create an Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection string (from your .env file)
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/smart';

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mernApp')

  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the SMART website backend!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
