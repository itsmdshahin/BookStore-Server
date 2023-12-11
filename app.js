require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Update the path to mongoose
const cors = require('cors');
const errorHandling = require('./src/error/error-handling');
const app = express();

const connectDB = require('./config/database');
const router = require('./src/routes/bookRoutes');

// Call the connectDB function
connectDB();
const PORT = process.env.PORT || 5001;
const MONGODB_URL = process.env.MONGODB_URL;
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(
  {
    origin:["https://shahibookstore.vercel.app"],
    methods:["POST","GET"],
    credentials:true
  }
));



// Welcome message for the root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Book Store!',
  });
});

// Use bookRoutes for handling book-related routes
app.use('/api', router);

// Error Handling
app.use(errorHandling);



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
