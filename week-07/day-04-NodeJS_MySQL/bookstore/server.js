'use strict'

const express = require('express');
const app = express();
const mysql = require('mysql');

const path = require('path');

app.use(express.json());
app.use(express.static('public'));

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore',
  insecureAuth: 'true',
});

conn.connect((err) => {
  if(err) throw err;
  console.log('Connected to mysql');
});

app.get('/', (req, res) => {
  res.sendFile(path.join('index.html'))
});

app.get('/books', (req, res) => {
  conn.query('SELECT book_name FROM book_mast', (err, rows) => {
    if(err) {
      // console.log(err.toString());
      res.status(500).json({'error': 'database error'});
      return;
    }
    res.status(200).json(rows);
  });
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});