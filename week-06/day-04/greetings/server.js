const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  let name = req.query.name;
  if (name == undefined) {
    res.render('home', {name: 'Guest'});
  } else {
    res.render('home', {name: name});
    }
});



// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});