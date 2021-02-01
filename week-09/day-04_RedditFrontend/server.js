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
  // console.log(request.headers)
//res.sendFile(path.join(__dirname, 'index.html'));
// res.sendFile(__dirname + '/index.html');
});


app.get('/addpost', (req, res) => {
  res.sendFile(__dirname + '/public/post.html');
})


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
    //res.setHeader('Content-type', 'application/json');
    res.status(200).json(rows);
  });
});

app.post('/posts', (req, res) => {
  conn.query(`INSERT INTO posts (title, url) VALUES (?,?);`, [req.body.title, req.body.url], (err, rows) => {
    if(err){
      res.status(500).json(err);
      return
    }
    conn.query('SELECT * FROM posts WHERE id=(SELECT MAX(id) FROM posts);', (err,rows) => {
      if(err){
       res.status(500).json(err);
       return
       }
       res.status(200).json(rows);
    })    
  });
});


app.put(`/posts/:id/upvote`, (req, res) => {
  conn.query(`UPDATE posts SET score = score + 1 WHERE id = ?;`, [req.params.id], (err, rows) => {
    if(err){
      res.status(500).json(err);
      return
    }
    conn.query(`SELECT * FROM posts WHERE id = ?;`, [req.params.id], (err, rows) => {
      if(err){
        res.status(500).json(err);
      }
    })
      res.status(200).json(rows);
     });
    
  });

app.put(`/posts/:id/downvote`, (req, res) => {
  conn.query(`UPDATE posts SET score = score - 1 WHERE id = ?;`, [req.params.id], (err, rows) => {
    if(err){
       res.status(500).json(err);
       return
     }
     conn.query(`SELECT * FROM posts WHERE id = ?;`, [req.params.id], (err, rows) => {
      if(err){
        res.status(500).json(err);
      }
    })
      res.status(200).json(rows);
     });
   });

app.delete(`/posts/:id`, (req, res) => {
  conn.query(`DELETE FROM posts WHERE id = ?;`, [req.params.id], (err, rows) => {
    if(err){
      res.status(500).json(err);
      return
    }
    res.setHeader('Content-type', 'application/json');
    res.status(200).json(rows);
  });
});

app.put(`/posts/:id`, (req, res) => {
  conn.query(`UPDATE posts SET title = ? WHERE id = ?;`, [req.body.title, req.params.id], (err, rows) => {
    if(err){
       res.status(500).json(err);
       return
     }
      res.status(200).json(rows);
      res.setHeader('Content-type', 'application/json');
     });
   });


app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});