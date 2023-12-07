require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Update the path to mongoose

const bookRoutes = require('./src/routes/bookRoutes');
const errorHandling = require('./src/error/error-handling');

const app = express();
const PORT = process.env.PORT || 5001;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Welcome message for the root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Book Store!',
  });
});

// Error Handling
app.use(errorHandling);

// Use bookRoutes for handling book-related routes
app.use('/api', bookRoutes);


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
