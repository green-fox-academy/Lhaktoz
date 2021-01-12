'use strict';

const express = require('express');
const path = require('path');

const app = express();
app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  if(!req.query.input) {
    res.status(200).json({"error": "Please provide an input!"})
  } else {
  res.json({"received": Number(req.query.input), "result": Number(req.query.input*2)});
}
});

app.listen(3000);