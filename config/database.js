const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DATABASE successfully Connected!");
    } catch (error) {
        console.error("Database is not connected: " + error);
        process.exit(1);
    }
};

module.exports = connectDB;