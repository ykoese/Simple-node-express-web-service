const express = require('express');
const mongoose = require('mongoose');

const app = express();
const db = mongoose.connect('mongodb://localhost/book1API', { useNewUrlParser: true });
/* r */
const port = process.env.PORT || 3000;
const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book); // book coms from the model

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('welcome to api')
})

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`)
})
