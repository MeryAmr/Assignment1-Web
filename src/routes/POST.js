const express = require('express');
const router = express.Router();
let bookarray = require('../data/books')
router.use(express.json())

router.post('/', (req, res) => {
    const newBook = {
        id: bookarray.length + 1,
        title: req.body.title,
        author: req.body.author
    }
    if (!newBook.title || !newBook.author) {
        res.status(404).send({ message: "Please provide both title and author"})
    }
    bookarray.push(newBook);
    res.status(200).json(newBook);
})
module.exports = router;