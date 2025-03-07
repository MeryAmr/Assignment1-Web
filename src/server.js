const express = require('express');
const app = express();
const port = 3000;
const get = require('./routes/GET');
const post = require('./routes/POST');
const put = require('./routes/PUT');
const del = require('./routes/DELETE');
const borrow = require('./routes/Borrow');
const returnBook = require('./routes/Return');
const authorizationMiddleWare = require('./middlewares/Authorization');
app.use(authorizationMiddleWare)
app.use(express.json())
app.use(get);
app.use('/books/', put);
app.use('/books/', post);
app.use('/books/', del);
app.use('/books/', borrow);
app.use('/books/', returnBook);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})