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
  // res.sendFile(path.join(__dirname, 'index.html'));
  res.send('működik')
})


app.get('/books', (req,res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if(err) {
      console.log(err.toString());
      res.status(500).json({'error': 'database error'});
      return;
    }
    res.json(rows);
  });
});

app.get('/booksdetails', (req,res) => {
  let longquery = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
  FROM  book_mast 
  INNER JOIN author ON book_mast.aut_id = author.aut_id 
  INNER JOIN category ON book_mast.cate_id = category.cate_id 
  INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id;`

  conn.query(longquery, (err, rows) => {
    if(err) {
      console.log(err.toString());
      res.status(500).json({'error': 'database error'});
      return;
    }
    res.json(rows);
  });
});


app.get('/booksdetails:filter', (req,res) => {


  let longquery = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price 
  FROM  book_mast 
  INNER JOIN author ON book_mast.aut_id = author.aut_id 
  INNER JOIN category ON book_mast.cate_id = category.cate_id 
  INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id
  WHERE cate_descript = (?);`

  conn.query(longquery, [req.params.filter], (err, rows) => {
    if(err) {
      console.log(err.toString());
      res.status(500).json({'error': 'database error'});
      return;
    }
    res.json(rows);
  });
});




app.listen(3000);