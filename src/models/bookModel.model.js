const mongoose = require('../../config/database');

const bookModelSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    publicationDate: {
        type: String,
        default: Date.now
    },
    date: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model('BookStore', bookModelSchema);

