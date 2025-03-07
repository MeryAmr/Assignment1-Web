const express = require('express');
const router = express.Router();
let bookarray = require('../data/books');
router.patch('/borrow/:id', (req, res) => { 
    const bookid = bookarray.find(id => id.id === parseInt(req.params.id))
    if (!bookid) {
        res.status(404).send(`Couldn't find book with id ${req.params.id}`)
    }
    if (bookid.isBorrowed === true) {
        res.status(404).send(`Book with id ${req.params.id} is already borrowed`)
    }
    bookid.isBorrowed = true
    res.status(200).json(bookid)
})
module.exports = router;