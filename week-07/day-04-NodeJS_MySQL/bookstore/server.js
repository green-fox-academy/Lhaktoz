'use strict'

const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.json());

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore'
});

conn.connect((err) => {
  if(err) throw err;
  console.log('Connected to mysql');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})


app.get('/books', (req,res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if(err) {
      console.log(err.toString());
      res.status(500).json({'error': 'database error'});
      return;
    }
    res.send(rows);
  });
});

app.listen(3000);