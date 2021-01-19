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
  database: 'reddit',
  insecureAuth: 'true',
});

conn.connect((err) => {
  if(err) throw err;
  console.log('Connected to mysql');
});


app.get('/', (req, res) => {
  res.sendFile(path.join('index.html'));
});

app.get('/hello', (req, res) => {
  res.send('hello word');
});

app.get('/posts', (req, res) => {
  conn.query('SELECT * FROM posts', (err, rows) => {
    if(err) {
      console.log(err.toString());
      res.status(500).json({'error': 'database error'});
      return;
    }
    res.setHeader('Content-type', 'application/json');
    res.status(200).json(rows);
  });
});


app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});