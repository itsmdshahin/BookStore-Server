













// const express = require('express');
// const router = express.Router(); 
// const bookModelSchema = require('../models/bookModel.model');
// // POST endpoint to add a book
// router.post('/addabook', async (req, res) => {
//     try {
//         const {
//             title,
//             author,
//             genre,
//             publicationDate,
//             date
//         } = req.body;

//         const newBook = new bookModelSchema({
//             title,
//             author,
//             genre,
//             publicationDate,
//             date
//         });

//         await newBook.save();
//         res.status(201).json(newBook);
//         console.log("Successfully Published A Book");
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' + error });
//     }
// });

// // GET endpoint to retrieve all books 
// router.get('/allbooks', async (req, res) => {
//     try {
//         const allBooks = await bookModelSchema.find();
//         res.json(allBooks);
//         console.log('Successfully Get All Books!');
//     } catch (error) {
//         console.error('Error fetching all books:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });



// // GET/:id endpoint
// router.get('/allbooks/:id', async (req, res) => {
//     try {
//         const OneBook = await bookModelSchema.findById(req.params.id);
//         if (!OneBook) {
//             return res.status(404).json({ error: "Book is not found!" });
//         }
//         res.json(OneBook);
//         console.log("Book is Founded");
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' + error });
//     }
// });

// // PUT/:id endpoint
// router.put('/updatebook/:id', async (req, res) => {
//     try {
//         const {
//             title,
//             author,
//             genre,
//             publicationDate,
//             date
//         } = req.body;
//         const updateBook = await bookModelSchema.findByIdAndUpdate(
//             req.params.id,
//             {
//                 title,
//                 author,
//                 genre,
//                 publicationDate
//             },
//             {
//                 new: true
//             }
//         )
//         if (!updateBook) {
//             return res.status(404).json({ error: 'Book is not found' });
//         }
//         res.json(updateBook);
//         console.log("Successfully Updated the book!");
//     }
//     catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' + error });
//     }
// });

// // delete/:id
// router.delete('/deletebook/:id', async (req, res) => {
//     try {
//         const deleteBook = await bookModelSchema.findByIdAndDelete(req.params.id);
//         if (!deleteBook) {
//             return res.status(404).json({ error: 'Book is not found' });
//         }
//         res.json({
//             message: "Successfully deleted the Book from the database!",
//         });
//     }
//     catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' + error });
//     }
// });

// module.exports = router;
