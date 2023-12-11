const express = require('express');
const router = express.Router();

// const bookController = require('../controllers/bookController');

const { getBooks, getBookById, createBook, updateBook, deleteBook, register, loginUser,ProfileData,getUserBooks } = require('../controllers/bookControllers');

/**
 * @route GET api/allbooks
 * @description get all books
 * @access public
 */

router.get('/allbooks', getBooks);

/**
 * @route GET api/allbooks/:id
 * @description get one book
 * @access public
 */

router.get('/allbooks/:id', getBookById);

/**
 * @router POST api/addabook
 * @description add a new book
 * @access public
 */

router.post('/addabook', createBook);


/**
 * @router PUT api/updatebook/:id
 * @description update book
 * @access public 
 */

router.put('/updatebook/:id', updateBook);

/**
 * @router DELETE api/deletebook/:id
 * @description delete book
 * @access public
 */

router.delete('/deletebook/:id', deleteBook);

router.post('/register', register);

router.post('/login', loginUser);

router.get('/profile/:id', ProfileData);

router.get('/books/user/:id', getUserBooks);


module.exports = router;