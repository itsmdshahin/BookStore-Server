const express = require('express');
const bookModelSchema = require('../models/bookModel.model');

const bookController = express.Router();

// Add Book
bookController.addBook = async (req, res) => {
  try {
    const { title, author, genre, publicationDate, date } = req.body;
    const newBook = new bookModelSchema({ title, author, genre, publicationDate, date });
    await newBook.save();
    
    // Send response with newly created book
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get All Books
bookController.getAllBooks = async (req, res) => {
  try {
    const allBooks = await bookModelSchema.find();
    res.json(allBooks);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get Book by ID
bookController.getBookById = async (req, res) => {
  try {
    const book = await bookModelSchema.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update Book by ID
bookController.updateBookById = async (req, res) => {
  try {
    const { title, author, genre } = req.body;
    const updateData = { title, author, genre };
    const updatedBook = await bookModelSchema.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete Book by ID
bookController.deleteBookById = async (req, res) => {
  try {
    const deletedBook = await bookModelSchema.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Successfully deleted the Book from the database!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = bookController;
