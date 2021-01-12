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

app.get('/greeter', (req, res) => {
  if(!req.query.name && !req.query.title){
    res.status(400).json({"error": "Please provide a name and a title!"})
  }else if(!req.query.name) {
    res.status(400).json({"error": "Please provide a name!"})
   } else if(!req.query.title){
    res.status(400).json({"error": "Please provide a title!"})
   }
   else {
    res.json({"welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`})
    }
  });

app.listen(3000);