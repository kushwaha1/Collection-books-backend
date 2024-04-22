// Get all books list
var db = require('../config/db');


// get books
const getBooks = async (req, res) => {
    try {   
        const data = await db.promise().query('SELECT * from books');
        if(data[0].length == 0) {
            return res.status(404).send({
                success: false,
                message: 'No Records found'
            })
        } else {
            res.status(200).send({
                success: true,
                message: 'Books found successfully',
                data: data[0]
            })
        }
    } catch (error) {
        console.log('error', error);
        res.status(500).send({
            success: false,
            message: 'Error in get all books api',
            error: error
        })
        
    }
};

// get book by id
const getBookById = async (req, res) => {
    try {
        const bookId = req.params.id;
        if(!bookId) {
            return res.status(404).send({
                success: false,
                message: 'Invalid book id'
            })
        }
        const data = await db.promise().query(`SELECT * from books where id = ?`, [bookId]);
        if(data[0].length == 0) {
            return res.status(404).send({
                success: false,
                message: 'No Records found'
            })
        } else {
            res.status(200).send({
                success: true,
                message: 'Book found successfully',
                data: data[0]
            })
        }
    } catch (error) {
        console.log('error', error);
        res.status(500).send({
            success: false,
            message: 'Error in get book by id api',
            error: error
        })
        
    }
};


// add books
const createBooks = async (req, res) => {
    try {
        const {title, author, description, publicationYear, ISBN} = req.body;
        if(!title || !author || !description || !publicationYear || !ISBN) {
            return res.status(400).send({
                success: false,
                message: 'Please provide all fields'
            })
        }
        const data = await db.promise().query(`INSERT INTO books(title, author, description, publicationYear, ISBN) VALUES (?,?,?,?,?)`, [title, author, description, publicationYear, ISBN]);
        if(data[0].length == 0) {
            return res.status(404).send({
                success: false,
                message: 'Error in insert query'
            })
        } else {
            res.status(200).send({
                success: true,
                message: 'Book created successfully',
            })
        }
    } catch (error) {
        console.log('error', error);
        res.status(500).send({
            success: false,
            message: 'Error in create books api',
            error: error
        })
        
    }
};


// update books
const updateBooks = async (req, res) => {
    try {
        const bookId = req.params.id;
        if(!bookId) {
            return res.status(404).send({
                success: false,
                message: 'Invalid book id'
            })
        }
        const {title, author, description, publicationYear, ISBN} = req.body;
        const data = await db.promise().query(`UPDATE books set title = ?, author = ?, description = ?, publicationYear = ?, ISBN = ? WHERE id = ?`, [title, author, description, publicationYear, ISBN, bookId]);
        if(data[0].length == 0) {
            return res.status(404).send({
                success: false,
                message: 'Error in update data'
            })
        } else {
            res.status(200).send({
                success: true,
                message: 'Book updated successfully',
            })
        }
    } catch (error) {
        console.log('error', error);
        res.status(500).send({
            success: false,
            message: 'Error in update books api',
            error: error
        })
        
    }
};


// delete books
const deleteBooks = async (req, res) => {
    try {
        const bookId = req.params.id;
        if(!bookId) {
            return res.status(404).send({
                success: false,
                message: 'Invalid book id'
            })
        }
        await db.promise().query(`DELETE FROM books WHERE id = ?`, [bookId]);
        res.status(200).send({
            success: true,
            message: 'Book deleted successfully',
        })   
    } catch (error) {
        console.log('error', error);
        res.status(500).send({
            success: false,
            message: 'Error in delete books api',
            error: error
        })
        
    }
};

// get book by ISBN
const getBookByISBN = async (req, res) => {
    try {
        const bookISBN = req.params.ISBN;
        const data = await db.promise().query(`SELECT * from books where ISBN = ?`, [bookISBN]);
        if(data[0].length == 0) {
            return res.status(404).send({
                success: false,
                message: 'No Records found'
            })
        } else {
            res.status(200).send({
                success: true,
                message: 'Book found successfully',
                data: data[0]
            })
        }
    } catch (error) {
        console.log('error', error);
        res.status(500).send({
            success: false,
            message: 'Error in get book by ISBN api',
            error: error
        })
        
    }
};

// update books by ISBN
const updateBooksByISBN = async (req, res) => {
    try {
        const bookISBN = req.params.ISBN;
        const bookISBNRecord = await db.promise().query(`SELECT * from books where ISBN = ?`, [bookISBN]);
        if(bookISBNRecord[0].length == 0) {
            return res.status(404).send({
                success: false,
                message: 'No Records found'
            })
        } else {
            const {title, author, description, publicationYear, ISBN} = req.body;
            const data = await db.promise().query(`UPDATE books set title = ?, author = ?, description = ?, publicationYear = ?, ISBN = ? WHERE ISBN = ?`, [title, author, description, publicationYear, ISBN, bookISBN]);
            if(data[0].length == 0) {
                return res.status(404).send({
                    success: false,
                    message: 'Error in update data'
                })
            } else {
                res.status(200).send({
                    success: true,
                    message: 'Book updated successfully',
                })
            }
        } 
    } catch (error) {
        console.log('error', error);
        res.status(500).send({
            success: false,
            message: 'Error in update books by ISBN api',
            error: error
        })
        
    }
};


// delete books by ISBN
const deleteBooksByISBN = async (req, res) => {
    try {
        const bookISBN = req.params.ISBN;
        const bookISBNRecord = await db.promise().query(`SELECT * from books where ISBN = ?`, [bookISBN]);
        if(bookISBNRecord[0].length == 0) {
            return res.status(404).send({
                success: false,
                message: 'No Records found'
            })
        }
        await db.promise().query(`DELETE FROM books WHERE ISBN = ?`, [bookISBN]);
        res.status(200).send({
            success: true,
            message: 'Book deleted successfully',
        })   
    } catch (error) {
        console.log('error', error);
        res.status(500).send({
            success: false,
            message: 'Error in delete books by ISBN api',
            error: error
        })
        
    }
};

module.exports = {
    getBooks,
    getBookById,
    createBooks,
    updateBooks,
    deleteBooks,
    getBookByISBN,
    updateBooksByISBN,
    deleteBooksByISBN
};