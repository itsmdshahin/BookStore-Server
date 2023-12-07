const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');

router.get('/allbooks', bookController.getAllBooks);

router.get('/allbooks/:id', bookController.getBookById);

router.post('/addabook', bookController.addBook);

router.put('/updatebook/:id', bookController.updateBookById);

router.delete('/deletebook/:id', bookController.deleteBookById);

module.exports = router;
