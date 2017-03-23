const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const userController = require('./controllers/user');
// const homeController = require('./controllers/home');
// const creationController = require('./controllers/creation');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// // Definissez ejs comme 'view engine'
// pour servir les pages statiques
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Pour la route ci-dessous ('/'), utilisez 'res.render' pour charger le template ejs désiré :
// index page

app.use(express.static('client/build/'));

app.get('/about', (req, res) => {
  res.render('pages/about');
});

// routes pour servir react app
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

//app.get('/user/:id', userController);


//app.post('/creation', creationController.post);

app.listen(8080, (err) => {
  if(err) {
    throw(err);
  }

  console.log('server is running on http://localhost:8080');

});
