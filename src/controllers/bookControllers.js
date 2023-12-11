const bcrypt = require('bcrypt');
const User = require('../models/User'); // Import your User model
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'jjkdjskdjkjdkdjkdjskdnsdsndskndj94949i4knfknfnie';
const bookModelSchema = require("../models/bookModel");



exports.getBooks = async (req, res) => {
  try {
    const books = await bookModelSchema.find();
    // console.log('Books:', books);
    res.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: error.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await bookModelSchema.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    const newBook = new bookModelSchema(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const updatedBook = await bookModelSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await bookModelSchema.findByIdAndDelete(req.params.id);
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.register = async (req, res) => {
  try {
    const { name, email, password, mobile } = req.body; // Added 'mobile' here
    const encryptedPassword = await bcrypt.hash(password, 10);
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(400).json({ error: "User Already Exists!" });
    }

    const newUser = new User({
      email,
      password: encryptedPassword,
      name,
      mobile,
    });

    await newUser.save();
    res.status(201).json(newUser);

  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ status: "USER NOT FOUND!" });
    }

    if (await bcrypt.compare(password, user.password)) {
      const userInfo = {
        id: user._id,
        email: user.email,
      };

      const token = jwt.sign(userInfo, JWT_SECRET);
      return res.status(200).json({ status: "valid user", data: token, id: userInfo.id, email: userInfo.email });
    } else {
      return res.status(401).json({ status: "Error", error: "Invalid Password!" });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.ProfileData = async (req, res) => {
  const userId = req.params.id;
  try {
    const userProfile = await User.findById(userId);
    // const bookCount = await bookModelSchema.find({});
    if (!userProfile) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({userProfile});
    
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


exports.getUserBooks = async (req, res) => {
  const UserId = req.params.id;
  console.log("This is API : "+UserId);
  try {
    const userBooks = await bookModelSchema.find({ UserId }); // Assuming you have a 'userId' field in your book model

    res.json({ status: "ok", UserId, bookCount: userBooks });

  } catch (error) {
    console.error('Error fetching user books:', error);
    res.status(500).json({ message: 'Server error' });
  }
};