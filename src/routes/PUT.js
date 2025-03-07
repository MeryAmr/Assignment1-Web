const express = require('express');
const router = express.Router();
let bookarray = require('../data/books')
router.use(express.json())
router.put('/:id', (req, res) => {
    const bookid = bookarray.find(id => id.id === parseInt(req.params.id))
    if(!bookid){
        res.status(404).send(`Couldn't find book with id ${req.params.id}`)
    }
    bookid.title = req.body.title
    bookid.author = req.body.author
    res.status(200).json(bookid)
})
module.exports = router;