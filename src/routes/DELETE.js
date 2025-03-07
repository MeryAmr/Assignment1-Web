const express = require('express');
const router = express.Router();
let bookarray = require('../data/books');
router.delete('/:id',(req, res) => {
    const bookid = bookarray.find(id => id.id === parseInt(req.params.id))
    if (!bookid) {
        res.status(404).send(`Couldn't find book with id ${req.params.id}`)
    }
    const bookIndex = bookarray.indexOf(bookid);
    bookarray.splice(bookIndex, 1)
    res.status(200).json(bookarray)
})
module.exports = router;