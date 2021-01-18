'use strict'

const express = require('express');
const app = express();
const mysql = require('mysql');

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
  res.sendFile(path.join('index.html'));
})


app.get('/booktitles', (req,res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if(err) {
      console.log(err.toString());
      res.status(500).json({'error': 'database error'});
      return;
    }
    res.json(rows);
  });
});



app.get('/books', (req,res) => {
  let category = '';
  let publisher = '';
  let plt = 0;
  let pgt = 0;

  let longquery = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
  FROM  book_mast 
  INNER JOIN author ON book_mast.aut_id = author.aut_id 
  INNER JOIN category ON book_mast.cate_id = category.cate_id 
  INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id
  WHERE cate_descrip LIKE (?)
  AND pub_name LIKE (?);`;
  // AND book_price < (?)
  // AND book_price > (?);`;

  if (!req.query.category) {
    category = '%';
  } else {
    category = req.query.category;
  }

  if(!req.query.publisher) {
    publisher = '%';
  } else {
    publisher = req.query.publisher;
  }

  conn.query(longquery, [category, publisher], (err, rows) => {
    if(err) {
      console.log(err.toString());
      res.status(500).json({'error': 'database error'});
      return;
    }
    res.json(rows); 
  });
});


app.listen(3000);
