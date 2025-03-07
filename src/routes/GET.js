const express = require('express');
const router = express.Router();
let bookarray = require('../data/books')
router.get('/', (req, res) => {
    console.log("we on root here")
    res.json(bookarray);
})
router.get('/books', (req, res) => {
    console.log("we on books here")
    res.json(bookarray);
})
router.get('/books/:id', (req, res) => {
    const bookid = bookarray.find((id) => id.id === parseInt(req.params.id))
    if (!bookid) {
        res.status(404).send(`Couldn't find book with ID ${req.params.id}`)
    }
    res.status(200).send(bookid);
})
module.exports = router;
