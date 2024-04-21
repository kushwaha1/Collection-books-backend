const express = require('express');
const { getBooks, getBookById, createBooks, updateBooks, deleteBooks, getBookByISBN, updateBooksByISBN, deleteBooksByISBN } = require('../controllers/bookController');

const router = express.Router();

// Get all books list
router.get('/getAll', getBooks);

// Get book by id
router.get('/getBookById/:id', getBookById);

// add books
router.post('/addBooks', createBooks);

// update books
router.put('/updateBooks/:id', updateBooks);

// delete books
router.delete('/deleteBooks/:id', deleteBooks);

// Get book by id
router.get('/getBooksByISBN/:ISBN', getBookByISBN);

// update books
router.put('/updateBooksByISBN/:ISBN', updateBooksByISBN);

// delete books
router.delete('/deleteBooksByISBN/:ISBN', deleteBooksByISBN);

module.exports = router;