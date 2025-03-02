const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

let bookarray = [
    {id:1, title: "Fate/stay night", author: "nasu"},
    {id:2, title: "Berserk", author: "Kentaru Miura"},
    {id:3, title: "JJK", author: "Gege Akutami"},
]
app.get('/', (req, res) => {
    console.log("we on root here")
    res.json(bookarray);
})
app.get('/books', (req, res) => {
    console.log("we on books here")
    res.json(bookarray);
})
app.get('/books/:id', (req, res) => {
    const bookid = bookarray.find((id) => id.id === parseInt(req.params.id))
    if (!bookid) {
        res.status(404).send(`Couldn't find book with ID ${req.params.id}`)
    }
    res.status(200).send(bookid);
})

app.post('/books/', (req, res) => {
    const newBook = {
        id: bookarray.length + 1,
        title: req.body.title,
        author: req.body.author
    }
    bookarray.push(newBook);
    res.status(200).json(newBook);
})
app.put('/books/:id', (req, res) => {
    const bookid = bookarray.find(id => id.id === parseInt(req.params.id))
    if(!bookid){
        res.status(404).send(`Couldn't find book with id ${req.params.id}`)
    }
    bookid.title = req.body.title
    bookid.author = req.body.author
    res.status(200).json(bookid)
})
app.delete('/books/:id',(req, res) => {
    const bookid = bookarray.find(id => id.id === parseInt(req.params.id))
    if (!bookid) {
        res.status(404).send(`Couldn't find book with id ${req.params.id}`)
    }
    const bookIndex = bookarray.indexOf(bookid);
    bookarray.splice(bookIndex, 1)
    res.status(200).json(bookarray)
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})